import Component from "animate.js/src/components/Component";
import Plant from "./Plant";
import GameScene from "../scenes/GameScene";
import GameOverScene from "../scenes/GameOverScene";
import GamePauseScene from "../scenes/GamePauseScene";
import CanvasComponent from "./CanvasComponent";
import PlayerComponent from "./PlayerComponent";
import BallComponent from "./BallComponent";
import query from "animate.js/src/static/query";
import Graphic from "../../../transform/Graphic";
import EventKeyManager, {KeyboardEventsNames} from "animate.js/src/components/EventKeyManager";
import Frames from "animate.js/src/components/Frames";
import Scene from "animate.js/src/components/Scene";

const RenderComponent = Plant({
    render(){
        CanvasComponent.parent(query('#app'));
        CanvasComponent.render();

        const ScenesManager = Scene();

        ScenesManager.add(GameScene.tag, GameScene);
        ScenesManager.add(GamePauseScene.tag, GamePauseScene);
        ScenesManager.add(GameOverScene.tag, GameOverScene);

        // ScenesManager.open(GameOverScene.tag, []);
        // return 0;

        if (BallComponent.score > 5) {
            ScenesManager.open(GameOverScene.tag, []);
        } else {
            ScenesManager.open(GameScene.tag, []);
        }

        return 0;

    },
});

export default RenderComponent;
