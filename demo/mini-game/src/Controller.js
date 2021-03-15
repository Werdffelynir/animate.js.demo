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
import RenderComponent from "./components/RenderComponent";
import Stage from "animate.js/src/components/Stage";

const Controller = function () {
    console.log('Controller: mini-game');

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

    // Stage.scene('1', () => {console.log(1)});
    // Stage.scene('2', () => {console.log(2)});
    // Stage.scene('3', () => {console.log(3)});
    // Stage.next();
    // return 0;

    domLoaded(() => {
        RenderComponent.render();
    });
};

export default Controller;
