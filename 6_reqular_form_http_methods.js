const express = require("express");
const app = express();
let { people } = require("./data");
// regular form - content-type of request header is application/x-www-form-urlencoded

// static assets - do not forget to use static method of express
app.use(express.static("./methods-public"));
// parse form data to send to the database - built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.
// in previous versions of express you had to install the body parser but now it is built in
// extended property allows to parse url-encoded data with querystring library when false
// when true - it allows to parse rich objects and arrays (not frequently used)
app.use(express.urlencoded({ extended: false }));

// GET method to read data
app.get("/api/people", (req, resp) => {
  resp.status(200).json({ success: true, data: people });
});

// POST method to add data
app.post("/login", (req, resp) => {
  console.log(req.body);
  const { name } = req.body;
  if (name) resp.status(200).send(`Hello ${name}`);
  else resp.status(401).send("Enter username");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
