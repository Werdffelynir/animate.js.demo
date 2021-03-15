import Component from "animate.js/src/components/Component";
import CanvasComponent from "../components/CanvasComponent";
import query from "animate.js/src/static/query";
import Graphic from "../../../transform/Graphic";
import EventKeyManager, {KeyboardEventsNames} from "animate.js/src/components/EventKeyManager";
import PlayerComponent from "../components/PlayerComponent";
import BallComponent from "../components/BallComponent";
import Frames from "animate.js/src/components/Frames";

const GameScene = function () {

    const graphic = CanvasComponent.Graphic;
    const keyManager = CanvasComponent.EventKeyManager;

/*    new Graphic({
        canvas: CanvasComponent.paint.canvas,
        color: '#0f0',
        font: '12 font-family: sans-serif, monospace, serif;',
    });*/
    //const keyManager = EventKeyManager();

    keyManager.each(KeyboardEventsNames.keydown, (event) => {
        if (event.key === 'a') keyManager.active.left = true;
        if (event.key === 'd') keyManager.active.right = true;
    });

    keyManager.each(KeyboardEventsNames.keyup, (event) => {
        if (event.key === 'a') keyManager.active.left = false;
        if (event.key === 'd') keyManager.active.right = false;
    });

    PlayerComponent.render(CanvasComponent.paint, graphic, keyManager);
    BallComponent.render(CanvasComponent.paint, graphic, keyManager);

    // END INIT

    // DYNAMIC

    // PaintTransform
    // const Trans = PaintTransform(CanvasComponent.Paint.canvas);

    const frames = Frames({
        fps: 60,
        paused: false,
    });

    frames.start(() => {
        graphic.clear();
        BallComponent.animate();
        PlayerComponent.animate();
    });
};
GameScene.tag = 'GameScene';

export default GameScene;
