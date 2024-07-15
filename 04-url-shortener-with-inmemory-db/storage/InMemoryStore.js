class InMemoryStore {
    #urls;

    constructor() {
        this.#urls = {};
    }

    async add({ alias, url }) {
        if (this.#urls[alias]) {
            throw new Error(`alias '${alias}' already exists`);
        }

        this.#urls[alias] = url;
    }

    async findByAlias(alias) {
        const url = this.#urls[alias];

        if (!url) {
            throw new Error(`alias '${alias}' not found`);
        }

        return url;
    }
}

export { InMemoryStore };
