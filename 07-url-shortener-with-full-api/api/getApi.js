import express from 'express';
import { ping } from './ping.js';
import { redirect } from './redirect.js';

const getApi = ({ store }) => {
	const api = express();

	// Technical stuff, such as ping, health, …
	api.get('/api/ping', ping());

	// Commands
	api.post('/api/shorten-url', ...);

	// Queries
	api.post('/api/get-urls', ...);
	api.get('/:alias', redirect({ store }));

	return api;
};

export { getApi };
