
const Game = function () {
    console.log('Game demo');
    if (! window.Animate || ! window.Animate.Static ) {
        return new Error('Animate object not exist!');
    }

    const {
        Clip,
        Component,
        KeyboardEventManager,
        MoveClip,
        Scene,
        StepsScene,
        Timer,
        RoxyListener,
        Roxy,
        AnimationFrame,
    } = window.Animate;

    const {
        createElement,
        query,
        search,
        inject,
        typeOf,
        uri,
        copy,
        each,
        on,
        random,
    } = window.Animate.Static;

    const appNode = query('#app');
    const pointNode = query('#point');

    const AppClip = Clip(appNode);

    const createRoadMC = function(){
        const element = document.createElement('div');
        each(30, () => {
            element.appendChild(createElement('div', {class: 'mc-road'}));
        });
        element.className = 'mc';
        element.appendChild(createElement('div', {class: 'mc mc-line-left'}));
        element.appendChild(createElement('div', {class: 'mc mc-line-right'}));

        const mc = MoveClip({
            element: element,
            x: 200,
            y: -500,
            speed: 0.4,
        });
        appNode.appendChild(element);
        return mc;
    };

    const createCarMC = function(){
        const element = createElement('div', {class: 'mc mc-car'});
        appNode.appendChild(element);
        const root = MoveClip({
            element: element,
            x: random(100, 260),
            y: 0,
            speed: 0.3,
            animation (i){
                this.y += RoadMC.speed + this.speed;
                if (this.y > AppClip.height ) {
                    this.y = -60;
                    this.x = random(100, 260);
                }
            },
        });
        //
        console.log();
        return root;
    };
    const Car1 = createCarMC();

    const createPlayerMC = function(){
        const element = document.createElement('div');
        element.className = 'mc mc-player';
        const mc = MoveClip({
            element: element,
            x: 220,
            y: AppClip.height - 60,
            speed: 1,
            speedX: 1,
        });
        appNode.appendChild(element);
        return mc;
    };

    const RoadMC = createRoadMC();
    const PlayerMC = createPlayerMC();

    const keyboard = KeyboardEventManager();
    keyboard.left = false;
    keyboard.right = false;
    keyboard.up = false;
    keyboard.down = false;
    keyboard.each('keydown', (event) => {
        if (event.code === 'KeyA') keyboard.left = true;
        if (event.code === 'KeyD') keyboard.right = true;
        if (event.code === 'KeyW') keyboard.up = true;
        if (event.code === 'KeyS') keyboard.down = true;
    })
    keyboard.each('keyup', (event) => {
        if (event.code === 'KeyA') keyboard.left = false;
        if (event.code === 'KeyD') keyboard.right = false;
        if (event.code === 'KeyW') keyboard.up = false;
        if (event.code === 'KeyS') keyboard.down = false;
    })

    AnimationFrame().start((iter) => {
        Car1.animation(0);

        if (keyboard.left ) {
            PlayerMC.x -= PlayerMC.speedX;
        }
        if (keyboard.right ) {
            PlayerMC.x += PlayerMC.speedX;
        }
        if (keyboard.up ) {
            RoadMC.speed += 0.1;
        }
        if (keyboard.down ) {
            RoadMC.speed -= 0.1;
        }

        RoadMC.y += RoadMC.speed;
        if (RoadMC.y > 0) {
            RoadMC.y = -500;
        }
    });
};

export default Game;
