import createElement from "animate.js/src/static/createElement";
import Animate from "animate.js";
import DrawComponent from "./components/DrawComponent";
import InputRangeComponent from "./components/InputRangeComponent";

const Controller = function () {
    console.log('Controller:transform');
    // if (! window.Animate || ! window.Animate.Static ) {
    //     return new Error('Animate object not exist!');
    // }

    const {

        Clip,
        Component,
        ComponentClass,
        KeyboardEventManager,
        MoveClip,
        MoveClipClass,
        Scene,
        SceneClass,
        StepsScene,
        Timer,
        RoxyListener,
        Roxy,
        AnimationFrame,
        Frames,
        Loader,
        Matrix,
        Point,
        Rectangle,
        Transform,
        Paint,
    } = Animate;

    const {
        query,
        search,
        inject,
        typeOf,
        uri,
        copy,
        each,
        on,
        isHTMLString,
        uniqArray,
        stylizer,
    } = Animate.Static;

    const app = query('#app');
    const canvasParams = {width: 400, height: 200};
    const matrixParams = {m11: 1, m12: 0, m21: 0, m22: 1, dx: 50, dy: 50};
    const rectangleParams = {x: 0, y: 0, width: 100, height: 100};
    const canvasStyle = {
        fillStyle: '#333'
    };

    DrawComponent.parent(app);
    DrawComponent.create(canvasParams, canvasStyle);
    DrawComponent.drawRectangle(rectangleParams);
    DrawComponent.render();
    InputRangeComponent.parent(DrawComponent.settingsElement());
    InputRangeComponent.setProps(matrixParams);
    InputRangeComponent.onChange(DrawComponent.onChangeSettings());
    InputRangeComponent.create({name: 'm11', value: 1, min: -5,   max: 5, step: 0.1});
    InputRangeComponent.create({name: 'm12', value: 0, min: -5,   max: 5, step: 0.1});
    InputRangeComponent.create({name: 'm21', value: 0, min: -5,   max: 5, step: 0.1});
    InputRangeComponent.create({name: 'm22', value: 1, min: -5,   max: 5, step: 0.1});
    InputRangeComponent.create({name: 'dx',  value: 0, min: -500, max: 500, step: 1});
    InputRangeComponent.create({name: 'dy',  value: 0, min: -500, max: 500, step: 1});
    InputRangeComponent.render();
};

export default Controller;
