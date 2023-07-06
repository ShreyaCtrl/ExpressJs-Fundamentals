const express = require("express");
const app = express();
let peopleRouter = require('./routes/people');
let loginRouter = require('./routes/auth');

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api/people', peopleRouter);
app.use('/login', loginRouter);

// NOTE : the route is not set in the router module but should be set in the app.js module

console.log(loginRouter);
// console.log(peopleRouter);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
