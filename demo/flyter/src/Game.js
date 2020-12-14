
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

    const ms = MoveClip({
        element: pointNode,
        x: random(100, 260),
        y: 0,
        speed: 0.3,
    });

    const createRoadMC = function(){
        const element = document.createElement('div');
        each(30, () => {
            element.appendChild(createElement('div', {class: 'mc-road'}));
        });
        element.className = 'mc ';
        const mc = MoveClip({
            element: element,
            x: 200,
            y: -500,
            speed: 0.4,
        });
        appNode.appendChild(element);
        return mc;
    };
    const createCarMC = function(){};
    const createPlayerMC = function(){
        const element = document.createElement('div');
        element.className = 'mc mc-player';
        const mc = MoveClip({
            element: element,
            x: 220,
            y: 500,
            speed: 1,
            speedX: 1,
        });
        appNode.appendChild(element);
        return mc;
    };

    const roadMC = createRoadMC();
    const playerMC = createPlayerMC();

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
        ms.y += roadMC.speed + ms.speed;
        if (ms.y > window.innerHeight - ms.height) {
            ms.y = -50;
            ms.x = random(100, 260);
        }

        if (keyboard.left ) {
            playerMC.x -= playerMC.speedX;
        }
        if (keyboard.right ) {
            playerMC.x += playerMC.speedX;
        }
        if (keyboard.up ) {
            roadMC.speed += 0.1;
        }
        if (keyboard.down ) {
            roadMC.speed -= 0.1;
        }

        roadMC.y += roadMC.speed;
        if (roadMC.y > 0) {
            roadMC.y = -500;
        }
    });
};

export default Game;
