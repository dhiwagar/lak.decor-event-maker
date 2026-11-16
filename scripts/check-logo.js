import sharp from 'sharp';

async function checkLogo() {
  const meta = await sharp('./src/assets/logo.webp').metadata();
  console.log('Logo dimensions:', meta.width, 'x', meta.height);
}

checkLogo();
