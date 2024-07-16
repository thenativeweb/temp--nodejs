import http from 'node:http';
import { flaschenpost } from 'flaschenpost';
import { getApi } from './api/getApi.js';
import { InMemoryStore } from './storage/InMemoryStore.js';
import { MongoDbStore } from './storage/MongoDbStore.js';
import { setupDemoData } from './storage/setupDemoData.js';

const logger = flaschenpost.getLogger();

const port = process.env.PORT ?? 3_000;
const databaseType = process.env.DATABASE_TYPE ?? 'inmemory';
const connectionString = process.env.CONNECTION_STRING ?? 'mongodb://localhost:27017';

let store;
switch (databaseType) {
    case 'inmemory':
        store = await InMemoryStore.initialize();
        break;
    case 'mongodb':
        store = await MongoDbStore.initialize({ connectionString });
        break;
    default:
        throw new Error(`unsupported database type '${databaseType}'`);
}

await setupDemoData({ store });

const api = getApi({ store });
const server = http.createServer(api);

server.listen(port, () => {
    logger.info('server is running', { port });
});
