import Static from "animate.js/src/static";
import Animate from "animate.js/src";
import FPSDisplayComponent from "./components/FPSDisplayComponent";
import stylizer from "animate.js/src/static/stylizer";

const Controller = function () {
    console.log('Controller:Car');

    const {

        Clip,
        Component,
        ComponentClass,
        KeyboardEventManager,
        EventCodes,
        EventCodesNames,
        EventKeys,
        EventKeysNames,
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
        accelerate: 0.04,
        speed: 0,
        speedY: 0,
        x: 0,
        y: 0,
        xmov: 0,
        ymov: 0,
        angle: 0,
        gazzz: false,
        init() {
            this.style({opacity: 1, position: 'absolute'});
            this.element.setAttribute('src', Resource.sprite.car_r)
            this.element.addEventListener('load', (event) => {
                this.loaded = true;
                this.x = 100;
                this.y = 200;
                this.width = 56;
                this.height = 34;
                this.parent.inject(this.element)
            });
        },
        gazOn() {
            this.gazzz = true;
            this.speed += 0.01 + this.accelerate;
        },
        gazOff() {
            this.gazzz = false;

            if (this.speed > 0) {
                this.speed -= 0.06 + this.accelerate;
            }
            if (this.speed < 0) {
                this.speed = 0;
            }
        },
        run() {
            // if (this.speed > 10 )
            //     this.speed = 10;

            this.xmov = this.speed;
            this.ymov = this.speedY;

            this.x += this.xmov;
            this.y += this.ymov;

            this.angle = Math.atan2(this.ymov, this.xmov) * 180 / Math.PI;
            // console.log(this.angle)
            stylizer(this.element, {transform: 'rotate(' + (this.angle) + 'deg)'});

            if (this.x > window.innerWidth - this.width) {
                this.x = 0;
            }
            if (this.x < 0) {
                this.x = window.innerWidth - this.width;
            }
        },
        runUp() {
            this.y -= this.speed;
        },
        runDown() {
            this.y += this.speed;
        },
        runLeft() {
            this.speedY = -0.1;
        },
        runRight() {
            this.speedY = 0.1;
        },
    });

    /*
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

    */

    const KeyboardManager = KeyboardEventManager();
    const KeyboardPress = {
        up: false,
        down: false,
        left: false,
        right: false,
    };

    function keyPressDown(event) {
        if (event.code === EventCodesNames.ArrowUp) KeyboardPress.up = true;
        if (event.code === EventCodesNames.KeyW) KeyboardPress.up = true;
        if (event.code === EventCodesNames.ArrowDown) KeyboardPress.down = true;
        if (event.code === EventCodesNames.KeyS) KeyboardPress.down = true;
        if (event.code === EventCodesNames.ArrowLeft) KeyboardPress.left = true;
        if (event.code === EventCodesNames.KeyA) KeyboardPress.left = true;
        if (event.code === EventCodesNames.ArrowRight) KeyboardPress.right = true;
        if (event.code === EventCodesNames.KeyD) KeyboardPress.right = true;
    }

    function keyUnpressDown(event) {
        if (event.code === EventCodesNames.ArrowUp) KeyboardPress.up = false;
        if (event.code === EventCodesNames.KeyW) KeyboardPress.up = false;
        if (event.code === EventCodesNames.ArrowDown) KeyboardPress.down = false;
        if (event.code === EventCodesNames.KeyS) KeyboardPress.down = false;
        if (event.code === EventCodesNames.ArrowLeft) KeyboardPress.left = false;
        if (event.code === EventCodesNames.KeyA) KeyboardPress.left = false;
        if (event.code === EventCodesNames.ArrowRight) KeyboardPress.right = false;
        if (event.code === EventCodesNames.KeyD) KeyboardPress.right = false;
    }

    KeyboardManager.each('keydown', keyPressDown);
    KeyboardManager.each('keyup', keyUnpressDown);

    const frames = Frames({
        fps: 0,
    });

    const fps = FPSDisplayComponent();

    fps.init();

    frames.start((i) => {
        fps.processor();
        CarIcon.run();

        if (KeyboardPress.up) {
            CarIcon.gazOn();
        } else {
            CarIcon.gazOff();
        }
        /*        if (KeyboardPress.up) {
                    CarIcon.runUp();
                }
                if (KeyboardPress.down) {
                    CarIcon.runDown();
                }*/
        if (KeyboardPress.left) {
            CarIcon.runLeft();
        }
        if (KeyboardPress.right) {
            CarIcon.runRight();
        }
    });

    // const Anim = AnimationFrame();
    //
    // Anim.start(() => {
    //
    // });

};

export default Controller;
