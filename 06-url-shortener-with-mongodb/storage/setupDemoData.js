const setupDemoData = async ({ store }) => {
	try {
		await store.add({
			alias: 'gh',
			url: 'https://www.github.com/thenativeweb',
		});

		await store.add({
			alias: 'tnw',
			url: 'https://www.thenativeweb.io',
		});

		await store.add({
			alias: 'yt',
			url: 'https://www.youtube.com/@thenativeweb',
		});
	} catch (ex) {
		if (ex.message.includes('E11000')) {
			return;
		}

		throw ex;
	}
};

export { setupDemoData };
