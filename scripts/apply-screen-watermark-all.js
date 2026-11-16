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
    if (file === 'logo.jpeg') continue; // Do not watermark the logo

    const inputPath = path.join(dirPath, file);
    const baseName = file.replace(/\.(jpe?g)$/i, '');
    const outputPath = path.join(dirPath, `${baseName}.webp`);

    try {
      const metadata = await sharp(inputPath).metadata();
      const width = metadata.width || 1200;
      const height = metadata.height || 800;

      // Exact proportion from reference screenshot (Sigaram Decors style)
      const isPortrait = height > width;
      const barYRatio = isPortrait ? 0.62 : 0.72;

      const barHeight = Math.max(30, Math.min(70, Math.round(height * 0.055)));
      const barY = Math.round(height * barYRatio - barHeight / 2);
      const fontSize = Math.max(15, Math.min(38, Math.round(barHeight * 0.54)));

      // 3 instances: Left (18%), Center (50%), Right (82%)
      const positions = [width * 0.18, width * 0.50, width * 0.82];

      let textNodes = '';
      positions.forEach(x => {
        textNodes += `
          <text x="${Math.round(x)}" y="${barY + barHeight / 2 + fontSize * 0.35}" 
                text-anchor="middle" dominant-baseline="middle" 
                font-family="Arial, Helvetica, sans-serif" font-size="${fontSize}" font-weight="bold" 
                letter-spacing="0.5" fill="#FFFFFF" fill-opacity="0.95">www.lakdecor.com</text>
        `;
      });

      const svgWatermark = `
        <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
          <!-- Full-width translucent black horizontal bar matching screenshot -->
          <rect x="0" y="${barY}" width="${width}" height="${barHeight}" 
                fill="#000000" fill-opacity="0.52" />
          <line x1="0" y1="${barY}" x2="${width}" y2="${barY}" stroke="#FFFFFF" stroke-opacity="0.2" stroke-width="1.2" />
          <line x1="0" y1="${barY + barHeight}" x2="${width}" y2="${barY + barHeight}" stroke="#FFFFFF" stroke-opacity="0.2" stroke-width="1.2" />
          
          <!-- 3 Repeated website names: www.lakdecor.com -->
          ${textNodes}
        </svg>
      `;

      await sharp(inputPath)
        .composite([
          {
            input: Buffer.from(svgWatermark),
            top: 0,
            left: 0,
          },
        ])
        .webp({ quality: 86, effort: 4 })
        .toFile(outputPath);

      count++;
      console.log(`[${count}] Re-generated WebP with screen watermark: ${baseName}.webp`);
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }

  return count;
}

async function run() {
  console.log('--- Applying Sigaram-style screen bar watermark www.lakdecor.com to all WebP images ---');
  
  const realCount = await processDirectory('./public/assets/images/real');
  console.log(`Successfully processed ${realCount} images in public/assets/images/real/`);

  const imagesCount = await processDirectory('./public/assets/images');
  console.log(`Successfully processed ${imagesCount} images in public/assets/images/`);

  console.log('--- COMPLETE: All images now have the exact watermark bar from reference screenshot ---');
}

run();
