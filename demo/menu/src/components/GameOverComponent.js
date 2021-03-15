import Component from "animate.js/src/components/Component";
import Clip from "animate.js/src/components/Clip";

const TEMPLATE = `
<div class="container">
    <h3>GameOverComponent</h3>
</div>
`;

const GameOverComponent = Component({
    id: 'GameOverComponent',
    template: TEMPLATE,
    parent: Clip('#app'),
    init() {},
    complete() {},
    render() {
        this.parent.append(this.template);
    },
    components: {},
});

export default GameOverComponent;