import Component from "animate.js/src/components/Component";
import Clip from "animate.js/src/components/Clip";

const TEMPLATE = `
<div class="container">
    <h3>LoadComponent</h3>
</div>
`;

const LoadComponent = Component({
    id: 'LoadComponent',
    template: TEMPLATE,
    parent: Clip('#app'),
    init() {},
    complete() {},
    render() {
        this.parent.append(this.template);
    },
    components: {},
});

export default LoadComponent;