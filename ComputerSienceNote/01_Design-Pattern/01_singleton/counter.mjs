let instance;

class Counter {
    #counter = 0;

    constructor() {
        if (instance) {
            throw new Error("You can create only one instance");
        }
        instance = this;
    }

    getCount() {
        return this.#counter;
    }

    increment() {
        return this.#counter += 1;
    }

    decrement() {
        return this.#counter -= 1;
    }
}

export const singletonCounter = new Counter();