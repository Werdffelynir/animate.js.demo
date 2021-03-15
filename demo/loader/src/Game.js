
const Game = function () {
    console.log('Demo loader...');
    if (! window.Animate || ! window.Animate.Static ) {
        return new Error('Animate object not exist!');
    }

    const {
        Clip,
        ClipClass,
        Component,
        KeyboardEventManager,
        MoveClip,
        MoveClipClass,
        Scene,
        StepsScene,
        Timer,
        RoxyListener,
        Roxy,
        AnimationFrame,
        Loader,
    } = window.Animate;

    const {
        query,
        search,
        inject,
        typeOf,
        uri,
        copy,
        each,
        on,
        str2node,
        isHTMLString,
        position,
        positionMouse,
        createElement,
        toHTML,
        toXML,
    } = window.Animate.Static;

    const AppClip = Clip('#app');
    const PanelClip = Clip('#panel');
    const CanvasClip = Clip('#canvas');
    CanvasClip.sprite = {};
    CanvasClip.addSprite = function (key, mc) {
        CanvasClip.sprite[key] = mc;
    };

    CanvasClip.appendSprite = function (key) {
        CanvasClip.inject(CanvasClip.sprite[key].element);
    };
    CanvasClip.on('click', (eve) => {
        console.log(eve)
    });

    // Loader.json('/assets/datafile.json', (json) => { console.log(json) });

    // Loader.jsons({
    //     datafile: '/assets/datafile.json',
    // }, (jsons) => { console.log(jsons) });

    // Loader.javascript({
    //     na: '/assets/na.bundle.js',
    //     datafile: '/assets/datafile.js',
    // }, (script_elements) => { console.log(script_elements) });

    Loader.images({
        bored: '/assets/icon/bored.png',
        emoticon: '/assets/icon/emoticon.png',
        sadface: '/assets/icon/sad-face.png',
        smile: '/assets/icon/smile.png',
        boosteroid: '/assets/svg/boosteroid.svg',
    }, (images) => {
        Object.keys(images).forEach((key) => {
            const length = Object.keys(CanvasClip.sprite).length;
            const mc = MoveClip({
                element: images[key],
            });

            switch (key) {
                case 'boosteroid':
                    mc.x = 100;
                    mc.y = 100;
                    mc.width = 30;
                    mc.height = 30;
                    // mc.rotate = 45;
                    mc.style({
                        transform: 'rotate(45deg)',
                        position:'absolute',
                        opacity: 0.3,
                    });

                    CanvasClip.addSprite(key, mc);
                    CanvasClip.appendSprite(key);
                    break;
                default:
                    mc.x = 50 + (length * 50);
                    mc.y = 50;
                    mc.style({position:'absolute', 'opacity': 0.1});

                    CanvasClip.addSprite(key, mc);
                    CanvasClip.appendSprite(key);
            }
        });
    });

    // Loader.audios();
    // Loader.videos();


    /*
    const appNode = query('#app');
    const panelNode = query('#panel');

    const appClip = Clip(appNode);
    const panelClip = Clip(panelNode);
    panelClip.injectNode = function (name, data) {
        inject('[data-node="'+name+'"]', data.toFixed(5), false, panelClip.element)
    }

    const BallMC = MoveClip({
        element: str2node(`<span></span>`),
        parent: appNode,
        move: {left: false, right: false, up: false, down: false},
        maxY: 4,
        speed: 0.4,
        speedDefault: 0.4,
        speedY: 0.02,
        acceleratorY: 0.4,
        acceleratorYDefault: 0.4,
        init(){
            this.x = (appClip.width / 2) - (this.width / 2);
            this.width = 20;
            this.height = 20;
            this.style({
                position: 'absolute',
                display: 'block',
                background: '#3b3b3b',
                borderRadius: '50%',
            });
            this.append();
        },
        append(){
            this.parent.appendChild(this.element)
        },
        animation(progress){

            this.acceleratorY += this.speedY;
            this.y += this.acceleratorY;
            // panelClip.injectNode('speedY', this.acceleratorY);

            this.x += this.move.right || this.move.left ? this.speed : 0;

            if (this.acceleratorY > this.maxY) {
                this.acceleratorY = this.maxY;
            }

            if (this.y > appClip.height - 30/!*this.height*!/) {
                this.acceleratorY *= -1;
            }
            if (this.x < 0 || this.x > appClip.width - this.width) this.speed *= -1;
        },
    });

    const Anim = AnimationFrame();
    Anim.start(function(progress){
        if (Math.round(progress) % 1 === 0)
        BallMC.animation(progress);
    });

    on(document, 'mousedown', (event) => {
        const position = positionMouse(event);
        BallMC.move.right = false;
        BallMC.move.left = false;
        if (position.x > BallMC.x - BallMC.width) {
            BallMC.speed = BallMC.speedDefault;
            BallMC.move.right = true;
        } else {
            BallMC.speed = -BallMC.speedDefault;
            BallMC.move.left = true;
        }
    });

    on(document, 'mouseup', (event) => {});
    */
};

export default Game;
