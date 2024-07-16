import { flaschenpost } from 'flaschenpost';

const logger = flaschenpost.getLogger();

const shortenUrl = ({ store }) => {
	return async (req, res) => {
		try {
			// TODO: Validate the request body against what
			//       is expected.
			const { alias, url } = req.body;

			try {
				await store.add({ alias, url });
			} catch {
				res.writeHead(409);
				res.write('Conflict');
				res.end();
				return;
			}

			res.writeHead(200);
			res.write('OK');
			res.end();
		} catch (ex) {
			logger.error('an unexpected error occurred', { ex });
			res.writeHead(500);
			res.write('Internal Server Error');
			res.end();
		}
	};
};

export { shortenUrl };
