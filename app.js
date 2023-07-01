const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (request, response) => {
    console.log('user hit the resource');
    response.json(products);
    response.status(200).send('Home Page');
})

app.listen(5000, () => {
    console.log('server is listening on 127.0.0.1:5000')
});