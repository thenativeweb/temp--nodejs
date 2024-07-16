const getUrls = ({ store }) => {
	return async (_req, res) => {
		try {
			const urls = await store.findAll();
			res.json(urls);
		} catch (ex) {
			logger.error('an unexpected error occurred', { ex });
			res.writeHead(500);
			res.write('Internal Server Error');
			res.end();
		}
	};
};

export { getUrls };
