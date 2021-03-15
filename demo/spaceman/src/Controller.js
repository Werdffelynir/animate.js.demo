import Animate from "animate.js/src";
import Static from "animate.js/src/static";
import createElement from "animate.js/src/static/createElement";

const Controller = function () {
    console.log('Controller:spaceman');

    const {

        Clip,
        Component,
        ComponentClass,
        KeyboardEventManager,
        MoveClip,
        MoveClipClass,
        Scene,
        SceneClass,
        StepsScene,
        Timer,
        RoxyListener,
        Roxy,
        AnimationFrame,
        Loader,
        Matrix,
        Point,
        Rectangle,
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

    const Resource = {
        icon: {
            bored: '/assets/icon/bored.png',
            emoticon: '/assets/icon/emoticon.png',
            sad: '/assets/icon/sad-face.png',
            smile: '/assets/icon/smile.png',
        },
        image: {
            hero: '/assets/sprite/hero-sprite.png',
            boosteroid: '/assets/svg/boosteroid.svg'
        }
    };

    const SmileIcon = MoveClip({
        element: new Image(),
        loaded: false,
        init(){
            this.style({opacity: 0.155, position: 'absolute'});
            this.element.setAttribute('src', Resource.image.boosteroid)
            this.element.addEventListener('load', (event) => {
                this.loaded = true;
                this.x = window.innerWidth / 2 - this.width;
                this.y = window.innerHeight / 2;
            });
        },
    });

    const MenuComponent = Component({
        id: 'MenuComponent',
        template: '<div id="MenuComponent"></div>',
        init(){
            const btnsElements = [];
            const btns = [
                {title: 'Intro', action: 'intro' },
                {title: 'Start', action: 'start' },
                {title: 'Over', action: 'over' },
                {title: 'Load', action: 'load' },
            ];

            btns.forEach((v) => {
                btnsElements.push(createElement('div', {'data-action': v.action}, v.title))
            });
            this.inject(btnsElements);
        },
        complete(){
            this.on('click', (e) => {
                const attr = e.target.getAttribute('data-action');
                if (attr) {
                    scenes.run(attr);
                }
            });
        }
    });

    const IntroComponent = Component({
        id: 'IntroComponent',
        template: '<div id="IntroComponent"></div>',
        parent: Clip('#app'),
        init(){
            this.template.appendChild(createElement('h4', {}, this.id));
            this.template.appendChild(SmileIcon.element);
            this.template.appendChild(MenuComponent.template);
        },
        scene(){
            this.parent.clear();
            this.parent.append(this.template);
        },
    });

    const StartComponent = Component({
        id: 'StartComponent',
        template: '<div id="StartComponent"></div>',
        parent: Clip('#app'),
        init(){
            this.template.appendChild(createElement('h4', {}, this.id));
            this.template.appendChild(SmileIcon.element);
        },
        scene(){
            this.parent.clear();
            this.parent.append(this.template);
        },
    });

    const LoadComponent = Component({
        id: 'LoadComponent',
        template: '<div id="LoadComponent"></div>',
        parent: Clip('#app'),
        init(){
            this.template.appendChild(createElement('h4', {}, this.id));
            this.template.appendChild(SmileIcon.element);
        },
        scene(){
            this.parent.clear();
            this.parent.append(this.template);
        },
    });

    const OverComponent = Component({
        id: 'OverComponent',
        template: '<div id="OverComponent"></div>',
        parent: Clip('#app'),
        init(){
            this.template.appendChild(createElement('h4', {}, this.id));
            this.template.appendChild(SmileIcon.element);
        },
        scene(){
            this.parent.clear();
            this.parent.append(this.template);
        },
    });

    const scenes = Scene({
        intro () {IntroComponent.scene()},
        start () {StartComponent.scene()},
        load () {LoadComponent.scene()},
        over () {OverComponent.scene()},
    });

    scenes.run('intro');
};

export default Controller;
