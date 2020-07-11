const url = require('url');

const address = 'https://github.com/Pragades-Rajagopal/nodeJS_samples.git'

const parsedUrl = url.parse(address, true);

// console.log(parsedUrl.host)
// console.log(parsedUrl.pathname)
console.log(parsedUrl.query)