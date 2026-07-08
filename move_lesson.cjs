const fs = require('fs');

let content = fs.readFileSync('constants.ts', 'utf8');

// Find the start of the hosting_etiquette lesson
const startMatch = content.match(/,[ \t\n]*{\s*id: 'hosting_etiquette',/);
if (!startMatch) {
  console.error("Could not find start of hosting_etiquette");
  process.exit(1);
}

const startIndex = startMatch.index;

const endRegex = /[ \t]*`\n[ \t]*}/g;
endRegex.lastIndex = startIndex;
const endMatch = endRegex.exec(content);

if (!endMatch) {
  console.error("Could not find end of hosting_etiquette");
  process.exit(1);
}

const endIndex = endMatch.index + endMatch[0].length;

const lessonContent = content.substring(startIndex, endIndex);

// Remove the lesson from its current place
content = content.substring(0, startIndex) + content.substring(endIndex);

// Find the end of the `daily` lessons array.
// Look for id: 'public_spaces', and its end.
const publicSpacesMatch = content.match(/id: 'public_spaces',/);
endRegex.lastIndex = publicSpacesMatch.index;
const publicSpacesEndMatch = endRegex.exec(content);

if (!publicSpacesEndMatch) {
    console.error("Could not find end of public_spaces");
    process.exit(1);
}

const insertIndex = publicSpacesEndMatch.index + publicSpacesEndMatch[0].length;

content = content.substring(0, insertIndex) + lessonContent + content.substring(insertIndex);

fs.writeFileSync('constants.ts', content);
console.log("Successfully moved hosting_etiquette to daily topic.");
