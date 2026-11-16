import sharp from 'sharp';

async function generateLakOnlyFavicon() {
  const input = './src/assets/logo.webp';
  // Trim white
  const trimmed = await sharp(input)
    .trim({ threshold: 10 })
    .toBuffer({ resolveWithObject: true });

  // In trimmed image (602 x 352):
  // The LAK letters occupy the top ~70% inside the border
  // Border is roughly 8px thick.
  // Let's extract the LAK letters:
  // left: 25, top: 40, width: 550, height: 215
  const lakLetters = await sharp(trimmed.data)
    .extract({ left: 30, top: 40, width: 540, height: 215 })
    .toBuffer({ resolveWithObject: true });

  const size = 512;
  const padding = 50;
  const fitWidth = size - (padding * 2);

  const resized = await sharp(lakLetters.data)
    .resize({
      width: fitWidth,
      height: fitWidth,
      fit: 'inside',
    })
    .toBuffer({ resolveWithObject: true });

  const badgeSvg = `
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="12" flood-color="#000000" flood-opacity="0.12"/>
        </filter>
      </defs>
      <!-- Premium rounded square icon badge -->
      <rect x="20" y="20" width="${size - 40}" height="${size - 40}" rx="110" fill="#FFFFFF" filter="url(#shadow)" stroke="#EADBC8" stroke-width="6"/>
    </svg>
  `;

  const topOffset = Math.round((size - resized.info.height) / 2);
  const leftOffset = Math.round((size - resized.info.width) / 2);

  await sharp(Buffer.from(badgeSvg))
    .composite([
      {
        input: resized.data,
        top: topOffset,
        left: leftOffset,
      }
    ])
    .png()
    .toFile('./public/favicon-lak-bold.png');

  console.log('Generated favicon-lak-bold.png');
}

generateLakOnlyFavicon();
