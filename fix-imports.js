// fix-imports.mjs
import fs from 'fs';
import path from 'path';

// List of files with unnecessary React imports
const filesToFix = [
  'src/App.tsx',
  'src/components/Navbar.tsx',
  'src/sections/About.tsx',
  'src/sections/Bio.tsx',
  'src/sections/Contact.tsx',
  'src/sections/Footer.tsx',
  'src/sections/Hero.tsx',
  'src/sections/Projects.tsx'
];

// Function to fix a file
function fixReactImport(filePath) {
  try {
    // Read the file
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Replace standalone React import
    const fixedContent = content
      .replace(/import React from ['"]react['"];?\n?/g, '')
      // Handle cases where React is imported with other things
      .replace(/import React, \{([^}]+)\} from ['"]react['"];?/g, 'import { $1 } from "react";');
    
    // Write the fixed content back to the file
    fs.writeFileSync(filePath, fixedContent);
    
    console.log(`✓ Fixed: ${filePath}`);
  } catch (error) {
    console.error(`✗ Error fixing ${filePath}:`, error.message);
  }
}

// Process each file
console.log('Fixing unnecessary React imports...');
filesToFix.forEach(file => {
  fixReactImport(file);
});

console.log('Done! You can now try building your project again.');