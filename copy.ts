import * as fs from 'fs';

try {
  const logoData = fs.readFileSync('logo.txt', 'utf8');
  // It's a base64 strictly formatted data url from script.ts
  const b64 = logoData.split(',')[1];
  
  if (b64) {
    fs.writeFileSync('public/logo.png', Buffer.from(b64, 'base64'));
    console.log('Saved public/logo.png directly as binary data');
  }
} catch (e) {
  console.log('Error', e);
}
