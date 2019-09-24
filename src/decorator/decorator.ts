abstract class Beverage {
    abstract cost(): number;
    description: string = 'Unknown';

    public getDescription(): string {
        return this.description;
    }
}

class Tea extends Beverage {
    constructor() {
        super();
        this.description = 'A cup of tea';
    }

    cost(): number {
        return 25;
    }
}

abstract class BeverageDecorator extends Beverage {
    public abstract getDescription(): string;
    protected wrappee: Beverage;

    constructor(source: Beverage) {
        super();
        this.wrappee = source;
    }
}

class WithSugar extends BeverageDecorator {
    cost(): number {
        return this.wrappee.cost() + 10;
    }

    getDescription(): string {
        return `${this.wrappee.getDescription()} with sugar`;
    }
}

class WithMilk extends BeverageDecorator {
    cost(): number {
        return this.wrappee.cost() + 8;
    }

    getDescription(): string {
        return `${this.wrappee.getDescription()} and milk`;
    }

}

export {
    Tea,
    WithSugar,
    WithMilk
};
