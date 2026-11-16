import sharp from 'sharp';
import fs from 'fs';

async function buildAllFavicons() {
  const master = './public/favicon-lak-bold.png';

  // 16x16
  await sharp(master).resize(16, 16).png().toFile('./public/favicon-16x16.png');

  // 32x32
  await sharp(master).resize(32, 32).png().toFile('./public/favicon-32x32.png');
  await sharp(master).resize(32, 32).png().toFile('./public/favicon.png');

  // 48x48
  await sharp(master).resize(48, 48).png().toFile('./public/favicon-48x48.png');

  // 180x180 Apple Touch Icon
  await sharp(master).resize(180, 180).png().toFile('./public/apple-touch-icon.png');

  // 192x192 Android Chrome
  await sharp(master).resize(192, 192).png().toFile('./public/favicon-192.png');

  // 512x512 PWA / App icon
  await sharp(master).resize(512, 512).png().toFile('./public/favicon-512.png');

  // Standard favicon.ico
  await sharp(master).resize(32, 32).toFile('./public/favicon.ico');

  // SVG Vector Favicon
  const svgFavicon = `
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="2" y="2" width="60" height="60" rx="14" fill="#FFFFFF" stroke="#EADBC8" stroke-width="1.5"/>
  <path d="M11 24H18.5V40H29V46H11V24Z" fill="#0D59C8"/>
  <path d="M24.5 40L32 23.5L39.5 40H32.5L32 38.5L30 40H24.5ZM32 28.5L28.5 36.5H34L32 28.5Z" fill="#26B599"/>
  <path d="M40 24H48L39.5 34.5L49 46H41L35 38.5V46H30V24H35V32L40 24Z" fill="#E5A619"/>
</svg>
  `.trim();

  fs.writeFileSync('./public/favicon.svg', svgFavicon, 'utf8');

  console.log('All favicon formats successfully generated in ./public/!');
}

buildAllFavicons();
