// const { log } = require('console');
const http = require("http");
const { readFileSync } = require("fs");

const server = http.createServer();
const HomePg = readFileSync("./navbar-app/index.html");
const HomeCss = readFileSync("./navbar-app/styles.css");
const HomeLg = readFileSync("./navbar-app/logo.svg");
const HomeJs = readFileSync("./navbar-app/browser-app.js");

server.on("request", (req, res) => {
  console.log(req.method);
  console.log(req.url);
  // console.log(req.headers);
  // console.log(req.on);
  // writes the request header of the message
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    console.log("user hit the server");
    // we are'nt considering the files likes styles.css or logo.svg when the html content is read
    res.write(HomePg);
    res.write("<h1>Batman is who he is Bruce Wayne is the mask !!</h1>");
    res.end();
  } else if (req.url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(HomeCss);
    res.end();
  } else if (req.url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(HomeLg);
    res.end();
  } else if (req.url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(HomeJs);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Page not Found !!</h1>");
    res.end();
  }
});
console.log("server listening on port localhost:5000");

server.listen(5000);

// conventional setup (in node js) : we dont provide any information of the type of text that we are returning in the response
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status - Status codes
