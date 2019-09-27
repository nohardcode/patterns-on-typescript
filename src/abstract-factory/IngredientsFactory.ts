interface Ingredients {
    name: string;
}

class Sause implements Ingredients {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Vegetable implements Ingredients {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

abstract class IngredientsFactory {
    abstract createSause(): Sause;
    abstract createVegetables(): Vegetable[];
}

class NyIngredientsFactory extends IngredientsFactory {
    createSause(): Sause {
        return new Sause('chili');
    }

    createVegetables(): Vegetable[] {
        return [new Vegetable('onion'), new Vegetable('tomato')];
    }
}

export {
    IngredientsFactory,
    NyIngredientsFactory
};
