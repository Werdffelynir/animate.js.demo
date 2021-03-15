import Animate from "animate.js/src";
import Static from "animate.js/src/static";

const Controller = function () {
    console.log('Controller:frames');

    const {

        Clip,
        Component,
        ComponentClass,
        KeyboardEventManager,
        MoveClip,
        MoveClipClass,
        Scene,
        SceneClass,
        StepsScene,
        Timer,
        RoxyListener,
        Roxy,
        AnimationFrame,
        Frames,
        Loader,
        Matrix,
        Point,
        Rectangle,
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
    } = Static;

    const frames = Frames({fps: 24});
    let lastLoop = new Date();

    const FPSComponent = Component({
        id: 'FPSComponent',
        template: `<div data-node="fps">0</div>`,
        parent: Clip('#app'),
        complete(){
            this.parent.append(this.template);
        },
        methods: {
            showFPS(fps){
                this.elements('node', 'fps').textContent = fps;
            },
        },
        animation(i){
            const thisLoop = new Date();
            const fps = 1000 / (thisLoop - lastLoop);
            lastLoop = thisLoop;
            this.showFPS('FPS: ' + Math.round(fps));
            if (Math.round(i) % 50 === 0) {}
        },
    });

    const SunMoveclip = MoveClip({
        element: `<div data-node="sun" />`,
        parent: Clip('#app'),
        x: 50, y: 100, width: 30, height: 30,
        speedX: 3.5,
        speedY: 0,
        init(){
            this.parent.append(this.element);
            this.style({
                position: 'absolute',
                borderRadius: '50%',
                backgroundColor: '#b0ba10',
            });
            // console.log()
        },
        animation(){
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > window.innerWidth - 100) { this.x = 0 }
        },
    });

    const SunMoveclipClone = SunMoveclip.clone(true);

    SunMoveclipClone.y = 200;
    SunMoveclipClone.speedX = 8;

    frames.start((i, p) => {
        FPSComponent.animation(i);
        SunMoveclip.animation(i);
        SunMoveclipClone.animation(i);
    });

};

export default Controller;
