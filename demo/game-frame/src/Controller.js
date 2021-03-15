import Animate from "animate.js/src";
import Static from "animate.js/src/static";
import domLoaded from "animate.js/src/static/domLoaded";
import addCss from "animate.js/src/static/addCss";
import Stage from "animate.js/src/components/Stage";
import Plant from "animate.js/src/components/Plant";
import Component from "animate.js/src/components/Component";
import Clip from "animate.js/src/components/Clip";
import on from "animate.js/src/static/on";

const Controller = function () {
    console.log('Controller: game-frame');

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
        Loader,
        Matrix,
        Point,
        Rectangle,
        Router,
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

};

domLoaded(() => {

    const COLOR_BASE_DG = '#1c1c1c';
    const COLOR_BASE_BORDER = '#0f0';

    addCss({
        '.mini-game-hide': {display: 'none',  top: '-500px'},
        '.mini-game-show': {display: 'block',  top: '0px'},
        '#mini-game *': {
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
            userSelect: 'none',
        },
        '#mini-game': {
            display: 'block',
            position: 'absolute',
            top: '200px',
            right: '0px',
            width: '180px',
            height: '50px',
        },
        '#mini-game-title': {
            position: 'absolute',
            display: 'block',
            top: '-100px',
            right: '-50px',
            width: '150px',
            height: '50px',
            padding: '16px',
            transform: 'rotate(-90deg)',
            textAlign: 'center',
            color: COLOR_BASE_BORDER,
            border: '2px solid ' + COLOR_BASE_BORDER,
            backgroundColor: COLOR_BASE_DG,
            cursor: 'pointer',
        },
        '#mini-game-body': {},
        '#mini-game-wrapper': {
            position: 'absolute',
            display: 'block',
            width: '300px',
            height: '200px',
            transition: 'all .6s',
            right: '0px',
            border: '2px solid ' + COLOR_BASE_BORDER,
            backgroundColor: COLOR_BASE_DG,
        },
    });

    // Components
    const GameComponent = Component({
        id: 'GameComponent',
        template: `
<span id="mini-game" data-id="game">
    <span id="mini-game-title" data-id="title">MINI GAME</span>    
    <span id="mini-game-body" data-id="body">
        <span id="mini-game-wrapper" data-id="wrapper" class="mini-game-hide">canvas wrapper</span>
    </span>    
</span>
`,
        params: {
            active: false,
        },
        init(){
        },
        complete(){},
        actions(){
            this.elements('id', 'title').addEventListener('click', (event) => {
                if (this.params.active){
                    this.params.active = false;
                    this.elements('id', 'wrapper').classList.remove('mini-game-show');
                    this.elements('id', 'wrapper').classList.add('mini-game-hide');
                } else {
                    this.params.active = true;
                    this.elements('id', 'wrapper').classList.remove('mini-game-hide');
                    this.elements('id', 'wrapper').classList.add('mini-game-show');
                }
            });

        },
        render(){
            this.actions();
            document.body.appendChild(this.template);
        },
    });

    const MenuComponent = Component({
        id: '',
        params: {},
        init(){},
        complete(){},
        render(){},
    });
    const ButtonClip = Clip({
        id: '',
        element: 'body',
        params: {},
        init(){},
        complete(){},
        render(){},
    });
    const ButtonComponent = Plant({
        id: '',
        params: {},
        init(){},
        complete(){},
        render(){},
    });

    // Scenes
    Stage.scene('game', () => {GameComponent.render()});
    Stage.execute('game');

});

export default Controller;
