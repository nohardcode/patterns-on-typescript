import { IngredientsFactory } from './IngredientsFactory';

export default interface Pizza {
    name: string;
    prepare: () => void;
    cook: () => void;
    ingredientsFactory: IngredientsFactory;
}
