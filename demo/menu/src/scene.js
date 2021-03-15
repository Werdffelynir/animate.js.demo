import AppComponent from "./components/AppComponent";
import MenuComponent from "./components/MenuComponent";
import GameComponent from "./components/GameComponent";
import SettingsComponent from "./components/SettingsComponent";
import GameOverComponent from "./components/GameOverComponent";
import LoadComponent from "./components/LoadComponent";
import SaveComponent from "./components/SaveComponent";
import Scene from "animate.js/src/components/Scene";

const clear = function(){
    AppComponent.clear();
};

const sceneContext = {};
const scene = Scene({
    menu () {
        clear();
        MenuComponent.render();
    },
    game () {
        clear();
        GameComponent.render();
    },
    newGame () {
        clear();
        GameComponent.render();
    },
    loadGame () {
        clear();
        LoadComponent.render();
    },
    saveGame () {
        clear();
        SaveComponent.render();
    },
    gameOver () {
        clear();
        GameOverComponent.render();
    },
    settings () {
        clear();
        SettingsComponent.render();
    },
}, sceneContext);

export default scene;
