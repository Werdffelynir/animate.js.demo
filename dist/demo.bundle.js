/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./demo/game-frame/index.js":
/*!**********************************!*\
  !*** ./demo/game-frame/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Controller = __webpack_require__(/*! ./src/Controller */ "./demo/game-frame/src/Controller.js");

var _Controller2 = _interopRequireDefault(_Controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (location.pathname.split('/').filter(function (v) {
    return v;
}).reverse()[0] === 'game-frame') {
    (0, _Controller2.default)();
}

/***/ }),

/***/ "./demo/game-frame/src/Controller.js":
/*!*******************************************!*\
  !*** ./demo/game-frame/src/Controller.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _src = __webpack_require__(/*! animate.js/src */ "./node_modules/animate.js/src/index.js");

var _src2 = _interopRequireDefault(_src);

var _static = __webpack_require__(/*! animate.js/src/static */ "./node_modules/animate.js/src/static/index.js");

var _static2 = _interopRequireDefault(_static);

var _domLoaded = __webpack_require__(/*! animate.js/src/static/domLoaded */ "./node_modules/animate.js/src/static/domLoaded.js");

var _domLoaded2 = _interopRequireDefault(_domLoaded);

var _addCss = __webpack_require__(/*! animate.js/src/static/addCss */ "./node_modules/animate.js/src/static/addCss.js");

var _addCss2 = _interopRequireDefault(_addCss);

var _Stage = __webpack_require__(/*! animate.js/src/components/Stage */ "./node_modules/animate.js/src/components/Stage.js");

var _Stage2 = _interopRequireDefault(_Stage);

var _Plant = __webpack_require__(/*! animate.js/src/components/Plant */ "./node_modules/animate.js/src/components/Plant.js");

var _Plant2 = _interopRequireDefault(_Plant);

var _Component = __webpack_require__(/*! animate.js/src/components/Component */ "./node_modules/animate.js/src/components/Component.js");

var _Component2 = _interopRequireDefault(_Component);

var _Clip = __webpack_require__(/*! animate.js/src/components/Clip */ "./node_modules/animate.js/src/components/Clip.js");

var _Clip2 = _interopRequireDefault(_Clip);

var _on = __webpack_require__(/*! animate.js/src/static/on */ "./node_modules/animate.js/src/static/on.js");

var _on2 = _interopRequireDefault(_on);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Controller = function Controller() {
    console.log('Controller: game-frame');

    var Clip = _src2.default.Clip,
        Component = _src2.default.Component,
        KeyboardEventManager = _src2.default.KeyboardEventManager,
        MoveClip = _src2.default.MoveClip,
        Scene = _src2.default.Scene,
        StepsScene = _src2.default.StepsScene,
        Timer = _src2.default.Timer,
        RoxyListener = _src2.default.RoxyListener,
        Roxy = _src2.default.Roxy,
        AnimationFrame = _src2.default.AnimationFrame,
        Loader = _src2.default.Loader,
        Matrix = _src2.default.Matrix,
        Point = _src2.default.Point,
        Rectangle = _src2.default.Rectangle,
        Router = _src2.default.Router;
    var query = _static2.default.query,
        search = _static2.default.search,
        inject = _static2.default.inject,
        typeOf = _static2.default.typeOf,
        uri = _static2.default.uri,
        copy = _static2.default.copy,
        each = _static2.default.each,
        on = _static2.default.on;
};

(0, _domLoaded2.default)(function () {

    var COLOR_BASE_DG = '#1c1c1c';
    var COLOR_BASE_BORDER = '#0f0';

    (0, _addCss2.default)({
        '.mini-game-hide': { display: 'none', top: '-500px' },
        '.mini-game-show': { display: 'block', top: '0px' },
        '#mini-game *': {
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
            userSelect: 'none'
        },
        '#mini-game': {
            display: 'block',
            position: 'absolute',
            top: '200px',
            right: '0px',
            width: '180px',
            height: '50px'
        },
        '#mini-game-title': {
            position: 'absolute',
            display: 'block',
            top: '-100px',
            right: '-50px',
            width: '150px',
            height: '50px',
            padding: '16px',
            transform: 'rotate(-90deg)',
            textAlign: 'center',
            color: COLOR_BASE_BORDER,
            border: '2px solid ' + COLOR_BASE_BORDER,
            backgroundColor: COLOR_BASE_DG,
            cursor: 'pointer'
        },
        '#mini-game-body': {},
        '#mini-game-wrapper': {
            position: 'absolute',
            display: 'block',
            width: '300px',
            height: '200px',
            transition: 'all .6s',
            right: '0px',
            border: '2px solid ' + COLOR_BASE_BORDER,
            backgroundColor: COLOR_BASE_DG
        }
    });

    // Components
    var GameComponent = (0, _Component2.default)({
        id: 'GameComponent',
        template: "\n<span id=\"mini-game\" data-id=\"game\">\n    <span id=\"mini-game-title\" data-id=\"title\">MINI GAME</span>    \n    <span id=\"mini-game-body\" data-id=\"body\">\n        <span id=\"mini-game-wrapper\" data-id=\"wrapper\" class=\"mini-game-hide\">canvas wrapper</span>\n    </span>    \n</span>\n",
        params: {
            active: false
        },
        init: function init() {},
        complete: function complete() {},
        actions: function actions() {
            var _this = this;

            this.elements('id', 'title').addEventListener('click', function (event) {
                if (_this.params.active) {
                    _this.params.active = false;
                    _this.elements('id', 'wrapper').classList.remove('mini-game-show');
                    _this.elements('id', 'wrapper').classList.add('mini-game-hide');
                } else {
                    _this.params.active = true;
                    _this.elements('id', 'wrapper').classList.remove('mini-game-hide');
                    _this.elements('id', 'wrapper').classList.add('mini-game-show');
                }
            });
        },
        render: function render() {
            this.actions();
            document.body.appendChild(this.template);
        }
    });

    var MenuComponent = (0, _Component2.default)({
        id: '',
        params: {},
        init: function init() {},
        complete: function complete() {},
        render: function render() {}
    });
    var ButtonClip = (0, _Clip2.default)({
        id: '',
        element: 'body',
        params: {},
        init: function init() {},
        complete: function complete() {},
        render: function render() {}
    });
    var ButtonComponent = (0, _Plant2.default)({
        id: '',
        params: {},
        init: function init() {},
        complete: function complete() {},
        render: function render() {}
    });

    // Scenes
    _Stage2.default.scene('game', function () {
        GameComponent.render();
    });
    _Stage2.default.execute('game');
});

exports.default = Controller;

/***/ }),

/***/ "./node_modules/animate.js/src/components/AnimationFrame.js":
/*!******************************************************************!*\
  !*** ./node_modules/animate.js/src/components/AnimationFrame.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

/*
const animation = AnimationFrame();
animation.pause();
animation.start(function(progress){
    if (Math.round(progress) % 1000 === 0) {
        // do something
    }
});
animation.cancel();
*/
/**
 *
 * @returns {{duration: number, startpaly: number, paused: boolean, delay: number, requestId: number, callback: number, progress: number}}
 * @constructor
 */
var AnimationFrame = function AnimationFrame() {
    var root = {
        requestId: 0,
        startpaly: 0,
        paused: false,
        callback: 0,
        delay: 0,
        duration: 0,
        progress: 0
    };

    root.step = function (timestamp) {
        if (!root.startpaly) root.startpaly = timestamp;
        root.progress = timestamp - root.startpaly;

        if (root.callback) {
            root.callback.call(root, root.progress);
        }

        if (root.duration && root.duration > root.progress) {
            root.cancel();
        }

        window.requestAnimationFrame(root.step);
        if (root.paused) {
            window.requestAnimationFrame(root.step);
        }
    };

    root.pause = function () {
        root.paused = !root.paused;
    };

    root.start = function (callback) {
        if (callback) {
            root.callback = callback;
        }
        return root.requestId = window.requestAnimationFrame(root.step);
    };

    root.cancel = function () {
        window.cancelAnimationFrame(root.requestId);
    };

    return root;
};

exports.default = AnimationFrame;

/***/ }),

/***/ "./node_modules/animate.js/src/components/Clip.js":
/*!********************************************************!*\
  !*** ./node_modules/animate.js/src/components/Clip.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _position = __webpack_require__(/*! ../static/position */ "./node_modules/animate.js/src/static/position.js");

var _position2 = _interopRequireDefault(_position);

var _copy = __webpack_require__(/*! ../static/copy */ "./node_modules/animate.js/src/static/copy.js");

var _copy2 = _interopRequireDefault(_copy);

var _clone = __webpack_require__(/*! ../static/clone */ "./node_modules/animate.js/src/static/clone.js");

var _clone2 = _interopRequireDefault(_clone);

var _isHTMLString = __webpack_require__(/*! ../static/isHTMLString */ "./node_modules/animate.js/src/static/isHTMLString.js");

var _isHTMLString2 = _interopRequireDefault(_isHTMLString);

var _query = __webpack_require__(/*! ../static/query */ "./node_modules/animate.js/src/static/query.js");

var _query2 = _interopRequireDefault(_query);

var _stylizer = __webpack_require__(/*! ../static/stylizer */ "./node_modules/animate.js/src/static/stylizer.js");

var _stylizer2 = _interopRequireDefault(_stylizer);

var _str2node = __webpack_require__(/*! ../static/str2node */ "./node_modules/animate.js/src/static/str2node.js");

var _str2node2 = _interopRequireDefault(_str2node);

var _isNode = __webpack_require__(/*! ../static/isNode */ "./node_modules/animate.js/src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _isString = __webpack_require__(/*! ../static/isString */ "./node_modules/animate.js/src/static/isString.js");

var _isString2 = _interopRequireDefault(_isString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @property bottom
 * @property element
 * @property height
 * @property left
 * @property right
 * @property top
 * @property width
 * @property x
 * @property y
 * @method moveTo()
 * @method copyTo
 * @method on
 * @method clone
 * @method style
 * @method inject
 * @method append
 * @method remove
 * @method clear
 * @method on
 * @method clone
 *
 * @param element
 * @param onInitCallback
 * @returns {{ bottom: number, element: Object, height: number, left: number, right: number, top: number, width: number, x: number, y: number, moveTo: function, copyTo: function, on: function, clone: function, style: function, inject: function, append: function, remove: function, clear: function, on: function, clone: function, calculate: function }}
 * @constructor Clip()
 */
var Clip = function Clip(element, onInitCallback) {
    /**
     *
     * @type {{x: number, width: number, y: number, height: number, top: number, left: number, right: number, bottom: number, element: Object}}
     */
    var root = (0, _position2.default)(element);

    if (root.element instanceof Node) {
        var parent = (0, _position2.default)(element.parentNode);
        root.x = root.x - parent.x;
        root.y = root.y - parent.y;
        root.parent = parent;
        root.parent.element = element.parentNode;
        root.element.setAttribute('data-clip', root.element.id || 'clip');
    }

    root.moveTo = function (parentElement) {
        if (parentElement instanceof Clip) {
            return parentElement.element.appendChild(root.element);
        }
        if (parentElement instanceof Node) {
            return parentElement.appendChild(root.element);
        }
    };

    root.calculate = function (element) {
        element = (0, _isNode2.default)(element) || (0, _isString2.default)(element) ? element : this.element;
        var re_root = (0, _position2.default)(element);
        var re_parent = (0, _position2.default)(re_root.element.parentNode);

        if ((0, _isNode2.default)(re_parent.element)) {
            re_root.parent = root.calculate(re_parent.element);
        } else {
            re_root.parent = { x: 0, y: 0, width: 0, height: 0 };
        }
        re_root.x = re_root.x - re_parent.x;
        re_root.y = re_root.y - re_parent.y;

        var props = ['x', 'y', 'width', 'height', 'top', 'left', 'right', 'bottom', 'parent'];
        Object.keys(re_root).forEach(function (key) {
            if (props.includes(key)) {
                root[key] = re_root[key];
            }
        });
    };

    root.copyTo = function (parentElement) {
        root.element = (0, _copy2.default)(root.element);
        root.moveTo(parentElement);
    };

    root.on = function (event, callback) {
        root.element.addEventListener(event, callback);
    };

    root.clone = function () {
        return (0, _clone2.default)(this);
    };

    root.style = function (object) {
        (0, _stylizer2.default)(root.element, object);
    };

    root.inject = function (elem) {
        var append = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        if (typeof elem === 'string') {
            if ((0, _isHTMLString2.default)(elem)) {
                elem = (0, _str2node2.default)(elem);
            } else {
                elem = (0, _query2.default)(elem);
            }
        }
        if (!append) {
            root.element.textContent = '';
        }

        if (Array.isArray(elem)) {
            elem.forEach(function (e) {
                root.inject(e, true);
            });
        }
        if ((0, _isNode2.default)(elem)) {
            root.element.appendChild(elem);
        }
    };

    root.append = function (elem) {
        root.inject(elem, true);
    };

    root.remove = function (elem) {
        if ((0, _isNode2.default)(elem)) {
            return root.element.removeChild(elem);
        } else {
            throw new TypeError('Failed argument type. Need NodeElement');
        }
    };

    root.clear = function () {
        root.element.textContent = '';
    };

    if (typeof onInitCallback === "function") {
        onInitCallback.call(root);
    }

    return root;
};

exports.default = Clip;

/***/ }),

/***/ "./node_modules/animate.js/src/components/Color.js":
/*!*********************************************************!*\
  !*** ./node_modules/animate.js/src/components/Color.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Color = {
    aliceBlue: 'AliceBlue',
    antiqueWhite: 'AntiqueWhite',
    aqua: 'Aqua',
    aquamarine: 'Aquamarine',
    azure: 'Azure',
    beige: 'Beige',
    bisque: 'Bisque',
    black: 'Black',
    blanchedAlmond: 'BlanchedAlmond',
    blue: 'Blue',
    blueViolet: 'BlueViolet',
    brown: 'Brown',
    burlyWood: 'BurlyWood',
    cadetBlue: 'CadetBlue',
    chartreuse: 'Chartreuse',
    chocolate: 'Chocolate',
    coral: 'Coral',
    cornflowerBlue: 'CornflowerBlue',
    cornsilk: 'Cornsilk',
    crimson: 'Crimson',
    cyan: 'Cyan',
    darkBlue: 'DarkBlue',
    darkCyan: 'DarkCyan',
    darkGoldenRod: 'DarkGoldenRod',
    darkGray: 'DarkGray',
    darkGrey: 'DarkGrey',
    darkGreen: 'DarkGreen',
    darkKhaki: 'DarkKhaki',
    darkMagenta: 'DarkMagenta',
    darkOliveGreen: 'DarkOliveGreen',
    darkOrange: 'DarkOrange',
    darkOrchid: 'DarkOrchid',
    darkRed: 'DarkRed',
    darkSalmon: 'DarkSalmon',
    darkSeaGreen: 'DarkSeaGreen',
    darkSlateBlue: 'DarkSlateBlue',
    darkSlateGray: 'DarkSlateGray',
    darkSlateGrey: 'DarkSlateGrey',
    darkTurquoise: 'DarkTurquoise',
    darkViolet: 'DarkViolet',
    deepPink: 'DeepPink',
    deepSkyBlue: 'DeepSkyBlue',
    dimGray: 'DimGray',
    dimGrey: 'DimGrey',
    dodgerBlue: 'DodgerBlue',
    fireBrick: 'FireBrick',
    floralWhite: 'FloralWhite',
    forestGreen: 'ForestGreen',
    fuchsia: 'Fuchsia',
    gainsboro: 'Gainsboro',
    ghostWhite: 'GhostWhite',
    gold: 'Gold',
    goldenRod: 'GoldenRod',
    gray: 'Gray',
    grey: 'Grey',
    green: 'Green',
    greenYellow: 'GreenYellow',
    honeyDew: 'HoneyDew',
    hotPink: 'HotPink',
    indianRed: 'IndianRed',
    indigo: 'Indigo',
    ivory: 'Ivory',
    khaki: 'Khaki',
    lavender: 'Lavender',
    lavenderBlush: 'LavenderBlush',
    lawnGreen: 'LawnGreen',
    lemonChiffon: 'LemonChiffon',
    lightBlue: 'LightBlue',
    lightCoral: 'LightCoral',
    lightCyan: 'LightCyan',
    lightGoldenRodYellow: 'LightGoldenRodYellow',
    lightGray: 'LightGray',
    lightGrey: 'LightGrey',
    lightGreen: 'LightGreen',
    lightPink: 'LightPink',
    lightSalmon: 'LightSalmon',
    lightSeaGreen: 'LightSeaGreen',
    lightSkyBlue: 'LightSkyBlue',
    lightSlateGray: 'LightSlateGray',
    lightSlateGrey: 'LightSlateGrey',
    lightSteelBlue: 'LightSteelBlue',
    lightYellow: 'LightYellow',
    lime: 'Lime',
    limeGreen: 'LimeGreen',
    linen: 'Linen',
    magenta: 'Magenta',
    maroon: 'Maroon',
    mediumAquaMarine: 'MediumAquaMarine',
    mediumBlue: 'MediumBlue',
    mediumOrchid: 'MediumOrchid',
    mediumPurple: 'MediumPurple',
    mediumSeaGreen: 'MediumSeaGreen',
    mediumSlateBlue: 'MediumSlateBlue',
    mediumSpringGreen: 'MediumSpringGreen',
    mediumTurquoise: 'MediumTurquoise',
    mediumVioletRed: 'MediumVioletRed',
    midnightBlue: 'MidnightBlue',
    mintCream: 'MintCream',
    mistyRose: 'MistyRose',
    moccasin: 'Moccasin',
    navajoWhite: 'NavajoWhite',
    navy: 'Navy',
    oldLace: 'OldLace',
    olive: 'Olive',
    oliveDrab: 'OliveDrab',
    orange: 'Orange',
    orangeRed: 'OrangeRed',
    orchid: 'Orchid',
    paleGoldenRod: 'PaleGoldenRod',
    paleGreen: 'PaleGreen',
    paleTurquoise: 'PaleTurquoise',
    paleVioletRed: 'PaleVioletRed',
    papayaWhip: 'PapayaWhip',
    peachPuff: 'PeachPuff',
    peru: 'Peru',
    pink: 'Pink',
    plum: 'Plum',
    powderBlue: 'PowderBlue',
    purple: 'Purple',
    rebeccaPurple: 'RebeccaPurple',
    red: 'Red',
    rosyBrown: 'RosyBrown',
    royalBlue: 'RoyalBlue',
    saddleBrown: 'SaddleBrown',
    salmon: 'Salmon',
    sandyBrown: 'SandyBrown',
    seaGreen: 'SeaGreen',
    seaShell: 'SeaShell',
    sienna: 'Sienna',
    silver: 'Silver',
    skyBlue: 'SkyBlue',
    slateBlue: 'SlateBlue',
    slateGray: 'SlateGray',
    slateGrey: 'SlateGrey',
    snow: 'Snow',
    springGreen: 'SpringGreen',
    steelBlue: 'SteelBlue',
    tan: 'Tan',
    teal: 'Teal',
    thistle: 'Thistle',
    tomato: 'Tomato',
    turquoise: 'Turquoise',
    violet: 'Violet',
    wheat: 'Wheat',
    white: 'White',
    whiteSmoke: 'WhiteSmoke',
    yellow: 'Yellow',
    yellowGreen: 'YellowGreen'
};

exports.default = Color;

/***/ }),

/***/ "./node_modules/animate.js/src/components/Component.js":
/*!*************************************************************!*\
  !*** ./node_modules/animate.js/src/components/Component.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.COMPONENT_DATA_ATTRIBUTES = undefined;

var _str2node = __webpack_require__(/*! ../static/str2node */ "./node_modules/animate.js/src/static/str2node.js");

var _str2node2 = _interopRequireDefault(_str2node);

var _isNode = __webpack_require__(/*! ../static/isNode */ "./node_modules/animate.js/src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _merge = __webpack_require__(/*! ../static/merge */ "./node_modules/animate.js/src/static/merge.js");

var _merge2 = _interopRequireDefault(_merge);

var _search = __webpack_require__(/*! ../static/search */ "./node_modules/animate.js/src/static/search.js");

var _search2 = _interopRequireDefault(_search);

var _clone = __webpack_require__(/*! ../static/clone */ "./node_modules/animate.js/src/static/clone.js");

var _clone2 = _interopRequireDefault(_clone);

var _random = __webpack_require__(/*! ../static/random */ "./node_modules/animate.js/src/static/random.js");

var _isHTMLString = __webpack_require__(/*! ../static/isHTMLString */ "./node_modules/animate.js/src/static/isHTMLString.js");

var _isHTMLString2 = _interopRequireDefault(_isHTMLString);

var _query = __webpack_require__(/*! ../static/query */ "./node_modules/animate.js/src/static/query.js");

var _query2 = _interopRequireDefault(_query);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
# Config
id: 'id',
props: {},
template: ``,

before () {},
init () {},
complete () {},

data: {},
methods: {},
components: {},

templateElementsEnabled: true,
templateElementsAttributes: COMPONENT_DATA_ATTRIBUTES,
override: false,
initialized: false,
completed: false,

# Base example
Component({
    id: 'ExternalTemplateComponent',
    props: ['title'],
    template: 'template',
    init () {},
    data: {},
    complete (app) {},
    methods: {}
});

# Extend example
Component({
    id: 'ExternalTemplateComponent',
    props: ['title'],
    template: 'template',
    init () {},
    data: {
        iterator: 0,
    },
    complete (app) {
        if (this.templateElements.node.title) this.templateElements.node.title.textContent = this.title;
    },
    methods: {
        add (e) {
            this.node.iterator.textContent = ++ this.data.iterator ;
        },
    }
});

comp = Component({...});
    templateElements: { func:{}, action:{}, node:{}, on:{} },
        If templateElementsEnabled is enabled during component initialization, attributes with names are requested
        from the template:
        COMPONENT_DATA_ATTRIBUTES === [data-func], [data-action], [data-node], [data-on]

comp.component(id)
comp.componentChildren(id)
comp.clone()
comp.on(event, callback)
comp.inject(elem, append = true)
comp.inject()
comp.elements(attr, name)
*/

/**
 * @param config
 * @returns {*}
 * @constructor
 */
var Component = function Component(config) {
    if (typeof config === 'string') {
        // get property by id keyword
        return Component.list[config];
    } else {
        if (!config.id) {
            var randomName = (0, _random.randomHumanizeString)(6).toLowerCase();
            randomName = randomName.substring(0, 1).toUpperCase() + randomName.substring(1);
            config.id = 'Component' + randomName;
        }

        if (Component.list[config.id]) {
            return Component.list[config.id];
        }
        var comp = Component.create(config);
        // const comp = Component.create(merge(config, {
        //     get parent(){
        //         return this.parentDOMElement;
        //     },
        //     set parent(value){
        //         if (!(value instanceof Node)) throw new Error('Parent must extend of Node');
        //         this.parentDOMElement = value;
        //     },
        // }));

        comp.component = function (id) {
            return comp.components[id] ? comp.components[id] : null;
        };

        comp.componentChildren = function (id) {
            return comp.children.find(function (component) {
                return component.id === id;
            });
        };

        comp.clone = function () {
            var cloned = (0, _clone2.default)(this);
            cloned.template = cloned.template.cloneNode(true);
            return cloned;
        };

        comp.on = function (event, callback) {
            comp.template.addEventListener(event, callback);
        };

        // comp.inject = function (elem, append = true) {
        //     if (typeof elem === 'string') {
        //         if (isHTMLString(elem)) {
        //             elem = str2node(elem);
        //         } else {
        //             elem = query(elem);
        //         }
        //     }
        //     if (!append) {
        //         comp.template.textContent = '';
        //     }
        //     if (isNode(elem)) {
        //         comp.template.appendChild(elem);
        //     }
        //     if (Array.isArray(elem)) {
        //         elem.forEach((e) => {comp.inject(e, true)});
        //     }
        // };

        comp.inject = function (elem) {
            var append = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (Array.isArray(elem)) {
                elem.forEach(function (e) {
                    comp.inject(e, true);
                });
            }
            if (!append) {
                comp.template.textContent = '';
            }
            if ((0, _isNode2.default)(elem)) {
                comp.template.appendChild(elem);
            }
            if (typeof elem === 'number') {
                elem = elem.toString();
            }
            if (typeof elem === 'string') {
                if ((0, _isHTMLString2.default)(elem)) {
                    elem = (0, _str2node2.default)(elem);
                    comp.template.appendChild(elem);
                } else {
                    comp.template.textContent += elem;
                }
            }
        };

        comp.append = function (elem) {
            comp.inject(elem, true);
        };

        if (typeof comp.before === 'function' && !comp.initialized) {
            comp.before();
        }

        if (typeof comp.template === 'string') {
            if ((0, _isHTMLString2.default)(comp.template) || comp.template === '') {
                comp.template = (0, _str2node2.default)(comp.template);
            } else {
                comp.template = (0, _query2.default)(comp.template);
            }
        }

        if (comp.methods && Object.values(comp.methods).length) {
            Object.keys(comp.methods).forEach(function (key) {
                if (typeof comp.methods[key] === 'function') {
                    comp.methods[key] = comp.methods[key].bind(comp);
                    if (!comp.hasOwnProperty(key)) {
                        comp[key] = comp.methods[key];
                    }
                }
            });
        }

        if (!comp.initialized) {
            comp.initialized = true;

            if (typeof comp.init === 'function') comp.init();
        }

        if (comp.data && Object.keys(comp.data).length) {
            Object.keys(comp.data).forEach(function (key) {
                if (typeof comp.data[key] === 'function') {
                    comp.data[key] = comp.data[key].bind(comp);
                }
                if (!comp.hasOwnProperty(key)) {
                    comp[key] = comp.data[key];
                }
            });
        }

        if (comp.components && Object.keys(comp.components).length) {
            Object.keys(comp.components).forEach(function (key) {
                if (comp.components[key]) {
                    comp.components[key].parentComponent = comp;
                }
                comp.children.push(comp.components[key]);
            });
        }

        comp.elements = function (attr, name) {
            attr = attr.replace('data-', '');
            if (name) {
                return typeof comp.templateDataElements[attr][name] !== "undefined" ? comp.templateDataElements[attr][name] : null;
            }

            return typeof comp.templateDataElements[attr] !== "undefined" ? comp.templateDataElements[attr] : null;
        };

        comp.updateTemplateDataElements = function () {
            if ((0, _isNode2.default)(comp.template) && comp.templateDataElementsEnabled === true) {
                comp.templateDataElementsAttributes.forEach(function (attr) {
                    var name = attr.substring(5);
                    comp.templateDataElements[name] = (0, _search2.default)('[' + attr + ']', attr, comp.template);
                });
            }
        };

        /*        comp.parent = function (parent) {
                    if (parent && parent.nodeType === Node.ELEMENT_NODE) {
                        return this.parentDOMElement = parent;
                    }
                    return this.parentDOMElement;
                };*/

        if (!comp.completed) {
            comp.updateTemplateDataElements();
            if (document) {
                document.addEventListener('DOMContentLoaded', function () {
                    comp.completed = true;
                    if (typeof comp.complete === 'function') comp.complete.call(comp, comp);
                });
            } else {
                comp.completed = true;
                if (typeof comp.complete === 'function') comp.complete.call(comp, comp);
            }
        }

        Component.list[comp.id] = comp;
        return comp;
    }
};

Component.list = {};
Component.create = function (config) {
    return (0, _merge2.default)({
        id: null,
        props: {},
        template: false,
        override: false,
        init: function init() {},
        complete: function complete() {},
        methods: {},
        node: {},
        initialized: false,
        completed: false,
        templateDataElements: {},
        templateDataElementsEnabled: true,
        templateDataElementsAttributes: COMPONENT_DATA_ATTRIBUTES,
        components: {},
        children: [],
        parentComponent: {}
    }, config);
};

var COMPONENT_DATA_ATTRIBUTES = exports.COMPONENT_DATA_ATTRIBUTES = ['data-func', 'data-action', 'data-node', 'data-on', 'data-to', 'data-id'];

exports.default = Component;

/***/ }),

/***/ "./node_modules/animate.js/src/components/EnterFrame.js":
/*!**************************************************************!*\
  !*** ./node_modules/animate.js/src/components/EnterFrame.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createElement = __webpack_require__(/*! ../static/createElement */ "./node_modules/animate.js/src/static/createElement.js");

var _createElement2 = _interopRequireDefault(_createElement);

var _merge = __webpack_require__(/*! ../static/merge */ "./node_modules/animate.js/src/static/merge.js");

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
## Example:
EnterFrame({fps: 60}).start((event) => {
    console.log('ENTER_FRAME');
});


## Example:
EnterFrame({fps: 60, global: true}).start();
document.addEventListener(EnterFrame.ENTER_FRAME, (event) => {
    console.log('ENTER_FRAME');
});


## Example:
const animator = EnterFrame({
    fps: 30,
    global: true, // for enable document.addEventListener
});
animator.start();

function animatorAddListener(event) {
    console.log('animator:', event.detail, event.target)
}

animator.addListener(animatorAddListener, {detail: {id: 101, name: 'name'}});
animator.removeListener(animatorAddListener);

document.addEventListener(EnterFrame.ENTER_FRAME, animatorAddListener);
document.removeEventListener(EnterFrame.ENTER_FRAME, animatorAddListener);

Example:

*/

/**
 *
 * @param parameters
 * @returns {boolean|{cancel: function, computed: {elapsed: number, frameCount: number, paused: boolean, startpaly: number, fpsInterval: number, now: number, fps: boolean, callback: boolean, progress: number, then: number}, fps, readonly count: number, start: function, readonly progress: number, callback, pause: function}|number}
 * @constructor
 */

var EnterFrame = function EnterFrame() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var definedParameters = ['fps', 'paused', 'looper', 'callback', 'global'];

    var root = {
        computed: {
            fps: false,
            paused: false,
            callback: false,
            now: 0,
            elapsed: 0,
            then: 0,
            fpsInterval: 0,
            frameCount: 0,
            startpaly: 0,
            progress: 0,
            global: false,
            detail: false,
            // event: new Event(EnterFrame.ENTER_FRAME),
            event: new CustomEvent(EnterFrame.ENTER_FRAME, { 'detail': {} }),
            eventTarget: new EventTarget()
            // eventTarget: createElement('span', {class:EnterFrame.ENTER_FRAME}),
            //new EventTarget(),//createElement('span',{class:EnterFrame.ENTER_FRAME}),
        },
        get fps() {
            return root.computed.fps;
        },
        get count() {
            return root.computed.frameCount;
        },
        get progress() {
            return root.computed.progress;
        },
        get paused() {
            return root.computed.paused;
        },
        set fps(value) {
            root.computed.fps = value;
        },
        set callback(value) {
            root.computed.callback = value;
        },
        pause: function pause() {
            root.paused = !root.paused;
        },
        start: function start(callback) {
            this.computed.callback = callback || function computedCallback() {};
            if (this.computed.fps > 0) {
                this.computed.fpsInterval = 1000 / this.computed.fps;
                this.computed.then = Date.now();
                this.computed.startTime = this.computed.then;
            }
            this.computed.requestId = window.requestAnimationFrame(animation);
        },
        cancel: function cancel() {
            window.cancelAnimationFrame(root.computed.requestId);
        },
        dispatch: function dispatch() {
            if (root.computed.detail) {
                this.computed.event = new CustomEvent(EnterFrame.ENTER_FRAME, { 'detail': root.computed.detail });
                root.computed.detail = false;
            }
            this.computed.eventTarget.dispatchEvent(this.computed.event);
            if (this.computed.global) {
                document.dispatchEvent(root.computed.event);
            }
        },
        removeListener: function removeListener(listener, options) {
            root.computed.eventTarget.removeEventListener(EnterFrame.ENTER_FRAME, listener, options);
        },
        addListener: function addListener(listener, options) {
            if (options && options.detail) root.computed.detail = options.detail;
            root.computed.eventTarget.addEventListener(EnterFrame.ENTER_FRAME, listener, options);
        }
    };
    Object.keys(parameters).forEach(function (key) {
        if (definedParameters.indexOf(key) === false) {
            if (Object.keys(root).indexOf(key) === false) {
                root[key] = parameters[key];
            }
        } else {
            root.computed[key] = parameters[key];
        }
    });

    // Object.values(defined).forEach((key) => {
    //     root.computed[key] = (typeof parameters[key] !== undefined) ? parameters[key] : root.computed[key];
    // });

    var animation = function animation(timestamp) {
        if (!root.computed.startpaly) root.computed.startpaly = timestamp;
        if (!root.computed.frameCount) root.computed.frameCount = 0;
        root.computed.progress = timestamp - root.computed.startpaly;
        if (root.computed.fps && root.computed.fps > 0) {
            root.computed.now = Date.now();
            root.computed.elapsed = root.computed.now - root.computed.then;
            if (root.computed.elapsed > root.computed.fpsInterval) {
                root.computed.then = root.computed.now - root.computed.elapsed % root.computed.fpsInterval;

                if (root.computed.callback && !root.computed.paused) {
                    root.computed.frameCount++;
                    root.computed.callback.call(root, root.computed.progress, root.computed.frameCount);
                    root.dispatch();
                }
            }
        } else {
            if (root.computed.callback && !root.computed.paused) {
                root.computed.frameCount++;
                root.computed.callback.call(root, root.computed.progress, root.computed.frameCount);
                root.dispatch();
            }
        }

        requestAnimationFrame(animation);
    };

    return root;
};
EnterFrame.ENTER_FRAME = 'enter_frame';
EnterFrame.instance = function () {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return new EnterFrame((0, _merge2.default)({
        fps: 60
        // callback: callback,
    }, parameters));
};

exports.default = EnterFrame;

/***/ }),

/***/ "./node_modules/animate.js/src/components/EventManager.js":
/*!****************************************************************!*\
  !*** ./node_modules/animate.js/src/components/EventManager.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * @deprecated
 * @type {{super: DocumentFragment, addEvent: (function(*=, *=): CustomEvent), removeEventListener: (function(*=, *=, *=): this), dispatchEvent: (function(*): this), eventsType: {}, removeEvent: (function(*): this), version: string, addEventListener: (function(*=, *=, *=): {type: *, listener: *, useCapture: (*|boolean)})}}
 */
var EventManager = {
    super: document.createDocumentFragment(),
    version: '0.0.2',
    eventsType: {},

    /**
     * Create new Event
     * @param name
     * @param details
     * @returns {CustomEvent}
     */
    addEvent: function addEvent(name, details) {
        var event = new CustomEvent(name, { detail: details });
        if ((typeof details === 'undefined' ? 'undefined' : _typeof(details)) === 'object') for (var key in details) {
            if (!event.hasOwnProperty(key)) event[key] = details[key];
        }EventManager.super[name] = event;
        return this;
    },

    /**
     * Remove Event
     * @param name
     */
    removeEvent: function removeEvent(name) {
        if (EventManager.super[name]) delete EventManager.super[name];
        return this;
    },

    /**
     * Register an event handler of a specific event type on the EventTarget.
     * @param type
     * @param listener
     * @param useCapture
     * @returns {{type: *, listener: *, useCapture: (*|boolean)}}
     */
    addEventListener: function addEventListener(type, listener, useCapture) {
        useCapture = useCapture || false;
        EventManager.super.addEventListener(type, listener, useCapture);
        return this;
    },

    /**
     * Removes an event listener from the EventTarget.
     * @param type
     * @param listener
     * @param useCapture
     */
    removeEventListener: function removeEventListener(type, listener, useCapture) {
        EventManager.super.removeEventListener(type, listener, useCapture || false);
        return this;
    },

    /**
     * Dispatch an event to this EventTarget.
     * @param type
     */
    dispatchEvent: function dispatchEvent(type) {
        if (EventManager.super[type] instanceof CustomEvent) EventManager.super.dispatchEvent(EventManager.super[type]);
        return this;
    }
};

exports.default = EventManager;

/***/ }),

/***/ "./node_modules/animate.js/src/components/Frames.js":
/*!**********************************************************!*\
  !*** ./node_modules/animate.js/src/components/Frames.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
const fr = Frames({
    fps: 24,
    paused: false,
    callback: (progress) => { if (Math.round(progress) % 1000 === 0) { // ... } },
});

### Methods
fr.start();
fr.pause();
fr.cancel();

### Getters
fr.fps;
fr.count;
fr.progress;
fr.paused;
*/

/**
 *
 * @deprecated
 * @param parameters
 * @returns {boolean|{cancel: function, computed: {elapsed: number, frameCount: number, paused: boolean, startpaly: number, fpsInterval: number, now: number, fps: boolean, callback: boolean, progress: number, then: number}, fps, readonly count: number, start: function, readonly progress: number, callback, pause: function}|number}
 * @constructor
 */
var Frames = function Frames() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var definedParameters = ['fps', 'paused', 'looper', 'callback'];

    var root = {
        computed: {
            fps: false,
            paused: false,
            callback: false,
            now: 0,
            elapsed: 0,
            then: 0,
            fpsInterval: 0,
            frameCount: 0,
            startpaly: 0,
            progress: 0
        },
        get fps() {
            return root.computed.fps;
        },
        get count() {
            return root.computed.frameCount;
        },
        get progress() {
            return root.computed.progress;
        },
        get paused() {
            return root.computed.paused;
        },
        set fps(value) {
            root.computed.fps = value;
        },
        set callback(value) {
            root.computed.callback = value;
        },
        pause: function pause() {
            root.paused = !root.paused;
        },
        start: function start(callback) {
            if (callback) {
                root.computed.callback = callback;
            }
            if (root.computed.fps > 0) {
                root.computed.fpsInterval = 1000 / root.computed.fps;
                root.computed.then = Date.now();
                root.computed.startTime = root.computed.then;
            }
            root.computed.requestId = window.requestAnimationFrame(animation);
        },
        cancel: function cancel() {
            window.cancelAnimationFrame(root.computed.requestId);
        }
    };

    Object.keys(parameters).forEach(function (key) {
        if (definedParameters.indexOf(key) === false) {
            if (Object.keys(root).indexOf(key) === false) {
                root[key] = parameters[key];
            }
        } else {
            root.computed[key] = parameters[key];
        }
    });
    // Object.values(defined).forEach((key) => {
    //     root.computed[key] = (typeof parameters[key] !== undefined) ? parameters[key] : root.computed[key];
    // });

    var animation = function animation(timestamp) {
        if (!root.computed.startpaly) root.computed.startpaly = timestamp;
        if (!root.computed.frameCount) root.computed.frameCount = 0;
        root.computed.progress = timestamp - root.computed.startpaly;
        if (root.computed.fps && root.computed.fps > 0) {
            root.computed.now = Date.now();
            root.computed.elapsed = root.computed.now - root.computed.then;
            if (root.computed.elapsed > root.computed.fpsInterval) {
                root.computed.then = root.computed.now - root.computed.elapsed % root.computed.fpsInterval;

                if (root.computed.callback && !root.computed.paused) {
                    root.computed.frameCount++;
                    root.computed.callback.call(root, root.computed.progress, root.computed.frameCount);
                }
            }
        } else {
            if (root.computed.callback && !root.computed.paused) {
                root.computed.frameCount++;
                root.computed.callback.call(root, root.computed.progress, root.computed.frameCount);
            }
        }

        requestAnimationFrame(animation);
    };

    return root;
};

exports.default = Frames;

/***/ }),

/***/ "./node_modules/animate.js/src/components/Graphic.js":
/*!***********************************************************!*\
  !*** ./node_modules/animate.js/src/components/Graphic.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _query = __webpack_require__(/*! ../static/query */ "./node_modules/animate.js/src/static/query.js");

var _query2 = _interopRequireDefault(_query);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
const graphic = Graphic({
    canvas: value,
    context: value,
    color: value,
    alpha: value,
    thickness: value,
    cap: value,
    join: value,
    font: value,
});

graphic.rectRound(110,10,100,25,5);
graphic.fill();


*/
/**
 *
 * @param params
 * @return {{formatsApply(): void, internalRectRound(*=, *=, *, *, *=): void, formats: {cap: boolean, color: string, thickness: boolean, alpha: boolean, join: boolean}, clearShadow(): this, color: (function(*): this), shadow(*, *, *, *): this, thickness: (function(*): this), line(*=, *=, *=, *=): this, save(): void, rectRound(*=, *=, *=, *=, *=): this, cap: (function(*): this), alpha: (function(*): this), context: *, ellipse(*=, *=, *, *=, *=, *=, *=, *=, *=): this, join: (function(*): this), close(): void, JOINS: {ROUND: string, BEVEL: string, MITER: string}, drawCallback: drawCallback, restore(): void, shape(*, *=): this, fill(): this, stroke(): this, circle(*, *, *=): this, begin(): void, CAPS: {SQUARE: string, ROUND: string, BUTT: string}}|*}
 * @constructor
 */
var Graphic = function Graphic(params) {
    var canvas = params['canvas'] ? params['canvas'] : (0, _query2.default)('canvas');

    var context = params['context'] ? params['context'] : canvas ? canvas.getContext('2d') : false;

    if (!canvas || !context) {
        return {};
    }

    return {
        canvas: canvas,
        context: context,
        drawCallback: function drawCallback() {},
        properties: function properties(props) {
            Object.keys(props).forEach(function (key) {
                if (Object.keys(Graphic.default.properties).indexOf(key) !== -1) {
                    context[key] = props[key];
                }

                if (typeof context[key] === "function") {
                    context[key].apply(context, props[key]);
                }
            });
        },

        formats: {
            color: params['color'] || '#000000',
            alpha: params['alpha'] || false,
            thickness: params['thickness'] || false,
            cap: params['cap'] || false,
            join: params['join'] || false,
            font: params['font'] || false
        },

        color: function color(value) {
            this.formats.color = value;
            return this;
        },


        // 0 - 1
        alpha: function alpha(value) {
            this.formats.alpha = value;
            return this;
        },


        // 0 - 100
        thickness: function thickness(value) {
            this.formats.thickness = value;
            return this;
        },


        // butt, round, square
        cap: function cap(value) {
            this.formats.cap = value;
            return this;
        },


        // round, bevel, miter
        join: function join(value) {
            this.formats.join = value;
            return this;
        },
        font: function font(value) {
            this.formats.font = value;
            return this;
        },


        CAPS: {
            BUTT: "butt",
            ROUND: "round",
            SQUARE: "square"
        },

        JOINS: {
            BEVEL: "bevel",
            ROUND: "round",
            MITER: "miter"
        },

        // draw
        text: function text(message) {
            var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

            this.formatsApply();
            this.context.fillText(message, x, y);
        },
        formatsApply: function formatsApply() {
            var _this = this;

            Object.keys(this.formats).forEach(function (key) {
                var map = {
                    alpha: 'globalAlpha',
                    thickness: 'lineWidth',
                    cap: 'lineCap',
                    join: 'join'
                    //color: 'fillStyle',
                };
                var convertName = function convertName(key) {
                    return map[key] !== undefined ? map[key] : key;
                };

                if (_this.formats[key] !== false && Object.keys(Graphic.default.properties).includes(convertName(key))) {
                    _this.context[convertName(key)] = _this.formats[key];
                }
            });
        },
        begin: function begin() {
            this.context.beginPath();
        },
        close: function close() {
            this.context.closePath();
        },
        save: function save() {
            this.context.save();
        },
        restore: function restore() {
            this.context.restore();
        },
        shadow: function shadow(x, y, blur, color) {
            this.context.shadowOffsetX = x;
            this.context.shadowOffsetY = y;
            this.context.shadowBlur = blur;
            this.context.shadowColor = color;
            return this;
        },
        clear: function clear() {
            var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;
            var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1000;

            this.context.clearRect(x, y, width, height);
            return this;
        },
        clearShadow: function clearShadow() {
            this.context.shadowOffsetX = this.context.shadowOffsetY = this.context.shadowBlur = 0;
            return this;
        },
        circle: function circle(x, y, radius) {
            this.drawCallback = function () {
                this.internalRectRound(x - radius / 2, y - radius / 2, radius, radius, radius / 2);
            };
            return this;
        },
        rect: function rect(x, y, width, height) {
            this.drawCallback = function () {
                this.context.beginPath();
                this.context.rect(x, y, width, height);
            };
            return this;
        },
        internalRectRound: function internalRectRound(x, y, width, height, radius) {
            this.context.beginPath();
            this.context.moveTo(x + radius, y);
            this.context.arcTo(x + width, y, x + width, y + height, radius);
            this.context.arcTo(x + width, y + height, x, y + height, radius);
            this.context.arcTo(x, y + height, x, y, radius);
            this.context.arcTo(x, y, x + width, y, radius);
        },
        rectRound: function rectRound(x, y, width, height) {
            var radius = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 5;

            this.drawCallback = function () {
                this.internalRectRound(x, y, width, height, radius);
            };
            return this;
        },
        shape: function shape(points, closePath) {
            this.drawCallback = function () {
                var i = void 0,
                    temp = {},
                    positions = [];
                points.map(function (p) {
                    if (temp.x === undefined) {
                        temp.x = p;
                    } else if (temp.y === undefined) {
                        temp.y = p;
                    }

                    if (temp.x !== undefined && temp.y !== undefined) {
                        positions.push(temp);temp = {};
                    }
                });

                this.context.beginPath();
                for (i = 0; i < positions.length; i++) {
                    this.context.lineTo(positions[i].x, positions[i].y);
                }

                if (!!closePath) this.context.closePath();
            };
            return this;
        },
        line: function line(x1, y1, x2, y2) {
            this.drawCallback = function () {
                this.context.beginPath();
                this.context.moveTo(x1, y1);
                this.context.lineTo(x2, y2);
            };
            return this;
        },
        ellipse: function ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise, closePath) {
            this.drawCallback = function () {
                this.context.save();
                this.context.beginPath();
                this.context.translate(x, y);
                this.context.rotate(rotation);
                this.context.scale(radiusX / radiusY, 1);
                this.context.arc(0, 0, radiusY, startAngle, endAngle, anticlockwise ? !!anticlockwise : false);
                this.context.restore();
                if (closePath) this.context.closePath();
            };
            return this;
        },
        stroke: function stroke() {
            this.formatsApply();
            this.drawCallback.call(this);

            if (this.formats.color) this.context.strokeStyle = this.formats.color;
            this.context.stroke();

            return this;
        },
        fill: function fill() {
            this.formatsApply();
            this.drawCallback.call(this);
            if (this.formats.color) this.context.fillStyle = this.formats.color;

            this.context.fill();

            return this;
        }
    };
};
Graphic.default = {};
Graphic.default.properties = {
    direction: "ltr",
    fillStyle: "#000000",
    filter: "none",
    font: "10px sans-serif",
    globalAlpha: 1,
    globalCompositeOperation: "source-over",
    imageSmoothingEnabled: true,
    imageSmoothingQuality: "low",
    lineCap: "butt",
    lineDashOffset: 0,
    lineJoin: "miter",
    lineWidth: 1,
    miterLimit: 10,
    shadowBlur: 0,
    shadowColor: "rgba(0, 0, 0, 0)",
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    strokeStyle: "#000000",
    textAlign: "start",
    textBaseline: "alphabetic"
};

exports.default = Graphic;

/***/ }),

/***/ "./node_modules/animate.js/src/components/KeyboardEventManager.js":
/*!************************************************************************!*\
  !*** ./node_modules/animate.js/src/components/KeyboardEventManager.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var EventCodes = exports.EventCodes = {
    'Backspace': 8,
    'Tab': 9,
    'Enter': 13,
    'ShiftLeft': 16,
    'ShiftRight': 16,
    'ControlLeft': 17,
    'ControlRight': 17,
    'AltLeft': 18,
    'AltRight': 18,
    'Pause': 19,
    'Break': 19,
    'CapsLock': 20,
    'Escape': 27,
    'Space': 32,
    'PageUp': 33,
    'PageDown': 34,
    'End': 35,
    'Home': 36,
    'ArrowLeft': 37,
    'ArrowUp': 38,
    'ArrowRight': 39,
    'ArrowDown': 40,
    'PrintScreen': 44,
    'Insert': 45,
    'Delete': 46,
    'Digit0': 48,
    'Digit1': 49,
    'Digit2': 50,
    'Digit3': 51,
    'Digit4': 52,
    'Digit5': 53,
    'Digit6': 54,
    'Digit7': 55,
    'Digit8': 56,
    'Digit9': 57,
    'KeyA': 65,
    'KeyB': 66,
    'KeyC': 67,
    'KeyD': 68,
    'KeyE': 69,
    'KeyF': 70,
    'KeyG': 71,
    'KeyH': 72,
    'KeyI': 73,
    'KeyJ': 74,
    'KeyK': 75,
    'KeyL': 76,
    'KeyM': 77,
    'KeyN': 78,
    'KeyO': 79,
    'KeyP': 80,
    'KeyQ': 81,
    'KeyR': 82,
    'KeyS': 83,
    'KeyT': 84,
    'KeyU': 85,
    'KeyV': 86,
    'KeyW': 87,
    'KeyX': 88,
    'KeyY': 89,
    'KeyZ': 90,
    'MetaLeft': 91,
    'MetaRight': 92,
    'ContextMenu': 93,
    'Numpad0': 96,
    'Numpad1': 97,
    'Numpad2': 98,
    'Numpad3': 99,
    'Numpad4': 100,
    'Numpad5': 101,
    'Numpad6': 102,
    'Numpad7': 103,
    'Numpad8': 104,
    'Numpad9': 105,
    'NumpadMultiply': 106,
    'NumpadAdd': 107,
    'NumpadSubtract': 109,
    'NumpadDecimal': 110,
    'NumpadDivide': 111,
    'F1': 112,
    'F2': 113,
    'F3': 114,
    'F4': 115,
    'F5': 116,
    'F6': 117,
    'F7': 118,
    'F8': 119,
    'F9': 120,
    'F10': 121,
    'F11': 122,
    'F12': 123,
    'NumLock': 144,
    'ScrollLock': 145,
    'Semicolon': 186,
    'Equal': 187,
    'Comma': 188,
    'Minus': 189,
    'Period': 190,
    'Slash': 191,
    'Backquote': 192,
    'BracketLeft': 219,
    'Backslash': 220,
    'BracketRight': 221,
    'Quote': 222
};

var EventCodesNames = exports.EventCodesNames = {
    'Backspace': 'Backspace',
    'Tab': 'Tab',
    'Enter': 'Enter',
    'ShiftLeft': 'ShiftLeft',
    'ShiftRight': 'ShiftRight',
    'ControlLeft': 'ControlLeft',
    'ControlRight': 'ControlRight',
    'AltLeft': 'AltLeft',
    'AltRight': 'AltRight',
    'Pause': 'Pause',
    'Break': 'Break',
    'CapsLock': 'CapsLock',
    'Escape': 'Escape',
    'Space': 'Space',
    'PageUp': 'PageUp',
    'PageDown': 'PageDown',
    'End': 'End',
    'Home': 'Home',
    'ArrowLeft': 'ArrowLeft',
    'ArrowUp': 'ArrowUp',
    'ArrowRight': 'ArrowRight',
    'ArrowDown': 'ArrowDown',
    'PrintScreen': 'PrintScreen',
    'Insert': 'Insert',
    'Delete': 'Delete',
    'Digit0': 'Digit0',
    'Digit1': 'Digit1',
    'Digit2': 'Digit2',
    'Digit3': 'Digit3',
    'Digit4': 'Digit4',
    'Digit5': 'Digit5',
    'Digit6': 'Digit6',
    'Digit7': 'Digit7',
    'Digit8': 'Digit8',
    'Digit9': 'Digit9',
    'KeyA': 'KeyA',
    'KeyB': 'KeyB',
    'KeyC': 'KeyC',
    'KeyD': 'KeyD',
    'KeyE': 'KeyE',
    'KeyF': 'KeyF',
    'KeyG': 'KeyG',
    'KeyH': 'KeyH',
    'KeyI': 'KeyI',
    'KeyJ': 'KeyJ',
    'KeyK': 'KeyK',
    'KeyL': 'KeyL',
    'KeyM': 'KeyM',
    'KeyN': 'KeyN',
    'KeyO': 'KeyO',
    'KeyP': 'KeyP',
    'KeyQ': 'KeyQ',
    'KeyR': 'KeyR',
    'KeyS': 'KeyS',
    'KeyT': 'KeyT',
    'KeyU': 'KeyU',
    'KeyV': 'KeyV',
    'KeyW': 'KeyW',
    'KeyX': 'KeyX',
    'KeyY': 'KeyY',
    'KeyZ': 'KeyZ',
    'MetaLeft': 'MetaLeft',
    'MetaRight': 'MetaRight',
    'ContextMenu': 'ContextMenu',
    'Numpad0': 'Numpad0',
    'Numpad1': 'Numpad1',
    'Numpad2': 'Numpad2',
    'Numpad3': 'Numpad3',
    'Numpad4': 'Numpad4',
    'Numpad5': 'Numpad5',
    'Numpad6': 'Numpad6',
    'Numpad7': 'Numpad7',
    'Numpad8': 'Numpad8',
    'Numpad9': 'Numpad9',
    'NumpadMultiply': 'NumpadMultiply',
    'NumpadAdd': 'NumpadAdd',
    'NumpadSubtract': 'NumpadSubtract',
    'NumpadDecimal': 'NumpadDecimal',
    'NumpadDivide': 'NumpadDivide',
    'F1': 'F1',
    'F2': 'F2',
    'F3': 'F3',
    'F4': 'F4',
    'F5': 'F5',
    'F6': 'F6',
    'F7': 'F7',
    'F8': 'F8',
    'F9': 'F9',
    'F10': 'F10',
    'F11': 'F11',
    'F12': 'F12',
    'NumLock': 'NumLock',
    'ScrollLock': 'ScrollLock',
    'Semicolon': 'Semicolon',
    'Equal': 'Equal',
    'Comma': 'Comma',
    'Minus': 'Minus',
    'Period': 'Period',
    'Slash': 'Slash',
    'Backquote': 'Backquote',
    'BracketLeft': 'BracketLeft',
    'Backslash': 'Backslash',
    'BracketRight': 'BracketRight',
    'Quote': 'Quote'
};

var EventKeys = exports.EventKeys = {
    'backspace': 8,
    'tab': 9,
    'enter': 13,
    'shift(left)': 16,
    'shift(right)': 16,
    'ctrl(left)': 17,
    'ctrl(right)': 17,
    'alt(left)': 18,
    'alt(right)': 18,
    'pause/break': 19,
    'caps lock': 20,
    'escape': 27,
    'space': 32,
    'page up': 33,
    'page down': 34,
    'end': 35,
    'home': 36,
    'left arrow': 37,
    'up arrow': 38,
    'right arrow': 39,
    'down arrow': 40,
    'print screen': 44,
    'insert': 45,
    'delete': 46,
    '0': 48,
    '1': 49,
    '2': 50,
    '3': 51,
    '4': 52,
    '5': 53,
    '6': 54,
    '7': 55,
    '8': 56,
    '9': 57,
    'a': 65,
    'b': 66,
    'c': 67,
    'd': 68,
    'e': 69,
    'f': 70,
    'g': 71,
    'h': 72,
    'i': 73,
    'j': 74,
    'k': 75,
    'l': 76,
    'm': 77,
    'n': 78,
    'o': 79,
    'p': 80,
    'q': 81,
    'r': 82,
    's': 83,
    't': 84,
    'u': 85,
    'v': 86,
    'w': 87,
    'x': 88,
    'y': 89,
    'z': 90,
    'numpad 0': 96,
    'numpad 1': 97,
    'numpad 2': 98,
    'numpad 3': 99,
    'numpad 4': 100,
    'numpad 5': 101,
    'numpad 6': 102,
    'numpad 7': 103,
    'numpad 8': 104,
    'numpad 9': 105,
    'multiply': 106,
    'add': 107,
    'subtract': 109,
    'divide': 111,
    'decimal point': 110,
    'f1': 112,
    'f2': 113,
    'f3': 114,
    'f4': 115,
    'f5': 116,
    'f6': 117,
    'f7': 118,
    'f8': 119,
    'f9': 120,
    'f10': 121,
    'f11': 122,
    'f12': 123,
    'num lock': 144,
    'scroll lock': 145
};

var EventKeysNames = exports.EventKeysNames = {

    'backspace': 'backspace',
    'tab': 'tab',
    'enter': 'enter',
    'shift(left)': 'shift(left)',
    'shift(right)': 'shift(right)',
    'ctrl(left)': 'ctrl(left)',
    'ctrl(right)': 'ctrl(right)',
    'alt(left)': 'alt(left)',
    'alt(right)': 'alt(right)',
    'pause/break': 'pause/break',
    'caps lock': 'caps lock',
    'escape': 'escape',
    'space': 'space',
    'page up': 'page up',
    'page down': 'page down',
    'end': 'end',
    'home': 'home',
    'left arrow': 'left arrow',
    'up arrow': 'up arrow',
    'right arrow': 'right arrow',
    'down arrow': 'down arrow',
    'print screen': 'print screen',
    'insert': 'insert',
    'delete': 'delete',
    '0': '0',
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    'a': 'a',
    'b': 'b',
    'c': 'c',
    'd': 'd',
    'e': 'e',
    'f': 'f',
    'g': 'g',
    'h': 'h',
    'i': 'i',
    'j': 'j',
    'k': 'k',
    'l': 'l',
    'm': 'm',
    'n': 'n',
    'o': 'o',
    'p': 'p',
    'q': 'q',
    'r': 'r',
    's': 's',
    't': 't',
    'u': 'u',
    'v': 'v',
    'w': 'w',
    'x': 'x',
    'y': 'y',
    'z': 'z',
    'numpad 0': 'numpad 0',
    'numpad 1': 'numpad 1',
    'numpad 2': 'numpad 2',
    'numpad 3': 'numpad 3',
    'numpad 4': 'numpad 4',
    'numpad 5': 'numpad 5',
    'numpad 6': 'numpad 6',
    'numpad 7': 'numpad 7',
    'numpad 8': 'numpad 8',
    'numpad 9': 'numpad 9',
    'multiply': 'multiply',
    'add': 'add',
    'subtract': 'subtract',
    'divide': 'divide',
    'decimal point': 'decimal point',
    'f1': 'f1',
    'f2': 'f2',
    'f3': 'f3',
    'f4': 'f4',
    'f5': 'f5',
    'f6': 'f6',
    'f7': 'f7',
    'f8': 'f8',
    'f9': 'f9',
    'f10': 'f10',
    'f11': 'f11',
    'f12': 'f12',
    'num lock': 'num lock',
    'scroll lock': 'scroll lock'

    /*
    const keyboard = KeyboardEventManager();
    keyboard.each(EVENT_NAME, function (event) {})
    keyboard.withConditionKey
    keyboard.press()
    keyboard.up()
    keyboard.down()
    */
    /**
     *
     * @returns {{withConditionKey(*=, *=, *=): void, up(*=, *=): void, press(*=, *=): void, down(*=, *=): void, each(*=, *=): void}}
     * @constructor
     */
};var KeyboardEventManager = function KeyboardEventManager() {
    var storage = {};
    var baseCallbacksList = {};
    var addStorage = function addStorage(event, key, callback) {
        if (!storage[event]) storage[event] = {};
        if (!storage[event][key]) storage[event][key] = [];
        storage[event][key].push(callback);

        if (typeof baseCallbacksList[event] !== 'function') {
            baseCallbacksList[event] = baseCallback;
        }
    };

    var baseCallback = function baseCallback(event) {
        Object.keys(storage).map(function (type) {
            Object.keys(storage[type]).map(function (keyCode) {
                if (Array.isArray(storage[type][keyCode])) {
                    storage[type][keyCode].map(function (callback) {

                        if (event.type === type && parseInt(keyCode) === event.keyCode) {
                            callback.call(event, event);
                        }
                    });
                }
            });
        });
    };

    var eachCallbacksList = {};
    var eachCallback = function eachCallback(event, callback) {
        eachCallbacksList[event] = callback;
    };

    function setupListeners() {
        var removeEventListeners = function removeEventListeners() {
            Object.keys(baseCallbacksList).map(function (event) {
                document.removeEventListener(event, baseCallbacksList[event]);
            });
            Object.keys(eachCallbacksList).map(function (event) {
                document.removeEventListener(event, eachCallbacksList[event]);
            });
        };
        var addEventListeners = function addEventListeners() {
            Object.keys(baseCallbacksList).map(function (event) {
                document.addEventListener(event, baseCallbacksList[event]);
            });
            Object.keys(eachCallbacksList).map(function (event) {
                document.addEventListener(event, eachCallbacksList[event]);
            });
        };
        removeEventListeners();
        addEventListeners();
    }

    var codeToKeyCode = function codeToKeyCode(key) {
        if (typeof key === 'string' && EventCodes[key] && typeof EventCodes[key] == "number") {
            return EventCodes[key];
        }

        if (typeof key === 'string' && EventKeys[key] && typeof EventKeys[key] == "number") {
            return EventKeys[key];
        }

        throw new Error('Key string not fond');
    };

    var root = {
        each: function each(event, callback) {
            eachCallback(event, callback);
            setupListeners();
        },
        withConditionKey: function withConditionKey(event, key, callback) {
            if (typeof key === 'string') {
                key = codeToKeyCode(key);
            }
            addStorage(event, key, callback);
            setupListeners();
        },
        press: function press(key, callback) {
            root.withConditionKey('keypress', key, callback);
        },
        up: function up(key, callback) {
            root.withConditionKey('keyup', key, callback);
        },
        down: function down(key, callback) {
            root.withConditionKey('keydown', key, callback);
        }
    };

    return root;
};

KeyboardEventManager.EventCodes = EventCodes;
KeyboardEventManager.EventKeys = EventKeys;

KeyboardEventManager.getEventKeyByEventCode = function (eventCode) {
    var currentEventKey = false;
    var which = EventCodes[eventCode];
    Object.keys(EventKeys).filter(function (key, index) {
        if (EventKeys[key] === which) {
            return currentEventKey = key;
        }
    });

    return currentEventKey;
};

KeyboardEventManager.getEventCodeByEventKey = function (eventKey) {
    var currentEventCode = false;
    var which = EventKeys[eventKey];
    Object.keys(EventCodes).filter(function (key, index) {
        if (EventCodes[key] === which) {
            return currentEventCode = key;
        }
    });

    return currentEventCode;
};

KeyboardEventManager.getWhichByEventCode = function (eventCode) {
    return EventCodes[eventCode];
};

KeyboardEventManager.getEventCodeByWhich = function (which) {
    var currentEventCode = false;
    Object.keys(EventCodes).filter(function (key, index) {
        if (EventCodes[key] === which) {
            return currentEventCode = key;
        }
    });

    return currentEventCode;
};

exports.default = KeyboardEventManager;

/***/ }),

/***/ "./node_modules/animate.js/src/components/Loader.js":
/*!**********************************************************!*\
  !*** ./node_modules/animate.js/src/components/Loader.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Loader.audios: ƒ (srcs, callback)
 * Loader.images: ƒ (imgs, callback)
 * Loader.javascript: ƒ (src, callback, onerror)
 * Loader.json: ƒ (src, callback, onerror)
 * @property
 * @method json
 * @method jsons
 * @method javascript
 * @method images
 * @method audios
 * @returns {{}}
 * @constructor
 */
var Loader = function Loader() {
    return {
        json: Loader.json,
        jsons: Loader.jsons,
        javascript: Loader.javascript,
        images: Loader.images,
        audios: Loader.audios,
        videos: Loader.video
    };
};

/**
 * .json('/url/datafile.json', (json) => {}, (error) => {})
 *
 * @param src
 * @param callback
 * @param onerror
 */
Loader.json = function (src, callback, onerror) {
    fetch(src).then(function (response) {
        return response.json();
    }).then(function (json) {
        return callback(json);
    }).catch(function (error) {
        return typeof onerror === 'function' ? onerror(error) : null;
    });
};

/**
 *
 * @param srcs
 * @param callback
 * @param onerror
 */
Loader.jsons = function (srcs, callback, onerror) {
    if (srcs && (typeof srcs === 'undefined' ? 'undefined' : _typeof(srcs)) === 'object') {

        if (Array.isArray(srcs)) {
            var obj = {};
            srcs.map(function (item) {
                obj[Math.random().toString(32).slice(2)] = item;
            });
            srcs = obj;
        }

        var scripts = {};
        var length = Object.keys(srcs).length;
        var iterator = 0;

        Object.keys(srcs).forEach(function (key) {
            var src = srcs[key];
            Loader.json(src, function (json) {
                scripts[key] = json;
                iterator++;
                if (iterator === length) {
                    callback.call({}, scripts);
                }
            }, onerror);
        });
    }
};

/**
 * Loads a script element with javascript source
 *
 * .javascript ( {
 *      my_script1: '/path/to/my_script1',
 *      my_script2: '/path/to/my_script2',
 *    },
 *    function (list) {})
 *
 * .javascript ( [
 *      '/path/to/my_script1',
 *      '/path/to/my_script2',
 *    ],
 *    function (list) {})
 *
 * @namespace Loader.javascript
 * @param srcs       Object, Array. items: key is ID, value is src
 * @param callback  Function called when all srcs is loaded
 * @param onerror   Function called when load is failed
 * @returns {*}
 */
Loader.javascript = function (srcs, callback, onerror) {
    if (srcs && (typeof srcs === 'undefined' ? 'undefined' : _typeof(srcs)) === 'object') {

        if (Array.isArray(srcs)) {
            var obj = {};
            srcs.map(function (item) {
                obj[Math.random().toString(32).slice(2)] = item;
            });
            srcs = obj;
        }

        var length = Object.keys(srcs).length;
        var scripts = {};
        var script = void 0;
        var iterator = 0;

        Object.keys(srcs).forEach(function (key) {
            script = document.createElement('script');
            script.src = srcs[key].substr(-3) === '.js' ? srcs[key] : srcs[key] + '.js';
            script.type = 'application/javascript';
            script.id = key;
            script.onerror = onerror;
            script.onload = function (e) {
                scripts[this.id] = this;
                iterator++;
                if (iterator === length) {
                    callback.call({}, scripts);
                }
            };
            document.head.appendChild(script);
        });
    }
};

/**
 * Load an images
 *
 * .images ( {
 *      img1: '/path/to/img1',
 *      img2: '/path/to/img2',
 *    },
 *    function (list) {})
 *
 * @namespace Animate.Loader.images
 * @param imgs
 * @param callback
 */
Loader.images = function (imgs, callback) {
    if (imgs && (typeof imgs === 'undefined' ? 'undefined' : _typeof(imgs)) === 'object') {
        (function () {
            var length = Object.keys(imgs).length;
            var images = {};
            var iterator = 0;
            for (var name in imgs) {
                var img = document.createElement('img');
                img.src = imgs[name];
                img.name = name;
                img.onload = function (e) {
                    images[this.name] = this;
                    iterator++;
                    if (iterator === length) {
                        callback.call({}, images);
                    }
                };
            }
        })();
    }
};

/**
 * Load an audio files
 *
 * .audios ( {
 *      audio1: '/path/to/audio1',
 *      audio2: '/path/to/audio2',
 *    },
 *    function (list) {})
 *
 * @namespace Animate.Loader.audios
 * @param srcs
 * @param callback
 */
Loader.audios = function (srcs, callback) {
    if (srcs && (typeof srcs === 'undefined' ? 'undefined' : _typeof(srcs)) === 'object') {
        var length = Object.keys(srcs).length;
        var audios = {};
        var iterator = 0;
        for (var name in srcs) {
            var audio = document.createElement('audio');
            audio.src = srcs[name];
            audio.name = name;
            audio.preload = 'auto';
            audios[name] = audio;
            iterator++;
            if (iterator === length) {
                callback.call({}, audios);
            }
        }
    }
};

/**
 * Load an video files
 *
 * .videos ( {
 *      video1: '/path/to/video1',
 *      video2: '/path/to/video2',
 *    },
 *    function (list) {})
 *
 * @namespace Animate.Loader.videos
 * @param srcs
 * @param callback
 */
Loader.videos = function (srcs, callback) {
    if (srcs && (typeof srcs === 'undefined' ? 'undefined' : _typeof(srcs)) === 'object') {
        var length = Object.keys(srcs).length;
        var videos = {};
        var iterator = 0;
        for (var name in srcs) {
            var video = document.createElement('video');
            video.src = srcs[name];
            video.name = name;
            video.preload = 'auto';
            videos[name] = video;
            iterator++;
            if (iterator === length) {
                callback.call({}, videos);
            }
        }
    }
};

exports.default = Loader;

/***/ }),

/***/ "./node_modules/animate.js/src/components/Matrix.js":
/*!**********************************************************!*\
  !*** ./node_modules/animate.js/src/components/Matrix.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**

a (m11) Horizontal scaling.
b (m12) Horizontal skewing.
c (m21) Vertical skewing.
d (m22) Vertical scaling.
e (dx) Horizontal moving.
f (dy) Vertical moving.
*/
var Matrix = function Matrix(m11, m12, m21, m22, gx, gy) {
    return { m11: m11, m12: m12, m21: m21, m22: m22, gx: gx, gy: gy };
};

exports.default = Matrix;

/***/ }),

/***/ "./node_modules/animate.js/src/components/MoveClip.js":
/*!************************************************************!*\
  !*** ./node_modules/animate.js/src/components/MoveClip.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Clip = __webpack_require__(/*! ./Clip */ "./node_modules/animate.js/src/components/Clip.js");

var _Clip2 = _interopRequireDefault(_Clip);

var _toObject = __webpack_require__(/*! ../static/toObject */ "./node_modules/animate.js/src/static/toObject.js");

var _toObject2 = _interopRequireDefault(_toObject);

var _str2node = __webpack_require__(/*! ../static/str2node */ "./node_modules/animate.js/src/static/str2node.js");

var _str2node2 = _interopRequireDefault(_str2node);

var _isHTMLString = __webpack_require__(/*! ../static/isHTMLString */ "./node_modules/animate.js/src/static/isHTMLString.js");

var _isHTMLString2 = _interopRequireDefault(_isHTMLString);

var _query = __webpack_require__(/*! ../static/query */ "./node_modules/animate.js/src/static/query.js");

var _query2 = _interopRequireDefault(_query);

var _stylizer = __webpack_require__(/*! ../static/stylizer */ "./node_modules/animate.js/src/static/stylizer.js");

var _stylizer2 = _interopRequireDefault(_stylizer);

var _isNode = __webpack_require__(/*! ../static/isNode */ "./node_modules/animate.js/src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _random = __webpack_require__(/*! ../static/random */ "./node_modules/animate.js/src/static/random.js");

var _extend = __webpack_require__(/*! ../static/extend */ "./node_modules/animate.js/src/static/extend.js");

var _extend2 = _interopRequireDefault(_extend);

var _isString = __webpack_require__(/*! ../static/isString */ "./node_modules/animate.js/src/static/isString.js");

var _isString2 = _interopRequireDefault(_isString);

var _position = __webpack_require__(/*! ../static/position */ "./node_modules/animate.js/src/static/position.js");

var _position2 = _interopRequireDefault(_position);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
mc = MoveClip({
    element: `<div class="sprite rect"></div>`,
    parent: Clip(),
    x: 100,
    y: 100,
    init(){
        this.parent.append(this.element);
    },
})

mc.x
mc.y
mc.width
mc.height
mc.element === mc.template
mc.style( { color: 'white' } )
mc.clone()
mc.inject(Element)
mc.append(Element)
mc.remove(Element) // uses removeChild
mc.on(event, callback)
*/
/**
 * @method style
 * @param config
 * @returns {{readonly x: *, readonly width: *, initialized: boolean, readonly y: *, style(*=): void, completed: boolean, element: *, readonly height: *}|*}
 * @constructor
 */
var MoveClip = function MoveClip(config) {
    var element = config.element;

    var clip = (0, _Clip2.default)(element);

    if (!clip.element) {
        throw new Error('Property [element] not fond!');
    }

    var name = (0, _random.randomHumanizeString)(6);
    name = name.substring(0, 1).toUpperCase() + name.substring(1);
    clip.element.setAttribute('data-miveclip', config.id || 'miveclip' + name);

    var root = {
        element: clip.element,
        initialized: false,
        completed: false,
        set x(value) {
            root.element.style.marginLeft = value + 'px';
            clip.x = value;
        },
        set y(value) {
            root.element.style.marginTop = value + 'px';
            clip.y = value;
        },
        set width(value) {
            root.element.style.width = value + 'px';
            clip.width = value;
        },
        set height(value) {
            root.element.style.height = value + 'px';
            clip.height = value;
        },
        get x() {
            return clip.x;
        },
        get y() {
            return clip.y;
        },
        get width() {
            return clip.width;
        },
        get height() {
            return clip.height;
        },
        // style({ transform: 'rotate(10deg) scale(0.6, 0.6) matrix(1, 0, 0, 1, 0, 0)', });
        style: function style(object) {
            (0, _stylizer2.default)(root.element, object);
        }
    };

    delete config.element;
    delete config.initialized;

    Object.keys(config).map(function (key) {
        root[key] = config[key];
    });

    // if (typeof root.init === 'function' && !root.initialized){
    //     root.initialized = true;
    //     root.init.call(root);
    // }

    root.clone = function () {
        var append = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        var node = (0, _isNode2.default)(root.element) ? root.element.cloneNode(true) : '<div />';

        var conf = {
            element: node,
            parent: root.parent,
            initialized: false,
            completed: false,
            cloned: true
        };

        conf = Object.assign(Object.assign({}, this), conf);

        var mc = MoveClip(conf);

        if (append) {
            if ((0, _isNode2.default)(root.parent)) {
                root.parent.appendChild(mc.element);
            } else if (typeof root.parent.append === 'function') {
                root.parent.append(mc.element);
            }
        }

        return mc;
    };

    root.inject = function (elem) {
        var append = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (Array.isArray(elem)) {
            elem.forEach(function (e) {
                root.inject(e, true);
            });
        }

        if (!append) {
            root.element.textContent = '';
        }

        if ((0, _isNode2.default)(elem)) {
            root.element.appendChild(elem);
        }

        if (typeof elem === 'number') {
            elem = elem.toString();
        }

        if (typeof elem === 'string') {
            if ((0, _isHTMLString2.default)(elem)) {
                elem = (0, _str2node2.default)(elem);
                root.element.appendChild(elem);
            } else {
                root.element.textContent += elem;
            }
        }
    };

    root.append = function (elem) {
        root.inject(elem, true);
    };

    root.remove = function (elem) {
        if ((0, _isNode2.default)(elem)) {
            return root.element.removeChild(elem);
        } else {
            throw new TypeError('Failed argument type. Need NodeElement');
        }
    };

    root.on = function (event, callback) {
        root.element.addEventListener(event, callback);
    };

    root.calculate = function (element) {
        element = (0, _isNode2.default)(element) || (0, _isString2.default)(element) ? element : this.element;
        var re_root = (0, _position2.default)(element);
        var re_parent = (0, _position2.default)(re_root.element.parentNode);

        if ((0, _isNode2.default)(re_parent.element)) {
            re_root.parent = root.calculate(re_parent.element);
        } else {
            re_root.parent = { x: 0, y: 0, width: 0, height: 0 };
        }
        re_root.x = re_root.x - re_parent.x;
        re_root.y = re_root.y - re_parent.y;

        var props = ['x', 'y', 'width', 'height', 'top', 'left', 'right', 'bottom', 'parent'];
        Object.keys(re_root).forEach(function (key) {
            if (props.includes(key)) {
                root[key] = re_root[key];
            }
        });
    };

    if (typeof root.init === 'function' && !root.initialized) {
        root.initialized = true;
        root.init.call(root);
    }

    if (typeof root.complete === 'function' && !root.completed) {
        root.completed = true;
        root.complete.call(root);
    }

    return root;
};

exports.default = MoveClip;

/***/ }),

/***/ "./node_modules/animate.js/src/components/Paint.js":
/*!*********************************************************!*\
  !*** ./node_modules/animate.js/src/components/Paint.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _position = __webpack_require__(/*! ../static/position */ "./node_modules/animate.js/src/static/position.js");

var _position2 = _interopRequireDefault(_position);

var _copy = __webpack_require__(/*! ../static/copy */ "./node_modules/animate.js/src/static/copy.js");

var _copy2 = _interopRequireDefault(_copy);

var _clone = __webpack_require__(/*! ../static/clone */ "./node_modules/animate.js/src/static/clone.js");

var _clone2 = _interopRequireDefault(_clone);

var _isHTMLString = __webpack_require__(/*! ../static/isHTMLString */ "./node_modules/animate.js/src/static/isHTMLString.js");

var _isHTMLString2 = _interopRequireDefault(_isHTMLString);

var _query = __webpack_require__(/*! ../static/query */ "./node_modules/animate.js/src/static/query.js");

var _query2 = _interopRequireDefault(_query);

var _stylizer = __webpack_require__(/*! ../static/stylizer */ "./node_modules/animate.js/src/static/stylizer.js");

var _stylizer2 = _interopRequireDefault(_stylizer);

var _str2node = __webpack_require__(/*! ../static/str2node */ "./node_modules/animate.js/src/static/str2node.js");

var _str2node2 = _interopRequireDefault(_str2node);

var _isNode = __webpack_require__(/*! ../static/isNode */ "./node_modules/animate.js/src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _isString = __webpack_require__(/*! ../static/isString */ "./node_modules/animate.js/src/static/isString.js");

var _isString2 = _interopRequireDefault(_isString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @property canvas
 * @property context
 * @property properties
 * @method prop
 *
 * @param canvas
 * @param properties
 * @return {DOMMatrix|{shape: function, readonly canvas: HTMLCanvasElement, computed: {properties_enabled: boolean, context: ImageBitmapRenderingContext | WebGLRenderingContext | WebGL2RenderingContext | CanvasRenderingContext2D | RenderingContext | OffscreenRenderingContext | OffscreenCanvasRenderingContext2D, matrix: boolean, properties: [], element: *}, prop(*, *=): *, readonly context: CanvasRenderingContext2D, canvasMatrix(Matrix): void, canvasTransform(*=, *=, *=, *=, *=, *=): DOMMatrix, readonly properties: []}|[]|ImageBitmapRenderingContext|WebGLRenderingContext|WebGL2RenderingContext|CanvasRenderingContext2D|RenderingContext|OffscreenRenderingContext|OffscreenCanvasRenderingContext2D|*}
 * @constructor
 */
var Paint = function Paint(canvas, properties) {
    var root = {
        computed: {
            properties_enabled: true,
            properties: [],
            element: canvas || {},
            context: canvas ? canvas.getContext('2d') : {},
            matrix: false
        },
        /** @return HTMLCanvasElement */
        get canvas() {
            return root.computed.element;
        },
        /** @return CanvasRenderingContext2D */
        get context() {
            return root.computed.context = root.computed.element.getContext('2d');
        },
        get properties() {
            return root.computed.properties;
        },

        /**
         *
         * @param {DOMMatrix} matrix
         */
        canvasMatrix: function canvasMatrix(matrix) {
            root.computed.matrix = matrix;
        },


        /**
         *
         * @param m11
         * @param m12
         * @param m21
         * @param m22
         * @param dx
         * @param dy
         * @return {DOMMatrix}
         */
        canvasTransform: function canvasTransform() {
            var m11 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var m12 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var m21 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var m22 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
            var dx = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
            var dy = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

            var transform = new DOMMatrix([m11, m12, m21, m22, dx, dy]);
            if (root.computed.matrix instanceof DOMMatrix) {
                transform.fromMatrix(root.computed.matrix);
            }
            root.computed.context.setTransform(transform);
            return transform;
        },


        /**
         * @param dx
         * @param dy
         */
        canvasTranslate: function canvasTranslate() {
            var dx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var dy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            root.computed.context.setTranslate(dx, dy);
        },


        /**
         * @param callback
         */
        shape: function shape(callback) {
            callback.call(this, this.context);
            this.computed.context.setTransform();
        },
        clear: function clear() {
            this.computed.context.clearRect(0, 0, this.canvas.width || 1000, this.canvas.height || 1000);
        },


        /**
         *
         * @param key
         * @param value
         * @return {*}
         */
        prop: function prop(key, value) {
            if (value === undefined) {
                return root.computed.context[key];
            } else if (root.computed.context[key] !== undefined) {
                return root.computed.context[key] = root.computed.properties[key] = value;
            }
        }
    };

    // accept properties
    if (properties) {
        Object.keys(properties).forEach(function (key) {
            if (typeof root.computed.context[key] !== 'function') {
                root.computed.properties[key] = properties[key];
            }
        });
    }

    // apply properties
    if (root.computed.properties_enabled) {
        Object.keys(Paint.default.properties).forEach(function (key) {
            root.computed.context[key] = root.computed.properties[key] !== undefined ? root.computed.properties[key] : root.computed.properties[key] = Paint.default.properties[key];
        });
    }

    // apply methods
    if (properties) {
        Object.keys(properties).forEach(function (key) {
            if (typeof root.computed.context[key] === 'function') {
                var props = typeof properties[key] === 'function' ? properties[key]() : Array.isArray(properties[key]) ? properties[key] : [];
                root.computed.context[key].apply(root.computed.context, props);
            }
        });
    }

    return root;
};
Paint.default = {};
Paint.default.properties = {
    direction: "ltr",
    fillStyle: "#000000",
    filter: "none",
    font: "10px sans-serif",
    globalAlpha: 1,
    globalCompositeOperation: "source-over",
    imageSmoothingEnabled: true,
    imageSmoothingQuality: "low",
    lineCap: "butt",
    lineDashOffset: 0,
    lineJoin: "miter",
    lineWidth: 1,
    miterLimit: 10,
    shadowBlur: 0,
    shadowColor: "rgba(0, 0, 0, 0)",
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    strokeStyle: "#000000",
    textAlign: "start",
    textBaseline: "alphabetic"
};

// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
Paint.methods = {};
Paint.prop = {
    // Directionality. Possible values: ltr, rtl, inherit (default).
    direction: 'direction',

    // Color or style to use inside shapes. Default #000 (black).
    fillStyle: 'fillStyle',

    // Experimental. Applies a CSS or SVG filter to the canvas, e.g., to change its brightness or bluriness.
    filter: 'filter',

    // Font setting. Default value 10px sans-serif.
    font: 'font',

    // Alpha value that is applied to shapes and images before they are composited onto the canvas. Default 1.0 (opaque).
    globalAlpha: 'globalAlpha',
    // With globalAlpha applied this sets how shapes and images are drawn onto the existing bitmap.
    globalCompositeOperation: 'globalCompositeOperation',
    // Experimental. Image smoothing mode; if disabled, images will not be smoothed if scaled.
    imageSmoothingEnabled: 'imageSmoothingEnabled',
    // Experimental. Allows you to set the quality of image smoothing.
    imageSmoothingQuality: 'imageSmoothingQuality',

    // Type of endings on the end of lines. Possible values: butt (default), round, square.
    lineCap: 'lineCap',
    // Specifies where to start a dash array on a line.
    lineDashOffset: 'lineDashOffset',
    // Defines the type of corners where two lines meet. Possible values: round, bevel, miter (default).
    lineJoin: 'lineJoin',
    // Width of lines. Default 1.0.
    lineWidth: 'lineWidth',
    // Miter limit ratio. Default 10.
    miterLimit: 'miterLimit',

    // Specifies the blurring effect. Default: 0
    shadowBlur: 'shadowBlur',
    // Color of the shadow. Default: fully-transparent black.
    shadowColor: 'shadowColor',
    // Horizontal distance the shadow will be offset. Default: 0.
    shadowOffsetX: 'shadowOffsetX',
    // Vertical distance the shadow will be offset. Default: 0.
    shadowOffsetY: 'shadowOffsetY',

    // Color or style to use for the lines around shapes. Default #000 (black).
    strokeStyle: 'strokeStyle',

    // Text alignment setting. Possible values: start (default), end, left, right, center.
    textAlign: 'textAlign',

    // Baseline alignment setting.
    // top, hanging, middle, alphabetic (default), ideographic, bottom.
    textBaseline: 'textBaseline',

    // Experimental. Current transformation matrix (SVGMatrix object).
    currentTransform: 'currentTransform'
};

exports.default = Paint;

/***/ }),

/***/ "./node_modules/animate.js/src/components/PaintTransform.js":
/*!******************************************************************!*\
  !*** ./node_modules/animate.js/src/components/PaintTransform.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _stylizer = __webpack_require__(/*! ../static/stylizer */ "./node_modules/animate.js/src/static/stylizer.js");

var _stylizer2 = _interopRequireDefault(_stylizer);

var _isNumber = __webpack_require__(/*! ../static/isNumber */ "./node_modules/animate.js/src/static/isNumber.js");

var _isNumber2 = _interopRequireDefault(_isNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*

transform = PaintTransform(this.element);
transform.method('rotate', ['45deg']);
transform.update();
transform.research();
transform.functionParameters('matrix')         // [1, 0, 0, 1, 0, 0]: array
transform.functionParameters('rotate')         // ["45deg"]: string
transform.functionParameters('rotate', true)   // 45: int

// ...
PaintTransform.element(this.element, [
    'rotate(' + 10 +'deg)',
    'scale(0.6, 0.6)',
    'matrix(1, 0, 0, 1, 0, 0)',
]);
PaintTransform.element(this.element, ['rotate(' + 10 +'deg)'])
const trs = PaintTransform(this.element);

// without of the PaintTransform
this.style({
    transform: 'rotate(' + 10 +'deg) scale(0.6, 0.6) matrix(1, 0, 0, 1, 0, 0)'
});

*/
var PaintTransform = function PaintTransform(element, params) {
    var root = {
        element: element,
        transform_obj: {},
        transform_arr: element.style.transform.split(')').filter(function (value) {
            return value.length;
        }),
        transform_string: '',

        update: function update() {
            root.transform_string = '';

            Object.keys(root.transform_obj).forEach(function (key) {
                root.transform_string += key + '(' + root.transform_obj[key].join(', ') + ') ';
            });

            console.log('transform_obj');
            console.log(root.transform_obj);

            console.log('transform_string');
            console.log(root.transform_string);
            // root.element.style.transform =  root.transform_string;
            root.research();
        },
        method: function method(_method, properties) {
            var multiply = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            if (typeof _method === 'string') {
                properties = Array.isArray(properties) ? properties : [properties];

                if (multiply || root.transform_obj[_method]) {
                    properties.forEach(function (value, i) {
                        if (typeof value === 'string') {
                            var ext = value.match(/[a-z]+/g);
                            var num = parseInt(value) + parseInt(root.transform_obj[_method][i]);
                            properties[i] = num + ext;
                        } else {
                            properties[i] = value + root.transform_obj[_method][i];
                        }
                        root.transform_obj[_method] = properties;
                    });
                } else {
                    root.transform_obj[_method] = properties;
                }

                /*
                                if (multiply) {
                                    if (root.transform_obj[method]) {
                                        properties.forEach((value, i) => {
                                            if(typeof value === 'string') {
                                                const ext = value.match(/[a-z]+/g);
                                                const num = parseInt(value) + parseInt(root.transform_obj[method][i]);
                                                properties[i] = num + ext;
                                            } else {
                                                properties[i] = value + root.transform_obj[method][i];
                                            }
                                            root.transform_obj[method] = properties;
                                        });
                                    } else {
                                        root.transform_obj[method] = properties;
                                    }
                                } else {
                                    root.transform_obj[method] = properties;
                                }
                */
            } else {
                throw new Error('Sets parameters is not available');
            }
        },
        research: function research() {
            root.transform_arr = element.style.transform.split(')').filter(function (value) {
                return value.length;
            });

            root.transform_arr.forEach(function (value, i) {
                var param = root.transform_arr[i] = root.transform_arr[i].trim() + ')';
                var matched = param.match(/[\w\.\-]+/ig);
                root.transform_obj[matched[0]] = matched.slice(1);
            });
        },
        functionParameters: function functionParameters(name) {
            var FIRST_ITEM_TO_INTEGER = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (FIRST_ITEM_TO_INTEGER && Array.isArray(root.transform_obj[name]) && root.transform_obj[name].length === 1) {
                var item = root.transform_obj[name][0];
                return (0, _isNumber2.default)(item) ? parseInt(item) : root.transform_obj[name];
            }
            return root.transform_obj[name];
        }
    };

    root.research();

    if (params && (typeof params === "undefined" ? "undefined" : _typeof(params)) === 'object') {
        Object.keys(params).forEach(function (key) {
            root.method(key, params[key]);
        });
        root.update();
    }

    return root;
};

PaintTransform.element = function (element, values) {
    if (Array.isArray(values)) {
        var props = [];
        values.forEach(function (prop) {
            props.push(prop);
        });

        console.log('PaintTransform.element');
        console.log(element, props);
        // stylizer(element, {transform: props.join(' ')});
    }
};

exports.default = PaintTransform;

/***/ }),

/***/ "./node_modules/animate.js/src/components/Plant.js":
/*!*********************************************************!*\
  !*** ./node_modules/animate.js/src/components/Plant.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _merge = __webpack_require__(/*! ../static/merge */ "./node_modules/animate.js/src/static/merge.js");

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param configuration
 * @return {*|{init(), render(), configured: function(configuration: *), properties: function(properties: *), prop: function(name: string)}}
 * @constructor
 */
var Plant = function Plant(configuration) {
    var METHODS = {
        CONFIGURED: 'configured',
        COMPLETE: 'complete',
        RENDER: 'render',
        PROPS: 'props',
        PROP: 'prop',
        INIT: 'init'
    };

    var root = {
        render: function render() {},

        props: {},
        prop: function prop(name) {
            return this.props[name];
        },
        init: function init() {},
        update: function update() {},
        complete: function complete() {},
        properties: function properties(_properties) {
            var _this = this;

            Object.keys(_properties).forEach(function (key) {
                _this.props[key] = _properties[key];
            });
            if (this.update) {
                this.update();
            }
        },
        configured: function configured(configuration) {
            Object.keys(configuration).forEach(function (key) {
                if (!Object.values(METHODS).includes(key)) {
                    root[key] = configuration[key];
                }
            });
            if (this.update) {
                this.update();
            }
        }
    };

    root.init();
    root = (0, _merge2.default)(root, configuration);
    root.complete();

    return root;
};

exports.default = Plant;

/***/ }),

/***/ "./node_modules/animate.js/src/components/Point.js":
/*!*********************************************************!*\
  !*** ./node_modules/animate.js/src/components/Point.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var Point = function Point(x, y) {
    return { x: x, y: y };
};

exports.default = Point;

/***/ }),

/***/ "./node_modules/animate.js/src/components/Rectangle.js":
/*!*************************************************************!*\
  !*** ./node_modules/animate.js/src/components/Rectangle.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isObject = __webpack_require__(/*! animate.js/src/function/isObject */ "./node_modules/animate.js/src/function/isObject.js");

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*






*/

/**
 * rec = Rectangle(0, 0, 100, 100); // {x: 0, y: 0, width: 100, height: 100}
 * rec.toArray(); // [0, 0, 100, 100]
 * rec.toString(); // 0 0 100 100
 *
 * Rectangle.from([0, 0, 100, 100]); // Rectangle
 * Rectangle.from({x: 0, y: 0, width: 100, height: 100}); // Rectangle
 *
 * @param x
 * @param y
 * @param width
 * @param height
 * @return {{x: *, width: *, toArray: (function(): [*, *, *, *]), y: *, toString: (function(): string), height: *}|undefined}
 * @constructor
 */
var Rectangle = function Rectangle(x, y, width, height) {
    return {
        x: x,
        y: y,
        width: width,
        height: height,
        toArray: function toArray() {
            return [x, y, width, height];
        },
        toString: function toString() {
            return x + ", " + y + ", " + width + ", " + height;
        }
    };
};

Rectangle.from = function (params) {
    if (Array.isArray(params)) {
        return Rectangle.apply(Rectangle, params);
    }
    if ((0, _isObject2.default)(params)) {
        return Rectangle.apply(Rectangle, Object.values(params));
    }
};

exports.default = Rectangle;

/***/ }),

/***/ "./node_modules/animate.js/src/components/Router.js":
/*!**********************************************************!*\
  !*** ./node_modules/animate.js/src/components/Router.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _trimSymbols = __webpack_require__(/*! ../static/trimSymbols */ "./node_modules/animate.js/src/static/trimSymbols.js");

var _trimSymbols2 = _interopRequireDefault(_trimSymbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = function Router(config) {
    var root = {};
    root.hash = location.hash;
    root.root = '/' + (0, _trimSymbols2.default)(config.root, '/');
    root.pathname = '/' + (0, _trimSymbols2.default)(location.pathname, '/') + '/';
    root.routes = config.routes ? config.routes : {};
    root.context = config.context ? config.context : {};

    root.to = function (key) {
        console.log(key);
        if (typeof root.routes[key] === "function") {
            root.routes[key].call({}, root.context);
        }
    };

    Object.keys(root.routes).forEach(function (key) {
        var is = key.includes('#') ? key === root.hash : root.root + key === root.pathname;

        if (is && typeof root.routes[key] === "function") {
            root.routes[key].call(root.context, root.context);
        }
    });

    return root;
};

exports.default = Router;

/***/ }),

/***/ "./node_modules/animate.js/src/components/Roxy.js":
/*!********************************************************!*\
  !*** ./node_modules/animate.js/src/components/Roxy.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _copy = __webpack_require__(/*! ../static/copy */ "./node_modules/animate.js/src/static/copy.js");

var _copy2 = _interopRequireDefault(_copy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Roxy = function Roxy(payload) {
    var propertiesChangeEventCallbacks = {
        default: null
    };

    var proxy = new Proxy(payload, {
        get: function get(obj, prop) {
            return prop in obj ? obj[prop] : null;
        },
        set: function set(obj, prop, value) {

            obj[prop] = value;

            if (propertiesChangeEventCallbacks[prop] && typeof propertiesChangeEventCallbacks[prop] === "function") propertiesChangeEventCallbacks[prop].call({}, prop, value, (0, _copy2.default)(proxy));

            if (typeof propertiesChangeEventCallbacks.default === "function") propertiesChangeEventCallbacks.default.call({}, prop, value, (0, _copy2.default)(proxy));

            return true;
        }
    });

    return {

        /**
         * older name: see|set?
         * @param key
         * @param payload
         * @returns {*}
         */
        dispatch: function dispatch(key, payload) {
            var result = void 0;

            if (typeof key === "function" && !payload) {
                result = key.call({}, proxy);
                if (result) this.fill(result);
            } else if (typeof payload === "function") {
                result = payload.call({}, proxy[key]);
                if (result) proxy[key] = result;
            } else proxy[key] = payload;

            return this;
        },


        /**
         * action()
         * @deprecated
         * @param key
         * @param callback
         * @returns {*}
         */
        event: function event(key, callback) {
            return this.observe(key, callback);
        },


        /**
         * Event change properties of source object
         * @param key
         * @param callback
         * @returns {*}
         */
        observe: function observe(key, callback) {
            if (typeof key === "function" && !callback) {
                propertiesChangeEventCallbacks.default = key;
            } else propertiesChangeEventCallbacks[key] = typeof callback === "function" ? callback : null;

            return this;
        },
        get: function get(key) {
            return key ? proxy[key] : (0, _copy2.default)(proxy);
        },
        fill: function fill(payload, to) {
            Object.keys(payload).forEach(function (key) {
                if (to) {
                    if (!proxy[to]) proxy[to] = {};
                    proxy[to][key] = payload[key];
                } else {
                    proxy[key] = payload[key];
                }
            });

            return this;
        },


        get proxy() {
            return proxy;
        },

        getProxy: function getProxy() {
            return proxy;
        }
    };
}; /*
   const RxState = Roxy({
       title: '',
       body: '',
   });
   
   RxState.event((key, values)=>{
       if (key === '') {}
       inject('#' + key, values);
   });
   
   RxState.proxy.title = 'First value';
   RxState.proxy.body = 'Test body text';
   
   Timer.timeout(() => {
       RxState.dispatch('title', 'Hello friend');
       RxState.dispatch('body', 'Do you happy now?');
   }, 2000);
   
   */

/**
 * @param payload
 * @returns {{proxy: *, set(*=, *=): *, get(*): *, action(*=, *=): *, fill(*=, *=): *}|Roxy|{}|null|boolean}
 * @constructor
 */
exports.default = Roxy;

/***/ }),

/***/ "./node_modules/animate.js/src/components/RoxyListener.js":
/*!****************************************************************!*\
  !*** ./node_modules/animate.js/src/components/RoxyListener.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Roxy = __webpack_require__(/*! ./Roxy */ "./node_modules/animate.js/src/components/Roxy.js");

var _Roxy2 = _interopRequireDefault(_Roxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * const rx = RoxyListener ({
 *     eventName () { // handler ... },
 *     eventName () { // handler ... },
 * })
 * rx.set();
 * rx.dispatch();
 *
 * rx.action();
 *
 * @param payload
 * @returns {{proxy: *, dispatch(*=, *=): Roxy, get(*): *, event(*=, *=): this, fill(*=, *=): this}}
 * @constructor
 */
var RoxyListener = function RoxyListener(payload) {

    var actions = {
        __action__: function __action__() {}
    };

    var actionsNames = {};

    Object.keys(payload).map(function (eventName, index) {
        actions[eventName] = payload[eventName];

        if (typeof payload[eventName] === 'function' && eventName !== actions.__action__.name) {
            actionsNames[eventName] = '';
        }
    });

    var rx = (0, _Roxy2.default)(actionsNames);
    //
    rx.actions = function () {
        return actionsNames;
    };

    rx.event(function (eventCursor, values) {
        actions.__action__.call(actions, eventCursor, values);

        Object.keys(actions).map(function (eventName, index) {

            if (eventCursor === eventName && typeof actions[eventName] === 'function') {
                actions[eventName].call(actions, eventCursor, values);
            }
        });
    });

    return rx;
};

exports.default = RoxyListener;

/***/ }),

/***/ "./node_modules/animate.js/src/components/Scene.js":
/*!*********************************************************!*\
  !*** ./node_modules/animate.js/src/components/Scene.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _clone2 = __webpack_require__(/*! ../static/clone */ "./node_modules/animate.js/src/static/clone.js");

var _clone3 = _interopRequireDefault(_clone2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Examples:
const scene = Scene();
scene.add('editor', function (a, b, c, d) {
    console.log(a, b, c, d);
})
scene.add('output', function (a, b, c, d) {
    console.log(a, b, c, d);
})
scene.run('output', ['hello', 200, [1,2,3], {id: 123}]);

// init v 2
const sceneContext = {};
const scene = Scene({
    editor () {},
    output () {},
});
*/

/**
 * add(name, callback, attrs)  // add new scene
 * get(name)                   // returned scene by name
 * getCurrentScene()           // returned current scene
 * next()                      // to next scene
 * run(name, attrs)            // run scenes by name, set this key name to default
 * clone()                     // cloned current scenes
 *
 * @param properties
 * @param community_arguments
 * @return {{add: (function(name:string, scene:function ): *), next: (function(): *), current: string, getCurrentScene: (function(): *), get: (function(name:string): *), scenes: {default: {callback(): void, attrs: []}}, clone: (function(): *), open: (function(key: string, attrs: []): *), element: HTMLElement}}
 * @constructor
 */
var Scene = function Scene(properties) {
    var community_arguments = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    var root = {
        current: 'default',
        element: null,
        scenes: {
            default: {
                callback: function callback() {
                    console.log('[Default Scene]');
                },

                attrs: []
            }
        },
        add: function add(name, callback) {
            var attrs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

            this.scenes[name] = {
                callback: callback,
                attrs: attrs
            };
        },
        get: function get(name) {
            return this.scenes[name];
        },
        getCurrentScene: function getCurrentScene() {
            return this.scenes[this.current];
        },
        next: function next() {
            var lest = false;
            var keys = Object.keys(this.scenes);
            for (var i = 0; i < keys.length; i++) {
                if (keys[i] === this.current) {
                    if (typeof keys[i + 1] !== "undefined") lest = keys[i + 1];
                    if (i === keys.length - 1) {
                        lest = keys[0];
                    }
                    break;
                }
            }
            this.open(lest);
        },
        open: function open(key, attrs) {
            this.current = key || 'default';
            var scene = this.getCurrentScene();
            var callback = scene.callback;

            if (typeof callback === "function") {
                if (attrs) {
                    attrs = Array.isArray(attrs) ? attrs : [attrs];
                }
                // todo: changed apply to call
                callback.apply(root, attrs ? attrs : scene.attrs);
            }
        },

        clone: function clone() {
            return (0, _clone3.default)(this);
        }
    };

    // root.add = function (name, callback, attrs = []) {
    //     root.scenes[name] = {
    //         callback,
    //         attrs
    //     };
    // }
    //
    // // ,  ___: function,  ___: function,
    // root.get = function (name) {
    //     return root.scenes[name];
    // }
    //
    // root.getCurrentScene = function () {
    //     return root.scenes[root.current];
    // }
    //
    // root.next = function () {
    //     let lest = false;
    //     const keys = Object.keys(root.scenes);
    //     for (let i = 0; i < keys.length; i++) {
    //         if (keys[i] === root.current) {
    //             if (typeof keys[i + 1] !== "undefined")
    //                 lest = keys[i + 1];
    //             if (i === keys.length - 1) {
    //                 lest = keys[0];
    //             }
    //             break;
    //         }
    //     }
    //     root.open(lest);
    // };
    //
    // root.open = function (key, attrs) {
    //     root.current = key || 'default';
    //     const scene = root.getCurrentScene();
    //     const callback = scene.callback;
    //
    //     if (typeof callback === "function") {
    //         if (attrs) {
    //             attrs = Array.isArray(attrs) ? attrs : [attrs];
    //         }
    //         // todo: changed apply to call
    //         callback.apply(root, attrs ? attrs : scene.attrs);
    //     }
    // };
    /** @deprecated */
    root.show = function (key, attrs) {
        root.open(key, attrs);
    };
    /** @deprecated */
    root.start = function (key, attrs) {
        root.open(key, attrs);
    };
    /** @deprecated */
    root.run = function (key, attrs) {
        root.open(key, attrs);
    };
    //
    // root.clone = function () {
    //     return clone(this);
    // };

    if (properties && properties.constructor === Object) {
        Object.keys(properties).forEach(function (key) {
            root.add(key, properties[key], Array.isArray(community_arguments) ? community_arguments : [community_arguments]);
        });
    }

    return root;
};

exports.default = Scene;

/***/ }),

/***/ "./node_modules/animate.js/src/components/Stage.js":
/*!*********************************************************!*\
  !*** ./node_modules/animate.js/src/components/Stage.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StageFactory = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _clone2 = __webpack_require__(/*! ../static/clone */ "./node_modules/animate.js/src/static/clone.js");

var _clone3 = _interopRequireDefault(_clone2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
## Examples:
import StageFactory from "StageFactory";

const stage = StageFactory({
    editor () {},
    output () {},
});

stage.scene(name, callback, attrs){}
stage.getScene(name) {}
stage.getCurrentScene() {}
stage.getCurrentSceneName() {}
stage.next() {}
stage.execute(name, attrs) {}
stage.clone() {}

## Examples:
import Scene from "Scene";

Scene.scene('editor', function (a, b, c, d) {
    console.log(a, b, c, d);
})
Scene.scene('output', function (a, b, c, d) {
    console.log(a, b, c, d);
})
Scene.execute('output', ['hello', 200, [1,2,3], {id: 123}]);

## Examples:
const sceneContext = {};
const stageFactory = StageFactory({
    editor () {},
    output () {},
}, sceneContext);
*/

var StageFactory = exports.StageFactory = function () {
    function StageFactory(properties, attrs) {
        var _this = this;

        _classCallCheck(this, StageFactory);

        this.current = 'default';
        this.element = null;
        this.scenes = {
            // default: {callback() {console.log('[Default Scene]')}, attrs: []}
        };
        if (properties && properties.constructor === Object) {
            Object.keys(properties).forEach(function (key) {
                _this.scene(key, properties[key], Array.isArray(attrs) ? attrs : [attrs]);
            });
        }
    }

    _createClass(StageFactory, [{
        key: "scene",
        value: function scene(name, callback, attrs) {
            this.scenes[name] = {
                callback: callback,
                attrs: attrs
            };
        }
    }, {
        key: "getScene",
        value: function getScene(name) {
            return this.scenes[name];
        }
    }, {
        key: "getCurrentScene",
        value: function getCurrentScene() {
            return this.scenes[this.current];
        }
    }, {
        key: "getCurrentSceneName",
        value: function getCurrentSceneName() {
            return this.current;
        }
    }, {
        key: "next",
        value: function next() {
            // if (name) {this.current = name;}
            var lest = false;
            var keys = Object.keys(this.scenes);
            for (var i = 0; i < keys.length; i++) {
                if (keys[i] === this.current) {
                    if (typeof keys[i + 1] !== "undefined") lest = keys[i + 1];
                    if (i === keys.length - 1) {
                        lest = keys[0];
                    }
                    break;
                }
            }
            this.execute(lest);
        }
    }, {
        key: "execute",
        value: function execute(name, attrs) {
            this.current = !name && this.current === 'default' ? Object.keys(this.scenes)[0] : name;
            var scene = this.getCurrentScene();
            var callback = scene.callback;

            if (typeof callback === "function") {
                if (attrs) {
                    attrs = Array.isArray(attrs) ? attrs : [attrs];
                }
                // todo: changed apply to call
                callback.apply(this, attrs ? attrs : scene.attrs);
                // callback.apply(callback, attrs ? attrs : scene.attrs);
            }
        }
    }, {
        key: "clone",
        value: function clone() {
            return (0, _clone3.default)(this);
        }
    }]);

    return StageFactory;
}();

/**
 * Stage.scene(name, callback, attrs)   // add new scene
 *
 * Stage.getScene(name)                 // returned scene by name
 *
 * Stage.getCurrentScene()              // returned current scene
 *
 * Stage.next()                         // to next scene
 *
 * Stage.execute(name, attrs)           // run scenes by name, set this key name to default
 *
 * Stage.clone()                        // cloned current scenes
 *
 */


var Stage = new StageFactory({}, {});

exports.default = Stage;

/***/ }),

/***/ "./node_modules/animate.js/src/components/StepsScene.js":
/*!**************************************************************!*\
  !*** ./node_modules/animate.js/src/components/StepsScene.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _clone = __webpack_require__(/*! ../static/clone */ "./node_modules/animate.js/src/static/clone.js");

var _clone2 = _interopRequireDefault(_clone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
    const stepsAttackHero = StepsScene({
        loop: false,
        steps: [
            {name: 'start_attack', callback: func},
            {name: 'hero_attack', callback: func},
            {name: 'hero_attack_animation', callback: func},
            {name: 'end_attack', callback: func},
        ]
    });

    stepsAttackHero.eachSteps(function (cbObject, index) {});
    stepsAttackHero.next();

    stepsAttackHero.goto('hero_attack_animation').next();
    stepsAttackHero.stop();
 *
 * @deprecated
 * @param config
 * @returns {any}
 * @constructor
 */
var StepsScene = function StepsScene() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { steps: [] };

    var root = {
        iteration: 0,
        loop: config.loop || false,
        step_iteration: 0,
        step_stop: false,
        step_callback_each: null,
        step_callbacks: config.steps || {},
        start: function start() {
            root.play();
            root.step_iteration = 0;
            return root;
        },
        stop: function stop() {
            root.step_stop = true;
            return root;
        },
        play: function play() {
            root.step_stop = false;
            return root;
        },
        end: function end() {
            root.step_iteration = root.step_callbacks.length - 1;
            return root;
        },
        delay: function delay(ms, callback) {
            setTimeout(function () {
                callback.call(root);
            }, ms);
        },
        goto: function goto(name) {
            root.step_callbacks.forEach(function (object, index) {
                if (object.name === name) {
                    root.step_iteration = index;
                }
            });
            return root;
        },
        eachSteps: function eachSteps(callback) {
            root.step_callback_each = callback;
            return root;
        },
        next: function next() {
            if (root.step_stop) return root;

            if (root.step_iteration > root.step_callbacks.length - 1) {
                root.step_iteration = 0;
                if (!root.loop) return root;
            }

            var currentCallbackObject = root.step_callbacks[root.step_iteration];

            if (typeof root.step_callback_each === 'function') root.step_callback_each.call(root, currentCallbackObject, root.step_iteration, root.iteration);

            currentCallbackObject.callback.call(root, currentCallbackObject, root.step_iteration, root.iteration);

            root.iteration++;
            root.step_iteration++;

            return root;
        }
    };

    root.clone = function () {
        return (0, _clone2.default)(this);
    };

    return root;
};

exports.default = StepsScene;

/***/ }),

/***/ "./node_modules/animate.js/src/components/Timer.js":
/*!*********************************************************!*\
  !*** ./node_modules/animate.js/src/components/Timer.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var Timer = function Timer(callback, delay, repeat, thisInstance) {
    this.repeat = repeat;
    this.iterator = 0;
};

Timer.setTimeout = function (callback, ms, thisInst) {
    if (typeof callback === 'function' && !isNaN(ms) && ms > 0) {
        thisInst = (typeof thisInst === 'undefined' ? 'undefined' : _typeof(thisInst)) === 'object' ? thisInst : {};
        return setTimeout(function () {
            callback.call(thisInst);
        }, ms);
    }
};
Timer.setInterval = function (callback, ms, thisInst) {
    if (typeof callback === 'function' && !isNaN(ms) && ms > 0) {
        thisInst = (typeof thisInst === 'undefined' ? 'undefined' : _typeof(thisInst)) === 'object' ? thisInst : {};
        return setInterval(function () {
            callback.call(thisInst);
        }, ms);
    }
};
Timer.clearTimeout = function (id) {
    clearTimeout(id);
};
Timer.clearInterval = function (id) {
    clearInterval(id);
};

exports.default = Timer;

/***/ }),

/***/ "./node_modules/animate.js/src/components/Transform.js":
/*!*************************************************************!*\
  !*** ./node_modules/animate.js/src/components/Transform.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _stylizer = __webpack_require__(/*! ../static/stylizer */ "./node_modules/animate.js/src/static/stylizer.js");

var _stylizer2 = _interopRequireDefault(_stylizer);

var _isNumber = __webpack_require__(/*! ../static/isNumber */ "./node_modules/animate.js/src/static/isNumber.js");

var _isNumber2 = _interopRequireDefault(_isNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*

transform = Transform(this.element);
transform.method('rotate', ['45deg']);
transform.update();
transform.research();
transform.functionParameters('matrix')         // [1, 0, 0, 1, 0, 0]: array
transform.functionParameters('rotate')         // ["45deg"]: string
transform.functionParameters('rotate', true)   // 45: int

// ...
Transform.element(this.element, [
    'rotate(' + 10 +'deg)',
    'scale(0.6, 0.6)',
    'matrix(1, 0, 0, 1, 0, 0)',
]);
Transform.element(this.element, ['rotate(' + 10 +'deg)'])
const trs = Transform(this.element);

// without of the Transform
this.style({
    transform: 'rotate(' + 10 +'deg) scale(0.6, 0.6) matrix(1, 0, 0, 1, 0, 0)'
});

*/
var Transform = function Transform(element, params) {
    var root = {
        element: element,
        transform_obj: {},
        transform_arr: element.style.transform.split(')').filter(function (value) {
            return value.length;
        }),
        transform_string: '',

        update: function update() {
            root.transform_string = '';

            Object.keys(root.transform_obj).forEach(function (key) {
                root.transform_string += key + '(' + root.transform_obj[key].join(', ') + ') ';
            });

            root.element.style.transform = root.transform_string;
            root.research();
        },
        method: function method(_method, properties) {
            var multiply = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            if (typeof _method === 'string') {
                properties = Array.isArray(properties) ? properties : [properties];

                if (multiply) {
                    if (root.transform_obj[_method]) {
                        properties.forEach(function (value, i) {
                            if (typeof value === 'string') {
                                var ext = value.match(/[a-z]+/g);
                                var num = parseInt(value) + parseInt(root.transform_obj[_method][i]);
                                properties[i] = num + ext;
                            } else {
                                properties[i] = value + root.transform_obj[_method][i];
                            }
                            root.transform_obj[_method] = properties;
                        });
                    } else {
                        root.transform_obj[_method] = properties;
                    }
                } else {
                    root.transform_obj[_method] = properties;
                }
            } else {
                throw new Error('Sets parameters is not available');
            }
        },
        research: function research() {
            root.transform_arr = element.style.transform.split(')').filter(function (value) {
                return value.length;
            });

            root.transform_arr.forEach(function (value, i) {
                var param = root.transform_arr[i] = root.transform_arr[i].trim() + ')';
                var matched = param.match(/[\w\.\-]+/ig);
                root.transform_obj[matched[0]] = matched.slice(1);
            });
        },
        functionParameters: function functionParameters(name) {
            var FIRST_ITEM_TO_INTEGER = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (FIRST_ITEM_TO_INTEGER && Array.isArray(root.transform_obj[name]) && root.transform_obj[name].length === 1) {
                var item = root.transform_obj[name][0];
                return (0, _isNumber2.default)(item) ? parseInt(item) : root.transform_obj[name];
            }
            return root.transform_obj[name];
        }
    };

    root.research();

    if (params && (typeof params === "undefined" ? "undefined" : _typeof(params)) === 'object') {
        Object.keys(params).forEach(function (key) {
            root.method(key, params[key]);
        });
        root.update();
    }

    return root;
};

Transform.element = function (element, values) {
    if (Array.isArray(values)) {
        var props = [];
        values.forEach(function (prop) {
            props.push(prop);
        });
        (0, _stylizer2.default)(element, { transform: props.join(' ') });
    }
};

exports.default = Transform;

/***/ }),

/***/ "./node_modules/animate.js/src/function/isObject.js":
/*!**********************************************************!*\
  !*** ./node_modules/animate.js/src/function/isObject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _isEmpty = __webpack_require__(/*! ../static/isEmpty */ "./node_modules/animate.js/src/static/isEmpty.js");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isObject = function isObject(value) {
    return (typeof value === "undefined" ? "undefined" : _typeof(value)) === 'object' && !(0, _isEmpty2.default)(value) && !Array.isArray(value) && !(value instanceof RegExp) && !(value instanceof String) && !(value instanceof Number);
};

exports.default = isObject;

/***/ }),

/***/ "./node_modules/animate.js/src/index.js":
/*!**********************************************!*\
  !*** ./node_modules/animate.js/src/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getWindow = __webpack_require__(/*! ./static/getWindow */ "./node_modules/animate.js/src/static/getWindow.js");

var _getWindow2 = _interopRequireDefault(_getWindow);

var _Clip = __webpack_require__(/*! ./components/Clip.js */ "./node_modules/animate.js/src/components/Clip.js");

var _Clip2 = _interopRequireDefault(_Clip);

var _Component = __webpack_require__(/*! ./components/Component.js */ "./node_modules/animate.js/src/components/Component.js");

var _Component2 = _interopRequireDefault(_Component);

var _KeyboardEventManager = __webpack_require__(/*! ./components/KeyboardEventManager.js */ "./node_modules/animate.js/src/components/KeyboardEventManager.js");

var _KeyboardEventManager2 = _interopRequireDefault(_KeyboardEventManager);

var _MoveClip = __webpack_require__(/*! ./components/MoveClip.js */ "./node_modules/animate.js/src/components/MoveClip.js");

var _MoveClip2 = _interopRequireDefault(_MoveClip);

var _Scene = __webpack_require__(/*! ./components/Scene.js */ "./node_modules/animate.js/src/components/Scene.js");

var _Scene2 = _interopRequireDefault(_Scene);

var _StepsScene = __webpack_require__(/*! ./components/StepsScene.js */ "./node_modules/animate.js/src/components/StepsScene.js");

var _StepsScene2 = _interopRequireDefault(_StepsScene);

var _Timer = __webpack_require__(/*! ./components/Timer.js */ "./node_modules/animate.js/src/components/Timer.js");

var _Timer2 = _interopRequireDefault(_Timer);

var _RoxyListener = __webpack_require__(/*! ./components/RoxyListener.js */ "./node_modules/animate.js/src/components/RoxyListener.js");

var _RoxyListener2 = _interopRequireDefault(_RoxyListener);

var _Roxy = __webpack_require__(/*! ./components/Roxy.js */ "./node_modules/animate.js/src/components/Roxy.js");

var _Roxy2 = _interopRequireDefault(_Roxy);

var _static = __webpack_require__(/*! ./static */ "./node_modules/animate.js/src/static/index.js");

var _static2 = _interopRequireDefault(_static);

var _AnimationFrame = __webpack_require__(/*! ./components/AnimationFrame */ "./node_modules/animate.js/src/components/AnimationFrame.js");

var _AnimationFrame2 = _interopRequireDefault(_AnimationFrame);

var _Loader = __webpack_require__(/*! ./components/Loader */ "./node_modules/animate.js/src/components/Loader.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _Matrix = __webpack_require__(/*! ./components/Matrix */ "./node_modules/animate.js/src/components/Matrix.js");

var _Matrix2 = _interopRequireDefault(_Matrix);

var _Point = __webpack_require__(/*! ./components/Point */ "./node_modules/animate.js/src/components/Point.js");

var _Point2 = _interopRequireDefault(_Point);

var _Rectangle = __webpack_require__(/*! ./components/Rectangle */ "./node_modules/animate.js/src/components/Rectangle.js");

var _Rectangle2 = _interopRequireDefault(_Rectangle);

var _Transform = __webpack_require__(/*! ./components/Transform */ "./node_modules/animate.js/src/components/Transform.js");

var _Transform2 = _interopRequireDefault(_Transform);

var _EventManager = __webpack_require__(/*! ./components/EventManager */ "./node_modules/animate.js/src/components/EventManager.js");

var _EventManager2 = _interopRequireDefault(_EventManager);

var _Frames = __webpack_require__(/*! ./components/Frames */ "./node_modules/animate.js/src/components/Frames.js");

var _Frames2 = _interopRequireDefault(_Frames);

var _Router = __webpack_require__(/*! ./components/Router */ "./node_modules/animate.js/src/components/Router.js");

var _Router2 = _interopRequireDefault(_Router);

var _Paint = __webpack_require__(/*! ./components/Paint */ "./node_modules/animate.js/src/components/Paint.js");

var _Paint2 = _interopRequireDefault(_Paint);

var _Color = __webpack_require__(/*! ./components/Color */ "./node_modules/animate.js/src/components/Color.js");

var _Color2 = _interopRequireDefault(_Color);

var _PaintTransform = __webpack_require__(/*! ./components/PaintTransform */ "./node_modules/animate.js/src/components/PaintTransform.js");

var _PaintTransform2 = _interopRequireDefault(_PaintTransform);

var _EnterFrame = __webpack_require__(/*! ./components/EnterFrame */ "./node_modules/animate.js/src/components/EnterFrame.js");

var _EnterFrame2 = _interopRequireDefault(_EnterFrame);

var _Plant = __webpack_require__(/*! ./components/Plant */ "./node_modules/animate.js/src/components/Plant.js");

var _Plant2 = _interopRequireDefault(_Plant);

var _Graphic = __webpack_require__(/*! ./components/Graphic */ "./node_modules/animate.js/src/components/Graphic.js");

var _Graphic2 = _interopRequireDefault(_Graphic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Animate = {
    Clip: _Clip2.default,
    Component: _Component2.default,
    KeyboardEventManager: _KeyboardEventManager2.default,
    EventCodes: _KeyboardEventManager.EventCodes,
    EventKeys: _KeyboardEventManager.EventKeys,
    EventCodesNames: _KeyboardEventManager.EventCodesNames,
    EventKeysNames: _KeyboardEventManager.EventKeysNames,
    MoveClip: _MoveClip2.default,
    Scene: _Scene2.default,
    StepsScene: _StepsScene2.default,
    Timer: _Timer2.default,
    RoxyListener: _RoxyListener2.default,
    Roxy: _Roxy2.default,
    AnimationFrame: _AnimationFrame2.default,
    Loader: _Loader2.default,
    Matrix: _Matrix2.default,
    Point: _Point2.default,
    Rectangle: _Rectangle2.default,
    Transform: _Transform2.default,
    EventManager: _EventManager2.default,
    Frames: _Frames2.default,
    Router: _Router2.default,
    Paint: _Paint2.default,
    Color: _Color2.default,
    PaintTransform: _PaintTransform2.default,
    EnterFrame: _EnterFrame2.default,
    Plant: _Plant2.default,
    Graphic: _Graphic2.default
};

var RADIAN = 0.017453292519943295;
var DEGREE_AS_RADIAN = 0.017453292519943295;
var DEGREE_360_AS_RADIAN = DEGREE_AS_RADIAN * 360;
var PI = 3.14159265359;
var RAD_TO_DEGREES = 3.14159265359;

Animate.RADIAN = RADIAN;
Animate.DEGREE_AS_RADIAN = DEGREE_AS_RADIAN;
Animate.DEGREE_360_AS_RADIAN = DEGREE_360_AS_RADIAN;
Animate.PI = PI;
Animate.RAD_TO_DEGREES = RAD_TO_DEGREES;

Animate.Static = Animate.Util = _static2.default;

if ((0, _getWindow2.default)()) (0, _getWindow2.default)()['Animate'] = Animate;

exports.default = Animate;

/***/ }),

/***/ "./node_modules/animate.js/src/static/abc.js":
/*!***************************************************!*\
  !*** ./node_modules/animate.js/src/static/abc.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var LETTER_CONSONANT = exports.LETTER_CONSONANT = 'B,C,D,F,G,H,J,K,L,M,N,P,Q,R,S,T,V,W,X,Y,Z';
var LETTER_VOWEL = exports.LETTER_VOWEL = 'A,E,I,O,U,Y';
var ABC = exports.ABC = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z';
var NUMBERS = exports.NUMBERS = '0,1,2,3,4,5,6,7,8,9';
var AMPERSAND = exports.AMPERSAND = '&';

var abc = {
    LETTER_CONSONANT: LETTER_CONSONANT,
    LETTER_VOWEL: LETTER_VOWEL,
    ABC: ABC,
    NUMBERS: NUMBERS,
    AMPERSAND: AMPERSAND
};

exports.default = abc;

/***/ }),

/***/ "./node_modules/animate.js/src/static/addCss.js":
/*!******************************************************!*\
  !*** ./node_modules/animate.js/src/static/addCss.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createElement = __webpack_require__(/*! ./createElement */ "./node_modules/animate.js/src/static/createElement.js");

var _createElement2 = _interopRequireDefault(_createElement);

var _hasLowerCase = __webpack_require__(/*! ./hasLowerCase */ "./node_modules/animate.js/src/static/hasLowerCase.js");

var _hasLowerCase2 = _interopRequireDefault(_hasLowerCase);

var _toMinusCase = __webpack_require__(/*! ./toMinusCase */ "./node_modules/animate.js/src/static/toMinusCase.js");

var _toMinusCase2 = _interopRequireDefault(_toMinusCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * addCss({ '#canvas': { backgroundColor: '#171717',border: '3px solid #DDDDDD' } });
 *
 * @param object
 * @returns {*}
 */
var addCss = function addCss(object) {
    var cssString = '';
    Object.keys(object).forEach(function (selector) {
        cssString += selector + " {\n";
        Object.keys(object[selector]).forEach(function (prop) {
            var name = (0, _hasLowerCase2.default)(prop) ? (0, _toMinusCase2.default)(prop) : prop;
            var value = object[selector][prop];
            cssString += "\t" + name + ": " + value + ";\n";
        });
        cssString += "}\n";
    });
    var css = (0, _createElement2.default)('style', {}, cssString);
    if (document && document.head) {
        document.head.appendChild(css);
    }

    return css;
};

exports.default = addCss;

/***/ }),

/***/ "./node_modules/animate.js/src/static/attr.js":
/*!****************************************************!*\
  !*** ./node_modules/animate.js/src/static/attr.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _query = __webpack_require__(/*! ./query */ "./node_modules/animate.js/src/static/query.js");

var _query2 = _interopRequireDefault(_query);

var _typeOf = __webpack_require__(/*! ./typeOf */ "./node_modules/animate.js/src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _isNode = __webpack_require__(/*! ./isNode */ "./node_modules/animate.js/src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var attr = function attr(element, name, value) {
    var type_element = (0, _typeOf2.default)(element);
    if (type_element === 'string') {
        element = (0, _query2.default)(element);
    }

    if ((0, _isNode2.default)(element) && arguments.length === 2) {
        if ((0, _typeOf2.default)(name, 'object')) {
            for (var key in name) {
                attr(element, key, name[key]);
            }
        } else return element.getAttribute(name);
    } else if ((0, _isNode2.default)(element) && arguments.length === 3) {
        if (value === false) element.removeAttribute(name);else element.setAttribute(name, value);
    }
};

exports.default = attr;

/***/ }),

/***/ "./node_modules/animate.js/src/static/clone.js":
/*!*****************************************************!*\
  !*** ./node_modules/animate.js/src/static/clone.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 *
 * @param from
 * @param to
 * @returns {*}
 */
function clone(from, to) {
    if (from === null || (typeof from === "undefined" ? "undefined" : _typeof(from)) !== "object") return from;
    if (from.constructor !== Object && from.constructor !== Array) return from;
    if (from.constructor === Date || from.constructor === RegExp || from.constructor === Function || from.constructor === String || from.constructor === Number || from.constructor === Boolean) {
        return new from.constructor(from);
    }

    to = to || new from.constructor();

    for (name in from) {
        to[name] = typeof to[name] == "undefined" ? clone(from[name], null) : to[name];
    }

    return to;
}

exports.default = clone;

/***/ }),

/***/ "./node_modules/animate.js/src/static/copy.js":
/*!****************************************************!*\
  !*** ./node_modules/animate.js/src/static/copy.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeOf = __webpack_require__(/*! ./typeOf */ "./node_modules/animate.js/src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _isNode = __webpack_require__(/*! ./isNode */ "./node_modules/animate.js/src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var copy = function copy(src, instance) {
    if ((0, _isNode2.default)(src)) return src.cloneNode(true);

    if (Array.isArray(src)) return src.slice();

    if (typeof src === 'function') return src.bind(instance || {});

    if ((0, _typeOf2.default)(src, 'object')) {
        // return Object.assign({}, src);
        var result = {};
        Object.keys(src).forEach(function (key) {
            var value = src[key];
            result[key] = copy(value, typeof value === "function" ? src : {});
        });
        return result;
    }

    return src;
};

exports.default = copy;

/***/ }),

/***/ "./node_modules/animate.js/src/static/createArray.js":
/*!***********************************************************!*\
  !*** ./node_modules/animate.js/src/static/createArray.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/*

const arr0 = createArray(5);
const arr0 = createArray(5, true);
const arr1 = createArray(5, 1);
const arr2 = createArray(5, 'hello world');
const arr3 = createArray(5, [100,200,300]);
const arr4 = createArray(5, {a:'A',b:'B',c:'C'});

*/

/**
 *
 * @param num
 * @param fill
 * @returns {any[]}
 */
var createArray = function createArray(num, fill) {
    var arr = [];

    if (typeof fill === 'number' || typeof fill === 'string') {
        return new Array(num).fill(fill);
    }

    arr = new Array(num).fill(0);
    arr.forEach(function (value, i) {
        if (typeof fill === 'function') {
            var r = fill.call(fill, i, i);
            arr[i] = typeof r === 'boolean' || r ? r : value;
        }
        if (Array.isArray(fill)) arr[i] = fill[i] === undefined ? undefined : fill[i];else arr[i] = fill;
    });
    return arr;
};

exports.default = createArray;

/***/ }),

/***/ "./node_modules/animate.js/src/static/createElement.js":
/*!*************************************************************!*\
  !*** ./node_modules/animate.js/src/static/createElement.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeOf = __webpack_require__(/*! ./typeOf */ "./node_modules/animate.js/src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _isNode = __webpack_require__(/*! ./isNode */ "./node_modules/animate.js/src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param tag
 * @param attrs
 * @param inner
 * @return {HTMLElement|Node}
 */
var createElement = function createElement(tag, attrs, inner) {
    var element = document.createElement(tag),
        is_attr = function is_attr(src) {
        return (0, _typeOf2.default)(src, 'object') && !(0, _isNode2.default)(src);
    },
        insert_html = function insert_html(src) {
        element.insertAdjacentHTML('beforeend', src);
    },
        insert_child = function insert_child(src) {
        element.appendChild(src);
    },
        insert = function insert(src) {
        var type = (0, _typeOf2.default)(src);
        if (type === 'string') insert_html(src);else if (type === 'object' && (0, _isNode2.default)(src)) insert_child(src);else if (type === 'array') for (var i = 0; i < src.length; i++) {
            insert(src[i]);
        }
    };

    if (arguments.length === 2 && !is_attr(attrs)) {
        inner = attrs;
        attrs = false;
    }

    if (attrs) for (var k in attrs) {
        element.setAttribute(k, attrs[k]);
    }if (inner) insert(inner);

    return element;
};

exports.default = createElement;

/***/ }),

/***/ "./node_modules/animate.js/src/static/createFragment.js":
/*!**************************************************************!*\
  !*** ./node_modules/animate.js/src/static/createFragment.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isNode = __webpack_require__(/*! ./isNode */ "./node_modules/animate.js/src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _typeOf = __webpack_require__(/*! ./typeOf */ "./node_modules/animate.js/src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _str2node = __webpack_require__(/*! ./str2node */ "./node_modules/animate.js/src/static/str2node.js");

var _str2node2 = _interopRequireDefault(_str2node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createFragment = function createFragment(append) {
    var fragment = document.createDocumentFragment();

    if ((0, _isNode2.default)(append)) fragment.appendChild(append);

    if ((0, _typeOf2.default)(append, 'string')) fragment.appendChild((0, _str2node2.default)(append));

    return fragment;
};

exports.default = createFragment;

/***/ }),

/***/ "./node_modules/animate.js/src/static/css.js":
/*!***************************************************!*\
  !*** ./node_modules/animate.js/src/static/css.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeOf = __webpack_require__(/*! ./typeOf */ "./node_modules/animate.js/src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _isNode = __webpack_require__(/*! ./isNode */ "./node_modules/animate.js/src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _queryAll = __webpack_require__(/*! ./queryAll */ "./node_modules/animate.js/src/static/queryAll.js");

var _queryAll2 = _interopRequireDefault(_queryAll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param selector
 * @param properties
 * @returns {null|undefined}
 */
var css = function css(selector, properties) {
    if (!selector || !properties) return;
    if (arguments.length === 3) {
        var prop = {};
        prop[properties] = arguments[2];
        return css(selector, prop);
    }

    var i = void 0,
        k = void 0,
        elements = null,
        typeSelector = (0, _typeOf2.default)(selector),
        typeProperties = (0, _typeOf2.default)(properties),
        parse = function parse(str) {
        var i = void 0,
            p1 = str.split(';'),
            p2 = void 0,
            pn = void 0,
            ix = void 0,
            o = {};
        for (i = 0; i < p1.length; i++) {
            p2 = p1[i].split(':');
            pn = p2[0].trim();
            ix = pn.indexOf('-');
            if (ix !== -1) pn = pn.substring(0, ix) + pn[ix + 1].toUpperCase() + pn.substring(ix + 2);
            if (p2.length === 2) o[pn] = p2[1].trim();
        }
        return o;
    };

    switch (typeSelector) {
        case 'string':
            elements = (0, _queryAll2.default)(selector);
            break;

        case 'object':
            if ((0, _isNode2.default)(selector)) elements = [selector];
            break;

        case 'array':
            elements = selector;
            break;
    }

    if (elements) {

        if (typeProperties === 'string') properties = parse(properties);

        for (i in elements) {
            for (k in properties) {
                elements[i].style[k] = properties[k];
            }
        }
    }

    return elements;
};

exports.default = css;

/***/ }),

/***/ "./node_modules/animate.js/src/static/decodeGetQuery.js":
/*!**************************************************************!*\
  !*** ./node_modules/animate.js/src/static/decodeGetQuery.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var decodeGetQuery = function decodeGetQuery(query) {
    var result = {};
    var pairs = (query[0] === '?' ? query.substr(1) : query).split('&');
    pairs.forEach(function (item, i) {
        var pair = pairs[i].split('=');
        result[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    });
    return result;
};

exports.default = decodeGetQuery;

/***/ }),

/***/ "./node_modules/animate.js/src/static/defined.js":
/*!*******************************************************!*\
  !*** ./node_modules/animate.js/src/static/defined.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var defined = function defined(value) {
    return value !== undefined;
};

exports.default = defined;

/***/ }),

/***/ "./node_modules/animate.js/src/static/definedIn.js":
/*!*********************************************************!*\
  !*** ./node_modules/animate.js/src/static/definedIn.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var definedIn = function definedIn(stack, value) {
    return stack && stack[value] !== undefined;
};

exports.default = definedIn;

/***/ }),

/***/ "./node_modules/animate.js/src/static/domLoaded.js":
/*!*********************************************************!*\
  !*** ./node_modules/animate.js/src/static/domLoaded.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getDocument = __webpack_require__(/*! ./getDocument */ "./node_modules/animate.js/src/static/getDocument.js");

var _getDocument2 = _interopRequireDefault(_getDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var domLoaded = function domLoaded(callback) {
    var doc = (0, _getDocument2.default)();
    if (doc.querySelector('body')) callback.call();else doc.addEventListener('DOMContentLoaded', function () {
        callback.call();
    }, false);
};

exports.default = domLoaded;

/***/ }),

/***/ "./node_modules/animate.js/src/static/each.js":
/*!****************************************************!*\
  !*** ./node_modules/animate.js/src/static/each.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isNode = __webpack_require__(/*! ./isNode */ "./node_modules/animate.js/src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _query = __webpack_require__(/*! ./query */ "./node_modules/animate.js/src/static/query.js");

var _query2 = _interopRequireDefault(_query);

var _typeOf = __webpack_require__(/*! ./typeOf */ "./node_modules/animate.js/src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*const each = function (list, callback, tmp) {
    if (list instanceof Array) {
        list.forEach((item, i) => {
            callback.call({}, item, i, tmp);
        });
    } else if (isNode(list)) {
        each([].slice.call(list.childNodes), callback, tmp);
    } else {
        Object.keys(list).forEach((item, i) => {
            callback.call({}, item, i, tmp);
        });
    }
};*/

var each = function each(list, callback) {
    var instance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var type = (0, _typeOf2.default)(list);

    switch (type) {
        case 'array':
            if (typeof callback === 'function') {
                list.forEach(function (i, v, a) {
                    return callback.call(instance, i, v, a);
                });
            }
            break;
        case 'object':
            if ((0, _isNode2.default)(list)) {
                if (list instanceof NodeList) list = each(Array.from(list), callback, instance);else list = each([list], callback, instance);
            } else Object.keys(list).forEach(function (key) {
                return callback.call(instance, key, list[key], list);
            });
            break;
        case 'string':
            list = each(list.split(""), callback, instance);
            break;
        case 'number':
            var arr = new Array(list).fill(0);
            list = each(arr, callback, instance);
            break;
    }

    return list;
};

each.parent = function (selector, filter) {
    var loops = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

    var getParent = function getParent(elem) {
        return elem && elem.parentNode ? elem.parentNode : false;
    };
    var element = (0, _isNode2.default)(selector) ? selector : (0, _query2.default)(selector);
    while (loops > 0 && element) {
        loops--;
        if (element.parentNode && element.parentNode.querySelector(filter)) {
            return element;
        }
        element = getParent(element);
    }
};

each.filter = function (selector, filter, callback) {
    var loops = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;

    var getParent = function getParent(elem) {
        return elem && elem.parentNode ? elem.parentNode : false;
    };
    var element = (0, _isNode2.default)(selector) ? selector : (0, _query2.default)(selector);
    while (loops > 0 && element) {
        loops--;
        if (element.parentNode && element.parentNode.querySelector(filter)) {
            callback(element);
            return element;
        }
        element = getParent(element);
    }
    return element;
};

exports.default = each;

/***/ }),

/***/ "./node_modules/animate.js/src/static/encodeGetQuery.js":
/*!**************************************************************!*\
  !*** ./node_modules/animate.js/src/static/encodeGetQuery.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var encodeGetQuery = function encodeGetQuery(params) {
    var result = '';
    Object.keys(params).forEach(function (key) {
        result += (result.length ? '&' : '?') + key + '=' + encodeURIComponent(params[key]);
    });

    return result;
};

exports.default = encodeGetQuery;

/***/ }),

/***/ "./node_modules/animate.js/src/static/exists.js":
/*!******************************************************!*\
  !*** ./node_modules/animate.js/src/static/exists.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var exists = function exists(src) {
    return src !== undefined && src !== null;
};

exports.default = exists;

/***/ }),

/***/ "./node_modules/animate.js/src/static/extend.js":
/*!******************************************************!*\
  !*** ./node_modules/animate.js/src/static/extend.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var extend = exports.extend = function extend(destination, source) {
    for (var param in source) {
        if (source.hasOwnProperty(param)) destination[param] = source[param];
    }function __() {
        this.constructor = destination;
    }

    __.prototype = source.prototype;
    destination.prototype = new __();
};

var extendRecursive = exports.extendRecursive = function extendRecursive(destination, source) {
    var property = void 0;
    for (property in source) {
        if (source[property] && source[property].constructor && source[property].constructor === Object) {
            destination[property] = destination[property] || {};
            extendRecursive(destination[property], source[property]);
        } else destination[property] = source[property];
    }
    return destination;
};

exports.default = extend;

/***/ }),

/***/ "./node_modules/animate.js/src/static/findObject.js":
/*!**********************************************************!*\
  !*** ./node_modules/animate.js/src/static/findObject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _findObjects = __webpack_require__(/*! ./findObjects */ "./node_modules/animate.js/src/static/findObjects.js");

var _findObjects2 = _interopRequireDefault(_findObjects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var findObject = function findObject(values, attr, attrValue) {
    var tmp = (0, _findObjects2.default)(values, attr, attrValue);
    return tmp.length ? tmp[0] : false;
};

exports.default = findObject;

/***/ }),

/***/ "./node_modules/animate.js/src/static/findObjects.js":
/*!***********************************************************!*\
  !*** ./node_modules/animate.js/src/static/findObjects.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var findObjects = function findObjects(list, attr, attrValue) {
    var i = void 0,
        tmp = [];
    if (list && (typeof list === "undefined" ? "undefined" : _typeof(list)) === "object") list = Object.values(list);

    if (Array.isArray(list)) for (i = 0; i < list.length; i++) {
        if (list[i] && list[i][attr] !== undefined && list[i][attr] === attrValue) tmp.push(list[i]);
    }return tmp;
};

var finds = exports.finds = function finds(values, attr, attrValue) {
    var tmp = findObjects(values, attr, attrValue);
    return tmp.length ? tmp : false;
};

var find = exports.find = function find(values, attr, attrValue) {
    var tmp = findObjects(values, attr, attrValue);
    return tmp.length ? tmp[0] : false;
};

exports.default = findObjects;

/***/ }),

/***/ "./node_modules/animate.js/src/static/format.js":
/*!******************************************************!*\
  !*** ./node_modules/animate.js/src/static/format.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _isNode = __webpack_require__(/*! ./isNode */ "./node_modules/animate.js/src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _defined = __webpack_require__(/*! ./defined */ "./node_modules/animate.js/src/static/defined.js");

var _defined2 = _interopRequireDefault(_defined);

var _node2str = __webpack_require__(/*! ./node2str */ "./node_modules/animate.js/src/static/node2str.js");

var _node2str2 = _interopRequireDefault(_node2str);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Formatting of string, or maybe template builder
 *
 * Examples:
 * .format("Hello {0}, your code is {1}!", ['Jade', 'Prefect']);
 * .format("Hello {name}, your code is {mean}!", {name:'Jade', mean: 'Prefect'});
 *
 * @param string    String
 * @param list  Array|Object
 * @returns string
 */
var format = function format(string, list) {
    var numberRegExp = /{(\d+)}/gi;
    var stringRegExp = /{(\w+)}/gi;

    var reg = void 0;
    if (Array.isArray(list)) reg = new RegExp(numberRegExp);else if (list && (typeof list === "undefined" ? "undefined" : _typeof(list)) === 'object') reg = new RegExp(stringRegExp);

    return string.replace(reg, function (match, number) {
        if ((0, _defined2.default)(list[number]) && (0, _isNode2.default)(list[number])) list[number] = (0, _node2str2.default)(list[number]);

        return _typeof(list[number]) !== undefined ? list[number] : match;
    });
};

exports.default = format;

/***/ }),

/***/ "./node_modules/animate.js/src/static/getDocument.js":
/*!***********************************************************!*\
  !*** ./node_modules/animate.js/src/static/getDocument.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var getDocument = function getDocument() {

    if (typeof document !== 'undefined') {
        return document;
    } else {
        // return global ? global : {};
        throw new Error('document object not exist!');
    }
};

exports.default = getDocument;

/***/ }),

/***/ "./node_modules/animate.js/src/static/getLocation.js":
/*!***********************************************************!*\
  !*** ./node_modules/animate.js/src/static/getLocation.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var getLocation = function getLocation() {

    if (typeof location !== 'undefined') {
        return location;
    } else {
        throw new Error('location object not exist!');
    }
};

exports.default = getLocation;

/***/ }),

/***/ "./node_modules/animate.js/src/static/getWindow.js":
/*!*********************************************************!*\
  !*** ./node_modules/animate.js/src/static/getWindow.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var getWindow = function getWindow() {

    if (typeof window !== 'undefined') {
        return window;
    } else {
        // return global ? global : {};
        throw new Error('window object not exist!');
    }
};

exports.default = getWindow;

/***/ }),

/***/ "./node_modules/animate.js/src/static/hasLowerCase.js":
/*!************************************************************!*\
  !*** ./node_modules/animate.js/src/static/hasLowerCase.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var hasLowerCase = function hasLowerCase(character) {
    var lowers = character.split('').filter(function (char) {
        var code = char.charCodeAt(0);
        return code >= 65 && code <= 90;
    });

    return lowers.length > 0;
};

exports.default = hasLowerCase;

/***/ }),

/***/ "./node_modules/animate.js/src/static/httpRequest.js":
/*!***********************************************************!*\
  !*** ./node_modules/animate.js/src/static/httpRequest.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeOf = __webpack_require__(/*! ./typeOf */ "./node_modules/animate.js/src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Base HTTP Request
 *
 * .httpRequest( {method: 'GET', data: {}, headers: {}, action: '/index'}, function(status, data){}, thisInstance );
 *
 * @param config
 *      data:           data to send. Object, FormData (POST only), HTMLFormElement (POST only)
 *      action, url:    url address to
 *      method:         request method GET POST or custom methods, default 'GET'
 *      headers:        headers Object, key = value
 *      useEncode:      used url encoding, default TRUE. Boolean
 *      useFormData:    used FormData, default FALSE. Boolean
 *      async:          default TRUE. Boolean
 *      user:
 *      password:
 *
 * @param callback
 *      executing event - onloadend. function (status, responseText)
 *
 * @param thisInstance
 *      object 'this' for callback
 *
 * @returns {XMLHttpRequest}
 */
var httpRequest = function httpRequest(config, callback, thisInstance) {
    var key = void 0;
    var sendData = {};
    var xhr = new XMLHttpRequest();
    var options = {
        data: config.data || {},
        action: config.action || config.url || document.location.href,
        method: config.method ? config.method.toUpperCase() : 'GET',
        headers: config.headers || {},
        useEncode: config.useEncode === undefined ? true : !!config.useEncode,
        useFormData: config.useFormData === undefined ? false : !!config.useFormData,
        async: config.async === undefined ? true : !!config.async,
        user: config.user || null,
        password: config.user || null
    };

    var concateString = function concateString(params) {
        var result = '';
        for (key in params) {
            result += '&' + key + '=' + (options.useEncode ? encodeURIComponent(params[key]) : params[key]);
        }
        return result;
    };

    thisInstance = (0, _typeOf2.default)(thisInstance, 'object') ? thisInstance : {};

    // data prepare
    if (options.method === 'GET') {

        // form to FormData
        options.action += options.action.indexOf('?') === -1 ? '?' : '';
        options.action += concateString(options.data);
        sendData = {};
    } else {

        // reset to useFormData in true
        if (options.data instanceof FormData) {
            options.data = {};
            options.useFormData = true;
            sendData = options.data;
        }

        // form to FormData
        if (options.data instanceof HTMLFormElement) {
            sendData = new FormData(options.data);
            options.useFormData = true;
            options.data = {};
        }

        if (options.useFormData) {
            if (!(sendData instanceof FormData)) sendData = new FormData();

            Object.keys(options.data).forEach(function (key) {
                sendData.append(key, options.useEncode ? encodeURIComponent(options.data[key]) : options.data[key]);
            });
        } else {
            sendData = concateString(options.data);
        }
    }

    // build request
    xhr.open(options.method, options.action, options.async, options.user, options.password);

    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    if (options.method !== 'GET' && !options.useFormData) {
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }

    for (key in options.headers) {
        xhr.setRequestHeader(key, options.headers[key]);
    }

    xhr.onloadend = function () {
        thisInstance.XMLHttpRequest = xhr;
        if (typeof callback === 'function') {
            callback.call(thisInstance, xhr.status, xhr.responseText, xhr);
        }
    };

    xhr.sendOptions = options;
    xhr.send(sendData);
    return xhr;
};

exports.default = httpRequest;

/***/ }),

/***/ "./node_modules/animate.js/src/static/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/animate.js/src/static/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _abc = __webpack_require__(/*! ../static/abc */ "./node_modules/animate.js/src/static/abc.js");

var _abc2 = _interopRequireDefault(_abc);

var _attr = __webpack_require__(/*! ../static/attr */ "./node_modules/animate.js/src/static/attr.js");

var _attr2 = _interopRequireDefault(_attr);

var _createElement = __webpack_require__(/*! ../static/createElement */ "./node_modules/animate.js/src/static/createElement.js");

var _createElement2 = _interopRequireDefault(_createElement);

var _createFragment = __webpack_require__(/*! ../static/createFragment */ "./node_modules/animate.js/src/static/createFragment.js");

var _createFragment2 = _interopRequireDefault(_createFragment);

var _css = __webpack_require__(/*! ../static/css */ "./node_modules/animate.js/src/static/css.js");

var _css2 = _interopRequireDefault(_css);

var _domLoaded = __webpack_require__(/*! ../static/domLoaded */ "./node_modules/animate.js/src/static/domLoaded.js");

var _domLoaded2 = _interopRequireDefault(_domLoaded);

var _getDocument = __webpack_require__(/*! ../static/getDocument */ "./node_modules/animate.js/src/static/getDocument.js");

var _getDocument2 = _interopRequireDefault(_getDocument);

var _getWindow = __webpack_require__(/*! ../static/getWindow */ "./node_modules/animate.js/src/static/getWindow.js");

var _getWindow2 = _interopRequireDefault(_getWindow);

var _inject = __webpack_require__(/*! ../static/inject */ "./node_modules/animate.js/src/static/inject.js");

var _inject2 = _interopRequireDefault(_inject);

var _str2node = __webpack_require__(/*! ../static/str2node */ "./node_modules/animate.js/src/static/str2node.js");

var _str2node2 = _interopRequireDefault(_str2node);

var _str2fragment = __webpack_require__(/*! ../static/str2fragment */ "./node_modules/animate.js/src/static/str2fragment.js");

var _str2fragment2 = _interopRequireDefault(_str2fragment);

var _node2str = __webpack_require__(/*! ../static/node2str */ "./node_modules/animate.js/src/static/node2str.js");

var _node2str2 = _interopRequireDefault(_node2str);

var _query = __webpack_require__(/*! ../static/query */ "./node_modules/animate.js/src/static/query.js");

var _query2 = _interopRequireDefault(_query);

var _queryAll = __webpack_require__(/*! ../static/queryAll */ "./node_modules/animate.js/src/static/queryAll.js");

var _queryAll2 = _interopRequireDefault(_queryAll);

var _search = __webpack_require__(/*! ../static/search */ "./node_modules/animate.js/src/static/search.js");

var _search2 = _interopRequireDefault(_search);

var _encodeGetQuery = __webpack_require__(/*! ../static/encodeGetQuery */ "./node_modules/animate.js/src/static/encodeGetQuery.js");

var _encodeGetQuery2 = _interopRequireDefault(_encodeGetQuery);

var _decodeGetQuery = __webpack_require__(/*! ../static/decodeGetQuery */ "./node_modules/animate.js/src/static/decodeGetQuery.js");

var _decodeGetQuery2 = _interopRequireDefault(_decodeGetQuery);

var _httpRequest = __webpack_require__(/*! ../static/httpRequest */ "./node_modules/animate.js/src/static/httpRequest.js");

var _httpRequest2 = _interopRequireDefault(_httpRequest);

var _defined = __webpack_require__(/*! ../static/defined */ "./node_modules/animate.js/src/static/defined.js");

var _defined2 = _interopRequireDefault(_defined);

var _definedIn = __webpack_require__(/*! ../static/definedIn */ "./node_modules/animate.js/src/static/definedIn.js");

var _definedIn2 = _interopRequireDefault(_definedIn);

var _each = __webpack_require__(/*! ../static/each */ "./node_modules/animate.js/src/static/each.js");

var _each2 = _interopRequireDefault(_each);

var _extend = __webpack_require__(/*! ../static/extend */ "./node_modules/animate.js/src/static/extend.js");

var _extend2 = _interopRequireDefault(_extend);

var _isEmpty = __webpack_require__(/*! ../static/isEmpty */ "./node_modules/animate.js/src/static/isEmpty.js");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _findObject = __webpack_require__(/*! ../static/findObject */ "./node_modules/animate.js/src/static/findObject.js");

var _findObject2 = _interopRequireDefault(_findObject);

var _findObjects = __webpack_require__(/*! ../static/findObjects */ "./node_modules/animate.js/src/static/findObjects.js");

var _findObjects2 = _interopRequireDefault(_findObjects);

var _format = __webpack_require__(/*! ../static/format */ "./node_modules/animate.js/src/static/format.js");

var _format2 = _interopRequireDefault(_format);

var _isNode = __webpack_require__(/*! ../static/isNode */ "./node_modules/animate.js/src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _loadCSS = __webpack_require__(/*! ../static/loadCSS */ "./node_modules/animate.js/src/static/loadCSS.js");

var _loadCSS2 = _interopRequireDefault(_loadCSS);

var _loadJS = __webpack_require__(/*! ../static/loadJS */ "./node_modules/animate.js/src/static/loadJS.js");

var _loadJS2 = _interopRequireDefault(_loadJS);

var _loadJSSync = __webpack_require__(/*! ../static/loadJSSync */ "./node_modules/animate.js/src/static/loadJSSync.js");

var _loadJSSync2 = _interopRequireDefault(_loadJSSync);

var _merge = __webpack_require__(/*! ../static/merge */ "./node_modules/animate.js/src/static/merge.js");

var _merge2 = _interopRequireDefault(_merge);

var _number2string = __webpack_require__(/*! ../static/number2string */ "./node_modules/animate.js/src/static/number2string.js");

var _number2string2 = _interopRequireDefault(_number2string);

var _on = __webpack_require__(/*! ../static/on */ "./node_modules/animate.js/src/static/on.js");

var _on2 = _interopRequireDefault(_on);

var _position = __webpack_require__(/*! ../static/position */ "./node_modules/animate.js/src/static/position.js");

var _position2 = _interopRequireDefault(_position);

var _positionMouse = __webpack_require__(/*! ../static/positionMouse */ "./node_modules/animate.js/src/static/positionMouse.js");

var _positionMouse2 = _interopRequireDefault(_positionMouse);

var _random = __webpack_require__(/*! ../static/random */ "./node_modules/animate.js/src/static/random.js");

var _random2 = _interopRequireDefault(_random);

var _redirect = __webpack_require__(/*! ../static/redirect */ "./node_modules/animate.js/src/static/redirect.js");

var _redirect2 = _interopRequireDefault(_redirect);

var _typeOf = __webpack_require__(/*! ../static/typeOf */ "./node_modules/animate.js/src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _typeOfStrict = __webpack_require__(/*! ../static/typeOfStrict */ "./node_modules/animate.js/src/static/typeOfStrict.js");

var _typeOfStrict2 = _interopRequireDefault(_typeOfStrict);

var _uri = __webpack_require__(/*! ../static/uri */ "./node_modules/animate.js/src/static/uri.js");

var _uri2 = _interopRequireDefault(_uri);

var _copy = __webpack_require__(/*! ../static/copy */ "./node_modules/animate.js/src/static/copy.js");

var _copy2 = _interopRequireDefault(_copy);

var _clone = __webpack_require__(/*! ../static/clone */ "./node_modules/animate.js/src/static/clone.js");

var _clone2 = _interopRequireDefault(_clone);

var _toObject = __webpack_require__(/*! ../static/toObject */ "./node_modules/animate.js/src/static/toObject.js");

var _toObject2 = _interopRequireDefault(_toObject);

var _isHTMLString = __webpack_require__(/*! ../static/isHTMLString */ "./node_modules/animate.js/src/static/isHTMLString.js");

var _isHTMLString2 = _interopRequireDefault(_isHTMLString);

var _createArray = __webpack_require__(/*! ../static/createArray */ "./node_modules/animate.js/src/static/createArray.js");

var _createArray2 = _interopRequireDefault(_createArray);

var _isString = __webpack_require__(/*! ../static/isString */ "./node_modules/animate.js/src/static/isString.js");

var _isString2 = _interopRequireDefault(_isString);

var _exists = __webpack_require__(/*! ../static/exists */ "./node_modules/animate.js/src/static/exists.js");

var _exists2 = _interopRequireDefault(_exists);

var _isDefined = __webpack_require__(/*! ../static/isDefined */ "./node_modules/animate.js/src/static/isDefined.js");

var _isDefined2 = _interopRequireDefault(_isDefined);

var _loadBlobfile = __webpack_require__(/*! ../static/loadBlobfile */ "./node_modules/animate.js/src/static/loadBlobfile.js");

var _loadBlobfile2 = _interopRequireDefault(_loadBlobfile);

var _loadJSON = __webpack_require__(/*! ../static/loadJSON */ "./node_modules/animate.js/src/static/loadJSON.js");

var _loadJSON2 = _interopRequireDefault(_loadJSON);

var _loadTextfile = __webpack_require__(/*! ../static/loadTextfile */ "./node_modules/animate.js/src/static/loadTextfile.js");

var _loadTextfile2 = _interopRequireDefault(_loadTextfile);

var _toHTML = __webpack_require__(/*! ../static/toHTML */ "./node_modules/animate.js/src/static/toHTML.js");

var _toHTML2 = _interopRequireDefault(_toHTML);

var _toXML = __webpack_require__(/*! ../static/toXML */ "./node_modules/animate.js/src/static/toXML.js");

var _toXML2 = _interopRequireDefault(_toXML);

var _stylizer = __webpack_require__(/*! ../static/stylizer */ "./node_modules/animate.js/src/static/stylizer.js");

var _stylizer2 = _interopRequireDefault(_stylizer);

var _uniqArray = __webpack_require__(/*! ../static/uniqArray */ "./node_modules/animate.js/src/static/uniqArray.js");

var _uniqArray2 = _interopRequireDefault(_uniqArray);

var _isNumber = __webpack_require__(/*! ../static/isNumber */ "./node_modules/animate.js/src/static/isNumber.js");

var _isNumber2 = _interopRequireDefault(_isNumber);

var _trimSymbols = __webpack_require__(/*! ../static/trimSymbols */ "./node_modules/animate.js/src/static/trimSymbols.js");

var _trimSymbols2 = _interopRequireDefault(_trimSymbols);

var _isLowerCase = __webpack_require__(/*! ../static/isLowerCase */ "./node_modules/animate.js/src/static/isLowerCase.js");

var _isLowerCase2 = _interopRequireDefault(_isLowerCase);

var _isUpperCase = __webpack_require__(/*! ../static/isUpperCase */ "./node_modules/animate.js/src/static/isUpperCase.js");

var _isUpperCase2 = _interopRequireDefault(_isUpperCase);

var _toSnakeCase = __webpack_require__(/*! ../static/toSnakeCase */ "./node_modules/animate.js/src/static/toSnakeCase.js");

var _toSnakeCase2 = _interopRequireDefault(_toSnakeCase);

var _toCamelCase = __webpack_require__(/*! ../static/toCamelCase */ "./node_modules/animate.js/src/static/toCamelCase.js");

var _toCamelCase2 = _interopRequireDefault(_toCamelCase);

var _hasLowerCase = __webpack_require__(/*! ../static/hasLowerCase */ "./node_modules/animate.js/src/static/hasLowerCase.js");

var _hasLowerCase2 = _interopRequireDefault(_hasLowerCase);

var _toMinusCase = __webpack_require__(/*! ../static/toMinusCase */ "./node_modules/animate.js/src/static/toMinusCase.js");

var _toMinusCase2 = _interopRequireDefault(_toMinusCase);

var _addCss = __webpack_require__(/*! ../static/addCss */ "./node_modules/animate.js/src/static/addCss.js");

var _addCss2 = _interopRequireDefault(_addCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Static = {
    abc: _abc2.default,
    attr: _attr2.default,
    createElement: _createElement2.default,
    createFragment: _createFragment2.default,
    css: _css2.default,
    domLoaded: _domLoaded2.default,
    getDocument: _getDocument2.default,
    getWindow: _getWindow2.default,
    inject: _inject2.default,
    str2node: _str2node2.default,
    str2fragment: _str2fragment2.default,
    node2str: _node2str2.default,
    query: _query2.default,
    queryAll: _queryAll2.default,
    search: _search2.default,
    encodeGetQuery: _encodeGetQuery2.default,
    decodeGetQuery: _decodeGetQuery2.default,
    httpRequest: _httpRequest2.default,
    defined: _defined2.default,
    definedIn: _definedIn2.default,
    extend: _extend2.default,
    extendRecursive: _extend.extendRecursive,
    each: _each2.default,
    findObject: _findObject2.default,
    findObjects: _findObjects2.default,
    format: _format2.default,
    isEmpty: _isEmpty2.default,
    isNode: _isNode2.default,
    loadCSS: _loadCSS2.default,
    loadJS: _loadJS2.default,
    loadJSSync: _loadJSSync2.default,
    merge: _merge2.default,
    number2string: _number2string2.default,
    on: _on2.default,
    position: _position2.default,
    positionMouse: _positionMouse2.default,
    random: _random2.default,
    randomColor: _random.randomColor,
    randomItem: _random.randomItem,
    randomNumber: _random.randomNumber,
    randomString: _random.randomString,
    randomHumanizeString: _random.randomHumanizeString,
    redirect: _redirect2.default,
    typeOf: _typeOf2.default,
    typeOfStrict: _typeOfStrict2.default,
    uri: _uri2.default,
    copy: _copy2.default,
    clone: _clone2.default,
    toObject: _toObject2.default,
    isHTMLString: _isHTMLString2.default,
    createArray: _createArray2.default,
    isString: _isString2.default,
    exists: _exists2.default,
    isDefined: _isDefined2.default,
    loadBlobfile: _loadBlobfile2.default,
    loadJSON: _loadJSON2.default,
    loadTextfile: _loadTextfile2.default,
    toHTML: _toHTML2.default,
    toXML: _toXML2.default,
    stylizer: _stylizer2.default,
    uniqArray: _uniqArray2.default,
    isNumber: _isNumber2.default,
    trimSymbols: _trimSymbols2.default,
    isLowerCase: _isLowerCase2.default,
    isUpperCase: _isUpperCase2.default,
    toCamelCase: _toCamelCase2.default,
    toSnakeCase: _toSnakeCase2.default,
    hasLowerCase: _hasLowerCase2.default,
    toMinusCase: _toMinusCase2.default,
    addCss: _addCss2.default
};

exports.default = Static;

/***/ }),

/***/ "./node_modules/animate.js/src/static/inject.js":
/*!******************************************************!*\
  !*** ./node_modules/animate.js/src/static/inject.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _queryAll = __webpack_require__(/*! ./queryAll */ "./node_modules/animate.js/src/static/queryAll.js");

var _queryAll2 = _interopRequireDefault(_queryAll);

var _isNode = __webpack_require__(/*! ./isNode */ "./node_modules/animate.js/src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _typeOf = __webpack_require__(/*! ./typeOf */ "./node_modules/animate.js/src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _query = __webpack_require__(/*! ./query */ "./node_modules/animate.js/src/static/query.js");

var _query2 = _interopRequireDefault(_query);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inject = function inject(selector, data, append, to) {
    if ((0, _typeOf2.default)(selector, 'array')) {
        selector.forEach(function (elem) {
            inject(elem, data, true, to);
        });
        return;
    }

    if ((0, _typeOf2.default)(selector, 'string')) selector = (0, _query2.default)(selector, to);

    if (!append) selector.textContent = '';

    if ((0, _isNode2.default)(selector)) {
        if ((0, _isNode2.default)(data)) {
            selector.appendChild(data);
        } else if ((0, _typeOf2.default)(data, 'array')) {
            var i = void 0;
            for (i = 0; i < data.length; i++) {
                inject(selector, data[i], true, to);
            }
        } else {
            selector.innerHTML = !append ? data : selector.innerHTML + data;
        }
        return selector;
    }
    return null;
};

exports.default = inject;

/***/ }),

/***/ "./node_modules/animate.js/src/static/isDefined.js":
/*!*********************************************************!*\
  !*** ./node_modules/animate.js/src/static/isDefined.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var isDefined = function isDefined(src) {
    return src !== undefined;
};

exports.default = isDefined;

/***/ }),

/***/ "./node_modules/animate.js/src/static/isEmpty.js":
/*!*******************************************************!*\
  !*** ./node_modules/animate.js/src/static/isEmpty.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeOf = __webpack_require__(/*! ./typeOf */ "./node_modules/animate.js/src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isEmpty = function isEmpty(src) {
    if ((0, _typeOf2.default)(src, 'object') || (0, _typeOf2.default)(src, 'array')) {
        for (var key in src) {
            if (src.hasOwnProperty(key)) return false;
        }return true;
    } else if ((0, _typeOf2.default)(src, 'string')) {
        src = src.replace(/\s/g, '');
        return src === "" || src === "0";
    } else {
        return src === 0 || src === null || src === undefined || src === false || isNaN(src);
    }
};

exports.default = isEmpty;

/***/ }),

/***/ "./node_modules/animate.js/src/static/isHTMLString.js":
/*!************************************************************!*\
  !*** ./node_modules/animate.js/src/static/isHTMLString.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// import DOMParser from 'DOMParser';

var isHTMLString = function isHTMLString(value) {
    var truest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


    if (truest) {
        var div = document.createElement('div');
        div.innerHTML = value;
        return !!div.childElementCount;
    }

    return value.trim().substring(0, 1) === '<';
};

exports.default = isHTMLString;

/***/ }),

/***/ "./node_modules/animate.js/src/static/isLowerCase.js":
/*!***********************************************************!*\
  !*** ./node_modules/animate.js/src/static/isLowerCase.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var isLowerCase = function isLowerCase(character) {
    return character === character.toLowerCase() /*&& character !== character.toUpperCase()*/;
};

var isLowerCase2 = function isLowerCase2(character) {
    var code = character.charCodeAt(0);
    return code >= 97 && code <= 122;
};

exports.default = isLowerCase;

/***/ }),

/***/ "./node_modules/animate.js/src/static/isNode.js":
/*!******************************************************!*\
  !*** ./node_modules/animate.js/src/static/isNode.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var isNode = function isNode(value) {
    return value && (value.nodeType === Node.TEXT_NODE || value.nodeType === Node.ELEMENT_NODE || value.nodeType === Node.DOCUMENT_FRAGMENT_NODE || value.nodeType === Node.DOCUMENT_NODE);
};

exports.default = isNode;

/***/ }),

/***/ "./node_modules/animate.js/src/static/isNumber.js":
/*!********************************************************!*\
  !*** ./node_modules/animate.js/src/static/isNumber.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var isNumber = function isNumber(value) {
    try {
        value = parseInt(value);
        return (typeof value === 'number' || value instanceof Number) && !isNaN(value);
    } catch (err) {
        return false;
    }
};
exports.default = isNumber;

/***/ }),

/***/ "./node_modules/animate.js/src/static/isString.js":
/*!********************************************************!*\
  !*** ./node_modules/animate.js/src/static/isString.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var isString = function isString(value) {
    return typeof value === 'string' || value instanceof String;
};

exports.default = isString;

/***/ }),

/***/ "./node_modules/animate.js/src/static/isUpperCase.js":
/*!***********************************************************!*\
  !*** ./node_modules/animate.js/src/static/isUpperCase.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var isUpperCase = function isUpperCase(character) {
    return character === character.toUpperCase() /*&& character !== character.toLowerCase()*/;
};

var isUpperCase2 = function isUpperCase2(character) {
    var code = character.charCodeAt(0);
    return code >= 65 && code <= 90;
};

exports.default = isUpperCase;

/***/ }),

/***/ "./node_modules/animate.js/src/static/loadBlobfile.js":
/*!************************************************************!*\
  !*** ./node_modules/animate.js/src/static/loadBlobfile.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var loadBlobfile = function loadBlobfile(src, onload, onerror) {
    fetch(src).then(function (response) {
        return response.blob();
    }).then(function (blob) {
        return onload(blob);
    }).catch(function (error) {
        return typeof onerror === 'function' ? onerror(error) : null;
    });
};

exports.default = loadBlobfile;

/***/ }),

/***/ "./node_modules/animate.js/src/static/loadCSS.js":
/*!*******************************************************!*\
  !*** ./node_modules/animate.js/src/static/loadCSS.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeOf = __webpack_require__(/*! ./typeOf */ "./node_modules/animate.js/src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _getDocument = __webpack_require__(/*! ./getDocument */ "./node_modules/animate.js/src/static/getDocument.js");

var _getDocument2 = _interopRequireDefault(_getDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loadCSS = function loadCSS(src, onload, onerror) {
    if (!src) return null;
    if ((0, _typeOf2.default)(src, 'array')) {
        for (var i = 0; i < src.length; i++) {
            loadCSS(src[i], onload, onerror);
        }
    } else {
        var doc = (0, _getDocument2.default)();
        var link = doc.createElement('link');
        var id = "src-" + Math.random().toString(32).slice(2);

        link.href = src.substr(-4) === '.css' ? src : src + '.css';
        link.rel = 'stylesheet';
        link.id = id;
        link.onload = onload;
        link.onerror = onerror;

        doc.head.appendChild(link);
        return link;
    }
};

exports.default = loadCSS;

/***/ }),

/***/ "./node_modules/animate.js/src/static/loadJS.js":
/*!******************************************************!*\
  !*** ./node_modules/animate.js/src/static/loadJS.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeOf = __webpack_require__(/*! ./typeOf */ "./node_modules/animate.js/src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _getDocument = __webpack_require__(/*! ./getDocument */ "./node_modules/animate.js/src/static/getDocument.js");

var _getDocument2 = _interopRequireDefault(_getDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var documentElement = (0, _getDocument2.default)();
var loadJS = function loadJS(src, onload, onerror) {
    if (!src) return null;
    if ((0, _typeOf2.default)(src, 'array')) {
        for (var i = 0; i < src.length; i++) {
            loadJS(src[i], onload, onerror);
        }
    } else {
        var script = documentElement.createElement('script');
        var id = 'resource-' + Math.random().toString(32).slice(2);

        script.src = src.substr(-3) === '.js' ? src : src + '.js';
        script.type = 'application/javascript';
        script.id = id;
        script.onload = onload;
        script.onerror = onerror;

        documentElement.head.appendChild(script);
        return script;
    }
};

exports.default = loadJS;

/***/ }),

/***/ "./node_modules/animate.js/src/static/loadJSON.js":
/*!********************************************************!*\
  !*** ./node_modules/animate.js/src/static/loadJSON.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var loadJSON = function loadJSON(src, onload, onerror) {
    fetch(src).then(function (response) {
        return response.json();
    }).then(function (json) {
        return onload(json);
    }).catch(function (error) {
        return typeof onerror === 'function' ? onerror(error) : null;
    });
};

exports.default = loadJSON;

/***/ }),

/***/ "./node_modules/animate.js/src/static/loadJSSync.js":
/*!**********************************************************!*\
  !*** ./node_modules/animate.js/src/static/loadJSSync.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeOf = __webpack_require__(/*! ./typeOf */ "./node_modules/animate.js/src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _createElement = __webpack_require__(/*! ./createElement */ "./node_modules/animate.js/src/static/createElement.js");

var _createElement2 = _interopRequireDefault(_createElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Loads a script element with javascript source
 *
 * .loadJSSync ( {
 *      myscript1: '/path/to/myscript1',
 *      myscript2: '/path/to/myscript2',
 *    },
 *    function (list) {})
 *
 * .loadJSSync ( [
 *      '/path/to/myscript1',
 *      '/path/to/myscript2',
 *    ],
 *    function (list) {})
 *
 * @namespace NamespaceApplication.loadJSSync
 * @param srcs       Object, Array. items: key is ID, value is src
 * @param callback  Function called when all srcs is loaded
 * @param onerror   Function called when load is failed
 * @returns {*}
 */
var loadJSSync = function loadJSSync(srcs, callback, onerror) {
    if ((0, _typeOf2.default)(srcs, 'object') || (0, _typeOf2.default)(srcs, 'array')) {
        if ((0, _typeOf2.default)(srcs, 'array')) {
            var obj = {};
            srcs.forEach(function (item, i) {
                obj['resource-' + Math.random().toString(32).slice(2)] = item;
            });
            srcs = obj;
        }
        var iterator = 0;
        var scripts = {};
        Object.keys(srcs).forEach(function (key) {
            var src = srcs[key];
            var script = (0, _createElement2.default)('script', {
                src: src.substr(-3) === '.js' ? src : src + '.js',
                type: 'application/javascript',
                id: key
            });
            script.onerror = onerror;
            script.onload = function (e) {
                scripts[this.id] = this;
                iterator++;
                if (iterator === length) {
                    callback.call({}, scripts);
                }
            };
            document.head.appendChild(script);
        });
    }
};

exports.default = loadJSSync;

/***/ }),

/***/ "./node_modules/animate.js/src/static/loadTextfile.js":
/*!************************************************************!*\
  !*** ./node_modules/animate.js/src/static/loadTextfile.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var loadTextfile = function loadTextfile(src, onload, onerror) {
    fetch(src).then(function (response) {
        return response.text();
    }).then(function (text) {
        return onload(text);
    }).catch(function (error) {
        return typeof onerror === 'function' ? onerror(error) : null;
    });
};

exports.default = loadTextfile;

/***/ }),

/***/ "./node_modules/animate.js/src/static/merge.js":
/*!*****************************************************!*\
  !*** ./node_modules/animate.js/src/static/merge.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var merge = function merge(object1, object2) {
    for (var key in object2) {
        try {
            if (object2[key].constructor === Object) {
                object1[key] = merge(object1[key], object2[key]);
            } else {
                object1[key] = object2[key];
            }
        } catch (e) {
            object1[key] = object2[key];
        }
    }
    return object1;
};

exports.default = merge;

/***/ }),

/***/ "./node_modules/animate.js/src/static/node2str.js":
/*!********************************************************!*\
  !*** ./node_modules/animate.js/src/static/node2str.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var node2str = function node2str(element) {
    var container = document.createElement("div");
    container.appendChild(element.cloneNode(true));
    return container.innerHTML;
};

exports.default = node2str;

/***/ }),

/***/ "./node_modules/animate.js/src/static/number2string.js":
/*!*************************************************************!*\
  !*** ./node_modules/animate.js/src/static/number2string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var number2string = exports.number2string = function number2string(x) {
    var e = void 0;
    if (Math.abs(x) < 1.0) {
        e = parseInt(x.toString().split('e-')[1]);
        if (e) {
            x *= Math.pow(10, e - 1);
            x = '0.' + new Array(e).join('0') + x.toString().substring(2);
        }
    } else {
        e = parseInt(x.toString().split('+')[1]);
        if (e > 20) {
            e -= 20;
            x /= Math.pow(10, e);
            x += new Array(e + 1).join('0');
        }
    }
    return x;
};

exports.default = number2string;

/***/ }),

/***/ "./node_modules/animate.js/src/static/on.js":
/*!**************************************************!*\
  !*** ./node_modules/animate.js/src/static/on.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _queryAll = __webpack_require__(/*! ./queryAll */ "./node_modules/animate.js/src/static/queryAll.js");

var _queryAll2 = _interopRequireDefault(_queryAll);

var _typeOf = __webpack_require__(/*! ./typeOf */ "./node_modules/animate.js/src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _isNode = __webpack_require__(/*! ./isNode */ "./node_modules/animate.js/src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var on = function on(selector, eventName, callback, bubble) {
    var i = void 0,
        elements = [];

    switch ((0, _typeOf2.default)(selector)) {
        case 'string':
            elements = (0, _queryAll2.default)(selector);
            break;
        case 'object':
            if ((0, _isNode2.default)(selector)) elements = [selector];
            break;
        case 'array':
            elements = selector;
            break;
    }

    for (i = 0; i < elements.length; i++) {
        if (elements[i] && elements[i].addEventListener) elements[i].addEventListener(eventName, callback, !!bubble);
    }
};

exports.default = on;

/***/ }),

/***/ "./node_modules/animate.js/src/static/position.js":
/*!********************************************************!*\
  !*** ./node_modules/animate.js/src/static/position.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isHTMLString = __webpack_require__(/*! ./isHTMLString */ "./node_modules/animate.js/src/static/isHTMLString.js");

var _isHTMLString2 = _interopRequireDefault(_isHTMLString);

var _str2node = __webpack_require__(/*! ./str2node */ "./node_modules/animate.js/src/static/str2node.js");

var _str2node2 = _interopRequireDefault(_str2node);

var _isNode = __webpack_require__(/*! ./isNode */ "./node_modules/animate.js/src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @property number x
 * @property number y
 * @property number width
 * @property number height
 * @param elem
 * @returns {{x: number, width: number, y: number, height: number, top: number, left: number, right: number, bottom: number, element: object}}
 */
var position = function position(elem) {
    var data = { x: 0, y: 0, width: 0, height: 0 };

    if (typeof elem === 'string') {
        if ((0, _isHTMLString2.default)(elem)) {
            elem = (0, _str2node2.default)(elem);
        } else {
            elem = document.querySelector(elem);
        }
    }

    if (elem === window || elem === document) {
        data.width = window.innerWidth;
        data.height = window.innerHeight;
        data.element = window;
    } else if ((0, _isNode2.default)(elem)) {
        if (elem.getBoundingClientRect) {
            var rect = elem.getBoundingClientRect();
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;
            var clientTop = document.documentElement.clientTop || document.body.clientTop || 0;
            var clientLeft = document.documentElement.clientLeft || document.body.clientLeft || 0;

            data.y = Math.round(rect.top + scrollTop - clientTop);
            data.x = Math.round(rect.left + scrollLeft - clientLeft);
            data.width = elem.offsetWidth;
            data.height = elem.offsetHeight;

            data.top = rect.top + pageYOffset;
            data.left = rect.left + pageXOffset;
            data.right = rect.right + pageXOffset;
            data.bottom = rect.bottom + pageXOffset;
        } else {
            var top = 0,
                left = 0;
            while (elem) {
                top += parseInt(elem.offsetTop, 10);
                left += parseInt(elem.offsetLeft, 10);
                elem = elem.offsetParent;
            }
            data.y = top;
            data.x = left;
            data.width = elem.offsetWidth;
            data.height = elem.offsetHeight;
        }
        data.element = elem;
    }
    return data;
}; // import isNode from "./isNode";


exports.default = position;

/***/ }),

/***/ "./node_modules/animate.js/src/static/positionMouse.js":
/*!*************************************************************!*\
  !*** ./node_modules/animate.js/src/static/positionMouse.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var positionMouse = function positionMouse(event) {
    if (!(event instanceof MouseEvent)) {
        console.error('Error: argument is not type the MouseEvent!');
        return;
    }
    var rect = document.body.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
};

exports.default = positionMouse;

/***/ }),

/***/ "./node_modules/animate.js/src/static/query.js":
/*!*****************************************************!*\
  !*** ./node_modules/animate.js/src/static/query.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _queryAll = __webpack_require__(/*! ./queryAll */ "./node_modules/animate.js/src/static/queryAll.js");

var _queryAll2 = _interopRequireDefault(_queryAll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param selector
 * @param from
 * @param callback
 * @param thisInstance
 * @returns {Node|boolean}
 */
var query = function query(selector, from, callback, thisInstance) {
  var elements = (0, _queryAll2.default)(selector, from, callback, thisInstance);
  return elements && elements[0] ? elements[0] : false;
};

exports.default = query;

/***/ }),

/***/ "./node_modules/animate.js/src/static/queryAll.js":
/*!********************************************************!*\
  !*** ./node_modules/animate.js/src/static/queryAll.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isNode = __webpack_require__(/*! ./isNode */ "./node_modules/animate.js/src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _typeOf = __webpack_require__(/*! ./typeOf */ "./node_modules/animate.js/src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _getDocument = __webpack_require__(/*! ./getDocument */ "./node_modules/animate.js/src/static/getDocument.js");

var _getDocument2 = _interopRequireDefault(_getDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var doc = (0, _getDocument2.default)();

var queryAll = function queryAll(selector, from, callback, thisInstance) {
    var elements = [];
    from = from || doc;

    if ((0, _isNode2.default)(selector)) return [selector];

    if ((0, _typeOf2.default)(from, 'string')) from = doc.querySelector(from);
    if (from) elements = [].slice.call(from.querySelectorAll(selector));

    if (callback) elements.forEach(function (element) {
        callback.call(thisInstance || {}, element);
    });

    return elements;
};

exports.default = queryAll;

/***/ }),

/***/ "./node_modules/animate.js/src/static/random.js":
/*!******************************************************!*\
  !*** ./node_modules/animate.js/src/static/random.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.randomItem = exports.randomHumanizeString = exports.randomString = exports.randomNumber = exports.randomColor = exports.random = undefined;

var _abc = __webpack_require__(/*! ./abc */ "./node_modules/animate.js/src/static/abc.js");

var random = exports.random = function random(min, max) {
    min = min || 0;
    max = max || 100;
    return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * Generate a random hex color
 * @returns {string}
 */
/**
 * Generate a random number
 * @param min
 * @param max
 * @returns {number}
 */
var randomColor = exports.randomColor = function randomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var i = void 0,
        color = '#';
    for (i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }return color;
};

var randomNumber = exports.randomNumber = function randomNumber() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;

    if (size > 16) {
        var i = Math.ceil(size / 16);
        var res = '';
        for (i; i > 0; i--) {
            res += Array(16).fill(0).map(function (i) {
                return Math.floor(Math.random() * 10);
            }).join('');
        }return res.slice(0, size);
    }
    return parseInt(Array(size).fill(0).map(function (i) {
        return Math.floor(Math.random() * 10);
    }).join(''));
};

var randomString = exports.randomString = function randomString() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
    var withNumbers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var i = void 0,
        string = '';
    var abs = withNumbers ? _abc.ABC + _abc.NUMBERS.toLowerCase().split(',') : _abc.ABC.toLowerCase().split(',');
    for (i = size; i > 0; i--) {
        string += abs[Math.floor(Math.random() * abs.length)];
    }
    return string;
};

var randomHumanizeString = exports.randomHumanizeString = function randomHumanizeString() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;

    var i = void 0,
        string = '';
    var consonant = _abc.LETTER_CONSONANT.toLowerCase().split(',');
    var vowel = _abc.LETTER_VOWEL.toLowerCase().split(',');
    var vowelFirst = Math.random() * 10 > 5;
    for (i = size / 2 + 1; i > 0; i--) {
        var s1 = consonant[Math.floor(Math.random() * consonant.length)];
        var s2 = vowel[Math.floor(Math.random() * vowel.length)];
        string += vowelFirst ? s1 + s2 : s2 + s1;
    }

    return string.substring(0, size);
};

/**
 * Return random item from array
 * @param arr
 * @returns {*}
 */
var randomItem = exports.randomItem = function randomItem(arr) {
    return Array.isArray(arr) ? arr[random(0, arr.length - 1)] : false;
};

exports.default = random;

/***/ }),

/***/ "./node_modules/animate.js/src/static/redirect.js":
/*!********************************************************!*\
  !*** ./node_modules/animate.js/src/static/redirect.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getLocation = __webpack_require__(/*! ./getLocation */ "./node_modules/animate.js/src/static/getLocation.js");

var _getLocation2 = _interopRequireDefault(_getLocation);

var _getDocument = __webpack_require__(/*! ./getDocument */ "./node_modules/animate.js/src/static/getDocument.js");

var _getDocument2 = _interopRequireDefault(_getDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var redirect = function redirect(to) {
    var loc = (0, _getLocation2.default)();
    var doc = (0, _getDocument2.default)();
    loc.href = to || doc.href;
};

exports.default = redirect;

/***/ }),

/***/ "./node_modules/animate.js/src/static/search.js":
/*!******************************************************!*\
  !*** ./node_modules/animate.js/src/static/search.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isNode = __webpack_require__(/*! ./isNode */ "./node_modules/animate.js/src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _queryAll = __webpack_require__(/*! ./queryAll */ "./node_modules/animate.js/src/static/queryAll.js");

var _queryAll2 = _interopRequireDefault(_queryAll);

var _query = __webpack_require__(/*! ./query */ "./node_modules/animate.js/src/static/query.js");

var _query2 = _interopRequireDefault(_query);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * search( 'ul > li',  'data-link', NodeElement);
 *
 * @param selector
 * @param attr
 * @param from
 * @returns {{}}
 */
var search = function search(selector, attr, from) {
    from = (0, _isNode2.default)(from) ? from : (0, _query2.default)(from);
    var i = 0,
        key = void 0,
        elements = {},
        queryElements = (0, _queryAll2.default)(selector, from || document.body);

    if (from.hasAttribute(attr)) {
        queryElements.push(from);
    }

    if (queryElements) {
        while (i < queryElements.length) {
            if (!attr) elements[i] = queryElements[i];else {
                if (queryElements[i].hasAttribute(attr)) {
                    key = queryElements[i].getAttribute(attr);
                    elements[key] = queryElements[i];
                }
            }
            i++;
        }
    }
    return elements;
};

exports.default = search;

/***/ }),

/***/ "./node_modules/animate.js/src/static/str2fragment.js":
/*!************************************************************!*\
  !*** ./node_modules/animate.js/src/static/str2fragment.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var str2fragment = function str2fragment(string) {
    if (document.createRange) return document.createRange().createContextualFragment(string);else {
        var i = void 0,
            fragment = document.createDocumentFragment(),
            container = document.createElement("div");

        container.innerHTML = string;
        while (i = container.firstChild) {
            fragment.appendChild(i);
        }return fragment;
    }
};

exports.default = str2fragment;

/***/ }),

/***/ "./node_modules/animate.js/src/static/str2node.js":
/*!********************************************************!*\
  !*** ./node_modules/animate.js/src/static/str2node.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _str2fragment = __webpack_require__(/*! ./str2fragment */ "./node_modules/animate.js/src/static/str2fragment.js");

var _str2fragment2 = _interopRequireDefault(_str2fragment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var str2node = function str2node(string) {
    var result = void 0;
    var fragment = (0, _str2fragment2.default)(string);

    switch (fragment.childElementCount) {
        case 0:
            break;
        case 1:
            result = fragment.firstElementChild;
            break;
        default:
            var container = document.createElement("span");
            container.appendChild(fragment);
            result = container;
    }
    return result;
};

exports.default = str2node;

/***/ }),

/***/ "./node_modules/animate.js/src/static/stylizer.js":
/*!********************************************************!*\
  !*** ./node_modules/animate.js/src/static/stylizer.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var stylizer = function stylizer(element, styles) {
    Object.keys(styles).forEach(function (key) {
        if (element.style[key] !== undefined) {
            element.style[key] = styles[key];
        }
    });
};

exports.default = stylizer;

/***/ }),

/***/ "./node_modules/animate.js/src/static/toCamelCase.js":
/*!***********************************************************!*\
  !*** ./node_modules/animate.js/src/static/toCamelCase.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var toCamelCase = function toCamelCase(characters) {
    var indexes = [];
    var string = characters.replace(/[_]/g, function (letter, index) {
        indexes.push(index - indexes.length);
        return '';
    });
    indexes.forEach(function (index) {
        var start = string.substring(0, index);
        var replace = string.substr(index, 1).toUpperCase();
        var end = string.substring(index + 1);
        string = start + replace + end;
    });
    return string;
};

exports.default = toCamelCase;

/***/ }),

/***/ "./node_modules/animate.js/src/static/toHTML.js":
/*!******************************************************!*\
  !*** ./node_modules/animate.js/src/static/toHTML.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @deprecated
 * @param value
 * @returns {boolean|Element}
 */
var toHTML = function toHTML(value) {
    if (value) {
        var type = 'text/html';
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(value, type);

        if (xmlDoc.documentElement && xmlDoc.body.firstElementChild) {
            return xmlDoc.body.firstElementChild;
        }
        return false;
    }
    return false;
};

exports.default = toHTML;

/***/ }),

/***/ "./node_modules/animate.js/src/static/toMinusCase.js":
/*!***********************************************************!*\
  !*** ./node_modules/animate.js/src/static/toMinusCase.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var toMinusCase = function toMinusCase(characters) {
    return characters.replace(/[A-Z]/g, function (letter, index) {
        return index === 0 ? letter.toLowerCase() : '-' + letter.toLowerCase();
    });
};

exports.default = toMinusCase;

/***/ }),

/***/ "./node_modules/animate.js/src/static/toObject.js":
/*!********************************************************!*\
  !*** ./node_modules/animate.js/src/static/toObject.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var toObject = function toObject(value) {
    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' ? JSON.parse(JSON.stringify(value)) : {};
};

exports.default = toObject;

/***/ }),

/***/ "./node_modules/animate.js/src/static/toSnakeCase.js":
/*!***********************************************************!*\
  !*** ./node_modules/animate.js/src/static/toSnakeCase.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var toSnakeCase = function toSnakeCase(characters) {
    return characters.replace(/[A-Z]/g, function (letter, index) {
        return index === 0 ? letter.toLowerCase() : '_' + letter.toLowerCase();
    });
    /*        return characters.split('').map((character, index) => {
                if (character === character.toUpperCase()) {
                    return (index > 0 ? '_':'') + character.toLowerCase();
                } else {
                    return character;
                }
            }).join('');*/
};

exports.default = toSnakeCase;

/***/ }),

/***/ "./node_modules/animate.js/src/static/toXML.js":
/*!*****************************************************!*\
  !*** ./node_modules/animate.js/src/static/toXML.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

/**
 * @deprecated
 * @param value
 * @returns {boolean|Element}
 */
var toXML = function toXML(value) {
    if (value) {
        var type = 'text/xml';
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(value, type);

        if (xmlDoc.documentElement && xmlDoc.documentElement.tagName !== 'html') {
            return xmlDoc.documentElement;
        }
        return false;
    }
    return false;
};

exports.default = toXML;

/***/ }),

/***/ "./node_modules/animate.js/src/static/trimSymbols.js":
/*!***********************************************************!*\
  !*** ./node_modules/animate.js/src/static/trimSymbols.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var trimSymbols = function trimSymbols(str, charlist) {
    var whitespace = [' ', '\n', '\r', '\t', '\f', '\x0b', '\xa0', '\u2000', '\u2001', '\u2002', '\u2003', '\u2004', '\u2005', '\u2006', '\u2007', '\u2008', '\u2009', '\u200A', '\u200B', '\u2028', '\u2029', '\u3000'].join('');
    var l = 0;
    var i = 0;
    str += '';
    if (charlist) {
        whitespace = (charlist + '').replace(/([[\]().?/*{}+$^:])/g, '$1');
    }
    l = str.length;
    for (i = 0; i < l; i++) {
        if (whitespace.indexOf(str.charAt(i)) === -1) {
            str = str.substring(i);
            break;
        }
    }
    l = str.length;
    for (i = l - 1; i >= 0; i--) {
        if (whitespace.indexOf(str.charAt(i)) === -1) {
            str = str.substring(0, i + 1);
            break;
        }
    }
    return whitespace.indexOf(str.charAt(0)) === -1 ? str : '';
};

exports.default = trimSymbols;

/***/ }),

/***/ "./node_modules/animate.js/src/static/typeOf.js":
/*!******************************************************!*\
  !*** ./node_modules/animate.js/src/static/typeOf.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeOfStrict = __webpack_require__(/*! ./typeOfStrict */ "./node_modules/animate.js/src/static/typeOfStrict.js");

var _typeOfStrict2 = _interopRequireDefault(_typeOfStrict);

var _isNode = __webpack_require__(/*! ./isNode */ "./node_modules/animate.js/src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var typeOf = function typeOf(value, type) {
    var simpleTypes = ['null', 'boolean', 'undefined', 'function', 'string', 'number', 'date', 'array', 'object'];
    var t = (0, _typeOfStrict2.default)(value).toLowerCase();
    if (simpleTypes.indexOf(t) === -1 && (typeof value === "undefined" ? "undefined" : _typeof(value)) === 'object') t = 'object';

    return typeof type === 'string' ? type.toLowerCase() === t : t;
};

exports.default = typeOf;

/***/ }),

/***/ "./node_modules/animate.js/src/static/typeOfStrict.js":
/*!************************************************************!*\
  !*** ./node_modules/animate.js/src/static/typeOfStrict.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var typeOfStrict = function typeOfStrict(value, type) {
    var t = Object.prototype.toString.call(value).slice(8, -1);
    return typeof type === 'string' ? type === t : t;
};

exports.default = typeOfStrict;

/***/ }),

/***/ "./node_modules/animate.js/src/static/uniqArray.js":
/*!*********************************************************!*\
  !*** ./node_modules/animate.js/src/static/uniqArray.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var uniqArray = function uniqArray(value, index, self) {
    return self.indexOf(value) === index;
};

exports.default = uniqArray;

/***/ }),

/***/ "./node_modules/animate.js/src/static/uri.js":
/*!***************************************************!*\
  !*** ./node_modules/animate.js/src/static/uri.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getLocation = __webpack_require__(/*! ./getLocation */ "./node_modules/animate.js/src/static/getLocation.js");

var _getLocation2 = _interopRequireDefault(_getLocation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uri = function uri(_uri) {
    var loc = (0, _getLocation2.default)();
    _uri = _uri || loc.pathname;
    _uri = _uri.replace(/\/+/ig, '/');
    return _uri.length > 1 && _uri.slice(0, 1) !== '/' ? '/' + _uri : _uri;
};

exports.default = uri;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../demo/game-frame/index */ "./demo/game-frame/index.js");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGVtby9nYW1lLWZyYW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL2RlbW8vZ2FtZS1mcmFtZS9zcmMvQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5qcy9zcmMvY29tcG9uZW50cy9BbmltYXRpb25GcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5qcy9zcmMvY29tcG9uZW50cy9DbGlwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmpzL3NyYy9jb21wb25lbnRzL0NvbG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmpzL3NyYy9jb21wb25lbnRzL0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5qcy9zcmMvY29tcG9uZW50cy9FbnRlckZyYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmpzL3NyYy9jb21wb25lbnRzL0V2ZW50TWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5qcy9zcmMvY29tcG9uZW50cy9GcmFtZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FuaW1hdGUuanMvc3JjL2NvbXBvbmVudHMvR3JhcGhpYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5qcy9zcmMvY29tcG9uZW50cy9LZXlib2FyZEV2ZW50TWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5qcy9zcmMvY29tcG9uZW50cy9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FuaW1hdGUuanMvc3JjL2NvbXBvbmVudHMvTWF0cml4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmpzL3NyYy9jb21wb25lbnRzL01vdmVDbGlwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmpzL3NyYy9jb21wb25lbnRzL1BhaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmpzL3NyYy9jb21wb25lbnRzL1BhaW50VHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmpzL3NyYy9jb21wb25lbnRzL1BsYW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmpzL3NyYy9jb21wb25lbnRzL1BvaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmpzL3NyYy9jb21wb25lbnRzL1JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5qcy9zcmMvY29tcG9uZW50cy9Sb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FuaW1hdGUuanMvc3JjL2NvbXBvbmVudHMvUm94eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5qcy9zcmMvY29tcG9uZW50cy9Sb3h5TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FuaW1hdGUuanMvc3JjL2NvbXBvbmVudHMvU2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FuaW1hdGUuanMvc3JjL2NvbXBvbmVudHMvU3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FuaW1hdGUuanMvc3JjL2NvbXBvbmVudHMvU3RlcHNTY2VuZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5qcy9zcmMvY29tcG9uZW50cy9UaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5qcy9zcmMvY29tcG9uZW50cy9UcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FuaW1hdGUuanMvc3JjL2Z1bmN0aW9uL2lzT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmpzL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5qcy9zcmMvc3RhdGljL2FiYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5qcy9zcmMvc3RhdGljL2FkZENzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5qcy9zcmMvc3RhdGljL2F0dHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FuaW1hdGUuanMvc3JjL3N0YXRpYy9jbG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5qcy9zcmMvc3RhdGljL2NvcHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FuaW1hdGUuanMvc3JjL3N0YXRpYy9jcmVhdGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5qcy9zcmMvc3RhdGljL2NyZWF0ZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FuaW1hdGUuanMvc3JjL3N0YXRpYy9jcmVhdGVGcmFnbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5qcy9zcmMvc3RhdGljL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5qcy9zcmMvc3RhdGljL2RlY29kZUdldFF1ZXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmpzL3NyYy9zdGF0aWMvZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5qcy9zcmMvc3RhdGljL2RlZmluZWRJbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5qcy9zcmMvc3RhdGljL2RvbUxvYWRlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5qcy9zcmMvc3RhdGljL2VhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FuaW1hdGUuanMvc3JjL3N0YXRpYy9lbmNvZGVHZXRRdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5qcy9zcmMvc3RhdGljL2V4aXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5qcy9zcmMvc3RhdGljL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5qcy9zcmMvc3RhdGljL2ZpbmRPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FuaW1hdGUuanMvc3JjL3N0YXRpYy9maW5kT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5qcy9zcmMvc3RhdGljL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5qcy9zcmMvc3RhdGljL2dldERvY3VtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmpzL3NyYy9zdGF0aWMvZ2V0TG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FuaW1hdGUuanMvc3JjL3N0YXRpYy9nZXRXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FuaW1hdGUuanMvc3JjL3N0YXRpYy9oYXNMb3dlckNhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FuaW1hdGUuanMvc3JjL3N0YXRpYy9odHRwUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5qcy9zcmMvc3RhdGljL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmpzL3NyYy9zdGF0aWMvaW5qZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmpzL3NyYy9zdGF0aWMvaXNEZWZpbmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmpzL3NyYy9zdGF0aWMvaXNFbXB0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5qcy9zcmMvc3RhdGljL2lzSFRNTFN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5qcy9zcmMvc3RhdGljL2lzTG93ZXJDYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmpzL3NyYy9zdGF0aWMvaXNOb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmpzL3NyYy9zdGF0aWMvaXNOdW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FuaW1hdGUuanMvc3JjL3N0YXRpYy9pc1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5qcy9zcmMvc3RhdGljL2lzVXBwZXJDYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmpzL3NyYy9zdGF0aWMvbG9hZEJsb2JmaWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmpzL3NyYy9zdGF0aWMvbG9hZENTUy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5qcy9zcmMvc3RhdGljL2xvYWRKUy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5qcy9zcmMvc3RhdGljL2xvYWRKU09OLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmpzL3NyYy9zdGF0aWMvbG9hZEpTU3luYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5qcy9zcmMvc3RhdGljL2xvYWRUZXh0ZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5qcy9zcmMvc3RhdGljL21lcmdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmpzL3NyYy9zdGF0aWMvbm9kZTJzdHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FuaW1hdGUuanMvc3JjL3N0YXRpYy9udW1iZXIyc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmpzL3NyYy9zdGF0aWMvb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FuaW1hdGUuanMvc3JjL3N0YXRpYy9wb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5qcy9zcmMvc3RhdGljL3Bvc2l0aW9uTW91c2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FuaW1hdGUuanMvc3JjL3N0YXRpYy9xdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5qcy9zcmMvc3RhdGljL3F1ZXJ5QWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmpzL3NyYy9zdGF0aWMvcmFuZG9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmpzL3NyYy9zdGF0aWMvcmVkaXJlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FuaW1hdGUuanMvc3JjL3N0YXRpYy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FuaW1hdGUuanMvc3JjL3N0YXRpYy9zdHIyZnJhZ21lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FuaW1hdGUuanMvc3JjL3N0YXRpYy9zdHIybm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5qcy9zcmMvc3RhdGljL3N0eWxpemVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmpzL3NyYy9zdGF0aWMvdG9DYW1lbENhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FuaW1hdGUuanMvc3JjL3N0YXRpYy90b0hUTUwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FuaW1hdGUuanMvc3JjL3N0YXRpYy90b01pbnVzQ2FzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5qcy9zcmMvc3RhdGljL3RvT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmpzL3NyYy9zdGF0aWMvdG9TbmFrZUNhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FuaW1hdGUuanMvc3JjL3N0YXRpYy90b1hNTC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5qcy9zcmMvc3RhdGljL3RyaW1TeW1ib2xzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmpzL3NyYy9zdGF0aWMvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmpzL3NyYy9zdGF0aWMvdHlwZU9mU3RyaWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmpzL3NyYy9zdGF0aWMvdW5pcUFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmpzL3NyYy9zdGF0aWMvdXJpLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3BsaXQiLCJmaWx0ZXIiLCJ2IiwicmV2ZXJzZSIsIkNvbnRyb2xsZXIiLCJjb25zb2xlIiwibG9nIiwiQ2xpcCIsIkFuaW1hdGUiLCJDb21wb25lbnQiLCJLZXlib2FyZEV2ZW50TWFuYWdlciIsIk1vdmVDbGlwIiwiU2NlbmUiLCJTdGVwc1NjZW5lIiwiVGltZXIiLCJSb3h5TGlzdGVuZXIiLCJSb3h5IiwiQW5pbWF0aW9uRnJhbWUiLCJMb2FkZXIiLCJNYXRyaXgiLCJQb2ludCIsIlJlY3RhbmdsZSIsIlJvdXRlciIsInF1ZXJ5IiwiU3RhdGljIiwic2VhcmNoIiwiaW5qZWN0IiwidHlwZU9mIiwidXJpIiwiY29weSIsImVhY2giLCJvbiIsIkNPTE9SX0JBU0VfREciLCJDT0xPUl9CQVNFX0JPUkRFUiIsImRpc3BsYXkiLCJ0b3AiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm94U2l6aW5nIiwidXNlclNlbGVjdCIsInBvc2l0aW9uIiwicmlnaHQiLCJ3aWR0aCIsImhlaWdodCIsInRyYW5zZm9ybSIsInRleHRBbGlnbiIsImNvbG9yIiwiYm9yZGVyIiwiYmFja2dyb3VuZENvbG9yIiwiY3Vyc29yIiwidHJhbnNpdGlvbiIsIkdhbWVDb21wb25lbnQiLCJpZCIsInRlbXBsYXRlIiwicGFyYW1zIiwiYWN0aXZlIiwiaW5pdCIsImNvbXBsZXRlIiwiYWN0aW9ucyIsImVsZW1lbnRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJNZW51Q29tcG9uZW50IiwiQnV0dG9uQ2xpcCIsImVsZW1lbnQiLCJCdXR0b25Db21wb25lbnQiLCJTdGFnZSIsInNjZW5lIiwiZXhlY3V0ZSIsInJvb3QiLCJyZXF1ZXN0SWQiLCJzdGFydHBhbHkiLCJwYXVzZWQiLCJjYWxsYmFjayIsImRlbGF5IiwiZHVyYXRpb24iLCJwcm9ncmVzcyIsInN0ZXAiLCJ0aW1lc3RhbXAiLCJjYWxsIiwiY2FuY2VsIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicGF1c2UiLCJzdGFydCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwib25Jbml0Q2FsbGJhY2siLCJOb2RlIiwicGFyZW50IiwicGFyZW50Tm9kZSIsIngiLCJ5Iiwic2V0QXR0cmlidXRlIiwibW92ZVRvIiwicGFyZW50RWxlbWVudCIsImNhbGN1bGF0ZSIsInJlX3Jvb3QiLCJyZV9wYXJlbnQiLCJwcm9wcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiaW5jbHVkZXMiLCJjb3B5VG8iLCJjbG9uZSIsInN0eWxlIiwib2JqZWN0IiwiZWxlbSIsImFwcGVuZCIsInRleHRDb250ZW50IiwiQXJyYXkiLCJpc0FycmF5IiwiZSIsInJlbW92ZUNoaWxkIiwiVHlwZUVycm9yIiwiY2xlYXIiLCJDb2xvciIsImFsaWNlQmx1ZSIsImFudGlxdWVXaGl0ZSIsImFxdWEiLCJhcXVhbWFyaW5lIiwiYXp1cmUiLCJiZWlnZSIsImJpc3F1ZSIsImJsYWNrIiwiYmxhbmNoZWRBbG1vbmQiLCJibHVlIiwiYmx1ZVZpb2xldCIsImJyb3duIiwiYnVybHlXb29kIiwiY2FkZXRCbHVlIiwiY2hhcnRyZXVzZSIsImNob2NvbGF0ZSIsImNvcmFsIiwiY29ybmZsb3dlckJsdWUiLCJjb3Juc2lsayIsImNyaW1zb24iLCJjeWFuIiwiZGFya0JsdWUiLCJkYXJrQ3lhbiIsImRhcmtHb2xkZW5Sb2QiLCJkYXJrR3JheSIsImRhcmtHcmV5IiwiZGFya0dyZWVuIiwiZGFya0toYWtpIiwiZGFya01hZ2VudGEiLCJkYXJrT2xpdmVHcmVlbiIsImRhcmtPcmFuZ2UiLCJkYXJrT3JjaGlkIiwiZGFya1JlZCIsImRhcmtTYWxtb24iLCJkYXJrU2VhR3JlZW4iLCJkYXJrU2xhdGVCbHVlIiwiZGFya1NsYXRlR3JheSIsImRhcmtTbGF0ZUdyZXkiLCJkYXJrVHVycXVvaXNlIiwiZGFya1Zpb2xldCIsImRlZXBQaW5rIiwiZGVlcFNreUJsdWUiLCJkaW1HcmF5IiwiZGltR3JleSIsImRvZGdlckJsdWUiLCJmaXJlQnJpY2siLCJmbG9yYWxXaGl0ZSIsImZvcmVzdEdyZWVuIiwiZnVjaHNpYSIsImdhaW5zYm9ybyIsImdob3N0V2hpdGUiLCJnb2xkIiwiZ29sZGVuUm9kIiwiZ3JheSIsImdyZXkiLCJncmVlbiIsImdyZWVuWWVsbG93IiwiaG9uZXlEZXciLCJob3RQaW5rIiwiaW5kaWFuUmVkIiwiaW5kaWdvIiwiaXZvcnkiLCJraGFraSIsImxhdmVuZGVyIiwibGF2ZW5kZXJCbHVzaCIsImxhd25HcmVlbiIsImxlbW9uQ2hpZmZvbiIsImxpZ2h0Qmx1ZSIsImxpZ2h0Q29yYWwiLCJsaWdodEN5YW4iLCJsaWdodEdvbGRlblJvZFllbGxvdyIsImxpZ2h0R3JheSIsImxpZ2h0R3JleSIsImxpZ2h0R3JlZW4iLCJsaWdodFBpbmsiLCJsaWdodFNhbG1vbiIsImxpZ2h0U2VhR3JlZW4iLCJsaWdodFNreUJsdWUiLCJsaWdodFNsYXRlR3JheSIsImxpZ2h0U2xhdGVHcmV5IiwibGlnaHRTdGVlbEJsdWUiLCJsaWdodFllbGxvdyIsImxpbWUiLCJsaW1lR3JlZW4iLCJsaW5lbiIsIm1hZ2VudGEiLCJtYXJvb24iLCJtZWRpdW1BcXVhTWFyaW5lIiwibWVkaXVtQmx1ZSIsIm1lZGl1bU9yY2hpZCIsIm1lZGl1bVB1cnBsZSIsIm1lZGl1bVNlYUdyZWVuIiwibWVkaXVtU2xhdGVCbHVlIiwibWVkaXVtU3ByaW5nR3JlZW4iLCJtZWRpdW1UdXJxdW9pc2UiLCJtZWRpdW1WaW9sZXRSZWQiLCJtaWRuaWdodEJsdWUiLCJtaW50Q3JlYW0iLCJtaXN0eVJvc2UiLCJtb2NjYXNpbiIsIm5hdmFqb1doaXRlIiwibmF2eSIsIm9sZExhY2UiLCJvbGl2ZSIsIm9saXZlRHJhYiIsIm9yYW5nZSIsIm9yYW5nZVJlZCIsIm9yY2hpZCIsInBhbGVHb2xkZW5Sb2QiLCJwYWxlR3JlZW4iLCJwYWxlVHVycXVvaXNlIiwicGFsZVZpb2xldFJlZCIsInBhcGF5YVdoaXAiLCJwZWFjaFB1ZmYiLCJwZXJ1IiwicGluayIsInBsdW0iLCJwb3dkZXJCbHVlIiwicHVycGxlIiwicmViZWNjYVB1cnBsZSIsInJlZCIsInJvc3lCcm93biIsInJveWFsQmx1ZSIsInNhZGRsZUJyb3duIiwic2FsbW9uIiwic2FuZHlCcm93biIsInNlYUdyZWVuIiwic2VhU2hlbGwiLCJzaWVubmEiLCJzaWx2ZXIiLCJza3lCbHVlIiwic2xhdGVCbHVlIiwic2xhdGVHcmF5Iiwic2xhdGVHcmV5Iiwic25vdyIsInNwcmluZ0dyZWVuIiwic3RlZWxCbHVlIiwidGFuIiwidGVhbCIsInRoaXN0bGUiLCJ0b21hdG8iLCJ0dXJxdW9pc2UiLCJ2aW9sZXQiLCJ3aGVhdCIsIndoaXRlIiwid2hpdGVTbW9rZSIsInllbGxvdyIsInllbGxvd0dyZWVuIiwiY29uZmlnIiwibGlzdCIsInJhbmRvbU5hbWUiLCJ0b0xvd2VyQ2FzZSIsInN1YnN0cmluZyIsInRvVXBwZXJDYXNlIiwiY29tcCIsImNyZWF0ZSIsImNvbXBvbmVudCIsImNvbXBvbmVudHMiLCJjb21wb25lbnRDaGlsZHJlbiIsImNoaWxkcmVuIiwiZmluZCIsImNsb25lZCIsImNsb25lTm9kZSIsInRvU3RyaW5nIiwiYmVmb3JlIiwiaW5pdGlhbGl6ZWQiLCJtZXRob2RzIiwidmFsdWVzIiwibGVuZ3RoIiwiYmluZCIsImhhc093blByb3BlcnR5IiwiZGF0YSIsInBhcmVudENvbXBvbmVudCIsInB1c2giLCJhdHRyIiwibmFtZSIsInJlcGxhY2UiLCJ0ZW1wbGF0ZURhdGFFbGVtZW50cyIsInVwZGF0ZVRlbXBsYXRlRGF0YUVsZW1lbnRzIiwidGVtcGxhdGVEYXRhRWxlbWVudHNFbmFibGVkIiwidGVtcGxhdGVEYXRhRWxlbWVudHNBdHRyaWJ1dGVzIiwiY29tcGxldGVkIiwib3ZlcnJpZGUiLCJub2RlIiwiQ09NUE9ORU5UX0RBVEFfQVRUUklCVVRFUyIsIkVudGVyRnJhbWUiLCJwYXJhbWV0ZXJzIiwiZGVmaW5lZFBhcmFtZXRlcnMiLCJjb21wdXRlZCIsImZwcyIsIm5vdyIsImVsYXBzZWQiLCJ0aGVuIiwiZnBzSW50ZXJ2YWwiLCJmcmFtZUNvdW50IiwiZ2xvYmFsIiwiZGV0YWlsIiwiQ3VzdG9tRXZlbnQiLCJFTlRFUl9GUkFNRSIsImV2ZW50VGFyZ2V0IiwiRXZlbnRUYXJnZXQiLCJjb3VudCIsInZhbHVlIiwiY29tcHV0ZWRDYWxsYmFjayIsIkRhdGUiLCJzdGFydFRpbWUiLCJhbmltYXRpb24iLCJkaXNwYXRjaCIsImRpc3BhdGNoRXZlbnQiLCJyZW1vdmVMaXN0ZW5lciIsImxpc3RlbmVyIiwib3B0aW9ucyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRMaXN0ZW5lciIsImluZGV4T2YiLCJpbnN0YW5jZSIsIkV2ZW50TWFuYWdlciIsInN1cGVyIiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsInZlcnNpb24iLCJldmVudHNUeXBlIiwiYWRkRXZlbnQiLCJkZXRhaWxzIiwicmVtb3ZlRXZlbnQiLCJ0eXBlIiwidXNlQ2FwdHVyZSIsIkZyYW1lcyIsIkdyYXBoaWMiLCJjYW52YXMiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImRyYXdDYWxsYmFjayIsInByb3BlcnRpZXMiLCJkZWZhdWx0IiwiYXBwbHkiLCJmb3JtYXRzIiwiYWxwaGEiLCJ0aGlja25lc3MiLCJjYXAiLCJqb2luIiwiZm9udCIsIkNBUFMiLCJCVVRUIiwiUk9VTkQiLCJTUVVBUkUiLCJKT0lOUyIsIkJFVkVMIiwiTUlURVIiLCJ0ZXh0IiwibWVzc2FnZSIsImZvcm1hdHNBcHBseSIsImZpbGxUZXh0IiwibWFwIiwiY29udmVydE5hbWUiLCJ1bmRlZmluZWQiLCJiZWdpbiIsImJlZ2luUGF0aCIsImNsb3NlIiwiY2xvc2VQYXRoIiwic2F2ZSIsInJlc3RvcmUiLCJzaGFkb3ciLCJibHVyIiwic2hhZG93T2Zmc2V0WCIsInNoYWRvd09mZnNldFkiLCJzaGFkb3dCbHVyIiwic2hhZG93Q29sb3IiLCJjbGVhclJlY3QiLCJjbGVhclNoYWRvdyIsImNpcmNsZSIsInJhZGl1cyIsImludGVybmFsUmVjdFJvdW5kIiwicmVjdCIsImFyY1RvIiwicmVjdFJvdW5kIiwic2hhcGUiLCJwb2ludHMiLCJpIiwidGVtcCIsInBvc2l0aW9ucyIsInAiLCJsaW5lVG8iLCJsaW5lIiwieDEiLCJ5MSIsIngyIiwieTIiLCJlbGxpcHNlIiwicmFkaXVzWCIsInJhZGl1c1kiLCJyb3RhdGlvbiIsInN0YXJ0QW5nbGUiLCJlbmRBbmdsZSIsImFudGljbG9ja3dpc2UiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJzY2FsZSIsImFyYyIsInN0cm9rZSIsInN0cm9rZVN0eWxlIiwiZmlsbCIsImZpbGxTdHlsZSIsImRpcmVjdGlvbiIsImdsb2JhbEFscGhhIiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwiaW1hZ2VTbW9vdGhpbmdFbmFibGVkIiwiaW1hZ2VTbW9vdGhpbmdRdWFsaXR5IiwibGluZUNhcCIsImxpbmVEYXNoT2Zmc2V0IiwibGluZUpvaW4iLCJsaW5lV2lkdGgiLCJtaXRlckxpbWl0IiwidGV4dEJhc2VsaW5lIiwiRXZlbnRDb2RlcyIsIkV2ZW50Q29kZXNOYW1lcyIsIkV2ZW50S2V5cyIsIkV2ZW50S2V5c05hbWVzIiwic3RvcmFnZSIsImJhc2VDYWxsYmFja3NMaXN0IiwiYWRkU3RvcmFnZSIsImJhc2VDYWxsYmFjayIsImtleUNvZGUiLCJwYXJzZUludCIsImVhY2hDYWxsYmFja3NMaXN0IiwiZWFjaENhbGxiYWNrIiwic2V0dXBMaXN0ZW5lcnMiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXJzIiwiY29kZVRvS2V5Q29kZSIsIkVycm9yIiwid2l0aENvbmRpdGlvbktleSIsInByZXNzIiwidXAiLCJkb3duIiwiZ2V0RXZlbnRLZXlCeUV2ZW50Q29kZSIsImV2ZW50Q29kZSIsImN1cnJlbnRFdmVudEtleSIsIndoaWNoIiwiaW5kZXgiLCJnZXRFdmVudENvZGVCeUV2ZW50S2V5IiwiZXZlbnRLZXkiLCJjdXJyZW50RXZlbnRDb2RlIiwiZ2V0V2hpY2hCeUV2ZW50Q29kZSIsImdldEV2ZW50Q29kZUJ5V2hpY2giLCJqc29uIiwianNvbnMiLCJqYXZhc2NyaXB0IiwiaW1hZ2VzIiwiYXVkaW9zIiwidmlkZW9zIiwidmlkZW8iLCJzcmMiLCJvbmVycm9yIiwiZmV0Y2giLCJyZXNwb25zZSIsImNhdGNoIiwiZXJyb3IiLCJzcmNzIiwib2JqIiwiaXRlbSIsIk1hdGgiLCJyYW5kb20iLCJzbGljZSIsInNjcmlwdHMiLCJpdGVyYXRvciIsInNjcmlwdCIsImNyZWF0ZUVsZW1lbnQiLCJzdWJzdHIiLCJvbmxvYWQiLCJoZWFkIiwiaW1ncyIsImltZyIsImF1ZGlvIiwicHJlbG9hZCIsIm0xMSIsIm0xMiIsIm0yMSIsIm0yMiIsImd4IiwiZ3kiLCJjbGlwIiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsImNvbmYiLCJhc3NpZ24iLCJtYyIsIlBhaW50IiwicHJvcGVydGllc19lbmFibGVkIiwibWF0cml4IiwiY2FudmFzTWF0cml4IiwiY2FudmFzVHJhbnNmb3JtIiwiZHgiLCJkeSIsIkRPTU1hdHJpeCIsImZyb21NYXRyaXgiLCJzZXRUcmFuc2Zvcm0iLCJjYW52YXNUcmFuc2xhdGUiLCJzZXRUcmFuc2xhdGUiLCJwcm9wIiwiY3VycmVudFRyYW5zZm9ybSIsIlBhaW50VHJhbnNmb3JtIiwidHJhbnNmb3JtX29iaiIsInRyYW5zZm9ybV9hcnIiLCJ0cmFuc2Zvcm1fc3RyaW5nIiwidXBkYXRlIiwicmVzZWFyY2giLCJtZXRob2QiLCJtdWx0aXBseSIsImV4dCIsIm1hdGNoIiwibnVtIiwicGFyYW0iLCJ0cmltIiwibWF0Y2hlZCIsImZ1bmN0aW9uUGFyYW1ldGVycyIsIkZJUlNUX0lURU1fVE9fSU5URUdFUiIsIlBsYW50IiwiY29uZmlndXJhdGlvbiIsIk1FVEhPRFMiLCJDT05GSUdVUkVEIiwiQ09NUExFVEUiLCJSRU5ERVIiLCJQUk9QUyIsIlBST1AiLCJJTklUIiwiY29uZmlndXJlZCIsInRvQXJyYXkiLCJmcm9tIiwiaGFzaCIsInJvdXRlcyIsInRvIiwiaXMiLCJwYXlsb2FkIiwicHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzIiwicHJveHkiLCJQcm94eSIsImdldCIsInNldCIsInJlc3VsdCIsIm9ic2VydmUiLCJnZXRQcm94eSIsIl9fYWN0aW9uX18iLCJhY3Rpb25zTmFtZXMiLCJldmVudE5hbWUiLCJyeCIsImV2ZW50Q3Vyc29yIiwiY29tbXVuaXR5X2FyZ3VtZW50cyIsImN1cnJlbnQiLCJzY2VuZXMiLCJhdHRycyIsImdldEN1cnJlbnRTY2VuZSIsIm5leHQiLCJsZXN0Iiwib3BlbiIsInNob3ciLCJydW4iLCJjb25zdHJ1Y3RvciIsIlN0YWdlRmFjdG9yeSIsInN0ZXBzIiwiaXRlcmF0aW9uIiwibG9vcCIsInN0ZXBfaXRlcmF0aW9uIiwic3RlcF9zdG9wIiwic3RlcF9jYWxsYmFja19lYWNoIiwic3RlcF9jYWxsYmFja3MiLCJwbGF5Iiwic3RvcCIsImVuZCIsIm1zIiwic2V0VGltZW91dCIsImdvdG8iLCJlYWNoU3RlcHMiLCJjdXJyZW50Q2FsbGJhY2tPYmplY3QiLCJyZXBlYXQiLCJ0aGlzSW5zdGFuY2UiLCJ0aGlzSW5zdCIsImlzTmFOIiwic2V0SW50ZXJ2YWwiLCJjbGVhclRpbWVvdXQiLCJjbGVhckludGVydmFsIiwiVHJhbnNmb3JtIiwiaXNPYmplY3QiLCJSZWdFeHAiLCJTdHJpbmciLCJOdW1iZXIiLCJSQURJQU4iLCJERUdSRUVfQVNfUkFESUFOIiwiREVHUkVFXzM2MF9BU19SQURJQU4iLCJQSSIsIlJBRF9UT19ERUdSRUVTIiwiVXRpbCIsIkxFVFRFUl9DT05TT05BTlQiLCJMRVRURVJfVk9XRUwiLCJBQkMiLCJOVU1CRVJTIiwiQU1QRVJTQU5EIiwiYWJjIiwiYWRkQ3NzIiwiY3NzU3RyaW5nIiwic2VsZWN0b3IiLCJjc3MiLCJ0eXBlX2VsZW1lbnQiLCJhcmd1bWVudHMiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJGdW5jdGlvbiIsIkJvb2xlYW4iLCJjcmVhdGVBcnJheSIsImFyciIsInIiLCJ0YWciLCJpbm5lciIsImlzX2F0dHIiLCJpbnNlcnRfaHRtbCIsImluc2VydEFkamFjZW50SFRNTCIsImluc2VydF9jaGlsZCIsImluc2VydCIsImsiLCJjcmVhdGVGcmFnbWVudCIsImZyYWdtZW50IiwidHlwZVNlbGVjdG9yIiwidHlwZVByb3BlcnRpZXMiLCJwYXJzZSIsInN0ciIsInAxIiwicDIiLCJwbiIsIml4IiwibyIsImRlY29kZUdldFF1ZXJ5IiwicGFpcnMiLCJwYWlyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZGVmaW5lZCIsImRlZmluZWRJbiIsInN0YWNrIiwiZG9tTG9hZGVkIiwiZG9jIiwicXVlcnlTZWxlY3RvciIsImEiLCJOb2RlTGlzdCIsImxvb3BzIiwiZ2V0UGFyZW50IiwiZW5jb2RlR2V0UXVlcnkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJleGlzdHMiLCJleHRlbmQiLCJkZXN0aW5hdGlvbiIsInNvdXJjZSIsIl9fIiwicHJvdG90eXBlIiwiZXh0ZW5kUmVjdXJzaXZlIiwicHJvcGVydHkiLCJmaW5kT2JqZWN0IiwiYXR0clZhbHVlIiwidG1wIiwiZmluZE9iamVjdHMiLCJmaW5kcyIsImZvcm1hdCIsInN0cmluZyIsIm51bWJlclJlZ0V4cCIsInN0cmluZ1JlZ0V4cCIsInJlZyIsIm51bWJlciIsImdldERvY3VtZW50IiwiZ2V0TG9jYXRpb24iLCJnZXRXaW5kb3ciLCJoYXNMb3dlckNhc2UiLCJjaGFyYWN0ZXIiLCJsb3dlcnMiLCJjaGFyIiwiY29kZSIsImNoYXJDb2RlQXQiLCJodHRwUmVxdWVzdCIsInNlbmREYXRhIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJhY3Rpb24iLCJ1cmwiLCJocmVmIiwiaGVhZGVycyIsInVzZUVuY29kZSIsInVzZUZvcm1EYXRhIiwiYXN5bmMiLCJ1c2VyIiwicGFzc3dvcmQiLCJjb25jYXRlU3RyaW5nIiwiRm9ybURhdGEiLCJIVE1MRm9ybUVsZW1lbnQiLCJzZXRSZXF1ZXN0SGVhZGVyIiwib25sb2FkZW5kIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0Iiwic2VuZE9wdGlvbnMiLCJzZW5kIiwic3RyMm5vZGUiLCJzdHIyZnJhZ21lbnQiLCJub2RlMnN0ciIsInF1ZXJ5QWxsIiwiaXNFbXB0eSIsImlzTm9kZSIsImxvYWRDU1MiLCJsb2FkSlMiLCJsb2FkSlNTeW5jIiwibWVyZ2UiLCJudW1iZXIyc3RyaW5nIiwicG9zaXRpb25Nb3VzZSIsInJhbmRvbUNvbG9yIiwicmFuZG9tSXRlbSIsInJhbmRvbU51bWJlciIsInJhbmRvbVN0cmluZyIsInJhbmRvbUh1bWFuaXplU3RyaW5nIiwicmVkaXJlY3QiLCJ0eXBlT2ZTdHJpY3QiLCJ0b09iamVjdCIsImlzSFRNTFN0cmluZyIsImlzU3RyaW5nIiwiaXNEZWZpbmVkIiwibG9hZEJsb2JmaWxlIiwibG9hZEpTT04iLCJsb2FkVGV4dGZpbGUiLCJ0b0hUTUwiLCJ0b1hNTCIsInN0eWxpemVyIiwidW5pcUFycmF5IiwiaXNOdW1iZXIiLCJ0cmltU3ltYm9scyIsImlzTG93ZXJDYXNlIiwiaXNVcHBlckNhc2UiLCJ0b0NhbWVsQ2FzZSIsInRvU25ha2VDYXNlIiwidG9NaW51c0Nhc2UiLCJpbm5lckhUTUwiLCJ0cnVlc3QiLCJkaXYiLCJjaGlsZEVsZW1lbnRDb3VudCIsImlzTG93ZXJDYXNlMiIsIm5vZGVUeXBlIiwiVEVYVF9OT0RFIiwiRUxFTUVOVF9OT0RFIiwiRE9DVU1FTlRfRlJBR01FTlRfTk9ERSIsIkRPQ1VNRU5UX05PREUiLCJlcnIiLCJpc1VwcGVyQ2FzZTIiLCJibG9iIiwibGluayIsInJlbCIsImRvY3VtZW50RWxlbWVudCIsIm9iamVjdDEiLCJvYmplY3QyIiwiY29udGFpbmVyIiwiYWJzIiwicG93IiwiYnViYmxlIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJzY3JvbGxMZWZ0IiwicGFnZVhPZmZzZXQiLCJjbGllbnRUb3AiLCJjbGllbnRMZWZ0Iiwicm91bmQiLCJsZWZ0Iiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJib3R0b20iLCJvZmZzZXRUb3AiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0UGFyZW50IiwiTW91c2VFdmVudCIsImNsaWVudFgiLCJjbGllbnRZIiwicXVlcnlTZWxlY3RvckFsbCIsIm1pbiIsIm1heCIsImZsb29yIiwibGV0dGVycyIsInNpemUiLCJjZWlsIiwicmVzIiwid2l0aE51bWJlcnMiLCJjb25zb25hbnQiLCJ2b3dlbCIsInZvd2VsRmlyc3QiLCJzMSIsInMyIiwibG9jIiwicXVlcnlFbGVtZW50cyIsImhhc0F0dHJpYnV0ZSIsImNyZWF0ZVJhbmdlIiwiY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50IiwiZmlyc3RDaGlsZCIsImZpcnN0RWxlbWVudENoaWxkIiwic3R5bGVzIiwiY2hhcmFjdGVycyIsImluZGV4ZXMiLCJsZXR0ZXIiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJ4bWxEb2MiLCJwYXJzZUZyb21TdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwidGFnTmFtZSIsImNoYXJsaXN0Iiwid2hpdGVzcGFjZSIsImwiLCJjaGFyQXQiLCJzaW1wbGVUeXBlcyIsInQiLCJzZWxmIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVQsQ0FBa0JDLEtBQWxCLENBQXdCLEdBQXhCLEVBQTZCQyxNQUE3QixDQUFvQyxVQUFDQyxDQUFEO0FBQUEsV0FB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ZW1vLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IENvbnRyb2xsZXIgZnJvbSAnLi9zcmMvQ29udHJvbGxlcic7XG5cbmlmIChsb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpLmZpbHRlcigodikgPT4gdikucmV2ZXJzZSgpWzBdID09PSAnZ2FtZS1mcmFtZScpIHtcbiAgICBDb250cm9sbGVyKCk7XG59IiwiaW1wb3J0IEFuaW1hdGUgZnJvbSBcImFuaW1hdGUuanMvc3JjXCI7XG5pbXBvcnQgU3RhdGljIGZyb20gXCJhbmltYXRlLmpzL3NyYy9zdGF0aWNcIjtcbmltcG9ydCBkb21Mb2FkZWQgZnJvbSBcImFuaW1hdGUuanMvc3JjL3N0YXRpYy9kb21Mb2FkZWRcIjtcbmltcG9ydCBhZGRDc3MgZnJvbSBcImFuaW1hdGUuanMvc3JjL3N0YXRpYy9hZGRDc3NcIjtcbmltcG9ydCBTdGFnZSBmcm9tIFwiYW5pbWF0ZS5qcy9zcmMvY29tcG9uZW50cy9TdGFnZVwiO1xuaW1wb3J0IFBsYW50IGZyb20gXCJhbmltYXRlLmpzL3NyYy9jb21wb25lbnRzL1BsYW50XCI7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCJhbmltYXRlLmpzL3NyYy9jb21wb25lbnRzL0NvbXBvbmVudFwiO1xuaW1wb3J0IENsaXAgZnJvbSBcImFuaW1hdGUuanMvc3JjL2NvbXBvbmVudHMvQ2xpcFwiO1xuaW1wb3J0IG9uIGZyb20gXCJhbmltYXRlLmpzL3NyYy9zdGF0aWMvb25cIjtcblxuY29uc3QgQ29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZygnQ29udHJvbGxlcjogZ2FtZS1mcmFtZScpO1xuXG4gICAgY29uc3Qge1xuICAgICAgICBDbGlwLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIEtleWJvYXJkRXZlbnRNYW5hZ2VyLFxuICAgICAgICBNb3ZlQ2xpcCxcbiAgICAgICAgU2NlbmUsXG4gICAgICAgIFN0ZXBzU2NlbmUsXG4gICAgICAgIFRpbWVyLFxuICAgICAgICBSb3h5TGlzdGVuZXIsXG4gICAgICAgIFJveHksXG4gICAgICAgIEFuaW1hdGlvbkZyYW1lLFxuICAgICAgICBMb2FkZXIsXG4gICAgICAgIE1hdHJpeCxcbiAgICAgICAgUG9pbnQsXG4gICAgICAgIFJlY3RhbmdsZSxcbiAgICAgICAgUm91dGVyLFxuICAgIH0gPSBBbmltYXRlO1xuXG4gICAgY29uc3Qge1xuICAgICAgICBxdWVyeSxcbiAgICAgICAgc2VhcmNoLFxuICAgICAgICBpbmplY3QsXG4gICAgICAgIHR5cGVPZixcbiAgICAgICAgdXJpLFxuICAgICAgICBjb3B5LFxuICAgICAgICBlYWNoLFxuICAgICAgICBvbixcbiAgICB9ID0gU3RhdGljO1xuXG59O1xuXG5kb21Mb2FkZWQoKCkgPT4ge1xuXG4gICAgY29uc3QgQ09MT1JfQkFTRV9ERyA9ICcjMWMxYzFjJztcbiAgICBjb25zdCBDT0xPUl9CQVNFX0JPUkRFUiA9ICcjMGYwJztcblxuICAgIGFkZENzcyh7XG4gICAgICAgICcubWluaS1nYW1lLWhpZGUnOiB7ZGlzcGxheTogJ25vbmUnLCAgdG9wOiAnLTUwMHB4J30sXG4gICAgICAgICcubWluaS1nYW1lLXNob3cnOiB7ZGlzcGxheTogJ2Jsb2NrJywgIHRvcDogJzBweCd9LFxuICAgICAgICAnI21pbmktZ2FtZSAqJzoge1xuICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgICB9LFxuICAgICAgICAnI21pbmktZ2FtZSc6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHRvcDogJzIwMHB4JyxcbiAgICAgICAgICAgIHJpZ2h0OiAnMHB4JyxcbiAgICAgICAgICAgIHdpZHRoOiAnMTgwcHgnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnNTBweCcsXG4gICAgICAgIH0sXG4gICAgICAgICcjbWluaS1nYW1lLXRpdGxlJzoge1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgdG9wOiAnLTEwMHB4JyxcbiAgICAgICAgICAgIHJpZ2h0OiAnLTUwcHgnLFxuICAgICAgICAgICAgd2lkdGg6ICcxNTBweCcsXG4gICAgICAgICAgICBoZWlnaHQ6ICc1MHB4JyxcbiAgICAgICAgICAgIHBhZGRpbmc6ICcxNnB4JyxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgtOTBkZWcpJyxcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICBjb2xvcjogQ09MT1JfQkFTRV9CT1JERVIsXG4gICAgICAgICAgICBib3JkZXI6ICcycHggc29saWQgJyArIENPTE9SX0JBU0VfQk9SREVSLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBDT0xPUl9CQVNFX0RHLFxuICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgIH0sXG4gICAgICAgICcjbWluaS1nYW1lLWJvZHknOiB7fSxcbiAgICAgICAgJyNtaW5pLWdhbWUtd3JhcHBlcic6IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIHdpZHRoOiAnMzAwcHgnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMjAwcHgnLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAuNnMnLFxuICAgICAgICAgICAgcmlnaHQ6ICcwcHgnLFxuICAgICAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkICcgKyBDT0xPUl9CQVNFX0JPUkRFUixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogQ09MT1JfQkFTRV9ERyxcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIC8vIENvbXBvbmVudHNcbiAgICBjb25zdCBHYW1lQ29tcG9uZW50ID0gQ29tcG9uZW50KHtcbiAgICAgICAgaWQ6ICdHYW1lQ29tcG9uZW50JyxcbiAgICAgICAgdGVtcGxhdGU6IGBcbjxzcGFuIGlkPVwibWluaS1nYW1lXCIgZGF0YS1pZD1cImdhbWVcIj5cbiAgICA8c3BhbiBpZD1cIm1pbmktZ2FtZS10aXRsZVwiIGRhdGEtaWQ9XCJ0aXRsZVwiPk1JTkkgR0FNRTwvc3Bhbj4gICAgXG4gICAgPHNwYW4gaWQ9XCJtaW5pLWdhbWUtYm9keVwiIGRhdGEtaWQ9XCJib2R5XCI+XG4gICAgICAgIDxzcGFuIGlkPVwibWluaS1nYW1lLXdyYXBwZXJcIiBkYXRhLWlkPVwid3JhcHBlclwiIGNsYXNzPVwibWluaS1nYW1lLWhpZGVcIj5jYW52YXMgd3JhcHBlcjwvc3Bhbj5cbiAgICA8L3NwYW4+ICAgIFxuPC9zcGFuPlxuYCxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBpbml0KCl7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBsZXRlKCl7fSxcbiAgICAgICAgYWN0aW9ucygpe1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50cygnaWQnLCAndGl0bGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtcy5hY3RpdmUpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50cygnaWQnLCAnd3JhcHBlcicpLmNsYXNzTGlzdC5yZW1vdmUoJ21pbmktZ2FtZS1zaG93Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHMoJ2lkJywgJ3dyYXBwZXInKS5jbGFzc0xpc3QuYWRkKCdtaW5pLWdhbWUtaGlkZScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHMoJ2lkJywgJ3dyYXBwZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdtaW5pLWdhbWUtaGlkZScpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzKCdpZCcsICd3cmFwcGVyJykuY2xhc3NMaXN0LmFkZCgnbWluaS1nYW1lLXNob3cnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9LFxuICAgICAgICByZW5kZXIoKXtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9ucygpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnRlbXBsYXRlKTtcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IE1lbnVDb21wb25lbnQgPSBDb21wb25lbnQoe1xuICAgICAgICBpZDogJycsXG4gICAgICAgIHBhcmFtczoge30sXG4gICAgICAgIGluaXQoKXt9LFxuICAgICAgICBjb21wbGV0ZSgpe30sXG4gICAgICAgIHJlbmRlcigpe30sXG4gICAgfSk7XG4gICAgY29uc3QgQnV0dG9uQ2xpcCA9IENsaXAoe1xuICAgICAgICBpZDogJycsXG4gICAgICAgIGVsZW1lbnQ6ICdib2R5JyxcbiAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgaW5pdCgpe30sXG4gICAgICAgIGNvbXBsZXRlKCl7fSxcbiAgICAgICAgcmVuZGVyKCl7fSxcbiAgICB9KTtcbiAgICBjb25zdCBCdXR0b25Db21wb25lbnQgPSBQbGFudCh7XG4gICAgICAgIGlkOiAnJyxcbiAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgaW5pdCgpe30sXG4gICAgICAgIGNvbXBsZXRlKCl7fSxcbiAgICAgICAgcmVuZGVyKCl7fSxcbiAgICB9KTtcblxuICAgIC8vIFNjZW5lc1xuICAgIFN0YWdlLnNjZW5lKCdnYW1lJywgKCkgPT4ge0dhbWVDb21wb25lbnQucmVuZGVyKCl9KTtcbiAgICBTdGFnZS5leGVjdXRlKCdnYW1lJyk7XG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sbGVyO1xuIiwiXG4vKlxuY29uc3QgYW5pbWF0aW9uID0gQW5pbWF0aW9uRnJhbWUoKTtcbmFuaW1hdGlvbi5wYXVzZSgpO1xuYW5pbWF0aW9uLnN0YXJ0KGZ1bmN0aW9uKHByb2dyZXNzKXtcbiAgICBpZiAoTWF0aC5yb3VuZChwcm9ncmVzcykgJSAxMDAwID09PSAwKSB7XG4gICAgICAgIC8vIGRvIHNvbWV0aGluZ1xuICAgIH1cbn0pO1xuYW5pbWF0aW9uLmNhbmNlbCgpO1xuKi9cbi8qKlxuICpcbiAqIEByZXR1cm5zIHt7ZHVyYXRpb246IG51bWJlciwgc3RhcnRwYWx5OiBudW1iZXIsIHBhdXNlZDogYm9vbGVhbiwgZGVsYXk6IG51bWJlciwgcmVxdWVzdElkOiBudW1iZXIsIGNhbGxiYWNrOiBudW1iZXIsIHByb2dyZXNzOiBudW1iZXJ9fVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKClcbntcbiAgICBjb25zdCByb290ID0ge1xuICAgICAgICByZXF1ZXN0SWQ6IDAsXG4gICAgICAgIHN0YXJ0cGFseTogMCxcbiAgICAgICAgcGF1c2VkOiBmYWxzZSxcbiAgICAgICAgY2FsbGJhY2s6IDAsXG4gICAgICAgIGRlbGF5OiAwLFxuICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgfTtcblxuICAgIHJvb3Quc3RlcCA9IGZ1bmN0aW9uICh0aW1lc3RhbXApIHtcbiAgICAgICAgaWYgKCFyb290LnN0YXJ0cGFseSkgcm9vdC5zdGFydHBhbHkgPSB0aW1lc3RhbXA7XG4gICAgICAgIHJvb3QucHJvZ3Jlc3MgPSB0aW1lc3RhbXAgLSByb290LnN0YXJ0cGFseTtcblxuICAgICAgICBpZiAocm9vdC5jYWxsYmFjaykge1xuICAgICAgICAgICAgcm9vdC5jYWxsYmFjay5jYWxsKHJvb3QsIHJvb3QucHJvZ3Jlc3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJvb3QuZHVyYXRpb24gJiYgcm9vdC5kdXJhdGlvbiA+IHJvb3QucHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJvb3QuY2FuY2VsKCk7XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJvb3Quc3RlcCk7XG4gICAgICAgIGlmIChyb290LnBhdXNlZCkge1xuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyb290LnN0ZXApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcm9vdC5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcm9vdC5wYXVzZWQgPSAhcm9vdC5wYXVzZWQ7XG4gICAgfTtcblxuICAgIHJvb3Quc3RhcnQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByb290LmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvb3QucmVxdWVzdElkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyb290LnN0ZXApO1xuICAgIH07XG5cbiAgICByb290LmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHJvb3QucmVxdWVzdElkKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHJvb3Q7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbmltYXRpb25GcmFtZTtcbiIsImltcG9ydCBwb3NpdGlvbiBmcm9tIFwiLi4vc3RhdGljL3Bvc2l0aW9uXCI7XG5pbXBvcnQgY29weSBmcm9tIFwiLi4vc3RhdGljL2NvcHlcIjtcbmltcG9ydCBjbG9uZSBmcm9tIFwiLi4vc3RhdGljL2Nsb25lXCI7XG5pbXBvcnQgaXNIVE1MU3RyaW5nIGZyb20gXCIuLi9zdGF0aWMvaXNIVE1MU3RyaW5nXCI7XG5pbXBvcnQgcXVlcnkgZnJvbSBcIi4uL3N0YXRpYy9xdWVyeVwiO1xuaW1wb3J0IHN0eWxpemVyIGZyb20gXCIuLi9zdGF0aWMvc3R5bGl6ZXJcIjtcbmltcG9ydCBzdHIybm9kZSBmcm9tIFwiLi4vc3RhdGljL3N0cjJub2RlXCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuLi9zdGF0aWMvaXNOb2RlXCI7XG5pbXBvcnQgaXNTdHJpbmcgZnJvbSBcIi4uL3N0YXRpYy9pc1N0cmluZ1wiO1xuXG4vKipcbiAqIEBwcm9wZXJ0eSBib3R0b21cbiAqIEBwcm9wZXJ0eSBlbGVtZW50XG4gKiBAcHJvcGVydHkgaGVpZ2h0XG4gKiBAcHJvcGVydHkgbGVmdFxuICogQHByb3BlcnR5IHJpZ2h0XG4gKiBAcHJvcGVydHkgdG9wXG4gKiBAcHJvcGVydHkgd2lkdGhcbiAqIEBwcm9wZXJ0eSB4XG4gKiBAcHJvcGVydHkgeVxuICogQG1ldGhvZCBtb3ZlVG8oKVxuICogQG1ldGhvZCBjb3B5VG9cbiAqIEBtZXRob2Qgb25cbiAqIEBtZXRob2QgY2xvbmVcbiAqIEBtZXRob2Qgc3R5bGVcbiAqIEBtZXRob2QgaW5qZWN0XG4gKiBAbWV0aG9kIGFwcGVuZFxuICogQG1ldGhvZCByZW1vdmVcbiAqIEBtZXRob2QgY2xlYXJcbiAqIEBtZXRob2Qgb25cbiAqIEBtZXRob2QgY2xvbmVcbiAqXG4gKiBAcGFyYW0gZWxlbWVudFxuICogQHBhcmFtIG9uSW5pdENhbGxiYWNrXG4gKiBAcmV0dXJucyB7eyBib3R0b206IG51bWJlciwgZWxlbWVudDogT2JqZWN0LCBoZWlnaHQ6IG51bWJlciwgbGVmdDogbnVtYmVyLCByaWdodDogbnVtYmVyLCB0b3A6IG51bWJlciwgd2lkdGg6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIsIG1vdmVUbzogZnVuY3Rpb24sIGNvcHlUbzogZnVuY3Rpb24sIG9uOiBmdW5jdGlvbiwgY2xvbmU6IGZ1bmN0aW9uLCBzdHlsZTogZnVuY3Rpb24sIGluamVjdDogZnVuY3Rpb24sIGFwcGVuZDogZnVuY3Rpb24sIHJlbW92ZTogZnVuY3Rpb24sIGNsZWFyOiBmdW5jdGlvbiwgb246IGZ1bmN0aW9uLCBjbG9uZTogZnVuY3Rpb24sIGNhbGN1bGF0ZTogZnVuY3Rpb24gfX1cbiAqIEBjb25zdHJ1Y3RvciBDbGlwKClcbiAqL1xuY29uc3QgQ2xpcCA9IGZ1bmN0aW9uIChlbGVtZW50LCBvbkluaXRDYWxsYmFjaykge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHR5cGUge3t4OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIHk6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHRvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXIsIHJpZ2h0OiBudW1iZXIsIGJvdHRvbTogbnVtYmVyLCBlbGVtZW50OiBPYmplY3R9fVxuICAgICAqL1xuICAgIGNvbnN0IHJvb3QgPSBwb3NpdGlvbihlbGVtZW50KTtcblxuICAgIGlmIChyb290LmVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHBvc2l0aW9uKGVsZW1lbnQucGFyZW50Tm9kZSk7XG4gICAgICAgIHJvb3QueCA9IHJvb3QueCAtIHBhcmVudC54O1xuICAgICAgICByb290LnkgPSByb290LnkgLSBwYXJlbnQueTtcbiAgICAgICAgcm9vdC5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHJvb3QucGFyZW50LmVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgIHJvb3QuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpcCcsIHJvb3QuZWxlbWVudC5pZCB8fCAnY2xpcCcpO1xuICAgIH1cblxuICAgIHJvb3QubW92ZVRvID0gZnVuY3Rpb24gKHBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHBhcmVudEVsZW1lbnQgaW5zdGFuY2VvZiBDbGlwKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50RWxlbWVudC5lbGVtZW50LmFwcGVuZENoaWxkKHJvb3QuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmVudEVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChyb290LmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJvb3QuY2FsY3VsYXRlID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudCA9IGlzTm9kZShlbGVtZW50KSB8fCBpc1N0cmluZyhlbGVtZW50KSA/IGVsZW1lbnQgOiB0aGlzLmVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHJlX3Jvb3QgPSBwb3NpdGlvbihlbGVtZW50KTtcbiAgICAgICAgY29uc3QgcmVfcGFyZW50ID0gcG9zaXRpb24ocmVfcm9vdC5lbGVtZW50LnBhcmVudE5vZGUpO1xuXG4gICAgICAgIGlmIChpc05vZGUocmVfcGFyZW50LmVsZW1lbnQpKSB7XG4gICAgICAgICAgICByZV9yb290LnBhcmVudCA9IHJvb3QuY2FsY3VsYXRlKHJlX3BhcmVudC5lbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlX3Jvb3QucGFyZW50ID0ge3g6IDAsIHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDB9O1xuICAgICAgICB9XG4gICAgICAgIHJlX3Jvb3QueCA9IHJlX3Jvb3QueCAtIHJlX3BhcmVudC54O1xuICAgICAgICByZV9yb290LnkgPSByZV9yb290LnkgLSByZV9wYXJlbnQueTtcblxuICAgICAgICBjb25zdCBwcm9wcyA9IFsneCcsICd5JywgJ3dpZHRoJywgJ2hlaWdodCcsICd0b3AnLCAnbGVmdCcsICdyaWdodCcsICdib3R0b20nLCAncGFyZW50J107XG4gICAgICAgIE9iamVjdC5rZXlzKHJlX3Jvb3QpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb3BzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICByb290W2tleV0gPSByZV9yb290W2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByb290LmNvcHlUbyA9IGZ1bmN0aW9uIChwYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIHJvb3QuZWxlbWVudCA9IGNvcHkocm9vdC5lbGVtZW50KTtcbiAgICAgICAgcm9vdC5tb3ZlVG8ocGFyZW50RWxlbWVudCk7XG4gICAgfTtcblxuICAgIHJvb3Qub24gPSBmdW5jdGlvbiAoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJvb3QuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaylcbiAgICB9O1xuXG4gICAgcm9vdC5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNsb25lKHRoaXMpO1xuICAgIH07XG5cbiAgICByb290LnN0eWxlID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgICBzdHlsaXplcihyb290LmVsZW1lbnQsIG9iamVjdCk7XG4gICAgfTtcblxuICAgIHJvb3QuaW5qZWN0ID0gZnVuY3Rpb24gKGVsZW0sIGFwcGVuZCA9IHRydWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKGlzSFRNTFN0cmluZyhlbGVtKSkge1xuICAgICAgICAgICAgICAgIGVsZW0gPSBzdHIybm9kZShlbGVtKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbSA9IHF1ZXJ5KGVsZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghYXBwZW5kKSB7XG4gICAgICAgICAgICByb290LmVsZW1lbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGVsZW0pKSB7XG4gICAgICAgICAgICBlbGVtLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICByb290LmluamVjdChlLCB0cnVlKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTm9kZShlbGVtKSkge1xuICAgICAgICAgICAgcm9vdC5lbGVtZW50LmFwcGVuZENoaWxkKGVsZW0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJvb3QuYXBwZW5kID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgcm9vdC5pbmplY3QoZWxlbSwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIHJvb3QucmVtb3ZlID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgaWYgKGlzTm9kZShlbGVtKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJvb3QuZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZhaWxlZCBhcmd1bWVudCB0eXBlLiBOZWVkIE5vZGVFbGVtZW50Jyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcm9vdC5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcm9vdC5lbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgfTtcblxuICAgIGlmICh0eXBlb2Ygb25Jbml0Q2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBvbkluaXRDYWxsYmFjay5jYWxsKHJvb3QpO1xuICAgIH1cblxuICAgIHJldHVybiByb290O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2xpcDtcbiIsImNvbnN0IENvbG9yID0ge1xuICAgIGFsaWNlQmx1ZTogJ0FsaWNlQmx1ZScsXG4gICAgYW50aXF1ZVdoaXRlOiAnQW50aXF1ZVdoaXRlJyxcbiAgICBhcXVhOiAnQXF1YScsXG4gICAgYXF1YW1hcmluZTogJ0FxdWFtYXJpbmUnLFxuICAgIGF6dXJlOiAnQXp1cmUnLFxuICAgIGJlaWdlOiAnQmVpZ2UnLFxuICAgIGJpc3F1ZTogJ0Jpc3F1ZScsXG4gICAgYmxhY2s6ICdCbGFjaycsXG4gICAgYmxhbmNoZWRBbG1vbmQ6ICdCbGFuY2hlZEFsbW9uZCcsXG4gICAgYmx1ZTogJ0JsdWUnLFxuICAgIGJsdWVWaW9sZXQ6ICdCbHVlVmlvbGV0JyxcbiAgICBicm93bjogJ0Jyb3duJyxcbiAgICBidXJseVdvb2Q6ICdCdXJseVdvb2QnLFxuICAgIGNhZGV0Qmx1ZTogJ0NhZGV0Qmx1ZScsXG4gICAgY2hhcnRyZXVzZTogJ0NoYXJ0cmV1c2UnLFxuICAgIGNob2NvbGF0ZTogJ0Nob2NvbGF0ZScsXG4gICAgY29yYWw6ICdDb3JhbCcsXG4gICAgY29ybmZsb3dlckJsdWU6ICdDb3JuZmxvd2VyQmx1ZScsXG4gICAgY29ybnNpbGs6ICdDb3Juc2lsaycsXG4gICAgY3JpbXNvbjogJ0NyaW1zb24nLFxuICAgIGN5YW46ICdDeWFuJyxcbiAgICBkYXJrQmx1ZTogJ0RhcmtCbHVlJyxcbiAgICBkYXJrQ3lhbjogJ0RhcmtDeWFuJyxcbiAgICBkYXJrR29sZGVuUm9kOiAnRGFya0dvbGRlblJvZCcsXG4gICAgZGFya0dyYXk6ICdEYXJrR3JheScsXG4gICAgZGFya0dyZXk6ICdEYXJrR3JleScsXG4gICAgZGFya0dyZWVuOiAnRGFya0dyZWVuJyxcbiAgICBkYXJrS2hha2k6ICdEYXJrS2hha2knLFxuICAgIGRhcmtNYWdlbnRhOiAnRGFya01hZ2VudGEnLFxuICAgIGRhcmtPbGl2ZUdyZWVuOiAnRGFya09saXZlR3JlZW4nLFxuICAgIGRhcmtPcmFuZ2U6ICdEYXJrT3JhbmdlJyxcbiAgICBkYXJrT3JjaGlkOiAnRGFya09yY2hpZCcsXG4gICAgZGFya1JlZDogJ0RhcmtSZWQnLFxuICAgIGRhcmtTYWxtb246ICdEYXJrU2FsbW9uJyxcbiAgICBkYXJrU2VhR3JlZW46ICdEYXJrU2VhR3JlZW4nLFxuICAgIGRhcmtTbGF0ZUJsdWU6ICdEYXJrU2xhdGVCbHVlJyxcbiAgICBkYXJrU2xhdGVHcmF5OiAnRGFya1NsYXRlR3JheScsXG4gICAgZGFya1NsYXRlR3JleTogJ0RhcmtTbGF0ZUdyZXknLFxuICAgIGRhcmtUdXJxdW9pc2U6ICdEYXJrVHVycXVvaXNlJyxcbiAgICBkYXJrVmlvbGV0OiAnRGFya1Zpb2xldCcsXG4gICAgZGVlcFBpbms6ICdEZWVwUGluaycsXG4gICAgZGVlcFNreUJsdWU6ICdEZWVwU2t5Qmx1ZScsXG4gICAgZGltR3JheTogJ0RpbUdyYXknLFxuICAgIGRpbUdyZXk6ICdEaW1HcmV5JyxcbiAgICBkb2RnZXJCbHVlOiAnRG9kZ2VyQmx1ZScsXG4gICAgZmlyZUJyaWNrOiAnRmlyZUJyaWNrJyxcbiAgICBmbG9yYWxXaGl0ZTogJ0Zsb3JhbFdoaXRlJyxcbiAgICBmb3Jlc3RHcmVlbjogJ0ZvcmVzdEdyZWVuJyxcbiAgICBmdWNoc2lhOiAnRnVjaHNpYScsXG4gICAgZ2FpbnNib3JvOiAnR2FpbnNib3JvJyxcbiAgICBnaG9zdFdoaXRlOiAnR2hvc3RXaGl0ZScsXG4gICAgZ29sZDogJ0dvbGQnLFxuICAgIGdvbGRlblJvZDogJ0dvbGRlblJvZCcsXG4gICAgZ3JheTogJ0dyYXknLFxuICAgIGdyZXk6ICdHcmV5JyxcbiAgICBncmVlbjogJ0dyZWVuJyxcbiAgICBncmVlblllbGxvdzogJ0dyZWVuWWVsbG93JyxcbiAgICBob25leURldzogJ0hvbmV5RGV3JyxcbiAgICBob3RQaW5rOiAnSG90UGluaycsXG4gICAgaW5kaWFuUmVkOiAnSW5kaWFuUmVkJyxcbiAgICBpbmRpZ286ICdJbmRpZ28nLFxuICAgIGl2b3J5OiAnSXZvcnknLFxuICAgIGtoYWtpOiAnS2hha2knLFxuICAgIGxhdmVuZGVyOiAnTGF2ZW5kZXInLFxuICAgIGxhdmVuZGVyQmx1c2g6ICdMYXZlbmRlckJsdXNoJyxcbiAgICBsYXduR3JlZW46ICdMYXduR3JlZW4nLFxuICAgIGxlbW9uQ2hpZmZvbjogJ0xlbW9uQ2hpZmZvbicsXG4gICAgbGlnaHRCbHVlOiAnTGlnaHRCbHVlJyxcbiAgICBsaWdodENvcmFsOiAnTGlnaHRDb3JhbCcsXG4gICAgbGlnaHRDeWFuOiAnTGlnaHRDeWFuJyxcbiAgICBsaWdodEdvbGRlblJvZFllbGxvdzogJ0xpZ2h0R29sZGVuUm9kWWVsbG93JyxcbiAgICBsaWdodEdyYXk6ICdMaWdodEdyYXknLFxuICAgIGxpZ2h0R3JleTogJ0xpZ2h0R3JleScsXG4gICAgbGlnaHRHcmVlbjogJ0xpZ2h0R3JlZW4nLFxuICAgIGxpZ2h0UGluazogJ0xpZ2h0UGluaycsXG4gICAgbGlnaHRTYWxtb246ICdMaWdodFNhbG1vbicsXG4gICAgbGlnaHRTZWFHcmVlbjogJ0xpZ2h0U2VhR3JlZW4nLFxuICAgIGxpZ2h0U2t5Qmx1ZTogJ0xpZ2h0U2t5Qmx1ZScsXG4gICAgbGlnaHRTbGF0ZUdyYXk6ICdMaWdodFNsYXRlR3JheScsXG4gICAgbGlnaHRTbGF0ZUdyZXk6ICdMaWdodFNsYXRlR3JleScsXG4gICAgbGlnaHRTdGVlbEJsdWU6ICdMaWdodFN0ZWVsQmx1ZScsXG4gICAgbGlnaHRZZWxsb3c6ICdMaWdodFllbGxvdycsXG4gICAgbGltZTogJ0xpbWUnLFxuICAgIGxpbWVHcmVlbjogJ0xpbWVHcmVlbicsXG4gICAgbGluZW46ICdMaW5lbicsXG4gICAgbWFnZW50YTogJ01hZ2VudGEnLFxuICAgIG1hcm9vbjogJ01hcm9vbicsXG4gICAgbWVkaXVtQXF1YU1hcmluZTogJ01lZGl1bUFxdWFNYXJpbmUnLFxuICAgIG1lZGl1bUJsdWU6ICdNZWRpdW1CbHVlJyxcbiAgICBtZWRpdW1PcmNoaWQ6ICdNZWRpdW1PcmNoaWQnLFxuICAgIG1lZGl1bVB1cnBsZTogJ01lZGl1bVB1cnBsZScsXG4gICAgbWVkaXVtU2VhR3JlZW46ICdNZWRpdW1TZWFHcmVlbicsXG4gICAgbWVkaXVtU2xhdGVCbHVlOiAnTWVkaXVtU2xhdGVCbHVlJyxcbiAgICBtZWRpdW1TcHJpbmdHcmVlbjogJ01lZGl1bVNwcmluZ0dyZWVuJyxcbiAgICBtZWRpdW1UdXJxdW9pc2U6ICdNZWRpdW1UdXJxdW9pc2UnLFxuICAgIG1lZGl1bVZpb2xldFJlZDogJ01lZGl1bVZpb2xldFJlZCcsXG4gICAgbWlkbmlnaHRCbHVlOiAnTWlkbmlnaHRCbHVlJyxcbiAgICBtaW50Q3JlYW06ICdNaW50Q3JlYW0nLFxuICAgIG1pc3R5Um9zZTogJ01pc3R5Um9zZScsXG4gICAgbW9jY2FzaW46ICdNb2NjYXNpbicsXG4gICAgbmF2YWpvV2hpdGU6ICdOYXZham9XaGl0ZScsXG4gICAgbmF2eTogJ05hdnknLFxuICAgIG9sZExhY2U6ICdPbGRMYWNlJyxcbiAgICBvbGl2ZTogJ09saXZlJyxcbiAgICBvbGl2ZURyYWI6ICdPbGl2ZURyYWInLFxuICAgIG9yYW5nZTogJ09yYW5nZScsXG4gICAgb3JhbmdlUmVkOiAnT3JhbmdlUmVkJyxcbiAgICBvcmNoaWQ6ICdPcmNoaWQnLFxuICAgIHBhbGVHb2xkZW5Sb2Q6ICdQYWxlR29sZGVuUm9kJyxcbiAgICBwYWxlR3JlZW46ICdQYWxlR3JlZW4nLFxuICAgIHBhbGVUdXJxdW9pc2U6ICdQYWxlVHVycXVvaXNlJyxcbiAgICBwYWxlVmlvbGV0UmVkOiAnUGFsZVZpb2xldFJlZCcsXG4gICAgcGFwYXlhV2hpcDogJ1BhcGF5YVdoaXAnLFxuICAgIHBlYWNoUHVmZjogJ1BlYWNoUHVmZicsXG4gICAgcGVydTogJ1BlcnUnLFxuICAgIHBpbms6ICdQaW5rJyxcbiAgICBwbHVtOiAnUGx1bScsXG4gICAgcG93ZGVyQmx1ZTogJ1Bvd2RlckJsdWUnLFxuICAgIHB1cnBsZTogJ1B1cnBsZScsXG4gICAgcmViZWNjYVB1cnBsZTogJ1JlYmVjY2FQdXJwbGUnLFxuICAgIHJlZDogJ1JlZCcsXG4gICAgcm9zeUJyb3duOiAnUm9zeUJyb3duJyxcbiAgICByb3lhbEJsdWU6ICdSb3lhbEJsdWUnLFxuICAgIHNhZGRsZUJyb3duOiAnU2FkZGxlQnJvd24nLFxuICAgIHNhbG1vbjogJ1NhbG1vbicsXG4gICAgc2FuZHlCcm93bjogJ1NhbmR5QnJvd24nLFxuICAgIHNlYUdyZWVuOiAnU2VhR3JlZW4nLFxuICAgIHNlYVNoZWxsOiAnU2VhU2hlbGwnLFxuICAgIHNpZW5uYTogJ1NpZW5uYScsXG4gICAgc2lsdmVyOiAnU2lsdmVyJyxcbiAgICBza3lCbHVlOiAnU2t5Qmx1ZScsXG4gICAgc2xhdGVCbHVlOiAnU2xhdGVCbHVlJyxcbiAgICBzbGF0ZUdyYXk6ICdTbGF0ZUdyYXknLFxuICAgIHNsYXRlR3JleTogJ1NsYXRlR3JleScsXG4gICAgc25vdzogJ1Nub3cnLFxuICAgIHNwcmluZ0dyZWVuOiAnU3ByaW5nR3JlZW4nLFxuICAgIHN0ZWVsQmx1ZTogJ1N0ZWVsQmx1ZScsXG4gICAgdGFuOiAnVGFuJyxcbiAgICB0ZWFsOiAnVGVhbCcsXG4gICAgdGhpc3RsZTogJ1RoaXN0bGUnLFxuICAgIHRvbWF0bzogJ1RvbWF0bycsXG4gICAgdHVycXVvaXNlOiAnVHVycXVvaXNlJyxcbiAgICB2aW9sZXQ6ICdWaW9sZXQnLFxuICAgIHdoZWF0OiAnV2hlYXQnLFxuICAgIHdoaXRlOiAnV2hpdGUnLFxuICAgIHdoaXRlU21va2U6ICdXaGl0ZVNtb2tlJyxcbiAgICB5ZWxsb3c6ICdZZWxsb3cnLFxuICAgIHllbGxvd0dyZWVuOiAnWWVsbG93R3JlZW4nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29sb3I7XG4iLCJpbXBvcnQgc3RyMm5vZGUgZnJvbSBcIi4uL3N0YXRpYy9zdHIybm9kZVwiO1xuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi4vc3RhdGljL2lzTm9kZVwiO1xuaW1wb3J0IG1lcmdlIGZyb20gXCIuLi9zdGF0aWMvbWVyZ2VcIjtcbmltcG9ydCBzZWFyY2ggZnJvbSBcIi4uL3N0YXRpYy9zZWFyY2hcIjtcbmltcG9ydCBjbG9uZSBmcm9tIFwiLi4vc3RhdGljL2Nsb25lXCI7XG5pbXBvcnQge3JhbmRvbUh1bWFuaXplU3RyaW5nfSBmcm9tIFwiLi4vc3RhdGljL3JhbmRvbVwiO1xuaW1wb3J0IGlzSFRNTFN0cmluZyBmcm9tIFwiLi4vc3RhdGljL2lzSFRNTFN0cmluZ1wiO1xuaW1wb3J0IHF1ZXJ5IGZyb20gXCIuLi9zdGF0aWMvcXVlcnlcIjtcblxuXG4vKlxuIyBDb25maWdcbmlkOiAnaWQnLFxucHJvcHM6IHt9LFxudGVtcGxhdGU6IGBgLFxuXG5iZWZvcmUgKCkge30sXG5pbml0ICgpIHt9LFxuY29tcGxldGUgKCkge30sXG5cbmRhdGE6IHt9LFxubWV0aG9kczoge30sXG5jb21wb25lbnRzOiB7fSxcblxudGVtcGxhdGVFbGVtZW50c0VuYWJsZWQ6IHRydWUsXG50ZW1wbGF0ZUVsZW1lbnRzQXR0cmlidXRlczogQ09NUE9ORU5UX0RBVEFfQVRUUklCVVRFUyxcbm92ZXJyaWRlOiBmYWxzZSxcbmluaXRpYWxpemVkOiBmYWxzZSxcbmNvbXBsZXRlZDogZmFsc2UsXG5cbiMgQmFzZSBleGFtcGxlXG5Db21wb25lbnQoe1xuICAgIGlkOiAnRXh0ZXJuYWxUZW1wbGF0ZUNvbXBvbmVudCcsXG4gICAgcHJvcHM6IFsndGl0bGUnXSxcbiAgICB0ZW1wbGF0ZTogJ3RlbXBsYXRlJyxcbiAgICBpbml0ICgpIHt9LFxuICAgIGRhdGE6IHt9LFxuICAgIGNvbXBsZXRlIChhcHApIHt9LFxuICAgIG1ldGhvZHM6IHt9XG59KTtcblxuIyBFeHRlbmQgZXhhbXBsZVxuQ29tcG9uZW50KHtcbiAgICBpZDogJ0V4dGVybmFsVGVtcGxhdGVDb21wb25lbnQnLFxuICAgIHByb3BzOiBbJ3RpdGxlJ10sXG4gICAgdGVtcGxhdGU6ICd0ZW1wbGF0ZScsXG4gICAgaW5pdCAoKSB7fSxcbiAgICBkYXRhOiB7XG4gICAgICAgIGl0ZXJhdG9yOiAwLFxuICAgIH0sXG4gICAgY29tcGxldGUgKGFwcCkge1xuICAgICAgICBpZiAodGhpcy50ZW1wbGF0ZUVsZW1lbnRzLm5vZGUudGl0bGUpIHRoaXMudGVtcGxhdGVFbGVtZW50cy5ub2RlLnRpdGxlLnRleHRDb250ZW50ID0gdGhpcy50aXRsZTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgYWRkIChlKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuaXRlcmF0b3IudGV4dENvbnRlbnQgPSArKyB0aGlzLmRhdGEuaXRlcmF0b3IgO1xuICAgICAgICB9LFxuICAgIH1cbn0pO1xuXG5jb21wID0gQ29tcG9uZW50KHsuLi59KTtcbiAgICB0ZW1wbGF0ZUVsZW1lbnRzOiB7IGZ1bmM6e30sIGFjdGlvbjp7fSwgbm9kZTp7fSwgb246e30gfSxcbiAgICAgICAgSWYgdGVtcGxhdGVFbGVtZW50c0VuYWJsZWQgaXMgZW5hYmxlZCBkdXJpbmcgY29tcG9uZW50IGluaXRpYWxpemF0aW9uLCBhdHRyaWJ1dGVzIHdpdGggbmFtZXMgYXJlIHJlcXVlc3RlZFxuICAgICAgICBmcm9tIHRoZSB0ZW1wbGF0ZTpcbiAgICAgICAgQ09NUE9ORU5UX0RBVEFfQVRUUklCVVRFUyA9PT0gW2RhdGEtZnVuY10sIFtkYXRhLWFjdGlvbl0sIFtkYXRhLW5vZGVdLCBbZGF0YS1vbl1cblxuY29tcC5jb21wb25lbnQoaWQpXG5jb21wLmNvbXBvbmVudENoaWxkcmVuKGlkKVxuY29tcC5jbG9uZSgpXG5jb21wLm9uKGV2ZW50LCBjYWxsYmFjaylcbmNvbXAuaW5qZWN0KGVsZW0sIGFwcGVuZCA9IHRydWUpXG5jb21wLmluamVjdCgpXG5jb21wLmVsZW1lbnRzKGF0dHIsIG5hbWUpXG4qL1xuXG4vKipcbiAqIEBwYXJhbSBjb25maWdcbiAqIEByZXR1cm5zIHsqfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IENvbXBvbmVudCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgLy8gZ2V0IHByb3BlcnR5IGJ5IGlkIGtleXdvcmRcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudC5saXN0W2NvbmZpZ107XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFjb25maWcuaWQpIHtcbiAgICAgICAgICAgIGxldCByYW5kb21OYW1lID0gcmFuZG9tSHVtYW5pemVTdHJpbmcoNikudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHJhbmRvbU5hbWUgPSByYW5kb21OYW1lLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgcmFuZG9tTmFtZS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICBjb25maWcuaWQgPSAnQ29tcG9uZW50JyArIHJhbmRvbU5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQ29tcG9uZW50Lmxpc3RbY29uZmlnLmlkXSkge1xuICAgICAgICAgICAgcmV0dXJuIENvbXBvbmVudC5saXN0W2NvbmZpZy5pZF07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29tcCA9IENvbXBvbmVudC5jcmVhdGUoY29uZmlnKTtcbiAgICAgICAgLy8gY29uc3QgY29tcCA9IENvbXBvbmVudC5jcmVhdGUobWVyZ2UoY29uZmlnLCB7XG4gICAgICAgIC8vICAgICBnZXQgcGFyZW50KCl7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50RE9NRWxlbWVudDtcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICBzZXQgcGFyZW50KHZhbHVlKXtcbiAgICAgICAgLy8gICAgICAgICBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIE5vZGUpKSB0aHJvdyBuZXcgRXJyb3IoJ1BhcmVudCBtdXN0IGV4dGVuZCBvZiBOb2RlJyk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wYXJlbnRET01FbGVtZW50ID0gdmFsdWU7XG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyB9KSk7XG5cbiAgICAgICAgY29tcC5jb21wb25lbnQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wLmNvbXBvbmVudHNbaWRdID8gY29tcC5jb21wb25lbnRzW2lkXSA6IG51bGw7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29tcC5jb21wb25lbnRDaGlsZHJlbiA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXAuY2hpbGRyZW4uZmluZCgoY29tcG9uZW50KSA9PiBjb21wb25lbnQuaWQgPT09IGlkKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb21wLmNsb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgY2xvbmVkID0gY2xvbmUodGhpcyk7XG4gICAgICAgICAgICBjbG9uZWQudGVtcGxhdGUgPSBjbG9uZWQudGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuIGNsb25lZDtcbiAgICAgICAgfTtcblxuICAgICAgICBjb21wLm9uID0gZnVuY3Rpb24gKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgY29tcC50ZW1wbGF0ZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaylcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBjb21wLmluamVjdCA9IGZ1bmN0aW9uIChlbGVtLCBhcHBlbmQgPSB0cnVlKSB7XG4gICAgICAgIC8vICAgICBpZiAodHlwZW9mIGVsZW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIC8vICAgICAgICAgaWYgKGlzSFRNTFN0cmluZyhlbGVtKSkge1xuICAgICAgICAvLyAgICAgICAgICAgICBlbGVtID0gc3RyMm5vZGUoZWxlbSk7XG4gICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgZWxlbSA9IHF1ZXJ5KGVsZW0pO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIGlmICghYXBwZW5kKSB7XG4gICAgICAgIC8vICAgICAgICAgY29tcC50ZW1wbGF0ZS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgaWYgKGlzTm9kZShlbGVtKSkge1xuICAgICAgICAvLyAgICAgICAgIGNvbXAudGVtcGxhdGUuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICBpZiAoQXJyYXkuaXNBcnJheShlbGVtKSkge1xuICAgICAgICAvLyAgICAgICAgIGVsZW0uZm9yRWFjaCgoZSkgPT4ge2NvbXAuaW5qZWN0KGUsIHRydWUpfSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH07XG5cbiAgICAgICAgY29tcC5pbmplY3QgPSBmdW5jdGlvbiAoZWxlbSwgYXBwZW5kID0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGVsZW0pKSB7XG4gICAgICAgICAgICAgICAgZWxlbS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXAuaW5qZWN0KGUsIHRydWUpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWFwcGVuZCkge1xuICAgICAgICAgICAgICAgIGNvbXAudGVtcGxhdGUudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc05vZGUoZWxlbSkpIHtcbiAgICAgICAgICAgICAgICBjb21wLnRlbXBsYXRlLmFwcGVuZENoaWxkKGVsZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbGVtID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIGVsZW0gPSBlbGVtLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVsZW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzSFRNTFN0cmluZyhlbGVtKSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtID0gc3RyMm5vZGUoZWxlbSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbXAudGVtcGxhdGUuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcC50ZW1wbGF0ZS50ZXh0Q29udGVudCArPSBlbGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb21wLmFwcGVuZCA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgICBjb21wLmluamVjdChlbGVtLCB0cnVlKTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbXAuYmVmb3JlID09PSAnZnVuY3Rpb24nICYmICFjb21wLmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICBjb21wLmJlZm9yZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb21wLnRlbXBsYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKGlzSFRNTFN0cmluZyhjb21wLnRlbXBsYXRlKSB8fCBjb21wLnRlbXBsYXRlID09PSAnJykge1xuICAgICAgICAgICAgICAgIGNvbXAudGVtcGxhdGUgPSBzdHIybm9kZShjb21wLnRlbXBsYXRlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29tcC50ZW1wbGF0ZSA9IHF1ZXJ5KGNvbXAudGVtcGxhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbXAubWV0aG9kcyAmJiBPYmplY3QudmFsdWVzKGNvbXAubWV0aG9kcykubGVuZ3RoKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb21wLm1ldGhvZHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29tcC5tZXRob2RzW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcC5tZXRob2RzW2tleV0gPSBjb21wLm1ldGhvZHNba2V5XS5iaW5kKGNvbXApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbXAuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcFtrZXldID0gY29tcC5tZXRob2RzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY29tcC5pbml0aWFsaXplZCkge1xuICAgICAgICAgICAgY29tcC5pbml0aWFsaXplZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29tcC5pbml0ID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgICAgIGNvbXAuaW5pdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbXAuZGF0YSAmJiBPYmplY3Qua2V5cyhjb21wLmRhdGEpLmxlbmd0aCkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoY29tcC5kYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbXAuZGF0YVtrZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXAuZGF0YVtrZXldID0gY29tcC5kYXRhW2tleV0uYmluZChjb21wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFjb21wLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcFtrZXldID0gY29tcC5kYXRhW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29tcC5jb21wb25lbnRzICYmIE9iamVjdC5rZXlzKGNvbXAuY29tcG9uZW50cykubGVuZ3RoKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb21wLmNvbXBvbmVudHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjb21wLmNvbXBvbmVudHNba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBjb21wLmNvbXBvbmVudHNba2V5XS5wYXJlbnRDb21wb25lbnQgPSBjb21wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb21wLmNoaWxkcmVuLnB1c2goY29tcC5jb21wb25lbnRzW2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wLmVsZW1lbnRzID0gZnVuY3Rpb24gKGF0dHIsIG5hbWUpIHtcbiAgICAgICAgICAgIGF0dHIgPSBhdHRyLnJlcGxhY2UoJ2RhdGEtJywgJycpO1xuICAgICAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIGNvbXAudGVtcGxhdGVEYXRhRWxlbWVudHNbYXR0cl1bbmFtZV0gIT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgPyBjb21wLnRlbXBsYXRlRGF0YUVsZW1lbnRzW2F0dHJdW25hbWVdXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBjb21wLnRlbXBsYXRlRGF0YUVsZW1lbnRzW2F0dHJdICE9PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICAgICAgPyBjb21wLnRlbXBsYXRlRGF0YUVsZW1lbnRzW2F0dHJdXG4gICAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbXAudXBkYXRlVGVtcGxhdGVEYXRhRWxlbWVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoaXNOb2RlKGNvbXAudGVtcGxhdGUpICYmIGNvbXAudGVtcGxhdGVEYXRhRWxlbWVudHNFbmFibGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgY29tcC50ZW1wbGF0ZURhdGFFbGVtZW50c0F0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gYXR0ci5zdWJzdHJpbmcoNSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbXAudGVtcGxhdGVEYXRhRWxlbWVudHNbbmFtZV0gPSBzZWFyY2goJ1snICsgYXR0ciArICddJywgYXR0ciwgY29tcC50ZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLyogICAgICAgIGNvbXAucGFyZW50ID0gZnVuY3Rpb24gKHBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50ICYmIHBhcmVudC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50RE9NRWxlbWVudDtcbiAgICAgICAgICAgICAgICB9OyovXG5cbiAgICAgICAgaWYgKCFjb21wLmNvbXBsZXRlZCkge1xuICAgICAgICAgICAgY29tcC51cGRhdGVUZW1wbGF0ZURhdGFFbGVtZW50cygpO1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29tcC5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbXAuY29tcGxldGUgPT09ICdmdW5jdGlvbicpIGNvbXAuY29tcGxldGUuY2FsbChjb21wLCBjb21wKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29tcC5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29tcC5jb21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJykgY29tcC5jb21wbGV0ZS5jYWxsKGNvbXAsIGNvbXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQ29tcG9uZW50Lmxpc3RbY29tcC5pZF0gPSBjb21wO1xuICAgICAgICByZXR1cm4gY29tcDtcbiAgICB9XG59O1xuXG5Db21wb25lbnQubGlzdCA9IHt9O1xuQ29tcG9uZW50LmNyZWF0ZSA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICByZXR1cm4gbWVyZ2Uoe1xuICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgcHJvcHM6IHt9LFxuICAgICAgICB0ZW1wbGF0ZTogZmFsc2UsXG4gICAgICAgIG92ZXJyaWRlOiBmYWxzZSxcbiAgICAgICAgaW5pdDogKCkgPT4ge1xuICAgICAgICB9LFxuICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7fSxcbiAgICAgICAgbm9kZToge30sXG4gICAgICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgdGVtcGxhdGVEYXRhRWxlbWVudHM6IHt9LFxuICAgICAgICB0ZW1wbGF0ZURhdGFFbGVtZW50c0VuYWJsZWQ6IHRydWUsXG4gICAgICAgIHRlbXBsYXRlRGF0YUVsZW1lbnRzQXR0cmlidXRlczogQ09NUE9ORU5UX0RBVEFfQVRUUklCVVRFUyxcbiAgICAgICAgY29tcG9uZW50czoge30sXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgcGFyZW50Q29tcG9uZW50OiB7fSxcbiAgICB9LCBjb25maWcpXG59O1xuXG5leHBvcnQgY29uc3QgQ09NUE9ORU5UX0RBVEFfQVRUUklCVVRFUyA9IFtcbiAgICAnZGF0YS1mdW5jJyxcbiAgICAnZGF0YS1hY3Rpb24nLFxuICAgICdkYXRhLW5vZGUnLFxuICAgICdkYXRhLW9uJyxcbiAgICAnZGF0YS10bycsXG4gICAgJ2RhdGEtaWQnLFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4uL3N0YXRpYy9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQgbWVyZ2UgZnJvbSBcIi4uL3N0YXRpYy9tZXJnZVwiO1xuXG5cbi8qXG4jIyBFeGFtcGxlOlxuRW50ZXJGcmFtZSh7ZnBzOiA2MH0pLnN0YXJ0KChldmVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdFTlRFUl9GUkFNRScpO1xufSk7XG5cblxuIyMgRXhhbXBsZTpcbkVudGVyRnJhbWUoe2ZwczogNjAsIGdsb2JhbDogdHJ1ZX0pLnN0YXJ0KCk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKEVudGVyRnJhbWUuRU5URVJfRlJBTUUsIChldmVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdFTlRFUl9GUkFNRScpO1xufSk7XG5cblxuIyMgRXhhbXBsZTpcbmNvbnN0IGFuaW1hdG9yID0gRW50ZXJGcmFtZSh7XG4gICAgZnBzOiAzMCxcbiAgICBnbG9iYWw6IHRydWUsIC8vIGZvciBlbmFibGUgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lclxufSk7XG5hbmltYXRvci5zdGFydCgpO1xuXG5mdW5jdGlvbiBhbmltYXRvckFkZExpc3RlbmVyKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coJ2FuaW1hdG9yOicsIGV2ZW50LmRldGFpbCwgZXZlbnQudGFyZ2V0KVxufVxuXG5hbmltYXRvci5hZGRMaXN0ZW5lcihhbmltYXRvckFkZExpc3RlbmVyLCB7ZGV0YWlsOiB7aWQ6IDEwMSwgbmFtZTogJ25hbWUnfX0pO1xuYW5pbWF0b3IucmVtb3ZlTGlzdGVuZXIoYW5pbWF0b3JBZGRMaXN0ZW5lcik7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoRW50ZXJGcmFtZS5FTlRFUl9GUkFNRSwgYW5pbWF0b3JBZGRMaXN0ZW5lcik7XG5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKEVudGVyRnJhbWUuRU5URVJfRlJBTUUsIGFuaW1hdG9yQWRkTGlzdGVuZXIpO1xuXG5FeGFtcGxlOlxuXG4qL1xuXG4vKipcbiAqXG4gKiBAcGFyYW0gcGFyYW1ldGVyc1xuICogQHJldHVybnMge2Jvb2xlYW58e2NhbmNlbDogZnVuY3Rpb24sIGNvbXB1dGVkOiB7ZWxhcHNlZDogbnVtYmVyLCBmcmFtZUNvdW50OiBudW1iZXIsIHBhdXNlZDogYm9vbGVhbiwgc3RhcnRwYWx5OiBudW1iZXIsIGZwc0ludGVydmFsOiBudW1iZXIsIG5vdzogbnVtYmVyLCBmcHM6IGJvb2xlYW4sIGNhbGxiYWNrOiBib29sZWFuLCBwcm9ncmVzczogbnVtYmVyLCB0aGVuOiBudW1iZXJ9LCBmcHMsIHJlYWRvbmx5IGNvdW50OiBudW1iZXIsIHN0YXJ0OiBmdW5jdGlvbiwgcmVhZG9ubHkgcHJvZ3Jlc3M6IG51bWJlciwgY2FsbGJhY2ssIHBhdXNlOiBmdW5jdGlvbn18bnVtYmVyfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cblxuY29uc3QgRW50ZXJGcmFtZSA9IGZ1bmN0aW9uIChwYXJhbWV0ZXJzID0ge30pIHtcbiAgICBjb25zdCBkZWZpbmVkUGFyYW1ldGVycyA9IFtcbiAgICAgICAgJ2ZwcycsXG4gICAgICAgICdwYXVzZWQnLFxuICAgICAgICAnbG9vcGVyJyxcbiAgICAgICAgJ2NhbGxiYWNrJyxcbiAgICAgICAgJ2dsb2JhbCcsXG4gICAgXTtcblxuICAgIGNvbnN0IHJvb3QgPSB7XG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBmcHM6IGZhbHNlLFxuICAgICAgICAgICAgcGF1c2VkOiBmYWxzZSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmYWxzZSxcbiAgICAgICAgICAgIG5vdzogMCxcbiAgICAgICAgICAgIGVsYXBzZWQ6IDAsXG4gICAgICAgICAgICB0aGVuOiAwLFxuICAgICAgICAgICAgZnBzSW50ZXJ2YWw6IDAsXG4gICAgICAgICAgICBmcmFtZUNvdW50OiAwLFxuICAgICAgICAgICAgc3RhcnRwYWx5OiAwLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgICAgICAgICBnbG9iYWw6IGZhbHNlLFxuICAgICAgICAgICAgZGV0YWlsOiBmYWxzZSxcbiAgICAgICAgICAgIC8vIGV2ZW50OiBuZXcgRXZlbnQoRW50ZXJGcmFtZS5FTlRFUl9GUkFNRSksXG4gICAgICAgICAgICBldmVudDogbmV3IEN1c3RvbUV2ZW50KEVudGVyRnJhbWUuRU5URVJfRlJBTUUsIHsnZGV0YWlsJzoge30gfSksXG4gICAgICAgICAgICBldmVudFRhcmdldDogbmV3IEV2ZW50VGFyZ2V0KCksXG4gICAgICAgICAgICAvLyBldmVudFRhcmdldDogY3JlYXRlRWxlbWVudCgnc3BhbicsIHtjbGFzczpFbnRlckZyYW1lLkVOVEVSX0ZSQU1FfSksXG4gICAgICAgICAgICAvL25ldyBFdmVudFRhcmdldCgpLC8vY3JlYXRlRWxlbWVudCgnc3Bhbicse2NsYXNzOkVudGVyRnJhbWUuRU5URVJfRlJBTUV9KSxcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGZwcygpIHtcbiAgICAgICAgICAgIHJldHVybiByb290LmNvbXB1dGVkLmZwcztcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGNvdW50KCkge1xuICAgICAgICAgICAgcmV0dXJuIHJvb3QuY29tcHV0ZWQuZnJhbWVDb3VudDtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IHByb2dyZXNzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHJvb3QuY29tcHV0ZWQucHJvZ3Jlc3M7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBwYXVzZWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gcm9vdC5jb21wdXRlZC5wYXVzZWQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBmcHModmFsdWUpIHtcbiAgICAgICAgICAgIHJvb3QuY29tcHV0ZWQuZnBzID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBjYWxsYmFjayh2YWx1ZSkge1xuICAgICAgICAgICAgcm9vdC5jb21wdXRlZC5jYWxsYmFjayA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBwYXVzZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcm9vdC5wYXVzZWQgPSAhcm9vdC5wYXVzZWQ7XG4gICAgICAgIH0sXG4gICAgICAgIHN0YXJ0OiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuY29tcHV0ZWQuY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBmdW5jdGlvbiBjb21wdXRlZENhbGxiYWNrICgpIHt9O1xuICAgICAgICAgICAgaWYgKHRoaXMuY29tcHV0ZWQuZnBzID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcHV0ZWQuZnBzSW50ZXJ2YWwgPSAxMDAwIC8gdGhpcy5jb21wdXRlZC5mcHM7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wdXRlZC50aGVuID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXB1dGVkLnN0YXJ0VGltZSA9IHRoaXMuY29tcHV0ZWQudGhlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY29tcHV0ZWQucmVxdWVzdElkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAgICAgICB9LFxuICAgICAgICBjYW5jZWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShyb290LmNvbXB1dGVkLnJlcXVlc3RJZCk7XG4gICAgICAgIH0sXG4gICAgICAgIGRpc3BhdGNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAocm9vdC5jb21wdXRlZC5kZXRhaWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXB1dGVkLmV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KEVudGVyRnJhbWUuRU5URVJfRlJBTUUsIHsnZGV0YWlsJzogcm9vdC5jb21wdXRlZC5kZXRhaWwgfSk7XG4gICAgICAgICAgICAgICAgcm9vdC5jb21wdXRlZC5kZXRhaWwgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY29tcHV0ZWQuZXZlbnRUYXJnZXQuZGlzcGF0Y2hFdmVudCh0aGlzLmNvbXB1dGVkLmV2ZW50KTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbXB1dGVkLmdsb2JhbCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQocm9vdC5jb21wdXRlZC5ldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZUxpc3RlbmVyOiBmdW5jdGlvbiAobGlzdGVuZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHJvb3QuY29tcHV0ZWQuZXZlbnRUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihFbnRlckZyYW1lLkVOVEVSX0ZSQU1FLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZExpc3RlbmVyOiBmdW5jdGlvbiAobGlzdGVuZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZGV0YWlsKSByb290LmNvbXB1dGVkLmRldGFpbCA9IG9wdGlvbnMuZGV0YWlsO1xuICAgICAgICAgICAgcm9vdC5jb21wdXRlZC5ldmVudFRhcmdldC5hZGRFdmVudExpc3RlbmVyKEVudGVyRnJhbWUuRU5URVJfRlJBTUUsIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgICAgICAgfSxcbiAgICB9XG4gICAgT2JqZWN0LmtleXMocGFyYW1ldGVycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChkZWZpbmVkUGFyYW1ldGVycy5pbmRleE9mKGtleSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMocm9vdCkuaW5kZXhPZihrZXkpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJvb3Rba2V5XSA9ICBwYXJhbWV0ZXJzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByb290LmNvbXB1dGVkW2tleV0gPSAgcGFyYW1ldGVyc1trZXldO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBPYmplY3QudmFsdWVzKGRlZmluZWQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIC8vICAgICByb290LmNvbXB1dGVkW2tleV0gPSAodHlwZW9mIHBhcmFtZXRlcnNba2V5XSAhPT0gdW5kZWZpbmVkKSA/IHBhcmFtZXRlcnNba2V5XSA6IHJvb3QuY29tcHV0ZWRba2V5XTtcbiAgICAvLyB9KTtcblxuICAgIGNvbnN0IGFuaW1hdGlvbiA9IGZ1bmN0aW9uICh0aW1lc3RhbXApIHtcbiAgICAgICAgaWYgKCFyb290LmNvbXB1dGVkLnN0YXJ0cGFseSkgcm9vdC5jb21wdXRlZC5zdGFydHBhbHkgPSB0aW1lc3RhbXA7XG4gICAgICAgIGlmICghcm9vdC5jb21wdXRlZC5mcmFtZUNvdW50KSByb290LmNvbXB1dGVkLmZyYW1lQ291bnQgPSAwO1xuICAgICAgICByb290LmNvbXB1dGVkLnByb2dyZXNzID0gdGltZXN0YW1wIC0gcm9vdC5jb21wdXRlZC5zdGFydHBhbHk7XG4gICAgICAgIGlmIChyb290LmNvbXB1dGVkLmZwcyAmJiByb290LmNvbXB1dGVkLmZwcyA+IDApIHtcbiAgICAgICAgICAgIHJvb3QuY29tcHV0ZWQubm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIHJvb3QuY29tcHV0ZWQuZWxhcHNlZCA9IHJvb3QuY29tcHV0ZWQubm93IC0gcm9vdC5jb21wdXRlZC50aGVuO1xuICAgICAgICAgICAgaWYgKHJvb3QuY29tcHV0ZWQuZWxhcHNlZCA+IHJvb3QuY29tcHV0ZWQuZnBzSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgICAgICByb290LmNvbXB1dGVkLnRoZW4gPSByb290LmNvbXB1dGVkLm5vdyAtIChyb290LmNvbXB1dGVkLmVsYXBzZWQgJSByb290LmNvbXB1dGVkLmZwc0ludGVydmFsKTtcblxuICAgICAgICAgICAgICAgIGlmIChyb290LmNvbXB1dGVkLmNhbGxiYWNrICYmICFyb290LmNvbXB1dGVkLnBhdXNlZCkge1xuICAgICAgICAgICAgICAgICAgICByb290LmNvbXB1dGVkLmZyYW1lQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgcm9vdC5jb21wdXRlZC5jYWxsYmFjay5jYWxsKHJvb3QsIHJvb3QuY29tcHV0ZWQucHJvZ3Jlc3MsIHJvb3QuY29tcHV0ZWQuZnJhbWVDb3VudCk7XG4gICAgICAgICAgICAgICAgICAgIHJvb3QuZGlzcGF0Y2goKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocm9vdC5jb21wdXRlZC5jYWxsYmFjayAmJiAhcm9vdC5jb21wdXRlZC5wYXVzZWQpIHtcbiAgICAgICAgICAgICAgICByb290LmNvbXB1dGVkLmZyYW1lQ291bnQrKztcbiAgICAgICAgICAgICAgICByb290LmNvbXB1dGVkLmNhbGxiYWNrLmNhbGwocm9vdCwgcm9vdC5jb21wdXRlZC5wcm9ncmVzcywgcm9vdC5jb21wdXRlZC5mcmFtZUNvdW50KTtcbiAgICAgICAgICAgICAgICByb290LmRpc3BhdGNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcm9vdDtcbn07XG5FbnRlckZyYW1lLkVOVEVSX0ZSQU1FID0gJ2VudGVyX2ZyYW1lJztcbkVudGVyRnJhbWUuaW5zdGFuY2UgPSBmdW5jdGlvbiAocGFyYW1ldGVycyA9IHt9KSB7XG4gICAgcmV0dXJuIG5ldyBFbnRlckZyYW1lKG1lcmdlKHtcbiAgICAgICAgZnBzOiA2MCxcbiAgICAgICAgLy8gY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgIH0sIHBhcmFtZXRlcnMpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVudGVyRnJhbWU7XG5cbiIsIi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqIEB0eXBlIHt7c3VwZXI6IERvY3VtZW50RnJhZ21lbnQsIGFkZEV2ZW50OiAoZnVuY3Rpb24oKj0sICo9KTogQ3VzdG9tRXZlbnQpLCByZW1vdmVFdmVudExpc3RlbmVyOiAoZnVuY3Rpb24oKj0sICo9LCAqPSk6IHRoaXMpLCBkaXNwYXRjaEV2ZW50OiAoZnVuY3Rpb24oKik6IHRoaXMpLCBldmVudHNUeXBlOiB7fSwgcmVtb3ZlRXZlbnQ6IChmdW5jdGlvbigqKTogdGhpcyksIHZlcnNpb246IHN0cmluZywgYWRkRXZlbnRMaXN0ZW5lcjogKGZ1bmN0aW9uKCo9LCAqPSwgKj0pOiB7dHlwZTogKiwgbGlzdGVuZXI6ICosIHVzZUNhcHR1cmU6ICgqfGJvb2xlYW4pfSl9fVxuICovXG5jb25zdCBFdmVudE1hbmFnZXIgPSB7XG4gICAgc3VwZXI6IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcbiAgICB2ZXJzaW9uOiAnMC4wLjInLFxuICAgIGV2ZW50c1R5cGU6IHt9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIG5ldyBFdmVudFxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICogQHBhcmFtIGRldGFpbHNcbiAgICAgKiBAcmV0dXJucyB7Q3VzdG9tRXZlbnR9XG4gICAgICovXG4gICAgYWRkRXZlbnQ6IGZ1bmN0aW9uKG5hbWUsIGRldGFpbHMpIHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQobmFtZSwge2RldGFpbDogZGV0YWlsc30pO1xuICAgICAgICBpZiAodHlwZW9mIGRldGFpbHMgPT09ICdvYmplY3QnKVxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGRldGFpbHMpXG4gICAgICAgICAgICAgICAgaWYgKCFldmVudC5oYXNPd25Qcm9wZXJ0eShrZXkpKSBldmVudFtrZXldID0gZGV0YWlsc1trZXldO1xuXG4gICAgICAgIEV2ZW50TWFuYWdlci5zdXBlcltuYW1lXSA9IGV2ZW50O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIEV2ZW50XG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKi9cbiAgICByZW1vdmVFdmVudDogZnVuY3Rpb24obmFtZSl7XG4gICAgICAgIGlmIChFdmVudE1hbmFnZXIuc3VwZXJbbmFtZV0pXG4gICAgICAgICAgICBkZWxldGUgRXZlbnRNYW5hZ2VyLnN1cGVyW25hbWVdXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBhbiBldmVudCBoYW5kbGVyIG9mIGEgc3BlY2lmaWMgZXZlbnQgdHlwZSBvbiB0aGUgRXZlbnRUYXJnZXQuXG4gICAgICogQHBhcmFtIHR5cGVcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXJcbiAgICAgKiBAcGFyYW0gdXNlQ2FwdHVyZVxuICAgICAqIEByZXR1cm5zIHt7dHlwZTogKiwgbGlzdGVuZXI6ICosIHVzZUNhcHR1cmU6ICgqfGJvb2xlYW4pfX1cbiAgICAgKi9cbiAgICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUpe1xuICAgICAgICB1c2VDYXB0dXJlID0gdXNlQ2FwdHVyZSB8fCBmYWxzZTtcbiAgICAgICAgRXZlbnRNYW5hZ2VyLnN1cGVyLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbiBldmVudCBsaXN0ZW5lciBmcm9tIHRoZSBFdmVudFRhcmdldC5cbiAgICAgKiBAcGFyYW0gdHlwZVxuICAgICAqIEBwYXJhbSBsaXN0ZW5lclxuICAgICAqIEBwYXJhbSB1c2VDYXB0dXJlXG4gICAgICovXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKSB7XG4gICAgICAgIEV2ZW50TWFuYWdlci5zdXBlci5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlfHxmYWxzZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEaXNwYXRjaCBhbiBldmVudCB0byB0aGlzIEV2ZW50VGFyZ2V0LlxuICAgICAqIEBwYXJhbSB0eXBlXG4gICAgICovXG4gICAgZGlzcGF0Y2hFdmVudDogZnVuY3Rpb24gKHR5cGUpe1xuICAgICAgICBpZiAoRXZlbnRNYW5hZ2VyLnN1cGVyW3R5cGVdIGluc3RhbmNlb2YgQ3VzdG9tRXZlbnQpXG4gICAgICAgICAgICBFdmVudE1hbmFnZXIuc3VwZXIuZGlzcGF0Y2hFdmVudChFdmVudE1hbmFnZXIuc3VwZXJbdHlwZV0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudE1hbmFnZXI7XG4iLCIvKlxuY29uc3QgZnIgPSBGcmFtZXMoe1xuICAgIGZwczogMjQsXG4gICAgcGF1c2VkOiBmYWxzZSxcbiAgICBjYWxsYmFjazogKHByb2dyZXNzKSA9PiB7IGlmIChNYXRoLnJvdW5kKHByb2dyZXNzKSAlIDEwMDAgPT09IDApIHsgLy8gLi4uIH0gfSxcbn0pO1xuXG4jIyMgTWV0aG9kc1xuZnIuc3RhcnQoKTtcbmZyLnBhdXNlKCk7XG5mci5jYW5jZWwoKTtcblxuIyMjIEdldHRlcnNcbmZyLmZwcztcbmZyLmNvdW50O1xuZnIucHJvZ3Jlc3M7XG5mci5wYXVzZWQ7XG4qL1xuXG4vKipcbiAqXG4gKiBAZGVwcmVjYXRlZFxuICogQHBhcmFtIHBhcmFtZXRlcnNcbiAqIEByZXR1cm5zIHtib29sZWFufHtjYW5jZWw6IGZ1bmN0aW9uLCBjb21wdXRlZDoge2VsYXBzZWQ6IG51bWJlciwgZnJhbWVDb3VudDogbnVtYmVyLCBwYXVzZWQ6IGJvb2xlYW4sIHN0YXJ0cGFseTogbnVtYmVyLCBmcHNJbnRlcnZhbDogbnVtYmVyLCBub3c6IG51bWJlciwgZnBzOiBib29sZWFuLCBjYWxsYmFjazogYm9vbGVhbiwgcHJvZ3Jlc3M6IG51bWJlciwgdGhlbjogbnVtYmVyfSwgZnBzLCByZWFkb25seSBjb3VudDogbnVtYmVyLCBzdGFydDogZnVuY3Rpb24sIHJlYWRvbmx5IHByb2dyZXNzOiBudW1iZXIsIGNhbGxiYWNrLCBwYXVzZTogZnVuY3Rpb259fG51bWJlcn1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBGcmFtZXMgPSBmdW5jdGlvbiAocGFyYW1ldGVycyA9IHt9KSB7XG4gICAgY29uc3QgZGVmaW5lZFBhcmFtZXRlcnMgPSBbXG4gICAgICAgICdmcHMnLFxuICAgICAgICAncGF1c2VkJyxcbiAgICAgICAgJ2xvb3BlcicsXG4gICAgICAgICdjYWxsYmFjaycsXG4gICAgXTtcblxuICAgIGNvbnN0IHJvb3QgPSB7XG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBmcHM6IGZhbHNlLFxuICAgICAgICAgICAgcGF1c2VkOiBmYWxzZSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmYWxzZSxcbiAgICAgICAgICAgIG5vdzogMCxcbiAgICAgICAgICAgIGVsYXBzZWQ6IDAsXG4gICAgICAgICAgICB0aGVuOiAwLFxuICAgICAgICAgICAgZnBzSW50ZXJ2YWw6IDAsXG4gICAgICAgICAgICBmcmFtZUNvdW50OiAwLFxuICAgICAgICAgICAgc3RhcnRwYWx5OiAwLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIGdldCBmcHMoKSB7XG4gICAgICAgICAgICByZXR1cm4gcm9vdC5jb21wdXRlZC5mcHM7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBjb3VudCgpIHtcbiAgICAgICAgICAgIHJldHVybiByb290LmNvbXB1dGVkLmZyYW1lQ291bnQ7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBwcm9ncmVzcygpIHtcbiAgICAgICAgICAgIHJldHVybiByb290LmNvbXB1dGVkLnByb2dyZXNzO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgcGF1c2VkKCkge1xuICAgICAgICAgICAgcmV0dXJuIHJvb3QuY29tcHV0ZWQucGF1c2VkO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgZnBzKHZhbHVlKSB7XG4gICAgICAgICAgICByb290LmNvbXB1dGVkLmZwcyA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgY2FsbGJhY2sodmFsdWUpIHtcbiAgICAgICAgICAgIHJvb3QuY29tcHV0ZWQuY2FsbGJhY2sgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgcGF1c2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJvb3QucGF1c2VkID0gIXJvb3QucGF1c2VkO1xuICAgICAgICB9LFxuICAgICAgICBzdGFydDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICByb290LmNvbXB1dGVkLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocm9vdC5jb21wdXRlZC5mcHMgPiAwKSB7XG4gICAgICAgICAgICAgICAgcm9vdC5jb21wdXRlZC5mcHNJbnRlcnZhbCA9IDEwMDAgLyByb290LmNvbXB1dGVkLmZwcztcbiAgICAgICAgICAgICAgICByb290LmNvbXB1dGVkLnRoZW4gPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIHJvb3QuY29tcHV0ZWQuc3RhcnRUaW1lID0gcm9vdC5jb21wdXRlZC50aGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcm9vdC5jb21wdXRlZC5yZXF1ZXN0SWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgICAgIH0sXG4gICAgICAgIGNhbmNlbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHJvb3QuY29tcHV0ZWQucmVxdWVzdElkKTtcbiAgICAgICAgfSxcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyhwYXJhbWV0ZXJzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKGRlZmluZWRQYXJhbWV0ZXJzLmluZGV4T2Yoa2V5KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhyb290KS5pbmRleE9mKGtleSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcm9vdFtrZXldID0gIHBhcmFtZXRlcnNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJvb3QuY29tcHV0ZWRba2V5XSA9ICBwYXJhbWV0ZXJzW2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBPYmplY3QudmFsdWVzKGRlZmluZWQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIC8vICAgICByb290LmNvbXB1dGVkW2tleV0gPSAodHlwZW9mIHBhcmFtZXRlcnNba2V5XSAhPT0gdW5kZWZpbmVkKSA/IHBhcmFtZXRlcnNba2V5XSA6IHJvb3QuY29tcHV0ZWRba2V5XTtcbiAgICAvLyB9KTtcblxuICAgIGNvbnN0IGFuaW1hdGlvbiA9IGZ1bmN0aW9uICh0aW1lc3RhbXApIHtcbiAgICAgICAgaWYgKCFyb290LmNvbXB1dGVkLnN0YXJ0cGFseSkgcm9vdC5jb21wdXRlZC5zdGFydHBhbHkgPSB0aW1lc3RhbXA7XG4gICAgICAgIGlmICghcm9vdC5jb21wdXRlZC5mcmFtZUNvdW50KSByb290LmNvbXB1dGVkLmZyYW1lQ291bnQgPSAwO1xuICAgICAgICByb290LmNvbXB1dGVkLnByb2dyZXNzID0gdGltZXN0YW1wIC0gcm9vdC5jb21wdXRlZC5zdGFydHBhbHk7XG4gICAgICAgIGlmIChyb290LmNvbXB1dGVkLmZwcyAmJiByb290LmNvbXB1dGVkLmZwcyA+IDApIHtcbiAgICAgICAgICAgIHJvb3QuY29tcHV0ZWQubm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIHJvb3QuY29tcHV0ZWQuZWxhcHNlZCA9IHJvb3QuY29tcHV0ZWQubm93IC0gcm9vdC5jb21wdXRlZC50aGVuO1xuICAgICAgICAgICAgaWYgKHJvb3QuY29tcHV0ZWQuZWxhcHNlZCA+IHJvb3QuY29tcHV0ZWQuZnBzSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgICAgICByb290LmNvbXB1dGVkLnRoZW4gPSByb290LmNvbXB1dGVkLm5vdyAtIChyb290LmNvbXB1dGVkLmVsYXBzZWQgJSByb290LmNvbXB1dGVkLmZwc0ludGVydmFsKTtcblxuICAgICAgICAgICAgICAgIGlmIChyb290LmNvbXB1dGVkLmNhbGxiYWNrICYmICFyb290LmNvbXB1dGVkLnBhdXNlZCkge1xuICAgICAgICAgICAgICAgICAgICByb290LmNvbXB1dGVkLmZyYW1lQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgcm9vdC5jb21wdXRlZC5jYWxsYmFjay5jYWxsKHJvb3QsIHJvb3QuY29tcHV0ZWQucHJvZ3Jlc3MsIHJvb3QuY29tcHV0ZWQuZnJhbWVDb3VudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHJvb3QuY29tcHV0ZWQuY2FsbGJhY2sgJiYgIXJvb3QuY29tcHV0ZWQucGF1c2VkKSB7XG4gICAgICAgICAgICAgICAgcm9vdC5jb21wdXRlZC5mcmFtZUNvdW50Kys7XG4gICAgICAgICAgICAgICAgcm9vdC5jb21wdXRlZC5jYWxsYmFjay5jYWxsKHJvb3QsIHJvb3QuY29tcHV0ZWQucHJvZ3Jlc3MsIHJvb3QuY29tcHV0ZWQuZnJhbWVDb3VudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcm9vdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZyYW1lcztcblxuIiwiaW1wb3J0IHF1ZXJ5IGZyb20gXCIuLi9zdGF0aWMvcXVlcnlcIjtcblxuXG4vKlxuY29uc3QgZ3JhcGhpYyA9IEdyYXBoaWMoe1xuICAgIGNhbnZhczogdmFsdWUsXG4gICAgY29udGV4dDogdmFsdWUsXG4gICAgY29sb3I6IHZhbHVlLFxuICAgIGFscGhhOiB2YWx1ZSxcbiAgICB0aGlja25lc3M6IHZhbHVlLFxuICAgIGNhcDogdmFsdWUsXG4gICAgam9pbjogdmFsdWUsXG4gICAgZm9udDogdmFsdWUsXG59KTtcblxuZ3JhcGhpYy5yZWN0Um91bmQoMTEwLDEwLDEwMCwyNSw1KTtcbmdyYXBoaWMuZmlsbCgpO1xuXG5cbiovXG4vKipcbiAqXG4gKiBAcGFyYW0gcGFyYW1zXG4gKiBAcmV0dXJuIHt7Zm9ybWF0c0FwcGx5KCk6IHZvaWQsIGludGVybmFsUmVjdFJvdW5kKCo9LCAqPSwgKiwgKiwgKj0pOiB2b2lkLCBmb3JtYXRzOiB7Y2FwOiBib29sZWFuLCBjb2xvcjogc3RyaW5nLCB0aGlja25lc3M6IGJvb2xlYW4sIGFscGhhOiBib29sZWFuLCBqb2luOiBib29sZWFufSwgY2xlYXJTaGFkb3coKTogdGhpcywgY29sb3I6IChmdW5jdGlvbigqKTogdGhpcyksIHNoYWRvdygqLCAqLCAqLCAqKTogdGhpcywgdGhpY2tuZXNzOiAoZnVuY3Rpb24oKik6IHRoaXMpLCBsaW5lKCo9LCAqPSwgKj0sICo9KTogdGhpcywgc2F2ZSgpOiB2b2lkLCByZWN0Um91bmQoKj0sICo9LCAqPSwgKj0sICo9KTogdGhpcywgY2FwOiAoZnVuY3Rpb24oKik6IHRoaXMpLCBhbHBoYTogKGZ1bmN0aW9uKCopOiB0aGlzKSwgY29udGV4dDogKiwgZWxsaXBzZSgqPSwgKj0sICosICo9LCAqPSwgKj0sICo9LCAqPSwgKj0pOiB0aGlzLCBqb2luOiAoZnVuY3Rpb24oKik6IHRoaXMpLCBjbG9zZSgpOiB2b2lkLCBKT0lOUzoge1JPVU5EOiBzdHJpbmcsIEJFVkVMOiBzdHJpbmcsIE1JVEVSOiBzdHJpbmd9LCBkcmF3Q2FsbGJhY2s6IGRyYXdDYWxsYmFjaywgcmVzdG9yZSgpOiB2b2lkLCBzaGFwZSgqLCAqPSk6IHRoaXMsIGZpbGwoKTogdGhpcywgc3Ryb2tlKCk6IHRoaXMsIGNpcmNsZSgqLCAqLCAqPSk6IHRoaXMsIGJlZ2luKCk6IHZvaWQsIENBUFM6IHtTUVVBUkU6IHN0cmluZywgUk9VTkQ6IHN0cmluZywgQlVUVDogc3RyaW5nfX18Kn1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBHcmFwaGljID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIGNvbnN0IGNhbnZhcyA9IHBhcmFtc1snY2FudmFzJ11cbiAgICAgICAgPyBwYXJhbXNbJ2NhbnZhcyddXG4gICAgICAgIDogcXVlcnkoJ2NhbnZhcycpO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHBhcmFtc1snY29udGV4dCddXG4gICAgICAgID8gcGFyYW1zWydjb250ZXh0J11cbiAgICAgICAgOiAoY2FudmFzID8gY2FudmFzLmdldENvbnRleHQoJzJkJykgOiBmYWxzZSk7XG5cbiAgICBpZiAoIWNhbnZhcyB8fCAhY29udGV4dCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2FudmFzOiBjYW52YXMsXG4gICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgIGRyYXdDYWxsYmFjazogZnVuY3Rpb24gKCkge30sXG4gICAgICAgIHByb3BlcnRpZXMocHJvcHMpe1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhHcmFwaGljLmRlZmF1bHQucHJvcGVydGllcykuaW5kZXhPZihrZXkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0W2tleV0gPSBwcm9wc1trZXldO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGV4dFtrZXldID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dFtrZXldLmFwcGx5KGNvbnRleHQsIHByb3BzW2tleV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBmb3JtYXRzOiB7XG4gICAgICAgICAgICBjb2xvcjogcGFyYW1zWydjb2xvciddIHx8ICcjMDAwMDAwJyxcbiAgICAgICAgICAgIGFscGhhOiBwYXJhbXNbJ2FscGhhJ10gfHwgZmFsc2UsXG4gICAgICAgICAgICB0aGlja25lc3M6IHBhcmFtc1sndGhpY2tuZXNzJ10gfHwgZmFsc2UsXG4gICAgICAgICAgICBjYXA6IHBhcmFtc1snY2FwJ10gfHwgZmFsc2UsXG4gICAgICAgICAgICBqb2luOiBwYXJhbXNbJ2pvaW4nXSB8fCBmYWxzZSxcbiAgICAgICAgICAgIGZvbnQ6IHBhcmFtc1snZm9udCddIHx8IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbG9yICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtYXRzLmNvbG9yID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICAvLyAwIC0gMVxuICAgICAgICBhbHBoYSAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybWF0cy5hbHBoYSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gMCAtIDEwMFxuICAgICAgICB0aGlja25lc3MgICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtYXRzLnRoaWNrbmVzcyA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gYnV0dCwgcm91bmQsIHNxdWFyZVxuICAgICAgICBjYXAgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1hdHMuY2FwID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICAvLyByb3VuZCwgYmV2ZWwsIG1pdGVyXG4gICAgICAgIGpvaW4gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1hdHMuam9pbiA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZm9udCAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybWF0cy5mb250ID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICBDQVBTOiB7XG4gICAgICAgICAgICBCVVRUOiBcImJ1dHRcIixcbiAgICAgICAgICAgIFJPVU5EOiBcInJvdW5kXCIsXG4gICAgICAgICAgICBTUVVBUkU6IFwic3F1YXJlXCIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgSk9JTlM6IHtcbiAgICAgICAgICAgIEJFVkVMOiBcImJldmVsXCIsXG4gICAgICAgICAgICBST1VORDogXCJyb3VuZFwiLFxuICAgICAgICAgICAgTUlURVI6IFwibWl0ZXJcIixcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBkcmF3XG4gICAgICAgIHRleHQgKG1lc3NhZ2UsIHggPSAwLCB5ID0gMCwgcGFyYW1zID0ge30pIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybWF0c0FwcGx5KCk7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQobWVzc2FnZSwgeCwgeSk7XG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdHNBcHBseSAoKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmZvcm1hdHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hcCA9IHtcbiAgICAgICAgICAgICAgICAgICAgYWxwaGE6ICdnbG9iYWxBbHBoYScsXG4gICAgICAgICAgICAgICAgICAgIHRoaWNrbmVzczogJ2xpbmVXaWR0aCcsXG4gICAgICAgICAgICAgICAgICAgIGNhcDogJ2xpbmVDYXAnLFxuICAgICAgICAgICAgICAgICAgICBqb2luOiAnam9pbicsXG4gICAgICAgICAgICAgICAgICAgIC8vY29sb3I6ICdmaWxsU3R5bGUnLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc3QgY29udmVydE5hbWUgPSAoa2V5KSA9PiBtYXBba2V5XSAhPT0gdW5kZWZpbmVkID8gbWFwW2tleV0gOiBrZXk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtYXRzW2tleV0gIT09IGZhbHNlICYmIE9iamVjdC5rZXlzKEdyYXBoaWMuZGVmYXVsdC5wcm9wZXJ0aWVzKS5pbmNsdWRlcyhjb252ZXJ0TmFtZShrZXkpKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHRbY29udmVydE5hbWUoa2V5KV0gPSB0aGlzLmZvcm1hdHNba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgYmVnaW4oKSB7dGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpfSxcbiAgICAgICAgY2xvc2UoKSB7dGhpcy5jb250ZXh0LmNsb3NlUGF0aCgpfSxcbiAgICAgICAgc2F2ZSgpIHt0aGlzLmNvbnRleHQuc2F2ZSgpfSxcbiAgICAgICAgcmVzdG9yZSgpIHt0aGlzLmNvbnRleHQucmVzdG9yZSgpfSxcbiAgICAgICAgc2hhZG93KHgsIHksIGJsdXIsIGNvbG9yKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuc2hhZG93T2Zmc2V0WCA9IHg7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuc2hhZG93T2Zmc2V0WSA9IHk7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuc2hhZG93Qmx1ciA9IGJsdXI7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuc2hhZG93Q29sb3IgPSBjb2xvcjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuICAgICAgICBjbGVhcih4ID0gMCwgeSA9IDAsIHdpZHRoPSAxMDAwLCBoZWlnaHQgPSAxMDAwKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KHgseSx3aWR0aCxoZWlnaHQpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIGNsZWFyU2hhZG93KCkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnNoYWRvd09mZnNldFggPVxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5zaGFkb3dPZmZzZXRZID1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LnNoYWRvd0JsdXIgPSAwO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIGNpcmNsZSh4LCB5LCByYWRpdXMpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd0NhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxSZWN0Um91bmQoeCAtIChyYWRpdXMgLyAyKSwgeSAtIChyYWRpdXMgLyAyKSwgcmFkaXVzLCByYWRpdXMsIHJhZGl1cyAvIDIpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlY3QgKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd0NhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQucmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICBpbnRlcm5hbFJlY3RSb3VuZCh4LCB5LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5tb3ZlVG8oeCArIHJhZGl1cywgeSk7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuYXJjVG8oeCArIHdpZHRoLCB5LCB4ICsgd2lkdGgsIHkgKyBoZWlnaHQsIHJhZGl1cyk7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuYXJjVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0LCB4LCB5ICsgaGVpZ2h0LCByYWRpdXMpO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmFyY1RvKHgsIHkgKyBoZWlnaHQsIHgsIHksIHJhZGl1cyk7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuYXJjVG8oeCwgeSwgeCArIHdpZHRoLCB5LCByYWRpdXMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlY3RSb3VuZCAoeCwgeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzID0gNSkge1xuICAgICAgICAgICAgdGhpcy5kcmF3Q2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlcm5hbFJlY3RSb3VuZCh4LCB5LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2hhcGUgKHBvaW50cywgY2xvc2VQYXRoKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgaSwgdGVtcCA9IHt9LCBwb3NpdGlvbnMgPSBbXTtcbiAgICAgICAgICAgICAgICBwb2ludHMubWFwKGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZW1wLnggPT09IHVuZGVmaW5lZCkge3RlbXAueCA9IHB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRlbXAueSA9PT0gdW5kZWZpbmVkKSB7dGVtcC55ID0gcH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodGVtcC54ICE9PSB1bmRlZmluZWQgJiYgdGVtcC55ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9ucy5wdXNoKHRlbXApO3RlbXAgPSB7fX1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcG9zaXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5saW5lVG8ocG9zaXRpb25zW2ldLngsIHBvc2l0aW9uc1tpXS55KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoISFjbG9zZVBhdGgpIHRoaXMuY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICBsaW5lICh4MSwgeTEsIHgyLCB5Mikge1xuICAgICAgICAgICAgdGhpcy5kcmF3Q2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5tb3ZlVG8oeDEsIHkxKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQubGluZVRvKHgyLCB5Mik7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZWxsaXBzZSAoeCwgeSwgcmFkaXVzWCwgcmFkaXVzWSwgcm90YXRpb24sIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBhbnRpY2xvY2t3aXNlLCBjbG9zZVBhdGgpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd0NhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5zYXZlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC50cmFuc2xhdGUoeCwgeSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LnJvdGF0ZShyb3RhdGlvbik7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LnNjYWxlKHJhZGl1c1ggLyByYWRpdXNZLCAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuYXJjKDAsIDAsIHJhZGl1c1ksIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBhbnRpY2xvY2t3aXNlID8gISFhbnRpY2xvY2t3aXNlIDogZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5yZXN0b3JlKCk7XG4gICAgICAgICAgICAgICAgaWYgKGNsb3NlUGF0aCkgdGhpcy5jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuXG4gICAgICAgIHN0cm9rZSAoKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1hdHNBcHBseSgpO1xuICAgICAgICAgICAgdGhpcy5kcmF3Q2FsbGJhY2suY2FsbCh0aGlzKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWF0cy5jb2xvcilcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLmZvcm1hdHMuY29sb3I7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuXG4gICAgICAgIGZpbGwgKCkge1xuICAgICAgICAgICAgdGhpcy5mb3JtYXRzQXBwbHkoKTtcbiAgICAgICAgICAgIHRoaXMuZHJhd0NhbGxiYWNrLmNhbGwodGhpcyk7XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtYXRzLmNvbG9yKVxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmZvcm1hdHMuY29sb3I7XG5cbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsKCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuICAgIH1cbn1cbkdyYXBoaWMuZGVmYXVsdCA9IHt9O1xuR3JhcGhpYy5kZWZhdWx0LnByb3BlcnRpZXMgPSB7XG4gICAgZGlyZWN0aW9uOiBcImx0clwiLFxuICAgIGZpbGxTdHlsZTogXCIjMDAwMDAwXCIsXG4gICAgZmlsdGVyOiBcIm5vbmVcIixcbiAgICBmb250OiBcIjEwcHggc2Fucy1zZXJpZlwiLFxuICAgIGdsb2JhbEFscGhhOiAxLFxuICAgIGdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbjogXCJzb3VyY2Utb3ZlclwiLFxuICAgIGltYWdlU21vb3RoaW5nRW5hYmxlZDogdHJ1ZSxcbiAgICBpbWFnZVNtb290aGluZ1F1YWxpdHk6IFwibG93XCIsXG4gICAgbGluZUNhcDogXCJidXR0XCIsXG4gICAgbGluZURhc2hPZmZzZXQ6IDAsXG4gICAgbGluZUpvaW46IFwibWl0ZXJcIixcbiAgICBsaW5lV2lkdGg6IDEsXG4gICAgbWl0ZXJMaW1pdDogMTAsXG4gICAgc2hhZG93Qmx1cjogMCxcbiAgICBzaGFkb3dDb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDApXCIsXG4gICAgc2hhZG93T2Zmc2V0WDogMCxcbiAgICBzaGFkb3dPZmZzZXRZOiAwLFxuICAgIHN0cm9rZVN0eWxlOiBcIiMwMDAwMDBcIixcbiAgICB0ZXh0QWxpZ246IFwic3RhcnRcIixcbiAgICB0ZXh0QmFzZWxpbmU6IFwiYWxwaGFiZXRpY1wiLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JhcGhpYzsiLCJcbmV4cG9ydCBjb25zdCBFdmVudENvZGVzID0ge1xuICAgICdCYWNrc3BhY2UnOiA4LFxuICAgICdUYWInOiA5LFxuICAgICdFbnRlcic6IDEzLFxuICAgICdTaGlmdExlZnQnOiAxNixcbiAgICAnU2hpZnRSaWdodCc6IDE2LFxuICAgICdDb250cm9sTGVmdCc6IDE3LFxuICAgICdDb250cm9sUmlnaHQnOiAxNyxcbiAgICAnQWx0TGVmdCc6IDE4LFxuICAgICdBbHRSaWdodCc6IDE4LFxuICAgICdQYXVzZSc6IDE5LFxuICAgICdCcmVhayc6IDE5LFxuICAgICdDYXBzTG9jayc6IDIwLFxuICAgICdFc2NhcGUnOiAyNyxcbiAgICAnU3BhY2UnOiAzMixcbiAgICAnUGFnZVVwJzogMzMsXG4gICAgJ1BhZ2VEb3duJzogMzQsXG4gICAgJ0VuZCc6IDM1LFxuICAgICdIb21lJzogMzYsXG4gICAgJ0Fycm93TGVmdCc6IDM3LFxuICAgICdBcnJvd1VwJzogMzgsXG4gICAgJ0Fycm93UmlnaHQnOiAzOSxcbiAgICAnQXJyb3dEb3duJzogNDAsXG4gICAgJ1ByaW50U2NyZWVuJzogNDQsXG4gICAgJ0luc2VydCc6IDQ1LFxuICAgICdEZWxldGUnOiA0NixcbiAgICAnRGlnaXQwJzogNDgsXG4gICAgJ0RpZ2l0MSc6IDQ5LFxuICAgICdEaWdpdDInOiA1MCxcbiAgICAnRGlnaXQzJzogNTEsXG4gICAgJ0RpZ2l0NCc6IDUyLFxuICAgICdEaWdpdDUnOiA1MyxcbiAgICAnRGlnaXQ2JzogNTQsXG4gICAgJ0RpZ2l0Nyc6IDU1LFxuICAgICdEaWdpdDgnOiA1NixcbiAgICAnRGlnaXQ5JzogNTcsXG4gICAgJ0tleUEnOiA2NSxcbiAgICAnS2V5Qic6IDY2LFxuICAgICdLZXlDJzogNjcsXG4gICAgJ0tleUQnOiA2OCxcbiAgICAnS2V5RSc6IDY5LFxuICAgICdLZXlGJzogNzAsXG4gICAgJ0tleUcnOiA3MSxcbiAgICAnS2V5SCc6IDcyLFxuICAgICdLZXlJJzogNzMsXG4gICAgJ0tleUonOiA3NCxcbiAgICAnS2V5Syc6IDc1LFxuICAgICdLZXlMJzogNzYsXG4gICAgJ0tleU0nOiA3NyxcbiAgICAnS2V5Tic6IDc4LFxuICAgICdLZXlPJzogNzksXG4gICAgJ0tleVAnOiA4MCxcbiAgICAnS2V5USc6IDgxLFxuICAgICdLZXlSJzogODIsXG4gICAgJ0tleVMnOiA4MyxcbiAgICAnS2V5VCc6IDg0LFxuICAgICdLZXlVJzogODUsXG4gICAgJ0tleVYnOiA4NixcbiAgICAnS2V5Vyc6IDg3LFxuICAgICdLZXlYJzogODgsXG4gICAgJ0tleVknOiA4OSxcbiAgICAnS2V5Wic6IDkwLFxuICAgICdNZXRhTGVmdCc6IDkxLFxuICAgICdNZXRhUmlnaHQnOiA5MixcbiAgICAnQ29udGV4dE1lbnUnOiA5MyxcbiAgICAnTnVtcGFkMCc6IDk2LFxuICAgICdOdW1wYWQxJzogOTcsXG4gICAgJ051bXBhZDInOiA5OCxcbiAgICAnTnVtcGFkMyc6IDk5LFxuICAgICdOdW1wYWQ0JzogMTAwLFxuICAgICdOdW1wYWQ1JzogMTAxLFxuICAgICdOdW1wYWQ2JzogMTAyLFxuICAgICdOdW1wYWQ3JzogMTAzLFxuICAgICdOdW1wYWQ4JzogMTA0LFxuICAgICdOdW1wYWQ5JzogMTA1LFxuICAgICdOdW1wYWRNdWx0aXBseSc6IDEwNixcbiAgICAnTnVtcGFkQWRkJzogMTA3LFxuICAgICdOdW1wYWRTdWJ0cmFjdCc6IDEwOSxcbiAgICAnTnVtcGFkRGVjaW1hbCc6IDExMCxcbiAgICAnTnVtcGFkRGl2aWRlJzogMTExLFxuICAgICdGMSc6IDExMixcbiAgICAnRjInOiAxMTMsXG4gICAgJ0YzJzogMTE0LFxuICAgICdGNCc6IDExNSxcbiAgICAnRjUnOiAxMTYsXG4gICAgJ0Y2JzogMTE3LFxuICAgICdGNyc6IDExOCxcbiAgICAnRjgnOiAxMTksXG4gICAgJ0Y5JzogMTIwLFxuICAgICdGMTAnOiAxMjEsXG4gICAgJ0YxMSc6IDEyMixcbiAgICAnRjEyJzogMTIzLFxuICAgICdOdW1Mb2NrJzogMTQ0LFxuICAgICdTY3JvbGxMb2NrJzogMTQ1LFxuICAgICdTZW1pY29sb24nOiAxODYsXG4gICAgJ0VxdWFsJzogMTg3LFxuICAgICdDb21tYSc6IDE4OCxcbiAgICAnTWludXMnOiAxODksXG4gICAgJ1BlcmlvZCc6IDE5MCxcbiAgICAnU2xhc2gnOiAxOTEsXG4gICAgJ0JhY2txdW90ZSc6IDE5MixcbiAgICAnQnJhY2tldExlZnQnOiAyMTksXG4gICAgJ0JhY2tzbGFzaCc6IDIyMCxcbiAgICAnQnJhY2tldFJpZ2h0JzogMjIxLFxuICAgICdRdW90ZSc6IDIyMixcbn07XG5cbmV4cG9ydCBjb25zdCBFdmVudENvZGVzTmFtZXMgPSB7XG4gICAgJ0JhY2tzcGFjZSc6ICdCYWNrc3BhY2UnLFxuICAgICdUYWInOiAnVGFiJyxcbiAgICAnRW50ZXInOiAnRW50ZXInLFxuICAgICdTaGlmdExlZnQnOiAnU2hpZnRMZWZ0JyxcbiAgICAnU2hpZnRSaWdodCc6ICdTaGlmdFJpZ2h0JyxcbiAgICAnQ29udHJvbExlZnQnOiAnQ29udHJvbExlZnQnLFxuICAgICdDb250cm9sUmlnaHQnOiAnQ29udHJvbFJpZ2h0JyxcbiAgICAnQWx0TGVmdCc6ICdBbHRMZWZ0JyxcbiAgICAnQWx0UmlnaHQnOiAnQWx0UmlnaHQnLFxuICAgICdQYXVzZSc6ICdQYXVzZScsXG4gICAgJ0JyZWFrJzogJ0JyZWFrJyxcbiAgICAnQ2Fwc0xvY2snOiAnQ2Fwc0xvY2snLFxuICAgICdFc2NhcGUnOiAnRXNjYXBlJyxcbiAgICAnU3BhY2UnOiAnU3BhY2UnLFxuICAgICdQYWdlVXAnOiAnUGFnZVVwJyxcbiAgICAnUGFnZURvd24nOiAnUGFnZURvd24nLFxuICAgICdFbmQnOiAnRW5kJyxcbiAgICAnSG9tZSc6ICdIb21lJyxcbiAgICAnQXJyb3dMZWZ0JzogJ0Fycm93TGVmdCcsXG4gICAgJ0Fycm93VXAnOiAnQXJyb3dVcCcsXG4gICAgJ0Fycm93UmlnaHQnOiAnQXJyb3dSaWdodCcsXG4gICAgJ0Fycm93RG93bic6ICdBcnJvd0Rvd24nLFxuICAgICdQcmludFNjcmVlbic6ICdQcmludFNjcmVlbicsXG4gICAgJ0luc2VydCc6ICdJbnNlcnQnLFxuICAgICdEZWxldGUnOiAnRGVsZXRlJyxcbiAgICAnRGlnaXQwJzogJ0RpZ2l0MCcsXG4gICAgJ0RpZ2l0MSc6ICdEaWdpdDEnLFxuICAgICdEaWdpdDInOiAnRGlnaXQyJyxcbiAgICAnRGlnaXQzJzogJ0RpZ2l0MycsXG4gICAgJ0RpZ2l0NCc6ICdEaWdpdDQnLFxuICAgICdEaWdpdDUnOiAnRGlnaXQ1JyxcbiAgICAnRGlnaXQ2JzogJ0RpZ2l0NicsXG4gICAgJ0RpZ2l0Nyc6ICdEaWdpdDcnLFxuICAgICdEaWdpdDgnOiAnRGlnaXQ4JyxcbiAgICAnRGlnaXQ5JzogJ0RpZ2l0OScsXG4gICAgJ0tleUEnOiAnS2V5QScsXG4gICAgJ0tleUInOiAnS2V5QicsXG4gICAgJ0tleUMnOiAnS2V5QycsXG4gICAgJ0tleUQnOiAnS2V5RCcsXG4gICAgJ0tleUUnOiAnS2V5RScsXG4gICAgJ0tleUYnOiAnS2V5RicsXG4gICAgJ0tleUcnOiAnS2V5RycsXG4gICAgJ0tleUgnOiAnS2V5SCcsXG4gICAgJ0tleUknOiAnS2V5SScsXG4gICAgJ0tleUonOiAnS2V5SicsXG4gICAgJ0tleUsnOiAnS2V5SycsXG4gICAgJ0tleUwnOiAnS2V5TCcsXG4gICAgJ0tleU0nOiAnS2V5TScsXG4gICAgJ0tleU4nOiAnS2V5TicsXG4gICAgJ0tleU8nOiAnS2V5TycsXG4gICAgJ0tleVAnOiAnS2V5UCcsXG4gICAgJ0tleVEnOiAnS2V5UScsXG4gICAgJ0tleVInOiAnS2V5UicsXG4gICAgJ0tleVMnOiAnS2V5UycsXG4gICAgJ0tleVQnOiAnS2V5VCcsXG4gICAgJ0tleVUnOiAnS2V5VScsXG4gICAgJ0tleVYnOiAnS2V5VicsXG4gICAgJ0tleVcnOiAnS2V5VycsXG4gICAgJ0tleVgnOiAnS2V5WCcsXG4gICAgJ0tleVknOiAnS2V5WScsXG4gICAgJ0tleVonOiAnS2V5WicsXG4gICAgJ01ldGFMZWZ0JzogJ01ldGFMZWZ0JyxcbiAgICAnTWV0YVJpZ2h0JzogJ01ldGFSaWdodCcsXG4gICAgJ0NvbnRleHRNZW51JzogJ0NvbnRleHRNZW51JyxcbiAgICAnTnVtcGFkMCc6ICdOdW1wYWQwJyxcbiAgICAnTnVtcGFkMSc6ICdOdW1wYWQxJyxcbiAgICAnTnVtcGFkMic6ICdOdW1wYWQyJyxcbiAgICAnTnVtcGFkMyc6ICdOdW1wYWQzJyxcbiAgICAnTnVtcGFkNCc6ICdOdW1wYWQ0JyxcbiAgICAnTnVtcGFkNSc6ICdOdW1wYWQ1JyxcbiAgICAnTnVtcGFkNic6ICdOdW1wYWQ2JyxcbiAgICAnTnVtcGFkNyc6ICdOdW1wYWQ3JyxcbiAgICAnTnVtcGFkOCc6ICdOdW1wYWQ4JyxcbiAgICAnTnVtcGFkOSc6ICdOdW1wYWQ5JyxcbiAgICAnTnVtcGFkTXVsdGlwbHknOiAnTnVtcGFkTXVsdGlwbHknLFxuICAgICdOdW1wYWRBZGQnOiAnTnVtcGFkQWRkJyxcbiAgICAnTnVtcGFkU3VidHJhY3QnOiAnTnVtcGFkU3VidHJhY3QnLFxuICAgICdOdW1wYWREZWNpbWFsJzogJ051bXBhZERlY2ltYWwnLFxuICAgICdOdW1wYWREaXZpZGUnOiAnTnVtcGFkRGl2aWRlJyxcbiAgICAnRjEnOiAnRjEnLFxuICAgICdGMic6ICdGMicsXG4gICAgJ0YzJzogJ0YzJyxcbiAgICAnRjQnOiAnRjQnLFxuICAgICdGNSc6ICdGNScsXG4gICAgJ0Y2JzogJ0Y2JyxcbiAgICAnRjcnOiAnRjcnLFxuICAgICdGOCc6ICdGOCcsXG4gICAgJ0Y5JzogJ0Y5JyxcbiAgICAnRjEwJzogJ0YxMCcsXG4gICAgJ0YxMSc6ICdGMTEnLFxuICAgICdGMTInOiAnRjEyJyxcbiAgICAnTnVtTG9jayc6ICdOdW1Mb2NrJyxcbiAgICAnU2Nyb2xsTG9jayc6ICdTY3JvbGxMb2NrJyxcbiAgICAnU2VtaWNvbG9uJzogJ1NlbWljb2xvbicsXG4gICAgJ0VxdWFsJzogJ0VxdWFsJyxcbiAgICAnQ29tbWEnOiAnQ29tbWEnLFxuICAgICdNaW51cyc6ICdNaW51cycsXG4gICAgJ1BlcmlvZCc6ICdQZXJpb2QnLFxuICAgICdTbGFzaCc6ICdTbGFzaCcsXG4gICAgJ0JhY2txdW90ZSc6ICdCYWNrcXVvdGUnLFxuICAgICdCcmFja2V0TGVmdCc6ICdCcmFja2V0TGVmdCcsXG4gICAgJ0JhY2tzbGFzaCc6ICdCYWNrc2xhc2gnLFxuICAgICdCcmFja2V0UmlnaHQnOiAnQnJhY2tldFJpZ2h0JyxcbiAgICAnUXVvdGUnOiAnUXVvdGUnLFxufTtcblxuZXhwb3J0IGNvbnN0IEV2ZW50S2V5cyA9IHtcbiAgICAnYmFja3NwYWNlJzogOCxcbiAgICAndGFiJzogOSxcbiAgICAnZW50ZXInOiAxMyxcbiAgICAnc2hpZnQobGVmdCknOiAxNixcbiAgICAnc2hpZnQocmlnaHQpJzogMTYsXG4gICAgJ2N0cmwobGVmdCknOiAxNyxcbiAgICAnY3RybChyaWdodCknOiAxNyxcbiAgICAnYWx0KGxlZnQpJzogMTgsXG4gICAgJ2FsdChyaWdodCknOiAxOCxcbiAgICAncGF1c2UvYnJlYWsnOiAxOSxcbiAgICAnY2FwcyBsb2NrJzogMjAsXG4gICAgJ2VzY2FwZSc6IDI3LFxuICAgICdzcGFjZSc6IDMyLFxuICAgICdwYWdlIHVwJzogMzMsXG4gICAgJ3BhZ2UgZG93bic6IDM0LFxuICAgICdlbmQnOiAzNSxcbiAgICAnaG9tZSc6IDM2LFxuICAgICdsZWZ0IGFycm93JzogMzcsXG4gICAgJ3VwIGFycm93JzogMzgsXG4gICAgJ3JpZ2h0IGFycm93JzogMzksXG4gICAgJ2Rvd24gYXJyb3cnOiA0MCxcbiAgICAncHJpbnQgc2NyZWVuJzogNDQsXG4gICAgJ2luc2VydCc6IDQ1LFxuICAgICdkZWxldGUnOiA0NixcbiAgICAnMCc6IDQ4LFxuICAgICcxJzogNDksXG4gICAgJzInOiA1MCxcbiAgICAnMyc6IDUxLFxuICAgICc0JzogNTIsXG4gICAgJzUnOiA1MyxcbiAgICAnNic6IDU0LFxuICAgICc3JzogNTUsXG4gICAgJzgnOiA1NixcbiAgICAnOSc6IDU3LFxuICAgICdhJzogNjUsXG4gICAgJ2InOiA2NixcbiAgICAnYyc6IDY3LFxuICAgICdkJzogNjgsXG4gICAgJ2UnOiA2OSxcbiAgICAnZic6IDcwLFxuICAgICdnJzogNzEsXG4gICAgJ2gnOiA3MixcbiAgICAnaSc6IDczLFxuICAgICdqJzogNzQsXG4gICAgJ2snOiA3NSxcbiAgICAnbCc6IDc2LFxuICAgICdtJzogNzcsXG4gICAgJ24nOiA3OCxcbiAgICAnbyc6IDc5LFxuICAgICdwJzogODAsXG4gICAgJ3EnOiA4MSxcbiAgICAncic6IDgyLFxuICAgICdzJzogODMsXG4gICAgJ3QnOiA4NCxcbiAgICAndSc6IDg1LFxuICAgICd2JzogODYsXG4gICAgJ3cnOiA4NyxcbiAgICAneCc6IDg4LFxuICAgICd5JzogODksXG4gICAgJ3onOiA5MCxcbiAgICAnbnVtcGFkIDAnOiA5NixcbiAgICAnbnVtcGFkIDEnOiA5NyxcbiAgICAnbnVtcGFkIDInOiA5OCxcbiAgICAnbnVtcGFkIDMnOiA5OSxcbiAgICAnbnVtcGFkIDQnOiAxMDAsXG4gICAgJ251bXBhZCA1JzogMTAxLFxuICAgICdudW1wYWQgNic6IDEwMixcbiAgICAnbnVtcGFkIDcnOiAxMDMsXG4gICAgJ251bXBhZCA4JzogMTA0LFxuICAgICdudW1wYWQgOSc6IDEwNSxcbiAgICAnbXVsdGlwbHknOiAxMDYsXG4gICAgJ2FkZCc6IDEwNyxcbiAgICAnc3VidHJhY3QnOiAxMDksXG4gICAgJ2RpdmlkZSc6IDExMSxcbiAgICAnZGVjaW1hbCBwb2ludCc6IDExMCxcbiAgICAnZjEnOiAxMTIsXG4gICAgJ2YyJzogMTEzLFxuICAgICdmMyc6IDExNCxcbiAgICAnZjQnOiAxMTUsXG4gICAgJ2Y1JzogMTE2LFxuICAgICdmNic6IDExNyxcbiAgICAnZjcnOiAxMTgsXG4gICAgJ2Y4JzogMTE5LFxuICAgICdmOSc6IDEyMCxcbiAgICAnZjEwJzogMTIxLFxuICAgICdmMTEnOiAxMjIsXG4gICAgJ2YxMic6IDEyMyxcbiAgICAnbnVtIGxvY2snOiAxNDQsXG4gICAgJ3Njcm9sbCBsb2NrJzogMTQ1LFxufTtcblxuZXhwb3J0IGNvbnN0IEV2ZW50S2V5c05hbWVzID0ge1xuXG4gICAgJ2JhY2tzcGFjZSc6ICdiYWNrc3BhY2UnLFxuICAgICd0YWInOiAndGFiJyxcbiAgICAnZW50ZXInOiAnZW50ZXInLFxuICAgICdzaGlmdChsZWZ0KSc6ICdzaGlmdChsZWZ0KScsXG4gICAgJ3NoaWZ0KHJpZ2h0KSc6ICdzaGlmdChyaWdodCknLFxuICAgICdjdHJsKGxlZnQpJzogJ2N0cmwobGVmdCknLFxuICAgICdjdHJsKHJpZ2h0KSc6ICdjdHJsKHJpZ2h0KScsXG4gICAgJ2FsdChsZWZ0KSc6ICdhbHQobGVmdCknLFxuICAgICdhbHQocmlnaHQpJzogJ2FsdChyaWdodCknLFxuICAgICdwYXVzZS9icmVhayc6ICdwYXVzZS9icmVhaycsXG4gICAgJ2NhcHMgbG9jayc6ICdjYXBzIGxvY2snLFxuICAgICdlc2NhcGUnOiAnZXNjYXBlJyxcbiAgICAnc3BhY2UnOiAnc3BhY2UnLFxuICAgICdwYWdlIHVwJzogJ3BhZ2UgdXAnLFxuICAgICdwYWdlIGRvd24nOiAncGFnZSBkb3duJyxcbiAgICAnZW5kJzogJ2VuZCcsXG4gICAgJ2hvbWUnOiAnaG9tZScsXG4gICAgJ2xlZnQgYXJyb3cnOiAnbGVmdCBhcnJvdycsXG4gICAgJ3VwIGFycm93JzogJ3VwIGFycm93JyxcbiAgICAncmlnaHQgYXJyb3cnOiAncmlnaHQgYXJyb3cnLFxuICAgICdkb3duIGFycm93JzogJ2Rvd24gYXJyb3cnLFxuICAgICdwcmludCBzY3JlZW4nOiAncHJpbnQgc2NyZWVuJyxcbiAgICAnaW5zZXJ0JzogJ2luc2VydCcsXG4gICAgJ2RlbGV0ZSc6ICdkZWxldGUnLFxuICAgICcwJzogJzAnLFxuICAgICcxJzogJzEnLFxuICAgICcyJzogJzInLFxuICAgICczJzogJzMnLFxuICAgICc0JzogJzQnLFxuICAgICc1JzogJzUnLFxuICAgICc2JzogJzYnLFxuICAgICc3JzogJzcnLFxuICAgICc4JzogJzgnLFxuICAgICc5JzogJzknLFxuICAgICdhJzogJ2EnLFxuICAgICdiJzogJ2InLFxuICAgICdjJzogJ2MnLFxuICAgICdkJzogJ2QnLFxuICAgICdlJzogJ2UnLFxuICAgICdmJzogJ2YnLFxuICAgICdnJzogJ2cnLFxuICAgICdoJzogJ2gnLFxuICAgICdpJzogJ2knLFxuICAgICdqJzogJ2onLFxuICAgICdrJzogJ2snLFxuICAgICdsJzogJ2wnLFxuICAgICdtJzogJ20nLFxuICAgICduJzogJ24nLFxuICAgICdvJzogJ28nLFxuICAgICdwJzogJ3AnLFxuICAgICdxJzogJ3EnLFxuICAgICdyJzogJ3InLFxuICAgICdzJzogJ3MnLFxuICAgICd0JzogJ3QnLFxuICAgICd1JzogJ3UnLFxuICAgICd2JzogJ3YnLFxuICAgICd3JzogJ3cnLFxuICAgICd4JzogJ3gnLFxuICAgICd5JzogJ3knLFxuICAgICd6JzogJ3onLFxuICAgICdudW1wYWQgMCc6ICdudW1wYWQgMCcsXG4gICAgJ251bXBhZCAxJzogJ251bXBhZCAxJyxcbiAgICAnbnVtcGFkIDInOiAnbnVtcGFkIDInLFxuICAgICdudW1wYWQgMyc6ICdudW1wYWQgMycsXG4gICAgJ251bXBhZCA0JzogJ251bXBhZCA0JyxcbiAgICAnbnVtcGFkIDUnOiAnbnVtcGFkIDUnLFxuICAgICdudW1wYWQgNic6ICdudW1wYWQgNicsXG4gICAgJ251bXBhZCA3JzogJ251bXBhZCA3JyxcbiAgICAnbnVtcGFkIDgnOiAnbnVtcGFkIDgnLFxuICAgICdudW1wYWQgOSc6ICdudW1wYWQgOScsXG4gICAgJ211bHRpcGx5JzogJ211bHRpcGx5JyxcbiAgICAnYWRkJzogJ2FkZCcsXG4gICAgJ3N1YnRyYWN0JzogJ3N1YnRyYWN0JyxcbiAgICAnZGl2aWRlJzogJ2RpdmlkZScsXG4gICAgJ2RlY2ltYWwgcG9pbnQnOiAnZGVjaW1hbCBwb2ludCcsXG4gICAgJ2YxJzogJ2YxJyxcbiAgICAnZjInOiAnZjInLFxuICAgICdmMyc6ICdmMycsXG4gICAgJ2Y0JzogJ2Y0JyxcbiAgICAnZjUnOiAnZjUnLFxuICAgICdmNic6ICdmNicsXG4gICAgJ2Y3JzogJ2Y3JyxcbiAgICAnZjgnOiAnZjgnLFxuICAgICdmOSc6ICdmOScsXG4gICAgJ2YxMCc6ICdmMTAnLFxuICAgICdmMTEnOiAnZjExJyxcbiAgICAnZjEyJzogJ2YxMicsXG4gICAgJ251bSBsb2NrJzogJ251bSBsb2NrJyxcbiAgICAnc2Nyb2xsIGxvY2snOiAnc2Nyb2xsIGxvY2snLFxufVxuXG4vKlxuY29uc3Qga2V5Ym9hcmQgPSBLZXlib2FyZEV2ZW50TWFuYWdlcigpO1xua2V5Ym9hcmQuZWFjaChFVkVOVF9OQU1FLCBmdW5jdGlvbiAoZXZlbnQpIHt9KVxua2V5Ym9hcmQud2l0aENvbmRpdGlvbktleVxua2V5Ym9hcmQucHJlc3MoKVxua2V5Ym9hcmQudXAoKVxua2V5Ym9hcmQuZG93bigpXG4qL1xuLyoqXG4gKlxuICogQHJldHVybnMge3t3aXRoQ29uZGl0aW9uS2V5KCo9LCAqPSwgKj0pOiB2b2lkLCB1cCgqPSwgKj0pOiB2b2lkLCBwcmVzcygqPSwgKj0pOiB2b2lkLCBkb3duKCo9LCAqPSk6IHZvaWQsIGVhY2goKj0sICo9KTogdm9pZH19XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgS2V5Ym9hcmRFdmVudE1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgc3RvcmFnZSA9IHt9O1xuICAgIGNvbnN0IGJhc2VDYWxsYmFja3NMaXN0ID0ge307XG4gICAgY29uc3QgYWRkU3RvcmFnZSA9IGZ1bmN0aW9uIChldmVudCwga2V5LCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoIXN0b3JhZ2VbZXZlbnRdKSBzdG9yYWdlW2V2ZW50XSA9IHt9O1xuICAgICAgICBpZiAoIXN0b3JhZ2VbZXZlbnRdW2tleV0pIHN0b3JhZ2VbZXZlbnRdW2tleV0gPSBbXTtcbiAgICAgICAgc3RvcmFnZVtldmVudF1ba2V5XS5wdXNoKGNhbGxiYWNrKTtcblxuICAgICAgICBpZiAodHlwZW9mIGJhc2VDYWxsYmFja3NMaXN0W2V2ZW50XSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgYmFzZUNhbGxiYWNrc0xpc3RbZXZlbnRdID0gYmFzZUNhbGxiYWNrO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGJhc2VDYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBPYmplY3Qua2V5cyhzdG9yYWdlKS5tYXAoKHR5cGUpID0+IHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHN0b3JhZ2VbdHlwZV0pLm1hcCgoa2V5Q29kZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHN0b3JhZ2VbdHlwZV1ba2V5Q29kZV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VbdHlwZV1ba2V5Q29kZV0ubWFwKChjYWxsYmFjaykgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gdHlwZSAmJiBwYXJzZUludChrZXlDb2RlKSA9PT0gZXZlbnQua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoZXZlbnQsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBlYWNoQ2FsbGJhY2tzTGlzdCA9IHt9O1xuICAgIGNvbnN0IGVhY2hDYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgZWFjaENhbGxiYWNrc0xpc3RbZXZlbnRdID0gY2FsbGJhY2s7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHNldHVwTGlzdGVuZXJzKCkge1xuICAgICAgICBjb25zdCByZW1vdmVFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGJhc2VDYWxsYmFja3NMaXN0KS5tYXAoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgYmFzZUNhbGxiYWNrc0xpc3RbZXZlbnRdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhlYWNoQ2FsbGJhY2tzTGlzdCkubWFwKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGVhY2hDYWxsYmFja3NMaXN0W2V2ZW50XSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBhZGRFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGJhc2VDYWxsYmFja3NMaXN0KS5tYXAoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgYmFzZUNhbGxiYWNrc0xpc3RbZXZlbnRdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhlYWNoQ2FsbGJhY2tzTGlzdCkubWFwKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGVhY2hDYWxsYmFja3NMaXN0W2V2ZW50XSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVycygpO1xuICAgICAgICBhZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvZGVUb0tleUNvZGUgPSAoa2V5KSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyAmJiBFdmVudENvZGVzW2tleV1cbiAgICAgICAgICAgICYmIHR5cGVvZiBFdmVudENvZGVzW2tleV0gPT0gXCJudW1iZXJcIlxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBFdmVudENvZGVzW2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycgJiYgRXZlbnRLZXlzW2tleV1cbiAgICAgICAgICAgICYmIHR5cGVvZiBFdmVudEtleXNba2V5XSA9PSBcIm51bWJlclwiXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIEV2ZW50S2V5c1trZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdLZXkgc3RyaW5nIG5vdCBmb25kJyk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJvb3QgPSB7XG4gICAgICAgIGVhY2goZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBlYWNoQ2FsbGJhY2soZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHNldHVwTGlzdGVuZXJzKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHdpdGhDb25kaXRpb25LZXkoZXZlbnQsIGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGtleSA9IGNvZGVUb0tleUNvZGUoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFkZFN0b3JhZ2UoZXZlbnQsIGtleSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgc2V0dXBMaXN0ZW5lcnMoKTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJlc3Moa2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcm9vdC53aXRoQ29uZGl0aW9uS2V5KCdrZXlwcmVzcycsIGtleSwgY2FsbGJhY2spO1xuICAgICAgICB9LFxuICAgICAgICB1cChrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByb290LndpdGhDb25kaXRpb25LZXkoJ2tleXVwJywga2V5LCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG4gICAgICAgIGRvd24oa2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcm9vdC53aXRoQ29uZGl0aW9uS2V5KCdrZXlkb3duJywga2V5LCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIHJldHVybiByb290O1xufTtcblxuS2V5Ym9hcmRFdmVudE1hbmFnZXIuRXZlbnRDb2RlcyA9IEV2ZW50Q29kZXM7XG5LZXlib2FyZEV2ZW50TWFuYWdlci5FdmVudEtleXMgPSBFdmVudEtleXM7XG5cbktleWJvYXJkRXZlbnRNYW5hZ2VyLmdldEV2ZW50S2V5QnlFdmVudENvZGUgPSBmdW5jdGlvbiAoZXZlbnRDb2RlKSB7XG4gICAgbGV0IGN1cnJlbnRFdmVudEtleSA9IGZhbHNlO1xuICAgIGNvbnN0IHdoaWNoID0gRXZlbnRDb2Rlc1tldmVudENvZGVdO1xuICAgIE9iamVjdC5rZXlzKEV2ZW50S2V5cykuZmlsdGVyKChrZXksIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChFdmVudEtleXNba2V5XSA9PT0gd2hpY2gpIHtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50RXZlbnRLZXkgPSBrZXk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBjdXJyZW50RXZlbnRLZXk7XG59O1xuXG5LZXlib2FyZEV2ZW50TWFuYWdlci5nZXRFdmVudENvZGVCeUV2ZW50S2V5ID0gZnVuY3Rpb24gKGV2ZW50S2V5KSB7XG4gICAgbGV0IGN1cnJlbnRFdmVudENvZGUgPSBmYWxzZTtcbiAgICBjb25zdCB3aGljaCA9IEV2ZW50S2V5c1tldmVudEtleV07XG4gICAgT2JqZWN0LmtleXMoRXZlbnRDb2RlcykuZmlsdGVyKChrZXksIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChFdmVudENvZGVzW2tleV0gPT09IHdoaWNoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudEV2ZW50Q29kZSA9IGtleTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGN1cnJlbnRFdmVudENvZGU7XG59O1xuXG5LZXlib2FyZEV2ZW50TWFuYWdlci5nZXRXaGljaEJ5RXZlbnRDb2RlID0gZnVuY3Rpb24gKGV2ZW50Q29kZSkge1xuICAgIHJldHVybiBFdmVudENvZGVzW2V2ZW50Q29kZV07XG59XG5cbktleWJvYXJkRXZlbnRNYW5hZ2VyLmdldEV2ZW50Q29kZUJ5V2hpY2ggPSBmdW5jdGlvbiAod2hpY2gpIHtcbiAgICBsZXQgY3VycmVudEV2ZW50Q29kZSA9IGZhbHNlO1xuICAgIE9iamVjdC5rZXlzKEV2ZW50Q29kZXMpLmZpbHRlcigoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoRXZlbnRDb2Rlc1trZXldID09PSB3aGljaCkge1xuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRFdmVudENvZGUgPSBrZXk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBjdXJyZW50RXZlbnRDb2RlO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBLZXlib2FyZEV2ZW50TWFuYWdlcjtcbiIsIlxuXG4vKipcbiAqIExvYWRlci5hdWRpb3M6IMaSIChzcmNzLCBjYWxsYmFjaylcbiAqIExvYWRlci5pbWFnZXM6IMaSIChpbWdzLCBjYWxsYmFjaylcbiAqIExvYWRlci5qYXZhc2NyaXB0OiDGkiAoc3JjLCBjYWxsYmFjaywgb25lcnJvcilcbiAqIExvYWRlci5qc29uOiDGkiAoc3JjLCBjYWxsYmFjaywgb25lcnJvcilcbiAqIEBwcm9wZXJ0eVxuICogQG1ldGhvZCBqc29uXG4gKiBAbWV0aG9kIGpzb25zXG4gKiBAbWV0aG9kIGphdmFzY3JpcHRcbiAqIEBtZXRob2QgaW1hZ2VzXG4gKiBAbWV0aG9kIGF1ZGlvc1xuICogQHJldHVybnMge3t9fVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IExvYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBqc29uOiBMb2FkZXIuanNvbixcbiAgICAgICAganNvbnM6IExvYWRlci5qc29ucyxcbiAgICAgICAgamF2YXNjcmlwdDogTG9hZGVyLmphdmFzY3JpcHQsXG4gICAgICAgIGltYWdlczogTG9hZGVyLmltYWdlcyxcbiAgICAgICAgYXVkaW9zOiBMb2FkZXIuYXVkaW9zLFxuICAgICAgICB2aWRlb3M6IExvYWRlci52aWRlbyxcbiAgICB9O1xufTtcblxuLyoqXG4gKiAuanNvbignL3VybC9kYXRhZmlsZS5qc29uJywgKGpzb24pID0+IHt9LCAoZXJyb3IpID0+IHt9KVxuICpcbiAqIEBwYXJhbSBzcmNcbiAqIEBwYXJhbSBjYWxsYmFja1xuICogQHBhcmFtIG9uZXJyb3JcbiAqL1xuTG9hZGVyLmpzb24gPSBmdW5jdGlvbiAoc3JjLCBjYWxsYmFjaywgb25lcnJvcikge1xuICAgIGZldGNoKHNyYylcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihqc29uID0+IGNhbGxiYWNrKGpzb24pKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gdHlwZW9mIG9uZXJyb3IgPT09ICdmdW5jdGlvbicgPyBvbmVycm9yKGVycm9yKSA6IG51bGwpO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0gc3Jjc1xuICogQHBhcmFtIGNhbGxiYWNrXG4gKiBAcGFyYW0gb25lcnJvclxuICovXG5Mb2FkZXIuanNvbnMgPSBmdW5jdGlvbiAoc3JjcywgY2FsbGJhY2ssIG9uZXJyb3IpXG57XG4gICAgaWYgKHNyY3MgJiYgdHlwZW9mIHNyY3MgPT09ICdvYmplY3QnKSB7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc3JjcykpIHtcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICAgICAgc3Jjcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBvYmpbTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMildID0gaXRlbVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzcmNzID0gb2JqO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2NyaXB0cyA9IHt9O1xuICAgICAgICBjb25zdCBsZW5ndGggPSBPYmplY3Qua2V5cyhzcmNzKS5sZW5ndGg7XG4gICAgICAgIGxldCBpdGVyYXRvciA9IDA7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoc3JjcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcmMgPSBzcmNzW2tleV07XG4gICAgICAgICAgICBMb2FkZXIuanNvbihzcmMsIChqc29uKSA9PiB7XG4gICAgICAgICAgICAgICAgc2NyaXB0c1trZXldID0ganNvbjtcbiAgICAgICAgICAgICAgICBpdGVyYXRvciArKztcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmF0b3IgPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBzY3JpcHRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBvbmVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vKipcbiAqIExvYWRzIGEgc2NyaXB0IGVsZW1lbnQgd2l0aCBqYXZhc2NyaXB0IHNvdXJjZVxuICpcbiAqIC5qYXZhc2NyaXB0ICgge1xuICogICAgICBteV9zY3JpcHQxOiAnL3BhdGgvdG8vbXlfc2NyaXB0MScsXG4gKiAgICAgIG15X3NjcmlwdDI6ICcvcGF0aC90by9teV9zY3JpcHQyJyxcbiAqICAgIH0sXG4gKiAgICBmdW5jdGlvbiAobGlzdCkge30pXG4gKlxuICogLmphdmFzY3JpcHQgKCBbXG4gKiAgICAgICcvcGF0aC90by9teV9zY3JpcHQxJyxcbiAqICAgICAgJy9wYXRoL3RvL215X3NjcmlwdDInLFxuICogICAgXSxcbiAqICAgIGZ1bmN0aW9uIChsaXN0KSB7fSlcbiAqXG4gKiBAbmFtZXNwYWNlIExvYWRlci5qYXZhc2NyaXB0XG4gKiBAcGFyYW0gc3JjcyAgICAgICBPYmplY3QsIEFycmF5LiBpdGVtczoga2V5IGlzIElELCB2YWx1ZSBpcyBzcmNcbiAqIEBwYXJhbSBjYWxsYmFjayAgRnVuY3Rpb24gY2FsbGVkIHdoZW4gYWxsIHNyY3MgaXMgbG9hZGVkXG4gKiBAcGFyYW0gb25lcnJvciAgIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIGxvYWQgaXMgZmFpbGVkXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuTG9hZGVyLmphdmFzY3JpcHQgPSBmdW5jdGlvbiAoc3JjcywgY2FsbGJhY2ssIG9uZXJyb3IpXG57XG4gICAgaWYgKHNyY3MgJiYgdHlwZW9mIHNyY3MgPT09ICdvYmplY3QnKSB7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc3JjcykpIHtcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICAgICAgc3Jjcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBvYmpbTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMildID0gaXRlbVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzcmNzID0gb2JqO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGVuZ3RoID0gT2JqZWN0LmtleXMoc3JjcykubGVuZ3RoO1xuICAgICAgICBjb25zdCBzY3JpcHRzID0ge307XG4gICAgICAgIGxldCBzY3JpcHQ7XG4gICAgICAgIGxldCBpdGVyYXRvciA9IDA7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoc3JjcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICAgIHNjcmlwdC5zcmMgPSAoc3Jjc1trZXldLnN1YnN0cigtMykgPT09ICcuanMnKSA/IHNyY3Nba2V5XSA6IHNyY3Nba2V5XSArICcuanMnO1xuICAgICAgICAgICAgc2NyaXB0LnR5cGUgPSAnYXBwbGljYXRpb24vamF2YXNjcmlwdCc7XG4gICAgICAgICAgICBzY3JpcHQuaWQgPSBrZXk7XG4gICAgICAgICAgICBzY3JpcHQub25lcnJvciA9IG9uZXJyb3I7XG4gICAgICAgICAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBzY3JpcHRzW3RoaXMuaWRdID0gdGhpcztcbiAgICAgICAgICAgICAgICBpdGVyYXRvcisrO1xuICAgICAgICAgICAgICAgIGlmIChpdGVyYXRvciA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIHNjcmlwdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbi8qKlxuICogTG9hZCBhbiBpbWFnZXNcbiAqXG4gKiAuaW1hZ2VzICgge1xuICogICAgICBpbWcxOiAnL3BhdGgvdG8vaW1nMScsXG4gKiAgICAgIGltZzI6ICcvcGF0aC90by9pbWcyJyxcbiAqICAgIH0sXG4gKiAgICBmdW5jdGlvbiAobGlzdCkge30pXG4gKlxuICogQG5hbWVzcGFjZSBBbmltYXRlLkxvYWRlci5pbWFnZXNcbiAqIEBwYXJhbSBpbWdzXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqL1xuTG9hZGVyLmltYWdlcyA9IGZ1bmN0aW9uIChpbWdzLCBjYWxsYmFjaykge1xuICAgIGlmIChpbWdzICYmIHR5cGVvZiBpbWdzID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjb25zdCBsZW5ndGggPSBPYmplY3Qua2V5cyhpbWdzKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGltYWdlcyA9IHt9O1xuICAgICAgICBsZXQgaXRlcmF0b3IgPSAwO1xuICAgICAgICBmb3IgKGxldCBuYW1lIGluIGltZ3MpIHtcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgaW1nLnNyYyA9IGltZ3NbbmFtZV07XG4gICAgICAgICAgICBpbWcubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBpbWFnZXNbdGhpcy5uYW1lXSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IrKztcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmF0b3IgPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBpbWFnZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogTG9hZCBhbiBhdWRpbyBmaWxlc1xuICpcbiAqIC5hdWRpb3MgKCB7XG4gKiAgICAgIGF1ZGlvMTogJy9wYXRoL3RvL2F1ZGlvMScsXG4gKiAgICAgIGF1ZGlvMjogJy9wYXRoL3RvL2F1ZGlvMicsXG4gKiAgICB9LFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIEBuYW1lc3BhY2UgQW5pbWF0ZS5Mb2FkZXIuYXVkaW9zXG4gKiBAcGFyYW0gc3Jjc1xuICogQHBhcmFtIGNhbGxiYWNrXG4gKi9cbkxvYWRlci5hdWRpb3MgPSBmdW5jdGlvbiAoc3JjcywgY2FsbGJhY2spIHtcbiAgICBpZiAoc3JjcyAmJiB0eXBlb2Ygc3JjcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gT2JqZWN0LmtleXMoc3JjcykubGVuZ3RoO1xuICAgICAgICBjb25zdCBhdWRpb3MgPSB7fTtcbiAgICAgICAgbGV0IGl0ZXJhdG9yID0gMDtcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBzcmNzKSB7XG4gICAgICAgICAgICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XG4gICAgICAgICAgICBhdWRpby5zcmMgPSBzcmNzW25hbWVdO1xuICAgICAgICAgICAgYXVkaW8ubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICBhdWRpby5wcmVsb2FkID0gJ2F1dG8nO1xuICAgICAgICAgICAgYXVkaW9zW25hbWVdID0gYXVkaW87XG4gICAgICAgICAgICBpdGVyYXRvcisrO1xuICAgICAgICAgICAgaWYgKGl0ZXJhdG9yID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBhdWRpb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBMb2FkIGFuIHZpZGVvIGZpbGVzXG4gKlxuICogLnZpZGVvcyAoIHtcbiAqICAgICAgdmlkZW8xOiAnL3BhdGgvdG8vdmlkZW8xJyxcbiAqICAgICAgdmlkZW8yOiAnL3BhdGgvdG8vdmlkZW8yJyxcbiAqICAgIH0sXG4gKiAgICBmdW5jdGlvbiAobGlzdCkge30pXG4gKlxuICogQG5hbWVzcGFjZSBBbmltYXRlLkxvYWRlci52aWRlb3NcbiAqIEBwYXJhbSBzcmNzXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqL1xuTG9hZGVyLnZpZGVvcyA9IGZ1bmN0aW9uIChzcmNzLCBjYWxsYmFjaykge1xuICAgIGlmIChzcmNzICYmIHR5cGVvZiBzcmNzID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjb25zdCBsZW5ndGggPSBPYmplY3Qua2V5cyhzcmNzKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHZpZGVvcyA9IHt9O1xuICAgICAgICBsZXQgaXRlcmF0b3IgPSAwO1xuICAgICAgICBmb3IgKGxldCBuYW1lIGluIHNyY3MpIHtcbiAgICAgICAgICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAgICAgICAgICAgIHZpZGVvLnNyYyA9IHNyY3NbbmFtZV07XG4gICAgICAgICAgICB2aWRlby5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIHZpZGVvLnByZWxvYWQgPSAnYXV0byc7XG4gICAgICAgICAgICB2aWRlb3NbbmFtZV0gPSB2aWRlbztcbiAgICAgICAgICAgIGl0ZXJhdG9yKys7XG4gICAgICAgICAgICBpZiAoaXRlcmF0b3IgPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIHZpZGVvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlcjtcbiIsIi8qKlxuXG5hIChtMTEpIEhvcml6b250YWwgc2NhbGluZy5cbmIgKG0xMikgSG9yaXpvbnRhbCBza2V3aW5nLlxuYyAobTIxKSBWZXJ0aWNhbCBza2V3aW5nLlxuZCAobTIyKSBWZXJ0aWNhbCBzY2FsaW5nLlxuZSAoZHgpIEhvcml6b250YWwgbW92aW5nLlxuZiAoZHkpIFZlcnRpY2FsIG1vdmluZy5cbiovXG5jb25zdCBNYXRyaXggPSBmdW5jdGlvbiAobTExLCBtMTIsIG0yMSwgbTIyLCBneCwgZ3kpIHtcbiAgICByZXR1cm4ge20xMSwgbTEyLCBtMjEsIG0yMiwgZ3gsIGd5fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hdHJpeDtcbiIsImltcG9ydCBDbGlwIGZyb20gXCIuL0NsaXBcIjtcbmltcG9ydCB0b09iamVjdCBmcm9tIFwiLi4vc3RhdGljL3RvT2JqZWN0XCI7XG5pbXBvcnQgc3RyMm5vZGUgZnJvbSBcIi4uL3N0YXRpYy9zdHIybm9kZVwiO1xuaW1wb3J0IGlzSFRNTFN0cmluZyBmcm9tIFwiLi4vc3RhdGljL2lzSFRNTFN0cmluZ1wiO1xuaW1wb3J0IHF1ZXJ5IGZyb20gXCIuLi9zdGF0aWMvcXVlcnlcIjtcbmltcG9ydCBzdHlsaXplciBmcm9tIFwiLi4vc3RhdGljL3N0eWxpemVyXCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuLi9zdGF0aWMvaXNOb2RlXCI7XG5pbXBvcnQge3JhbmRvbUh1bWFuaXplU3RyaW5nfSBmcm9tIFwiLi4vc3RhdGljL3JhbmRvbVwiO1xuaW1wb3J0IGV4dGVuZCwge2V4dGVuZFJlY3Vyc2l2ZX0gZnJvbSBcIi4uL3N0YXRpYy9leHRlbmRcIjtcbmltcG9ydCBpc1N0cmluZyBmcm9tIFwiLi4vc3RhdGljL2lzU3RyaW5nXCI7XG5pbXBvcnQgcG9zaXRpb24gZnJvbSBcIi4uL3N0YXRpYy9wb3NpdGlvblwiO1xuXG4vKlxubWMgPSBNb3ZlQ2xpcCh7XG4gICAgZWxlbWVudDogYDxkaXYgY2xhc3M9XCJzcHJpdGUgcmVjdFwiPjwvZGl2PmAsXG4gICAgcGFyZW50OiBDbGlwKCksXG4gICAgeDogMTAwLFxuICAgIHk6IDEwMCxcbiAgICBpbml0KCl7XG4gICAgICAgIHRoaXMucGFyZW50LmFwcGVuZCh0aGlzLmVsZW1lbnQpO1xuICAgIH0sXG59KVxuXG5tYy54XG5tYy55XG5tYy53aWR0aFxubWMuaGVpZ2h0XG5tYy5lbGVtZW50ID09PSBtYy50ZW1wbGF0ZVxubWMuc3R5bGUoIHsgY29sb3I6ICd3aGl0ZScgfSApXG5tYy5jbG9uZSgpXG5tYy5pbmplY3QoRWxlbWVudClcbm1jLmFwcGVuZChFbGVtZW50KVxubWMucmVtb3ZlKEVsZW1lbnQpIC8vIHVzZXMgcmVtb3ZlQ2hpbGRcbm1jLm9uKGV2ZW50LCBjYWxsYmFjaylcbiovXG4vKipcbiAqIEBtZXRob2Qgc3R5bGVcbiAqIEBwYXJhbSBjb25maWdcbiAqIEByZXR1cm5zIHt7cmVhZG9ubHkgeDogKiwgcmVhZG9ubHkgd2lkdGg6ICosIGluaXRpYWxpemVkOiBib29sZWFuLCByZWFkb25seSB5OiAqLCBzdHlsZSgqPSk6IHZvaWQsIGNvbXBsZXRlZDogYm9vbGVhbiwgZWxlbWVudDogKiwgcmVhZG9ubHkgaGVpZ2h0OiAqfXwqfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IE1vdmVDbGlwID0gZnVuY3Rpb24gKGNvbmZpZylcbntcbiAgICBjb25zdCB7IGVsZW1lbnQgfSA9IGNvbmZpZztcbiAgICBjb25zdCBjbGlwID0gQ2xpcChlbGVtZW50KTtcblxuICAgIGlmKCFjbGlwLmVsZW1lbnQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQcm9wZXJ0eSBbZWxlbWVudF0gbm90IGZvbmQhJyk7XG4gICAgfVxuXG4gICAgbGV0IG5hbWUgPSByYW5kb21IdW1hbml6ZVN0cmluZyg2KTtcbiAgICBuYW1lID0gbmFtZS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIG5hbWUuc3Vic3RyaW5nKDEpO1xuICAgIGNsaXAuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbWl2ZWNsaXAnLCBjb25maWcuaWQgfHwgJ21pdmVjbGlwJyArIG5hbWUpO1xuXG4gICAgY29uc3Qgcm9vdCA9IHtcbiAgICAgICAgZWxlbWVudDogY2xpcC5lbGVtZW50LFxuICAgICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgIHNldCB4KHZhbHVlKSB7XG4gICAgICAgICAgICByb290LmVsZW1lbnQuc3R5bGUubWFyZ2luTGVmdCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgICAgIGNsaXAueCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgeSh2YWx1ZSkge1xuICAgICAgICAgICAgcm9vdC5lbGVtZW50LnN0eWxlLm1hcmdpblRvcCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgICAgIGNsaXAueSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgd2lkdGgodmFsdWUpIHtcbiAgICAgICAgICAgIHJvb3QuZWxlbWVudC5zdHlsZS53aWR0aCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgICAgIGNsaXAud2lkdGggPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IGhlaWdodCh2YWx1ZSkge1xuICAgICAgICAgICAgcm9vdC5lbGVtZW50LnN0eWxlLmhlaWdodCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgICAgIGNsaXAuaGVpZ2h0ID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCB4KCkge1xuICAgICAgICAgICAgcmV0dXJuIGNsaXAueFxuICAgICAgICB9LFxuICAgICAgICBnZXQgeSgpIHtcbiAgICAgICAgICAgIHJldHVybiBjbGlwLnlcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IHdpZHRoKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNsaXAud2lkdGhcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGhlaWdodCgpIHtcbiAgICAgICAgICAgIHJldHVybiBjbGlwLmhlaWdodFxuICAgICAgICB9LFxuICAgICAgICAvLyBzdHlsZSh7IHRyYW5zZm9ybTogJ3JvdGF0ZSgxMGRlZykgc2NhbGUoMC42LCAwLjYpIG1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKScsIH0pO1xuICAgICAgICBzdHlsZShvYmplY3QpIHtcbiAgICAgICAgICAgIHN0eWxpemVyKHJvb3QuZWxlbWVudCwgb2JqZWN0KTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgZGVsZXRlIGNvbmZpZy5lbGVtZW50O1xuICAgIGRlbGV0ZSBjb25maWcuaW5pdGlhbGl6ZWQ7XG5cbiAgICBPYmplY3Qua2V5cyhjb25maWcpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJvb3Rba2V5XSA9IGNvbmZpZ1trZXldXG4gICAgfSk7XG5cbiAgICAvLyBpZiAodHlwZW9mIHJvb3QuaW5pdCA9PT0gJ2Z1bmN0aW9uJyAmJiAhcm9vdC5pbml0aWFsaXplZCl7XG4gICAgLy8gICAgIHJvb3QuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIC8vICAgICByb290LmluaXQuY2FsbChyb290KTtcbiAgICAvLyB9XG5cbiAgICByb290LmNsb25lID0gZnVuY3Rpb24gKGFwcGVuZCA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBpc05vZGUocm9vdC5lbGVtZW50KVxuICAgICAgICAgICAgPyByb290LmVsZW1lbnQuY2xvbmVOb2RlKHRydWUpXG4gICAgICAgICAgICA6ICc8ZGl2IC8+JztcblxuICAgICAgICBsZXQgY29uZiA9IHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IG5vZGUsXG4gICAgICAgICAgICBwYXJlbnQ6IHJvb3QucGFyZW50LFxuICAgICAgICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNsb25lZDogdHJ1ZSxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25mID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzICksIGNvbmYpO1xuXG4gICAgICAgIGNvbnN0IG1jID0gTW92ZUNsaXAoY29uZik7XG5cbiAgICAgICAgaWYgKGFwcGVuZCkge1xuICAgICAgICAgICAgaWYgKGlzTm9kZShyb290LnBhcmVudCkpIHtcbiAgICAgICAgICAgICAgICByb290LnBhcmVudC5hcHBlbmRDaGlsZChtYy5lbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiByb290LnBhcmVudC5hcHBlbmQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICByb290LnBhcmVudC5hcHBlbmQobWMuZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWM7XG4gICAgfTtcblxuICAgIHJvb3QuaW5qZWN0ID0gZnVuY3Rpb24gKGVsZW0sIGFwcGVuZCA9IGZhbHNlKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGVsZW0pKSB7XG4gICAgICAgICAgICBlbGVtLmZvckVhY2goKGUpID0+IHsgcm9vdC5pbmplY3QoZSwgdHJ1ZSkgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWFwcGVuZCkge1xuICAgICAgICAgICAgcm9vdC5lbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNOb2RlKGVsZW0pKSB7XG4gICAgICAgICAgICByb290LmVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGVsZW0gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBlbGVtID0gZWxlbS50b1N0cmluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKGlzSFRNTFN0cmluZyhlbGVtKSkge1xuICAgICAgICAgICAgICAgIGVsZW0gPSBzdHIybm9kZShlbGVtKTtcbiAgICAgICAgICAgICAgICByb290LmVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvb3QuZWxlbWVudC50ZXh0Q29udGVudCArPSBlbGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJvb3QuYXBwZW5kID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgcm9vdC5pbmplY3QoZWxlbSwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIHJvb3QucmVtb3ZlID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgaWYoaXNOb2RlKGVsZW0pKSB7XG4gICAgICAgICAgICByZXR1cm4gcm9vdC5lbGVtZW50LnJlbW92ZUNoaWxkKGVsZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmFpbGVkIGFyZ3VtZW50IHR5cGUuIE5lZWQgTm9kZUVsZW1lbnQnKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByb290Lm9uID0gZnVuY3Rpb24gKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICByb290LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spXG4gICAgfTtcblxuICAgIHJvb3QuY2FsY3VsYXRlID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudCA9IGlzTm9kZShlbGVtZW50KSB8fCBpc1N0cmluZyhlbGVtZW50KSA/IGVsZW1lbnQgOiB0aGlzLmVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHJlX3Jvb3QgPSBwb3NpdGlvbihlbGVtZW50KTtcbiAgICAgICAgY29uc3QgcmVfcGFyZW50ID0gcG9zaXRpb24ocmVfcm9vdC5lbGVtZW50LnBhcmVudE5vZGUpO1xuXG4gICAgICAgIGlmIChpc05vZGUocmVfcGFyZW50LmVsZW1lbnQpKSB7XG4gICAgICAgICAgICByZV9yb290LnBhcmVudCA9IHJvb3QuY2FsY3VsYXRlKHJlX3BhcmVudC5lbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlX3Jvb3QucGFyZW50ID0ge3g6IDAsIHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDB9O1xuICAgICAgICB9XG4gICAgICAgIHJlX3Jvb3QueCA9IHJlX3Jvb3QueCAtIHJlX3BhcmVudC54O1xuICAgICAgICByZV9yb290LnkgPSByZV9yb290LnkgLSByZV9wYXJlbnQueTtcblxuICAgICAgICBjb25zdCBwcm9wcyA9IFsneCcsICd5JywgJ3dpZHRoJywgJ2hlaWdodCcsICd0b3AnLCAnbGVmdCcsICdyaWdodCcsICdib3R0b20nLCAncGFyZW50J107XG4gICAgICAgIE9iamVjdC5rZXlzKHJlX3Jvb3QpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb3BzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICByb290W2tleV0gPSByZV9yb290W2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpZiAodHlwZW9mIHJvb3QuaW5pdCA9PT0gJ2Z1bmN0aW9uJyAmJiAhcm9vdC5pbml0aWFsaXplZCl7XG4gICAgICAgIHJvb3QuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICByb290LmluaXQuY2FsbChyb290KTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJvb3QuY29tcGxldGUgPT09ICdmdW5jdGlvbicgJiYgIXJvb3QuY29tcGxldGVkKXtcbiAgICAgICAgcm9vdC5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICByb290LmNvbXBsZXRlLmNhbGwocm9vdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJvb3Q7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb3ZlQ2xpcDtcbiIsImltcG9ydCBwb3NpdGlvbiBmcm9tIFwiLi4vc3RhdGljL3Bvc2l0aW9uXCI7XG5pbXBvcnQgY29weSBmcm9tIFwiLi4vc3RhdGljL2NvcHlcIjtcbmltcG9ydCBjbG9uZSBmcm9tIFwiLi4vc3RhdGljL2Nsb25lXCI7XG5pbXBvcnQgaXNIVE1MU3RyaW5nIGZyb20gXCIuLi9zdGF0aWMvaXNIVE1MU3RyaW5nXCI7XG5pbXBvcnQgcXVlcnkgZnJvbSBcIi4uL3N0YXRpYy9xdWVyeVwiO1xuaW1wb3J0IHN0eWxpemVyIGZyb20gXCIuLi9zdGF0aWMvc3R5bGl6ZXJcIjtcbmltcG9ydCBzdHIybm9kZSBmcm9tIFwiLi4vc3RhdGljL3N0cjJub2RlXCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuLi9zdGF0aWMvaXNOb2RlXCI7XG5pbXBvcnQgaXNTdHJpbmcgZnJvbSBcIi4uL3N0YXRpYy9pc1N0cmluZ1wiO1xuXG4vKipcbiAqIEBwcm9wZXJ0eSBjYW52YXNcbiAqIEBwcm9wZXJ0eSBjb250ZXh0XG4gKiBAcHJvcGVydHkgcHJvcGVydGllc1xuICogQG1ldGhvZCBwcm9wXG4gKlxuICogQHBhcmFtIGNhbnZhc1xuICogQHBhcmFtIHByb3BlcnRpZXNcbiAqIEByZXR1cm4ge0RPTU1hdHJpeHx7c2hhcGU6IGZ1bmN0aW9uLCByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjb21wdXRlZDoge3Byb3BlcnRpZXNfZW5hYmxlZDogYm9vbGVhbiwgY29udGV4dDogSW1hZ2VCaXRtYXBSZW5kZXJpbmdDb250ZXh0IHwgV2ViR0xSZW5kZXJpbmdDb250ZXh0IHwgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCB8IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IFJlbmRlcmluZ0NvbnRleHQgfCBPZmZzY3JlZW5SZW5kZXJpbmdDb250ZXh0IHwgT2Zmc2NyZWVuQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBtYXRyaXg6IGJvb2xlYW4sIHByb3BlcnRpZXM6IFtdLCBlbGVtZW50OiAqfSwgcHJvcCgqLCAqPSk6ICosIHJlYWRvbmx5IGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY2FudmFzTWF0cml4KE1hdHJpeCk6IHZvaWQsIGNhbnZhc1RyYW5zZm9ybSgqPSwgKj0sICo9LCAqPSwgKj0sICo9KTogRE9NTWF0cml4LCByZWFkb25seSBwcm9wZXJ0aWVzOiBbXX18W118SW1hZ2VCaXRtYXBSZW5kZXJpbmdDb250ZXh0fFdlYkdMUmVuZGVyaW5nQ29udGV4dHxXZWJHTDJSZW5kZXJpbmdDb250ZXh0fENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRHxSZW5kZXJpbmdDb250ZXh0fE9mZnNjcmVlblJlbmRlcmluZ0NvbnRleHR8T2Zmc2NyZWVuQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfCp9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgUGFpbnQgPSBmdW5jdGlvbiAoY2FudmFzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3Qgcm9vdCA9IHtcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIHByb3BlcnRpZXNfZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IFtdLFxuICAgICAgICAgICAgZWxlbWVudDogY2FudmFzIHx8IHt9LFxuICAgICAgICAgICAgY29udGV4dDogY2FudmFzID8gY2FudmFzLmdldENvbnRleHQoJzJkJykgOiB7fSxcbiAgICAgICAgICAgIG1hdHJpeDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIC8qKiBAcmV0dXJuIEhUTUxDYW52YXNFbGVtZW50ICovXG4gICAgICAgIGdldCBjYW52YXMoKXtcbiAgICAgICAgICAgIHJldHVybiByb290LmNvbXB1dGVkLmVsZW1lbnQ7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKiBAcmV0dXJuIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCAqL1xuICAgICAgICBnZXQgY29udGV4dCgpIHtcbiAgICAgICAgICAgIHJldHVybiByb290LmNvbXB1dGVkLmNvbnRleHQgPSByb290LmNvbXB1dGVkLmVsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gcm9vdC5jb21wdXRlZC5wcm9wZXJ0aWVzO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0RPTU1hdHJpeH0gbWF0cml4XG4gICAgICAgICAqL1xuICAgICAgICBjYW52YXNNYXRyaXgobWF0cml4KSB7XG4gICAgICAgICAgICByb290LmNvbXB1dGVkLm1hdHJpeCA9IG1hdHJpeDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIG0xMVxuICAgICAgICAgKiBAcGFyYW0gbTEyXG4gICAgICAgICAqIEBwYXJhbSBtMjFcbiAgICAgICAgICogQHBhcmFtIG0yMlxuICAgICAgICAgKiBAcGFyYW0gZHhcbiAgICAgICAgICogQHBhcmFtIGR5XG4gICAgICAgICAqIEByZXR1cm4ge0RPTU1hdHJpeH1cbiAgICAgICAgICovXG4gICAgICAgIGNhbnZhc1RyYW5zZm9ybShtMTEgPSAxLCBtMTIgPSAwLCBtMjEgPSAwLCBtMjIgPSAxLCBkeCA9IDAsIGR5ID0gMCkge1xuICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gbmV3IERPTU1hdHJpeChbbTExLCBtMTIsIG0yMSwgbTIyLCBkeCwgZHldKTtcbiAgICAgICAgICAgIGlmIChyb290LmNvbXB1dGVkLm1hdHJpeCBpbnN0YW5jZW9mIERPTU1hdHJpeCkge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybS5mcm9tTWF0cml4KHJvb3QuY29tcHV0ZWQubWF0cml4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJvb3QuY29tcHV0ZWQuY29udGV4dC5zZXRUcmFuc2Zvcm0odHJhbnNmb3JtKTtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2Zvcm07XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSBkeFxuICAgICAgICAgKiBAcGFyYW0gZHlcbiAgICAgICAgICovXG4gICAgICAgIGNhbnZhc1RyYW5zbGF0ZShkeCA9IDAsIGR5ID0gMCkge1xuICAgICAgICAgICAgcm9vdC5jb21wdXRlZC5jb250ZXh0LnNldFRyYW5zbGF0ZShkeCwgZHkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgICAgICovXG4gICAgICAgIHNoYXBlKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXMsIHRoaXMuY29udGV4dCk7XG4gICAgICAgICAgICB0aGlzLmNvbXB1dGVkLmNvbnRleHQuc2V0VHJhbnNmb3JtKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNsZWFyKCkge1xuICAgICAgICAgICAgdGhpcy5jb21wdXRlZC5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCB8fCAxMDAwLCB0aGlzLmNhbnZhcy5oZWlnaHQgfHwgMTAwMCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBrZXlcbiAgICAgICAgICogQHBhcmFtIHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4geyp9XG4gICAgICAgICAqL1xuICAgICAgICBwcm9wKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvb3QuY29tcHV0ZWQuY29udGV4dFtrZXldO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyb290LmNvbXB1dGVkLmNvbnRleHRba2V5XSAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgICAgIHJldHVybiByb290LmNvbXB1dGVkLmNvbnRleHRba2V5XSA9IHJvb3QuY29tcHV0ZWQucHJvcGVydGllc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vIGFjY2VwdCBwcm9wZXJ0aWVzXG4gICAgaWYgKHByb3BlcnRpZXMpIHtcbiAgICAgICAgT2JqZWN0LmtleXMocHJvcGVydGllcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJvb3QuY29tcHV0ZWQuY29udGV4dFtrZXldICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcm9vdC5jb21wdXRlZC5wcm9wZXJ0aWVzW2tleV0gPSBwcm9wZXJ0aWVzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGFwcGx5IHByb3BlcnRpZXNcbiAgICBpZiAocm9vdC5jb21wdXRlZC5wcm9wZXJ0aWVzX2VuYWJsZWQpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoUGFpbnQuZGVmYXVsdC5wcm9wZXJ0aWVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIHJvb3QuY29tcHV0ZWQuY29udGV4dFtrZXldID0gcm9vdC5jb21wdXRlZC5wcm9wZXJ0aWVzW2tleV0gIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgID8gcm9vdC5jb21wdXRlZC5wcm9wZXJ0aWVzW2tleV1cbiAgICAgICAgICAgICAgICA6IHJvb3QuY29tcHV0ZWQucHJvcGVydGllc1trZXldID0gUGFpbnQuZGVmYXVsdC5wcm9wZXJ0aWVzW2tleV07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGFwcGx5IG1ldGhvZHNcbiAgICBpZiAocHJvcGVydGllcykge1xuICAgICAgICBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygcm9vdC5jb21wdXRlZC5jb250ZXh0W2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9wcyA9IHR5cGVvZiBwcm9wZXJ0aWVzW2tleV0gPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBwcm9wZXJ0aWVzW2tleV0oKVxuICAgICAgICAgICAgICAgICAgICA6IChBcnJheS5pc0FycmF5KHByb3BlcnRpZXNba2V5XSkgPyBwcm9wZXJ0aWVzW2tleV0gOiBbXSk7XG4gICAgICAgICAgICAgICAgcm9vdC5jb21wdXRlZC5jb250ZXh0W2tleV0uYXBwbHkocm9vdC5jb21wdXRlZC5jb250ZXh0LCBwcm9wcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByb290O1xufVxuUGFpbnQuZGVmYXVsdCA9IHt9O1xuUGFpbnQuZGVmYXVsdC5wcm9wZXJ0aWVzID0ge1xuICAgIGRpcmVjdGlvbjogXCJsdHJcIixcbiAgICBmaWxsU3R5bGU6IFwiIzAwMDAwMFwiLFxuICAgIGZpbHRlcjogXCJub25lXCIsXG4gICAgZm9udDogXCIxMHB4IHNhbnMtc2VyaWZcIixcbiAgICBnbG9iYWxBbHBoYTogMSxcbiAgICBnbG9iYWxDb21wb3NpdGVPcGVyYXRpb246IFwic291cmNlLW92ZXJcIixcbiAgICBpbWFnZVNtb290aGluZ0VuYWJsZWQ6IHRydWUsXG4gICAgaW1hZ2VTbW9vdGhpbmdRdWFsaXR5OiBcImxvd1wiLFxuICAgIGxpbmVDYXA6IFwiYnV0dFwiLFxuICAgIGxpbmVEYXNoT2Zmc2V0OiAwLFxuICAgIGxpbmVKb2luOiBcIm1pdGVyXCIsXG4gICAgbGluZVdpZHRoOiAxLFxuICAgIG1pdGVyTGltaXQ6IDEwLFxuICAgIHNoYWRvd0JsdXI6IDAsXG4gICAgc2hhZG93Q29sb3I6IFwicmdiYSgwLCAwLCAwLCAwKVwiLFxuICAgIHNoYWRvd09mZnNldFg6IDAsXG4gICAgc2hhZG93T2Zmc2V0WTogMCxcbiAgICBzdHJva2VTdHlsZTogXCIjMDAwMDAwXCIsXG4gICAgdGV4dEFsaWduOiBcInN0YXJ0XCIsXG4gICAgdGV4dEJhc2VsaW5lOiBcImFscGhhYmV0aWNcIixcbn07XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcblBhaW50Lm1ldGhvZHMgPSB7fTtcblBhaW50LnByb3AgPSB7XG4gICAgLy8gRGlyZWN0aW9uYWxpdHkuIFBvc3NpYmxlIHZhbHVlczogbHRyLCBydGwsIGluaGVyaXQgKGRlZmF1bHQpLlxuICAgIGRpcmVjdGlvbjogJ2RpcmVjdGlvbicsXG5cbiAgICAvLyBDb2xvciBvciBzdHlsZSB0byB1c2UgaW5zaWRlIHNoYXBlcy4gRGVmYXVsdCAjMDAwIChibGFjaykuXG4gICAgZmlsbFN0eWxlOiAnZmlsbFN0eWxlJyxcblxuICAgIC8vIEV4cGVyaW1lbnRhbC4gQXBwbGllcyBhIENTUyBvciBTVkcgZmlsdGVyIHRvIHRoZSBjYW52YXMsIGUuZy4sIHRvIGNoYW5nZSBpdHMgYnJpZ2h0bmVzcyBvciBibHVyaW5lc3MuXG4gICAgZmlsdGVyOiAnZmlsdGVyJyxcblxuICAgIC8vIEZvbnQgc2V0dGluZy4gRGVmYXVsdCB2YWx1ZSAxMHB4IHNhbnMtc2VyaWYuXG4gICAgZm9udDogJ2ZvbnQnLFxuXG4gICAgLy8gQWxwaGEgdmFsdWUgdGhhdCBpcyBhcHBsaWVkIHRvIHNoYXBlcyBhbmQgaW1hZ2VzIGJlZm9yZSB0aGV5IGFyZSBjb21wb3NpdGVkIG9udG8gdGhlIGNhbnZhcy4gRGVmYXVsdCAxLjAgKG9wYXF1ZSkuXG4gICAgZ2xvYmFsQWxwaGE6ICdnbG9iYWxBbHBoYScsXG4gICAgLy8gV2l0aCBnbG9iYWxBbHBoYSBhcHBsaWVkIHRoaXMgc2V0cyBob3cgc2hhcGVzIGFuZCBpbWFnZXMgYXJlIGRyYXduIG9udG8gdGhlIGV4aXN0aW5nIGJpdG1hcC5cbiAgICBnbG9iYWxDb21wb3NpdGVPcGVyYXRpb246ICdnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24nLFxuICAgIC8vIEV4cGVyaW1lbnRhbC4gSW1hZ2Ugc21vb3RoaW5nIG1vZGU7IGlmIGRpc2FibGVkLCBpbWFnZXMgd2lsbCBub3QgYmUgc21vb3RoZWQgaWYgc2NhbGVkLlxuICAgIGltYWdlU21vb3RoaW5nRW5hYmxlZDogJ2ltYWdlU21vb3RoaW5nRW5hYmxlZCcsXG4gICAgLy8gRXhwZXJpbWVudGFsLiBBbGxvd3MgeW91IHRvIHNldCB0aGUgcXVhbGl0eSBvZiBpbWFnZSBzbW9vdGhpbmcuXG4gICAgaW1hZ2VTbW9vdGhpbmdRdWFsaXR5OiAnaW1hZ2VTbW9vdGhpbmdRdWFsaXR5JyxcblxuICAgIC8vIFR5cGUgb2YgZW5kaW5ncyBvbiB0aGUgZW5kIG9mIGxpbmVzLiBQb3NzaWJsZSB2YWx1ZXM6IGJ1dHQgKGRlZmF1bHQpLCByb3VuZCwgc3F1YXJlLlxuICAgIGxpbmVDYXA6ICdsaW5lQ2FwJyxcbiAgICAvLyBTcGVjaWZpZXMgd2hlcmUgdG8gc3RhcnQgYSBkYXNoIGFycmF5IG9uIGEgbGluZS5cbiAgICBsaW5lRGFzaE9mZnNldDogJ2xpbmVEYXNoT2Zmc2V0JyxcbiAgICAvLyBEZWZpbmVzIHRoZSB0eXBlIG9mIGNvcm5lcnMgd2hlcmUgdHdvIGxpbmVzIG1lZXQuIFBvc3NpYmxlIHZhbHVlczogcm91bmQsIGJldmVsLCBtaXRlciAoZGVmYXVsdCkuXG4gICAgbGluZUpvaW46ICdsaW5lSm9pbicsXG4gICAgLy8gV2lkdGggb2YgbGluZXMuIERlZmF1bHQgMS4wLlxuICAgIGxpbmVXaWR0aDogJ2xpbmVXaWR0aCcsXG4gICAgLy8gTWl0ZXIgbGltaXQgcmF0aW8uIERlZmF1bHQgMTAuXG4gICAgbWl0ZXJMaW1pdDogJ21pdGVyTGltaXQnLFxuXG4gICAgLy8gU3BlY2lmaWVzIHRoZSBibHVycmluZyBlZmZlY3QuIERlZmF1bHQ6IDBcbiAgICBzaGFkb3dCbHVyOiAnc2hhZG93Qmx1cicsXG4gICAgLy8gQ29sb3Igb2YgdGhlIHNoYWRvdy4gRGVmYXVsdDogZnVsbHktdHJhbnNwYXJlbnQgYmxhY2suXG4gICAgc2hhZG93Q29sb3I6ICdzaGFkb3dDb2xvcicsXG4gICAgLy8gSG9yaXpvbnRhbCBkaXN0YW5jZSB0aGUgc2hhZG93IHdpbGwgYmUgb2Zmc2V0LiBEZWZhdWx0OiAwLlxuICAgIHNoYWRvd09mZnNldFg6ICdzaGFkb3dPZmZzZXRYJyxcbiAgICAvLyBWZXJ0aWNhbCBkaXN0YW5jZSB0aGUgc2hhZG93IHdpbGwgYmUgb2Zmc2V0LiBEZWZhdWx0OiAwLlxuICAgIHNoYWRvd09mZnNldFk6ICdzaGFkb3dPZmZzZXRZJyxcblxuICAgIC8vIENvbG9yIG9yIHN0eWxlIHRvIHVzZSBmb3IgdGhlIGxpbmVzIGFyb3VuZCBzaGFwZXMuIERlZmF1bHQgIzAwMCAoYmxhY2spLlxuICAgIHN0cm9rZVN0eWxlOiAnc3Ryb2tlU3R5bGUnLFxuXG4gICAgLy8gVGV4dCBhbGlnbm1lbnQgc2V0dGluZy4gUG9zc2libGUgdmFsdWVzOiBzdGFydCAoZGVmYXVsdCksIGVuZCwgbGVmdCwgcmlnaHQsIGNlbnRlci5cbiAgICB0ZXh0QWxpZ246ICd0ZXh0QWxpZ24nLFxuXG4gICAgLy8gQmFzZWxpbmUgYWxpZ25tZW50IHNldHRpbmcuXG4gICAgLy8gdG9wLCBoYW5naW5nLCBtaWRkbGUsIGFscGhhYmV0aWMgKGRlZmF1bHQpLCBpZGVvZ3JhcGhpYywgYm90dG9tLlxuICAgIHRleHRCYXNlbGluZTogJ3RleHRCYXNlbGluZScsXG5cbiAgICAvLyBFeHBlcmltZW50YWwuIEN1cnJlbnQgdHJhbnNmb3JtYXRpb24gbWF0cml4IChTVkdNYXRyaXggb2JqZWN0KS5cbiAgICBjdXJyZW50VHJhbnNmb3JtOiAnY3VycmVudFRyYW5zZm9ybSdcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgUGFpbnQ7XG4iLCJpbXBvcnQgc3R5bGl6ZXIgZnJvbSBcIi4uL3N0YXRpYy9zdHlsaXplclwiO1xuaW1wb3J0IGlzTnVtYmVyIGZyb20gXCIuLi9zdGF0aWMvaXNOdW1iZXJcIjtcbi8qXG5cbnRyYW5zZm9ybSA9IFBhaW50VHJhbnNmb3JtKHRoaXMuZWxlbWVudCk7XG50cmFuc2Zvcm0ubWV0aG9kKCdyb3RhdGUnLCBbJzQ1ZGVnJ10pO1xudHJhbnNmb3JtLnVwZGF0ZSgpO1xudHJhbnNmb3JtLnJlc2VhcmNoKCk7XG50cmFuc2Zvcm0uZnVuY3Rpb25QYXJhbWV0ZXJzKCdtYXRyaXgnKSAgICAgICAgIC8vIFsxLCAwLCAwLCAxLCAwLCAwXTogYXJyYXlcbnRyYW5zZm9ybS5mdW5jdGlvblBhcmFtZXRlcnMoJ3JvdGF0ZScpICAgICAgICAgLy8gW1wiNDVkZWdcIl06IHN0cmluZ1xudHJhbnNmb3JtLmZ1bmN0aW9uUGFyYW1ldGVycygncm90YXRlJywgdHJ1ZSkgICAvLyA0NTogaW50XG5cbi8vIC4uLlxuUGFpbnRUcmFuc2Zvcm0uZWxlbWVudCh0aGlzLmVsZW1lbnQsIFtcbiAgICAncm90YXRlKCcgKyAxMCArJ2RlZyknLFxuICAgICdzY2FsZSgwLjYsIDAuNiknLFxuICAgICdtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMCknLFxuXSk7XG5QYWludFRyYW5zZm9ybS5lbGVtZW50KHRoaXMuZWxlbWVudCwgWydyb3RhdGUoJyArIDEwICsnZGVnKSddKVxuY29uc3QgdHJzID0gUGFpbnRUcmFuc2Zvcm0odGhpcy5lbGVtZW50KTtcblxuLy8gd2l0aG91dCBvZiB0aGUgUGFpbnRUcmFuc2Zvcm1cbnRoaXMuc3R5bGUoe1xuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgnICsgMTAgKydkZWcpIHNjYWxlKDAuNiwgMC42KSBtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMCknXG59KTtcblxuKi9cbmNvbnN0IFBhaW50VHJhbnNmb3JtID0gZnVuY3Rpb24gKGVsZW1lbnQsIHBhcmFtcylcbntcbiAgICBjb25zdCByb290ID0ge1xuICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgICB0cmFuc2Zvcm1fb2JqOiB7fSxcbiAgICAgICAgdHJhbnNmb3JtX2FycjogZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0uc3BsaXQoJyknKS5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZS5sZW5ndGggKSxcbiAgICAgICAgdHJhbnNmb3JtX3N0cmluZzogJycsXG5cbiAgICAgICAgdXBkYXRlKCl7XG4gICAgICAgICAgICByb290LnRyYW5zZm9ybV9zdHJpbmcgPSAnJztcblxuICAgICAgICAgICAgT2JqZWN0LmtleXMocm9vdC50cmFuc2Zvcm1fb2JqKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICByb290LnRyYW5zZm9ybV9zdHJpbmcgKz0ga2V5ICsgJygnICsgcm9vdC50cmFuc2Zvcm1fb2JqW2tleV0uam9pbignLCAnKSArICcpICc7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RyYW5zZm9ybV9vYmonKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJvb3QudHJhbnNmb3JtX29iaik7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0cmFuc2Zvcm1fc3RyaW5nJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyb290LnRyYW5zZm9ybV9zdHJpbmcpO1xuICAgICAgICAgICAgLy8gcm9vdC5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICByb290LnRyYW5zZm9ybV9zdHJpbmc7XG4gICAgICAgICAgICByb290LnJlc2VhcmNoKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kKG1ldGhvZCwgcHJvcGVydGllcywgbXVsdGlwbHkgPSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBtZXRob2QgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcHJvcGVydGllcyA9IEFycmF5LmlzQXJyYXkocHJvcGVydGllcykgPyBwcm9wZXJ0aWVzIDogW3Byb3BlcnRpZXNdO1xuXG4gICAgICAgICAgICAgICAgaWYgKG11bHRpcGx5IHx8IHJvb3QudHJhbnNmb3JtX29ialttZXRob2RdKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXMuZm9yRWFjaCgodmFsdWUsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleHQgPSB2YWx1ZS5tYXRjaCgvW2Etel0rL2cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG51bSA9IHBhcnNlSW50KHZhbHVlKSArIHBhcnNlSW50KHJvb3QudHJhbnNmb3JtX29ialttZXRob2RdW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzW2ldID0gbnVtICsgZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzW2ldID0gdmFsdWUgKyByb290LnRyYW5zZm9ybV9vYmpbbWV0aG9kXVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3QudHJhbnNmb3JtX29ialttZXRob2RdID0gcHJvcGVydGllcztcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm9vdC50cmFuc2Zvcm1fb2JqW21ldGhvZF0gPSBwcm9wZXJ0aWVzO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtdWx0aXBseSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvb3QudHJhbnNmb3JtX29ialttZXRob2RdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcy5mb3JFYWNoKCh2YWx1ZSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleHQgPSB2YWx1ZS5tYXRjaCgvW2Etel0rL2cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbnVtID0gcGFyc2VJbnQodmFsdWUpICsgcGFyc2VJbnQocm9vdC50cmFuc2Zvcm1fb2JqW21ldGhvZF1baV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllc1tpXSA9IG51bSArIGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXNbaV0gPSB2YWx1ZSArIHJvb3QudHJhbnNmb3JtX29ialttZXRob2RdW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3QudHJhbnNmb3JtX29ialttZXRob2RdID0gcHJvcGVydGllcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vdC50cmFuc2Zvcm1fb2JqW21ldGhvZF0gPSBwcm9wZXJ0aWVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vdC50cmFuc2Zvcm1fb2JqW21ldGhvZF0gPSBwcm9wZXJ0aWVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NldHMgcGFyYW1ldGVycyBpcyBub3QgYXZhaWxhYmxlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICByZXNlYXJjaCgpe1xuICAgICAgICAgICAgcm9vdC50cmFuc2Zvcm1fYXJyID0gZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0uc3BsaXQoJyknKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZS5sZW5ndGggKTtcblxuICAgICAgICAgICAgcm9vdC50cmFuc2Zvcm1fYXJyLmZvckVhY2goKHZhbHVlLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyYW0gPSByb290LnRyYW5zZm9ybV9hcnJbaV0gPSByb290LnRyYW5zZm9ybV9hcnJbaV0udHJpbSgpICArICcpJztcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaGVkID0gcGFyYW0ubWF0Y2goL1tcXHdcXC5cXC1dKy9pZyk7XG4gICAgICAgICAgICAgICAgcm9vdC50cmFuc2Zvcm1fb2JqW21hdGNoZWRbMF1dID0gbWF0Y2hlZC5zbGljZSgxKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGZ1bmN0aW9uUGFyYW1ldGVycyhuYW1lLCBGSVJTVF9JVEVNX1RPX0lOVEVHRVIgPSBmYWxzZSl7XG4gICAgICAgICAgICBpZiAoRklSU1RfSVRFTV9UT19JTlRFR0VSXG4gICAgICAgICAgICAgICAgJiYgQXJyYXkuaXNBcnJheShyb290LnRyYW5zZm9ybV9vYmpbbmFtZV0pXG4gICAgICAgICAgICAgICAgJiYgcm9vdC50cmFuc2Zvcm1fb2JqW25hbWVdLmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gcm9vdC50cmFuc2Zvcm1fb2JqW25hbWVdWzBdO1xuICAgICAgICAgICAgICAgIHJldHVybiBpc051bWJlcihpdGVtKVxuICAgICAgICAgICAgICAgICAgICA/IHBhcnNlSW50KGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgIDogcm9vdC50cmFuc2Zvcm1fb2JqW25hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJvb3QudHJhbnNmb3JtX29ialtuYW1lXTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgcm9vdC5yZXNlYXJjaCgpO1xuXG4gICAgaWYgKHBhcmFtcyAmJiB0eXBlb2YgcGFyYW1zID09PSAnb2JqZWN0Jykge1xuICAgICAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgcm9vdC5tZXRob2Qoa2V5LCBwYXJhbXNba2V5XSk7XG4gICAgICAgIH0pO1xuICAgICAgICByb290LnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiByb290O1xufVxuXG5QYWludFRyYW5zZm9ybS5lbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHZhbHVlcyl7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWVzKSkge1xuICAgICAgICBjb25zdCBwcm9wcyA9IFtdO1xuICAgICAgICB2YWx1ZXMuZm9yRWFjaCgocHJvcCkgPT4geyBwcm9wcy5wdXNoKHByb3ApIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdQYWludFRyYW5zZm9ybS5lbGVtZW50Jyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQsIHByb3BzKTtcbiAgICAgICAgLy8gc3R5bGl6ZXIoZWxlbWVudCwge3RyYW5zZm9ybTogcHJvcHMuam9pbignICcpfSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFpbnRUcmFuc2Zvcm07XG4iLCJpbXBvcnQgbWVyZ2UgZnJvbSBcIi4uL3N0YXRpYy9tZXJnZVwiO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0gY29uZmlndXJhdGlvblxuICogQHJldHVybiB7Knx7aW5pdCgpLCByZW5kZXIoKSwgY29uZmlndXJlZDogZnVuY3Rpb24oY29uZmlndXJhdGlvbjogKiksIHByb3BlcnRpZXM6IGZ1bmN0aW9uKHByb3BlcnRpZXM6ICopLCBwcm9wOiBmdW5jdGlvbihuYW1lOiBzdHJpbmcpfX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBQbGFudCA9IGZ1bmN0aW9uIChjb25maWd1cmF0aW9uKSB7XG4gICAgY29uc3QgTUVUSE9EUyA9IHtcbiAgICAgICAgQ09ORklHVVJFRDogJ2NvbmZpZ3VyZWQnLFxuICAgICAgICBDT01QTEVURTogJ2NvbXBsZXRlJyxcbiAgICAgICAgUkVOREVSOiAncmVuZGVyJyxcbiAgICAgICAgUFJPUFM6ICdwcm9wcycsXG4gICAgICAgIFBST1A6ICdwcm9wJyxcbiAgICAgICAgSU5JVDogJ2luaXQnLFxuICAgIH07XG5cbiAgICBsZXQgcm9vdCA9IHtcbiAgICAgICAgcmVuZGVyICgpIHt9LFxuICAgICAgICBwcm9wczoge30sXG4gICAgICAgIHByb3AobmFtZSl7IHJldHVybiB0aGlzLnByb3BzW25hbWVdIH0sXG4gICAgICAgIGluaXQgKCkge30sXG4gICAgICAgIHVwZGF0ZSAoKSB7fSxcbiAgICAgICAgY29tcGxldGUgKCkge30sXG4gICAgICAgIHByb3BlcnRpZXMgKHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHNba2V5XSA9IHByb3BlcnRpZXNba2V5XVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy51cGRhdGUpIHt0aGlzLnVwZGF0ZSgpfVxuICAgICAgICB9LFxuICAgICAgICBjb25maWd1cmVkIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb25maWd1cmF0aW9uKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIU9iamVjdC52YWx1ZXMoTUVUSE9EUykuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICByb290W2tleV0gPSBjb25maWd1cmF0aW9uW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy51cGRhdGUpIHt0aGlzLnVwZGF0ZSgpfVxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICByb290LmluaXQoKTtcbiAgICByb290ID0gbWVyZ2Uocm9vdCwgY29uZmlndXJhdGlvbik7XG4gICAgcm9vdC5jb21wbGV0ZSgpO1xuXG4gICAgcmV0dXJuIHJvb3Q7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGFudDsiLCJcbmNvbnN0IFBvaW50ID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICByZXR1cm4ge3gsIHl9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9pbnQ7XG4iLCJpbXBvcnQgaXNPYmplY3QgZnJvbSBcImFuaW1hdGUuanMvc3JjL2Z1bmN0aW9uL2lzT2JqZWN0XCI7XG5cbi8qXG5cblxuXG5cblxuXG4qL1xuXG4vKipcbiAqIHJlYyA9IFJlY3RhbmdsZSgwLCAwLCAxMDAsIDEwMCk7IC8vIHt4OiAwLCB5OiAwLCB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMH1cbiAqIHJlYy50b0FycmF5KCk7IC8vIFswLCAwLCAxMDAsIDEwMF1cbiAqIHJlYy50b1N0cmluZygpOyAvLyAwIDAgMTAwIDEwMFxuICpcbiAqIFJlY3RhbmdsZS5mcm9tKFswLCAwLCAxMDAsIDEwMF0pOyAvLyBSZWN0YW5nbGVcbiAqIFJlY3RhbmdsZS5mcm9tKHt4OiAwLCB5OiAwLCB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMH0pOyAvLyBSZWN0YW5nbGVcbiAqXG4gKiBAcGFyYW0geFxuICogQHBhcmFtIHlcbiAqIEBwYXJhbSB3aWR0aFxuICogQHBhcmFtIGhlaWdodFxuICogQHJldHVybiB7e3g6ICosIHdpZHRoOiAqLCB0b0FycmF5OiAoZnVuY3Rpb24oKTogWyosICosICosICpdKSwgeTogKiwgdG9TdHJpbmc6IChmdW5jdGlvbigpOiBzdHJpbmcpLCBoZWlnaHQ6ICp9fHVuZGVmaW5lZH1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBSZWN0YW5nbGUgPSBmdW5jdGlvbiAoeCwgeSwgd2lkdGgsIGhlaWdodClcbntcbiAgICByZXR1cm4ge1xuICAgICAgICB4LFxuICAgICAgICB5LFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgICB0b0FycmF5OiBmdW5jdGlvbiAoKSB7IHJldHVybiBbeCwgeSwgd2lkdGgsIGhlaWdodF07IH0sXG4gICAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7IHJldHVybiBgJHt4fSwgJHt5fSwgJHt3aWR0aH0sICR7aGVpZ2h0fWB9LFxuICAgIH07XG59O1xuXG5SZWN0YW5nbGUuZnJvbSA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJhbXMpKSB7XG4gICAgICAgIHJldHVybiBSZWN0YW5nbGUuYXBwbHkoUmVjdGFuZ2xlLCBwYXJhbXMpO1xuICAgIH1cbiAgICBpZiAoaXNPYmplY3QocGFyYW1zKSkge1xuICAgICAgICByZXR1cm4gUmVjdGFuZ2xlLmFwcGx5KFJlY3RhbmdsZSwgT2JqZWN0LnZhbHVlcyhwYXJhbXMpKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWN0YW5nbGU7XG4iLCJpbXBvcnQgdHJpbVN5bWJvbHMgZnJvbSBcIi4uL3N0YXRpYy90cmltU3ltYm9sc1wiO1xuXG5jb25zdCBSb3V0ZXIgPSBmdW5jdGlvbiAoY29uZmlnKVxue1xuICAgIGNvbnN0IHJvb3QgPSB7fTtcbiAgICByb290Lmhhc2ggPSBsb2NhdGlvbi5oYXNoO1xuICAgIHJvb3Qucm9vdCA9ICcvJyArIHRyaW1TeW1ib2xzKGNvbmZpZy5yb290LCAnLycpO1xuICAgIHJvb3QucGF0aG5hbWUgPSAnLycgKyB0cmltU3ltYm9scyhsb2NhdGlvbi5wYXRobmFtZSwgJy8nKSArICcvJztcbiAgICByb290LnJvdXRlcyA9IGNvbmZpZy5yb3V0ZXMgPyBjb25maWcucm91dGVzIDoge307XG4gICAgcm9vdC5jb250ZXh0ID0gY29uZmlnLmNvbnRleHQgPyBjb25maWcuY29udGV4dCA6IHt9O1xuXG4gICAgcm9vdC50byA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgY29uc29sZS5sb2coa2V5KVxuICAgICAgICBpZiAodHlwZW9mIHJvb3Qucm91dGVzW2tleV0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgcm9vdC5yb3V0ZXNba2V5XS5jYWxsKHt9LCByb290LmNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIE9iamVjdC5rZXlzKHJvb3Qucm91dGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3QgaXMgPSBrZXkuaW5jbHVkZXMoJyMnKVxuICAgICAgICAgICAgPyBrZXkgPT09IHJvb3QuaGFzaFxuICAgICAgICAgICAgOiByb290LnJvb3QgKyBrZXkgPT09IHJvb3QucGF0aG5hbWU7XG5cbiAgICAgICAgaWYgKGlzICYmIHR5cGVvZiByb290LnJvdXRlc1trZXldID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHJvb3Qucm91dGVzW2tleV0uY2FsbChyb290LmNvbnRleHQsIHJvb3QuY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByb290O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUm91dGVyO1xuIiwiLypcbmNvbnN0IFJ4U3RhdGUgPSBSb3h5KHtcbiAgICB0aXRsZTogJycsXG4gICAgYm9keTogJycsXG59KTtcblxuUnhTdGF0ZS5ldmVudCgoa2V5LCB2YWx1ZXMpPT57XG4gICAgaWYgKGtleSA9PT0gJycpIHt9XG4gICAgaW5qZWN0KCcjJyArIGtleSwgdmFsdWVzKTtcbn0pO1xuXG5SeFN0YXRlLnByb3h5LnRpdGxlID0gJ0ZpcnN0IHZhbHVlJztcblJ4U3RhdGUucHJveHkuYm9keSA9ICdUZXN0IGJvZHkgdGV4dCc7XG5cblRpbWVyLnRpbWVvdXQoKCkgPT4ge1xuICAgIFJ4U3RhdGUuZGlzcGF0Y2goJ3RpdGxlJywgJ0hlbGxvIGZyaWVuZCcpO1xuICAgIFJ4U3RhdGUuZGlzcGF0Y2goJ2JvZHknLCAnRG8geW91IGhhcHB5IG5vdz8nKTtcbn0sIDIwMDApO1xuXG4qL1xuXG4vKipcbiAqIEBwYXJhbSBwYXlsb2FkXG4gKiBAcmV0dXJucyB7e3Byb3h5OiAqLCBzZXQoKj0sICo9KTogKiwgZ2V0KCopOiAqLCBhY3Rpb24oKj0sICo9KTogKiwgZmlsbCgqPSwgKj0pOiAqfXxSb3h5fHt9fG51bGx8Ym9vbGVhbn1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5pbXBvcnQgY29weSBmcm9tIFwiLi4vc3RhdGljL2NvcHlcIjtcblxuY29uc3QgUm94eSA9IGZ1bmN0aW9uIChwYXlsb2FkKVxue1xuICAgIGNvbnN0IHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrcyA9IHtcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICB9O1xuXG4gICAgY29uc3QgcHJveHkgPSBuZXcgUHJveHkocGF5bG9hZCwge1xuICAgICAgICBnZXQob2JqLCBwcm9wKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvcCBpbiBvYmogPyBvYmpbcHJvcF0gOiBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBzZXQob2JqLCBwcm9wLCB2YWx1ZSkge1xuXG4gICAgICAgICAgICBvYmpbcHJvcF0gPSB2YWx1ZTtcblxuICAgICAgICAgICAgaWYgKHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrc1twcm9wXSAmJiB0eXBlb2YgcHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzW3Byb3BdID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgICAgICAgICAgcHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzW3Byb3BdLmNhbGwoe30sIHByb3AsIHZhbHVlLCBjb3B5KHByb3h5KSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgcHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3MuZGVmYXVsdC5jYWxsKHt9LCBwcm9wLCB2YWx1ZSwgY29weShwcm94eSkpO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogb2xkZXIgbmFtZTogc2VlfHNldD9cbiAgICAgICAgICogQHBhcmFtIGtleVxuICAgICAgICAgKiBAcGFyYW0gcGF5bG9hZFxuICAgICAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgICAgICovXG4gICAgICAgIGRpc3BhdGNoKGtleSwgcGF5bG9hZCkge1xuICAgICAgICAgICAgbGV0IHJlc3VsdDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09IFwiZnVuY3Rpb25cIiAmJiAhcGF5bG9hZCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGtleS5jYWxsKHt9LCBwcm94eSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxsKHJlc3VsdClcblxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcGF5bG9hZCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcGF5bG9hZC5jYWxsKHt9LCBwcm94eVtrZXldKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICBwcm94eVtrZXldID0gcmVzdWx0O1xuXG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICBwcm94eVtrZXldID0gcGF5bG9hZDtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGFjdGlvbigpXG4gICAgICAgICAqIEBkZXByZWNhdGVkXG4gICAgICAgICAqIEBwYXJhbSBrZXlcbiAgICAgICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAgICAgKi9cbiAgICAgICAgZXZlbnQoa2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub2JzZXJ2ZShrZXksIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRXZlbnQgY2hhbmdlIHByb3BlcnRpZXMgb2Ygc291cmNlIG9iamVjdFxuICAgICAgICAgKiBAcGFyYW0ga2V5XG4gICAgICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgICAgICovXG4gICAgICAgIG9ic2VydmUoa2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09IFwiZnVuY3Rpb25cIiAmJiAhY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3MuZGVmYXVsdCA9IGtleTtcbiAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrc1trZXldID0gdHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgPyBjYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICA6IG51bGw7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldChrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBrZXkgPyBwcm94eVtrZXldIDogY29weShwcm94eSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZmlsbChwYXlsb2FkLCB0bykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocGF5bG9hZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRvKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcHJveHlbdG9dKVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJveHlbdG9dID0ge307XG4gICAgICAgICAgICAgICAgICAgIHByb3h5W3RvXVtrZXldID0gcGF5bG9hZFtrZXldXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJveHlba2V5XSA9IHBheWxvYWRba2V5XVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgcHJveHkoKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJveHk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0UHJveHkoKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJveHk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgUm94eTtcbiIsImltcG9ydCBSb3h5IGZyb20gXCIuL1JveHlcIjtcblxuLyoqXG4gKiBjb25zdCByeCA9IFJveHlMaXN0ZW5lciAoe1xuICogICAgIGV2ZW50TmFtZSAoKSB7IC8vIGhhbmRsZXIgLi4uIH0sXG4gKiAgICAgZXZlbnROYW1lICgpIHsgLy8gaGFuZGxlciAuLi4gfSxcbiAqIH0pXG4gKiByeC5zZXQoKTtcbiAqIHJ4LmRpc3BhdGNoKCk7XG4gKlxuICogcnguYWN0aW9uKCk7XG4gKlxuICogQHBhcmFtIHBheWxvYWRcbiAqIEByZXR1cm5zIHt7cHJveHk6ICosIGRpc3BhdGNoKCo9LCAqPSk6IFJveHksIGdldCgqKTogKiwgZXZlbnQoKj0sICo9KTogdGhpcywgZmlsbCgqPSwgKj0pOiB0aGlzfX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBSb3h5TGlzdGVuZXIgPSBmdW5jdGlvbiAocGF5bG9hZCkge1xuXG4gICAgY29uc3QgYWN0aW9ucyA9IHtcbiAgICAgICAgX19hY3Rpb25fXygpIHtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBhY3Rpb25zTmFtZXMgPSB7fTtcblxuICAgIE9iamVjdC5rZXlzKHBheWxvYWQpLm1hcChmdW5jdGlvbiAoZXZlbnROYW1lLCBpbmRleCkge1xuICAgICAgICBhY3Rpb25zW2V2ZW50TmFtZV0gPSBwYXlsb2FkW2V2ZW50TmFtZV07XG5cbiAgICAgICAgaWYgKHR5cGVvZiBwYXlsb2FkW2V2ZW50TmFtZV0gPT09ICdmdW5jdGlvbicgJiYgZXZlbnROYW1lICE9PSBhY3Rpb25zLl9fYWN0aW9uX18ubmFtZSkge1xuICAgICAgICAgICAgYWN0aW9uc05hbWVzW2V2ZW50TmFtZV0gPSAnJztcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcnggPSBSb3h5KGFjdGlvbnNOYW1lcyk7XG4gICAgLy9cbiAgICByeC5hY3Rpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYWN0aW9uc05hbWVzXG4gICAgfTtcblxuICAgIHJ4LmV2ZW50KChldmVudEN1cnNvciwgdmFsdWVzKSA9PiB7XG4gICAgICAgIGFjdGlvbnMuX19hY3Rpb25fXy5jYWxsKGFjdGlvbnMsIGV2ZW50Q3Vyc29yLCB2YWx1ZXMpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKGFjdGlvbnMpLm1hcChmdW5jdGlvbiAoZXZlbnROYW1lLCBpbmRleCkge1xuXG4gICAgICAgICAgICBpZiAoZXZlbnRDdXJzb3IgPT09IGV2ZW50TmFtZSAmJiB0eXBlb2YgYWN0aW9uc1tldmVudE5hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uc1tldmVudE5hbWVdLmNhbGwoYWN0aW9ucywgZXZlbnRDdXJzb3IsIHZhbHVlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcng7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSb3h5TGlzdGVuZXI7XG4iLCJpbXBvcnQgY2xvbmUgZnJvbSBcIi4uL3N0YXRpYy9jbG9uZVwiO1xuXG5cbi8qXG5FeGFtcGxlczpcbmNvbnN0IHNjZW5lID0gU2NlbmUoKTtcbnNjZW5lLmFkZCgnZWRpdG9yJywgZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHtcbiAgICBjb25zb2xlLmxvZyhhLCBiLCBjLCBkKTtcbn0pXG5zY2VuZS5hZGQoJ291dHB1dCcsIGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7XG4gICAgY29uc29sZS5sb2coYSwgYiwgYywgZCk7XG59KVxuc2NlbmUucnVuKCdvdXRwdXQnLCBbJ2hlbGxvJywgMjAwLCBbMSwyLDNdLCB7aWQ6IDEyM31dKTtcblxuLy8gaW5pdCB2IDJcbmNvbnN0IHNjZW5lQ29udGV4dCA9IHt9O1xuY29uc3Qgc2NlbmUgPSBTY2VuZSh7XG4gICAgZWRpdG9yICgpIHt9LFxuICAgIG91dHB1dCAoKSB7fSxcbn0pO1xuKi9cblxuLyoqXG4gKiBhZGQobmFtZSwgY2FsbGJhY2ssIGF0dHJzKSAgLy8gYWRkIG5ldyBzY2VuZVxuICogZ2V0KG5hbWUpICAgICAgICAgICAgICAgICAgIC8vIHJldHVybmVkIHNjZW5lIGJ5IG5hbWVcbiAqIGdldEN1cnJlbnRTY2VuZSgpICAgICAgICAgICAvLyByZXR1cm5lZCBjdXJyZW50IHNjZW5lXG4gKiBuZXh0KCkgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gbmV4dCBzY2VuZVxuICogcnVuKG5hbWUsIGF0dHJzKSAgICAgICAgICAgIC8vIHJ1biBzY2VuZXMgYnkgbmFtZSwgc2V0IHRoaXMga2V5IG5hbWUgdG8gZGVmYXVsdFxuICogY2xvbmUoKSAgICAgICAgICAgICAgICAgICAgIC8vIGNsb25lZCBjdXJyZW50IHNjZW5lc1xuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0gY29tbXVuaXR5X2FyZ3VtZW50c1xuICogQHJldHVybiB7e2FkZDogKGZ1bmN0aW9uKG5hbWU6c3RyaW5nLCBzY2VuZTpmdW5jdGlvbiApOiAqKSwgbmV4dDogKGZ1bmN0aW9uKCk6ICopLCBjdXJyZW50OiBzdHJpbmcsIGdldEN1cnJlbnRTY2VuZTogKGZ1bmN0aW9uKCk6ICopLCBnZXQ6IChmdW5jdGlvbihuYW1lOnN0cmluZyk6ICopLCBzY2VuZXM6IHtkZWZhdWx0OiB7Y2FsbGJhY2soKTogdm9pZCwgYXR0cnM6IFtdfX0sIGNsb25lOiAoZnVuY3Rpb24oKTogKiksIG9wZW46IChmdW5jdGlvbihrZXk6IHN0cmluZywgYXR0cnM6IFtdKTogKiksIGVsZW1lbnQ6IEhUTUxFbGVtZW50fX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBTY2VuZSA9IGZ1bmN0aW9uIChwcm9wZXJ0aWVzLCBjb21tdW5pdHlfYXJndW1lbnRzID0gW10pIHtcbiAgICBjb25zdCByb290ID0ge1xuICAgICAgICBjdXJyZW50OiAnZGVmYXVsdCcsXG4gICAgICAgIGVsZW1lbnQ6IG51bGwsXG4gICAgICAgIHNjZW5lczoge1xuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCkge2NvbnNvbGUubG9nKCdbRGVmYXVsdCBTY2VuZV0nKX0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IFtdLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhZGQ6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgYXR0cnMgPSBbXSkge1xuICAgICAgICAgICAgdGhpcy5zY2VuZXNbbmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgYXR0cnNcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGdldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjZW5lc1tuYW1lXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0Q3VycmVudFNjZW5lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2VuZXNbdGhpcy5jdXJyZW50XTtcbiAgICAgICAgfSxcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IGxlc3QgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnNjZW5lcyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5c1tpXSA9PT0gdGhpcy5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5c1tpICsgMV0gIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXN0ID0ga2V5c1tpICsgMV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSBrZXlzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlc3QgPSBrZXlzWzBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMub3BlbihsZXN0KTtcbiAgICAgICAgfSxcbiAgICAgICAgb3BlbjogZnVuY3Rpb24gKGtleSwgYXR0cnMpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IGtleSB8fCAnZGVmYXVsdCc7XG4gICAgICAgICAgICBjb25zdCBzY2VuZSA9IHRoaXMuZ2V0Q3VycmVudFNjZW5lKCk7XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IHNjZW5lLmNhbGxiYWNrO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXR0cnMpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnMgPSBBcnJheS5pc0FycmF5KGF0dHJzKSA/IGF0dHJzIDogW2F0dHJzXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gdG9kbzogY2hhbmdlZCBhcHBseSB0byBjYWxsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkocm9vdCwgYXR0cnMgPyBhdHRycyA6IHNjZW5lLmF0dHJzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjbG9uZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNsb25lKHRoaXMpO1xuICAgICAgICB9LFxuICAgIH07XG5cbiAgICAvLyByb290LmFkZCA9IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgYXR0cnMgPSBbXSkge1xuICAgIC8vICAgICByb290LnNjZW5lc1tuYW1lXSA9IHtcbiAgICAvLyAgICAgICAgIGNhbGxiYWNrLFxuICAgIC8vICAgICAgICAgYXR0cnNcbiAgICAvLyAgICAgfTtcbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyAvLyAsICBfX186IGZ1bmN0aW9uLCAgX19fOiBmdW5jdGlvbixcbiAgICAvLyByb290LmdldCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgLy8gICAgIHJldHVybiByb290LnNjZW5lc1tuYW1lXTtcbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyByb290LmdldEN1cnJlbnRTY2VuZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgcmV0dXJuIHJvb3Quc2NlbmVzW3Jvb3QuY3VycmVudF07XG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gcm9vdC5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICBsZXQgbGVzdCA9IGZhbHNlO1xuICAgIC8vICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocm9vdC5zY2VuZXMpO1xuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgICAgICAgIGlmIChrZXlzW2ldID09PSByb290LmN1cnJlbnQpIHtcbiAgICAvLyAgICAgICAgICAgICBpZiAodHlwZW9mIGtleXNbaSArIDFdICE9PSBcInVuZGVmaW5lZFwiKVxuICAgIC8vICAgICAgICAgICAgICAgICBsZXN0ID0ga2V5c1tpICsgMV07XG4gICAgLy8gICAgICAgICAgICAgaWYgKGkgPT09IGtleXMubGVuZ3RoIC0gMSkge1xuICAgIC8vICAgICAgICAgICAgICAgICBsZXN0ID0ga2V5c1swXTtcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgcm9vdC5vcGVuKGxlc3QpO1xuICAgIC8vIH07XG4gICAgLy9cbiAgICAvLyByb290Lm9wZW4gPSBmdW5jdGlvbiAoa2V5LCBhdHRycykge1xuICAgIC8vICAgICByb290LmN1cnJlbnQgPSBrZXkgfHwgJ2RlZmF1bHQnO1xuICAgIC8vICAgICBjb25zdCBzY2VuZSA9IHJvb3QuZ2V0Q3VycmVudFNjZW5lKCk7XG4gICAgLy8gICAgIGNvbnN0IGNhbGxiYWNrID0gc2NlbmUuY2FsbGJhY2s7XG4gICAgLy9cbiAgICAvLyAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gICAgICAgICBpZiAoYXR0cnMpIHtcbiAgICAvLyAgICAgICAgICAgICBhdHRycyA9IEFycmF5LmlzQXJyYXkoYXR0cnMpID8gYXR0cnMgOiBbYXR0cnNdO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgLy8gdG9kbzogY2hhbmdlZCBhcHBseSB0byBjYWxsXG4gICAgLy8gICAgICAgICBjYWxsYmFjay5hcHBseShyb290LCBhdHRycyA/IGF0dHJzIDogc2NlbmUuYXR0cnMpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfTtcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgICByb290LnNob3cgPSBmdW5jdGlvbiAoa2V5LCBhdHRycykgeyByb290Lm9wZW4oa2V5LCBhdHRycykgfTtcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgICByb290LnN0YXJ0ID0gZnVuY3Rpb24gKGtleSwgYXR0cnMpIHsgcm9vdC5vcGVuKGtleSwgYXR0cnMpIH07XG4gICAgLyoqIEBkZXByZWNhdGVkICovXG4gICAgcm9vdC5ydW4gPSBmdW5jdGlvbiAoa2V5LCBhdHRycykgeyByb290Lm9wZW4oa2V5LCBhdHRycykgfTtcbiAgICAvL1xuICAgIC8vIHJvb3QuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgIHJldHVybiBjbG9uZSh0aGlzKTtcbiAgICAvLyB9O1xuXG4gICAgaWYgKHByb3BlcnRpZXMgJiYgcHJvcGVydGllcy5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgcm9vdC5hZGQoa2V5LCBwcm9wZXJ0aWVzW2tleV0sIEFycmF5LmlzQXJyYXkoY29tbXVuaXR5X2FyZ3VtZW50cykgPyBjb21tdW5pdHlfYXJndW1lbnRzIDogW2NvbW11bml0eV9hcmd1bWVudHNdKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJvb3Q7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY2VuZTtcbiIsImltcG9ydCBjbG9uZSBmcm9tIFwiLi4vc3RhdGljL2Nsb25lXCI7XG5cblxuLypcbiMjIEV4YW1wbGVzOlxuaW1wb3J0IFN0YWdlRmFjdG9yeSBmcm9tIFwiU3RhZ2VGYWN0b3J5XCI7XG5cbmNvbnN0IHN0YWdlID0gU3RhZ2VGYWN0b3J5KHtcbiAgICBlZGl0b3IgKCkge30sXG4gICAgb3V0cHV0ICgpIHt9LFxufSk7XG5cbnN0YWdlLnNjZW5lKG5hbWUsIGNhbGxiYWNrLCBhdHRycyl7fVxuc3RhZ2UuZ2V0U2NlbmUobmFtZSkge31cbnN0YWdlLmdldEN1cnJlbnRTY2VuZSgpIHt9XG5zdGFnZS5nZXRDdXJyZW50U2NlbmVOYW1lKCkge31cbnN0YWdlLm5leHQoKSB7fVxuc3RhZ2UuZXhlY3V0ZShuYW1lLCBhdHRycykge31cbnN0YWdlLmNsb25lKCkge31cblxuIyMgRXhhbXBsZXM6XG5pbXBvcnQgU2NlbmUgZnJvbSBcIlNjZW5lXCI7XG5cblNjZW5lLnNjZW5lKCdlZGl0b3InLCBmdW5jdGlvbiAoYSwgYiwgYywgZCkge1xuICAgIGNvbnNvbGUubG9nKGEsIGIsIGMsIGQpO1xufSlcblNjZW5lLnNjZW5lKCdvdXRwdXQnLCBmdW5jdGlvbiAoYSwgYiwgYywgZCkge1xuICAgIGNvbnNvbGUubG9nKGEsIGIsIGMsIGQpO1xufSlcblNjZW5lLmV4ZWN1dGUoJ291dHB1dCcsIFsnaGVsbG8nLCAyMDAsIFsxLDIsM10sIHtpZDogMTIzfV0pO1xuXG4jIyBFeGFtcGxlczpcbmNvbnN0IHNjZW5lQ29udGV4dCA9IHt9O1xuY29uc3Qgc3RhZ2VGYWN0b3J5ID0gU3RhZ2VGYWN0b3J5KHtcbiAgICBlZGl0b3IgKCkge30sXG4gICAgb3V0cHV0ICgpIHt9LFxufSwgc2NlbmVDb250ZXh0KTtcbiovXG5cbmV4cG9ydCBjbGFzcyBTdGFnZUZhY3Rvcnkge1xuICAgIGNvbnN0cnVjdG9yKHByb3BlcnRpZXMsIGF0dHJzKSB7XG4gICAgICAgIHRoaXMuY3VycmVudCA9ICdkZWZhdWx0JztcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zY2VuZXMgPSB7XG4gICAgICAgICAgICAvLyBkZWZhdWx0OiB7Y2FsbGJhY2soKSB7Y29uc29sZS5sb2coJ1tEZWZhdWx0IFNjZW5lXScpfSwgYXR0cnM6IFtdfVxuICAgICAgICB9O1xuICAgICAgICBpZiAocHJvcGVydGllcyAmJiBwcm9wZXJ0aWVzLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUoa2V5LCBwcm9wZXJ0aWVzW2tleV0sIEFycmF5LmlzQXJyYXkoYXR0cnMpID8gYXR0cnMgOiBbYXR0cnNdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgc2NlbmUobmFtZSwgY2FsbGJhY2ssIGF0dHJzKXtcbiAgICAgICAgdGhpcy5zY2VuZXNbbmFtZV0gPSB7XG4gICAgICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgICAgIGF0dHJzXG4gICAgICAgIH07fVxuICAgIGdldFNjZW5lKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVzW25hbWVdO31cbiAgICBnZXRDdXJyZW50U2NlbmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjZW5lc1t0aGlzLmN1cnJlbnRdO31cbiAgICBnZXRDdXJyZW50U2NlbmVOYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50O31cbiAgICBuZXh0KCkge1xuICAgICAgICAvLyBpZiAobmFtZSkge3RoaXMuY3VycmVudCA9IG5hbWU7fVxuICAgICAgICBsZXQgbGVzdCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5zY2VuZXMpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChrZXlzW2ldID09PSB0aGlzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGtleXNbaSArIDFdICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICAgICAgICAgICAgICBsZXN0ID0ga2V5c1tpICsgMV07XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IGtleXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBsZXN0ID0ga2V5c1swXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5leGVjdXRlKGxlc3QpO1xuICAgIH1cbiAgICBleGVjdXRlKG5hbWUsIGF0dHJzKSB7XG4gICAgICAgIHRoaXMuY3VycmVudCA9ICFuYW1lICYmIHRoaXMuY3VycmVudCA9PT0gJ2RlZmF1bHQnXG4gICAgICAgICAgICA/IE9iamVjdC5rZXlzKHRoaXMuc2NlbmVzKVswXVxuICAgICAgICAgICAgOiBuYW1lO1xuICAgICAgICBjb25zdCBzY2VuZSA9IHRoaXMuZ2V0Q3VycmVudFNjZW5lKCk7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gc2NlbmUuY2FsbGJhY2s7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBpZiAoYXR0cnMpIHtcbiAgICAgICAgICAgICAgICBhdHRycyA9IEFycmF5LmlzQXJyYXkoYXR0cnMpID8gYXR0cnMgOiBbYXR0cnNdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdG9kbzogY2hhbmdlZCBhcHBseSB0byBjYWxsXG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBhdHRycyA/IGF0dHJzIDogc2NlbmUuYXR0cnMpO1xuICAgICAgICAgICAgLy8gY2FsbGJhY2suYXBwbHkoY2FsbGJhY2ssIGF0dHJzID8gYXR0cnMgOiBzY2VuZS5hdHRycyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xvbmUoKSB7XG4gICAgICAgIHJldHVybiBjbG9uZSh0aGlzKTtcbiAgICB9XG59XG5cbi8qKlxuICogU3RhZ2Uuc2NlbmUobmFtZSwgY2FsbGJhY2ssIGF0dHJzKSAgIC8vIGFkZCBuZXcgc2NlbmVcbiAqXG4gKiBTdGFnZS5nZXRTY2VuZShuYW1lKSAgICAgICAgICAgICAgICAgLy8gcmV0dXJuZWQgc2NlbmUgYnkgbmFtZVxuICpcbiAqIFN0YWdlLmdldEN1cnJlbnRTY2VuZSgpICAgICAgICAgICAgICAvLyByZXR1cm5lZCBjdXJyZW50IHNjZW5lXG4gKlxuICogU3RhZ2UubmV4dCgpICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIG5leHQgc2NlbmVcbiAqXG4gKiBTdGFnZS5leGVjdXRlKG5hbWUsIGF0dHJzKSAgICAgICAgICAgLy8gcnVuIHNjZW5lcyBieSBuYW1lLCBzZXQgdGhpcyBrZXkgbmFtZSB0byBkZWZhdWx0XG4gKlxuICogU3RhZ2UuY2xvbmUoKSAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNsb25lZCBjdXJyZW50IHNjZW5lc1xuICpcbiAqL1xuY29uc3QgU3RhZ2UgPSBuZXcgU3RhZ2VGYWN0b3J5KHt9LHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhZ2U7XG4iLCJpbXBvcnQgY2xvbmUgZnJvbSBcIi4uL3N0YXRpYy9jbG9uZVwiO1xuXG4vKipcbiAqXG4gICAgY29uc3Qgc3RlcHNBdHRhY2tIZXJvID0gU3RlcHNTY2VuZSh7XG4gICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICBzdGVwczogW1xuICAgICAgICAgICAge25hbWU6ICdzdGFydF9hdHRhY2snLCBjYWxsYmFjazogZnVuY30sXG4gICAgICAgICAgICB7bmFtZTogJ2hlcm9fYXR0YWNrJywgY2FsbGJhY2s6IGZ1bmN9LFxuICAgICAgICAgICAge25hbWU6ICdoZXJvX2F0dGFja19hbmltYXRpb24nLCBjYWxsYmFjazogZnVuY30sXG4gICAgICAgICAgICB7bmFtZTogJ2VuZF9hdHRhY2snLCBjYWxsYmFjazogZnVuY30sXG4gICAgICAgIF1cbiAgICB9KTtcblxuICAgIHN0ZXBzQXR0YWNrSGVyby5lYWNoU3RlcHMoZnVuY3Rpb24gKGNiT2JqZWN0LCBpbmRleCkge30pO1xuICAgIHN0ZXBzQXR0YWNrSGVyby5uZXh0KCk7XG5cbiAgICBzdGVwc0F0dGFja0hlcm8uZ290bygnaGVyb19hdHRhY2tfYW5pbWF0aW9uJykubmV4dCgpO1xuICAgIHN0ZXBzQXR0YWNrSGVyby5zdG9wKCk7XG4gKlxuICogQGRlcHJlY2F0ZWRcbiAqIEBwYXJhbSBjb25maWdcbiAqIEByZXR1cm5zIHthbnl9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgU3RlcHNTY2VuZSA9IGZ1bmN0aW9uIChjb25maWcgPSB7c3RlcHM6IFtdfSkge1xuICAgIGNvbnN0IHJvb3QgPSB7XG4gICAgICAgIGl0ZXJhdGlvbjogMCxcbiAgICAgICAgbG9vcDogY29uZmlnLmxvb3AgfHwgZmFsc2UsXG4gICAgICAgIHN0ZXBfaXRlcmF0aW9uOiAwLFxuICAgICAgICBzdGVwX3N0b3A6IGZhbHNlLFxuICAgICAgICBzdGVwX2NhbGxiYWNrX2VhY2g6IG51bGwsXG4gICAgICAgIHN0ZXBfY2FsbGJhY2tzOiBjb25maWcuc3RlcHMgfHwge30sXG4gICAgICAgIHN0YXJ0KCkge1xuICAgICAgICAgICAgcm9vdC5wbGF5KCk7XG4gICAgICAgICAgICByb290LnN0ZXBfaXRlcmF0aW9uID0gMDtcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9LFxuICAgICAgICBzdG9wKCkge1xuICAgICAgICAgICAgcm9vdC5zdGVwX3N0b3AgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH0sXG4gICAgICAgIHBsYXkoKSB7XG4gICAgICAgICAgICByb290LnN0ZXBfc3RvcCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH0sXG4gICAgICAgIGVuZCgpIHtcbiAgICAgICAgICAgIHJvb3Quc3RlcF9pdGVyYXRpb24gPSByb290LnN0ZXBfY2FsbGJhY2tzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICAgICAgZGVsYXkobXMsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgY2FsbGJhY2suY2FsbChyb290KTsgfSwgbXMpO1xuICAgICAgICB9LFxuICAgICAgICBnb3RvKG5hbWUpIHtcbiAgICAgICAgICAgIHJvb3Quc3RlcF9jYWxsYmFja3MuZm9yRWFjaCgob2JqZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChvYmplY3QubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICByb290LnN0ZXBfaXRlcmF0aW9uID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICAgICAgZWFjaFN0ZXBzKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByb290LnN0ZXBfY2FsbGJhY2tfZWFjaCA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH0sXG4gICAgICAgIG5leHQoKSB7XG4gICAgICAgICAgICBpZiAocm9vdC5zdGVwX3N0b3ApIHJldHVybiByb290O1xuXG4gICAgICAgICAgICBpZiAocm9vdC5zdGVwX2l0ZXJhdGlvbiA+IHJvb3Quc3RlcF9jYWxsYmFja3MubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHJvb3Quc3RlcF9pdGVyYXRpb24gPSAwO1xuICAgICAgICAgICAgICAgIGlmICghcm9vdC5sb29wKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgY3VycmVudENhbGxiYWNrT2JqZWN0ID0gcm9vdC5zdGVwX2NhbGxiYWNrc1tyb290LnN0ZXBfaXRlcmF0aW9uXTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiByb290LnN0ZXBfY2FsbGJhY2tfZWFjaCA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgICAgICByb290LnN0ZXBfY2FsbGJhY2tfZWFjaC5jYWxsKHJvb3QsIGN1cnJlbnRDYWxsYmFja09iamVjdCwgcm9vdC5zdGVwX2l0ZXJhdGlvbiwgcm9vdC5pdGVyYXRpb24pO1xuXG4gICAgICAgICAgICBjdXJyZW50Q2FsbGJhY2tPYmplY3QuY2FsbGJhY2suY2FsbChyb290LCBjdXJyZW50Q2FsbGJhY2tPYmplY3QsIHJvb3Quc3RlcF9pdGVyYXRpb24sIHJvb3QuaXRlcmF0aW9uKTtcblxuICAgICAgICAgICAgcm9vdC5pdGVyYXRpb24rK1xuICAgICAgICAgICAgcm9vdC5zdGVwX2l0ZXJhdGlvbisrXG5cbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9LFxuICAgIH1cblxuICAgIHJvb3QuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjbG9uZSh0aGlzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHJvb3Q7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGVwc1NjZW5lO1xuIiwiXG5jb25zdCBUaW1lciA9IGZ1bmN0aW9uIChjYWxsYmFjaywgZGVsYXksIHJlcGVhdCwgdGhpc0luc3RhbmNlKSB7XG4gICAgdGhpcy5yZXBlYXQgPSByZXBlYXQ7XG4gICAgdGhpcy5pdGVyYXRvciA9IDA7XG59O1xuXG5cblRpbWVyLnNldFRpbWVvdXQgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIG1zLCB0aGlzSW5zdCkge1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgJiYgIWlzTmFOKG1zKSAmJiBtcyA+IDApIHtcbiAgICAgICAgdGhpc0luc3QgPSB0eXBlb2YgdGhpc0luc3QgPT09ICdvYmplY3QnID8gdGhpc0luc3QgOiB7fTtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzSW5zdClcbiAgICAgICAgfSwgbXMpXG4gICAgfVxufTtcblRpbWVyLnNldEludGVydmFsID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBtcywgdGhpc0luc3QpIHtcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nICYmICFpc05hTihtcykgJiYgbXMgPiAwKSB7XG4gICAgICAgIHRoaXNJbnN0ID0gdHlwZW9mIHRoaXNJbnN0ID09PSAnb2JqZWN0JyA/IHRoaXNJbnN0IDoge307XG4gICAgICAgIHJldHVybiBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNJbnN0KVxuICAgICAgICB9LCBtcylcbiAgICB9XG59O1xuVGltZXIuY2xlYXJUaW1lb3V0ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgY2xlYXJUaW1lb3V0KGlkKVxufTtcblRpbWVyLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICBjbGVhckludGVydmFsKGlkKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGltZXI7IiwiaW1wb3J0IHN0eWxpemVyIGZyb20gXCIuLi9zdGF0aWMvc3R5bGl6ZXJcIjtcbmltcG9ydCBpc051bWJlciBmcm9tIFwiLi4vc3RhdGljL2lzTnVtYmVyXCI7XG4vKlxuXG50cmFuc2Zvcm0gPSBUcmFuc2Zvcm0odGhpcy5lbGVtZW50KTtcbnRyYW5zZm9ybS5tZXRob2QoJ3JvdGF0ZScsIFsnNDVkZWcnXSk7XG50cmFuc2Zvcm0udXBkYXRlKCk7XG50cmFuc2Zvcm0ucmVzZWFyY2goKTtcbnRyYW5zZm9ybS5mdW5jdGlvblBhcmFtZXRlcnMoJ21hdHJpeCcpICAgICAgICAgLy8gWzEsIDAsIDAsIDEsIDAsIDBdOiBhcnJheVxudHJhbnNmb3JtLmZ1bmN0aW9uUGFyYW1ldGVycygncm90YXRlJykgICAgICAgICAvLyBbXCI0NWRlZ1wiXTogc3RyaW5nXG50cmFuc2Zvcm0uZnVuY3Rpb25QYXJhbWV0ZXJzKCdyb3RhdGUnLCB0cnVlKSAgIC8vIDQ1OiBpbnRcblxuLy8gLi4uXG5UcmFuc2Zvcm0uZWxlbWVudCh0aGlzLmVsZW1lbnQsIFtcbiAgICAncm90YXRlKCcgKyAxMCArJ2RlZyknLFxuICAgICdzY2FsZSgwLjYsIDAuNiknLFxuICAgICdtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMCknLFxuXSk7XG5UcmFuc2Zvcm0uZWxlbWVudCh0aGlzLmVsZW1lbnQsIFsncm90YXRlKCcgKyAxMCArJ2RlZyknXSlcbmNvbnN0IHRycyA9IFRyYW5zZm9ybSh0aGlzLmVsZW1lbnQpO1xuXG4vLyB3aXRob3V0IG9mIHRoZSBUcmFuc2Zvcm1cbnRoaXMuc3R5bGUoe1xuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgnICsgMTAgKydkZWcpIHNjYWxlKDAuNiwgMC42KSBtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMCknXG59KTtcblxuKi9cbmNvbnN0IFRyYW5zZm9ybSA9IGZ1bmN0aW9uIChlbGVtZW50LCBwYXJhbXMpXG57XG4gICAgY29uc3Qgcm9vdCA9IHtcbiAgICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgICAgdHJhbnNmb3JtX29iajoge30sXG4gICAgICAgIHRyYW5zZm9ybV9hcnI6IGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtLnNwbGl0KCcpJykuZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUubGVuZ3RoICksXG4gICAgICAgIHRyYW5zZm9ybV9zdHJpbmc6ICcnLFxuXG4gICAgICAgIHVwZGF0ZSgpe1xuICAgICAgICAgICAgcm9vdC50cmFuc2Zvcm1fc3RyaW5nID0gJyc7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHJvb3QudHJhbnNmb3JtX29iaikuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcm9vdC50cmFuc2Zvcm1fc3RyaW5nICs9IGtleSArICcoJyArIHJvb3QudHJhbnNmb3JtX29ialtrZXldLmpvaW4oJywgJykgKyAnKSAnO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJvb3QuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAgcm9vdC50cmFuc2Zvcm1fc3RyaW5nO1xuICAgICAgICAgICAgcm9vdC5yZXNlYXJjaCgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZChtZXRob2QsIHByb3BlcnRpZXMsIG11bHRpcGx5ID0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbWV0aG9kID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHByb3BlcnRpZXMgPSBBcnJheS5pc0FycmF5KHByb3BlcnRpZXMpID8gcHJvcGVydGllcyA6IFtwcm9wZXJ0aWVzXTtcblxuICAgICAgICAgICAgICAgIGlmIChtdWx0aXBseSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocm9vdC50cmFuc2Zvcm1fb2JqW21ldGhvZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXMuZm9yRWFjaCgodmFsdWUsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4dCA9IHZhbHVlLm1hdGNoKC9bYS16XSsvZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG51bSA9IHBhcnNlSW50KHZhbHVlKSArIHBhcnNlSW50KHJvb3QudHJhbnNmb3JtX29ialttZXRob2RdW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllc1tpXSA9IG51bSArIGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzW2ldID0gdmFsdWUgKyByb290LnRyYW5zZm9ybV9vYmpbbWV0aG9kXVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vdC50cmFuc2Zvcm1fb2JqW21ldGhvZF0gPSBwcm9wZXJ0aWVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb290LnRyYW5zZm9ybV9vYmpbbWV0aG9kXSA9IHByb3BlcnRpZXM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb290LnRyYW5zZm9ybV9vYmpbbWV0aG9kXSA9IHByb3BlcnRpZXM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU2V0cyBwYXJhbWV0ZXJzIGlzIG5vdCBhdmFpbGFibGUnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHJlc2VhcmNoKCl7XG4gICAgICAgICAgICByb290LnRyYW5zZm9ybV9hcnIgPSBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybS5zcGxpdCgnKScpXG4gICAgICAgICAgICAgICAgLmZpbHRlcigodmFsdWUpID0+IHZhbHVlLmxlbmd0aCApO1xuXG4gICAgICAgICAgICByb290LnRyYW5zZm9ybV9hcnIuZm9yRWFjaCgodmFsdWUsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJhbSA9IHJvb3QudHJhbnNmb3JtX2FycltpXSA9IHJvb3QudHJhbnNmb3JtX2FycltpXS50cmltKCkgICsgJyknO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoZWQgPSBwYXJhbS5tYXRjaCgvW1xcd1xcLlxcLV0rL2lnKTtcbiAgICAgICAgICAgICAgICByb290LnRyYW5zZm9ybV9vYmpbbWF0Y2hlZFswXV0gPSBtYXRjaGVkLnNsaWNlKDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZnVuY3Rpb25QYXJhbWV0ZXJzKG5hbWUsIEZJUlNUX0lURU1fVE9fSU5URUdFUiA9IGZhbHNlKXtcbiAgICAgICAgICAgIGlmIChGSVJTVF9JVEVNX1RPX0lOVEVHRVJcbiAgICAgICAgICAgICAgICAmJiBBcnJheS5pc0FycmF5KHJvb3QudHJhbnNmb3JtX29ialtuYW1lXSlcbiAgICAgICAgICAgICAgICAmJiByb290LnRyYW5zZm9ybV9vYmpbbmFtZV0ubGVuZ3RoID09PSAxKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSByb290LnRyYW5zZm9ybV9vYmpbbmFtZV1bMF07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzTnVtYmVyKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgID8gcGFyc2VJbnQoaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgOiByb290LnRyYW5zZm9ybV9vYmpbbmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcm9vdC50cmFuc2Zvcm1fb2JqW25hbWVdO1xuICAgICAgICB9LFxuICAgIH07XG5cbiAgICByb290LnJlc2VhcmNoKCk7XG5cbiAgICBpZiAocGFyYW1zICYmIHR5cGVvZiBwYXJhbXMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICByb290Lm1ldGhvZChrZXksIHBhcmFtc1trZXldKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJvb3QudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJvb3Q7XG59XG5cblRyYW5zZm9ybS5lbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHZhbHVlcyl7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWVzKSkge1xuICAgICAgICBjb25zdCBwcm9wcyA9IFtdO1xuICAgICAgICB2YWx1ZXMuZm9yRWFjaCgocHJvcCkgPT4geyBwcm9wcy5wdXNoKHByb3ApIH0pO1xuICAgICAgICBzdHlsaXplcihlbGVtZW50LCB7dHJhbnNmb3JtOiBwcm9wcy5qb2luKCcgJyl9KTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2Zvcm07XG4iLCJpbXBvcnQgaXNFbXB0eSBmcm9tIFwiLi4vc3RhdGljL2lzRW1wdHlcIjtcblxuY29uc3QgaXNPYmplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAhaXNFbXB0eSh2YWx1ZSkgJiZcbiAgICAgICAgIUFycmF5LmlzQXJyYXkodmFsdWUpICYmXG4gICAgICAgICEodmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApICYmXG4gICAgICAgICEodmFsdWUgaW5zdGFuY2VvZiBTdHJpbmcpICYmXG4gICAgICAgICEodmFsdWUgaW5zdGFuY2VvZiBOdW1iZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc09iamVjdDtcbiIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vc3RhdGljL2dldFdpbmRvd1wiO1xuXG5pbXBvcnQgQ2xpcCBmcm9tIFwiLi9jb21wb25lbnRzL0NsaXAuanNcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9Db21wb25lbnQuanNcIjtcbmltcG9ydCBLZXlib2FyZEV2ZW50TWFuYWdlciBmcm9tIFwiLi9jb21wb25lbnRzL0tleWJvYXJkRXZlbnRNYW5hZ2VyLmpzXCI7XG5pbXBvcnQge0V2ZW50Q29kZXMsIEV2ZW50S2V5cywgRXZlbnRDb2Rlc05hbWVzLCBFdmVudEtleXNOYW1lc30gZnJvbSBcIi4vY29tcG9uZW50cy9LZXlib2FyZEV2ZW50TWFuYWdlci5qc1wiO1xuaW1wb3J0IE1vdmVDbGlwIGZyb20gXCIuL2NvbXBvbmVudHMvTW92ZUNsaXAuanNcIjtcbmltcG9ydCBTY2VuZSBmcm9tIFwiLi9jb21wb25lbnRzL1NjZW5lLmpzXCI7XG5pbXBvcnQgU3RlcHNTY2VuZSBmcm9tIFwiLi9jb21wb25lbnRzL1N0ZXBzU2NlbmUuanNcIjtcbmltcG9ydCBUaW1lciBmcm9tIFwiLi9jb21wb25lbnRzL1RpbWVyLmpzXCI7XG5pbXBvcnQgUm94eUxpc3RlbmVyIGZyb20gXCIuL2NvbXBvbmVudHMvUm94eUxpc3RlbmVyLmpzXCI7XG5pbXBvcnQgUm94eSBmcm9tIFwiLi9jb21wb25lbnRzL1JveHkuanNcIjtcbmltcG9ydCBTdGF0aWMgZnJvbSAnLi9zdGF0aWMnO1xuaW1wb3J0IEFuaW1hdGlvbkZyYW1lIGZyb20gXCIuL2NvbXBvbmVudHMvQW5pbWF0aW9uRnJhbWVcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9Mb2FkZXJcIjtcbmltcG9ydCBNYXRyaXggZnJvbSBcIi4vY29tcG9uZW50cy9NYXRyaXhcIjtcbmltcG9ydCBQb2ludCBmcm9tIFwiLi9jb21wb25lbnRzL1BvaW50XCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuL2NvbXBvbmVudHMvUmVjdGFuZ2xlXCI7XG5pbXBvcnQgVHJhbnNmb3JtIGZyb20gXCIuL2NvbXBvbmVudHMvVHJhbnNmb3JtXCI7XG5pbXBvcnQgRXZlbnRNYW5hZ2VyIGZyb20gXCIuL2NvbXBvbmVudHMvRXZlbnRNYW5hZ2VyXCI7XG5pbXBvcnQgRnJhbWVzIGZyb20gXCIuL2NvbXBvbmVudHMvRnJhbWVzXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCIuL2NvbXBvbmVudHMvUm91dGVyXCI7XG5pbXBvcnQgUGFpbnQgZnJvbSBcIi4vY29tcG9uZW50cy9QYWludFwiO1xuaW1wb3J0IENvbG9yIGZyb20gXCIuL2NvbXBvbmVudHMvQ29sb3JcIjtcbmltcG9ydCBQYWludFRyYW5zZm9ybSBmcm9tIFwiLi9jb21wb25lbnRzL1BhaW50VHJhbnNmb3JtXCI7XG5pbXBvcnQgRW50ZXJGcmFtZSBmcm9tIFwiLi9jb21wb25lbnRzL0VudGVyRnJhbWVcIjtcbmltcG9ydCBQbGFudCBmcm9tIFwiLi9jb21wb25lbnRzL1BsYW50XCI7XG5pbXBvcnQgR3JhcGhpYyBmcm9tIFwiLi9jb21wb25lbnRzL0dyYXBoaWNcIjtcblxuY29uc3QgQW5pbWF0ZSA9IHtcbiAgICBDbGlwLFxuICAgIENvbXBvbmVudCxcbiAgICBLZXlib2FyZEV2ZW50TWFuYWdlcixcbiAgICBFdmVudENvZGVzLFxuICAgIEV2ZW50S2V5cyxcbiAgICBFdmVudENvZGVzTmFtZXMsXG4gICAgRXZlbnRLZXlzTmFtZXMsXG4gICAgTW92ZUNsaXAsXG4gICAgU2NlbmUsXG4gICAgU3RlcHNTY2VuZSxcbiAgICBUaW1lcixcbiAgICBSb3h5TGlzdGVuZXIsXG4gICAgUm94eSxcbiAgICBBbmltYXRpb25GcmFtZSxcbiAgICBMb2FkZXIsXG4gICAgTWF0cml4LFxuICAgIFBvaW50LFxuICAgIFJlY3RhbmdsZSxcbiAgICBUcmFuc2Zvcm0sXG4gICAgRXZlbnRNYW5hZ2VyLFxuICAgIEZyYW1lcyxcbiAgICBSb3V0ZXIsXG4gICAgUGFpbnQsXG4gICAgQ29sb3IsXG4gICAgUGFpbnRUcmFuc2Zvcm0sXG4gICAgRW50ZXJGcmFtZSxcbiAgICBQbGFudCxcbiAgICBHcmFwaGljLFxufTtcblxuY29uc3QgUkFESUFOID0gMC4wMTc0NTMyOTI1MTk5NDMyOTU7XG5jb25zdCBERUdSRUVfQVNfUkFESUFOID0gMC4wMTc0NTMyOTI1MTk5NDMyOTU7XG5jb25zdCBERUdSRUVfMzYwX0FTX1JBRElBTiA9IERFR1JFRV9BU19SQURJQU4gKiAzNjA7XG5jb25zdCBQSSA9IDMuMTQxNTkyNjUzNTk7XG5jb25zdCBSQURfVE9fREVHUkVFUyA9IDMuMTQxNTkyNjUzNTk7XG5cbkFuaW1hdGUuUkFESUFOID0gUkFESUFOO1xuQW5pbWF0ZS5ERUdSRUVfQVNfUkFESUFOID0gREVHUkVFX0FTX1JBRElBTjtcbkFuaW1hdGUuREVHUkVFXzM2MF9BU19SQURJQU4gPSBERUdSRUVfMzYwX0FTX1JBRElBTjtcbkFuaW1hdGUuUEkgPSBQSTtcbkFuaW1hdGUuUkFEX1RPX0RFR1JFRVMgPSBSQURfVE9fREVHUkVFUztcblxuQW5pbWF0ZS5TdGF0aWMgPVxuICAgIEFuaW1hdGUuVXRpbCA9XG4gICAgICAgIFN0YXRpYztcblxuaWYgKGdldFdpbmRvdygpKSBnZXRXaW5kb3coKVsnQW5pbWF0ZSddID0gQW5pbWF0ZTtcblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0ZTtcbiIsIlxuZXhwb3J0IGNvbnN0IExFVFRFUl9DT05TT05BTlQgPSAnQixDLEQsRixHLEgsSixLLEwsTSxOLFAsUSxSLFMsVCxWLFcsWCxZLFonO1xuZXhwb3J0IGNvbnN0IExFVFRFUl9WT1dFTCA9ICdBLEUsSSxPLFUsWSc7XG5leHBvcnQgY29uc3QgQUJDID0gJ0EsQixDLEQsRSxGLEcsSCxJLEosSyxMLE0sTixPLFAsUSxSLFMsVCxVLFYsVyxYLFksWic7XG5leHBvcnQgY29uc3QgTlVNQkVSUyA9ICcwLDEsMiwzLDQsNSw2LDcsOCw5JztcbmV4cG9ydCBjb25zdCBBTVBFUlNBTkQgPSAnJic7XG5cbmNvbnN0IGFiYyA9IHtcbiAgICBMRVRURVJfQ09OU09OQU5ULFxuICAgIExFVFRFUl9WT1dFTCxcbiAgICBBQkMsXG4gICAgTlVNQkVSUyxcbiAgICBBTVBFUlNBTkRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFiYzsiLCJcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCBoYXNMb3dlckNhc2UgZnJvbSBcIi4vaGFzTG93ZXJDYXNlXCI7XG5pbXBvcnQgdG9NaW51c0Nhc2UgZnJvbSBcIi4vdG9NaW51c0Nhc2VcIjtcblxuLyoqXG4gKiBhZGRDc3MoeyAnI2NhbnZhcyc6IHsgYmFja2dyb3VuZENvbG9yOiAnIzE3MTcxNycsYm9yZGVyOiAnM3B4IHNvbGlkICNEREREREQnIH0gfSk7XG4gKlxuICogQHBhcmFtIG9iamVjdFxuICogQHJldHVybnMgeyp9XG4gKi9cbmNvbnN0IGFkZENzcyA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICBsZXQgY3NzU3RyaW5nID0gJyc7XG4gICAgT2JqZWN0LmtleXMob2JqZWN0KS5mb3JFYWNoKChzZWxlY3Rvcik9PntcbiAgICAgICAgY3NzU3RyaW5nICs9IGAke3NlbGVjdG9yfSB7XFxuYDtcbiAgICAgICAgT2JqZWN0LmtleXMob2JqZWN0W3NlbGVjdG9yXSkuZm9yRWFjaCgocHJvcCk9PntcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBoYXNMb3dlckNhc2UocHJvcCkgPyB0b01pbnVzQ2FzZShwcm9wKSA6IHByb3A7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG9iamVjdFtzZWxlY3Rvcl1bcHJvcF07XG4gICAgICAgICAgICBjc3NTdHJpbmcgKz0gYFxcdCR7bmFtZX06ICR7dmFsdWV9O1xcbmA7XG4gICAgICAgIH0pO1xuICAgICAgICBjc3NTdHJpbmcgKz0gYH1cXG5gO1xuXG4gICAgfSk7XG4gICAgY29uc3QgY3NzID0gY3JlYXRlRWxlbWVudCgnc3R5bGUnLCB7fSwgY3NzU3RyaW5nKTtcbiAgICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQuaGVhZCkge1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGNzcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzcztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFkZENzcztcbiIsImltcG9ydCBxdWVyeSBmcm9tICcuL3F1ZXJ5JztcbmltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5cblxuY29uc3QgYXR0ciA9IGZ1bmN0aW9uIChlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICAgIGNvbnN0IHR5cGVfZWxlbWVudCA9IHR5cGVPZihlbGVtZW50KTtcbiAgICBpZiAodHlwZV9lbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICBlbGVtZW50ID0gcXVlcnkoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgaWYgKGlzTm9kZShlbGVtZW50KSAmJiBhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGlmICh0eXBlT2YobmFtZSwgJ29iamVjdCcpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gbmFtZSlcbiAgICAgICAgICAgICAgICBhdHRyKGVsZW1lbnQsIGtleSwgbmFtZVtrZXldKTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzTm9kZShlbGVtZW50KSAmJiBhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgICBlbHNlIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhdHRyO1xuIiwiLyoqXG4gKlxuICogQHBhcmFtIGZyb21cbiAqIEBwYXJhbSB0b1xuICogQHJldHVybnMgeyp9XG4gKi9cbmZ1bmN0aW9uIGNsb25lKGZyb20sIHRvKVxue1xuICAgIGlmIChmcm9tID09PSBudWxsIHx8IHR5cGVvZiBmcm9tICE9PSBcIm9iamVjdFwiKSByZXR1cm4gZnJvbTtcbiAgICBpZiAoZnJvbS5jb25zdHJ1Y3RvciAhPT0gT2JqZWN0ICYmIGZyb20uY29uc3RydWN0b3IgIT09IEFycmF5KSByZXR1cm4gZnJvbTtcbiAgICBpZiAoZnJvbS5jb25zdHJ1Y3RvciA9PT0gRGF0ZSB8fCBmcm9tLmNvbnN0cnVjdG9yID09PSBSZWdFeHAgfHwgZnJvbS5jb25zdHJ1Y3RvciA9PT0gRnVuY3Rpb24gfHxcbiAgICAgICAgZnJvbS5jb25zdHJ1Y3RvciA9PT0gU3RyaW5nIHx8IGZyb20uY29uc3RydWN0b3IgPT09IE51bWJlciB8fCBmcm9tLmNvbnN0cnVjdG9yID09PSBCb29sZWFuKSB7XG4gICAgICAgIHJldHVybiBuZXcgZnJvbS5jb25zdHJ1Y3Rvcihmcm9tKTtcbiAgICB9XG5cbiAgICB0byA9IHRvIHx8IG5ldyBmcm9tLmNvbnN0cnVjdG9yKCk7XG5cbiAgICBmb3IgKG5hbWUgaW4gZnJvbSlcbiAgICB7XG4gICAgICAgIHRvW25hbWVdID0gdHlwZW9mIHRvW25hbWVdID09IFwidW5kZWZpbmVkXCIgPyBjbG9uZShmcm9tW25hbWVdLCBudWxsKSA6IHRvW25hbWVdO1xuICAgIH1cblxuICAgIHJldHVybiB0bztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xvbmU7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcblxuY29uc3QgY29weSA9IGZ1bmN0aW9uIChzcmMsIGluc3RhbmNlKVxue1xuICAgIGlmIChpc05vZGUoc3JjKSlcbiAgICAgICAgcmV0dXJuIHNyYy5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShzcmMpKVxuICAgICAgICByZXR1cm4gc3JjLnNsaWNlKCk7XG5cbiAgICBpZiAodHlwZW9mIHNyYyA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgcmV0dXJuIHNyYy5iaW5kKGluc3RhbmNlIHx8IHt9KTtcblxuICAgIGlmICh0eXBlT2Yoc3JjLCAnb2JqZWN0JykpIHtcbiAgICAgICAgLy8gcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHNyYyk7XG4gICAgICAgIGxldCByZXN1bHQgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoc3JjKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHNyY1trZXldO1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBjb3B5KHZhbHVlLCB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIiA/IHNyYyA6IHt9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNyYztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvcHk7XG4iLCIvKlxuXG5jb25zdCBhcnIwID0gY3JlYXRlQXJyYXkoNSk7XG5jb25zdCBhcnIwID0gY3JlYXRlQXJyYXkoNSwgdHJ1ZSk7XG5jb25zdCBhcnIxID0gY3JlYXRlQXJyYXkoNSwgMSk7XG5jb25zdCBhcnIyID0gY3JlYXRlQXJyYXkoNSwgJ2hlbGxvIHdvcmxkJyk7XG5jb25zdCBhcnIzID0gY3JlYXRlQXJyYXkoNSwgWzEwMCwyMDAsMzAwXSk7XG5jb25zdCBhcnI0ID0gY3JlYXRlQXJyYXkoNSwge2E6J0EnLGI6J0InLGM6J0MnfSk7XG5cbiovXG5cbi8qKlxuICpcbiAqIEBwYXJhbSBudW1cbiAqIEBwYXJhbSBmaWxsXG4gKiBAcmV0dXJucyB7YW55W119XG4gKi9cbmNvbnN0IGNyZWF0ZUFycmF5ID0gZnVuY3Rpb24gKG51bSwgZmlsbCkge1xuICAgIGxldCBhcnIgPSBbXTtcblxuICAgIGlmICh0eXBlb2YgZmlsbCA9PT0gJ251bWJlcicgfHwgdHlwZW9mIGZpbGwgPT09ICdzdHJpbmcnICl7XG4gICAgICAgIHJldHVybiBuZXcgQXJyYXkobnVtKS5maWxsKGZpbGwpO1xuICAgIH1cblxuICAgIGFyciA9IG5ldyBBcnJheShudW0pLmZpbGwoMCk7XG4gICAgYXJyLmZvckVhY2goKHZhbHVlLCBpKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgZmlsbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY29uc3QgciA9IGZpbGwuY2FsbChmaWxsLCBpLCBpKTtcbiAgICAgICAgICAgIGFycltpXSA9IHR5cGVvZiByID09PSAnYm9vbGVhbicgfHwgciA/IHIgOiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShmaWxsKSkgYXJyW2ldID0gZmlsbFtpXSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogZmlsbFtpXSA7XG4gICAgICAgIGVsc2UgYXJyW2ldID0gZmlsbDtcbiAgICB9KTtcbiAgICByZXR1cm4gYXJyO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFycmF5O1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcblxuLyoqXG4gKlxuICogQHBhcmFtIHRhZ1xuICogQHBhcmFtIGF0dHJzXG4gKiBAcGFyYW0gaW5uZXJcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fE5vZGV9XG4gKi9cbmNvbnN0IGNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAodGFnLCBhdHRycywgaW5uZXIpIHtcbiAgICBjb25zdFxuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpLFxuICAgICAgICBpc19hdHRyID0gZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVPZihzcmMsICdvYmplY3QnKSAmJiAhaXNOb2RlKHNyYylcbiAgICAgICAgfSxcbiAgICAgICAgaW5zZXJ0X2h0bWwgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICBlbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgc3JjKTtcbiAgICAgICAgfSxcbiAgICAgICAgaW5zZXJ0X2NoaWxkID0gZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChzcmMpO1xuICAgICAgICB9LFxuICAgICAgICBpbnNlcnQgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdHlwZU9mKHNyYyk7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgICAgaW5zZXJ0X2h0bWwoc3JjKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnICYmIGlzTm9kZShzcmMpKVxuICAgICAgICAgICAgICAgIGluc2VydF9jaGlsZChzcmMpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gJ2FycmF5JylcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNyYy5sZW5ndGg7IGkrKykgaW5zZXJ0KHNyY1tpXSk7XG4gICAgICAgIH07XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMiAmJiAhaXNfYXR0cihhdHRycykpIHtcbiAgICAgICAgaW5uZXIgPSBhdHRycztcbiAgICAgICAgYXR0cnMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoYXR0cnMpXG4gICAgICAgIGZvciAobGV0IGsgaW4gYXR0cnMpXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrLCBhdHRyc1trXSk7XG5cbiAgICBpZiAoaW5uZXIpXG4gICAgICAgIGluc2VydChpbm5lcik7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVsZW1lbnQ7XG4iLCJpbXBvcnQgaXNOb2RlIGZyb20gXCIuL2lzTm9kZVwiO1xuaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcbmltcG9ydCBzdHIybm9kZSBmcm9tIFwiLi9zdHIybm9kZVwiO1xuXG5cbmNvbnN0IGNyZWF0ZUZyYWdtZW50ID0gZnVuY3Rpb24gKGFwcGVuZCkge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgaWYgKGlzTm9kZShhcHBlbmQpKVxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChhcHBlbmQpO1xuXG4gICAgaWYgKHR5cGVPZihhcHBlbmQsICdzdHJpbmcnKSlcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoc3RyMm5vZGUoYXBwZW5kKSk7XG5cbiAgICByZXR1cm4gZnJhZ21lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZyYWdtZW50O1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcblxuLyoqXG4gKlxuICogQHBhcmFtIHNlbGVjdG9yXG4gKiBAcGFyYW0gcHJvcGVydGllc1xuICogQHJldHVybnMge251bGx8dW5kZWZpbmVkfVxuICovXG5jb25zdCBjc3MgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIHByb3BlcnRpZXMpIHtcbiAgICBpZiAoIXNlbGVjdG9yIHx8ICFwcm9wZXJ0aWVzKSByZXR1cm47XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgY29uc3QgcHJvcCA9IHt9O1xuICAgICAgICBwcm9wW3Byb3BlcnRpZXNdID0gYXJndW1lbnRzWzJdO1xuICAgICAgICByZXR1cm4gY3NzKHNlbGVjdG9yLCBwcm9wKTtcbiAgICB9XG5cbiAgICBsZXQgaSwgaywgZWxlbWVudHMgPSBudWxsLFxuICAgICAgICB0eXBlU2VsZWN0b3IgPSB0eXBlT2Yoc2VsZWN0b3IpLFxuICAgICAgICB0eXBlUHJvcGVydGllcyA9IHR5cGVPZihwcm9wZXJ0aWVzKSxcbiAgICAgICAgcGFyc2UgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgICAgICBsZXQgaSwgcDEgPSBzdHIuc3BsaXQoJzsnKSwgcDIsIHBuLCBpeCwgbyA9IHt9O1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHAxLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcDIgPSBwMVtpXS5zcGxpdCgnOicpO1xuICAgICAgICAgICAgICAgIHBuID0gcDJbMF0udHJpbSgpO1xuICAgICAgICAgICAgICAgIGl4ID0gcG4uaW5kZXhPZignLScpO1xuICAgICAgICAgICAgICAgIGlmIChpeCAhPT0gLTEpXG4gICAgICAgICAgICAgICAgICAgIHBuID0gcG4uc3Vic3RyaW5nKDAsIGl4KSArIHBuW2l4ICsgMV0udG9VcHBlckNhc2UoKSArIHBuLnN1YnN0cmluZyhpeCArIDIpO1xuICAgICAgICAgICAgICAgIGlmIChwMi5sZW5ndGggPT09IDIpXG4gICAgICAgICAgICAgICAgICAgIG9bcG5dID0gcDJbMV0udHJpbSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgfTtcblxuXG4gICAgc3dpdGNoICh0eXBlU2VsZWN0b3IpIHtcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIGVsZW1lbnRzID0gcXVlcnlBbGwoc2VsZWN0b3IpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgIGlmIChpc05vZGUoc2VsZWN0b3IpKVxuICAgICAgICAgICAgICAgIGVsZW1lbnRzID0gW3NlbGVjdG9yXTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICAgIGVsZW1lbnRzID0gc2VsZWN0b3I7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudHMpIHtcblxuICAgICAgICBpZiAodHlwZVByb3BlcnRpZXMgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgcHJvcGVydGllcyA9IHBhcnNlKHByb3BlcnRpZXMpO1xuXG4gICAgICAgIGZvciAoaSBpbiBlbGVtZW50cylcbiAgICAgICAgICAgIGZvciAoayBpbiBwcm9wZXJ0aWVzKVxuICAgICAgICAgICAgICAgIGVsZW1lbnRzW2ldLnN0eWxlW2tdID0gcHJvcGVydGllc1trXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudHNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNzcztcbiIsIlxuY29uc3QgZGVjb2RlR2V0UXVlcnkgPSBmdW5jdGlvbiAocXVlcnkpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBjb25zdCBwYWlycyA9IChxdWVyeVswXSA9PT0gJz8nID8gcXVlcnkuc3Vic3RyKDEpIDogcXVlcnkpLnNwbGl0KCcmJyk7XG4gICAgcGFpcnMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICBsZXQgcGFpciA9IHBhaXJzW2ldLnNwbGl0KCc9Jyk7XG4gICAgICAgIHJlc3VsdFtkZWNvZGVVUklDb21wb25lbnQocGFpclswXSldID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMV0gfHwgJycpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWNvZGVHZXRRdWVyeTtcbiIsIlxuY29uc3QgZGVmaW5lZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lZDtcbiIsIlxuY29uc3QgZGVmaW5lZEluID0gZnVuY3Rpb24gKHN0YWNrLCB2YWx1ZSkge1xuICAgIHJldHVybiBzdGFjayAmJiBzdGFja1t2YWx1ZV0gIT09IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZWRJbjtcbiIsImltcG9ydCBnZXREb2N1bWVudCBmcm9tIFwiLi9nZXREb2N1bWVudFwiO1xuXG5cbmNvbnN0IGRvbUxvYWRlZCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIGNvbnN0IGRvYyA9IGdldERvY3VtZW50KCk7XG4gICAgaWYgKGRvYy5xdWVyeVNlbGVjdG9yKCdib2R5JykpXG4gICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcbiAgICBlbHNlXG4gICAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpXG4gICAgICAgIH0sIGZhbHNlKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUxvYWRlZDtcbiIsImltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHF1ZXJ5IGZyb20gJy4vcXVlcnknO1xuaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcblxuXG4vKmNvbnN0IGVhY2ggPSBmdW5jdGlvbiAobGlzdCwgY2FsbGJhY2ssIHRtcCkge1xuICAgIGlmIChsaXN0IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgbGlzdC5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBpdGVtLCBpLCB0bXApO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGlzTm9kZShsaXN0KSkge1xuICAgICAgICBlYWNoKFtdLnNsaWNlLmNhbGwobGlzdC5jaGlsZE5vZGVzKSwgY2FsbGJhY2ssIHRtcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmtleXMobGlzdCkuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgaXRlbSwgaSwgdG1wKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTsqL1xuXG5jb25zdCBlYWNoID0gZnVuY3Rpb24gKGxpc3QsIGNhbGxiYWNrLCBpbnN0YW5jZSA9IHt9KSB7XG4gICAgbGV0IHR5cGUgPSB0eXBlT2YobGlzdCk7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxpc3QuZm9yRWFjaCgoaSwgdiwgYSkgPT4gY2FsbGJhY2suY2FsbChpbnN0YW5jZSwgaSwgdiwgYSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICBpZiAoaXNOb2RlKGxpc3QpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxpc3QgaW5zdGFuY2VvZiBOb2RlTGlzdClcbiAgICAgICAgICAgICAgICAgICAgbGlzdCA9IGVhY2goQXJyYXkuZnJvbShsaXN0KSwgY2FsbGJhY2ssIGluc3RhbmNlKVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgbGlzdCA9IGVhY2goW2xpc3RdLCBjYWxsYmFjaywgaW5zdGFuY2UpXG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0KS5mb3JFYWNoKChrZXkpID0+IGNhbGxiYWNrLmNhbGwoaW5zdGFuY2UsIGtleSwgbGlzdFtrZXldLCBsaXN0KSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIGxpc3QgPSBlYWNoKGxpc3Quc3BsaXQoXCJcIiksIGNhbGxiYWNrLCBpbnN0YW5jZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgIGNvbnN0IGFyciA9IChuZXcgQXJyYXkobGlzdCkpLmZpbGwoMCk7XG4gICAgICAgICAgICBsaXN0ID0gZWFjaChhcnIsIGNhbGxiYWNrLCBpbnN0YW5jZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdDtcbn07XG5cbmVhY2gucGFyZW50ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBmaWx0ZXIsIGxvb3BzID0gMTApIHtcbiAgICBjb25zdCBnZXRQYXJlbnQgPSAoZWxlbSkgPT4gZWxlbSAmJiBlbGVtLnBhcmVudE5vZGUgPyBlbGVtLnBhcmVudE5vZGUgOiBmYWxzZTtcbiAgICBsZXQgZWxlbWVudCA9IGlzTm9kZShzZWxlY3RvcikgPyBzZWxlY3RvciA6IHF1ZXJ5KHNlbGVjdG9yKTtcbiAgICB3aGlsZSAobG9vcHMgPiAwICYmIGVsZW1lbnQpIHtcbiAgICAgICAgbG9vcHMtLTtcbiAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAmJiBlbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihmaWx0ZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBnZXRQYXJlbnQoZWxlbWVudCk7XG4gICAgfVxufTtcblxuZWFjaC5maWx0ZXIgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZpbHRlciwgY2FsbGJhY2ssIGxvb3BzID0gMTApIHtcbiAgICBjb25zdCBnZXRQYXJlbnQgPSAoZWxlbSkgPT4gZWxlbSAmJiBlbGVtLnBhcmVudE5vZGUgPyBlbGVtLnBhcmVudE5vZGUgOiBmYWxzZTtcbiAgICBsZXQgZWxlbWVudCA9IGlzTm9kZShzZWxlY3RvcikgPyBzZWxlY3RvciA6IHF1ZXJ5KHNlbGVjdG9yKTtcbiAgICB3aGlsZSAobG9vcHMgPiAwICYmIGVsZW1lbnQpIHtcbiAgICAgICAgbG9vcHMtLTtcbiAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAmJiBlbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihmaWx0ZXIpKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlbGVtZW50KTtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGdldFBhcmVudChlbGVtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlYWNoO1xuIiwiXG5jb25zdCBlbmNvZGVHZXRRdWVyeSA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgcmVzdWx0ICs9ICgocmVzdWx0Lmxlbmd0aCkgPyAnJicgOiAnPycpICsga2V5ICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trZXldKTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlbmNvZGVHZXRRdWVyeTtcbiIsIlxuY29uc3QgZXhpc3RzID0gZnVuY3Rpb24gKHNyYykge1xuICAgIHJldHVybiBzcmMgIT09IHVuZGVmaW5lZCAmJiBzcmMgIT09IG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBleGlzdHM7XG4iLCJcblxuZXhwb3J0IGNvbnN0IGV4dGVuZCA9IGZ1bmN0aW9uIChkZXN0aW5hdGlvbiwgc291cmNlKSB7XG4gICAgZm9yIChsZXQgcGFyYW0gaW4gc291cmNlKVxuICAgICAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KHBhcmFtKSlcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW3BhcmFtXSA9IHNvdXJjZVtwYXJhbV07XG5cbiAgICBmdW5jdGlvbiBfXygpIHtcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3RvciA9IGRlc3RpbmF0aW9uO1xuICAgIH1cblxuICAgIF9fLnByb3RvdHlwZSA9IHNvdXJjZS5wcm90b3R5cGU7XG4gICAgZGVzdGluYXRpb24ucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZXh0ZW5kUmVjdXJzaXZlID0gZnVuY3Rpb24gKGRlc3RpbmF0aW9uLCBzb3VyY2UpIHtcbiAgICBsZXQgcHJvcGVydHk7XG4gICAgZm9yIChwcm9wZXJ0eSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKHNvdXJjZVtwcm9wZXJ0eV0gJiYgc291cmNlW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciAmJiBzb3VyY2VbcHJvcGVydHldLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW3Byb3BlcnR5XSA9IGRlc3RpbmF0aW9uW3Byb3BlcnR5XSB8fCB7fTtcbiAgICAgICAgICAgIGV4dGVuZFJlY3Vyc2l2ZShkZXN0aW5hdGlvbltwcm9wZXJ0eV0sIHNvdXJjZVtwcm9wZXJ0eV0pO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW3Byb3BlcnR5XSA9IHNvdXJjZVtwcm9wZXJ0eV07XG4gICAgfVxuICAgIHJldHVybiBkZXN0aW5hdGlvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV4dGVuZDtcbiIsImltcG9ydCBmaW5kT2JqZWN0cyBmcm9tICcuL2ZpbmRPYmplY3RzJztcblxuXG5jb25zdCBmaW5kT2JqZWN0ID0gZnVuY3Rpb24gKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKSB7XG4gICAgY29uc3QgdG1wID0gZmluZE9iamVjdHModmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpO1xuICAgIHJldHVybiB0bXAubGVuZ3RoID8gdG1wWzBdIDogZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmaW5kT2JqZWN0O1xuIiwiXG5cbmNvbnN0IGZpbmRPYmplY3RzID0gZnVuY3Rpb24gKGxpc3QsIGF0dHIsIGF0dHJWYWx1ZSkge1xuICAgIGxldCBpLCB0bXAgPSBbXTtcbiAgICBpZiAobGlzdCAmJiB0eXBlb2YgbGlzdCA9PT0gXCJvYmplY3RcIilcbiAgICAgICAgbGlzdCA9IE9iamVjdC52YWx1ZXMobGlzdCk7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShsaXN0KSlcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICBpZiAobGlzdFtpXSAmJiBsaXN0W2ldW2F0dHJdICE9PSB1bmRlZmluZWQgJiYgbGlzdFtpXVthdHRyXSA9PT0gYXR0clZhbHVlKVxuICAgICAgICAgICAgICAgIHRtcC5wdXNoKGxpc3RbaV0pO1xuXG4gICAgcmV0dXJuIHRtcCA7XG59O1xuXG5leHBvcnQgY29uc3QgZmluZHMgPSBmdW5jdGlvbiAodmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpIHtcbiAgICBsZXQgdG1wID0gZmluZE9iamVjdHModmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpO1xuICAgIHJldHVybiB0bXAubGVuZ3RoID8gdG1wIDogZmFsc2U7XG59O1xuXG5leHBvcnQgY29uc3QgZmluZCA9IGZ1bmN0aW9uICh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSkge1xuICAgIGxldCB0bXAgPSBmaW5kT2JqZWN0cyh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSk7XG4gICAgcmV0dXJuIHRtcC5sZW5ndGggPyB0bXBbMF0gOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmRPYmplY3RzO1xuIiwiXG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuL2lzTm9kZVwiO1xuaW1wb3J0IGRlZmluZWQgZnJvbSBcIi4vZGVmaW5lZFwiO1xuaW1wb3J0IG5vZGUyc3RyIGZyb20gXCIuL25vZGUyc3RyXCI7XG5cblxuLyoqXG4gKiBGb3JtYXR0aW5nIG9mIHN0cmluZywgb3IgbWF5YmUgdGVtcGxhdGUgYnVpbGRlclxuICpcbiAqIEV4YW1wbGVzOlxuICogLmZvcm1hdChcIkhlbGxvIHswfSwgeW91ciBjb2RlIGlzIHsxfSFcIiwgWydKYWRlJywgJ1ByZWZlY3QnXSk7XG4gKiAuZm9ybWF0KFwiSGVsbG8ge25hbWV9LCB5b3VyIGNvZGUgaXMge21lYW59IVwiLCB7bmFtZTonSmFkZScsIG1lYW46ICdQcmVmZWN0J30pO1xuICpcbiAqIEBwYXJhbSBzdHJpbmcgICAgU3RyaW5nXG4gKiBAcGFyYW0gbGlzdCAgQXJyYXl8T2JqZWN0XG4gKiBAcmV0dXJucyBzdHJpbmdcbiAqL1xuY29uc3QgZm9ybWF0ID0gZnVuY3Rpb24gKHN0cmluZywgbGlzdCkge1xuICAgIGNvbnN0IG51bWJlclJlZ0V4cCA9IC97KFxcZCspfS9naTtcbiAgICBjb25zdCBzdHJpbmdSZWdFeHAgPSAveyhcXHcrKX0vZ2k7XG5cbiAgICBsZXQgcmVnO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGxpc3QpKVxuICAgICAgICByZWcgPSBuZXcgUmVnRXhwKG51bWJlclJlZ0V4cCk7XG4gICAgZWxzZSBpZiAobGlzdCAmJiB0eXBlb2YgbGlzdCA9PT0gJ29iamVjdCcpXG4gICAgICAgIHJlZyA9IG5ldyBSZWdFeHAoc3RyaW5nUmVnRXhwKTtcblxuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZShyZWcsIGZ1bmN0aW9uIChtYXRjaCwgbnVtYmVyKSB7XG4gICAgICAgIGlmIChkZWZpbmVkKGxpc3RbbnVtYmVyXSkgJiYgaXNOb2RlKGxpc3RbbnVtYmVyXSkpXG4gICAgICAgICAgICBsaXN0W251bWJlcl0gPSBub2RlMnN0cihsaXN0W251bWJlcl0pO1xuXG4gICAgICAgIHJldHVybiB0eXBlb2YgbGlzdFtudW1iZXJdICE9PSB1bmRlZmluZWQgPyBsaXN0W251bWJlcl0gOiBtYXRjaDtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdDtcbiIsIlxuY29uc3QgZ2V0RG9jdW1lbnQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmV0dXJuIGdsb2JhbCA/IGdsb2JhbCA6IHt9O1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RvY3VtZW50IG9iamVjdCBub3QgZXhpc3QhJyk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0RG9jdW1lbnQ7XG4iLCJcbmNvbnN0IGdldExvY2F0aW9uID0gZnVuY3Rpb24gKCkge1xuXG4gICAgaWYgKHR5cGVvZiBsb2NhdGlvbiAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICByZXR1cm4gbG9jYXRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdsb2NhdGlvbiBvYmplY3Qgbm90IGV4aXN0IScpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldExvY2F0aW9uO1xuIiwiXG5jb25zdCBnZXRXaW5kb3cgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdztcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyByZXR1cm4gZ2xvYmFsID8gZ2xvYmFsIDoge307XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignd2luZG93IG9iamVjdCBub3QgZXhpc3QhJyk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0V2luZG93O1xuIiwiXG5jb25zdCBoYXNMb3dlckNhc2UgPSBmdW5jdGlvbiAoY2hhcmFjdGVyKSB7XG4gICAgY29uc3QgbG93ZXJzID0gY2hhcmFjdGVyLnNwbGl0KCcnKS5maWx0ZXIoKGNoYXIpPT57XG4gICAgICAgIGxldCBjb2RlID0gY2hhci5jaGFyQ29kZUF0KDApO1xuICAgICAgICByZXR1cm4gY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxvd2Vycy5sZW5ndGggPiAwO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGFzTG93ZXJDYXNlO1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcblxuLyoqXG4gKiBCYXNlIEhUVFAgUmVxdWVzdFxuICpcbiAqIC5odHRwUmVxdWVzdCgge21ldGhvZDogJ0dFVCcsIGRhdGE6IHt9LCBoZWFkZXJzOiB7fSwgYWN0aW9uOiAnL2luZGV4J30sIGZ1bmN0aW9uKHN0YXR1cywgZGF0YSl7fSwgdGhpc0luc3RhbmNlICk7XG4gKlxuICogQHBhcmFtIGNvbmZpZ1xuICogICAgICBkYXRhOiAgICAgICAgICAgZGF0YSB0byBzZW5kLiBPYmplY3QsIEZvcm1EYXRhIChQT1NUIG9ubHkpLCBIVE1MRm9ybUVsZW1lbnQgKFBPU1Qgb25seSlcbiAqICAgICAgYWN0aW9uLCB1cmw6ICAgIHVybCBhZGRyZXNzIHRvXG4gKiAgICAgIG1ldGhvZDogICAgICAgICByZXF1ZXN0IG1ldGhvZCBHRVQgUE9TVCBvciBjdXN0b20gbWV0aG9kcywgZGVmYXVsdCAnR0VUJ1xuICogICAgICBoZWFkZXJzOiAgICAgICAgaGVhZGVycyBPYmplY3QsIGtleSA9IHZhbHVlXG4gKiAgICAgIHVzZUVuY29kZTogICAgICB1c2VkIHVybCBlbmNvZGluZywgZGVmYXVsdCBUUlVFLiBCb29sZWFuXG4gKiAgICAgIHVzZUZvcm1EYXRhOiAgICB1c2VkIEZvcm1EYXRhLCBkZWZhdWx0IEZBTFNFLiBCb29sZWFuXG4gKiAgICAgIGFzeW5jOiAgICAgICAgICBkZWZhdWx0IFRSVUUuIEJvb2xlYW5cbiAqICAgICAgdXNlcjpcbiAqICAgICAgcGFzc3dvcmQ6XG4gKlxuICogQHBhcmFtIGNhbGxiYWNrXG4gKiAgICAgIGV4ZWN1dGluZyBldmVudCAtIG9ubG9hZGVuZC4gZnVuY3Rpb24gKHN0YXR1cywgcmVzcG9uc2VUZXh0KVxuICpcbiAqIEBwYXJhbSB0aGlzSW5zdGFuY2VcbiAqICAgICAgb2JqZWN0ICd0aGlzJyBmb3IgY2FsbGJhY2tcbiAqXG4gKiBAcmV0dXJucyB7WE1MSHR0cFJlcXVlc3R9XG4gKi9cbmNvbnN0IGh0dHBSZXF1ZXN0ID0gZnVuY3Rpb24gKGNvbmZpZywgY2FsbGJhY2ssIHRoaXNJbnN0YW5jZSkge1xuICAgIGxldCBrZXk7XG4gICAgbGV0IHNlbmREYXRhID0ge307XG4gICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgZGF0YTogY29uZmlnLmRhdGEgfHwge30sXG4gICAgICAgIGFjdGlvbjogY29uZmlnLmFjdGlvbiB8fCBjb25maWcudXJsIHx8IGRvY3VtZW50LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgIG1ldGhvZDogY29uZmlnLm1ldGhvZCA/IGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSA6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiBjb25maWcuaGVhZGVycyB8fCB7fSxcbiAgICAgICAgdXNlRW5jb2RlOiBjb25maWcudXNlRW5jb2RlID09PSB1bmRlZmluZWQgPyB0cnVlIDogISFjb25maWcudXNlRW5jb2RlLFxuICAgICAgICB1c2VGb3JtRGF0YTogY29uZmlnLnVzZUZvcm1EYXRhID09PSB1bmRlZmluZWQgPyBmYWxzZSA6ICEhY29uZmlnLnVzZUZvcm1EYXRhLFxuICAgICAgICBhc3luYzogY29uZmlnLmFzeW5jID09PSB1bmRlZmluZWQgPyB0cnVlIDogISFjb25maWcuYXN5bmMsXG4gICAgICAgIHVzZXI6IGNvbmZpZy51c2VyIHx8IG51bGwsXG4gICAgICAgIHBhc3N3b3JkOiBjb25maWcudXNlciB8fCBudWxsLFxuICAgIH07XG5cbiAgICBjb25zdCBjb25jYXRlU3RyaW5nID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgICAgIGZvciAoa2V5IGluIHBhcmFtcykge1xuICAgICAgICAgICAgcmVzdWx0ICs9ICcmJyArIGtleSArICc9JyArIChvcHRpb25zLnVzZUVuY29kZSA/IGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba2V5XSkgOiBwYXJhbXNba2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgdGhpc0luc3RhbmNlID0gKHR5cGVPZih0aGlzSW5zdGFuY2UsICdvYmplY3QnKSkgPyB0aGlzSW5zdGFuY2UgOiB7fTtcblxuICAgIC8vIGRhdGEgcHJlcGFyZVxuICAgIGlmIChvcHRpb25zLm1ldGhvZCA9PT0gJ0dFVCcpIHtcblxuICAgICAgICAvLyBmb3JtIHRvIEZvcm1EYXRhXG4gICAgICAgIG9wdGlvbnMuYWN0aW9uICs9IG9wdGlvbnMuYWN0aW9uLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJztcbiAgICAgICAgb3B0aW9ucy5hY3Rpb24gKz0gY29uY2F0ZVN0cmluZyhvcHRpb25zLmRhdGEpO1xuICAgICAgICBzZW5kRGF0YSA9IHt9O1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgICAvLyByZXNldCB0byB1c2VGb3JtRGF0YSBpbiB0cnVlXG4gICAgICAgIGlmIChvcHRpb25zLmRhdGEgaW5zdGFuY2VvZiBGb3JtRGF0YSkge1xuICAgICAgICAgICAgb3B0aW9ucy5kYXRhID0ge307XG4gICAgICAgICAgICBvcHRpb25zLnVzZUZvcm1EYXRhID0gdHJ1ZTtcbiAgICAgICAgICAgIHNlbmREYXRhID0gb3B0aW9ucy5kYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9ybSB0byBGb3JtRGF0YVxuICAgICAgICBpZiAob3B0aW9ucy5kYXRhIGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50KSB7XG4gICAgICAgICAgICBzZW5kRGF0YSA9IG5ldyBGb3JtRGF0YShvcHRpb25zLmRhdGEpO1xuICAgICAgICAgICAgb3B0aW9ucy51c2VGb3JtRGF0YSA9IHRydWU7XG4gICAgICAgICAgICBvcHRpb25zLmRhdGEgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLnVzZUZvcm1EYXRhKSB7XG4gICAgICAgICAgICBpZiAoIShzZW5kRGF0YSBpbnN0YW5jZW9mIEZvcm1EYXRhKSkgc2VuZERhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucy5kYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBzZW5kRGF0YS5hcHBlbmQoa2V5LCBvcHRpb25zLnVzZUVuY29kZSA/IGVuY29kZVVSSUNvbXBvbmVudChvcHRpb25zLmRhdGFba2V5XSkgOiBvcHRpb25zLmRhdGFba2V5XSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VuZERhdGEgPSBjb25jYXRlU3RyaW5nKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vIGJ1aWxkIHJlcXVlc3RcbiAgICB4aHIub3BlbihvcHRpb25zLm1ldGhvZCwgb3B0aW9ucy5hY3Rpb24sIG9wdGlvbnMuYXN5bmMsIG9wdGlvbnMudXNlciwgb3B0aW9ucy5wYXNzd29yZCk7XG5cbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignWC1SZXF1ZXN0ZWQtV2l0aCcsICdYTUxIdHRwUmVxdWVzdCcpO1xuXG4gICAgaWYgKG9wdGlvbnMubWV0aG9kICE9PSAnR0VUJyAmJiAhb3B0aW9ucy51c2VGb3JtRGF0YSkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgIH1cblxuICAgIGZvciAoa2V5IGluIG9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIG9wdGlvbnMuaGVhZGVyc1trZXldKTtcbiAgICB9XG5cbiAgICB4aHIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzSW5zdGFuY2UuWE1MSHR0cFJlcXVlc3QgPSB4aHI7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0luc3RhbmNlLCB4aHIuc3RhdHVzLCB4aHIucmVzcG9uc2VUZXh0LCB4aHIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHhoci5zZW5kT3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgeGhyLnNlbmQoc2VuZERhdGEpO1xuICAgIHJldHVybiB4aHI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBodHRwUmVxdWVzdDtcbiIsImltcG9ydCBhYmMgZnJvbSBcIi4uL3N0YXRpYy9hYmNcIjtcbmltcG9ydCBhdHRyIGZyb20gXCIuLi9zdGF0aWMvYXR0clwiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4uL3N0YXRpYy9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQgY3JlYXRlRnJhZ21lbnQgZnJvbSBcIi4uL3N0YXRpYy9jcmVhdGVGcmFnbWVudFwiO1xuaW1wb3J0IGNzcyBmcm9tIFwiLi4vc3RhdGljL2Nzc1wiO1xuaW1wb3J0IGRvbUxvYWRlZCBmcm9tIFwiLi4vc3RhdGljL2RvbUxvYWRlZFwiO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuLi9zdGF0aWMvZ2V0RG9jdW1lbnRcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4uL3N0YXRpYy9nZXRXaW5kb3dcIjtcbmltcG9ydCBpbmplY3QgZnJvbSBcIi4uL3N0YXRpYy9pbmplY3RcIjtcbmltcG9ydCBzdHIybm9kZSBmcm9tIFwiLi4vc3RhdGljL3N0cjJub2RlXCI7XG5pbXBvcnQgc3RyMmZyYWdtZW50IGZyb20gXCIuLi9zdGF0aWMvc3RyMmZyYWdtZW50XCI7XG5pbXBvcnQgbm9kZTJzdHIgZnJvbSBcIi4uL3N0YXRpYy9ub2RlMnN0clwiO1xuaW1wb3J0IHF1ZXJ5IGZyb20gXCIuLi9zdGF0aWMvcXVlcnlcIjtcbmltcG9ydCBxdWVyeUFsbCBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5QWxsXCI7XG5pbXBvcnQgc2VhcmNoIGZyb20gXCIuLi9zdGF0aWMvc2VhcmNoXCI7XG5pbXBvcnQgZW5jb2RlR2V0UXVlcnkgZnJvbSBcIi4uL3N0YXRpYy9lbmNvZGVHZXRRdWVyeVwiO1xuaW1wb3J0IGRlY29kZUdldFF1ZXJ5IGZyb20gXCIuLi9zdGF0aWMvZGVjb2RlR2V0UXVlcnlcIjtcbmltcG9ydCBodHRwUmVxdWVzdCBmcm9tIFwiLi4vc3RhdGljL2h0dHBSZXF1ZXN0XCI7XG5pbXBvcnQgZGVmaW5lZCBmcm9tIFwiLi4vc3RhdGljL2RlZmluZWRcIjtcbmltcG9ydCBkZWZpbmVkSW4gZnJvbSBcIi4uL3N0YXRpYy9kZWZpbmVkSW5cIjtcbmltcG9ydCBlYWNoIGZyb20gXCIuLi9zdGF0aWMvZWFjaFwiO1xuaW1wb3J0IGV4dGVuZCwge1xuICAgIGV4dGVuZFJlY3Vyc2l2ZVxufSAgZnJvbSBcIi4uL3N0YXRpYy9leHRlbmRcIjtcbmltcG9ydCBpc0VtcHR5IGZyb20gXCIuLi9zdGF0aWMvaXNFbXB0eVwiO1xuaW1wb3J0IGZpbmRPYmplY3QgZnJvbSBcIi4uL3N0YXRpYy9maW5kT2JqZWN0XCI7XG5pbXBvcnQgZmluZE9iamVjdHMgZnJvbSBcIi4uL3N0YXRpYy9maW5kT2JqZWN0c1wiO1xuaW1wb3J0IGZvcm1hdCBmcm9tIFwiLi4vc3RhdGljL2Zvcm1hdFwiO1xuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi4vc3RhdGljL2lzTm9kZVwiO1xuaW1wb3J0IGxvYWRDU1MgZnJvbSBcIi4uL3N0YXRpYy9sb2FkQ1NTXCI7XG5pbXBvcnQgbG9hZEpTIGZyb20gXCIuLi9zdGF0aWMvbG9hZEpTXCI7XG5pbXBvcnQgbG9hZEpTU3luYyBmcm9tIFwiLi4vc3RhdGljL2xvYWRKU1N5bmNcIjtcbmltcG9ydCBtZXJnZSBmcm9tIFwiLi4vc3RhdGljL21lcmdlXCI7XG5pbXBvcnQgbnVtYmVyMnN0cmluZyBmcm9tIFwiLi4vc3RhdGljL251bWJlcjJzdHJpbmdcIjtcbmltcG9ydCBvbiBmcm9tIFwiLi4vc3RhdGljL29uXCI7XG5pbXBvcnQgcG9zaXRpb24gZnJvbSBcIi4uL3N0YXRpYy9wb3NpdGlvblwiO1xuaW1wb3J0IHBvc2l0aW9uTW91c2UgZnJvbSBcIi4uL3N0YXRpYy9wb3NpdGlvbk1vdXNlXCI7XG5pbXBvcnQgcmFuZG9tLCB7XG4gICAgcmFuZG9tQ29sb3IsXG4gICAgcmFuZG9tSXRlbSxcbiAgICByYW5kb21OdW1iZXIsXG4gICAgcmFuZG9tU3RyaW5nLFxuICAgIHJhbmRvbUh1bWFuaXplU3RyaW5nXG59IGZyb20gXCIuLi9zdGF0aWMvcmFuZG9tXCI7XG5pbXBvcnQgcmVkaXJlY3QgZnJvbSBcIi4uL3N0YXRpYy9yZWRpcmVjdFwiO1xuaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi4vc3RhdGljL3R5cGVPZlwiO1xuaW1wb3J0IHR5cGVPZlN0cmljdCBmcm9tIFwiLi4vc3RhdGljL3R5cGVPZlN0cmljdFwiO1xuaW1wb3J0IHVyaSBmcm9tIFwiLi4vc3RhdGljL3VyaVwiO1xuaW1wb3J0IGNvcHkgZnJvbSBcIi4uL3N0YXRpYy9jb3B5XCI7XG5pbXBvcnQgY2xvbmUgZnJvbSBcIi4uL3N0YXRpYy9jbG9uZVwiO1xuaW1wb3J0IHRvT2JqZWN0IGZyb20gXCIuLi9zdGF0aWMvdG9PYmplY3RcIjtcbmltcG9ydCBpc0hUTUxTdHJpbmcgZnJvbSBcIi4uL3N0YXRpYy9pc0hUTUxTdHJpbmdcIjtcbmltcG9ydCBjcmVhdGVBcnJheSBmcm9tIFwiLi4vc3RhdGljL2NyZWF0ZUFycmF5XCI7XG5pbXBvcnQgaXNTdHJpbmcgZnJvbSBcIi4uL3N0YXRpYy9pc1N0cmluZ1wiO1xuaW1wb3J0IGV4aXN0cyBmcm9tIFwiLi4vc3RhdGljL2V4aXN0c1wiO1xuaW1wb3J0IGlzRGVmaW5lZCBmcm9tIFwiLi4vc3RhdGljL2lzRGVmaW5lZFwiO1xuaW1wb3J0IGxvYWRCbG9iZmlsZSBmcm9tIFwiLi4vc3RhdGljL2xvYWRCbG9iZmlsZVwiO1xuaW1wb3J0IGxvYWRKU09OIGZyb20gXCIuLi9zdGF0aWMvbG9hZEpTT05cIjtcbmltcG9ydCBsb2FkVGV4dGZpbGUgZnJvbSBcIi4uL3N0YXRpYy9sb2FkVGV4dGZpbGVcIjtcbmltcG9ydCB0b0hUTUwgZnJvbSBcIi4uL3N0YXRpYy90b0hUTUxcIjtcbmltcG9ydCB0b1hNTCBmcm9tIFwiLi4vc3RhdGljL3RvWE1MXCI7XG5pbXBvcnQgc3R5bGl6ZXIgZnJvbSBcIi4uL3N0YXRpYy9zdHlsaXplclwiO1xuaW1wb3J0IHVuaXFBcnJheSBmcm9tIFwiLi4vc3RhdGljL3VuaXFBcnJheVwiO1xuaW1wb3J0IGlzTnVtYmVyIGZyb20gXCIuLi9zdGF0aWMvaXNOdW1iZXJcIjtcbmltcG9ydCB0cmltU3ltYm9scyBmcm9tIFwiLi4vc3RhdGljL3RyaW1TeW1ib2xzXCI7XG5pbXBvcnQgaXNMb3dlckNhc2UgZnJvbSBcIi4uL3N0YXRpYy9pc0xvd2VyQ2FzZVwiO1xuaW1wb3J0IGlzVXBwZXJDYXNlIGZyb20gXCIuLi9zdGF0aWMvaXNVcHBlckNhc2VcIjtcbmltcG9ydCB0b1NuYWtlQ2FzZSBmcm9tIFwiLi4vc3RhdGljL3RvU25ha2VDYXNlXCI7XG5pbXBvcnQgdG9DYW1lbENhc2UgZnJvbSBcIi4uL3N0YXRpYy90b0NhbWVsQ2FzZVwiO1xuaW1wb3J0IGhhc0xvd2VyQ2FzZSBmcm9tIFwiLi4vc3RhdGljL2hhc0xvd2VyQ2FzZVwiO1xuaW1wb3J0IHRvTWludXNDYXNlIGZyb20gXCIuLi9zdGF0aWMvdG9NaW51c0Nhc2VcIjtcbmltcG9ydCBhZGRDc3MgZnJvbSBcIi4uL3N0YXRpYy9hZGRDc3NcIjtcblxuY29uc3QgU3RhdGljID0ge1xuICAgIGFiYyxcbiAgICBhdHRyLFxuICAgIGNyZWF0ZUVsZW1lbnQsXG4gICAgY3JlYXRlRnJhZ21lbnQsXG4gICAgY3NzLFxuICAgIGRvbUxvYWRlZCxcbiAgICBnZXREb2N1bWVudCxcbiAgICBnZXRXaW5kb3csXG4gICAgaW5qZWN0LFxuICAgIHN0cjJub2RlLFxuICAgIHN0cjJmcmFnbWVudCxcbiAgICBub2RlMnN0cixcbiAgICBxdWVyeSxcbiAgICBxdWVyeUFsbCxcbiAgICBzZWFyY2gsXG4gICAgZW5jb2RlR2V0UXVlcnksXG4gICAgZGVjb2RlR2V0UXVlcnksXG4gICAgaHR0cFJlcXVlc3QsXG4gICAgZGVmaW5lZCxcbiAgICBkZWZpbmVkSW4sXG4gICAgZXh0ZW5kLFxuICAgIGV4dGVuZFJlY3Vyc2l2ZSxcbiAgICBlYWNoLFxuICAgIGZpbmRPYmplY3QsXG4gICAgZmluZE9iamVjdHMsXG4gICAgZm9ybWF0LFxuICAgIGlzRW1wdHksXG4gICAgaXNOb2RlLFxuICAgIGxvYWRDU1MsXG4gICAgbG9hZEpTLFxuICAgIGxvYWRKU1N5bmMsXG4gICAgbWVyZ2UsXG4gICAgbnVtYmVyMnN0cmluZyxcbiAgICBvbixcbiAgICBwb3NpdGlvbixcbiAgICBwb3NpdGlvbk1vdXNlLFxuICAgIHJhbmRvbSxcbiAgICByYW5kb21Db2xvcixcbiAgICByYW5kb21JdGVtLFxuICAgIHJhbmRvbU51bWJlcixcbiAgICByYW5kb21TdHJpbmcsXG4gICAgcmFuZG9tSHVtYW5pemVTdHJpbmcsXG4gICAgcmVkaXJlY3QsXG4gICAgdHlwZU9mLFxuICAgIHR5cGVPZlN0cmljdCxcbiAgICB1cmksXG4gICAgY29weSxcbiAgICBjbG9uZSxcbiAgICB0b09iamVjdCxcbiAgICBpc0hUTUxTdHJpbmcsXG4gICAgY3JlYXRlQXJyYXksXG4gICAgaXNTdHJpbmcsXG4gICAgZXhpc3RzLFxuICAgIGlzRGVmaW5lZCxcbiAgICBsb2FkQmxvYmZpbGUsXG4gICAgbG9hZEpTT04sXG4gICAgbG9hZFRleHRmaWxlLFxuICAgIHRvSFRNTCxcbiAgICB0b1hNTCxcbiAgICBzdHlsaXplcixcbiAgICB1bmlxQXJyYXksXG4gICAgaXNOdW1iZXIsXG4gICAgdHJpbVN5bWJvbHMsXG4gICAgaXNMb3dlckNhc2UsXG4gICAgaXNVcHBlckNhc2UsXG4gICAgdG9DYW1lbENhc2UsXG4gICAgdG9TbmFrZUNhc2UsXG4gICAgaGFzTG93ZXJDYXNlLFxuICAgIHRvTWludXNDYXNlLFxuICAgIGFkZENzcyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRpYztcbiIsImltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5cblxuY29uc3QgaW5qZWN0ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBkYXRhLCBhcHBlbmQsIHRvKVxue1xuICAgIGlmICh0eXBlT2Yoc2VsZWN0b3IsICdhcnJheScpKSB7XG4gICAgICAgIHNlbGVjdG9yLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICAgIGluamVjdChlbGVtLCBkYXRhLCB0cnVlLCB0byk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVPZihzZWxlY3RvciwgJ3N0cmluZycpKVxuICAgICAgICBzZWxlY3RvciA9IHF1ZXJ5KHNlbGVjdG9yLCB0byk7XG5cbiAgICBpZiAoIWFwcGVuZClcbiAgICAgICAgc2VsZWN0b3IudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGlmIChpc05vZGUoc2VsZWN0b3IpKSB7XG4gICAgICAgIGlmIChpc05vZGUoZGF0YSkpIHtcbiAgICAgICAgICAgIHNlbGVjdG9yLmFwcGVuZENoaWxkKGRhdGEpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVPZihkYXRhLCAnYXJyYXknKSkge1xuICAgICAgICAgICAgbGV0IGk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICBpbmplY3Qoc2VsZWN0b3IsIGRhdGFbaV0sIHRydWUsIHRvKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdG9yLmlubmVySFRNTCA9ICghYXBwZW5kKSA/IGRhdGEgOiBzZWxlY3Rvci5pbm5lckhUTUwgKyBkYXRhO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmplY3Q7XG4iLCJcbmNvbnN0IGlzRGVmaW5lZCA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICByZXR1cm4gc3JjICE9PSB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpc0RlZmluZWQ7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuXG5cbmNvbnN0IGlzRW1wdHkgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgaWYgKHR5cGVPZihzcmMsICdvYmplY3QnKSB8fCB0eXBlT2Yoc3JjLCAnYXJyYXknKSkge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gc3JjKVxuICAgICAgICAgICAgaWYgKHNyYy5oYXNPd25Qcm9wZXJ0eShrZXkpKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICh0eXBlT2Yoc3JjLCAnc3RyaW5nJykpIHtcbiAgICAgICAgc3JjID0gc3JjLnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gICAgICAgIHJldHVybiBzcmMgPT09IFwiXCIgfHwgc3JjID09PSBcIjBcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKHNyYyA9PT0gMCB8fCBzcmMgPT09IG51bGwgfHwgc3JjID09PSB1bmRlZmluZWQgfHwgc3JjID09PSBmYWxzZSB8fCBpc05hTihzcmMpKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpc0VtcHR5O1xuIiwiLy8gaW1wb3J0IERPTVBhcnNlciBmcm9tICdET01QYXJzZXInO1xuXG5jb25zdCBpc0hUTUxTdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUsIHRydWVzdCA9IGZhbHNlKSB7XG5cbiAgICBpZiAodHJ1ZXN0KSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgICAgIHJldHVybiAhIWRpdi5jaGlsZEVsZW1lbnRDb3VudDtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWUudHJpbSgpLnN1YnN0cmluZygwLCAxKSA9PT0gJzwnO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNIVE1MU3RyaW5nO1xuIiwiXG5jb25zdCBpc0xvd2VyQ2FzZSA9IGZ1bmN0aW9uIChjaGFyYWN0ZXIpIHtcbiAgICByZXR1cm4gY2hhcmFjdGVyID09PSBjaGFyYWN0ZXIudG9Mb3dlckNhc2UoKSAvKiYmIGNoYXJhY3RlciAhPT0gY2hhcmFjdGVyLnRvVXBwZXJDYXNlKCkqLztcbn07XG5cbmNvbnN0IGlzTG93ZXJDYXNlMiA9IGZ1bmN0aW9uIChjaGFyYWN0ZXIpIHtcbiAgICBsZXQgY29kZSA9IGNoYXJhY3Rlci5jaGFyQ29kZUF0KDApO1xuICAgIHJldHVybiBjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNMb3dlckNhc2U7IiwiXG5cbmNvbnN0IGlzTm9kZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiAodmFsdWUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFIHx8XG4gICAgICAgIHZhbHVlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSB8fFxuICAgICAgICB2YWx1ZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFIHx8XG4gICAgICAgIHZhbHVlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX05PREUpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBpc05vZGU7XG4iLCJcbmNvbnN0IGlzTnVtYmVyID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyB8fCB2YWx1ZSBpbnN0YW5jZW9mIE51bWJlcikgJiYgIWlzTmFOKHZhbHVlKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGlzTnVtYmVyO1xuIiwiXG5jb25zdCBpc1N0cmluZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8IHZhbHVlIGluc3RhbmNlb2YgU3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNTdHJpbmc7XG4iLCJcbmNvbnN0IGlzVXBwZXJDYXNlID0gZnVuY3Rpb24gKGNoYXJhY3Rlcikge1xuICAgIHJldHVybiBjaGFyYWN0ZXIgPT09IGNoYXJhY3Rlci50b1VwcGVyQ2FzZSgpIC8qJiYgY2hhcmFjdGVyICE9PSBjaGFyYWN0ZXIudG9Mb3dlckNhc2UoKSovO1xufTtcblxuY29uc3QgaXNVcHBlckNhc2UyID0gZnVuY3Rpb24gKGNoYXJhY3Rlcikge1xuICAgIGxldCBjb2RlID0gY2hhcmFjdGVyLmNoYXJDb2RlQXQoMCk7XG4gICAgcmV0dXJuIGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlzVXBwZXJDYXNlOyIsIlxuY29uc3QgbG9hZEJsb2JmaWxlID0gZnVuY3Rpb24gKHNyYywgb25sb2FkLCBvbmVycm9yKSB7XG4gICAgZmV0Y2goc3JjKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5ibG9iKCkpXG4gICAgICAgIC50aGVuKGJsb2IgPT4gb25sb2FkKGJsb2IpKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gdHlwZW9mIG9uZXJyb3IgPT09ICdmdW5jdGlvbicgPyBvbmVycm9yKGVycm9yKSA6IG51bGwpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZEJsb2JmaWxlOyIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRcIjtcblxuY29uc3QgbG9hZENTUyA9IGZ1bmN0aW9uIChzcmMsIG9ubG9hZCwgb25lcnJvcikge1xuICAgIGlmICghc3JjKSByZXR1cm4gbnVsbDtcbiAgICBpZiAodHlwZU9mKHNyYywgJ2FycmF5JykpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxvYWRDU1Moc3JjW2ldLCBvbmxvYWQsIG9uZXJyb3IpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZG9jID0gZ2V0RG9jdW1lbnQoKTtcbiAgICAgICAgY29uc3QgbGluayA9IGRvYy5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIGNvbnN0IGlkID0gXCJzcmMtXCIgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyKTtcblxuICAgICAgICBsaW5rLmhyZWYgPSAoc3JjLnN1YnN0cigtNCkgPT09ICcuY3NzJykgPyBzcmMgOiBzcmMgKyAnLmNzcyc7XG4gICAgICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgICAgICBsaW5rLmlkID0gaWQ7XG4gICAgICAgIGxpbmsub25sb2FkID0gb25sb2FkO1xuICAgICAgICBsaW5rLm9uZXJyb3IgPSBvbmVycm9yO1xuXG4gICAgICAgIGRvYy5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICByZXR1cm4gbGlua1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRDU1M7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuL2dldERvY3VtZW50XCI7XG5cbmNvbnN0IGRvY3VtZW50RWxlbWVudCA9IGdldERvY3VtZW50KCk7XG5jb25zdCBsb2FkSlMgPSBmdW5jdGlvbiAoc3JjLCBvbmxvYWQsIG9uZXJyb3IpIHtcbiAgICBpZiAoIXNyYykgcmV0dXJuIG51bGw7XG4gICAgaWYgKHR5cGVPZihzcmMsICdhcnJheScpKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsb2FkSlMoc3JjW2ldLCBvbmxvYWQsIG9uZXJyb3IpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnRFbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBjb25zdCBpZCA9ICdyZXNvdXJjZS0nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMik7XG5cbiAgICAgICAgc2NyaXB0LnNyYyA9IChzcmMuc3Vic3RyKC0zKSA9PT0gJy5qcycpID8gc3JjIDogc3JjICsgJy5qcyc7XG4gICAgICAgIHNjcmlwdC50eXBlID0gJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnO1xuICAgICAgICBzY3JpcHQuaWQgPSBpZDtcbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IG9ubG9hZDtcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBvbmVycm9yO1xuXG4gICAgICAgIGRvY3VtZW50RWxlbWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIHJldHVybiBzY3JpcHRcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkSlM7IiwiXG5jb25zdCBsb2FkSlNPTiA9IGZ1bmN0aW9uIChzcmMsIG9ubG9hZCwgb25lcnJvcikge1xuICAgIGZldGNoKHNyYylcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihqc29uID0+IG9ubG9hZChqc29uKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHR5cGVvZiBvbmVycm9yID09PSAnZnVuY3Rpb24nID8gb25lcnJvcihlcnJvcikgOiBudWxsKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRKU09OOyIsIlxuaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRcIjtcblxuLyoqXG4gKiBMb2FkcyBhIHNjcmlwdCBlbGVtZW50IHdpdGggamF2YXNjcmlwdCBzb3VyY2VcbiAqXG4gKiAubG9hZEpTU3luYyAoIHtcbiAqICAgICAgbXlzY3JpcHQxOiAnL3BhdGgvdG8vbXlzY3JpcHQxJyxcbiAqICAgICAgbXlzY3JpcHQyOiAnL3BhdGgvdG8vbXlzY3JpcHQyJyxcbiAqICAgIH0sXG4gKiAgICBmdW5jdGlvbiAobGlzdCkge30pXG4gKlxuICogLmxvYWRKU1N5bmMgKCBbXG4gKiAgICAgICcvcGF0aC90by9teXNjcmlwdDEnLFxuICogICAgICAnL3BhdGgvdG8vbXlzY3JpcHQyJyxcbiAqICAgIF0sXG4gKiAgICBmdW5jdGlvbiAobGlzdCkge30pXG4gKlxuICogQG5hbWVzcGFjZSBOYW1lc3BhY2VBcHBsaWNhdGlvbi5sb2FkSlNTeW5jXG4gKiBAcGFyYW0gc3JjcyAgICAgICBPYmplY3QsIEFycmF5LiBpdGVtczoga2V5IGlzIElELCB2YWx1ZSBpcyBzcmNcbiAqIEBwYXJhbSBjYWxsYmFjayAgRnVuY3Rpb24gY2FsbGVkIHdoZW4gYWxsIHNyY3MgaXMgbG9hZGVkXG4gKiBAcGFyYW0gb25lcnJvciAgIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIGxvYWQgaXMgZmFpbGVkXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuY29uc3QgbG9hZEpTU3luYyA9IGZ1bmN0aW9uIChzcmNzLCBjYWxsYmFjaywgb25lcnJvcikge1xuICAgIGlmICh0eXBlT2Yoc3JjcywgJ29iamVjdCcpIHx8IHR5cGVPZihzcmNzLCAnYXJyYXknKSkge1xuICAgICAgICBpZiAodHlwZU9mKHNyY3MsICdhcnJheScpKSB7XG4gICAgICAgICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgICAgICAgIHNyY3MuZm9yRWFjaCggKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICBvYmpbJ3Jlc291cmNlLScgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyKV0gPSBpdGVtXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNyY3MgPSBvYmo7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGl0ZXJhdG9yID0gMDtcbiAgICAgICAgY29uc3Qgc2NyaXB0cyA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhzcmNzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNyYyA9IHNyY3Nba2V5XTtcbiAgICAgICAgICAgIGNvbnN0IHNjcmlwdCA9IGNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcsIHtcbiAgICAgICAgICAgICAgICBzcmM6IChzcmMuc3Vic3RyKC0zKSA9PT0gJy5qcycpID8gc3JjIDogc3JjICsgJy5qcycsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnLFxuICAgICAgICAgICAgICAgIGlkOiBrZXksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNjcmlwdC5vbmVycm9yID0gb25lcnJvcjtcbiAgICAgICAgICAgIHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHNjcmlwdHNbdGhpcy5pZF0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIGl0ZXJhdG9yICsrO1xuICAgICAgICAgICAgICAgIGlmIChpdGVyYXRvciA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIHNjcmlwdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH0pXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZEpTU3luYztcbiIsIlxuY29uc3QgbG9hZFRleHRmaWxlID0gZnVuY3Rpb24gKHNyYywgb25sb2FkLCBvbmVycm9yKSB7XG4gICAgZmV0Y2goc3JjKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXG4gICAgICAgIC50aGVuKHRleHQgPT4gb25sb2FkKHRleHQpKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gdHlwZW9mIG9uZXJyb3IgPT09ICdmdW5jdGlvbicgPyBvbmVycm9yKGVycm9yKSA6IG51bGwpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZFRleHRmaWxlOyIsIlxuY29uc3QgbWVyZ2UgPSAob2JqZWN0MSwgb2JqZWN0MikgPT4ge1xuICAgIGZvciAobGV0IGtleSBpbiBvYmplY3QyKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIG9iamVjdDJba2V5XS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0ICkge1xuICAgICAgICAgICAgICAgIG9iamVjdDFba2V5XSA9IG1lcmdlKG9iamVjdDFba2V5XSwgb2JqZWN0MltrZXldKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0MVtrZXldID0gb2JqZWN0MltrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIG9iamVjdDFba2V5XSA9IG9iamVjdDJba2V5XTtcblxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3QxO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2U7XG4iLCJcblxuY29uc3Qgbm9kZTJzdHIgPSAgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lci5pbm5lckhUTUw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBub2RlMnN0cjtcbiIsIlxuZXhwb3J0IGNvbnN0IG51bWJlcjJzdHJpbmcgPSBmdW5jdGlvbiAoeCkge1xuICAgIGxldCBlO1xuICAgIGlmIChNYXRoLmFicyh4KSA8IDEuMCkge1xuICAgICAgICBlID0gcGFyc2VJbnQoeC50b1N0cmluZygpLnNwbGl0KCdlLScpWzFdKTtcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIHggKj0gTWF0aC5wb3coMTAsZS0xKTtcbiAgICAgICAgICAgIHggPSAnMC4nICsgKG5ldyBBcnJheShlKSkuam9pbignMCcpICsgeC50b1N0cmluZygpLnN1YnN0cmluZygyKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGUgPSBwYXJzZUludCh4LnRvU3RyaW5nKCkuc3BsaXQoJysnKVsxXSk7XG4gICAgICAgIGlmIChlID4gMjApIHtcbiAgICAgICAgICAgIGUgLT0gMjA7XG4gICAgICAgICAgICB4IC89IE1hdGgucG93KDEwLGUpO1xuICAgICAgICAgICAgeCArPSAobmV3IEFycmF5KGUrMSkpLmpvaW4oJzAnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG51bWJlcjJzdHJpbmc7XG4iLCJpbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5pbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuXG5cbmNvbnN0IG9uID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBldmVudE5hbWUsIGNhbGxiYWNrLCBidWJibGUpIHtcbiAgICBsZXQgaSwgZWxlbWVudHMgPSBbXTtcblxuICAgIHN3aXRjaCAodHlwZU9mKHNlbGVjdG9yKSkge1xuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgZWxlbWVudHMgPSBxdWVyeUFsbChzZWxlY3Rvcik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgIGlmIChpc05vZGUoc2VsZWN0b3IpKVxuICAgICAgICAgICAgICAgIGVsZW1lbnRzID0gW3NlbGVjdG9yXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgICBlbGVtZW50cyA9IHNlbGVjdG9yO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChlbGVtZW50c1tpXSAmJiBlbGVtZW50c1tpXS5hZGRFdmVudExpc3RlbmVyKVxuICAgICAgICAgICAgZWxlbWVudHNbaV0uYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrLCAhIWJ1YmJsZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgb247XG4iLCIvLyBpbXBvcnQgaXNOb2RlIGZyb20gXCIuL2lzTm9kZVwiO1xuXG5cbmltcG9ydCBpc0hUTUxTdHJpbmcgZnJvbSBcIi4vaXNIVE1MU3RyaW5nXCI7XG5pbXBvcnQgc3RyMm5vZGUgZnJvbSBcIi4vc3RyMm5vZGVcIjtcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4vaXNOb2RlXCI7XG5cbi8qKlxuICogQHByb3BlcnR5IG51bWJlciB4XG4gKiBAcHJvcGVydHkgbnVtYmVyIHlcbiAqIEBwcm9wZXJ0eSBudW1iZXIgd2lkdGhcbiAqIEBwcm9wZXJ0eSBudW1iZXIgaGVpZ2h0XG4gKiBAcGFyYW0gZWxlbVxuICogQHJldHVybnMge3t4OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIHk6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHRvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXIsIHJpZ2h0OiBudW1iZXIsIGJvdHRvbTogbnVtYmVyLCBlbGVtZW50OiBvYmplY3R9fVxuICovXG5jb25zdCBwb3NpdGlvbiA9IGZ1bmN0aW9uIChlbGVtKVxue1xuICAgIGNvbnN0IGRhdGEgPSB7eDogMCwgeTogMCwgd2lkdGg6IDAsIGhlaWdodDogMH07XG5cbiAgICBpZiAodHlwZW9mIGVsZW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmIChpc0hUTUxTdHJpbmcoZWxlbSkpIHtcbiAgICAgICAgICAgIGVsZW0gPSBzdHIybm9kZShlbGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGVsZW0gPT09IHdpbmRvdyB8fCBlbGVtID09PSBkb2N1bWVudCkge1xuICAgICAgICBkYXRhLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIGRhdGEuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICBkYXRhLmVsZW1lbnQgPSB3aW5kb3c7XG4gICAgfSBlbHNlIGlmIChpc05vZGUoZWxlbSkpIHtcbiAgICAgICAgaWYgKGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQ7XG4gICAgICAgICAgICBjb25zdCBjbGllbnRUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50VG9wIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50VG9wIHx8IDA7XG4gICAgICAgICAgICBjb25zdCBjbGllbnRMZWZ0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudExlZnQgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRMZWZ0IHx8IDA7XG5cbiAgICAgICAgICAgIGRhdGEueSA9IE1hdGgucm91bmQocmVjdC50b3AgKyBzY3JvbGxUb3AgLSBjbGllbnRUb3ApO1xuICAgICAgICAgICAgZGF0YS54ID0gTWF0aC5yb3VuZChyZWN0LmxlZnQgKyBzY3JvbGxMZWZ0IC0gY2xpZW50TGVmdCk7XG4gICAgICAgICAgICBkYXRhLndpZHRoID0gZWxlbS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIGRhdGEuaGVpZ2h0ID0gZWxlbS5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgICAgIGRhdGEudG9wID0gcmVjdC50b3AgKyBwYWdlWU9mZnNldDtcbiAgICAgICAgICAgIGRhdGEubGVmdCA9IHJlY3QubGVmdCArIHBhZ2VYT2Zmc2V0O1xuICAgICAgICAgICAgZGF0YS5yaWdodCA9IHJlY3QucmlnaHQgKyBwYWdlWE9mZnNldDtcbiAgICAgICAgICAgIGRhdGEuYm90dG9tID0gcmVjdC5ib3R0b20gKyBwYWdlWE9mZnNldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0b3AgPSAwLCBsZWZ0ID0gMDtcbiAgICAgICAgICAgIHdoaWxlIChlbGVtKSB7XG4gICAgICAgICAgICAgICAgdG9wICs9IHBhcnNlSW50KGVsZW0ub2Zmc2V0VG9wLCAxMCk7XG4gICAgICAgICAgICAgICAgbGVmdCArPSBwYXJzZUludChlbGVtLm9mZnNldExlZnQsIDEwKTtcbiAgICAgICAgICAgICAgICBlbGVtID0gZWxlbS5vZmZzZXRQYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRhLnkgPSB0b3A7XG4gICAgICAgICAgICBkYXRhLnggPSBsZWZ0O1xuICAgICAgICAgICAgZGF0YS53aWR0aCA9IGVsZW0ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICBkYXRhLmhlaWdodCA9IGVsZW0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGRhdGEuZWxlbWVudCA9IGVsZW07XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcG9zaXRpb247XG4iLCJcblxuY29uc3QgcG9zaXRpb25Nb3VzZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmICghKGV2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6IGFyZ3VtZW50IGlzIG5vdCB0eXBlIHRoZSBNb3VzZUV2ZW50IScpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQsXG4gICAgICAgIHk6IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcFxuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3NpdGlvbk1vdXNlO1xuIiwiaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0gc2VsZWN0b3JcbiAqIEBwYXJhbSBmcm9tXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqIEBwYXJhbSB0aGlzSW5zdGFuY2VcbiAqIEByZXR1cm5zIHtOb2RlfGJvb2xlYW59XG4gKi9cbmNvbnN0IHF1ZXJ5ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBmcm9tLCBjYWxsYmFjaywgdGhpc0luc3RhbmNlKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBxdWVyeUFsbChzZWxlY3RvciwgZnJvbSwgY2FsbGJhY2ssIHRoaXNJbnN0YW5jZSk7XG4gICAgcmV0dXJuIGVsZW1lbnRzICYmIGVsZW1lbnRzWzBdID8gZWxlbWVudHNbMF0gOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHF1ZXJ5O1xuIiwiaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBnZXREb2N1bWVudCBmcm9tICcuL2dldERvY3VtZW50JztcblxuY29uc3QgZG9jID0gZ2V0RG9jdW1lbnQoKTtcblxuY29uc3QgcXVlcnlBbGwgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZyb20sIGNhbGxiYWNrLCB0aGlzSW5zdGFuY2UpIHtcbiAgICBsZXQgZWxlbWVudHMgPSBbXTtcbiAgICBmcm9tID0gZnJvbSB8fCBkb2M7XG5cbiAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSlcbiAgICAgICAgcmV0dXJuIFtzZWxlY3Rvcl07XG5cbiAgICBpZiAodHlwZU9mKGZyb20sICdzdHJpbmcnKSlcbiAgICAgICAgZnJvbSA9IGRvYy5xdWVyeVNlbGVjdG9yKGZyb20pO1xuICAgIGlmIChmcm9tKVxuICAgICAgICBlbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwoZnJvbS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG5cbiAgICBpZiAoY2FsbGJhY2spXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtjYWxsYmFjay5jYWxsKHRoaXNJbnN0YW5jZSB8fCB7fSwgZWxlbWVudCl9KTtcblxuICAgIHJldHVybiBlbGVtZW50cztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHF1ZXJ5QWxsO1xuIiwiLyoqXG4gKiBHZW5lcmF0ZSBhIHJhbmRvbSBudW1iZXJcbiAqIEBwYXJhbSBtaW5cbiAqIEBwYXJhbSBtYXhcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmltcG9ydCB7QUJDLCBMRVRURVJfQ09OU09OQU5ULCBMRVRURVJfVk9XRUwsIE5VTUJFUlN9IGZyb20gXCIuL2FiY1wiO1xuXG5cbmV4cG9ydCBjb25zdCByYW5kb20gPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgICBtaW4gPSBtaW4gfHwgMDtcbiAgICBtYXggPSBtYXggfHwgMTAwO1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSBhIHJhbmRvbSBoZXggY29sb3JcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCByYW5kb21Db2xvciA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBsZXR0ZXJzID0gJzAxMjM0NTY3ODlBQkNERUYnLnNwbGl0KCcnKTtcbiAgICBsZXQgaSwgY29sb3IgPSAnIyc7XG4gICAgZm9yIChpID0gMDsgaSA8IDY7IGkrKylcbiAgICAgICAgY29sb3IgKz0gbGV0dGVyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNildO1xuICAgIHJldHVybiBjb2xvcjtcbn07XG5cbmV4cG9ydCBjb25zdCByYW5kb21OdW1iZXIgPSBmdW5jdGlvbiAoc2l6ZSA9IDYpIHtcbiAgICBpZiAoc2l6ZSA+IDE2KSB7XG4gICAgICAgIGxldCBpID0gTWF0aC5jZWlsKHNpemUvMTYpO1xuICAgICAgICBsZXQgcmVzID0gJyc7XG4gICAgICAgIGZvciAoaTsgaSA+IDA7IGktLSlcbiAgICAgICAgICAgIHJlcyArPSBBcnJheSgxNikuZmlsbCgwKS5tYXAoaSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpLmpvaW4oJycpO1xuICAgICAgICByZXR1cm4gcmVzLnNsaWNlKDAsIHNpemUpO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VJbnQoQXJyYXkoc2l6ZSkuZmlsbCgwKS5tYXAoaSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpLmpvaW4oJycpKTtcbn07XG5cbmV4cG9ydCBjb25zdCByYW5kb21TdHJpbmcgPSBmdW5jdGlvbiAoc2l6ZSA9IDYsIHdpdGhOdW1iZXJzID0gZmFsc2UpIHtcbiAgICBsZXQgaSwgc3RyaW5nID0gJyc7XG4gICAgY29uc3QgYWJzID0gd2l0aE51bWJlcnNcbiAgICAgICAgPyBBQkMgKyBOVU1CRVJTLnRvTG93ZXJDYXNlKCkuc3BsaXQoJywnKVxuICAgICAgICA6IEFCQy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcsJyk7XG4gICAgZm9yIChpID0gc2l6ZTsgaSA+IDA7IGktLSkge1xuICAgICAgICBzdHJpbmcgKz0gYWJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFicy5sZW5ndGgpXTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCByYW5kb21IdW1hbml6ZVN0cmluZyA9IGZ1bmN0aW9uIChzaXplID0gNikge1xuICAgIGxldCBpLCBzdHJpbmcgPSAnJztcbiAgICBjb25zdCBjb25zb25hbnQgPSAgTEVUVEVSX0NPTlNPTkFOVC50b0xvd2VyQ2FzZSgpLnNwbGl0KCcsJyk7XG4gICAgY29uc3Qgdm93ZWwgPSAgTEVUVEVSX1ZPV0VMLnRvTG93ZXJDYXNlKCkuc3BsaXQoJywnKTtcbiAgICBjb25zdCB2b3dlbEZpcnN0ID0gKE1hdGgucmFuZG9tKCkgKiAxMCkgPiA1O1xuICAgIGZvciAoaSA9IHNpemUgLyAyICsgMTsgaSA+IDA7IGkgLS0pIHtcbiAgICAgICAgbGV0IHMxID0gY29uc29uYW50W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbnNvbmFudC5sZW5ndGgpXTtcbiAgICAgICAgbGV0IHMyID0gdm93ZWxbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdm93ZWwubGVuZ3RoKV07XG4gICAgICAgIHN0cmluZyArPSB2b3dlbEZpcnN0ID8gczEgKyBzMiA6IHMyICsgczE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZy5zdWJzdHJpbmcoMCwgc2l6ZSk7XG59O1xuXG4vKipcbiAqIFJldHVybiByYW5kb20gaXRlbSBmcm9tIGFycmF5XG4gKiBAcGFyYW0gYXJyXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuZXhwb3J0IGNvbnN0IHJhbmRvbUl0ZW0gPSBmdW5jdGlvbiAoYXJyKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyKSA/IGFycltyYW5kb20oMCwgYXJyLmxlbmd0aC0xKV0gOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJhbmRvbTtcbiIsImltcG9ydCBnZXRMb2NhdGlvbiBmcm9tIFwiLi9nZXRMb2NhdGlvblwiO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuL2dldERvY3VtZW50XCI7XG5cblxuY29uc3QgcmVkaXJlY3QgPSBmdW5jdGlvbiAodG8pIHtcbiAgICBjb25zdCBsb2MgPSBnZXRMb2NhdGlvbigpO1xuICAgIGNvbnN0IGRvYyA9IGdldERvY3VtZW50KCk7XG4gICAgbG9jLmhyZWYgPSB0byB8fCBkb2MuaHJlZjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZGlyZWN0O1xuIiwiaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5pbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5cbi8qKlxuICogc2VhcmNoKCAndWwgPiBsaScsICAnZGF0YS1saW5rJywgTm9kZUVsZW1lbnQpO1xuICpcbiAqIEBwYXJhbSBzZWxlY3RvclxuICogQHBhcmFtIGF0dHJcbiAqIEBwYXJhbSBmcm9tXG4gKiBAcmV0dXJucyB7e319XG4gKi9cbmNvbnN0IHNlYXJjaCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgYXR0ciwgZnJvbSkge1xuICAgIGZyb20gPSBpc05vZGUoZnJvbSkgPyBmcm9tIDogcXVlcnkoZnJvbSk7XG4gICAgbGV0IGkgPSAwLFxuICAgICAgICBrZXksXG4gICAgICAgIGVsZW1lbnRzID0ge30sXG4gICAgICAgIHF1ZXJ5RWxlbWVudHMgPSBxdWVyeUFsbChzZWxlY3RvciwgZnJvbSB8fCBkb2N1bWVudC5ib2R5KTtcblxuICAgIGlmIChmcm9tLmhhc0F0dHJpYnV0ZShhdHRyKSkge1xuICAgICAgICBxdWVyeUVsZW1lbnRzLnB1c2goZnJvbSlcbiAgICB9XG5cbiAgICBpZiAocXVlcnlFbGVtZW50cykge1xuICAgICAgICB3aGlsZSAoaSA8IHF1ZXJ5RWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoIWF0dHIpXG4gICAgICAgICAgICAgICAgZWxlbWVudHNbaV0gPSBxdWVyeUVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXJ5RWxlbWVudHNbaV0uaGFzQXR0cmlidXRlKGF0dHIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IHF1ZXJ5RWxlbWVudHNbaV0uZ2V0QXR0cmlidXRlKGF0dHIpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50c1trZXldID0gcXVlcnlFbGVtZW50c1tpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnRzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoO1xuIiwiXG5jb25zdCBzdHIyZnJhZ21lbnQgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgaWYgKGRvY3VtZW50LmNyZWF0ZVJhbmdlKVxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoc3RyaW5nKTtcbiAgICBlbHNlIHtcbiAgICAgICAgbGV0IGksXG4gICAgICAgICAgICBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IHN0cmluZztcbiAgICAgICAgd2hpbGUgKGkgPSBjb250YWluZXIuZmlyc3RDaGlsZClcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGkpO1xuXG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdHIyZnJhZ21lbnQ7XG4iLCJpbXBvcnQgc3RyMmZyYWdtZW50IGZyb20gXCIuL3N0cjJmcmFnbWVudFwiO1xuXG5jb25zdCBzdHIybm9kZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGxldCBmcmFnbWVudCA9IHN0cjJmcmFnbWVudChzdHJpbmcpO1xuXG4gICAgc3dpdGNoIChmcmFnbWVudC5jaGlsZEVsZW1lbnRDb3VudCkge1xuICAgICAgICBjYXNlIDA6IGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXN1bHQgPSBmcmFnbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRhaW5lcjtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0cjJub2RlO1xuIiwiXG5jb25zdCBzdHlsaXplciA9IGZ1bmN0aW9uIChlbGVtZW50LCBzdHlsZXMpIHtcbiAgICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudC5zdHlsZVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGVba2V5XSA9IHN0eWxlc1trZXldO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsaXplcjtcbiIsIlxuY29uc3QgdG9DYW1lbENhc2UgPSBmdW5jdGlvbiAoY2hhcmFjdGVycykge1xuICAgIGNvbnN0IGluZGV4ZXMgPSBbXTtcbiAgICBsZXQgc3RyaW5nID0gY2hhcmFjdGVycy5yZXBsYWNlKC9bX10vZywgZnVuY3Rpb24gKGxldHRlciwgaW5kZXgpIHtcbiAgICAgICAgaW5kZXhlcy5wdXNoKGluZGV4IC0gaW5kZXhlcy5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfSk7XG4gICAgaW5kZXhlcy5mb3JFYWNoKChpbmRleCk9PntcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBzdHJpbmcuc3Vic3RyaW5nKDAsIGluZGV4KTtcbiAgICAgICAgY29uc3QgcmVwbGFjZSA9IHN0cmluZy5zdWJzdHIoaW5kZXgsMSkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgY29uc3QgZW5kID0gc3RyaW5nLnN1YnN0cmluZyhpbmRleCArIDEpO1xuICAgICAgICBzdHJpbmcgPSBzdGFydCArIHJlcGxhY2UgKyBlbmQ7XG4gICAgfSk7XG4gICAgcmV0dXJuIHN0cmluZztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvQ2FtZWxDYXNlOyIsIi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHJldHVybnMge2Jvb2xlYW58RWxlbWVudH1cbiAqL1xuY29uc3QgdG9IVE1MID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSAndGV4dC9odG1sJztcbiAgICAgICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgICAgICBjb25zdCB4bWxEb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHZhbHVlLCB0eXBlKTtcblxuICAgICAgICBpZiAoeG1sRG9jLmRvY3VtZW50RWxlbWVudCAmJiB4bWxEb2MuYm9keS5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICAgICAgcmV0dXJuIHhtbERvYy5ib2R5LmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b0hUTUw7XG4iLCJcbmNvbnN0IHRvTWludXNDYXNlID0gZnVuY3Rpb24gKGNoYXJhY3RlcnMpIHtcbiAgICByZXR1cm4gY2hhcmFjdGVycy5yZXBsYWNlKC9bQS1aXS9nLCBmdW5jdGlvbiAobGV0dGVyLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gaW5kZXggPT09IDAgPyBsZXR0ZXIudG9Mb3dlckNhc2UoKSA6ICctJyArIGxldHRlci50b0xvd2VyQ2FzZSgpO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9NaW51c0Nhc2U7IiwiXG5jb25zdCB0b09iamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JylcbiAgICAgICAgPyBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbHVlKSlcbiAgICAgICAgOiB7fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9PYmplY3Q7XG4iLCJcbmNvbnN0IHRvU25ha2VDYXNlID0gZnVuY3Rpb24gKGNoYXJhY3RlcnMpIHtcbiAgICByZXR1cm4gY2hhcmFjdGVycy5yZXBsYWNlKC9bQS1aXS9nLCBmdW5jdGlvbiAobGV0dGVyLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gaW5kZXggPT09IDAgPyBsZXR0ZXIudG9Mb3dlckNhc2UoKSA6ICdfJyArIGxldHRlci50b0xvd2VyQ2FzZSgpO1xuICAgIH0pO1xuICAgIC8qICAgICAgICByZXR1cm4gY2hhcmFjdGVycy5zcGxpdCgnJykubWFwKChjaGFyYWN0ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gY2hhcmFjdGVyLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChpbmRleCA+IDAgPyAnXyc6JycpICsgY2hhcmFjdGVyLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoYXJhY3RlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5qb2luKCcnKTsqL1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9TbmFrZUNhc2U7IiwiXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEByZXR1cm5zIHtib29sZWFufEVsZW1lbnR9XG4gKi9cbmNvbnN0IHRvWE1MID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSAndGV4dC94bWwnO1xuICAgICAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgICAgIGNvbnN0IHhtbERvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcodmFsdWUsIHR5cGUpO1xuXG4gICAgICAgIGlmICh4bWxEb2MuZG9jdW1lbnRFbGVtZW50ICYmIHhtbERvYy5kb2N1bWVudEVsZW1lbnQudGFnTmFtZSAhPT0gJ2h0bWwnKSB7XG4gICAgICAgICAgICByZXR1cm4geG1sRG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9YTUw7XG4iLCJcbmNvbnN0IHRyaW1TeW1ib2xzID0gZnVuY3Rpb24gKHN0ciwgY2hhcmxpc3QpIHtcbiAgICBsZXQgd2hpdGVzcGFjZSA9IFtcbiAgICAgICAgJyAnLFxuICAgICAgICAnXFxuJyxcbiAgICAgICAgJ1xccicsXG4gICAgICAgICdcXHQnLFxuICAgICAgICAnXFxmJyxcbiAgICAgICAgJ1xceDBiJyxcbiAgICAgICAgJ1xceGEwJyxcbiAgICAgICAgJ1xcdTIwMDAnLFxuICAgICAgICAnXFx1MjAwMScsXG4gICAgICAgICdcXHUyMDAyJyxcbiAgICAgICAgJ1xcdTIwMDMnLFxuICAgICAgICAnXFx1MjAwNCcsXG4gICAgICAgICdcXHUyMDA1JyxcbiAgICAgICAgJ1xcdTIwMDYnLFxuICAgICAgICAnXFx1MjAwNycsXG4gICAgICAgICdcXHUyMDA4JyxcbiAgICAgICAgJ1xcdTIwMDknLFxuICAgICAgICAnXFx1MjAwYScsXG4gICAgICAgICdcXHUyMDBiJyxcbiAgICAgICAgJ1xcdTIwMjgnLFxuICAgICAgICAnXFx1MjAyOScsXG4gICAgICAgICdcXHUzMDAwJ1xuICAgIF0uam9pbignJylcbiAgICBsZXQgbCA9IDBcbiAgICBsZXQgaSA9IDBcbiAgICBzdHIgKz0gJydcbiAgICBpZiAoY2hhcmxpc3QpIHtcbiAgICAgICAgd2hpdGVzcGFjZSA9IChjaGFybGlzdCArICcnKS5yZXBsYWNlKC8oW1tcXF0oKS4/Lyp7fSskXjpdKS9nLCAnJDEnKVxuICAgIH1cbiAgICBsID0gc3RyLmxlbmd0aFxuICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKHdoaXRlc3BhY2UuaW5kZXhPZihzdHIuY2hhckF0KGkpKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHN0ciA9IHN0ci5zdWJzdHJpbmcoaSlcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICB9XG4gICAgbCA9IHN0ci5sZW5ndGhcbiAgICBmb3IgKGkgPSBsIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgaWYgKHdoaXRlc3BhY2UuaW5kZXhPZihzdHIuY2hhckF0KGkpKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHN0ciA9IHN0ci5zdWJzdHJpbmcoMCwgaSArIDEpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB3aGl0ZXNwYWNlLmluZGV4T2Yoc3RyLmNoYXJBdCgwKSkgPT09IC0xID8gc3RyIDogJydcbn1cblxuZXhwb3J0IGRlZmF1bHQgdHJpbVN5bWJvbHM7XG4iLCJpbXBvcnQgdHlwZU9mU3RyaWN0IGZyb20gXCIuL3R5cGVPZlN0cmljdFwiO1xuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcblxuY29uc3QgdHlwZU9mID0gZnVuY3Rpb24gKHZhbHVlLCB0eXBlKSB7XG4gICAgY29uc3Qgc2ltcGxlVHlwZXMgPSBbJ251bGwnLCAnYm9vbGVhbicsICd1bmRlZmluZWQnLCAnZnVuY3Rpb24nLCAnc3RyaW5nJywgJ251bWJlcicsICdkYXRlJywgJ2FycmF5JywgJ29iamVjdCddO1xuICAgIGxldCB0ID0gdHlwZU9mU3RyaWN0KHZhbHVlKS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChzaW1wbGVUeXBlcy5pbmRleE9mKHQpID09PSAtMSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKVxuICAgICAgICB0ID0gJ29iamVjdCc7XG5cbiAgICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnID8gdHlwZS50b0xvd2VyQ2FzZSgpID09PSB0IDogdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHR5cGVPZjtcbiIsIlxuY29uc3QgdHlwZU9mU3RyaWN0ID0gZnVuY3Rpb24gKHZhbHVlLCB0eXBlKSB7XG4gICAgY29uc3QgdCA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpO1xuICAgIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyB0eXBlID09PSB0IDogdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHR5cGVPZlN0cmljdDtcbiIsIlxuY29uc3QgdW5pcUFycmF5ID0gZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgc2VsZikge1xuICAgIHJldHVybiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpbmRleDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVuaXFBcnJheTtcbiIsImltcG9ydCBnZXRMb2NhdGlvbiBmcm9tIFwiLi9nZXRMb2NhdGlvblwiO1xuXG5cbmNvbnN0IHVyaSA9IGZ1bmN0aW9uICh1cmkpIHtcbiAgICBjb25zdCBsb2MgPSBnZXRMb2NhdGlvbigpO1xuICAgIHVyaSA9IHVyaSB8fCBsb2MucGF0aG5hbWU7XG4gICAgdXJpID0gdXJpLnJlcGxhY2UoL1xcLysvaWcsICcvJyk7XG4gICAgcmV0dXJuIHVyaS5sZW5ndGggPiAxICYmIHVyaS5zbGljZSgwLCAxKSAhPT0gJy8nID8gJy8nICsgdXJpIDogdXJpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXJpO1xuIiwiLy8gbnBtIHJ1biB3YXRjaFxuXG4vLyBpbXBvcnQgJy4uLy4uL2FuaW1hdGUuanMvZGlzdC9hbmltYXRlLmJ1bmRsZSc7XG4vLyBpbXBvcnQgJy4uL2RlbW8vbW92ZS9pbmRleCc7XG4vLyBpbXBvcnQgJy4uL2RlbW8vc2NlbmUvaW5kZXgnO1xuLy8gaW1wb3J0ICcuLi9kZW1vL2NvbXBvbmVudHMvaW5kZXgnO1xuLy8gaW1wb3J0ICcuLi9kZW1vL2FuaW1hdGlvbi9pbmRleCc7XG4vLyBpbXBvcnQgJy4uL2RlbW8vZmx5dGVyL2luZGV4Jztcbi8vIGltcG9ydCAnLi4vZGVtby90ZXh0cXVlc3QvaW5kZXgnO1xuLy8gaW1wb3J0ICcuLi9kZW1vL2xvYWRlci9pbmRleCc7XG4vLyBpbXBvcnQgJy4uL2RlbW8vc3BhY2VtYW4vaW5kZXgnO1xuLy8gaW1wb3J0ICcuLi9kZW1vL2Nhci9pbmRleCc7XG4vLyBpbXBvcnQgJy4uL2RlbW8vY2FyMi9pbmRleCc7XG4vLyBpbXBvcnQgJy4uL2RlbW8vZnJhbWVzL2luZGV4Jztcbi8vIGltcG9ydCAnLi4vZGVtby9tZW51L2luZGV4Jztcbi8vIGltcG9ydCAnLi4vZGVtby9zdWJzY3JpYmUvaW5kZXgnO1xuLy8gaW1wb3J0ICcuLi9kZW1vL3RyYW5zZm9ybS9pbmRleCc7XG4vLyBpbXBvcnQgJy4uL2RlbW8vdHJhbnNmb3JtLW1hdHJpeC9pbmRleCc7XG4vLyBpbXBvcnQgJy4uL2RlbW8vbWluaS1nYW1lL2luZGV4JztcbmltcG9ydCAnLi4vZGVtby9nYW1lLWZyYW1lL2luZGV4JztcbiJdLCJzb3VyY2VSb290IjoiIn0=