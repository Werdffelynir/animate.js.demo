import Component from "animate.js/src/components/Component";
import Clip from "animate.js/src/components/Clip";
import SaveComponent from "./SaveComponent";

const TEMPLATE = `
<div class="container">
    <h3>SettingsComponent</h3>
</div>
`;

const SettingsComponent = Component({
    id: 'SettingsComponent',
    template: TEMPLATE,
    parent: Clip('#app'),
    init() {},
    complete() {},
    render() {
        this.parent.append(this.template);
    },
    components: {
        ButtonBackComponent: SaveComponent
    },
});

export default SettingsComponent;