
const Game = function () {
    console.log('Game demo');
    if (! window.Animate ) {
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
        query,
        search,
        inject,
        typeOf,
        uri,
        copy,
        each,
        on,
    } = window.Animate.Static;

};

export default Game;
