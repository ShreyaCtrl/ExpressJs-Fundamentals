const express = require("express");

// console.log(express);
const app = express();

// how is this possible ?
// express is a function that returns an object
// and we are storing that object in app variable
// we are storing an instance of express object in the app variable
// hence the variable is evaluated to false
console.log(app == express());

app.get("/", (request, response) => {
  // response.write("Hello World");
  // response.end();
  response.send("Hello World");
});

app.get("/about", (request, response) => {
  response.send("About page");
});

app.all("*", (request, response) => {
  response.send("<h1>Error 404 : Page not found !!</h1>");
});

app.listen(5000, () => {
  console.log("server listening on port 5000");
});
