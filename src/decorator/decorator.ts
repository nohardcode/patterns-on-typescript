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
}

class WithSugar extends BeverageDecorator {
    private wrappee: Beverage;
    constructor(source: Beverage) {
        super();
        this.wrappee = source;
    }

    cost(): number {
        return this.wrappee.cost() + 10;
    }

    getDescription(): string {
        return `${this.wrappee.getDescription()} with sugar`;
    }
}

export {
    Tea,
    WithSugar
};
