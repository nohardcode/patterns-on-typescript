import Pizza from './Pizza';
import PizzaStore from './PizzaStore';
import { IngredientsFactory, NyIngredientsFactory} from './IngredientsFactory';

class Mozarella implements Pizza {
    name: string = 'Mozarella';
    ingredientsFactory: IngredientsFactory;

    constructor(ingredientsFactory: IngredientsFactory) {
        this.ingredientsFactory = ingredientsFactory;
    }
    cook() {
        const sause = this.ingredientsFactory.createSause();
        const vegetables = this.ingredientsFactory.createVegetables();
        console.log(`cooking with ${sause.name}`);
        vegetables.forEach(vegetable => console.log(`cooking with ${vegetable.name}`));
        console.log(`${this.name } pizza is ready!`);
    }

    prepare() {
        console.log(`${this.name} is prepared and ready to cook!`);
    }
}

class NskPizzaStore extends PizzaStore {
    ingredientsFactory: IngredientsFactory;
    constructor(name: string) {
        super(name);
        this.ingredientsFactory = new NyIngredientsFactory();
    }
    createPizza(): Pizza {
        return new Mozarella(this.ingredientsFactory);
    }
}

export default NskPizzaStore;
