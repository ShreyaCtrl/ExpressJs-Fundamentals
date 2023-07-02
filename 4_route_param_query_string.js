const express = require("express");
const { readFile } = require("fs");
const path = require("path");
const app = express();
const { products } = require("./data");

app.get("/", (request, response) => {
  console.log("user hit the resource");
  // response.status(200).json(products);
  // response.status(200).send("<h1>Home Page</h1><a href='api/products'>Products</a>");
  response.sendFile(path.resolve(__dirname, "./index.html"));
});

app.get("/api/products", (request, response) => {
  const newPro = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  response.json(newPro);
  // response.json(products);
});

app.get("/api/products/:productID", (request, response) => {
  const { productID } = request.params;
  const product = products.find((product) => product.id == productID);
  console.log(product);
  if (!product) {
    return response.status(404).send("Error 404 !! Product doesnt exist");
  }
  response.json(product);
});

// some complex route param
// maybe useful in verb conjugator project
app.get("/api/products/:productID/reviews/:reviewID", (request, response) => {
  console.log(request.params);
  response.send("hello world");
});

// query parameters - the info you add here is not a part of the route and is optional information you provide to server so that it can send relevant information
app.get("/api/v2/query", (request, response) => {
  console.log(request.query);
  let findResults = [...products];
  // response.send('Hello !!')
  const { search, limit } = request.query;
  if (search) {
    findResults = products.filter((product) => {
      return product.name.startsWith(search);
    });
    if (findResults.length < 1) {
      return response.status(200).json({ success: true, data: null });
    }
  }
  if (limit) {
    findResults = findResults.slice(0, Number(limit));
  }
  response.status(200).json(findResults);
});

// no need to render each product using hard coding we can use route param as above
// app.get('/api/products/1', (request, response) => {
//     const product = products.find((product) => product.id == 1);
//     response.json(product);
// })

app.listen(5000, () => {
  console.log("server is listening on 127.0.0.1:5000");
});
