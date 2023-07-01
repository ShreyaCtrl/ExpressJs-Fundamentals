const express = require("express");
const app = express();
const path = require("path");

// setup static and middleware
// static files - those which server does'nt have to change
// js files also included in static
// Though js adds functionality and it makes the website dynamic
// the functionality it adds doesnt have to do anything with the server side dynamic the features added are only limited to the frontend
// hence static
app.use(express.static("./navbar-app"));

// the following is also static resource
// app.get('/', (request, response) => {
//     console.log('user hit the resource');
//     response.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
// });

app.listen(5000, () => {
  console.log("server listening on port 5000");
});