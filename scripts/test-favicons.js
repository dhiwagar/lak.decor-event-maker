import fs from 'fs';

async function checkFavicons() {
  const urls = [
    'http://127.0.0.1:5173/favicon.ico',
    'http://127.0.0.1:5173/favicon.svg',
    'http://127.0.0.1:5173/favicon-32x32.png',
    'http://127.0.0.1:5173/apple-touch-icon.png'
  ];

  for (const u of urls) {
    try {
      const res = await fetch(u);
      console.log(`${u} -> ${res.status} ${res.statusText}`);
    } catch (e) {
      console.error(`Failed ${u}:`, e.message);
    }
  }
}

checkFavicons();
