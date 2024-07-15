// Klassischer Import (CommonJS)
// const { add } = require('./math/calculator');

// Moderner Import (ESM)
import { add } from './math/calculator.js';
// import foo from './math/calculator.js';

import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html'
    });

    res.write('Hallo Welt!\n');

    const sum = add(23, 42);
    res.write(`Summe: ${sum}\n`);

    res.write(`${req.method} ${req.url}\n`);

    res.end();
});

server.listen(3000);
