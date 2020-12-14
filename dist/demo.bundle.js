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

/***/ "./demo/flyter/index.js":
/*!******************************!*\
  !*** ./demo/flyter/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Game = __webpack_require__(/*! ./src/Game */ "./demo/flyter/src/Game.js");

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (location.pathname.split('/').filter(function (v) {
    return v;
}).reverse()[0] === 'flyter') {
    (0, _Game2.default)();
}

/***/ }),

/***/ "./demo/flyter/src/Game.js":
/*!*********************************!*\
  !*** ./demo/flyter/src/Game.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var Game = function Game() {
    console.log('Game demo');
    if (!window.Animate || !window.Animate.Static) {
        return new Error('Animate object not exist!');
    }

    var _window$Animate = window.Animate,
        Clip = _window$Animate.Clip,
        Component = _window$Animate.Component,
        KeyboardEventManager = _window$Animate.KeyboardEventManager,
        MoveClip = _window$Animate.MoveClip,
        Scene = _window$Animate.Scene,
        StepsScene = _window$Animate.StepsScene,
        Timer = _window$Animate.Timer,
        RoxyListener = _window$Animate.RoxyListener,
        Roxy = _window$Animate.Roxy,
        AnimationFrame = _window$Animate.AnimationFrame;
    var _window$Animate$Stati = window.Animate.Static,
        createElement = _window$Animate$Stati.createElement,
        query = _window$Animate$Stati.query,
        search = _window$Animate$Stati.search,
        inject = _window$Animate$Stati.inject,
        typeOf = _window$Animate$Stati.typeOf,
        uri = _window$Animate$Stati.uri,
        copy = _window$Animate$Stati.copy,
        each = _window$Animate$Stati.each,
        on = _window$Animate$Stati.on,
        random = _window$Animate$Stati.random;


    var appNode = query('#app');
    var pointNode = query('#point');

    var ms = MoveClip({
        element: pointNode,
        x: random(100, 260),
        y: 0,
        speed: 0.3
    });

    var createRoadMC = function createRoadMC() {
        var element = document.createElement('div');
        each(30, function () {
            element.appendChild(createElement('div', { class: 'mc-road' }));
        });
        element.className = 'mc ';
        var mc = MoveClip({
            element: element,
            x: 200,
            y: -500,
            speed: 0.4
        });
        appNode.appendChild(element);
        return mc;
    };
    var createCarMC = function createCarMC() {};
    var createPlayerMC = function createPlayerMC() {
        var element = document.createElement('div');
        element.className = 'mc mc-player';
        var mc = MoveClip({
            element: element,
            x: 220,
            y: 500,
            speed: 1,
            speedX: 1
        });
        appNode.appendChild(element);
        return mc;
    };

    var roadMC = createRoadMC();
    var playerMC = createPlayerMC();

    var keyboard = KeyboardEventManager();
    keyboard.left = false;
    keyboard.right = false;
    keyboard.up = false;
    keyboard.down = false;
    keyboard.each('keydown', function (event) {
        if (event.code === 'KeyA') keyboard.left = true;
        if (event.code === 'KeyD') keyboard.right = true;
        if (event.code === 'KeyW') keyboard.up = true;
        if (event.code === 'KeyS') keyboard.down = true;
    });
    keyboard.each('keyup', function (event) {
        if (event.code === 'KeyA') keyboard.left = false;
        if (event.code === 'KeyD') keyboard.right = false;
        if (event.code === 'KeyW') keyboard.up = false;
        if (event.code === 'KeyS') keyboard.down = false;
    });

    AnimationFrame().start(function (iter) {
        ms.y += roadMC.speed + ms.speed;
        if (ms.y > window.innerHeight - ms.height) {
            ms.y = -50;
            ms.x = random(100, 260);
        }

        if (keyboard.left) {
            playerMC.x -= playerMC.speedX;
        }
        if (keyboard.right) {
            playerMC.x += playerMC.speedX;
        }
        if (keyboard.up) {
            roadMC.speed += 0.1;
        }
        if (keyboard.down) {
            roadMC.speed -= 0.1;
        }

        roadMC.y += roadMC.speed;
        if (roadMC.y > 0) {
            roadMC.y = -500;
        }
    });
};

exports.default = Game;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../demo/flyter/index */ "./demo/flyter/index.js");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGVtby9mbHl0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGVtby9mbHl0ZXIvc3JjL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzcGxpdCIsImZpbHRlciIsInYiLCJyZXZlcnNlIiwiR2FtZSIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJBbmltYXRlIiwiU3RhdGljIiwiRXJyb3IiLCJDbGlwIiwiQ29tcG9uZW50IiwiS2V5Ym9hcmRFdmVudE1hbmFnZXIiLCJNb3ZlQ2xpcCIsIlNjZW5lIiwiU3RlcHNTY2VuZSIsIlRpbWVyIiwiUm94eUxpc3RlbmVyIiwiUm94eSIsIkFuaW1hdGlvbkZyYW1lIiwiY3JlYXRlRWxlbWVudCIsInF1ZXJ5Iiwic2VhcmNoIiwiaW5qZWN0IiwidHlwZU9mIiwidXJpIiwiY29weSIsImVhY2giLCJvbiIsInJhbmRvbSIsImFwcE5vZGUiLCJwb2ludE5vZGUiLCJtcyIsImVsZW1lbnQiLCJ4IiwieSIsInNwZWVkIiwiY3JlYXRlUm9hZE1DIiwiZG9jdW1lbnQiLCJhcHBlbmRDaGlsZCIsImNsYXNzIiwiY2xhc3NOYW1lIiwibWMiLCJjcmVhdGVDYXJNQyIsImNyZWF0ZVBsYXllck1DIiwic3BlZWRYIiwicm9hZE1DIiwicGxheWVyTUMiLCJrZXlib2FyZCIsImxlZnQiLCJyaWdodCIsInVwIiwiZG93biIsImV2ZW50IiwiY29kZSIsInN0YXJ0IiwiaXRlciIsImlubmVySGVpZ2h0IiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFD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QUNIO0FBQ0QsWUFBSUcsU0FBU0csRUFBYixFQUFrQjtBQUNkTCxtQkFBT1YsS0FBUCxJQUFnQixHQUFoQjtBQUNIO0FBQ0QsWUFBSVksU0FBU0ksSUFBYixFQUFvQjtBQUNoQk4sbUJBQU9WLEtBQVAsSUFBZ0IsR0FBaEI7QUFDSDs7QUFFRFUsZUFBT1gsQ0FBUCxJQUFZVyxPQUFPVixLQUFuQjtBQUNBLFlBQUlVLE9BQU9YLENBQVAsR0FBVyxDQUFmLEVBQWtCO0FBQ2RXLG1CQUFPWCxDQUFQLEdBQVcsQ0FBQyxHQUFaO0FBQ0g7QUFDSixLQXhCRDtBQXlCSCxDQXRIRDs7a0JBd0hlaEMsSTs7Ozs7Ozs7Ozs7Ozs7QUNoSGYsMEUiLCJmaWxlIjoiZGVtby5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBHYW1lIGZyb20gJy4vc3JjL0dhbWUnO1xuXG5pZiAobG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKS5maWx0ZXIoKHYpID0+IHYpLnJldmVyc2UoKVswXSA9PT0gJ2ZseXRlcicpIHtcbiAgICBHYW1lKCk7XG59IiwiXG5jb25zdCBHYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKCdHYW1lIGRlbW8nKTtcbiAgICBpZiAoISB3aW5kb3cuQW5pbWF0ZSB8fCAhIHdpbmRvdy5BbmltYXRlLlN0YXRpYyApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignQW5pbWF0ZSBvYmplY3Qgbm90IGV4aXN0IScpO1xuICAgIH1cblxuICAgIGNvbnN0IHtcbiAgICAgICAgQ2xpcCxcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBLZXlib2FyZEV2ZW50TWFuYWdlcixcbiAgICAgICAgTW92ZUNsaXAsXG4gICAgICAgIFNjZW5lLFxuICAgICAgICBTdGVwc1NjZW5lLFxuICAgICAgICBUaW1lcixcbiAgICAgICAgUm94eUxpc3RlbmVyLFxuICAgICAgICBSb3h5LFxuICAgICAgICBBbmltYXRpb25GcmFtZSxcbiAgICB9ID0gd2luZG93LkFuaW1hdGU7XG5cbiAgICBjb25zdCB7XG4gICAgICAgIGNyZWF0ZUVsZW1lbnQsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBzZWFyY2gsXG4gICAgICAgIGluamVjdCxcbiAgICAgICAgdHlwZU9mLFxuICAgICAgICB1cmksXG4gICAgICAgIGNvcHksXG4gICAgICAgIGVhY2gsXG4gICAgICAgIG9uLFxuICAgICAgICByYW5kb20sXG4gICAgfSA9IHdpbmRvdy5BbmltYXRlLlN0YXRpYztcblxuICAgIGNvbnN0IGFwcE5vZGUgPSBxdWVyeSgnI2FwcCcpO1xuICAgIGNvbnN0IHBvaW50Tm9kZSA9IHF1ZXJ5KCcjcG9pbnQnKTtcblxuICAgIGNvbnN0IG1zID0gTW92ZUNsaXAoe1xuICAgICAgICBlbGVtZW50OiBwb2ludE5vZGUsXG4gICAgICAgIHg6IHJhbmRvbSgxMDAsIDI2MCksXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHNwZWVkOiAwLjMsXG4gICAgfSk7XG5cbiAgICBjb25zdCBjcmVhdGVSb2FkTUMgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVhY2goMzAsICgpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnbWMtcm9hZCd9KSk7XG4gICAgICAgIH0pO1xuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9ICdtYyAnO1xuICAgICAgICBjb25zdCBtYyA9IE1vdmVDbGlwKHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICAgICAgICB4OiAyMDAsXG4gICAgICAgICAgICB5OiAtNTAwLFxuICAgICAgICAgICAgc3BlZWQ6IDAuNCxcbiAgICAgICAgfSk7XG4gICAgICAgIGFwcE5vZGUuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIHJldHVybiBtYztcbiAgICB9O1xuICAgIGNvbnN0IGNyZWF0ZUNhck1DID0gZnVuY3Rpb24oKXt9O1xuICAgIGNvbnN0IGNyZWF0ZVBsYXllck1DID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9ICdtYyBtYy1wbGF5ZXInO1xuICAgICAgICBjb25zdCBtYyA9IE1vdmVDbGlwKHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICAgICAgICB4OiAyMjAsXG4gICAgICAgICAgICB5OiA1MDAsXG4gICAgICAgICAgICBzcGVlZDogMSxcbiAgICAgICAgICAgIHNwZWVkWDogMSxcbiAgICAgICAgfSk7XG4gICAgICAgIGFwcE5vZGUuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIHJldHVybiBtYztcbiAgICB9O1xuXG4gICAgY29uc3Qgcm9hZE1DID0gY3JlYXRlUm9hZE1DKCk7XG4gICAgY29uc3QgcGxheWVyTUMgPSBjcmVhdGVQbGF5ZXJNQygpO1xuXG4gICAgY29uc3Qga2V5Ym9hcmQgPSBLZXlib2FyZEV2ZW50TWFuYWdlcigpO1xuICAgIGtleWJvYXJkLmxlZnQgPSBmYWxzZTtcbiAgICBrZXlib2FyZC5yaWdodCA9IGZhbHNlO1xuICAgIGtleWJvYXJkLnVwID0gZmFsc2U7XG4gICAga2V5Ym9hcmQuZG93biA9IGZhbHNlO1xuICAgIGtleWJvYXJkLmVhY2goJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdLZXlBJykga2V5Ym9hcmQubGVmdCA9IHRydWU7XG4gICAgICAgIGlmIChldmVudC5jb2RlID09PSAnS2V5RCcpIGtleWJvYXJkLnJpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdLZXlXJykga2V5Ym9hcmQudXAgPSB0cnVlO1xuICAgICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0tleVMnKSBrZXlib2FyZC5kb3duID0gdHJ1ZTtcbiAgICB9KVxuICAgIGtleWJvYXJkLmVhY2goJ2tleXVwJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5jb2RlID09PSAnS2V5QScpIGtleWJvYXJkLmxlZnQgPSBmYWxzZTtcbiAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdLZXlEJykga2V5Ym9hcmQucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdLZXlXJykga2V5Ym9hcmQudXAgPSBmYWxzZTtcbiAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdLZXlTJykga2V5Ym9hcmQuZG93biA9IGZhbHNlO1xuICAgIH0pXG5cbiAgICBBbmltYXRpb25GcmFtZSgpLnN0YXJ0KChpdGVyKSA9PiB7XG4gICAgICAgIG1zLnkgKz0gcm9hZE1DLnNwZWVkICsgbXMuc3BlZWQ7XG4gICAgICAgIGlmIChtcy55ID4gd2luZG93LmlubmVySGVpZ2h0IC0gbXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICBtcy55ID0gLTUwO1xuICAgICAgICAgICAgbXMueCA9IHJhbmRvbSgxMDAsIDI2MCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5Ym9hcmQubGVmdCApIHtcbiAgICAgICAgICAgIHBsYXllck1DLnggLT0gcGxheWVyTUMuc3BlZWRYO1xuICAgICAgICB9XG4gICAgICAgIGlmIChrZXlib2FyZC5yaWdodCApIHtcbiAgICAgICAgICAgIHBsYXllck1DLnggKz0gcGxheWVyTUMuc3BlZWRYO1xuICAgICAgICB9XG4gICAgICAgIGlmIChrZXlib2FyZC51cCApIHtcbiAgICAgICAgICAgIHJvYWRNQy5zcGVlZCArPSAwLjE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleWJvYXJkLmRvd24gKSB7XG4gICAgICAgICAgICByb2FkTUMuc3BlZWQgLT0gMC4xO1xuICAgICAgICB9XG5cbiAgICAgICAgcm9hZE1DLnkgKz0gcm9hZE1DLnNwZWVkO1xuICAgICAgICBpZiAocm9hZE1DLnkgPiAwKSB7XG4gICAgICAgICAgICByb2FkTUMueSA9IC01MDA7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iLCIvLyBucG0gcnVuIHdhdGNoXG5cbi8vIGltcG9ydCAnLi4vLi4vYW5pbWF0ZS5qcy9zcmMvaW5kZXgnO1xuXG4vLyBpbXBvcnQgJy4uL2RlbW8vZGVtby9pbmRleCc7XG4vLyBpbXBvcnQgJy4uL2RlbW8vbW92ZS9pbmRleCc7XG4vLyBpbXBvcnQgJy4uL2RlbW8vc2NlbmUvaW5kZXgnO1xuLy8gaW1wb3J0ICcuLi9kZW1vL2NvbXBvbmVudHMvaW5kZXgnO1xuLy8gaW1wb3J0ICcuLi9kZW1vL2FuaW1hdGlvbi9pbmRleCc7XG5pbXBvcnQgJy4uL2RlbW8vZmx5dGVyL2luZGV4JztcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==