import Game from './src/Game';

if (location.pathname.split('/').filter((v) => v).reverse()[0] === 'move') {
    document.addEventListener('DOMContentLoaded', () => {
        Game();
    });
}


/*const nodeInfo = Dom.query('#info');
const nodeHero = Dom.query('#hero');
const nodeGame = Dom.query('#game');
const onReload = Dom.query('[data-on="reload"]');

function info(data) {
    nodeInfo.innerHTML = `<pre>${data}</pre>`
}

nodeHero.style.marginTop = '0px';
nodeHero.style.marginLeft = '0px';
const moveClip = MoveClip({
    element: nodeHero,
    speed: 1,
});

const keyEvent = EventKeyManager();
keyEvent.isUp = false;
keyEvent.isDown = false;
keyEvent.isLeft = false;
keyEvent.isRight = false;
keyEvent.each('keydown', function (eve) {
    switch (eve.code) {
        case "KeyW":
            keyEvent.isUp = true;
            break;
        case "KeyS":
            keyEvent.isDown = true;
            break;
        case "KeyA":
            keyEvent.isLeft = true;
            break;
        case "KeyD":
            keyEvent.isRight = true;
            break;
    }
});
keyEvent.each('keyup', function (eve) {
    switch (eve.code) {
        case "KeyW":
            keyEvent.isUp = false;
            break;
        case "KeyS":
            keyEvent.isDown = false;
            break;
        case "KeyA":
            keyEvent.isLeft = false;
            break;
        case "KeyD":
            keyEvent.isRight = false;
            break;
    }
});

Timer.interval(() => {
    if (keyEvent.isUp) moveClip.x -= moveClip.speed;
    if (keyEvent.isDown) moveClip.x += moveClip.speed;
    if (keyEvent.isLeft) moveClip.y -= moveClip.speed;
    if (keyEvent.isRight) moveClip.y += moveClip.speed;

    info(`x: ${moveClip.x} y: ${moveClip.y}`);
}, 1000/60)*/



/*
const Sprite = function (config) {
    const { element } = config;
    const clip = Clip(element);

    info(`x: ${clip.x} y: ${clip.y}`);
    // console.log(clip);
    return clip;
};
const moveClip = Clip({
    element: nodeHero,
});
*/

// keyEvent.press(EventKeyCode.Space, function (eve) {
//     console.log('press Space', EventKeyCode.Space, eve)
// });
// keyEvent.on('keyup', 97, function (eve) {
//     console.log('keyup', EventKeyCode.ArrowLeft, eve)
// });

// const MoveClip = function (config) {;
//     const { element } = config;
//     const keyEvent = EventKeyManager()
//     const clip = Clip(element);
//     return {
//         up(){},
//         down(){},
//         left(){},
//         right(){},
//     };
// };