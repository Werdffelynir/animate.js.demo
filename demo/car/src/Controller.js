import Static from "animate.js/src/static";
import Animate from "animate.js/src";

const Controller = function () {
    console.log('Controller:Car');

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
        Loader,
        Matrix,
        Point,
        Rectangle,
        Frames,
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

    const Resource = {
        icon: {
            bored: '/assets/icon/bored.png',
            emoticon: '/assets/icon/emoticon.png',
            sad: '/assets/icon/sad-face.png',
            smile: '/assets/icon/smile.png',
        },
        image: {
            hero: '/assets/sprite/hero-sprite.png',
            boosteroid: '/assets/svg/boosteroid.svg',
        },
        sprite: {
            car: '/assets/sprite/car.png',
            car_r: '/assets/sprite/car_r.png',
        }
    };

    const CarIcon = MoveClip({
        element: new Image(),
        parent: Clip('#app'),
        loaded: false,
        init(){
            this.style({opacity: 1, position: 'absolute'});
            this.element.setAttribute('src', Resource.sprite.car_r)
            this.element.addEventListener('load', (event) => {
                this.loaded = true;
                this.x = 100; // window.innerWidth / 2 - this.width;
                this.y = 200;
                this.parent.inject(this.element)
            });
        },
    });

    const SmileIcon = MoveClip({
        element: new Image(),
        parent: Clip('#app'),
        loaded: false,
        init(){
            this.style({opacity: 1, position: 'absolute'});
            this.element.setAttribute('src', Resource.image.boosteroid)
            this.element.addEventListener('load', (event) => {
                this.loaded = true;
                this.x = window.innerWidth / 2 - this.width;
                this.y = window.innerHeight / 2;
                // this.parent.inject(this.element)
            });
        },
    });



    const frames = Frames({
        fps: 2,
    });
    frames.start((i) => {
        //console.log(i)
    });

    // const Anim = AnimationFrame();
    //
    // Anim.start(() => {
    //
    // });

};

export default Controller;
