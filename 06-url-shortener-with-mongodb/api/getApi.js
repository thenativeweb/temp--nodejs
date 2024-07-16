import express from 'express';
import { ping } from './ping.js';
import { redirect } from './redirect.js';

const getApi = ({ store }) => {
	const api = express();

	api.get('/ping', ping());
	api.get('/:alias?', redirect({ store }));

	return api;
};

export { getApi };
