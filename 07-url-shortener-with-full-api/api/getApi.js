import express from 'express';
import { getUrls } from './getUrls.js';
import { ping } from './ping.js';
import { redirect } from './redirect.js';
import { shortenUrl } from './shortenUrl.js';

const getApi = ({ store }) => {
	const api = express();

	api.use(express.json({ limit: '10kb' }));

	// Technical stuff, such as ping, health, …
	api.get('/api/ping', ping());

	// Commands
	api.post('/api/shorten-url', shortenUrl({ store }));

	// Queries
	api.get('/api/get-urls', getUrls({ store }));
	api.get('/:alias', redirect({ store }));

	return api;
};

export { getApi };
