import Component from "animate.js/src/components/Component";
import CanvasComponent from "../components/CanvasComponent";


const text = function (message, x = 0, y = 0, params = {}) {
    const graphic = CanvasComponent.Graphic;

    graphic.properties({
        font: 'bold 40px sans-serif, monospace, serif',
        fillStyle: '#0d0',
    });
    graphic.context.fillText(message, x, y);
    // font: 1.2em "Fira Sans", sans-serif;
    // font: italic 1.2em "Fira Sans", serif;
    // font: italic small-caps bold 16px/2 cursive;
    // font: small-caps bold 24px/1 sans-serif;
    // font: caption;

    // this.graphic.context.font = '100px sans-serif, monospace, serif';
    // this.graphic.context.textAlign = 'center';
    // this.graphic.context.textBaseline = 'middle';
    // // this.graphic.context.setTransform(1.8,0,0,1,0,0);
    // this.graphic.context.scale(2, 1);
    // this.graphic.context.fillStyle = this.colorScore;
    //
    // this.graphic.context.fillText(this.score,this.graphic.canvas.width / 4, this.graphic.canvas.height / 2);
    //
    // this.graphic.context.font = '12px sans-serif, monospace, serif';
    // this.graphic.context.textAlign = 'left';
    // this.graphic.context.setTransform();
}
const GameOverScene = function () {

    const graphic = CanvasComponent.Graphic;
    const keyManager = CanvasComponent.EventKeyManager;

    graphic.properties({
        font: 'bold 40px sans-serif, monospace, serif',
        fillStyle: '#0d0',
        textBaseline: 'middle',
    });
    graphic.text('Game Over', 40, 80);

};
GameOverScene.tag = 'GameOverScene';

export default GameOverScene;
