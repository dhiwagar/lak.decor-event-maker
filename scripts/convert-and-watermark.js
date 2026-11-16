import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) return 0;
  const files = fs.readdirSync(dirPath);
  let count = 0;

  for (const file of files) {
    if (!file.match(/\.(jpe?g)$/i)) continue;
    if (file.startsWith('test-')) continue;
    if (file === 'logo.jpeg') continue; // Don't watermark the business logo

    const inputPath = path.join(dirPath, file);
    const baseName = file.replace(/\.(jpe?g)$/i, '');
    const outputPath = path.join(dirPath, `${baseName}.webp`);

    try {
      const metadata = await sharp(inputPath).metadata();
      const width = metadata.width || 1200;
      const height = metadata.height || 800;

      // Scale font and pill relative to image width
      const fontSize = Math.max(20, Math.min(60, Math.round(width * 0.038)));
      const pillWidth = Math.round(fontSize * 16.5);
      const pillHeight = Math.round(fontSize * 2.8);
      const pillX = Math.round((width - pillWidth) / 2);
      const pillY = Math.round((height - pillHeight) / 2);

      const svgWatermark = `
        <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.8"/>
            </filter>
          </defs>
          <!-- Center Translucent Pill -->
          <rect x="${pillX}" y="${pillY}" width="${pillWidth}" height="${pillHeight}" rx="${Math.round(pillHeight / 2)}" 
                fill="#14110E" fill-opacity="0.62" stroke="#E5C378" stroke-opacity="0.4" stroke-width="1.8" />
          
          <!-- Brand Subtitle -->
          <text x="${width / 2}" y="${pillY + pillHeight * 0.36}" 
                text-anchor="middle" dominant-baseline="middle" 
                font-family="Arial, Helvetica, sans-serif" font-size="${Math.round(fontSize * 0.44)}" font-weight="600" 
                letter-spacing="2.5" fill="#E8D8B8" fill-opacity="0.95">LAK.DECOR &amp; EVENT MAKER</text>

          <!-- URL Watermark -->
          <text x="${width / 2}" y="${pillY + pillHeight * 0.72}" 
                text-anchor="middle" dominant-baseline="middle" 
                font-family="Arial, Helvetica, sans-serif" font-size="${Math.round(fontSize * 0.76)}" font-weight="bold" 
                letter-spacing="1" fill="#FFFFFF" fill-opacity="1" filter="url(#shadow)">https://www.lakdecor.com</text>
        </svg>
      `;

      await sharp(inputPath)
        .composite([
          {
            input: Buffer.from(svgWatermark),
            gravity: 'center',
          },
        ])
        .webp({ quality: 86, effort: 4 })
        .toFile(outputPath);

      count++;
      console.log(`[${count}] Converted & watermarked: ${file} -> ${baseName}.webp`);
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }

  return count;
}

async function run() {
  console.log('--- Converting JPG to WebP and adding center watermark https://www.lakdecor.com ---');
  
  const realCount = await processDirectory('./public/assets/images/real');
  console.log(`Processed ${realCount} images in public/assets/images/real/`);

  const imagesCount = await processDirectory('./public/assets/images');
  console.log(`Processed ${imagesCount} images in public/assets/images/`);

  // Update references in source code
  const filesToUpdate = [
    './src/data/gallery.ts',
    './src/data/services.ts',
    './src/data/projects.ts',
    './src/pages/Home/index.tsx',
    './src/pages/About/index.tsx',
    './src/pages/OurWork/index.tsx',
    './src/pages/Services/index.tsx',
  ];

  for (const filePath of filesToUpdate) {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      const original = content;
      // Replace .jpg and .jpeg with .webp in asset paths
      content = content.replace(/\/assets\/images\/(real\/)?([a-zA-Z0-9_\-]+)\.(jpg|jpeg)/g, '/assets/images/$1$2.webp');
      if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated image paths in ${filePath}`);
      }
    }
  }

  console.log('--- ALL CONVERSIONS AND PATH UPDATES COMPLETED SUCCESSFULLY ---');
}

run();
