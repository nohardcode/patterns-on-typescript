// import { ConcreteObservable, ConcreteObserverB, ConcreteObserverA } from './observer/observer';
import { Tea, WithSugar, WithMilk } from './decorator/decorator';

async function bootstrap(main: HTMLMainElement) {
    const module = await import(`./pages${location.pathname}.ts`);
    main.innerHTML = module.default;
}

document.addEventListener('DOMContentLoaded', async () => {
    const main: HTMLMainElement = document.querySelector('main');
    const links = Array.from(document.querySelectorAll('a'));

    await bootstrap(main);

    links.forEach((link) => {
        link.addEventListener('click', async (e: MouseEvent) => {
            e.preventDefault();

            const module = await import(`./pages/${link.dataset.chunk}.ts`);

            history.replaceState({}, `${link.dataset.title}`, `/${link.dataset.chunk}`);
            main.innerHTML = module.default;
        });
    });
});

let tea = new Tea();
console.log(tea.getDescription());
console.log(tea.cost());
tea = new WithSugar(tea);
console.log(tea.getDescription());
console.log(tea.cost());
tea = new WithMilk(tea);
console.log(tea.getDescription());
console.log(tea.cost());
