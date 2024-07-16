const ping = () => {
	return (_req, res) => {
		res.json({ ping: 'pong' });
	};
};

export { ping };
