import sharp from 'sharp';

async function testScreenWatermark() {
  // Use the original unwatermarked JPG
  const testInput = './public/assets/images/real/signature-royal-wedding-mandap.jpg';
  const testOutput = './public/assets/images/real/test-screen-bar.webp';

  const metadata = await sharp(testInput).metadata();
  const width = metadata.width || 1200;
  const height = metadata.height || 800;

  // Bar height ~ 4.8% of image height (matching reference screenshot)
  const barHeight = Math.max(26, Math.min(65, Math.round(height * 0.052)));
  const barY = Math.round(height * 0.68 - barHeight / 2);
  const fontSize = Math.max(13, Math.min(28, Math.round(barHeight * 0.44)));

  // Calculate repetition count based on width
  // Each "www.lakdecor.com" with gap takes approx fontSize * 18 px
  const itemWidth = fontSize * 16;
  const repeatCount = Math.max(2, Math.min(5, Math.floor(width / itemWidth)));
  const step = width / repeatCount;

  let textNodes = '';
  for (let i = 0; i < repeatCount; i++) {
    const x = Math.round(step * i + step / 2);
    textNodes += `
      <text x="${x}" y="${barY + barHeight / 2 + fontSize * 0.35}" 
            text-anchor="middle" dominant-baseline="middle" 
            font-family="Arial, Helvetica, sans-serif" font-size="${fontSize}" font-weight="500" 
            letter-spacing="1" fill="#FFFFFF" fill-opacity="0.92">www.lakdecor.com</text>
    `;
  }

  const svgWatermark = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <!-- Full-width translucent black horizontal bar -->
      <rect x="0" y="${barY}" width="${width}" height="${barHeight}" 
            fill="#000000" fill-opacity="0.48" />
      <line x1="0" y1="${barY}" x2="${width}" y2="${barY}" stroke="#FFFFFF" stroke-opacity="0.15" stroke-width="1" />
      <line x1="0" y1="${barY + barHeight}" x2="${width}" y2="${barY + barHeight}" stroke="#FFFFFF" stroke-opacity="0.15" stroke-width="1" />
      
      <!-- Repeated website name www.lakdecor.com -->
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

  console.log('Generated test bar watermark:', testOutput);
}

testScreenWatermark();
