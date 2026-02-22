const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function compressImage(inputPath, outputPath, quality = 80) {
  try {
    const ext = path.extname(inputPath).toLowerCase();
    const stats = fs.statSync(inputPath);
    const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
    
    console.log(`Compressing ${path.basename(inputPath)} (${sizeMB}MB)...`);
    
    // Use WebP for maximum compression while maintaining quality
    await sharp(inputPath)
      .resize(1920, 1920, { 
        fit: 'inside',
        withoutEnlargement: true 
      })
      .webp({ quality })
      .toFile(outputPath);
    
    const newStats = fs.statSync(outputPath);
    const newSizeMB = (newStats.size / (1024 * 1024)).toFixed(2);
    const savings = ((1 - newStats.size / stats.size) * 100).toFixed(1);
    
    console.log(`✓ Saved to ${path.basename(outputPath)} (${newSizeMB}MB) - ${savings}% smaller\n`);
    
    return { original: stats.size, compressed: newStats.size };
  } catch (error) {
    console.error(`Error compressing ${inputPath}:`, error.message);
    return null;
  }
}

async function compressFolder(folderPath) {
  const files = fs.readdirSync(folderPath);
  const results = [];
  
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      const inputPath = path.join(folderPath, file);
      const outputPath = path.join(folderPath, file.replace(ext, '.webp'));
      
      const result = await compressImage(inputPath, outputPath, 82);
      if (result) {
        results.push(result);
        // Delete original after successful compression
        fs.unlinkSync(inputPath);
      }
    }
  }
  
  return results;
}

async function main() {
  console.log('🖼️  Starting image compression...\n');
  
  const folders = [
    'src/assets/SolastaHighlights',
    'src/assets/s',
    'src/assets'
  ];
  
  let totalOriginal = 0;
  let totalCompressed = 0;
  
  for (const folder of folders) {
    if (fs.existsSync(folder)) {
      console.log(`\n📁 Processing ${folder}...\n`);
      const results = await compressFolder(folder);
      
      results.forEach(r => {
        totalOriginal += r.original;
        totalCompressed += r.compressed;
      });
    }
  }
  
  const totalSavings = ((1 - totalCompressed / totalOriginal) * 100).toFixed(1);
  console.log('\n✅ Compression complete!');
  console.log(`📊 Total: ${(totalOriginal / (1024 * 1024)).toFixed(2)}MB → ${(totalCompressed / (1024 * 1024)).toFixed(2)}MB`);
  console.log(`💾 Space saved: ${totalSavings}%`);
}

main();
