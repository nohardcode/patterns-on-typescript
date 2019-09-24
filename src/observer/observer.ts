interface Subject {
  observers: Observer[];

  attach(observer: Observer): void;
  detach(observer: Observer): void;

  notify(): void;
}

interface Observer {
  update(subject: Subject): void;
}

class ConcreteObservable implements Subject {
  observers: Observer[];
  public state: number;

  constructor() {
    this.observers = [];
  }

  attach(observer: Observer) {
    this.observers.push(observer);
  }

  detach(observer: Observer) {
    const observerIndex = this.observers.indexOf(observer);
    this.observers.splice(observerIndex, 1);
  }

  notify() {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  public someBusinessLogic(): void {
    console.log('\nSubject: I\'m doing something important.');
    this.state = Math.floor(Math.random() * (10 + 1));

    console.log(`Subject: My state has just changed to: ${this.state}`);
    this.notify();
  }
}

class ConcreteObserverA implements Observer {
  public update(subject: ConcreteObservable) {
    if (subject.state < 3) {
      console.log('ConcreteObserverA: Reacted to the event.');
    }
  }
}

class ConcreteObserverB implements Observer {
  public update(subject: ConcreteObservable) {
    if (subject.state === 0 || subject.state >= 2) {
      console.log('ConcreteObserverB: Reacted to the event.');
    }
  }
}

export {
  ConcreteObservable,
  ConcreteObserverA,
  ConcreteObserverB
};
