import Pizza from './Pizza';
import { IngredientsFactory } from './IngredientsFactory';

abstract class PizzaStore {
  title: string;
  constructor(title: string) {
    this.title = title;
  }

  orderPizza() {
    const pizza = this.createPizza();
    pizza.prepare();
    pizza.cook();
  }

  abstract createPizza(): Pizza;
}

export default PizzaStore;
