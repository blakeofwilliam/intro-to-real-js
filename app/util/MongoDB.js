const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const dbHost = 'mongo';
const dbPort = 27017;
const dbUser = 'fm_node';
const dbPass = 'fm_node';
const dbName = 'forum_madness';

class MongoDB {
    constructor(collection) {
        this.client = MongoClient;
        this.url = `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`;
        this.collection = collection;
    }

    /**
     * Connects to 
     * 
     * @return {Promise}
     */
    connect() {
        const { client, url } = this;
        
        return client.connect(url);
    }

    create(item) {
        const { collection } = this;

        return this.connect()
            .then((db) => {
                return db.collection(collection)
                    .insertOne(item);
            })
            .then((result) => {
                return this.findOne({ _id: ObjectID(result.insertedId) })
            });
    }

    delete(id) {
        const { collection } = this;

        return this.connect()
            .then((db) => {
                return db.collection(collection)
                    .deleteOne({ _id: ObjectID(id) });
            });
    }

    find(query) {
        const { collection } = this;

        return this.connect()
            .then((db) => {
                return db.collection(collection)
                    .find(query)
                    .toArray();
            });
    }

    findOne(query) {
        const { collection } = this;

        return this.connect()
            .then((db) => {
                return db.collection(collection)
                    .findOne(query);
            });
    }

    update(id, item) {
        const { collection } = this;
        const query = { _id: ObjectID(id) };

        return this.connect()
            .then((db) => {
                return db.collection(collection)
                    .updateOne(query, item);
            })
            .then((result) => {
                return this.findOne(query)
            });
    }
}

module.exports = MongoDB;