import Component from "animate.js/src/components/Component";
import Plant from "../../../transform/Plant";
import random from "animate.js/src/static/random";
import Graphic from "../../../transform/Graphic";
import Rectangle from "animate.js/src/components/Rectangle";
import hitTestBetweenRectangles from "../../../transform/hitTestBetweenRectangles";
import min from "animate.js/src/function/min";
import max from "animate.js/src/function/max";
import PlayerComponent from "./PlayerComponent";

const BallComponent = Plant({
    x: random(20, 280),
    y: 0,
    radius: 4,
    speedX: 0,
    speedY: 0,
    speedDefault: 3,
    score: 0,
    color: '#0f0',
    colorScore: '#2d2d2d',
    paint: {},
    hitTestPoint: false,
    keyManager: {active: {left: false, right: false}},
    graphic: Graphic({}),
    render (paint, graphic, keyManager){
        /** @type {Paint} paint */
        this.paint = paint;
        this.graphic = graphic;
        this.keyManager = keyManager;
        this.speedY = this.speedDefault;
    },
    toRectangle() {
        return Rectangle( this.x - this.radius,  this.y - this.radius,  this.radius * 2, this.radius * 2);
    },
    collision() {
        const player = PlayerComponent.toRectangle();
        const ball = this.toRectangle();

        // if (hitTestBetweenRectangles(PlayerComponent.toRectangle(), this.toRectangle())) {
        if (hitTestBetweenRectangles(PlayerComponent.toRectangle(), this.toRectangle())) {
            this.hitTestPoint = true;
            if (!this.keyManager.active.left && !this.keyManager.active.right) this.speedX = random(-1.5, 1.5);
            else if (this.keyManager.active.left) this.speedX = min([this.speedX, random(-5, -3)]);
            else if (this.keyManager.active.right) this.speedX = max([this.speedX, random(3, 5)]);

            this.y = PlayerComponent.y - 1;
            this.speedY *= -1;
            this.score ++;
        }
    },
    showScore() {
        this.graphic.context.font = '100px sans-serif, monospace, serif';
        this.graphic.context.textAlign = 'center';
        this.graphic.context.textBaseline = 'middle';
        // this.graphic.context.setTransform(1.8,0,0,1,0,0);
        this.graphic.context.scale(2, 1);
        this.graphic.context.fillStyle = this.colorScore;

        this.graphic.context.fillText(this.score,this.graphic.canvas.width / 4, this.graphic.canvas.height / 2);

        this.graphic.context.font = '12px sans-serif, monospace, serif';
        this.graphic.context.textAlign = 'left';
        this.graphic.context.setTransform();

        // this.graphic.reset('font', 'global');
        // this.graphic.reset('font');
        // this.graphic.reset('textAlign');
    },
    animate() {
        this.showScore();

        this.graphic.context.fillStyle = this.color;
        this.graphic.circle(this.x, this.y, this.radius);
        this.graphic.fill();

        this.y += this.speedY;
        this.x += this.speedX;

        // this.hitTestPoint = true; // todo

        if (this.y - 20 > this.paint.canvas.height ) {
            this.hitTestPoint = false;
            this.y = 0;
            this.x = random(20, 280);
            this.speedY = this.speedDefault;
            this.speedX = 0;
            this.score = 0;
            // this.speedY *= -1; // todo
        }

        if (this.y < 0 && this.hitTestPoint) {
            this.speedY *= -1;
        }

        if (this.x > this.paint.canvas.width && this.hitTestPoint) {
            this.speedX *= -1;
        }
        if (this.x < 0 && this.hitTestPoint) {
            this.speedX *= -1;
        }

        this.collision();
    },
    ___() {},
});

export default BallComponent;
