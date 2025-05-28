const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Define all required icon sizes for PWA
const iconSizes = [
  { size: 72, name: 'icon-72x72.png' },
  { size: 96, name: 'icon-96x96.png' },
  { size: 128, name: 'icon-128x128.png' },
  { size: 144, name: 'icon-144x144.png' },
  { size: 152, name: 'icon-152x152.png' },
  { size: 192, name: 'icon-192x192.png' },
  { size: 384, name: 'icon-384x384.png' },
  { size: 512, name: 'icon-512x512.png' }
];

// Apple touch icons
const appleIconSizes = [
  { size: 57, name: 'apple-touch-icon-57x57.png' },
  { size: 60, name: 'apple-touch-icon-60x60.png' },
  { size: 72, name: 'apple-touch-icon-72x72.png' },
  { size: 76, name: 'apple-touch-icon-76x76.png' },
  { size: 114, name: 'apple-touch-icon-114x114.png' },
  { size: 120, name: 'apple-touch-icon-120x120.png' },
  { size: 144, name: 'apple-touch-icon-144x144.png' },
  { size: 152, name: 'apple-touch-icon-152x152.png' },
  { size: 180, name: 'apple-touch-icon-180x180.png' }
];

const sourceIcon = path.join(__dirname, 'public', 'icons', 'icon.svg');
const outputDir = path.join(__dirname, 'public', 'icons');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log('Generating PWA icons...');

// Generate regular PWA icons
const generateIcons = async () => {
  try {
    console.log('Output directory:', outputDir);
    
    // Create a base 512x512 icon using Sharp
    const basePng = await sharp({
      create: {
        width: 512,
        height: 512,
        channels: 4,
        background: { r: 0, g: 150, b: 136, alpha: 1 } // Ematrics teal color
      }
    })
    .composite([
      {
        // Add a white circle with the letter E
        input: Buffer.from(`
          <svg width="512" height="512">
            <circle cx="256" cy="256" r="200" fill="#009688" stroke="#00695C" stroke-width="8"/>
            <text x="256" y="320" font-family="Arial, sans-serif" font-size="200" font-weight="bold" fill="white" text-anchor="middle">E</text>
          </svg>
        `),
        top: 0,
        left: 0
      }
    ])
    .png()
    .toBuffer();
    
    // Generate regular PWA icons
    for (const icon of iconSizes) {
      await sharp(basePng)
        .resize(icon.size, icon.size)
        .png({ quality: 90 })
        .toFile(path.join(outputDir, icon.name));
      console.log(`✓ Generated ${icon.name}`);
    }    // Generate Apple touch icons
    for (const icon of appleIconSizes) {
      await sharp(basePng)
        .resize(icon.size, icon.size)
        .png({ quality: 90 })
        .toFile(path.join(outputDir, icon.name));
      console.log(`✓ Generated ${icon.name}`);
    }

    // Generate favicon.ico (32x32)
    await sharp(basePng)
      .resize(32, 32)
      .png({ quality: 90 })
      .toFile(path.join(__dirname, 'public', 'favicon.ico'));
    console.log('✓ Generated favicon.ico');

    // Generate a larger favicon (256x256)
    await sharp(basePng)
      .resize(256, 256)
      .png({ quality: 90 })
      .toFile(path.join(outputDir, 'favicon-256x256.png'));
    console.log('✓ Generated favicon-256x256.png');

    console.log('🎉 All icons generated successfully!');
  } catch (error) {
    console.error('Error generating icons:', error);
  }
};

generateIcons();
