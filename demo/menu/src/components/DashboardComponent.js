import Component from "animate.js/src/components/Component";
import Clip from "animate.js/src/components/Clip";

const TEMPLATE = `
<div class="dashboard-component table height-100">
    <div class="">
        <span class="dashboard-item" data-to="#menu">Back</span>
        <span class="dashboard-item dashboard-separator"></span>
        <span class="dashboard-item" data-func="settings">Settings</span>
    </div>
</div>
`;

const DashboardComponent = Component({
    id: 'DashboardComponent',
    template: TEMPLATE,
    parent: Clip('#app'),
    init() {},
    methods: {
        settings() {
            console.log('settings')
        },
    },
    complete() {
        this.on('click', (e) => {
            const to = e.target.getAttribute('data-to');
            const func = e.target.getAttribute('data-func');
            if (to) {
                const {route} = this.props;
                route.to(to);
            }
            if (func && typeof this.methods[func] === 'function') {
                this.methods[func]();
            }
        });
    },
    render() {
        this.parent.append(this.template);
    },
    components: {},
});

export default DashboardComponent;
