// require the express package in this file 
// and store it in a variable for later use
const express = require('express');
// create a new instance of `express`
const app = express();
// Configure application
app.set('views', __dirname + '/src/views');
app.set('view engine', 'twig');

// give our app some basic rules about what to 
// do with a web request
app.get('/', (request, response) => {
    response.render('pages/home');
});

app.get('/new-thread', (request, response) => {
    response.render('pages/new-thread');
});

app.get('/threads', (request, response) => {
    response.render('pages/threads');
});

app.get('/threads/:id', (request, response) => {
    const id = request.params.id;

    response.render('pages/thread-detail', { id: id });
});

// tell our app what port to listen for requests on
app.listen(3000, () => {
    console.log('App is listening on localhost:3000...');
});