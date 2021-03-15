
const Start = function () {
    console.log("Components demo");
    if (! window.Animate || ! window.Animate.Static ) {
        return new Error('Animate object not exist!');
    }

    const {
        query,
        queryAll,
        search,
        inject,
        typeOf,
        copy,
        clone,
        on,
        str2node,
        each,
    } = window.Animate.Util;

    const {
        Clip,
        MoveClip,
        KeyboardEventManager,
        Timer,
        Component,
        RoxyListener,
        Roxy,
    } = window.Animate;

    const templateMenu = `
    <div class="menu">
        <div data-on="Page1Component">Page 1</div>
        <div data-on="Page2Component">Page 2</div>
        <div data-on="Page3Component">Page 3</div>
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

    const sceneNode = query('#scene');

    const MenuComponent = Component({
        id: 'MenuComponent',
        props: {},
        template: str2node(templateMenu),
        complete () {
            console.log('Hello ' + this.id);

            const btns = search('[data-on]', 'data-on', this.template);

            each(btns, (key, value) => {
                console.log(key, value)
            })

            on(this.template, 'click', (event) => {
                const componentName = event.target.getAttribute('data-on');
                if (componentName) {
                    this.components[componentName].render();
                }
            });
        },
    });

    const Page1Component = Component({
        id: 'Page1Component',
        template: templatePage1,
        props: {},
        init () {
            this.render();
        },
        complete () {
            console.log('Hello ' + this.id);
        },
        methods: {
            render(){
                inject(this.template, MenuComponent.template, true);
                inject(sceneNode, this.template);
            },
        },
    });

    const Page2Component = Component({
        id: 'Page2Component',
        props: {},
        template: templatePage2,
        complete () {
            console.log('Hello ' + this.id);
        },
        methods: {
            render(){
                inject(this.template, MenuComponent.template, true);
                inject(sceneNode, this.template);
            },
        },
    });

    const Page3Component = Component({
        id: 'Page3Component',
        props: {},
        template: templatePage3,
        complete () {
            console.log('Hello ' + this.id);
        },
        methods: {
            render(){
                inject(this.template, MenuComponent.template, true);
                inject(sceneNode, this.template);
            },
        },
    });

    MenuComponent.components = {
        Page1Component,
        Page2Component,
        Page3Component,
    };

};

export default Start;
