const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // console.log(req);

    if(req.url === '/'){
        res.writeHead(200, {'Content-type':'text/html'});
        res.write('<h1>Welcome to homepage</h1>');
        res.end();
    }
    //accessing html page
    if(req.url === '/login'){
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            res.writeHead(200, {'Content_type':'text/html'});
            res.write(data);
            res.end()
        });
    }

    if(req.url === '/user'){
        res.write('Welcome Alexander');
        res.end();
    }

});

server.listen(3000, () => console.log('Server is running'));