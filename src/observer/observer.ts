interface Subject {
  observers: Observer[];

  attach(observer: Observer): void;
  detach(observer: Observer): void;

  notify(): void;
}

interface Observer {
  update(subject: Subject): void
}

class ConcreteObservable implements Subject {

}

export default ConcreteObservable;