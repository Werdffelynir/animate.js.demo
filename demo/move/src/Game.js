
const Game = function () {

    if (! window.Animate || ! window.Animate.Static ) {
        return new Error('Animate object not exist!');
    }

    console.log('Game move');

    const {Clip, MoveClip, KeyboardEventManager, Timer} = window.Animate;
    const {query} = window.Animate.Static;

    const nodeHero = query('#hero');
    const nodeInfo = query('#info');

    function info(data) {
        nodeInfo.innerHTML = `<pre>${data}</pre>`
    }

    nodeHero.style.marginTop = '0px';
    nodeHero.style.marginLeft = '0px';
    const moveClip = MoveClip({
        element: nodeHero,
        speed: 1,
    });

    const KeyMap = {
        isUp: false,
        isDown: false,
        isLeft: false,
        isRight: false,
    };

    Timer.setInterval(() => {
        if (KeyMap.isUp) moveClip.y -= moveClip.speed;
        if (KeyMap.isDown) moveClip.y += moveClip.speed;
        if (KeyMap.isLeft) moveClip.x -= moveClip.speed;
        if (KeyMap.isRight) moveClip.x += moveClip.speed;

        info(`x: ${moveClip.x} y: ${moveClip.y}`);
    }, 1000/60)

    const keyboard = KeyboardEventManager();

    keyboard.each('keydown', function (eve) {
        if (eve.code === 'KeyW') KeyMap.isUp = true;
        if (eve.code === 'KeyS') KeyMap.isDown = true;
        if (eve.code === 'KeyA') KeyMap.isLeft = true;
        if (eve.code === 'KeyD') KeyMap.isRight = true;
    });

    keyboard.each('keyup', function (eve) {
        if (eve.code === 'KeyW') KeyMap.isUp = false;
        if (eve.code === 'KeyS') KeyMap.isDown = false;
        if (eve.code === 'KeyA') KeyMap.isLeft = false;
        if (eve.code === 'KeyD') KeyMap.isRight = false;
    });

};

export default Game;
