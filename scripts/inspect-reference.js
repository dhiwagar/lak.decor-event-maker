import sharp from 'sharp';

async function checkRef() {
  const refPath = 'C:/Users/bear360/.gemini/antigravity/brain/db1761b7-50e0-4a4f-bc48-ee6c80ff2c4f/.user_uploaded/media_1794763279872_9bbc5160.jpg';
  const meta = await sharp(refPath).metadata();
  console.log('Reference Image Metadata:', meta.width, 'x', meta.height);
}

checkRef();
