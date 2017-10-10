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
        
        return new Promise((resolve, reject) => {
            client.connect(url, (err, db) => {
                if (err) {
                    return reject(err);
                }

                resolve(db);
            });
        });
    }

    create(item) {
        const { collection } = this;

        return new Promise((resolve, reject) => {
            this.connect()
                .then((db) => {
                    db.collection(collection)
                        .insertOne(item)
                        .then((result) => {
                            this.findOne({ _id: ObjectID(result.insertedId) })
                                .then((createdItem) => {
                                    resolve(createdItem);
                                })
                                .catch((err) => {
                                    reject(err);
                                });
                        })
                        .catch((err) => {
                            reject(err);
                        });
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    delete(id) {
        const { collection } = this;

        return new Promise((resolve, reject) => {
            this.connect()
                .then((db) => {
                    db.collection(collection)
                        .deleteOne({ _id: ObjectID(id) })
                        .then((result) => {
                            resolve(result);
                        })
                        .catch((err) => {
                            reject(err);
                        });
                })
                .catch((err) => {
                    reject(err);
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

    update(id, item) {
        const { collection } = this;
        const query = { _id: ObjectID(id) };

        return new Promise((resolve, reject) => {
            this.connect()
                .then((db) => {
                    db.collection(collection)
                        .updateOne(query, item)
                        .then((result) => {
                            this.findOne(query)
                                .then((result) => {
                                    resolve(result);
                                })
                                .catch((err) => {
                                    reject(err);
                                });
                        })
                        .catch((err) => {
                            reject(err);
                        });
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }
}

module.exports = MongoDB;