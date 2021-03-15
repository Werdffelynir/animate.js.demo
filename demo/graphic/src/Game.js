
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
        position,
        positionMouse,
    } = window.Animate.Static;

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

            if (this.y > appClip.height - 30/*this.height*/) {
                this.acceleratorY *= -1;
            }
            if (this.x < 0 || this.x > appClip.width - this.width) this.speed *= -1;
        },
    });

    const Anim = AnimationFrame();
    Anim.start(function(progress){
        //if (Math.round(progress) % 1 === 0)
        BallMC.animation(progress);
    });
    //Anim.cancel();

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
};

export default Game;
