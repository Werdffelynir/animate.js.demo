import Animate from "animate.js/src";
import Static from "animate.js/src/static";
import Function from "animate.js/src/function";
import calculateAngle from "animate.js/src/function/calculateAngle";
import calculatePosition from "animate.js/src/function/calculatePosition";
import convertHEXtoRGB from "animate.js/src/function/convertHEXtoRGB";
import convertRGBtoHEX from "animate.js/src/function/convertRGBtoHEX";
import degreesToRadians from "animate.js/src/function/degreesToRadians";
import distanceBetween from "animate.js/src/function/distanceBetween";
import keysIn from "animate.js/src/function/keysIn";
import radiansToDegrees from "animate.js/src/function/radiansToDegrees";
import randomColor from "animate.js/src/function/randomColor";
import randomItem from "animate.js/src/function/randomItem";
import range from "animate.js/src/function/range";
import createElement from "animate.js/src/static/createElement";
import {LETTER_CONSONANT} from "animate.js/src/static/abc";

const Controller = function () {
    console.log('Controller:transform-matrix');

    const {
        Clip,
        Component,
        KeyboardEventManager,
        MoveClip,
        Scene,
        StepsScene,
        Timer,
        RoxyListener,
        Roxy,
        AnimationFrame,
        Loader,
        Matrix,
        Point,
        Rectangle,
        Router,
    } = Animate;

    const {
        abc,
        query,
        search,
        inject,
        typeOf,
        uri,
        copy,
        each,
        on,
        domLoaded,
        toCamelCase,
        toSnakeCase,
        toMinusCase,
        hasLowerCase,
        addCss,
    } = Static;

    const {
        sprintf,
        calculateAngle,
        calculatePosition,
        convertHEXtoRGB,
        convertRGBtoHEX,
        degreesToRadians,
        distanceBetween,
        keysIn,
        radiansToDegrees,
        randomColor,
        randomItem,
        range,

    } = Function;

    addCss({
        '#canvas': {
            backgroundColor: '#171717',
            border: '3px solid #DDDDDD'
        }
    });

    const createClip = function () {};
    const addToScene = function () {};

    domLoaded(() => {
        const App = {
            ui: {
                body: query('body'),
                app: query('#app'),
                canvas: createElement('canvas', {id: 'canvas', width: '800px', height: '600px'}),
            },
            canvas: null,
        }

        App.canvas = Clip(App.ui.canvas);
        App.ui.app.appendChild(App.ui.canvas);
    });
};

export default Controller;
