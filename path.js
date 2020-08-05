const path = require('path');

const fileLocation = path.join(__dirname, 'app.js'); //joins the strings

// console.log(fileLocation)

const filename = path.basename(fileLocation) //returns the last path

console.log(filename)

const fileExt = path.extname(filename)
console.log(fileExt)