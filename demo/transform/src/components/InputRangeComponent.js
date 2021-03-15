import Component from "animate.js/src/components/Component";
import str2node from "animate.js/src/static/str2node";
import query from "animate.js/src/static/query";
import format from "animate.js/src/static/format";

const template = `
<div class="param-line">
    <span>{label} (<span data-to="{name}">{value}</span>)</span>
    <span><input min="{min}" step="{step}" max="{max}" type="range" data-on="{name}" name="{name}" value="{value}"></span>
</div>
`;
const InputRangeComponent = Component({
    id: 'InputRangeComponent',
    props: {},
    views: [],
    template: null,
    parentDOMElement: null,
    onChangeCallback: null,
    parent (parent) {
        if (parent && parent.nodeType === Node.ELEMENT_NODE) {
            return this.parentDOMElement = parent;
        }
        return this.parentDOMElement;
    },
    init () {},
    onChange (callback) { this.onChangeCallback = callback },
    setProps (props) { return this.props = props },
    getProps () { return this.props },
    create (params) {
        const formatTemplate = format(template, {
            label: params.label ? params.label : ( params.name ? params.name : 'label'),
            value: params.value || 0,
            name: params.name || null,
            min: params.min || -1,
            max: params.max || 1,
            step: params.step || 1,
        })
        const view = str2node(formatTemplate);

        this.props[params.name] = params.value;
        this.addEvents(view);
        this.views.push(view);
    },
    addEvents (view) {
        const input = query('[data-on]', view);
        const to = query('[data-to]', view);
        input.addEventListener('input', (event) => {
            const name = event.target.name;
            const value = parseFloat(event.target.value) || 0;
            this.props[name] = value;
            to.textContent = value;
            if (this.onChangeCallback) {
                this.onChangeCallback(this.props);
            }
        });
    },
    render () {
        const fragment = document.createDocumentFragment();
        this.views.forEach((view) => {fragment.appendChild(view)});

        this.parent().appendChild(fragment);
    },
});

export default InputRangeComponent;