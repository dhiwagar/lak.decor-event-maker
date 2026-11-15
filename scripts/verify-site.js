import fs from 'fs';
import path from 'path';

async function checkSite() {
  try {
    const res = await fetch('http://127.0.0.1:5173/');
    console.log(`Server response: ${res.status} ${res.statusText}`);
  } catch (err) {
    console.error('Server check failed:', err.message);
  }

  // Check gallery.ts images
  const galleryRaw = fs.readFileSync('./src/data/gallery.ts', 'utf8');
  const imageMatches = [...galleryRaw.matchAll(/image:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
  console.log(`Total gallery images: ${imageMatches.length}`);

  let missingCount = 0;
  imageMatches.forEach(img => {
    // strip leading / and prepend ./public/
    const relPath = path.join('./public', img.replace(/^\//, ''));
    if (!fs.existsSync(relPath)) {
      console.error(`MISSING image: ${img} (${relPath})`);
      missingCount++;
    }
  });

  if (missingCount === 0) {
    console.log(`All ${imageMatches.length} gallery images exist on disk!`);
  } else {
    console.error(`Found ${missingCount} missing gallery images.`);
  }

  // Check services.ts images
  const servicesRaw = fs.readFileSync('./src/data/services.ts', 'utf8');
  const serviceImages = [
    ...servicesRaw.matchAll(/heroImage:\s*['"]([^'"]+)['"]/g),
    ...servicesRaw.matchAll(/image:\s*['"]([^'"]+)['"]/g)
  ].map(m => m[1]);
  
  let missingServices = 0;
  serviceImages.forEach(img => {
    const relPath = path.join('./public', img.replace(/^\//, ''));
    if (!fs.existsSync(relPath)) {
      console.error(`MISSING service image: ${img}`);
      missingServices++;
    }
  });

  if (missingServices === 0) {
    console.log(`All ${serviceImages.length} service hero & theme images exist on disk!`);
  } else {
    console.error(`Found ${missingServices} missing service images.`);
  }

  // Check projects.ts images
  const projectsRaw = fs.readFileSync('./src/data/projects.ts', 'utf8');
  const projectImages = [
    ...projectsRaw.matchAll(/heroImage:\s*['"]([^'"]+)['"]/g)
  ].map(m => m[1]);
  
  let missingProjects = 0;
  projectImages.forEach(img => {
    const relPath = path.join('./public', img.replace(/^\//, ''));
    if (!fs.existsSync(relPath)) {
      console.error(`MISSING project image: ${img}`);
      missingProjects++;
    }
  });

  if (missingProjects === 0) {
    console.log(`All ${projectImages.length} project hero images exist on disk!`);
  } else {
    console.error(`Found ${missingProjects} missing project images.`);
  }
}

checkSite();
