// require the express package in this file 
// and store it in a variable for later use
const express = require('express');
// create a new instance of `express`
const app = express();
// give our app some basic rules about what to 
// do with a web request
app.get('/', (request, response) => {
    response.send('I just configured a webserver!');
});

// tell our app what port to listen for requests on
app.listen(3000, () => {
    console.log('App is listening on localhost:3000...');
});