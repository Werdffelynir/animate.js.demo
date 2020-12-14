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
    if (!window.Animate) {
        return new Error('Animate object not exist!');
    }

    var _window$Animate = window.Animate,
        Clip = _window$Animate.Clip,
        MoveClip = _window$Animate.MoveClip,
        Scene = _window$Animate.Scene,
        Component = _window$Animate.Component,
        Timer = _window$Animate.Timer,
        Roxy = _window$Animate.Roxy,
        KeyboardEventManager = _window$Animate.KeyboardEventManager;
    var _window$Animate$Stati = window.Animate.Static,
        query = _window$Animate$Stati.query,
        search = _window$Animate$Stati.search,
        inject = _window$Animate$Stati.inject,
        typeOf = _window$Animate$Stati.typeOf,
        typeOfStrict = _window$Animate$Stati.typeOfStrict,
        uri = _window$Animate$Stati.uri,
        copy = _window$Animate$Stati.copy,
        on = _window$Animate$Stati.on;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGVtby9mbHl0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGVtby9mbHl0ZXIvc3JjL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzcGxpdCIsImZpbHRlciIsInYiLCJyZXZlcnNlIiwiR2FtZSIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJBbmltYXRlIiwiRXJyb3IiLCJDbGlwIiwiTW92ZUNsaXAiLCJTY2VuZSIsIkNvbXBvbmVudCIsIlRpbWVyIiwiUm94eSIsIktleWJvYXJkRXZlbnRNYW5hZ2VyIiwiU3RhdGljIiwicXVlcnkiLCJzZWFyY2giLCJpbmplY3QiLCJ0eXBlT2YiLCJ0eXBlT2ZTdHJpY3QiLCJ1cmkiLCJjb3B5Iiwib24iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBVCxDQUFrQkMsS0FBbEIsQ0FBd0IsR0FBeEIsRUFBNkJDLE1BQTdCLENBQW9DLFVBQUNDLENBQUQ7QUFBQSxXQUFPQSxDQUFQO0FBQUEsQ0FBcEMsRUFBOENDLE9BQTlDLEdBQXdELENBQXhELE1BQStELFFBQW5FLEVBQTZFO0FBQ3pFO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEQsSUFBTUMsT0FBTyxTQUFQQSxJQUFPLEdBQVk7QUFDckJDLFlBQVFDLEdBQVIsQ0FBWSxXQUFaO0FBQ0EsUUFBSSxDQUFFQyxPQUFPQyxPQUFiLEVBQXVCO0FBQ25CLGVBQU8sSUFBSUMsS0FBSixDQUFVLDJCQUFWLENBQVA7QUFDSDs7QUFKb0IsMEJBY2pCRixPQUFPQyxPQWRVO0FBQUEsUUFPakJFLElBUGlCLG1CQU9qQkEsSUFQaUI7QUFBQSxRQVFqQkMsUUFSaUIsbUJBUWpCQSxRQVJpQjtBQUFBLFFBU2pCQyxLQVRpQixtQkFTakJBLEtBVGlCO0FBQUEsUUFVakJDLFNBVmlCLG1CQVVqQkEsU0FWaUI7QUFBQSxRQVdqQkMsS0FYaUIsbUJBV2pCQSxLQVhpQjtBQUFBLFFBWWpCQyxJQVppQixtQkFZakJBLElBWmlCO0FBQUEsUUFhakJDLG9CQWJpQixtQkFhakJBLG9CQWJpQjtBQUFBLGdDQXlCakJULE9BQU9DLE9BQVAsQ0FBZVMsTUF6QkU7QUFBQSxRQWlCakJDLEtBakJpQix5QkFpQmpCQSxLQWpCaUI7QUFBQSxRQWtCakJDLE1BbEJpQix5QkFrQmpCQSxNQWxCaUI7QUFBQSxRQW1CakJDLE1BbkJpQix5QkFtQmpCQSxNQW5CaUI7QUFBQSxRQW9CakJDLE1BcEJpQix5QkFvQmpCQSxNQXBCaUI7QUFBQSxRQXFCakJDLFlBckJpQix5QkFxQmpCQSxZQXJCaUI7QUFBQSxRQXNCakJDLEdBdEJpQix5QkFzQmpCQSxHQXRCaUI7QUFBQSxRQXVCakJDLElBdkJpQix5QkF1QmpCQSxJQXZCaUI7QUFBQSxRQXdCakJDLEVBeEJpQix5QkF3QmpCQSxFQXhCaUI7QUEyQnhCLENBM0JEOztrQkE2QmVyQixJOzs7Ozs7Ozs7Ozs7OztBQ3JCZiwwRSIsImZpbGUiOiJkZW1vLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9zcmMvR2FtZSc7XG5cbmlmIChsb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpLmZpbHRlcigodikgPT4gdikucmV2ZXJzZSgpWzBdID09PSAnZmx5dGVyJykge1xuICAgIEdhbWUoKTtcbn0iLCJcbmNvbnN0IEdhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coJ0dhbWUgZGVtbycpO1xuICAgIGlmICghIHdpbmRvdy5BbmltYXRlICkge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdBbmltYXRlIG9iamVjdCBub3QgZXhpc3QhJyk7XG4gICAgfVxuXG4gICAgY29uc3Qge1xuICAgICAgICBDbGlwLFxuICAgICAgICBNb3ZlQ2xpcCxcbiAgICAgICAgU2NlbmUsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgVGltZXIsXG4gICAgICAgIFJveHksXG4gICAgICAgIEtleWJvYXJkRXZlbnRNYW5hZ2VyLFxuICAgIH0gPSB3aW5kb3cuQW5pbWF0ZTtcblxuICAgIGNvbnN0IHtcbiAgICAgICAgcXVlcnksXG4gICAgICAgIHNlYXJjaCxcbiAgICAgICAgaW5qZWN0LFxuICAgICAgICB0eXBlT2YsXG4gICAgICAgIHR5cGVPZlN0cmljdCxcbiAgICAgICAgdXJpLFxuICAgICAgICBjb3B5LFxuICAgICAgICBvbixcbiAgICB9ID0gd2luZG93LkFuaW1hdGUuU3RhdGljO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIiwiLy8gbnBtIHJ1biB3YXRjaFxuXG4vLyBpbXBvcnQgJy4uLy4uL2FuaW1hdGUuanMvc3JjL2luZGV4JztcblxuLy8gaW1wb3J0ICcuLi9kZW1vL2RlbW8vaW5kZXgnO1xuLy8gaW1wb3J0ICcuLi9kZW1vL21vdmUvaW5kZXgnO1xuLy8gaW1wb3J0ICcuLi9kZW1vL3NjZW5lL2luZGV4Jztcbi8vIGltcG9ydCAnLi4vZGVtby9jb21wb25lbnRzL2luZGV4Jztcbi8vIGltcG9ydCAnLi4vZGVtby9hbmltYXRpb24vaW5kZXgnO1xuaW1wb3J0ICcuLi9kZW1vL2ZseXRlci9pbmRleCc7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=