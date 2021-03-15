import createElement from "animate.js/src/static/createElement";
import stylizer from "animate.js/src/static/stylizer";

const FPSDisplayComponent = function () {
    return {
        _lastCalledTime: null,
        _iterator: null,
        _fps: null,
        _span: null,
        _description: ' fps',
        processor () {
            if(!this._lastCalledTime) {
                this._lastCalledTime = Date.now();
                this._fps = 0;
                this._iterator = 0;
                return false;
            }
            const delta = (Date.now() - this._lastCalledTime) / 1000;
            this._lastCalledTime = Date.now();
            this._fps = 1 / delta;
            this._iterator ++;

            if (this._span && this._iterator % 10 === 0) {
                this.update();
            }
        },
        init(parent) {
            this._span = createElement('span', {}, Math.round(this._fps) + this._description);

            stylizer(this._span, {
                position: 'absolute',
                top: '0',
                left: '0',
                paddingTop: '10px',
                paddingLeft: '10px',
            });

            if (parent)
                return parent.appendChild(this._span);

            return document.body.appendChild(this._span);
        },
        update() {
            return this._span.textContent = Math.round(this._fps) + this._description;
        },
        fps() {
            return this._fps;
        }
    };
};

export default FPSDisplayComponent;