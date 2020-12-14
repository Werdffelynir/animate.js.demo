
const Game = function () {
    console.log('Animation demo');
    if (! window.Animate || ! window.Animate.Static ) {
        return new Error('Animate object not exist!');
    }
    const {
        Clip,
        MoveClip,
        Scene,
        Component,
        Timer,
        Roxy,
        KeyboardEventManager,
        AnimationFrame,
    } = window.Animate;

    const {
        query,
        search,
        inject,
        typeOf,
        typeOfStrict,
        uri,
        copy,
        clone,
        on,
        each,
        random,
        randomColor,
    } = window.Animate.Static;

    const appNode = query('#app');
    const fpsNode = query('#fps');
    const ballsNode = query('#balls');
    const targetNode = query('.target');

    const createBall = function (id = 'id') {
        const ball = document.createElement('div');
        const size = random(8, 60);
        const speed = 1;

        ball.className = 'ball';
        ball.style.display = 'block';
        ball.style.backgroundColor = randomColor();
        ball.style.opacity = Math.random().toString();

        appNode.appendChild(ball);
        return MoveClip({
            x: random(50, window.innerWidth - 50),
            y: random(50, window.innerHeight - 50),
            speedX: random(-speed, speed) || 0.1,
            speedY: random(-speed, speed) || 0.1,
            width: size,
            height: size,
            element: ball,
            remove(){
                this.element.parentNode.removeChild(this.element);
            },
        });
    }

    function ballAction (ms) {
        if (ms) {
            ms.x += ms.speedX;
            ms.y += ms.speedY;
            if (ms.x < 0) ms.speedX *= -1;
            if (ms.x > window.innerWidth - ms.width) ms.speedX *= -1;
            if (ms.y < 0) ms.speedY *= -1;
            if (ms.y > window.innerHeight - ms.height) ms.speedY *= -1;
        }
    }

    const balls = new Array(100).fill(0);

    balls.forEach((v, i) => {
        balls[i] = createBall(i + 1);
    })

    const mcClick = MoveClip({
        x: -100,
        y: -100,
        width: 5,
        height: 5,
        element: targetNode,
        timer: null,
        hide(){this.element.style.display = 'none'},
        show(){
            clearTimeout(this.timer);
            this.element.style.display = 'block';
            this.timer = setTimeout(() => {this.hide()}, 1000);
        },
        remove(){this.element.parentNode.removeChild(this.element)},
    });

    on(appNode, 'click', (e) => {
        mcClick.x = e.clientX;
        mcClick.y = e.clientY;
        mcClick.show();
        if (e.target.className === 'ball') {
            let index = false;
            let mcs = balls.filter((v, i)=>{
                if (v.element === e.target) {
                    index = i;
                    return true;
                }
            });
            if (mcs && mcs[0] && mcs[0].element && index !== false) {
                mcs[0].remove();
                delete balls[index];
            }
        }
    });

    AnimationFrame().start((progress) => {
        if (Math.round(progress) % 1000 === 0) {}

        each(balls, (ball) => {
            ballAction(ball);
        });
    });

    /*
        const is = function (...args) {
            if (args.length === 1) {
                return !!args[0]
            }
            if (args.length === 2) {
                const typeValue = typeOf(args[1]);
                const typeWith = typeOf(args[1]);
                if (typeValue !== 'string' && typeWith === 'string') {
                    return typeOf(args[0], args[1]);
                }
                return args[0] === args[1];
            }
        }
    */

};

export default Game;
