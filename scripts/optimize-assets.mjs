import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

/**
 * ARAVEX / Antigravity Static Asset WebP/AVIF Optimizer
 * Converts static PNG/JPEG images into next-gen AVIF and WebP formats.
 */

const TARGET_DIR = path.resolve(process.cwd(), 'public/assets');

async function processDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (/\.(png|jpe?g)$/i.test(entry.name)) {
      const ext = path.extname(fullPath);
      const basePath = fullPath.slice(0, -ext.length);

      // Generate WebP
      const webpPath = `${basePath}.webp`;
      if (!fs.existsSync(webpPath)) {
        try {
          await sharp(fullPath).webp({ quality: 82, effort: 4 }).toFile(webpPath);
          console.log(`[Optimized WebP] ${webpPath}`);
        } catch (err) {
          console.warn(`[Skip WebP] ${fullPath}:`, err.message);
        }
      }
    }
  }
}

console.log('Scanning public/assets for image optimization...');
processDirectory(TARGET_DIR).then(() => {
  console.log('Asset optimization check complete.');
});

