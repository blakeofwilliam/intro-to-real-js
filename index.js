// require the express package in this file 
// and store it in a variable for later use
const express = require('express');
const bodyParser = require('body-parser');
const ObjectID = require('mongodb').ObjectID;
const MongoDB = require('./app/util/MongoDB');

// create a new instance of `express`
const app = express();

// Configure application
app.set('views', __dirname + '/src/views');
app.set('view engine', 'twig');

app.use(bodyParser.json())

const navigation = [
    {
        text: 'Home',
        type: 'link',
        url: '/'
    },
    {
        text: 'Threads',
        type: 'link',
        url: '/threads',
    },
    {
        text: 'New Thread',
        type: 'button',
        url: '/new-thread'
    }
];

function buildContext(ctx) {
    let defaultContext = {
        navigation: navigation
    };

    if (!ctx) {
        return defaultContext;
    }

    return Object.assign({}, defaultContext, ctx);
}

// give our app some basic rules about what to 
// do with a web request
app.get('/', (request, response) => {
    const context = buildContext();
    response.render('pages/home', context);
});

app.get('/new-thread', (request, response) => {
    const context = buildContext();
    response.render('pages/new-thread', context);
});

app.get('/threads', (request, response) => {
    const context = buildContext();
    response.render('pages/threads', context);
});

app.get('/threads/:id', (request, response) => {
    const id = request.params.id;
    const context = buildContext({ id: id });
    response.render('pages/thread-detail', context);
});

app.get('/api/database', (request, response) => {
    const db = new MongoDB();

    db.connect()
        .then((db) => {
            response.send('Connected!');
        })
        .catch((err) => {
            response
                .status(500)
                .send(err.message);
        });
});

app.get('/api/:collection', (request, response) => {
    const collection = new MongoDB(request.params.collection);

    collection.find({})
        .then((result) => {
            response.json(result);
        })
        .catch((err) => {
            response
                .status(500)
                .send(err.message);
        });
});

app.get('/api/:collection/:id', (request, response) => {
    const collection = new MongoDB(request.params.collection);

    collection.findOne({ _id: ObjectID(request.params.id) })
        .then((result) => {
            response.json(result);
        })
        .catch((err) => {
            response.status(500)
                .send(err.message);
        });
});

app.post('/api/:collection', (request, response) => {
    const collection = new MongoDB(request.params.collection);
    const item = request.body;

    collection.create(item)
        .then((result) => {
            response.json(result);
        })
        .catch((err) => {
            response.status(500)
                .send(err.message);
        });
});

app.put('/api/:collection/:id', (request, response) => {
    const collection = new MongoDB(request.params.collection);
    const item = request.body;

    collection.update({ _id: ObjectID(request.params.id) }, item)
        .then((result) => {
            response.json(result);
        })
        .catch((err) => {
            response.status(500)
                .send(err.message);
        });
});

app.delete('/api/:collection/:id', (request, response) => {
    const collection = new MongoDB(request.params.collection);

    collection.delete({ _id: ObjectID(request.params.id) })
        .then((result) => {
            response.json(result);
        })
        .catch((err) => {
            response.status(500)
                .send(err.message);
        });
});

app.use('/assets', express.static('src'));

// tell our app what port to listen for requests on
app.listen(3000, () => {
    console.log('App is listening on localhost:3000...');
});
