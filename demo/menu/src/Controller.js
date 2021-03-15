import Animate from "animate.js/src";
import Static from "animate.js/src/static";
import MenuComponent from "./components/MenuComponent";
import AppComponent from "./components/AppComponent";
import route from "./route";
import scene from "./scene";
import DashboardComponent from "./components/DashboardComponent";

const Controller = function () {
    console.log('Controller:menu');

    const {
        Clip,
        Component,
        KeyboardEventManager,
        MoveClip,
        Scene,
        StepsScene,
        Timer,
        RoxyListener,
        Roxy,
        AnimationFrame,
        Loader,
        Matrix,
        Point,
        Rectangle,
        Router,
    } = Animate;

    const {
        query,
        search,
        inject,
        typeOf,
        uri,
        copy,
        each,
        on,
        trimSymbols,
    } = Static;

    MenuComponent.props = {
        route: route,
        scene: scene,
    };

    DashboardComponent.props = {
        route: route,
        scene: scene,
    };

    scene.open('game');
};

export default Controller;
