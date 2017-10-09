const MongoClient = require('mongodb').MongoClient;

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

    connect() {
        const { client, url } = this;

        return new Promise((resolve, reject) => {
            client.connect(url, (err, db) => {
                if (err) {
                    return reject(err);
                }

                return resolve(db);
            });
        });
    }

    find(query) {
        const { collection } = this;

        return new Promise((resolve, reject) => {
            this.connect()
                .then((db) => {
                    db.collection(collection)
                        .find(query)
                        .toArray((err, result) => {
                            if (err) {
                                return reject(err);
                            }

                            return resolve(result);
                        });
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    findOne(query) {
        const { collection } = this;

        return new Promise((resolve, reject) => {
            this.connect()
                .then((db) => {
                    db.collection(collection)
                        .findOne(query, (err, result) => {
                            if (err) {
                                return reject(err);
                            }

                            return resolve(result);
                        });
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }
}

module.exports = MongoDB;