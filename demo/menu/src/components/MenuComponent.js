import Component from "animate.js/src/components/Component";
import Clip from "animate.js/src/components/Clip";

const TEMPLATE = `
    <div data-node="menu" class="menu table height-100">
        <ul class="height-100">
            <li>* * *</li>
            <li data-to="#game">Game</li>
            <li data-to="#newGame">New Game</li>
            <li data-to="#loadGame">Load Game</li>
            <li data-to="#saveGame">Save Game</li>
            <li data-to="#gameOver">Game Over</li>
            <li data-to="#settings">Settings</li>
            <li data-func="fullscreen">Fullscreen</li>
            <li>* * *</li>
        </ul>
    </div>
`;

const MenuComponent = Component({
    id: 'MenuComponent',
    template: TEMPLATE,
    parent: Clip('#app'),
    init() {
    },
    data: {
        fullscreen: false,
    },
    complete() {
        this.on('click', (e) => {
            const to = e.target.getAttribute('data-to');
            const func = e.target.getAttribute('data-func');
            if (to) {
                const {route} = this.props;
                route.to(to);
            }
            if (func) {
                switch (func) {
                    case 'fullscreen':
                        if (this.fullscreen) {
                            document.exitFullscreen();
                        } else {
                            this.parent.element.requestFullscreen();
                        }
                        this.fullscreen = !this.fullscreen;
                        break;
                }
            }
        });
    },
    render() {
        this.parent.append(this.template);
    },
    components: {},
});

export default MenuComponent;
