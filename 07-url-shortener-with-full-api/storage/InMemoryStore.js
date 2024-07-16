class InMemoryStore {
	#urls;

	constructor() {
		this.#urls = {};
	}

	//biome-ignore lint/suspicious/useAwait: To conform to the store interface, this method must be async.
	static async initialize() {
		return new InMemoryStore();
	}

	//biome-ignore lint/suspicious/useAwait: To conform to the store interface, this method must be async.
	async add({ alias, url }) {
		if (this.#urls[alias]) {
			throw new Error(`alias '${alias}' already exists`);
		}

		this.#urls[alias] = url;
	}

	//biome-ignore lint/suspicious/useAwait: To conform to the store interface, this method must be async.
	async findByAlias(alias) {
		const url = this.#urls[alias];

		if (!url) {
			throw new Error(`alias '${alias}' not found`);
		}

		return url;
	}
}

export { InMemoryStore };
