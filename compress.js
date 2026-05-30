const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Install sharp if not already installed
try {
  require.resolve('sharp');
} catch (e) {
  console.log('Installing sharp library for image compression...');
  try {
    execSync('npm install sharp', { stdio: 'inherit' });
  } catch (err) {
    console.error('Failed to install sharp. Trying devDependency...', err.message);
    execSync('npm install -D sharp', { stdio: 'inherit' });
  }
}

const sharp = require('sharp');

const IMAGES_DIR = path.join(__dirname, 'public', 'images');

async function compressImages() {
  if (!fs.existsSync(IMAGES_DIR)) {
    console.error(`Directory not found: ${IMAGES_DIR}`);
    return;
  }

  const files = fs.readdirSync(IMAGES_DIR);
  console.log(`Scanning ${files.length} files in public/images...\n`);
  
  for (const file of files) {
    const filePath = path.join(IMAGES_DIR, file);
    const ext = path.extname(file).toLowerCase();
    
    // Process only PNG and JPG/JPEG files
    if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;
    
    // Ignore temporary files
    if (file.startsWith('temp_')) continue;
    
    const stats = fs.statSync(filePath);
    const sizeInKB = stats.size / 1024;
    
    // Skip small images that don't need compression (under 150KB)
    if (stats.size < 150 * 1024) {
      continue;
    }
    
    console.log(`Optimizing: ${file} (${(sizeInKB / 1024).toFixed(2)} MB)`);
    
    try {
      const tempPath = path.join(IMAGES_DIR, `temp_${file}`);
      
      let pipeline = sharp(filePath);
      
      if (ext === '.png') {
        // Compress PNG and convert to 8-bit palette to drastically reduce size
        await pipeline
          .png({ quality: 75, compressionLevel: 9, palette: true })
          .toFile(tempPath);
      } else {
        // Compress JPEG
        await pipeline
          .jpeg({ quality: 80, progressive: true })
          .toFile(tempPath);
      }
      
      // Replace original file with compressed one
      fs.unlinkSync(filePath);
      fs.renameSync(tempPath, filePath);
      
      const newStats = fs.statSync(filePath);
      const newSizeInKB = newStats.size / 1024;
      const reduction = ((stats.size - newStats.size) / stats.size * 100).toFixed(1);
      
      console.log(`  └─ ✅ Success: ${(newSizeInKB / 1024).toFixed(2)} MB (${reduction}% smaller)\n`);
    } catch (err) {
      console.error(`  └─ ❌ Failed to compress ${file}:`, err.message, '\n');
    }
  }
  
  console.log('🎉 Compression complete!');
}

compressImages();
