import sharp from 'sharp';

async function testScreenWatermark2() {
  const testInput = './public/assets/images/real/signature-royal-wedding-mandap.jpg';
  const testOutput = './public/assets/images/real/test-screen-bar2.webp';

  const metadata = await sharp(testInput).metadata();
  const width = metadata.width || 1200;
  const height = metadata.height || 800;

  // Exact proportion from reference screenshot
  const isPortrait = height > width;
  const barYRatio = isPortrait ? 0.62 : 0.72;

  const barHeight = Math.max(32, Math.min(70, Math.round(height * 0.055)));
  const barY = Math.round(height * barYRatio - barHeight / 2);
  const fontSize = Math.max(16, Math.min(38, Math.round(barHeight * 0.55)));

  // Exactly 3 instances: Left, Center, Right (matching reference screenshot)
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
      <!-- Full-width translucent black horizontal bar -->
      <rect x="0" y="${barY}" width="${width}" height="${barHeight}" 
            fill="#000000" fill-opacity="0.52" />
      <line x1="0" y1="${barY}" x2="${width}" y2="${barY}" stroke="#FFFFFF" stroke-opacity="0.2" stroke-width="1.2" />
      <line x1="0" y1="${barY + barHeight}" x2="${width}" y2="${barY + barHeight}" stroke="#FFFFFF" stroke-opacity="0.2" stroke-width="1.2" />
      
      <!-- 3 Repeated website names -->
      ${textNodes}
    </svg>
  `;

  await sharp(testInput)
    .composite([
      {
        input: Buffer.from(svgWatermark),
        top: 0,
        left: 0,
      },
    ])
    .webp({ quality: 86, effort: 4 })
    .toFile(testOutput);

  console.log('Generated test bar watermark 2:', testOutput);
}

testScreenWatermark2();
