import Component from "animate.js/src/components/Component";
import Clip from "animate.js/src/components/Clip";

const TEMPLATE = ``;

const AppComponent = Component({
    id: 'AppComponent',
    template: Clip('#app'),
    parent: Clip('body'),
    init() {},
    complete() {},
    clear() { this.template.clear(); },
    render() {},
    components: {},
});

export default AppComponent;
