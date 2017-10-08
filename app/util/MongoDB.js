const MongoClient = require('mongodb').MongoClient;

const dbHost = 'mongo';
const dbPort = 27017;
const dbUser = 'fm_node';
const dbPass = 'fm_node';
const dbName = 'forum_madness';

class MongoDB {
    constructor() {
        this.client = MongoClient;
        this.url = `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`;
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
}

module.exports = MongoDB;