import { MongoClient } from 'mongodb'
import { flaschenpost } from 'flaschenpost';

const logger = flaschenpost.getLogger();

class MongoDbStore {
    #collection

    constructor({ collection }) {
        this.#collection = collection;
    }

    static async initialize({ connectionString }) {
        const client = new MongoClient(connectionString);
        await client.connect();

        const db = client.db('url-shortener');
        const collection = db.collection('urls');
        await collection.createIndex({ alias: 1 }, { unique: true });

        const store = new MongoDbStore({ collection });

        return store;
    }

    async add({ alias, url }) {
        await this.#collection.insertOne({ alias, url });
    }

    async findByAlias(alias) {
        const { url } = await this.#collection.findOne({ alias });
        logger.debug('found url', { alias, url });

        return url;
    }
}

export { MongoDbStore };
