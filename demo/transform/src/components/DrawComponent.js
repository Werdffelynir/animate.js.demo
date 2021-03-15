import Component from "animate.js/src/components/Component";
import inject from "animate.js/src/static/inject";
import createElement from "animate.js/src/static/createElement";
import query from "animate.js/src/static/query";
import Paint from "animate.js/src/components/Paint";

const template = `
<div class="ranges">
    <style>
    .param-line { display: table; width: 100%; }
    .param-line > span { display: table-cell; }
    .param-line > span:first-child {width: 60px;}
    [data-id="canvas"]{width: 100%;}
    [data-id="settings"]{width: 100%;}
    
    </style>
    <div data-id="canvas">canvas</div>
    <div data-id="settings">settings</div>
</div>
`;
const DrawComponent = Component({
    id: 'DrawComponent',
    props: {  },
    template: template,
    paint: null,
    parentDOMElement: null,
    init () {},
    onChange (callback) { this.onChangeCallback = callback },
    setProps (props) { return this.props = props },
    getProps () { return this.props },
    parent (parent) {
        if (parent && parent.nodeType === Node.ELEMENT_NODE) {
            return this.parentDOMElement = parent;
        }
        return this.parentDOMElement;
    },
    settingsElement () {
        return query('[data-id="settings"]', this.template);
    },
    onChangeSettings () {
        return (params) => {
            /** @type {CanvasRenderingContext2D} context */
            const context = this.paint.context;
            context.clearRect(0, 0, this.paint.canvas.width, this.paint.canvas.height);
            context.setTransform.apply(context,  Object.values(params));
            context.fillRect.apply(context,  Object.values(this.props['rectangle']));
            context.resetTransform();
        }
    },
    drawRectangle (params) {
        this.props['rectangle'] = params;
        /** @type {CanvasRenderingContext2D} context */
        const context = this.paint.context;
        context.fillRect.apply(context,  Object.values(params));
    },
    create (params, props) {
        const canvas = createElement('canvas', {
            id: 'canvas',
            width: params.width,
            height: params.height,
        });
        this.props['canvas'] = props || {};
        this.paint = Paint(canvas, this.props['canvas']);

        inject('[data-id="canvas"]', canvas, false, this.template);
    },
    render () {
        this.parentDOMElement.appendChild(this.template);
    },
});

export default DrawComponent;