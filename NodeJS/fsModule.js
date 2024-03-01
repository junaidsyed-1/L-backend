const fs = require('node:fs');

console.log("Going to start reading the file")

// fs.readFileSync blocks the thread 
// const read = fs.readFileSync('Notes.txt');
// console.log(read.toString());

// Wehreas fs,readFile works asynchronously
fs.readFile('./Notes.txt', 'utf-8', (err, data) => console.log(data, err));

console.log("Finished Reading File")