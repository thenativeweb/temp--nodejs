import http from 'node:http';
import { flaschenpost } from 'flaschenpost';
import { getApi } from './api/getApi.js';

const logger = flaschenpost.getLogger();

const port = process.env.PORT ?? 3_000;

const api = getApi();
const server = http.createServer(api);

server.listen(port, () => {
    logger.info('server is running', { port });
});
