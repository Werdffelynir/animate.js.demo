import Controller from './src/Controller';

if (location.pathname.split('/').filter((v) => v).reverse()[0] === 'car2') {
    Controller();
}