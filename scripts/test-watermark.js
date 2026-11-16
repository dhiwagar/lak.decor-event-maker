import sharp from 'sharp';
import fs from 'fs';

async function testWatermark() {
  const testInput = './public/assets/images/real/signature-royal-wedding-mandap.jpg';
  const testOutput = './public/assets/images/real/test-watermarked.webp';

  const metadata = await sharp(testInput).metadata();
  const width = metadata.width || 1200;
  const height = metadata.height || 800;

  const fontSize = Math.max(18, Math.min(52, Math.round(width * 0.032)));
  const pillWidth = Math.round(fontSize * 17);
  const pillHeight = Math.round(fontSize * 2.8);
  const pillX = Math.round((width - pillWidth) / 2);
  const pillY = Math.round((height - pillHeight) / 2);

  const svgWatermark = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.7"/>
        </filter>
      </defs>
      <!-- Center Translucent Pill -->
      <rect x="${pillX}" y="${pillY}" width="${pillWidth}" height="${pillHeight}" rx="${Math.round(pillHeight / 2)}" 
            fill="#12100E" fill-opacity="0.55" stroke="#FFFFFF" stroke-opacity="0.3" stroke-width="1.5" />
      
      <!-- Brand Subtitle -->
      <text x="${width / 2}" y="${pillY + fontSize * 0.9}" 
            text-anchor="middle" dominant-baseline="middle" 
            font-family="Arial, Helvetica, sans-serif" font-size="${Math.round(fontSize * 0.42)}" font-weight="600" 
            letter-spacing="3" fill="#D4AF37" fill-opacity="0.95">LAK.DECOR &amp; EVENT MAKER</text>

      <!-- URL Watermark -->
      <text x="${width / 2}" y="${pillY + fontSize * 1.85}" 
            text-anchor="middle" dominant-baseline="middle" 
            font-family="Arial, Helvetica, sans-serif" font-size="${Math.round(fontSize * 0.72)}" font-weight="bold" 
            letter-spacing="1.5" fill="#FFFFFF" fill-opacity="0.95" filter="url(#shadow)">https://www.lakdecor.com</text>
    </svg>
  `;

  await sharp(testInput)
    .composite([
      {
        input: Buffer.from(svgWatermark),
        gravity: 'center',
      },
    ])
    .webp({ quality: 85 })
    .toFile(testOutput);

  console.log('Successfully generated test watermarked webp:', testOutput);
}

testWatermark();
