import sharp from 'sharp';

async function testWatermark2() {
  const testInput = './public/assets/images/real/birthday-sarvesh-balloon-clouds.jpg';
  const testOutput = './public/assets/images/real/test-watermarked-birthday.webp';

  const metadata = await sharp(testInput).metadata();
  const width = metadata.width || 1200;
  const height = metadata.height || 800;

  const fontSize = Math.max(22, Math.min(60, Math.round(width * 0.038)));
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

  await sharp(testInput)
    .composite([
      {
        input: Buffer.from(svgWatermark),
        gravity: 'center',
      },
    ])
    .webp({ quality: 85 })
    .toFile(testOutput);

  console.log('Successfully generated test watermarked webp 2:', testOutput);
}

testWatermark2();
