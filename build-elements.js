const fs = require('fs-extra');

const concat = require('concat');
(async function build() {
  const files = [
    './dist/angular-elements-example/runtime-es2015.js',
    './dist/angular-elements-example/polyfills-es2015.js',
    './dist/angular-elements-example/scripts.js',
    './dist/angular-elements-example/main-es2015.js',
  ]
  // await fs.ensureDir('elements')
  await concat(files, './dist/angular-elements-example/elements.js');

  await fs.copyFile('./src/index-elements.html', './dist/angular-elements-example/index-elements.html')
})()