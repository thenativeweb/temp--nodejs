class Dog {
    #name

    constructor(name) {
        this.#name = name;
    }

    async bark() {
        console.log(`Wau, wau, ${this.#name}!`);
    }
}

const greet = () => {
    const name = 'Welt'

    console.log(`Hallo ${name}!`);
};

greet();
