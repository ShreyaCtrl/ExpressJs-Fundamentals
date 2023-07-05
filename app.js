const express = require('express');
const app = express();
let { people } = require('./data');

// getting static resources 
app.use(express.static('./methods-public'));
app.use(express.urlencoded({ extended: false }));
// parses the json data sent by POST method to store in database or show on frontend 
app.use(express.json());

// NOTE - although the get and post have same url path they are doing different work and are both important


// to send data to the database
// here the data sent in the form by POST is accessible due to express.json() middleware
// we destructure the req.body to obtain the name from it '
// in order to send the data to the frontend again we have to set its value to { success: true, person: name }
// the property name like person should be followed
// if not we wont be able to access it at the frontend because we are again using the data sent here by using axios.post()
// if we dont set the value to { success: true, person: name } then we wont be able to access the data at the frontend while using GET 
app.post('/api/people', (req, resp) => {
    // 201 response when sent request is successful
    const { name } = req.body;
    console.log(req.body);
    if (!name) {
        return resp.status(401).json({ success: false, msg: 'Please provide a Name' });
    }  
    return resp.status(201).json({ success: true, person: name });
        // resp.status(201).send(`<h1>Welcome ${name} </h1>Successfully sent !!`);
}) 

app.post('/api/postman/people', (req, resp) => {
    const { name } = req.body;
    console.log(req.body);
    console.log(name);
    if (!name) {
        return resp.status(401).json({ success: false, msg: 'Please provide details' });
    }
    return resp.status(201).send({ success: true, data: [...people, name] })
})

// to update data in the database
app.put('/api/people/:id', (req, resp) => {
    const { id } = req.params;
    const { name } = req.body;
    console.log(id, name);
})

// to receive data from the database
app.get('/api/people', (req, resp) => {
    resp.status(200).json({ success: true, data: people });
})    

app.listen(5000, () => {
    console.log('Server is listening on port 5000');
});