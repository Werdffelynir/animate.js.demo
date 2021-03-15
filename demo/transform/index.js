import domLoaded from "animate.js/src/static/domLoaded";
import Component from "animate.js/src/components/Component";
import createElement from "animate.js/src/static/createElement";
import addCss from "animate.js/src/static/addCss";
import Paint from "animate.js/src/components/Paint";
import query from "animate.js/src/static/query";
import Scene from "animate.js/src/components/Scene";
import merge from "animate.js/src/static/merge";
import Frames from "animate.js/src/components/Frames";
import Graphic from "./Graphic";
import random from "animate.js/src/static/random";
import EventKeyManager, {KeyboardEventsNames} from "animate.js/src/components/EventKeyManager";
import Rectangle from "animate.js/src/components/Rectangle";
import stylizer from "animate.js/src/static/stylizer";
import Clip from "animate.js/src/components/Clip";
import Plant from "./Plant";
import hitTestBetweenRectangles from "./hitTestBetweenRectangles";
import max from "animate.js/src/function/max";
import min from "animate.js/src/function/min";
import sum from "animate.js/src/function/sum";
import EnterFrame from "animate.js/src/components/EnterFrame";


domLoaded(function () {
    console.log('domLoaded')

/*
    const animator = EnterFrame({
        fps: 30,
    });

    let detail = {id: 101, name: 'name'};

    function animatorAddListener(event) {
        console.log('animator:', event.detail, event.target)
    }
    animator.addListener(animatorAddListener, {detail});
    animator.removeListener(animatorAddListener);

    document.addEventListener(EnterFrame.ENTER_FARME, animatorAddListener);
    document.removeEventListener(EnterFrame.ENTER_FARME, animatorAddListener);

    animator.start();
*/

    EnterFrame({fps: 2, global: true}).start();
    document.addEventListener(EnterFrame.ENTER_FRAME, (event) => {
        console.log('ENTER_FRAME');
    });

    return ;
    // INIT
    addCss({
        '#canvas': {
            border: '3px solid #ff0',
            backgroundColor: '#232323',
        },
    });

    // Components
    const CanvasComponent = Component({
        id: 'ComponentAxulem',
        template: createElement('canvas', {id: 'canvas', width: 300, height: 160}),
        parentElement: null,
        paint: null,
        canvas: null,
        context: null,
        clip: ()=>{},
        prop: ()=>{},
        init() {
            const paint = Paint(this.template, {
                fillStyle: '#f0f',
            });
            this.paint = paint;
            this.canvas = paint.canvas;
            this.context = paint.context;
            this.clip = paint.clip;
            this.prop = paint.prop;
        },
        parent(element) { this.parentElement = element },
        render() {
            this.parentElement.appendChild(this.template);
        },
    });

    const BollComponent = Plant({
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
                console.log(this.speedX, this.keyManager.active)

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


    // Rendering of components

    // Scenes
    const GameScene = function () {

    };
    GameScene.tag = 'GameScene';

    const GamePauseScene = function () {

    };
    GamePauseScene.tag = 'GamePauseScene';

    const GameOverScene = function () {

    };
    GameOverScene.tag = 'GameOverScene';

    const ScenesManager = Scene();

    ScenesManager.add(GameScene.tag, GameScene);
    ScenesManager.add(GamePauseScene.tag, GamePauseScene);
    ScenesManager.add(GameOverScene.tag, GameOverScene);
    ScenesManager.next();
});


/*

if (location.pathname.split('/').filter((v) => v).reverse()[0] === 'transform') {
    Controller();
}

*/
