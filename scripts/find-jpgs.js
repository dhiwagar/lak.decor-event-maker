import fs from 'fs';
import path from 'path';

function findJpgs(dir, list = []) {
  if (!fs.existsSync(dir)) return list;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.git' && entry.name !== 'dist') {
        findJpgs(fullPath, list);
      }
    } else if (entry.name.match(/\.(jpe?g)$/i)) {
      list.push(fullPath);
    }
  }
  return list;
}

const jpgs = findJpgs('.');
console.log(`Found ${jpgs.length} JPG/JPEG files total:`);
const byDir = {};
jpgs.forEach(f => {
  const d = path.dirname(f);
  byDir[d] = (byDir[d] || 0) + 1;
});
console.log(byDir);
