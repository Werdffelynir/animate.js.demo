import Router from "animate.js/src/components/Router";
import scene from "./scene";


const routeContext = {};
const route = Router({
    root: '/demo/menu/',
    every () {

    },
    routes: {
        '/' : function () {
            scene.open('menu');
        },
        '#menu' : function () {
            scene.open('menu');
        },
        '#game' : function () {
            scene.open('game');
        },
        '#newGame' : function () {
            scene.open('newGame');
        },
        '#loadGame' : function () {
            scene.open('loadGame');
        },
        '#saveGame' : function () {
            scene.open('saveGame');
        },
        '#gameOver' : function () {
            scene.open('gameOver');
        },
        '#settings' : function () {
            scene.open('settings');
        },
    },
    context: routeContext,
});

export default route;