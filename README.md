
// Transpire from TS to JS
// File is converted into a JS file and placed within the same directory

npx tsc src/fileName.ts

//Transpire from TS to JS and store in an outer directory

npx tsc src/fileName.ts --outDir directoryName

//By default JS compile version is ES3, change it to the desire version like this

npx tsc src/fileName.ts --outDir directoryName --target es6

// Run new JS file

node src/fileName.js

// SETUP TSCONFIG
// Create a tsconfig.json file 

npx tsc --init

// Auto update JS files with pair TS new content

npx tsc --watch
