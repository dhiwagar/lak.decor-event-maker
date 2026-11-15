import fs from 'fs';
import path from 'path';

const srcDir = './src/assets';
const destDir = './public/assets/images/real';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Read contact-sheet.txt to get the exact indexed order
const txt = fs.readFileSync(path.join(srcDir, 'contact-sheet.txt'), 'utf8');
const lines = txt.split('\n').filter(Boolean);

console.log(`Found ${lines.length} indexed files in contact-sheet.txt`);
lines.forEach(line => {
  console.log(line);
});
