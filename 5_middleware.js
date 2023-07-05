const express = require("express");
const app = express();
const morgan = require("morgan");
const middle = require("./logger");
const authorize = require("./authorize");

// app.use() to call middleware so that it is accessible in any get methods
// always call middleware before the home page - '/'
// else it wont be accessible anywhere
// multiple app.use() also work
// middleware follow order - middle -> authorize
// app.use([middle, authorize]); // this one - so that middleware is accessible to all
// in case you set this with the authorize - it only works for the ones which it authorizes and not others
app.use(morgan("tiny"));
// in express we have middleware by the name of static
app.use(express.static("./navbar-app"));

// applied on all links with the path '/api';
// app.use('/api', middle);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/products", (request, response) => {
  response.send("About page");
});

// passing two or more middleware in between request and response
// app.get('/api/items', [middle, authorize], (req, resp) => {
//     console.log(req.user);
//     resp.send("<h1>Items page</h1>");
// })

app.get("/about", (request, response) => {
  response.send("About page");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000!");
});

// what options we have regarding adding middleware
// 1. app.use() - to add middleware to all the routes
// 2. app.get() - to add middleware to specific routes
// 3. app.get() - to add multiple middleware to specific routes
// 4. app.use() - to add multiple middleware to all the routes
// 5. 'express' provides middleware functions so that we directly add them using those functions eg. - static()
// 6. Third party middleware - eg. - morgan
// 7. Built in middleware - eg. - express.json()
