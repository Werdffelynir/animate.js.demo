import Component from "animate.js/src/components/Component";
import createElement from "animate.js/src/static/createElement";
import Paint from "animate.js/src/components/Paint";
import Graphic from "./Graphic";
import EventKeyManager from "animate.js/src/components/EventKeyManager";

const CanvasComponent = Component({
    id: 'ComponentAxulem',
    template: createElement('canvas', {id: 'canvas', width: 300, height: 160}),
    parentElement: null,
    paint: null,
    canvas: null,
    context: null,
    Graphic: Graphic({}),
    EventKeyManager: EventKeyManager(),
    clip: ()=>{},
    prop: ()=>{},
    init() {
        const paint = Paint(this.template, {
            fillStyle: '#f0f',
        });
        this.paint = paint;
        this.canvas = paint.canvas;
        this.context = paint.context;
        this.clip = paint.clip;
        this.prop = paint.prop;
        this.Graphic = new Graphic({
            canvas: this.canvas,
            context: this.context,
            color: '#0f0',
            font: '12 sans-serif, monospace, serif',
        });
    },
    parent(element) { this.parentElement = element },
    render() {
        this.parentElement.appendChild(this.template);
    },
});

export default CanvasComponent;
