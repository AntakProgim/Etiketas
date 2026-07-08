const fs = require('fs');
let content = fs.readFileSync('constants.ts', 'utf8');

content = content.replace(/<strong>([^<]*):<\/strong>/g, '<strong>$1.</strong>');

fs.writeFileSync('constants.ts', content);
console.log('Replaced : with . in strong tags');
