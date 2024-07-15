import http from 'http';
import { flaschenpost } from 'flaschenpost';

const logger = flaschenpost.getLogger();

const server = http.createServer((req, res) => {
    let location = undefined;

    switch (req.url) {
        case '/tnw':
            location = 'https://www.thenativeweb.io';
            break;
        case '/yt':
            location = 'https://www.youtube.com/@thenativeweb';
            break;
        default:
            res.writeHead(404);
            res.end();
            return;
    }

    res.writeHead(307, { location });
    res.end();
});

const port = 3000;

server.listen(port, () => {
    logger.info('server is running', { port });
});
