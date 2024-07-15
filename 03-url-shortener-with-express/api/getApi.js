import express from 'express';
import { ping } from './ping.js';
import { redirect } from './redirect.js';

const getApi = function () {
    const api = express();

    api.get('/ping', ping);
    api.get('/:alias?', redirect);

    return api;
};

export { getApi };
