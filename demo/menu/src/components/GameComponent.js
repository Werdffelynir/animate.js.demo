import Component from "animate.js/src/components/Component";
import Clip from "animate.js/src/components/Clip";
import DashboardComponent from "./DashboardComponent";

const TEMPLATE = `
<div class="">
    <h3>GameComponent</h3>
    <div class="content">dashboard + hero + stats + logs</div>
</div>
`;

const GameComponent = Component({
    id: 'GameComponent',
    template: TEMPLATE,
    parent: Clip('#app'),
    init() {},
    complete() {},
    render() {
        DashboardComponent.render();
        // this.component('DashboardComponent').render();
        this.parent.append(this.template);
    },
    components: {
        DashboardComponent
    },
});

export default GameComponent;
