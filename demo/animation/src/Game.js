
const Game = function () {
    console.log('Animation demo');
    if (! window.Animate ) {
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
    const fpsNode = query('.fps');
    const heroNode = query('.hero');

    class AnimationClass {
        constructor(){
            this.requestId = 0;
            this.startpaly = 0;
            this.paused = false;
            this.callback = 0;
            this.delay = 0;
            this.duration = 0;
            this.progress = 0;
        }
    }

/*    const Animation = function () {
        // this.constructor = function Animation() {};
        const root = {
            requestId: 0,
            startpaly: 0,
            paused: false,
            callback: 0,
            delay: 0,
            duration: 0,
            progress: 0,
        };

        root.step = function (timestamp) {
            if (!root.startpaly) root.startpaly = timestamp;
            root.progress = timestamp - root.startpaly;

            if (root.callback) {
                root.callback.call(root, root.progress);
            }

            if (root.duration && root.duration > root.progress) {
                root.cancel();
            }

            window.requestAnimationFrame(root.step);
            if (root.paused) {
                window.requestAnimationFrame(root.step);
            }
        }

        root.pause = function () {
            root.paused = !root.paused;
        };

        root.start = function (callback) {
            if (callback) {
                root.callback = callback;
            }
            return root.requestId = window.requestAnimationFrame(root.step);
        };

        root.cancel = function () {
            window.cancelAnimationFrame(root.requestId);
        };

        return root;
    };*/


    // heroNode.style.display = 'none';
    const createBall = function (id = 'id') {
        const ball = document.createElement('div');
        const size = random(8, 60);
        const speed = 1;

        ball.className = 'ball';
        ball.style.display = 'block';
        ball.style.lineHeight = size + 'px';
        ball.style.textAlign = 'center';
        ball.innerHTML = '<span>'+id+'</span>';
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
        });
    }
/*    function pushBall(elem) {
        const animation = Animation();
        animation.start(() => {
            elem.x += elem.speedX;
            elem.y += elem.speedY;
            if (elem.x < 0) elem.speedX *= -1;
            if (elem.x > window.innerWidth - elem.width) elem.speedX *= -1;
            if (elem.y < 0) elem.speedY *= -1;
            if (elem.y > window.innerHeight - elem.height) elem.speedY *= -1;
        });
    }

    pushBall(ball);*/

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



    const balls = new Array(500).fill(0);
    balls.forEach((v, i) => {
        balls[i] = createBall(i);
    })
    AnimationFrame().start((progress) => {
        //if (Math.round(progress) % 1000 === 0) console.log(progress)
        if (Math.round(progress) % 1000 === 0) { }

        each(balls, (ball) => {
            ballAction(ball);
        });

    });

    // Object.keys(Array(333).fill(0)).forEach((i) => {
    //     createBallAnimation(i);
    // });
    function createBallAnimation(id){
        let lastCalledTime = Date.now();
        let fpsValue = 0;
            // playBall(ball);

            // if (progress % 1000 === 0) console.log(id)
            //
            // const delta = (Date.now() - lastCalledTime) / 1000;
            // lastCalledTime = Date.now();
            // fpsValue = 1 / delta;
            // fps.textContent = Math.round(fpsValue);
            // if (progress % 100 === 0) {}
    }

/*
    const ball2 = createBall();
    Animation().start((progress) => {
        playBall(ball2);
        if (progress % 1000 === 0) console.log('id 2')
    });

    const ball3 = createBall();
    Animation().start((progress) => {
        playBall(ball3);
        if (progress % 1000 === 0) console.log('id 3')
    });

    const ball4 = createBall();
    Animation().start((progress) => {
        playBall(ball4);
        if (progress % 1000 === 0) console.log('id 4')
    });*/

    // const ball2 = ball.clone();
    // console.log(ball2)
    // pushBall(ball2);
    // scene.appendChild(ball2.element)
    // ball2.x = 250;
    // ball2.y = 150;
    //
    //
    // const b3 = ball.clone();
    // b3.x = 250;
    // b3.y = 100;
    // pushBall(b3);
    //
    // const b2 = ball.clone();
    // b2.x = 125;
    // b2.y = 25;
    // console.log(b2)
    // pushBall(b2);
    //

};

export default Game;
