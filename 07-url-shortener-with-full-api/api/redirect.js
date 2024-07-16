import { flaschenpost } from 'flaschenpost';

const logger = flaschenpost.getLogger();

const redirect = ({ store }) => {
	return async (req, res) => {
		try {
			const { alias } = req.params;

			let url;
			try {
				url = await store.findByAlias(alias);
			} catch {
				res.writeHead(404);
				res.end();
				return;
			}

			res.redirect(307, url);
		} catch (ex) {
			logger.error('an unexpected error occurred', { ex });
			res.writeHead(500);
			res.write('Internal Server Error');
			res.end();
		}
	};
};

export { redirect };
