const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const dbHost = 'mongo';
const dbPort = 27017;
const dbUser = 'fm_node';
const dbPass = 'fm_node';
const dbName = 'forum_madness';

/**
 * A utility class for handling connections to MongoDB
 * as well as all basic CRUD actions.
 */
class MongoDB {
    /**
     * Handles basic setup of `client` used for connecting to
     * mongodb, the URL used for establishing the connection,
     * and the collection the instance should be scoped on.
     *
     * @param {string} collection
     * @return {MongoDB}
     */
    constructor(collection) {
        this.client = MongoClient;
        this.url = `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`;
        this.collection = collection;
    }

    /**
     * Connects to mongodb using the instance's `url`
     * and `client` properties.
     *
     * @return {Promise}
     */
    connect() {
        const { client, url } = this;

        return client.connect(url);
    }

    /**
     * Connects to mongodb and inserts the passed `item`
     * into the database.
     *
     * @param {Object} item
     * @return {Promise}
     */
    create(item) {
        const { collection } = this;

        return this.connect()
            .then((db) => {
                return db.collection(collection).insertOne(item);
            })
            .then((result) => {
                return this.findOne({ _id: ObjectID(result.insertedId) });
            });
    }

    /**
     * Connects to mongodb, and deletes the document
     * belonging to the provided `id`.
     *
     * @param {Object} query
     * @return {Promise}
     */
    delete(query) {
        const { collection } = this;

        return this.connect()
            .then((db) => {
                return db.collection(collection)
                    .deleteOne(query);
            });
    }

    /**
     * Connects to mongodb, and searches for all
     * documents matching the passed `query`,
     * transforms the results to an Array.
     *
     * @param {Object} query
     * @return {Promise}
     */
    find(query) {
        const { collection } = this;

        return this.connect()
            .then((db) => {
                return db.collection(collection)
                    .find(query)
                    .toArray();
            });
    }

    /**
     * Connects to mongodb, then searches for a single
     * document matching the passed `query`.
     *
     * @param {Object} query
     * @return {Promise}
     */
    findOne(query) {
        const { collection } = this;

        return this.connect()
            .then((db) => {
                return db.collection(collection)
                    .findOne(query);
            });
    }

    /**
     * Connects to mongodb, attemtpts to find the
     * document for the passed `id`, then updates the
     * document with the `item` Object.
     *
     * @param {Object} id
     * @param {Object} item
     * @param {Promise}
     */
    update(query, item) {
        const { collection } = this;

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