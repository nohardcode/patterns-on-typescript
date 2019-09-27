import Pizza from './Pizza';
import PizzaStore from './PizzaStore';

class Mozarella implements Pizza {
    description: string;
    name: string;

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }

    cook() {
        console.log(`${this.name } pizza is ready!`);
    }

    prepare() {
        console.log(`${this.name} is prepared and ready to cook!`);
    }
}

class NskPizzaStore extends PizzaStore {
    createPizza(): Pizza {
        return new Mozarella('Mozarella', 'This is mozarella');
    }
}

export default NskPizzaStore;
