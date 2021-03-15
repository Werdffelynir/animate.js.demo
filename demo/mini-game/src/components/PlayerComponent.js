import Component from "animate.js/src/components/Component";
import Plant from "../../../transform/Plant";
import Graphic from "../../../transform/Graphic";
import Rectangle from "animate.js/src/components/Rectangle";

const PlayerComponent = Plant({
    x: 200,
    y: 145,
    width: 50,
    height: 5,
    speed: 4,
    paint: {},
    color: '#0f0',
    graphic: Graphic({}),
    keyManager: {active:{left:false,right:false}},
    render (paint, graphic, keyManager){
        /** @type {Paint} paint */
        this.paint = paint;
        this.graphic = graphic;
        this.keyManager = keyManager;
    },
    animate() {
        this.graphic.context.fillStyle = this.color;
        this.graphic.rectRound(this.x, this.y, this.width, this.height, 2);
        this.graphic.fill();
        this.control();
    },
    toRectangle() {
        return Rectangle( this.x,  this.y,  this.width, this.height);
    },
    control() {
        if (this.keyManager.active.left && this.keyManager.active.right) {
            // stop
        } else
        if (this.keyManager.active.left) {
            this.x -= this.speed;
        } else
        if (this.keyManager.active.right) {
            this.x += this.speed;
        }

        if (this.x > this.paint.canvas.width && this.keyManager.active.right) {
            this.x = -this.width;
        }

        if (this.x + this.width < 0 && this.keyManager.active.left) {
            this.x = this.paint.canvas.width;
        }
    },
    ___() {},
});

export default PlayerComponent;
