import Game from './src/Game';

if (location.pathname.split('/').filter((v) => v).reverse()[0] === 'loader') {
    Game();
}