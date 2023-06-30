// const { log } = require('console');
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    // writes the request header of the message
    res.writeHead(200,{'content-type':'text/html'})
    console.log('user hit the server');
    res.write("<h1>Batman is who he is Bruce Wayne is the mask !!</h1>");
    res.end();
});
console.log('server listening on port localhost:5000');

server.listen(5000);

// conventional setup (in node js) : we dont provide any information of the type of text that we are returning in the response 
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status - Status codes 