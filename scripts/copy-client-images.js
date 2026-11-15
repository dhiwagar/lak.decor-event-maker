import fs from 'fs';
import path from 'path';

const srcDir = './src/assets';
const destDir = './public/assets/images/real';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Map of index to semantic name
const imageMap = {
  0: 'baby-first-birthday-backdrop.jpg',
  1: 'tropical-green-entrance.jpg',
  2: 'welcome-board-tropical.jpg',
  3: 'reception-purple-elegance.jpg',
  4: 'wedding-royal-golden-mandap.jpg',
  5: 'wedding-traditional-temple-stage.jpg',
  6: 'emerald-lounge-foliage.jpg',
  7: 'reception-floral-arches.jpg',
  8: 'entrance-teal-floral-passage.jpg',
  9: 'reception-multi-arch-stage.jpg',
  10: 'golden-triple-arch-stage.jpg',
  11: 'engagement-floral-halo-ring.jpg',
  12: 'haldi-marigold-ganesha-wall.jpg',
  13: 'haldi-mehendi-floral-swing.jpg',
  14: 'wedding-grand-floral-chandelier.jpg',
  15: 'wedding-grand-stage-panoramic.jpg',
  16: 'banquet-hall-red-carpet-aisle.jpg',
  17: 'purple-fairylight-stage.jpg',
  18: 'outdoor-entrance-gate.jpg',
  19: 'reception-modern-petal-stage.jpg',
  20: 'lawn-floral-entrance.jpg',
  21: 'modern-wave-glow-stage.jpg',
  22: 'wedding-wooden-temple-pillars.jpg',
  23: 'pink-white-draped-stage.jpg',
  24: 'reception-golden-petal-luxury.jpg',
  25: 'decor-starlit-canopy-ceiling.jpg',
  26: 'reception-suspended-cloud-runway.jpg',
  27: 'banquet-staircase-floral-rail.jpg',
  28: 'grand-tiered-crystal-stage.jpg',
  29: 'wedding-lotus-motif-mandap.jpg',
  30: 'wedding-just-married-crimson.jpg',
  31: 'entrance-traditional-carved-door.jpg',
  32: 'wedding-welcome-easel-sign.jpg',
  33: 'entrance-illuminated-arch-tunnel.jpg',
  34: 'yellow-draped-pathway-arch.jpg',
  35: 'outdoor-driveway-peach-tunnel.jpg',
  36: 'reception-grand-floral-dome.jpg',
  37: 'reception-purple-royal-drapes.jpg',
  38: 'birthday-dhisan-blue-marquee.jpg',
  39: 'birthday-sarvesh-balloon-clouds.jpg',
  40: 'signature-royal-wedding-mandap.jpg',
  41: 'birthday-purple-balloon-arch.jpg'
};

const txt = fs.readFileSync(path.join(srcDir, 'contact-sheet.txt'), 'utf8');
const lines = txt.split('\n').filter(Boolean);

let copied = 0;
lines.forEach(line => {
  const match = line.match(/^(\d+):\s*(.+)$/);
  if (!match) return;
  const idx = parseInt(match[1]);
  const filename = match[2].trim();
  const srcFile = path.join(srcDir, filename);

  if (fs.existsSync(srcFile)) {
    const semanticName = imageMap[idx] || `event-${idx}.jpg`;
    
    // Copy to semantic name in /real/
    fs.copyFileSync(srcFile, path.join(destDir, semanticName));
    
    // Also copy to index-based alias real-event-${idx + 1}.jpg for backward compatibility
    fs.copyFileSync(srcFile, path.join(destDir, `real-event-${idx + 1}.jpg`));
    
    copied++;
  }
});

// Also copy logo.jpeg to public/assets/images/logo.jpeg
const logoSrc = path.join(srcDir, 'logo.jpeg');
if (fs.existsSync(logoSrc)) {
  fs.copyFileSync(logoSrc, './public/assets/images/logo.jpeg');
  console.log('Copied logo.jpeg to public/assets/images/logo.jpeg');
}

console.log(`Successfully organized and copied ${copied} client photos to ${destDir}`);
