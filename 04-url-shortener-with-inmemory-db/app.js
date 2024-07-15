import http from 'node:http';
import { flaschenpost } from 'flaschenpost';
import { getApi } from './api/getApi.js';
import { InMemoryStore } from './storage/InMemoryStore.js';

const logger = flaschenpost.getLogger();

const port = process.env.PORT ?? 3_000;

const store = new InMemoryStore();

await store.add({
    alias: 'gh',
    url: 'https://www.github.com/thenativeweb'
});

await store.add({
    alias: 'tnw',
    url: 'https://www.thenativeweb.io'
});

await store.add({
    alias: 'yt',
    url: 'https://www.youtube.com/@thenativeweb'
});

const api = getApi({ store });
const server = http.createServer(api);

server.listen(port, () => {
    logger.info('server is running', { port });
});
