const fs = require('fs');
let content = fs.readFileSync('constants.ts', 'utf8');

const replacements = {
  'bg-white': 'bg-white dark:bg-slate-800',
  'bg-gray-50': 'bg-gray-50 dark:bg-slate-800/50',
  'bg-gray-100': 'bg-gray-100 dark:bg-slate-700',
  'bg-primary-50': 'bg-primary-50 dark:bg-primary-900/20',
  'bg-blue-100': 'bg-blue-100 dark:bg-blue-900/40',
  'bg-red-50': 'bg-red-50 dark:bg-red-900/20',
  'bg-green-50': 'bg-green-50 dark:bg-green-900/20',
  'border-gray-200': 'border-gray-200 dark:border-slate-700',
  'border-gray-100': 'border-gray-100 dark:border-slate-700',
  'border-primary-100': 'border-primary-100 dark:border-primary-800',
  'border-red-200': 'border-red-200 dark:border-red-800',
  'border-green-200': 'border-green-200 dark:border-green-800',
  'text-gray-700': 'text-gray-700 dark:text-gray-300',
  'text-gray-800': 'text-gray-800 dark:text-gray-200',
  'text-gray-600': 'text-gray-600 dark:text-gray-400',
  'text-gray-500': 'text-gray-500 dark:text-gray-400',
  'text-primary-800': 'text-primary-800 dark:text-primary-300',
  'text-primary-500': 'text-primary-500 dark:text-primary-400',
  'text-primary-600': 'text-primary-600 dark:text-primary-400',
  'text-red-800': 'text-red-800 dark:text-red-300',
  'text-red-900': 'text-red-900 dark:text-red-200',
  'text-green-800': 'text-green-800 dark:text-green-300',
  'text-green-900': 'text-green-900 dark:text-green-200',
};

for (const [key, value] of Object.entries(replacements)) {
  // Strip out previously added classes first so we don't duplicate when running multiple times
  const combinedRegex = new RegExp(`\\b${key}\\s+dark:[\\w\\-\\/]+\\b`, 'g');
  content = content.replace(combinedRegex, key);

  // Then apply the correct dark class
  const cleanRegex = new RegExp(`\\b${key}\\b`, 'g');
  content = content.replace(cleanRegex, value);
}

fs.writeFileSync('constants.ts', content);
console.log('Successfully updated constants.ts for dark mode');
