import fs from 'fs';
import path from 'path';

const dirsToClean = [
  './public/assets/images/real',
  './public/assets/images',
  './scripts',
  './src/assets',
];

let totalDeleted = 0;
let totalBytesFreed = 0;

for (const dir of dirsToClean) {
  if (!fs.existsSync(dir)) continue;

  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.match(/\.(jpe?g)$/i)) {
      const filePath = path.join(dir, file);
      try {
        const stats = fs.statSync(filePath);
        totalBytesFreed += stats.size;
        fs.unlinkSync(filePath);
        totalDeleted++;
        console.log(`Deleted: ${filePath} (${(stats.size / 1024).toFixed(1)} KB)`);
      } catch (err) {
        console.error(`Failed to delete ${filePath}:`, err.message);
      }
    }
  }
}

const mbFreed = (totalBytesFreed / (1024 * 1024)).toFixed(2);
console.log(`\nSUCCESS: Deleted ${totalDeleted} JPG/JPEG files total.`);
console.log(`Disk space freed: ${mbFreed} MB.`);
