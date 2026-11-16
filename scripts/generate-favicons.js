import sharp from 'sharp';

async function generateFavicons() {
  const input = './src/assets/logo.webp';
  
  // Crop the rounded box with the LAK logo
  // The image is 828 x 758. The white margin surrounds the card.
  // Let's trim white border or extract the central logo card
  const trimmed = await sharp(input)
    .trim({ threshold: 10 })
    .toBuffer({ resolveWithObject: true });
    
  console.log('Trimmed dimensions:', trimmed.info.width, 'x', trimmed.info.height);

  // We want a square favicon (e.g. 512x512, 192x192, 64x64, 32x32)
  // Let's create a square canvas with rounded corners or padding
  const size = 512;
  const padding = 40;
  const fitWidth = size - (padding * 2);

  // Resize trimmed logo to fit inside fitWidth
  const resizedLogo = await sharp(trimmed.data)
    .resize({
      width: fitWidth,
      height: fitWidth,
      fit: 'inside',
    })
    .toBuffer({ resolveWithObject: true });

  // Composite onto a square background (rounded white badge with subtle shadow or clean white circle)
  // Making a circular or rounded square badge:
  const badgeSvg = `
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="#000000" flood-opacity="0.15"/>
        </filter>
      </defs>
      <!-- Rounded square background -->
      <rect x="16" y="16" width="${size - 32}" height="${size - 32}" rx="110" fill="#FFFFFF" filter="url(#shadow)" stroke="#E5E0D8" stroke-width="6"/>
    </svg>
  `;

  const topOffset = Math.round((size - resizedLogo.info.height) / 2);
  const leftOffset = Math.round((size - resizedLogo.info.width) / 2);

  const favicon512 = await sharp(Buffer.from(badgeSvg))
    .composite([
      {
        input: resizedLogo.data,
        top: topOffset,
        left: leftOffset,
      }
    ])
    .png()
    .toFile('./public/favicon-512.png');

  // Generate 192x192
  await sharp('./public/favicon-512.png')
    .resize(192, 192)
    .png()
    .toFile('./public/favicon-192.png');

  // Generate apple-touch-icon (180x180)
  await sharp('./public/favicon-512.png')
    .resize(180, 180)
    .png()
    .toFile('./public/apple-touch-icon.png');

  // Generate 48x48
  await sharp('./public/favicon-512.png')
    .resize(48, 48)
    .png()
    .toFile('./public/favicon-48.png');

  // Generate 32x32 standard favicon
  await sharp('./public/favicon-512.png')
    .resize(32, 32)
    .png()
    .toFile('./public/favicon-32.png');

  // Generate standard favicon.ico / favicon.png
  await sharp('./public/favicon-512.png')
    .resize(32, 32)
    .png()
    .toFile('./public/favicon.png');

  // Generate favicon.ico
  await sharp('./public/favicon-512.png')
    .resize(32, 32)
    .toFile('./public/favicon.ico');

  console.log('Generated all favicon sizes in ./public/');
}

generateFavicons();
