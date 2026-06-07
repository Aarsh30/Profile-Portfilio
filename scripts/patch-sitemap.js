import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to sitemap-simple.js in node_modules
const filePath = path.resolve(__dirname, '../node_modules/sitemap/dist/lib/sitemap-simple.js');

if (fs.existsSync(filePath)) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Regex to match the absolute path check block
  const targetRegex = /if\s*\(\s*\(0,\s*path_1\.isAbsolute\)\(destinationDir\)\s*\)\s*\{\s*throw\s+new\s+Error\([\s\S]*?\);\s*\}/;
  
  if (targetRegex.test(content)) {
    content = content.replace(targetRegex, `if ((0, path_1.isAbsolute)(destinationDir)) {
        // patched to bypass absolute path check
    }`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully patched sitemap simpleSitemapAndIndex to allow absolute paths.');
  } else if (content.includes('patched to bypass absolute path check')) {
    console.log('sitemap simpleSitemapAndIndex is already patched.');
  } else {
    console.warn('Could not find the target absolute path check in sitemap-simple.js.');
  }
} else {
  console.warn('sitemap-simple.js not found at:', filePath);
}
