import sharp from 'sharp';

async function extractCrop() {
  const refPath = 'C:/Users/bear360/.gemini/antigravity/brain/db1761b7-50e0-4a4f-bc48-ee6c80ff2c4f/.user_uploaded/media_1794763279872_9bbc5160.jpg';
  // Crop around Y=320 to 380, width 932
  await sharp(refPath)
    .extract({ left: 0, top: 320, width: 932, height: 60 })
    .toFile('./scripts/watermark-crop.jpg');
  console.log('Extracted crop to ./scripts/watermark-crop.jpg');
}

extractCrop();
