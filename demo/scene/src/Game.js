
// import IntroComponent from './components/pages/IntroComponent';
// import StartGameComponent from './components/pages/StartGameComponent';
// import SettingsComponent from './components/pages/SettingsComponent';
// import DevelopersComponent from './components/pages/DevelopersComponent';
// import MenuComponent from './components/pages/MenuComponent';

const Game = function () {
    console.log('scene demo')
    if (!(window.Animate) || !(window.Animate.Static)) {
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
    } = window.Animate;

    const {
        query,
        search,
        inject,
        typeOf,
        typeOfStrict,
        uri,
        copy,
        on,
        isHTMLString,
    } = window.Animate.Static;

    const scene = Clip('#scene');
/*

    const Scene = function () {
        const rx = Roxy({});
        const root = {
            current: 'default',
            layers: {
                default () { console.log('[Default Scene]') },
            },
        };

        root.layer = function (name, callback) {
            root.layers[name] = callback;
        }

        root.get = function (name) {
            return root.layers[name];
        }

        root.next = function () {
            let lest = false;
            const keys = Object.keys(root.layers);
            for (let i = 0; i < keys.length; i++) {
                if (keys[i] === root.current) {
                    if (typeof keys[i + 1] !== "undefined")
                        lest = keys[i + 1];
                    if (i === keys.length - 1) {
                        lest = keys[0];
                    }
                    break;
                }
            }
            root.show(lest);
        }

        root.show = function (key) {
            root.current = key;
            const cb = root.layers[root.current];

            if (typeof cb === "function") {
                cb.call(cb);
            }
        }

        return root;
    };
*/

    const templateMenu = `
    <div class="menu select-off">
        <div data-on="page1">Page 1</div>
        <div data-on="page2">Page 2</div>
        <div data-on="page3">Page 3</div>
        <div data-on="next">NEXT Page</div>
    </div>
    `;

    const templatePage1 = `
    <div class="page bg-cyan">
        <h1>Page 1</h1>
    </div>
    `;

    const templatePage2 = `
    <div class="page bg-darkcyan">
        <h1>Page 2</h1>
    </div>
    `;

    const templatePage3 = `
    <div class="page bg-darkgreen">
        <h1>Page 3</h1>
    </div>
    `;

    const main = Scene();
    const menu = Component({
        template: templateMenu,
        init () {
            on(this.template, 'click', (event) => {
                if (event.target.getAttribute('data-on')) {
                    const key = event.target.getAttribute('data-on');
                    if (key === 'next') {
                        return main.next();
                    }
                    main.show(key);
                }
            })
        },
    });


    const page1 = Clip(templatePage1);
    const page2 = Clip(templatePage2);
    const page3 = Clip(templatePage3);

    main.add('page1', function () {
        inject(scene.element, page1.element);
        inject(scene.element, menu.template, true);
    });

    main.add('page2', function () {
        inject(scene.element, page2.element);
        inject(scene.element, menu.template, true);
    });

    main.add('page3', function () {
        inject(scene.element, page3.element);
        inject(scene.element, menu.template, true);
    });

    main.show('page1');
};

export default Game;
