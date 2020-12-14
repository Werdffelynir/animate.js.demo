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

/***/ "../animate.js/dist/animate.bundle.js":
/*!********************************************!*\
  !*** ../animate.js/dist/animate.bundle.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/******/(function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/var installedModules = {};
    /******/
    /******/ // The require function
    /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
            /******/return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
            /******/i: moduleId,
            /******/l: false,
            /******/exports: {}
            /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/__webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/__webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
            /******/Object.defineProperty(exports, name, { enumerable: true, get: getter });
            /******/
        }
        /******/
    };
    /******/
    /******/ // define __esModule on exports
    /******/__webpack_require__.r = function (exports) {
        /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
            /******/
        }
        /******/Object.defineProperty(exports, '__esModule', { value: true });
        /******/
    };
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/__webpack_require__.t = function (value, mode) {
        /******/if (mode & 1) value = __webpack_require__(value);
        /******/if (mode & 8) return value;
        /******/if (mode & 4 && (typeof value === 'undefined' ? 'undefined' : _typeof2(value)) === 'object' && value && value.__esModule) return value;
        /******/var ns = Object.create(null);
        /******/__webpack_require__.r(ns);
        /******/Object.defineProperty(ns, 'default', { enumerable: true, value: value });
        /******/if (mode & 2 && typeof value != 'string') for (var key in value) {
            __webpack_require__.d(ns, key, function (key) {
                return value[key];
            }.bind(null, key));
        } /******/return ns;
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
            return module['default'];
        } :
        /******/function getModuleExports() {
            return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/__webpack_require__.p = "";
    /******/
    /******/
    /******/ // Load entry module and return exports
    /******/return __webpack_require__(__webpack_require__.s = "./src/index.js");
    /******/
})(
/************************************************************************/
/******/{

    /***/"./src/components/AnimationFrame.js":
    /*!******************************************!*\
      !*** ./src/components/AnimationFrame.js ***!
      \******************************************/
    /*! no static exports found */
    /***/function srcComponentsAnimationFrameJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var AnimationFrame = function AnimationFrame() {
            // this.constructor = function Animation() {};
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

        /***/
    },

    /***/"./src/components/Clip.js":
    /*!********************************!*\
      !*** ./src/components/Clip.js ***!
      \********************************/
    /*! no static exports found */
    /***/function srcComponentsClipJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.ClipClass = undefined;

        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
            }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
            };
        }();

        var _position = __webpack_require__( /*! ../static/position */"./src/static/position.js");

        var _position2 = _interopRequireDefault(_position);

        var _copy = __webpack_require__( /*! ../static/copy */"./src/static/copy.js");

        var _copy2 = _interopRequireDefault(_copy);

        var _clone2 = __webpack_require__( /*! ../static/clone */"./src/static/clone.js");

        var _clone3 = _interopRequireDefault(_clone2);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var ClipClass = exports.ClipClass = function () {
            function ClipClass(element) {
                _classCallCheck(this, ClipClass);

                this.position = (0, _position2.default)(element);
                this.element = _position2.default.element;
                this.setProperties();
            }

            _createClass(ClipClass, [{
                key: "moveTo",
                value: function moveTo(parent) {
                    if (parent instanceof Clip) {
                        return parent.element.appendChild(this.element);
                    }
                    if (parent instanceof Node) {
                        return parent.appendChild(this.element);
                    }
                }
            }, {
                key: "copyTo",
                value: function copyTo(parent) {
                    this.element = (0, _copy2.default)(this.element);
                    this.moveTo(parent);
                }
            }, {
                key: "on",
                value: function on(event, callback) {
                    this.element.addEventListener(event, callback);
                }
            }, {
                key: "clone",
                value: function clone() {
                    return (0, _clone3.default)(this);
                }
            }, {
                key: "setProperties",
                value: function setProperties() {
                    Object.keys(this.position).map(function (key) {
                        if (typeof this[key] === "undefined") {
                            this[key] = this.position[key];
                        }
                    });

                    if (this.element instanceof Node) {
                        var parent = (0, _position2.default)(this.element.parentNode);
                        this.x = this.x - parent.x;
                        this.y = this.y - parent.y;
                        this.element.setAttribute('data-clip', this.element.id || 'clip');
                    }
                }
            }]);

            return ClipClass;
        }();
        /**
         *
         * @param element
         * @returns { bottom, element, height, left, right, top, width, x, y }
         * @constructor
         */

        var Clip = function Clip(element) {
            var root = (0, _position2.default)(element);

            if (root.element instanceof Node) {
                var parent = (0, _position2.default)(element.parentNode);
                root.x = root.x - parent.x;
                root.y = root.y - parent.y;
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

            root.copyTo = function (parentElement) {
                root.element = (0, _copy2.default)(root.element);
                root.moveTo(parentElement);
            };

            root.on = function (event, callback) {
                root.element.addEventListener(event, callback);
            };

            root.clone = function () {
                return (0, _clone3.default)(this);
            };

            return root;
        };

        exports.default = Clip;

        /***/
    },

    /***/"./src/components/Component.js":
    /*!*************************************!*\
      !*** ./src/components/Component.js ***!
      \*************************************/
    /*! no static exports found */
    /***/function srcComponentsComponentJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.ComponentClass = exports.ComponentClassProperties = undefined;

        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
            }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
            };
        }();

        var _str2node = __webpack_require__( /*! ../static/str2node */"./src/static/str2node.js");

        var _str2node2 = _interopRequireDefault(_str2node);

        var _isNode = __webpack_require__( /*! ../static/isNode */"./src/static/isNode.js");

        var _isNode2 = _interopRequireDefault(_isNode);

        var _merge = __webpack_require__( /*! ../static/merge */"./src/static/merge.js");

        var _merge2 = _interopRequireDefault(_merge);

        var _search = __webpack_require__( /*! ../static/search */"./src/static/search.js");

        var _search2 = _interopRequireDefault(_search);

        var _Roxy = __webpack_require__( /*! ./Roxy */"./src/components/Roxy.js");

        var _Roxy2 = _interopRequireDefault(_Roxy);

        var _clone2 = __webpack_require__( /*! ../static/clone */"./src/static/clone.js");

        var _clone3 = _interopRequireDefault(_clone2);

        var _random = __webpack_require__( /*! ../static/random */"./src/static/random.js");

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var ComponentClassProperties = exports.ComponentClassProperties = {
            id: null,
            props: {},
            template: false,
            element: false,
            override: false,
            before: function before() {},
            init: function init() {},
            data: function data() {},
            complete: function complete() {},
            methods: {},
            node: {},
            on: {},
            initialized: false,
            completed: false,
            components: {},
            children: [],
            parent: {}
        };

        /**
         * @property id
         * @property props
         * @property template
         * @property element
         * @property override
         * @property before [Function]
         * @property init [Function]
         * @property data [Function]
         * @property complete [Function]
         * @property methods
         * @property node
         * @property on
         * @property initialized
         * @property completed
         * @property components
         * @property children
         * @property parent
         */

        var ComponentClass = exports.ComponentClass = function () {
            /**
             *
             * @param properties
             */
            function ComponentClass() {
                var _this = this;

                var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                _classCallCheck(this, ComponentClass);

                this.setProperties(properties);

                if (typeof this.before === 'function' && !this.initialized) {
                    this.before();
                }
                if (typeof this.element === 'string') {
                    this.element = (0, _str2node2.default)(this.element);
                }
                if (this.methods && Object.values(this.methods).length) {
                    Object.keys(this.methods).forEach(function (key) {
                        if (typeof _this.methods[key] === 'function') {
                            _this.methods[key] = _this.methods[key].bind(_this);
                            if (!_this.hasOwnProperty(key)) {
                                _this[key] = _this.methods[key];
                            }
                        }
                    });
                }

                if (typeof this.init === 'function' && !this.initialized) {
                    this.initialized = true;
                    this.init();
                }

                if (this.data && Object.keys(this.data).length) {
                    Object.keys(this.data).forEach(function (key) {
                        if (typeof _this.data[key] === 'function') {
                            _this.data[key] = _this.data[key].bind(_this);
                        }
                        if (!_this.hasOwnProperty(key)) {
                            _this[key] = _this.data[key];
                        }
                    });
                }

                if (this.components && Object.keys(this.components).length) {
                    Object.keys(this.components).forEach(function (key) {
                        if (_this.components[key] && _this.components[key].hasOwnProperty('key')) {
                            _this.components[key].parent = _this;
                        }
                        _this.children.push(_this.components[key]);
                    });
                }

                if (false) {}

                if (typeof this.complete === 'function' && !this.completed) {
                    if (document) {
                        document.addEventListener('DOMContentLoaded', function () {
                            _this.completed = true;
                            _this.complete.call(_this.complete, _this);
                        });
                    } else {
                        this.completed = true;
                        this.complete.call(this.complete, this);
                    }
                }

                Component.list[this.id] = this;
            }

            _createClass(ComponentClass, [{
                key: "component",
                value: function component(name) {
                    return ComponentClass.list[name];
                }
            }, {
                key: "componentChildren",
                value: function componentChildren(name) {
                    return ComponentClass.list[name];
                }
            }, {
                key: "clone",
                value: function clone(id) {
                    var cloned = (0, _clone3.default)(this);
                    cloned.template = cloned.template.cloneNode(true);
                    return cloned;
                }
            }, {
                key: "setProperties",
                value: function setProperties(properties) {
                    properties = (0, _merge2.default)(ComponentClassProperties, properties);
                    Object.keys(properties).map(function (key) {
                        if (typeof this[key] === "undefined") {
                            this[key] = properties[key];
                        }
                    });
                    return properties;
                }
            }, {
                key: "template",
                set: function set(template) {
                    if (typeof template === 'string') {
                        this.element = (0, _str2node2.default)(template);
                    }
                    if ((0, _isNode2.default)(template)) {
                        this.element = template;
                    }
                },
                get: function get() {
                    return this.element;
                }
            }]);

            return ComponentClass;
        }();

        ComponentClass.list = {};

        /**
         *
        config:
            id: 'id',
            props: {},
            template: ``,
            init () {},
            data: {},
            complete () {},
            methods: {},
            node: {},
            components: {},
            override: false,
            initialized: false,
            completed: false,
        
        Component({
            id: 'ExternalTemplateComponent',
            props: ['title'],
            template: 'template',
            init () {},
            data: {
                iterator: 0,
            },
            complete (app) {
                if (this.node['title'])
                this.node['title'].textContent = this.title;
            },
            methods: {
                add (e) {
                    this.node.iterator.textContent = ++ this.data.iterator ;
                },
                min (e) {
                    this.node.iterator.textContent = -- this.data.iterator ;
                },
            }
        });
        
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

                comp.component = function (id) {
                    return comp.components[id] ? comp.components[id] : null;
                };

                comp.componentChildren = function (id) {
                    return comp.children.find(function (component) {
                        return component.id === id;
                    });
                };

                comp.clone = function (id) {
                    var cloned = (0, _clone3.default)(this);
                    cloned.template = cloned.template.cloneNode(true);
                    return cloned;
                };

                if (typeof comp.before === 'function' && !comp.initialized) {
                    comp.before();
                }

                if (typeof comp.template === 'string') {
                    comp.template = (0, _str2node2.default)(comp.template);
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

                if (typeof comp.init === 'function' && !comp.initialized) {
                    comp.initialized = true;
                    comp.init();
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
                        if (comp.components[key] && comp.components[key].hasOwnProperty('key')) {
                            comp.components[key].parent = comp;
                        }
                        comp.children.push(comp.components[key]);
                    });
                }

                if ((0, _isNode2.default)(comp.template)) {
                    comp.node = (0, _search2.default)('[data-node]', 'data-node', comp.template);
                    comp.on = (0, _search2.default)('[data-on]', 'data-on', comp.template);
                }

                if (typeof comp.complete === 'function' && !comp.completed) {
                    if (document) {
                        document.addEventListener('DOMContentLoaded', function () {
                            comp.completed = true;
                            comp.complete.call(comp, comp);
                        });
                    } else {
                        comp.completed = true;
                        comp.complete.call(comp, comp);
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
                components: {},
                children: [],
                parent: {}
            }, config);
        };

        exports.default = Component;

        /***/
    },

    /***/"./src/components/KeyboardEventManager.js":
    /*!************************************************!*\
      !*** ./src/components/KeyboardEventManager.js ***!
      \************************************************/
    /*! no static exports found */
    /***/function srcComponentsKeyboardEventManagerJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        /*
        const keyboard = KeyboardEventManager();
        keyboard.each(EVENT_NAME, function (event) {})
        keyboard.withConditionKey
        keyboard.press
        keyboard.up
        keyboard.down
        */
        var KeyboardEventManager = function KeyboardEventManager() {
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
                var add = function add() {
                    Object.keys(baseCallbacksList).map(function (event) {
                        document.addEventListener(event, baseCallbacksList[event]);
                    });
                    Object.keys(eachCallbacksList).map(function (event) {
                        document.addEventListener(event, eachCallbacksList[event]);
                    });
                };
                var rm = function rm() {
                    Object.keys(baseCallbacksList).map(function (event) {
                        document.removeEventListener(event, baseCallbacksList[event]);
                    });
                    Object.keys(eachCallbacksList).map(function (event) {
                        document.removeEventListener(event, eachCallbacksList[event]);
                    });
                };
                rm();
                add();
            }

            var root = {
                each: function each(event, callback) {
                    eachCallback(event, callback);
                    setupListeners();
                },
                withConditionKey: function withConditionKey(event, key, callback) {
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

        exports.default = KeyboardEventManager;

        /***/
    },

    /***/"./src/components/MoveClip.js":
    /*!************************************!*\
      !*** ./src/components/MoveClip.js ***!
      \************************************/
    /*! no static exports found */
    /***/function srcComponentsMoveClipJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.MoveClipClass = undefined;

        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
            }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
            };
        }();

        var _Clip = __webpack_require__( /*! ./Clip */"./src/components/Clip.js");

        var _Clip2 = _interopRequireDefault(_Clip);

        var _toObject = __webpack_require__( /*! ../static/toObject */"./src/static/toObject.js");

        var _toObject2 = _interopRequireDefault(_toObject);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var MoveClipClass = exports.MoveClipClass = function () {
            function MoveClipClass(properties) {
                _classCallCheck(this, MoveClipClass);

                var element = properties.element;

                var clip = (0, _Clip2.default)(element);

                this.properties = properties;
                this.element = clip.element;
                this.clip = clip;
                this.init = false;
                this.initialized = false;
                this.setProperties();

                if (typeof this.init === 'function' && !this.initialized) {
                    this.initialized = true;
                    this.init();
                }
            }

            _createClass(MoveClipClass, [{
                key: "clone",
                value: function clone() {
                    var append = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

                    var props = (0, _toObject2.default)(this);
                    props.element = this.element.cloneNode(true);
                    if (append && this.element) this.element.parentNode.appendChild(props.element);

                    return new MoveClipClass(props);
                }
            }, {
                key: "setProperties",
                value: function setProperties() {
                    Object.keys(this.properties).map(function (key) {
                        if (typeof this[key] === "undefined") {
                            this[key] = this.properties[key];
                        }
                    });
                    this.element.setAttribute('data-miveclip', this.properties.id || 'miveclip');
                }
            }, {
                key: "x",
                get: function get() {
                    return this.clip.x;
                },
                set: function set(value) {
                    this.element.style.marginLeft = value + 'px';
                    this.clip.x = value;
                }
            }, {
                key: "y",
                get: function get() {
                    return this.clip.y;
                },
                set: function set(value) {
                    this.element.style.marginTop = value + 'px';
                    this.clip.y = value;
                }
            }, {
                key: "width",
                get: function get() {
                    return this.clip.width;
                },
                set: function set(value) {
                    this.element.style.width = value + 'px';
                    this.clip.width = value;
                }
            }, {
                key: "height",
                get: function get() {
                    return this.clip.height;
                },
                set: function set(value) {
                    this.element.style.height = value + 'px';
                    this.clip.height = value;
                }
            }]);

            return MoveClipClass;
        }();

        var MoveClip = function MoveClip(config) {
            var element = config.element;

            var clip = (0, _Clip2.default)(element);

            if (!clip.element) {
                throw new Error('Property [element] not fond!');
            }
            clip.element.setAttribute('data-miveclip', config.id || 'miveclip');

            var root = {
                element: clip.element,
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
                }
            };

            Object.keys(config).map(function (key) {
                root[key] = config[key];
            });

            if (typeof root.init === 'function' && !root.initialized) {
                root.initialized = true;
                root.init();
            }

            root.clone = function () {
                var append = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

                var cloneProperty = (0, _toObject2.default)(root);
                cloneProperty.element = root.element.cloneNode(root);
                if (append) {
                    root.element.parentNode.appendChild(cloneProperty.element);
                }
                return MoveClip(cloneProperty);
            };

            return root;
        };

        exports.default = MoveClip;

        /***/
    },

    /***/"./src/components/Roxy.js":
    /*!********************************!*\
      !*** ./src/components/Roxy.js ***!
      \********************************/
    /*! no static exports found */
    /***/function srcComponentsRoxyJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _copy = __webpack_require__( /*! ../static/copy */"./src/static/copy.js");

        var _copy2 = _interopRequireDefault(_copy);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

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
        }; /**
            *
           
           
            const rxData = Roxy({
                   title: '',
                   body: '',
               });
           
            function setTo(id, context) {
                   const elem = query('#' + id);
                   inject(elem, context);
               }
           
            rxData.event((key, values)=>{
                   setTo(key, values);
               });
           
            Timer.timeout(() => {
                   rxData.dispatch('title', 'Hello friend');
                   rxData.dispatch('body', 'Do you happy now?');
               }, 2000);
           
            Timer.timeout(() => {
                   rxData.dispatch('body', 'No yes ofcourse');
               }, 4000);
            *
            *
            * @param payload
            * @returns {{proxy: *, set(*=, *=): *, get(*): *, action(*=, *=): *, fill(*=, *=): *}|Roxy|{}|null|boolean}
            * @constructor
            */
        exports.default = Roxy;

        /***/
    },

    /***/"./src/components/RoxyListener.js":
    /*!****************************************!*\
      !*** ./src/components/RoxyListener.js ***!
      \****************************************/
    /*! no static exports found */
    /***/function srcComponentsRoxyListenerJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _Roxy = __webpack_require__( /*! ./Roxy */"./src/components/Roxy.js");

        var _Roxy2 = _interopRequireDefault(_Roxy);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

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

        /***/
    },

    /***/"./src/components/Scene.js":
    /*!*********************************!*\
      !*** ./src/components/Scene.js ***!
      \*********************************/
    /*! no static exports found */
    /***/function srcComponentsSceneJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.SceneClass = undefined;

        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
            }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
            };
        }();

        var _clone2 = __webpack_require__( /*! ../static/clone */"./src/static/clone.js");

        var _clone3 = _interopRequireDefault(_clone2);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var SceneClass = exports.SceneClass = function () {
            function SceneClass() {
                var _this = this;

                var layers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                _classCallCheck(this, SceneClass);

                this.current = 'default';
                this.layers = {
                    default: function _default() {
                        console.log('[Default Scene]');
                    }
                };

                Object.keys(layers).forEach(function (key) {
                    _this.add(key, layers[key]);
                });
            }

            _createClass(SceneClass, [{
                key: 'add',
                value: function add(name, callback) {
                    this.layers[name] = callback;
                }
            }, {
                key: 'get',
                value: function get(name) {
                    return this.layers[name];
                }
            }, {
                key: 'next',
                value: function next() {
                    var lest = false;
                    var keys = Object.keys(this.layers);
                    for (var i = 0; i < keys.length; i++) {
                        if (keys[i] === this.current) {
                            if (typeof keys[i + 1] !== "undefined") lest = keys[i + 1];
                            if (i === keys.length - 1) {
                                lest = keys[0];
                            }
                            break;
                        }
                    }
                    this.render(lest);
                }
            }, {
                key: 'render',
                value: function render() {
                    var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';

                    this.current = key;
                    var cb = this.layers[this.current];

                    if (typeof cb === "function") {
                        cb.call(cb);
                    }
                }
            }, {
                key: 'clone',
                value: function clone(name) {
                    return (0, _clone3.default)(this);
                }
            }]);

            return SceneClass;
        }();

        var Scene = function Scene(layers) {
            var root = {
                current: 'default',
                layers: {
                    default: function _default() {
                        console.log('[Default Scene]');
                    }
                }
            };

            root.add = function (name, callback) {
                root.layers[name] = callback;
            };

            root.get = function (name) {
                return root.layers[name];
            };

            root.next = function () {
                var lest = false;
                var keys = Object.keys(root.layers);
                for (var i = 0; i < keys.length; i++) {
                    if (keys[i] === root.current) {
                        if (typeof keys[i + 1] !== "undefined") lest = keys[i + 1];
                        if (i === keys.length - 1) {
                            lest = keys[0];
                        }
                        break;
                    }
                }
                root.show(lest);
            };

            root.show = function (key) {
                root.current = key || 'default';
                var cb = root.layers[root.current];

                if (typeof cb === "function") {
                    cb.call(cb);
                }
            };

            root.clone = function () {
                return (0, _clone3.default)(this);
            };

            if (layers && layers.constructor === Object) {
                Object.keys(layers).forEach(function (key) {
                    root.add(key, layers[key]);
                });
            }

            return root;
        };

        exports.default = Scene;

        /***/
    },

    /***/"./src/components/StepsScene.js":
    /*!**************************************!*\
      !*** ./src/components/StepsScene.js ***!
      \**************************************/
    /*! no static exports found */
    /***/function srcComponentsStepsSceneJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _clone = __webpack_require__( /*! ../static/clone */"./src/static/clone.js");

        var _clone2 = _interopRequireDefault(_clone);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

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

        /***/
    },

    /***/"./src/components/Timer.js":
    /*!*********************************!*\
      !*** ./src/components/Timer.js ***!
      \*********************************/
    /*! no static exports found */
    /***/function srcComponentsTimerJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
            return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
        } : function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
        };

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

        /***/
    },

    /***/"./src/index.js":
    /*!**********************!*\
      !*** ./src/index.js ***!
      \**********************/
    /*! no static exports found */
    /***/function srcIndexJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _getWindow = __webpack_require__( /*! ./static/getWindow */"./src/static/getWindow.js");

        var _getWindow2 = _interopRequireDefault(_getWindow);

        var _Clip = __webpack_require__( /*! ./components/Clip.js */"./src/components/Clip.js");

        var _Clip2 = _interopRequireDefault(_Clip);

        var _Component = __webpack_require__( /*! ./components/Component.js */"./src/components/Component.js");

        var _Component2 = _interopRequireDefault(_Component);

        var _KeyboardEventManager = __webpack_require__( /*! ./components/KeyboardEventManager.js */"./src/components/KeyboardEventManager.js");

        var _KeyboardEventManager2 = _interopRequireDefault(_KeyboardEventManager);

        var _MoveClip = __webpack_require__( /*! ./components/MoveClip.js */"./src/components/MoveClip.js");

        var _MoveClip2 = _interopRequireDefault(_MoveClip);

        var _Scene = __webpack_require__( /*! ./components/Scene.js */"./src/components/Scene.js");

        var _Scene2 = _interopRequireDefault(_Scene);

        var _StepsScene = __webpack_require__( /*! ./components/StepsScene.js */"./src/components/StepsScene.js");

        var _StepsScene2 = _interopRequireDefault(_StepsScene);

        var _Timer = __webpack_require__( /*! ./components/Timer.js */"./src/components/Timer.js");

        var _Timer2 = _interopRequireDefault(_Timer);

        var _RoxyListener = __webpack_require__( /*! ./components/RoxyListener.js */"./src/components/RoxyListener.js");

        var _RoxyListener2 = _interopRequireDefault(_RoxyListener);

        var _Roxy = __webpack_require__( /*! ./components/Roxy.js */"./src/components/Roxy.js");

        var _Roxy2 = _interopRequireDefault(_Roxy);

        var _static = __webpack_require__( /*! ./static */"./src/static/index.js");

        var _static2 = _interopRequireDefault(_static);

        var _AnimationFrame = __webpack_require__( /*! ./components/AnimationFrame */"./src/components/AnimationFrame.js");

        var _AnimationFrame2 = _interopRequireDefault(_AnimationFrame);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        var Animate = {
            Clip: _Clip2.default,
            Component: _Component2.default,
            ComponentClass: _Component.ComponentClass,
            KeyboardEventManager: _KeyboardEventManager2.default,
            MoveClip: _MoveClip2.default,
            MoveClipClass: _MoveClip.MoveClipClass,
            Scene: _Scene2.default,
            SceneClass: _Scene.SceneClass,
            StepsScene: _StepsScene2.default,
            Timer: _Timer2.default,
            RoxyListener: _RoxyListener2.default,
            Roxy: _Roxy2.default,
            AnimationFrame: _AnimationFrame2.default
        };

        Animate.Static = Animate.Util = _static2.default;

        if ((0, _getWindow2.default)()) {
            (0, _getWindow2.default)().Animate = Animate;
        }

        exports.default = Animate;

        /***/
    },

    /***/"./src/static/abc.js":
    /*!***************************!*\
      !*** ./src/static/abc.js ***!
      \***************************/
    /*! no static exports found */
    /***/function srcStaticAbcJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var LETTER_CONSONANT = exports.LETTER_CONSONANT = 'B,C,D,F,G,H,J,K,L,M,N,P,Q,R,S,T,V,W,X,Y,Z';
        var LETTER_VOWEL = exports.LETTER_VOWEL = 'A,E,I,O,U,Y';
        var ABC = exports.ABC = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z';
        var NUMBERS = exports.NUMBERS = '0,1,2,3,4,5,6,7,8,9';
        var AMPERSAND = exports.AMPERSAND = '&';

        /***/
    },

    /***/"./src/static/attr.js":
    /*!****************************!*\
      !*** ./src/static/attr.js ***!
      \****************************/
    /*! no static exports found */
    /***/function srcStaticAttrJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _query = __webpack_require__( /*! ./query */"./src/static/query.js");

        var _query2 = _interopRequireDefault(_query);

        var _typeOf = __webpack_require__( /*! ./typeOf */"./src/static/typeOf.js");

        var _typeOf2 = _interopRequireDefault(_typeOf);

        var _isNode = __webpack_require__( /*! ./isNode */"./src/static/isNode.js");

        var _isNode2 = _interopRequireDefault(_isNode);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

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

        /***/
    },

    /***/"./src/static/clone.js":
    /*!*****************************!*\
      !*** ./src/static/clone.js ***!
      \*****************************/
    /*! no static exports found */
    /***/function srcStaticCloneJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
            return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
        } : function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
        };

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

        /***/
    },

    /***/"./src/static/copy.js":
    /*!****************************!*\
      !*** ./src/static/copy.js ***!
      \****************************/
    /*! no static exports found */
    /***/function srcStaticCopyJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _typeOf = __webpack_require__( /*! ./typeOf */"./src/static/typeOf.js");

        var _typeOf2 = _interopRequireDefault(_typeOf);

        var _isNode = __webpack_require__( /*! ./isNode */"./src/static/isNode.js");

        var _isNode2 = _interopRequireDefault(_isNode);

        var _typeOfStrict = __webpack_require__( /*! ./typeOfStrict */"./src/static/typeOfStrict.js");

        var _typeOfStrict2 = _interopRequireDefault(_typeOfStrict);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        var copy = function copy(src, instance) {
            if ((0, _isNode2.default)(src)) return src.cloneNode(true);

            if (Array.isArray(src)) return src.slice();

            if (typeof src === 'function') return src.bind(instance || {});

            if ((0, _typeOf2.default)(src, 'object')) {
                // return Object.assign({}, src);
                console.log(src, instance);
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

        /***/
    },

    /***/"./src/static/createArray.js":
    /*!***********************************!*\
      !*** ./src/static/createArray.js ***!
      \***********************************/
    /*! no static exports found */
    /***/function srcStaticCreateArrayJs(module, exports, __webpack_require__) {

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

        /***/
    },

    /***/"./src/static/createElement.js":
    /*!*************************************!*\
      !*** ./src/static/createElement.js ***!
      \*************************************/
    /*! no static exports found */
    /***/function srcStaticCreateElementJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _typeOf = __webpack_require__( /*! ./typeOf */"./src/static/typeOf.js");

        var _typeOf2 = _interopRequireDefault(_typeOf);

        var _isNode = __webpack_require__( /*! ./isNode */"./src/static/isNode.js");

        var _isNode2 = _interopRequireDefault(_isNode);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

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

        /***/
    },

    /***/"./src/static/createFragment.js":
    /*!**************************************!*\
      !*** ./src/static/createFragment.js ***!
      \**************************************/
    /*! no static exports found */
    /***/function srcStaticCreateFragmentJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _isNode = __webpack_require__( /*! ./isNode */"./src/static/isNode.js");

        var _isNode2 = _interopRequireDefault(_isNode);

        var _typeOf = __webpack_require__( /*! ./typeOf */"./src/static/typeOf.js");

        var _typeOf2 = _interopRequireDefault(_typeOf);

        var _str2node = __webpack_require__( /*! ./str2node */"./src/static/str2node.js");

        var _str2node2 = _interopRequireDefault(_str2node);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        var createFragment = function createFragment(append) {
            var fragment = document.createDocumentFragment();

            if ((0, _isNode2.default)(append)) fragment.appendChild(append);

            if ((0, _typeOf2.default)(append, 'string')) fragment.appendChild((0, _str2node2.default)(append));

            return fragment;
        };

        exports.default = createFragment;

        /***/
    },

    /***/"./src/static/css.js":
    /*!***************************!*\
      !*** ./src/static/css.js ***!
      \***************************/
    /*! no static exports found */
    /***/function srcStaticCssJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _typeOf = __webpack_require__( /*! ./typeOf */"./src/static/typeOf.js");

        var _typeOf2 = _interopRequireDefault(_typeOf);

        var _isNode = __webpack_require__( /*! ./isNode */"./src/static/isNode.js");

        var _isNode2 = _interopRequireDefault(_isNode);

        var _queryAll = __webpack_require__( /*! ./queryAll */"./src/static/queryAll.js");

        var _queryAll2 = _interopRequireDefault(_queryAll);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

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

        /***/
    },

    /***/"./src/static/decodeGetQuery.js":
    /*!**************************************!*\
      !*** ./src/static/decodeGetQuery.js ***!
      \**************************************/
    /*! no static exports found */
    /***/function srcStaticDecodeGetQueryJs(module, exports, __webpack_require__) {

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

        /***/
    },

    /***/"./src/static/defined.js":
    /*!*******************************!*\
      !*** ./src/static/defined.js ***!
      \*******************************/
    /*! no static exports found */
    /***/function srcStaticDefinedJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var defined = function defined(value) {
            return value !== undefined;
        };

        exports.default = defined;

        /***/
    },

    /***/"./src/static/definedIn.js":
    /*!*********************************!*\
      !*** ./src/static/definedIn.js ***!
      \*********************************/
    /*! no static exports found */
    /***/function srcStaticDefinedInJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var definedIn = function definedIn(stack, value) {
            return stack && stack[value] !== undefined;
        };

        exports.default = definedIn;

        /***/
    },

    /***/"./src/static/domLoaded.js":
    /*!*********************************!*\
      !*** ./src/static/domLoaded.js ***!
      \*********************************/
    /*! no static exports found */
    /***/function srcStaticDomLoadedJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _getDocument = __webpack_require__( /*! ./getDocument */"./src/static/getDocument.js");

        var _getDocument2 = _interopRequireDefault(_getDocument);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        var domLoaded = function domLoaded(callback) {
            var doc = (0, _getDocument2.default)();
            if (doc.querySelector('body')) callback.call();else doc.addEventListener('DOMContentLoaded', function () {
                callback.call();
            }, false);
        };

        exports.default = domLoaded;

        /***/
    },

    /***/"./src/static/each.js":
    /*!****************************!*\
      !*** ./src/static/each.js ***!
      \****************************/
    /*! no static exports found */
    /***/function srcStaticEachJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _isNode = __webpack_require__( /*! ./isNode */"./src/static/isNode.js");

        var _isNode2 = _interopRequireDefault(_isNode);

        var _query = __webpack_require__( /*! ./query */"./src/static/query.js");

        var _query2 = _interopRequireDefault(_query);

        var _typeOf = __webpack_require__( /*! ./typeOf */"./src/static/typeOf.js");

        var _typeOf2 = _interopRequireDefault(_typeOf);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

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

        /***/
    },

    /***/"./src/static/encodeGetQuery.js":
    /*!**************************************!*\
      !*** ./src/static/encodeGetQuery.js ***!
      \**************************************/
    /*! no static exports found */
    /***/function srcStaticEncodeGetQueryJs(module, exports, __webpack_require__) {

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

        /***/
    },

    /***/"./src/static/extend.js":
    /*!******************************!*\
      !*** ./src/static/extend.js ***!
      \******************************/
    /*! no static exports found */
    /***/function srcStaticExtendJs(module, exports, __webpack_require__) {

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

        /***/
    },

    /***/"./src/static/findObject.js":
    /*!**********************************!*\
      !*** ./src/static/findObject.js ***!
      \**********************************/
    /*! no static exports found */
    /***/function srcStaticFindObjectJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _findObjects = __webpack_require__( /*! ./findObjects */"./src/static/findObjects.js");

        var _findObjects2 = _interopRequireDefault(_findObjects);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        var findObject = function findObject(values, attr, attrValue) {
            var tmp = (0, _findObjects2.default)(values, attr, attrValue);
            return tmp.length ? tmp[0] : false;
        };

        exports.default = findObject;

        /***/
    },

    /***/"./src/static/findObjects.js":
    /*!***********************************!*\
      !*** ./src/static/findObjects.js ***!
      \***********************************/
    /*! no static exports found */
    /***/function srcStaticFindObjectsJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
            return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
        } : function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
        };

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

        /***/
    },

    /***/"./src/static/format.js":
    /*!******************************!*\
      !*** ./src/static/format.js ***!
      \******************************/
    /*! no static exports found */
    /***/function srcStaticFormatJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
            return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
        } : function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
        };

        var _isNode = __webpack_require__( /*! ./isNode */"./src/static/isNode.js");

        var _isNode2 = _interopRequireDefault(_isNode);

        var _defined = __webpack_require__( /*! ./defined */"./src/static/defined.js");

        var _defined2 = _interopRequireDefault(_defined);

        var _node2str = __webpack_require__( /*! ./node2str */"./src/static/node2str.js");

        var _node2str2 = _interopRequireDefault(_node2str);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

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
            var reg = void 0;
            if (Array.isArray(list)) reg = new RegExp(/{(\d+)}/g);else if (list && (typeof list === "undefined" ? "undefined" : _typeof(list)) === 'object') reg = new RegExp(/{(\w+)}/g);

            return string.replace(reg, function (match, number) {
                if ((0, _defined2.default)(list[number]) && (0, _isNode2.default)(list[number])) list[number] = (0, _node2str2.default)(list[number]);

                return _typeof(list[number]) !== undefined ? list[number] : match;
            });
        };

        exports.default = format;

        /***/
    },

    /***/"./src/static/getDocument.js":
    /*!***********************************!*\
      !*** ./src/static/getDocument.js ***!
      \***********************************/
    /*! no static exports found */
    /***/function srcStaticGetDocumentJs(module, exports, __webpack_require__) {

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

        /***/
    },

    /***/"./src/static/getLocation.js":
    /*!***********************************!*\
      !*** ./src/static/getLocation.js ***!
      \***********************************/
    /*! no static exports found */
    /***/function srcStaticGetLocationJs(module, exports, __webpack_require__) {

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

        /***/
    },

    /***/"./src/static/getWindow.js":
    /*!*********************************!*\
      !*** ./src/static/getWindow.js ***!
      \*********************************/
    /*! no static exports found */
    /***/function srcStaticGetWindowJs(module, exports, __webpack_require__) {

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

        /***/
    },

    /***/"./src/static/httpRequest.js":
    /*!***********************************!*\
      !*** ./src/static/httpRequest.js ***!
      \***********************************/
    /*! no static exports found */
    /***/function srcStaticHttpRequestJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _typeOf = __webpack_require__( /*! ./typeOf */"./src/static/typeOf.js");

        var _typeOf2 = _interopRequireDefault(_typeOf);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

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

        /***/
    },

    /***/"./src/static/index.js":
    /*!*****************************!*\
      !*** ./src/static/index.js ***!
      \*****************************/
    /*! no static exports found */
    /***/function srcStaticIndexJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _attr = __webpack_require__( /*! ../static/attr */"./src/static/attr.js");

        var _attr2 = _interopRequireDefault(_attr);

        var _createElement = __webpack_require__( /*! ../static/createElement */"./src/static/createElement.js");

        var _createElement2 = _interopRequireDefault(_createElement);

        var _createFragment = __webpack_require__( /*! ../static/createFragment */"./src/static/createFragment.js");

        var _createFragment2 = _interopRequireDefault(_createFragment);

        var _css = __webpack_require__( /*! ../static/css */"./src/static/css.js");

        var _css2 = _interopRequireDefault(_css);

        var _domLoaded = __webpack_require__( /*! ../static/domLoaded */"./src/static/domLoaded.js");

        var _domLoaded2 = _interopRequireDefault(_domLoaded);

        var _getDocument = __webpack_require__( /*! ../static/getDocument */"./src/static/getDocument.js");

        var _getDocument2 = _interopRequireDefault(_getDocument);

        var _getWindow = __webpack_require__( /*! ../static/getWindow */"./src/static/getWindow.js");

        var _getWindow2 = _interopRequireDefault(_getWindow);

        var _inject = __webpack_require__( /*! ../static/inject */"./src/static/inject.js");

        var _inject2 = _interopRequireDefault(_inject);

        var _str2node = __webpack_require__( /*! ../static/str2node */"./src/static/str2node.js");

        var _str2node2 = _interopRequireDefault(_str2node);

        var _str2fragment = __webpack_require__( /*! ../static/str2fragment */"./src/static/str2fragment.js");

        var _str2fragment2 = _interopRequireDefault(_str2fragment);

        var _node2str = __webpack_require__( /*! ../static/node2str */"./src/static/node2str.js");

        var _node2str2 = _interopRequireDefault(_node2str);

        var _query = __webpack_require__( /*! ../static/query */"./src/static/query.js");

        var _query2 = _interopRequireDefault(_query);

        var _queryAll = __webpack_require__( /*! ../static/queryAll */"./src/static/queryAll.js");

        var _queryAll2 = _interopRequireDefault(_queryAll);

        var _search = __webpack_require__( /*! ../static/search */"./src/static/search.js");

        var _search2 = _interopRequireDefault(_search);

        var _encodeGetQuery = __webpack_require__( /*! ../static/encodeGetQuery */"./src/static/encodeGetQuery.js");

        var _encodeGetQuery2 = _interopRequireDefault(_encodeGetQuery);

        var _decodeGetQuery = __webpack_require__( /*! ../static/decodeGetQuery */"./src/static/decodeGetQuery.js");

        var _decodeGetQuery2 = _interopRequireDefault(_decodeGetQuery);

        var _httpRequest = __webpack_require__( /*! ../static/httpRequest */"./src/static/httpRequest.js");

        var _httpRequest2 = _interopRequireDefault(_httpRequest);

        var _defined = __webpack_require__( /*! ../static/defined */"./src/static/defined.js");

        var _defined2 = _interopRequireDefault(_defined);

        var _definedIn = __webpack_require__( /*! ../static/definedIn */"./src/static/definedIn.js");

        var _definedIn2 = _interopRequireDefault(_definedIn);

        var _each = __webpack_require__( /*! ../static/each */"./src/static/each.js");

        var _each2 = _interopRequireDefault(_each);

        var _extend = __webpack_require__( /*! ../static/extend */"./src/static/extend.js");

        var _extend2 = _interopRequireDefault(_extend);

        var _isEmpty = __webpack_require__( /*! ../static/isEmpty */"./src/static/isEmpty.js");

        var _isEmpty2 = _interopRequireDefault(_isEmpty);

        var _findObject = __webpack_require__( /*! ../static/findObject */"./src/static/findObject.js");

        var _findObject2 = _interopRequireDefault(_findObject);

        var _findObjects = __webpack_require__( /*! ../static/findObjects */"./src/static/findObjects.js");

        var _findObjects2 = _interopRequireDefault(_findObjects);

        var _format = __webpack_require__( /*! ../static/format */"./src/static/format.js");

        var _format2 = _interopRequireDefault(_format);

        var _isNode = __webpack_require__( /*! ../static/isNode */"./src/static/isNode.js");

        var _isNode2 = _interopRequireDefault(_isNode);

        var _loadCSS = __webpack_require__( /*! ../static/loadCSS */"./src/static/loadCSS.js");

        var _loadCSS2 = _interopRequireDefault(_loadCSS);

        var _loadJS = __webpack_require__( /*! ../static/loadJS */"./src/static/loadJS.js");

        var _loadJS2 = _interopRequireDefault(_loadJS);

        var _loadJSSync = __webpack_require__( /*! ../static/loadJSSync */"./src/static/loadJSSync.js");

        var _loadJSSync2 = _interopRequireDefault(_loadJSSync);

        var _merge = __webpack_require__( /*! ../static/merge */"./src/static/merge.js");

        var _merge2 = _interopRequireDefault(_merge);

        var _number2string = __webpack_require__( /*! ../static/number2string */"./src/static/number2string.js");

        var _number2string2 = _interopRequireDefault(_number2string);

        var _on = __webpack_require__( /*! ../static/on */"./src/static/on.js");

        var _on2 = _interopRequireDefault(_on);

        var _position = __webpack_require__( /*! ../static/position */"./src/static/position.js");

        var _position2 = _interopRequireDefault(_position);

        var _positionMouse = __webpack_require__( /*! ../static/positionMouse */"./src/static/positionMouse.js");

        var _positionMouse2 = _interopRequireDefault(_positionMouse);

        var _random = __webpack_require__( /*! ../static/random */"./src/static/random.js");

        var _random2 = _interopRequireDefault(_random);

        var _redirect = __webpack_require__( /*! ../static/redirect */"./src/static/redirect.js");

        var _redirect2 = _interopRequireDefault(_redirect);

        var _typeOf = __webpack_require__( /*! ../static/typeOf */"./src/static/typeOf.js");

        var _typeOf2 = _interopRequireDefault(_typeOf);

        var _typeOfStrict = __webpack_require__( /*! ../static/typeOfStrict */"./src/static/typeOfStrict.js");

        var _typeOfStrict2 = _interopRequireDefault(_typeOfStrict);

        var _uri = __webpack_require__( /*! ../static/uri */"./src/static/uri.js");

        var _uri2 = _interopRequireDefault(_uri);

        var _copy = __webpack_require__( /*! ../static/copy */"./src/static/copy.js");

        var _copy2 = _interopRequireDefault(_copy);

        var _clone = __webpack_require__( /*! ../static/clone */"./src/static/clone.js");

        var _clone2 = _interopRequireDefault(_clone);

        var _toObject = __webpack_require__( /*! ../static/toObject */"./src/static/toObject.js");

        var _toObject2 = _interopRequireDefault(_toObject);

        var _isHTMLString = __webpack_require__( /*! ../static/isHTMLString */"./src/static/isHTMLString.js");

        var _isHTMLString2 = _interopRequireDefault(_isHTMLString);

        var _createArray = __webpack_require__( /*! ../static/createArray */"./src/static/createArray.js");

        var _createArray2 = _interopRequireDefault(_createArray);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        var Static = {
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
            createArray: _createArray2.default
        };

        exports.default = Static;

        /***/
    },

    /***/"./src/static/inject.js":
    /*!******************************!*\
      !*** ./src/static/inject.js ***!
      \******************************/
    /*! no static exports found */
    /***/function srcStaticInjectJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _queryAll = __webpack_require__( /*! ./queryAll */"./src/static/queryAll.js");

        var _queryAll2 = _interopRequireDefault(_queryAll);

        var _isNode = __webpack_require__( /*! ./isNode */"./src/static/isNode.js");

        var _isNode2 = _interopRequireDefault(_isNode);

        var _typeOf = __webpack_require__( /*! ./typeOf */"./src/static/typeOf.js");

        var _typeOf2 = _interopRequireDefault(_typeOf);

        var _query = __webpack_require__( /*! ./query */"./src/static/query.js");

        var _query2 = _interopRequireDefault(_query);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

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

        /***/
    },

    /***/"./src/static/isEmpty.js":
    /*!*******************************!*\
      !*** ./src/static/isEmpty.js ***!
      \*******************************/
    /*! no static exports found */
    /***/function srcStaticIsEmptyJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _typeOf = __webpack_require__( /*! ./typeOf */"./src/static/typeOf.js");

        var _typeOf2 = _interopRequireDefault(_typeOf);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

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

        /***/
    },

    /***/"./src/static/isHTMLString.js":
    /*!************************************!*\
      !*** ./src/static/isHTMLString.js ***!
      \************************************/
    /*! no static exports found */
    /***/function srcStaticIsHTMLStringJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        // import DOMParser from 'DOMParser';

        var isHTMLString = function isHTMLString(value) {
            // const parser = new DOMParser();
            // const xmlDoc = parser.parseFromString(value, "text/xml");
            // return xmlDoc;

            var div = document.createElement('div');
            div.innerHTML = value;
            return !!div.childElementCount;
        };

        exports.default = isHTMLString;

        /***/
    },

    /***/"./src/static/isNode.js":
    /*!******************************!*\
      !*** ./src/static/isNode.js ***!
      \******************************/
    /*! no static exports found */
    /***/function srcStaticIsNodeJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var isNode = function isNode(value) {
            return value && (value.nodeType === Node.TEXT_NODE || value.nodeType === Node.ELEMENT_NODE || value.nodeType === Node.DOCUMENT_FRAGMENT_NODE || value.nodeType === Node.DOCUMENT_NODE);
        };

        exports.default = isNode;

        /***/
    },

    /***/"./src/static/loadCSS.js":
    /*!*******************************!*\
      !*** ./src/static/loadCSS.js ***!
      \*******************************/
    /*! no static exports found */
    /***/function srcStaticLoadCSSJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _typeOf = __webpack_require__( /*! ./typeOf */"./src/static/typeOf.js");

        var _typeOf2 = _interopRequireDefault(_typeOf);

        var _getDocument = __webpack_require__( /*! ./getDocument */"./src/static/getDocument.js");

        var _getDocument2 = _interopRequireDefault(_getDocument);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

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

        /***/
    },

    /***/"./src/static/loadJS.js":
    /*!******************************!*\
      !*** ./src/static/loadJS.js ***!
      \******************************/
    /*! no static exports found */
    /***/function srcStaticLoadJSJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _typeOf = __webpack_require__( /*! ./typeOf */"./src/static/typeOf.js");

        var _typeOf2 = _interopRequireDefault(_typeOf);

        var _getDocument = __webpack_require__( /*! ./getDocument */"./src/static/getDocument.js");

        var _getDocument2 = _interopRequireDefault(_getDocument);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

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

        /***/
    },

    /***/"./src/static/loadJSSync.js":
    /*!**********************************!*\
      !*** ./src/static/loadJSSync.js ***!
      \**********************************/
    /*! no static exports found */
    /***/function srcStaticLoadJSSyncJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _typeOf = __webpack_require__( /*! ./typeOf */"./src/static/typeOf.js");

        var _typeOf2 = _interopRequireDefault(_typeOf);

        var _createElement = __webpack_require__( /*! ./createElement */"./src/static/createElement.js");

        var _createElement2 = _interopRequireDefault(_createElement);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

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

        /***/
    },

    /***/"./src/static/merge.js":
    /*!*****************************!*\
      !*** ./src/static/merge.js ***!
      \*****************************/
    /*! no static exports found */
    /***/function srcStaticMergeJs(module, exports, __webpack_require__) {

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

        /***/
    },

    /***/"./src/static/node2str.js":
    /*!********************************!*\
      !*** ./src/static/node2str.js ***!
      \********************************/
    /*! no static exports found */
    /***/function srcStaticNode2strJs(module, exports, __webpack_require__) {

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

        /***/
    },

    /***/"./src/static/number2string.js":
    /*!*************************************!*\
      !*** ./src/static/number2string.js ***!
      \*************************************/
    /*! no static exports found */
    /***/function srcStaticNumber2stringJs(module, exports, __webpack_require__) {

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

        /***/
    },

    /***/"./src/static/on.js":
    /*!**************************!*\
      !*** ./src/static/on.js ***!
      \**************************/
    /*! no static exports found */
    /***/function srcStaticOnJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _queryAll = __webpack_require__( /*! ./queryAll */"./src/static/queryAll.js");

        var _queryAll2 = _interopRequireDefault(_queryAll);

        var _typeOf = __webpack_require__( /*! ./typeOf */"./src/static/typeOf.js");

        var _typeOf2 = _interopRequireDefault(_typeOf);

        var _isNode = __webpack_require__( /*! ./isNode */"./src/static/isNode.js");

        var _isNode2 = _interopRequireDefault(_isNode);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

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

        /***/
    },

    /***/"./src/static/position.js":
    /*!********************************!*\
      !*** ./src/static/position.js ***!
      \********************************/
    /*! no static exports found */
    /***/function srcStaticPositionJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _isHTMLString = __webpack_require__( /*! ./isHTMLString */"./src/static/isHTMLString.js");

        var _isHTMLString2 = _interopRequireDefault(_isHTMLString);

        var _str2node = __webpack_require__( /*! ./str2node */"./src/static/str2node.js");

        var _str2node2 = _interopRequireDefault(_str2node);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        // import isNode from "./isNode";


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
            } else if (elem && elem.nodeType === Node.ELEMENT_NODE) {
                if (elem.getBoundingClientRect) {
                    var rect = elem.getBoundingClientRect();
                    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
                        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
                        clientTop = document.documentElement.clientTop || document.body.clientTop || 0,
                        clientLeft = document.documentElement.clientLeft || document.body.clientLeft || 0;

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
        };

        exports.default = position;

        /***/
    },

    /***/"./src/static/positionMouse.js":
    /*!*************************************!*\
      !*** ./src/static/positionMouse.js ***!
      \*************************************/
    /*! no static exports found */
    /***/function srcStaticPositionMouseJs(module, exports, __webpack_require__) {

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

        /***/
    },

    /***/"./src/static/query.js":
    /*!*****************************!*\
      !*** ./src/static/query.js ***!
      \*****************************/
    /*! no static exports found */
    /***/function srcStaticQueryJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _queryAll = __webpack_require__( /*! ./queryAll */"./src/static/queryAll.js");

        var _queryAll2 = _interopRequireDefault(_queryAll);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

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

        /***/
    },

    /***/"./src/static/queryAll.js":
    /*!********************************!*\
      !*** ./src/static/queryAll.js ***!
      \********************************/
    /*! no static exports found */
    /***/function srcStaticQueryAllJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _isNode = __webpack_require__( /*! ./isNode */"./src/static/isNode.js");

        var _isNode2 = _interopRequireDefault(_isNode);

        var _typeOf = __webpack_require__( /*! ./typeOf */"./src/static/typeOf.js");

        var _typeOf2 = _interopRequireDefault(_typeOf);

        var _getDocument = __webpack_require__( /*! ./getDocument */"./src/static/getDocument.js");

        var _getDocument2 = _interopRequireDefault(_getDocument);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

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

        /***/
    },

    /***/"./src/static/random.js":
    /*!******************************!*\
      !*** ./src/static/random.js ***!
      \******************************/
    /*! no static exports found */
    /***/function srcStaticRandomJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.randomItem = exports.randomHumanizeString = exports.randomString = exports.randomNumber = exports.randomColor = exports.random = undefined;

        var _abc = __webpack_require__( /*! ./abc */"./src/static/abc.js");

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

        /***/
    },

    /***/"./src/static/redirect.js":
    /*!********************************!*\
      !*** ./src/static/redirect.js ***!
      \********************************/
    /*! no static exports found */
    /***/function srcStaticRedirectJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _getLocation = __webpack_require__( /*! ./getLocation */"./src/static/getLocation.js");

        var _getLocation2 = _interopRequireDefault(_getLocation);

        var _getDocument = __webpack_require__( /*! ./getDocument */"./src/static/getDocument.js");

        var _getDocument2 = _interopRequireDefault(_getDocument);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        var redirect = function redirect(to) {
            var loc = (0, _getLocation2.default)();
            var doc = (0, _getDocument2.default)();
            loc.href = to || doc.href;
        };

        exports.default = redirect;

        /***/
    },

    /***/"./src/static/search.js":
    /*!******************************!*\
      !*** ./src/static/search.js ***!
      \******************************/
    /*! no static exports found */
    /***/function srcStaticSearchJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _isNode = __webpack_require__( /*! ./isNode */"./src/static/isNode.js");

        var _isNode2 = _interopRequireDefault(_isNode);

        var _queryAll = __webpack_require__( /*! ./queryAll */"./src/static/queryAll.js");

        var _queryAll2 = _interopRequireDefault(_queryAll);

        var _query = __webpack_require__( /*! ./query */"./src/static/query.js");

        var _query2 = _interopRequireDefault(_query);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

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

        /***/
    },

    /***/"./src/static/str2fragment.js":
    /*!************************************!*\
      !*** ./src/static/str2fragment.js ***!
      \************************************/
    /*! no static exports found */
    /***/function srcStaticStr2fragmentJs(module, exports, __webpack_require__) {

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

        /***/
    },

    /***/"./src/static/str2node.js":
    /*!********************************!*\
      !*** ./src/static/str2node.js ***!
      \********************************/
    /*! no static exports found */
    /***/function srcStaticStr2nodeJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _str2fragment = __webpack_require__( /*! ./str2fragment */"./src/static/str2fragment.js");

        var _str2fragment2 = _interopRequireDefault(_str2fragment);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

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

        /***/
    },

    /***/"./src/static/toObject.js":
    /*!********************************!*\
      !*** ./src/static/toObject.js ***!
      \********************************/
    /*! no static exports found */
    /***/function srcStaticToObjectJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
            return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
        } : function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
        };

        var toObject = function toObject(value) {
            return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' ? JSON.parse(JSON.stringify(value)) : {};
        };

        exports.default = toObject;

        /***/
    },

    /***/"./src/static/typeOf.js":
    /*!******************************!*\
      !*** ./src/static/typeOf.js ***!
      \******************************/
    /*! no static exports found */
    /***/function srcStaticTypeOfJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
            return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
        } : function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
        };

        var _typeOfStrict = __webpack_require__( /*! ./typeOfStrict */"./src/static/typeOfStrict.js");

        var _typeOfStrict2 = _interopRequireDefault(_typeOfStrict);

        var _isNode = __webpack_require__( /*! ./isNode */"./src/static/isNode.js");

        var _isNode2 = _interopRequireDefault(_isNode);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        var typeOf = function typeOf(value, type) {
            var simpleTypes = ['null', 'boolean', 'undefined', 'function', 'string', 'number', 'date', 'array', 'object'];
            var t = (0, _typeOfStrict2.default)(value).toLowerCase();
            if (simpleTypes.indexOf(t) === -1 && (typeof value === "undefined" ? "undefined" : _typeof(value)) === 'object') t = 'object';

            return typeof type === 'string' ? type.toLowerCase() === t : t;
        };

        exports.default = typeOf;

        /***/
    },

    /***/"./src/static/typeOfStrict.js":
    /*!************************************!*\
      !*** ./src/static/typeOfStrict.js ***!
      \************************************/
    /*! no static exports found */
    /***/function srcStaticTypeOfStrictJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var typeOfStrict = function typeOfStrict(value, type) {
            var t = Object.prototype.toString.call(value).slice(8, -1);
            return typeof type === 'string' ? type === t : t;
        };

        exports.default = typeOfStrict;

        /***/
    },

    /***/"./src/static/uri.js":
    /*!***************************!*\
      !*** ./src/static/uri.js ***!
      \***************************/
    /*! no static exports found */
    /***/function srcStaticUriJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _getLocation = __webpack_require__( /*! ./getLocation */"./src/static/getLocation.js");

        var _getLocation2 = _interopRequireDefault(_getLocation);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        var uri = function uri(_uri) {
            var loc = (0, _getLocation2.default)();
            _uri = _uri || loc.pathname;
            _uri = _uri.replace(/\/+/ig, '/');
            return _uri.length > 1 && _uri.slice(0, 1) !== '/' ? '/' + _uri : _uri;
        };

        exports.default = uri;

        /***/
    }

    /******/ });

/***/ }),

/***/ "./demo/animation/index.js":
/*!*********************************!*\
  !*** ./demo/animation/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Game = __webpack_require__(/*! ./src/Game */ "./demo/animation/src/Game.js");

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (location.pathname.split('/').filter(function (v) {
    return v;
}).reverse()[0] === 'animation') {
    (0, _Game2.default)();
}

/***/ }),

/***/ "./demo/animation/src/Game.js":
/*!************************************!*\
  !*** ./demo/animation/src/Game.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var Game = function Game() {
    console.log('Animation demo');
    if (!window.Animate || !window.Animate.Static) {
        return new Error('Animate object not exist!');
    }
    var _window$Animate = window.Animate,
        Clip = _window$Animate.Clip,
        MoveClip = _window$Animate.MoveClip,
        Scene = _window$Animate.Scene,
        Component = _window$Animate.Component,
        Timer = _window$Animate.Timer,
        Roxy = _window$Animate.Roxy,
        KeyboardEventManager = _window$Animate.KeyboardEventManager,
        AnimationFrame = _window$Animate.AnimationFrame;
    var _window$Animate$Stati = window.Animate.Static,
        query = _window$Animate$Stati.query,
        search = _window$Animate$Stati.search,
        inject = _window$Animate$Stati.inject,
        typeOf = _window$Animate$Stati.typeOf,
        typeOfStrict = _window$Animate$Stati.typeOfStrict,
        uri = _window$Animate$Stati.uri,
        copy = _window$Animate$Stati.copy,
        clone = _window$Animate$Stati.clone,
        on = _window$Animate$Stati.on,
        each = _window$Animate$Stati.each,
        random = _window$Animate$Stati.random,
        randomColor = _window$Animate$Stati.randomColor;


    var appNode = query('#app');
    var fpsNode = query('#fps');
    var ballsNode = query('#balls');
    var targetNode = query('.target');

    var createBall = function createBall() {
        var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'id';

        var ball = document.createElement('div');
        var size = random(8, 60);
        var speed = 1;

        ball.className = 'ball';
        ball.style.display = 'block';
        ball.style.backgroundColor = randomColor();
        ball.style.opacity = Math.random().toString();

        appNode.appendChild(ball);
        return MoveClip({
            x: random(50, window.innerWidth - 50),
            y: random(50, window.innerHeight - 50),
            speedX: random(-speed, speed) || 0.1,
            speedY: random(-speed, speed) || 0.1,
            width: size,
            height: size,
            element: ball,
            remove: function remove() {
                this.element.parentNode.removeChild(this.element);
            }
        });
    };

    function ballAction(ms) {
        if (ms) {
            ms.x += ms.speedX;
            ms.y += ms.speedY;
            if (ms.x < 0) ms.speedX *= -1;
            if (ms.x > window.innerWidth - ms.width) ms.speedX *= -1;
            if (ms.y < 0) ms.speedY *= -1;
            if (ms.y > window.innerHeight - ms.height) ms.speedY *= -1;
        }
    }

    var balls = new Array(100).fill(0);

    balls.forEach(function (v, i) {
        balls[i] = createBall(i + 1);
    });

    var mcClick = MoveClip({
        x: -100,
        y: -100,
        width: 5,
        height: 5,
        element: targetNode,
        timer: null,
        hide: function hide() {
            this.element.style.display = 'none';
        },
        show: function show() {
            var _this = this;

            clearTimeout(this.timer);
            this.element.style.display = 'block';
            this.timer = setTimeout(function () {
                _this.hide();
            }, 1000);
        },
        remove: function remove() {
            this.element.parentNode.removeChild(this.element);
        }
    });

    on(appNode, 'click', function (e) {
        mcClick.x = e.clientX;
        mcClick.y = e.clientY;
        mcClick.show();
        if (e.target.className === 'ball') {
            var index = false;
            var mcs = balls.filter(function (v, i) {
                if (v.element === e.target) {
                    index = i;
                    return true;
                }
            });
            if (mcs && mcs[0] && mcs[0].element && index !== false) {
                mcs[0].remove();
                delete balls[index];
            }
        }
    });

    AnimationFrame().start(function (progress) {
        if (Math.round(progress) % 1000 === 0) {}

        each(balls, function (ball) {
            ballAction(ball);
        });
    });

    /*
        const is = function (...args) {
            if (args.length === 1) {
                return !!args[0]
            }
            if (args.length === 2) {
                const typeValue = typeOf(args[1]);
                const typeWith = typeOf(args[1]);
                if (typeValue !== 'string' && typeWith === 'string') {
                    return typeOf(args[0], args[1]);
                }
                return args[0] === args[1];
            }
        }
    */
};

exports.default = Game;

/***/ }),

/***/ "./demo/components/index.js":
/*!**********************************!*\
  !*** ./demo/components/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Start = __webpack_require__(/*! ./src/Start */ "./demo/components/src/Start.js");

var _Start2 = _interopRequireDefault(_Start);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (location.pathname.split('/').filter(function (v) {
    return v;
}).reverse()[0] === 'components') {
    (0, _Start2.default)();
}

/***/ }),

/***/ "./demo/components/src/Start.js":
/*!**************************************!*\
  !*** ./demo/components/src/Start.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var Start = function Start() {
    console.log("Components demo");
    if (!window.Animate || !window.Animate.Static) {
        return new Error('Animate object not exist!');
    }
    var _window$Animate$Util = window.Animate.Util,
        query = _window$Animate$Util.query,
        queryAll = _window$Animate$Util.queryAll,
        search = _window$Animate$Util.search,
        inject = _window$Animate$Util.inject,
        typeOf = _window$Animate$Util.typeOf,
        copy = _window$Animate$Util.copy,
        clone = _window$Animate$Util.clone,
        on = _window$Animate$Util.on,
        str2node = _window$Animate$Util.str2node,
        each = _window$Animate$Util.each;
    var _window$Animate = window.Animate,
        Clip = _window$Animate.Clip,
        MoveClip = _window$Animate.MoveClip,
        KeyboardEventManager = _window$Animate.KeyboardEventManager,
        Timer = _window$Animate.Timer,
        Component = _window$Animate.Component,
        RoxyListener = _window$Animate.RoxyListener,
        Roxy = _window$Animate.Roxy;


    var templateMenu = '\n    <div class="menu">\n        <div data-on="Page1Component">Page 1</div>\n        <div data-on="Page2Component">Page 2</div>\n        <div data-on="Page3Component">Page 3</div>\n    </div>\n    ';

    var templatePage1 = '\n    <div class="page bg-cyan">\n        <h1>Page 1</h1>\n    </div>\n    ';

    var templatePage2 = '\n    <div class="page bg-darkcyan">\n        <h1>Page 2</h1>\n    </div>\n    ';

    var templatePage3 = '\n    <div class="page bg-darkgreen">\n        <h1>Page 3</h1>\n    </div>\n    ';

    var sceneNode = query('#scene');

    var MenuComponent = Component({
        id: 'MenuComponent',
        props: {},
        template: str2node(templateMenu),
        complete: function complete() {
            var _this = this;

            console.log('Hello ' + this.id);

            var btns = search('[data-on]', 'data-on', this.template);

            each(btns, function (key, value) {
                console.log(key, value);
            });

            on(this.template, 'click', function (event) {
                var componentName = event.target.getAttribute('data-on');
                if (componentName) {
                    _this.components[componentName].render();
                }
            });
        }
    });

    var Page1Component = Component({
        id: 'Page1Component',
        template: templatePage1,
        props: {},
        init: function init() {
            this.render();
        },
        complete: function complete() {
            console.log('Hello ' + this.id);
        },

        methods: {
            render: function render() {
                inject(this.template, MenuComponent.template, true);
                inject(sceneNode, this.template);
            }
        }
    });

    var Page2Component = Component({
        id: 'Page2Component',
        props: {},
        template: templatePage2,
        complete: function complete() {
            console.log('Hello ' + this.id);
        },

        methods: {
            render: function render() {
                inject(this.template, MenuComponent.template, true);
                inject(sceneNode, this.template);
            }
        }
    });

    var Page3Component = Component({
        id: 'Page3Component',
        props: {},
        template: templatePage3,
        complete: function complete() {
            console.log('Hello ' + this.id);
        },

        methods: {
            render: function render() {
                inject(this.template, MenuComponent.template, true);
                inject(sceneNode, this.template);
            }
        }
    });

    MenuComponent.components = {
        Page1Component: Page1Component,
        Page2Component: Page2Component,
        Page3Component: Page3Component
    };
};

exports.default = Start;

/***/ }),

/***/ "./demo/demo/index.js":
/*!****************************!*\
  !*** ./demo/demo/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Game = __webpack_require__(/*! ./src/Game */ "./demo/demo/src/Game.js");

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (location.pathname.split('/').filter(function (v) {
    return v;
}).reverse()[0] === 'demo') {
    (0, _Game2.default)();
}

/***/ }),

/***/ "./demo/demo/src/Game.js":
/*!*******************************!*\
  !*** ./demo/demo/src/Game.js ***!
  \*******************************/
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
        query = _window$Animate$Stati.query,
        search = _window$Animate$Stati.search,
        inject = _window$Animate$Stati.inject,
        typeOf = _window$Animate$Stati.typeOf,
        uri = _window$Animate$Stati.uri,
        copy = _window$Animate$Stati.copy,
        each = _window$Animate$Stati.each,
        on = _window$Animate$Stati.on;
};

exports.default = Game;

/***/ }),

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

    var AppClip = Clip(appNode);

    var createRoadMC = function createRoadMC() {
        var element = document.createElement('div');
        each(30, function () {
            element.appendChild(createElement('div', { class: 'mc-road' }));
        });
        element.className = 'mc';
        element.appendChild(createElement('div', { class: 'mc mc-line-left' }));
        element.appendChild(createElement('div', { class: 'mc mc-line-right' }));

        var mc = MoveClip({
            element: element,
            x: 200,
            y: -500,
            speed: 0.4
        });
        appNode.appendChild(element);
        return mc;
    };

    var createCarMC = function createCarMC() {
        var element = createElement('div', { class: 'mc mc-car' });
        appNode.appendChild(element);
        var root = MoveClip({
            element: element,
            x: random(100, 260),
            y: 0,
            speed: 0.3,
            animation: function animation(i) {
                this.y += RoadMC.speed + this.speed;
                if (this.y > AppClip.height) {
                    this.y = -60;
                    this.x = random(100, 260);
                }
            }
        });
        //
        console.log();
        return root;
    };
    var Car1 = createCarMC();

    var createPlayerMC = function createPlayerMC() {
        var element = document.createElement('div');
        element.className = 'mc mc-player';
        var mc = MoveClip({
            element: element,
            x: 220,
            y: AppClip.height - 60,
            speed: 1,
            speedX: 1
        });
        appNode.appendChild(element);
        return mc;
    };

    var RoadMC = createRoadMC();
    var PlayerMC = createPlayerMC();

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
        Car1.animation(0);

        if (keyboard.left) {
            PlayerMC.x -= PlayerMC.speedX;
        }
        if (keyboard.right) {
            PlayerMC.x += PlayerMC.speedX;
        }
        if (keyboard.up) {
            RoadMC.speed += 0.1;
        }
        if (keyboard.down) {
            RoadMC.speed -= 0.1;
        }

        RoadMC.y += RoadMC.speed;
        if (RoadMC.y > 0) {
            RoadMC.y = -500;
        }
    });
};

exports.default = Game;

/***/ }),

/***/ "./demo/move/index.js":
/*!****************************!*\
  !*** ./demo/move/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Game = __webpack_require__(/*! ./src/Game */ "./demo/move/src/Game.js");

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (location.pathname.split('/').filter(function (v) {
    return v;
}).reverse()[0] === 'move') {
    document.addEventListener('DOMContentLoaded', function () {
        (0, _Game2.default)();
    });
}

/*const nodeInfo = Dom.query('#info');
const nodeHero = Dom.query('#hero');
const nodeGame = Dom.query('#game');
const onReload = Dom.query('[data-on="reload"]');

function info(data) {
    nodeInfo.innerHTML = `<pre>${data}</pre>`
}

nodeHero.style.marginTop = '0px';
nodeHero.style.marginLeft = '0px';
const moveClip = MoveClip({
    element: nodeHero,
    speed: 1,
});

const keyEvent = EventKeyManager();
keyEvent.isUp = false;
keyEvent.isDown = false;
keyEvent.isLeft = false;
keyEvent.isRight = false;
keyEvent.each('keydown', function (eve) {
    switch (eve.code) {
        case "KeyW":
            keyEvent.isUp = true;
            break;
        case "KeyS":
            keyEvent.isDown = true;
            break;
        case "KeyA":
            keyEvent.isLeft = true;
            break;
        case "KeyD":
            keyEvent.isRight = true;
            break;
    }
});
keyEvent.each('keyup', function (eve) {
    switch (eve.code) {
        case "KeyW":
            keyEvent.isUp = false;
            break;
        case "KeyS":
            keyEvent.isDown = false;
            break;
        case "KeyA":
            keyEvent.isLeft = false;
            break;
        case "KeyD":
            keyEvent.isRight = false;
            break;
    }
});

Timer.interval(() => {
    if (keyEvent.isUp) moveClip.x -= moveClip.speed;
    if (keyEvent.isDown) moveClip.x += moveClip.speed;
    if (keyEvent.isLeft) moveClip.y -= moveClip.speed;
    if (keyEvent.isRight) moveClip.y += moveClip.speed;

    info(`x: ${moveClip.x} y: ${moveClip.y}`);
}, 1000/60)*/

/*
const Sprite = function (config) {
    const { element } = config;
    const clip = Clip(element);

    info(`x: ${clip.x} y: ${clip.y}`);
    // console.log(clip);
    return clip;
};
const moveClip = Clip({
    element: nodeHero,
});
*/

// keyEvent.press(EventKeyCode.Space, function (eve) {
//     console.log('press Space', EventKeyCode.Space, eve)
// });
// keyEvent.on('keyup', 97, function (eve) {
//     console.log('keyup', EventKeyCode.ArrowLeft, eve)
// });

// const MoveClip = function (config) {;
//     const { element } = config;
//     const keyEvent = EventKeyManager()
//     const clip = Clip(element);
//     return {
//         up(){},
//         down(){},
//         left(){},
//         right(){},
//     };
// };

/***/ }),

/***/ "./demo/move/src/Game.js":
/*!*******************************!*\
  !*** ./demo/move/src/Game.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var Game = function Game() {

    if (!window.Animate || !window.Animate.Static) {
        return new Error('Animate object not exist!');
    }

    console.log('Game move');

    var _window$Animate = window.Animate,
        Clip = _window$Animate.Clip,
        MoveClip = _window$Animate.MoveClip,
        KeyboardEventManager = _window$Animate.KeyboardEventManager,
        Timer = _window$Animate.Timer;
    var query = window.Animate.Static.query;


    var nodeHero = query('#hero');
    var nodeInfo = query('#info');

    function info(data) {
        nodeInfo.innerHTML = '<pre>' + data + '</pre>';
    }

    nodeHero.style.marginTop = '0px';
    nodeHero.style.marginLeft = '0px';
    var moveClip = MoveClip({
        element: nodeHero,
        speed: 1
    });

    var KeyMap = {
        isUp: false,
        isDown: false,
        isLeft: false,
        isRight: false
    };

    Timer.setInterval(function () {
        if (KeyMap.isUp) moveClip.y -= moveClip.speed;
        if (KeyMap.isDown) moveClip.y += moveClip.speed;
        if (KeyMap.isLeft) moveClip.x -= moveClip.speed;
        if (KeyMap.isRight) moveClip.x += moveClip.speed;

        info('x: ' + moveClip.x + ' y: ' + moveClip.y);
    }, 1000 / 60);

    var keyboard = KeyboardEventManager();

    keyboard.each('keydown', function (eve) {
        if (eve.code === 'KeyW') KeyMap.isUp = true;
        if (eve.code === 'KeyS') KeyMap.isDown = true;
        if (eve.code === 'KeyA') KeyMap.isLeft = true;
        if (eve.code === 'KeyD') KeyMap.isRight = true;
    });

    keyboard.each('keyup', function (eve) {
        if (eve.code === 'KeyW') KeyMap.isUp = false;
        if (eve.code === 'KeyS') KeyMap.isDown = false;
        if (eve.code === 'KeyA') KeyMap.isLeft = false;
        if (eve.code === 'KeyD') KeyMap.isRight = false;
    });
};

exports.default = Game;

/***/ }),

/***/ "./demo/scene/index.js":
/*!*****************************!*\
  !*** ./demo/scene/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Game = __webpack_require__(/*! ./src/Game */ "./demo/scene/src/Game.js");

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (location.pathname.split('/').filter(function (v) {
    return v;
}).reverse()[0] === 'scene') {
    (0, _Game2.default)();
}

/***/ }),

/***/ "./demo/scene/src/Game.js":
/*!********************************!*\
  !*** ./demo/scene/src/Game.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

// import IntroComponent from './components/pages/IntroComponent';
// import StartGameComponent from './components/pages/StartGameComponent';
// import SettingsComponent from './components/pages/SettingsComponent';
// import DevelopersComponent from './components/pages/DevelopersComponent';
// import MenuComponent from './components/pages/MenuComponent';

var Game = function Game() {
    console.log('scene demo');
    if (!window.Animate || !window.Animate.Static) {
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
        on = _window$Animate$Stati.on,
        isHTMLString = _window$Animate$Stati.isHTMLString;


    var scene = Clip('#scene');
    /*
    
        const Scene = function () {
            const rx = Roxy({});
            const root = {
                current: 'default',
                layers: {
                    default () { console.log('[Default Scene]') },
                },
            };
    
            root.layer = function (name, callback) {
                root.layers[name] = callback;
            }
    
            root.get = function (name) {
                return root.layers[name];
            }
    
            root.next = function () {
                let lest = false;
                const keys = Object.keys(root.layers);
                for (let i = 0; i < keys.length; i++) {
                    if (keys[i] === root.current) {
                        if (typeof keys[i + 1] !== "undefined")
                            lest = keys[i + 1];
                        if (i === keys.length - 1) {
                            lest = keys[0];
                        }
                        break;
                    }
                }
                root.show(lest);
            }
    
            root.show = function (key) {
                root.current = key;
                const cb = root.layers[root.current];
    
                if (typeof cb === "function") {
                    cb.call(cb);
                }
            }
    
            return root;
        };
    */

    var templateMenu = '\n    <div class="menu select-off">\n        <div data-on="page1">Page 1</div>\n        <div data-on="page2">Page 2</div>\n        <div data-on="page3">Page 3</div>\n        <div data-on="next">NEXT Page</div>\n    </div>\n    ';

    var templatePage1 = '\n    <div class="page bg-cyan">\n        <h1>Page 1</h1>\n    </div>\n    ';

    var templatePage2 = '\n    <div class="page bg-darkcyan">\n        <h1>Page 2</h1>\n    </div>\n    ';

    var templatePage3 = '\n    <div class="page bg-darkgreen">\n        <h1>Page 3</h1>\n    </div>\n    ';

    var main = Scene();
    var menu = Component({
        template: templateMenu,
        init: function init() {
            on(this.template, 'click', function (event) {
                if (event.target.getAttribute('data-on')) {
                    var key = event.target.getAttribute('data-on');
                    if (key === 'next') {
                        return main.next();
                    }
                    main.show(key);
                }
            });
        }
    });

    var page1 = Clip(templatePage1);
    var page2 = Clip(templatePage2);
    var page3 = Clip(templatePage3);

    main.add('page1', function () {
        inject(scene.element, page1.element);
        inject(scene.element, menu.template, true);
    });

    main.add('page2', function () {
        inject(scene.element, page2.element);
        inject(scene.element, menu.template, true);
    });

    main.add('page3', function () {
        inject(scene.element, page3.element);
        inject(scene.element, menu.template, true);
    });

    main.show('page1');
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


__webpack_require__(/*! ../../animate.js/dist/animate.bundle */ "../animate.js/dist/animate.bundle.js");

__webpack_require__(/*! ../demo/demo/index */ "./demo/demo/index.js");

__webpack_require__(/*! ../demo/move/index */ "./demo/move/index.js");

__webpack_require__(/*! ../demo/scene/index */ "./demo/scene/index.js");

__webpack_require__(/*! ../demo/components/index */ "./demo/components/index.js");

__webpack_require__(/*! ../demo/animation/index */ "./demo/animation/index.js");

__webpack_require__(/*! ../demo/flyter/index */ "./demo/flyter/index.js");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vL3NyYy9jb21wb25lbnRzL0FuaW1hdGlvbkZyYW1lLmpzIiwid2VicGFjazovLy8vc3JjL2NvbXBvbmVudHMvQ2xpcC5qcyIsIndlYnBhY2s6Ly8vL3NyYy9jb21wb25lbnRzL0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vL3NyYy9jb21wb25lbnRzL0tleWJvYXJkRXZlbnRNYW5hZ2VyLmpzIiwid2VicGFjazovLy8vc3JjL2NvbXBvbmVudHMvTW92ZUNsaXAuanMiLCJ3ZWJwYWNrOi8vLy9zcmMvY29tcG9uZW50cy9Sb3h5LmpzIiwid2VicGFjazovLy8vc3JjL2NvbXBvbmVudHMvUm94eUxpc3RlbmVyLmpzIiwid2VicGFjazovLy8vc3JjL2NvbXBvbmVudHMvU2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy9zcmMvY29tcG9uZW50cy9TdGVwc1NjZW5lLmpzIiwid2VicGFjazovLy8vc3JjL2NvbXBvbmVudHMvVGltZXIuanMiLCJ3ZWJwYWNrOi8vLy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9zcmMvc3RhdGljL2FiYy5qcyIsIndlYnBhY2s6Ly8vL3NyYy9zdGF0aWMvYXR0ci5qcyIsIndlYnBhY2s6Ly8vL3NyYy9zdGF0aWMvY2xvbmUuanMiLCJ3ZWJwYWNrOi8vLy9zcmMvc3RhdGljL2NvcHkuanMiLCJ3ZWJwYWNrOi8vLy9zcmMvc3RhdGljL2NyZWF0ZUFycmF5LmpzIiwid2VicGFjazovLy8vc3JjL3N0YXRpYy9jcmVhdGVFbGVtZW50LmpzIiwid2VicGFjazovLy8vc3JjL3N0YXRpYy9jcmVhdGVGcmFnbWVudC5qcyIsIndlYnBhY2s6Ly8vL3NyYy9zdGF0aWMvY3NzLmpzIiwid2VicGFjazovLy8vc3JjL3N0YXRpYy9kZWNvZGVHZXRRdWVyeS5qcyIsIndlYnBhY2s6Ly8vL3NyYy9zdGF0aWMvZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vL3NyYy9zdGF0aWMvZGVmaW5lZEluLmpzIiwid2VicGFjazovLy8vc3JjL3N0YXRpYy9kb21Mb2FkZWQuanMiLCJ3ZWJwYWNrOi8vLy9zcmMvc3RhdGljL2VhY2guanMiLCJ3ZWJwYWNrOi8vLy9zcmMvc3RhdGljL2VuY29kZUdldFF1ZXJ5LmpzIiwid2VicGFjazovLy8vc3JjL3N0YXRpYy9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy9zcmMvc3RhdGljL2ZpbmRPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy9zcmMvc3RhdGljL2ZpbmRPYmplY3RzLmpzIiwid2VicGFjazovLy8vc3JjL3N0YXRpYy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vLy9zcmMvc3RhdGljL2dldERvY3VtZW50LmpzIiwid2VicGFjazovLy8vc3JjL3N0YXRpYy9nZXRMb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly8vL3NyYy9zdGF0aWMvZ2V0V2luZG93LmpzIiwid2VicGFjazovLy8vc3JjL3N0YXRpYy9odHRwUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vL3NyYy9zdGF0aWMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9zcmMvc3RhdGljL2luamVjdC5qcyIsIndlYnBhY2s6Ly8vL3NyYy9zdGF0aWMvaXNFbXB0eS5qcyIsIndlYnBhY2s6Ly8vL3NyYy9zdGF0aWMvaXNIVE1MU3RyaW5nLmpzIiwid2VicGFjazovLy8vc3JjL3N0YXRpYy9pc05vZGUuanMiLCJ3ZWJwYWNrOi8vLy9zcmMvc3RhdGljL2xvYWRDU1MuanMiLCJ3ZWJwYWNrOi8vLy9zcmMvc3RhdGljL2xvYWRKUy5qcyIsIndlYnBhY2s6Ly8vL3NyYy9zdGF0aWMvbG9hZEpTU3luYy5qcyIsIndlYnBhY2s6Ly8vL3NyYy9zdGF0aWMvbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vLy9zcmMvc3RhdGljL25vZGUyc3RyLmpzIiwid2VicGFjazovLy8vc3JjL3N0YXRpYy9udW1iZXIyc3RyaW5nLmpzIiwid2VicGFjazovLy8vc3JjL3N0YXRpYy9vbi5qcyIsIndlYnBhY2s6Ly8vL3NyYy9zdGF0aWMvcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy9zcmMvc3RhdGljL3Bvc2l0aW9uTW91c2UuanMiLCJ3ZWJwYWNrOi8vLy9zcmMvc3RhdGljL3F1ZXJ5LmpzIiwid2VicGFjazovLy8vc3JjL3N0YXRpYy9xdWVyeUFsbC5qcyIsIndlYnBhY2s6Ly8vL3NyYy9zdGF0aWMvcmFuZG9tLmpzIiwid2VicGFjazovLy8vc3JjL3N0YXRpYy9yZWRpcmVjdC5qcyIsIndlYnBhY2s6Ly8vL3NyYy9zdGF0aWMvc2VhcmNoLmpzIiwid2VicGFjazovLy8vc3JjL3N0YXRpYy9zdHIyZnJhZ21lbnQuanMiLCJ3ZWJwYWNrOi8vLy9zcmMvc3RhdGljL3N0cjJub2RlLmpzIiwid2VicGFjazovLy8vc3JjL3N0YXRpYy90b09iamVjdC5qcyIsIndlYnBhY2s6Ly8vL3NyYy9zdGF0aWMvdHlwZU9mLmpzIiwid2VicGFjazovLy8vc3JjL3N0YXRpYy90eXBlT2ZTdHJpY3QuanMiLCJ3ZWJwYWNrOi8vLy9zcmMvc3RhdGljL3VyaS5qcyIsIndlYnBhY2s6Ly8vLi9kZW1vL2FuaW1hdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZW1vL2FuaW1hdGlvbi9zcmMvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9kZW1vL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGVtby9jb21wb25lbnRzL3NyYy9TdGFydC5qcyIsIndlYnBhY2s6Ly8vLi9kZW1vL2RlbW8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGVtby9kZW1vL3NyYy9HYW1lLmpzIiwid2VicGFjazovLy8uL2RlbW8vZmx5dGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2RlbW8vZmx5dGVyL3NyYy9HYW1lLmpzIiwid2VicGFjazovLy8uL2RlbW8vbW92ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZW1vL21vdmUvc3JjL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vZGVtby9zY2VuZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZW1vL3NjZW5lL3NyYy9HYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBbmltYXRpb25GcmFtZSIsInJvb3QiLCJyZXF1ZXN0SWQiLCJzdGFydHBhbHkiLCJwYXVzZWQiLCJjYWxsYmFjayIsImRlbGF5IiwiZHVyYXRpb24iLCJwcm9ncmVzcyIsInRpbWVzdGFtcCIsIndpbmRvdyIsIkNsaXBDbGFzcyIsInBvc2l0aW9uIiwicGFyZW50IiwiZXZlbnQiLCJPYmplY3QiLCJDbGlwIiwiZWxlbWVudCIsInBhcmVudEVsZW1lbnQiLCJDb21wb25lbnRDbGFzc1Byb3BlcnRpZXMiLCJpZCIsInByb3BzIiwidGVtcGxhdGUiLCJvdmVycmlkZSIsImJlZm9yZSIsImluaXQiLCJkYXRhIiwiY29tcGxldGUiLCJtZXRob2RzIiwibm9kZSIsIm9uIiwiaW5pdGlhbGl6ZWQiLCJjb21wbGV0ZWQiLCJjb21wb25lbnRzIiwiY2hpbGRyZW4iLCJDb21wb25lbnRDbGFzcyIsInByb3BlcnRpZXMiLCJkb2N1bWVudCIsIkNvbXBvbmVudCIsIm5hbWUiLCJjbG9uZWQiLCJjb25maWciLCJyYW5kb21OYW1lIiwiY29tcCIsImNvbXBvbmVudCIsIktleWJvYXJkRXZlbnRNYW5hZ2VyIiwic3RvcmFnZSIsImJhc2VDYWxsYmFja3NMaXN0IiwiYWRkU3RvcmFnZSIsImJhc2VDYWxsYmFjayIsIkFycmF5IiwicGFyc2VJbnQiLCJlYWNoQ2FsbGJhY2tzTGlzdCIsImVhY2hDYWxsYmFjayIsImFkZCIsInJtIiwic2V0dXBMaXN0ZW5lcnMiLCJNb3ZlQ2xpcENsYXNzIiwiY2xpcCIsImFwcGVuZCIsInZhbHVlIiwiTW92ZUNsaXAiLCJjbG9uZVByb3BlcnR5IiwiUm94eSIsInByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrcyIsImRlZmF1bHQiLCJwcm94eSIsInByb3AiLCJvYmoiLCJyZXN1bHQiLCJrZXkiLCJwYXlsb2FkIiwiUm94eUxpc3RlbmVyIiwiYWN0aW9ucyIsImFjdGlvbnNOYW1lcyIsImV2ZW50TmFtZSIsInJ4IiwiZXZlbnRDdXJzb3IiLCJTY2VuZUNsYXNzIiwibGF5ZXJzIiwiY29uc29sZSIsImxlc3QiLCJrZXlzIiwiaSIsImNiIiwiU2NlbmUiLCJjdXJyZW50IiwiU3RlcHNTY2VuZSIsInN0ZXBzIiwiaXRlcmF0aW9uIiwibG9vcCIsInN0ZXBfaXRlcmF0aW9uIiwic3RlcF9zdG9wIiwic3RlcF9jYWxsYmFja19lYWNoIiwic3RlcF9jYWxsYmFja3MiLCJzZXRUaW1lb3V0Iiwib2JqZWN0IiwiY3VycmVudENhbGxiYWNrT2JqZWN0IiwiVGltZXIiLCJpc05hTiIsIm1zIiwidGhpc0luc3QiLCJjbGVhclRpbWVvdXQiLCJjbGVhckludGVydmFsIiwiQW5pbWF0ZSIsIlN0YXRpYyIsIkxFVFRFUl9DT05TT05BTlQiLCJMRVRURVJfVk9XRUwiLCJBQkMiLCJOVU1CRVJTIiwiQU1QRVJTQU5EIiwiYXR0ciIsInR5cGVfZWxlbWVudCIsImFyZ3VtZW50cyIsImZyb20iLCJ0byIsImNsb25lIiwiY29weSIsInNyYyIsImluc3RhbmNlIiwiY3JlYXRlQXJyYXkiLCJhcnIiLCJyIiwiZmlsbCIsImNyZWF0ZUVsZW1lbnQiLCJpc19hdHRyIiwiaW5zZXJ0X2h0bWwiLCJpbnNlcnRfY2hpbGQiLCJpbnNlcnQiLCJ0eXBlIiwiaW5uZXIiLCJhdHRycyIsImNyZWF0ZUZyYWdtZW50IiwiZnJhZ21lbnQiLCJjc3MiLCJrIiwiZWxlbWVudHMiLCJ0eXBlU2VsZWN0b3IiLCJ0eXBlUHJvcGVydGllcyIsInBhcnNlIiwicDEiLCJzdHIiLCJwMiIsInBuIiwiaXgiLCJvIiwiZGVjb2RlR2V0UXVlcnkiLCJwYWlycyIsInF1ZXJ5IiwicGFpciIsImRlY29kZVVSSUNvbXBvbmVudCIsImRlZmluZWQiLCJkZWZpbmVkSW4iLCJzdGFjayIsImRvbUxvYWRlZCIsImRvYyIsImVhY2giLCJsaXN0IiwibG9vcHMiLCJnZXRQYXJlbnQiLCJlbGVtIiwiZW5jb2RlR2V0UXVlcnkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJwYXJhbXMiLCJleHRlbmQiLCJzb3VyY2UiLCJkZXN0aW5hdGlvbiIsIl9fIiwiZXh0ZW5kUmVjdXJzaXZlIiwicHJvcGVydHkiLCJmaW5kT2JqZWN0IiwidG1wIiwiZmluZE9iamVjdHMiLCJmaW5kcyIsImZpbmQiLCJmb3JtYXQiLCJyZWciLCJnZXREb2N1bWVudCIsImdldExvY2F0aW9uIiwiZ2V0V2luZG93IiwiaHR0cFJlcXVlc3QiLCJzZW5kRGF0YSIsInhociIsIm9wdGlvbnMiLCJhY3Rpb24iLCJtZXRob2QiLCJoZWFkZXJzIiwidXNlRW5jb2RlIiwidXNlRm9ybURhdGEiLCJhc3luYyIsInVzZXIiLCJwYXNzd29yZCIsImNvbmNhdGVTdHJpbmciLCJ0aGlzSW5zdGFuY2UiLCJpbmplY3QiLCJzdHIybm9kZSIsInN0cjJmcmFnbWVudCIsIm5vZGUyc3RyIiwicXVlcnlBbGwiLCJzZWFyY2giLCJpc0VtcHR5IiwiaXNOb2RlIiwibG9hZENTUyIsImxvYWRKUyIsImxvYWRKU1N5bmMiLCJtZXJnZSIsIm51bWJlcjJzdHJpbmciLCJwb3NpdGlvbk1vdXNlIiwicmFuZG9tIiwicmFuZG9tQ29sb3IiLCJyYW5kb21JdGVtIiwicmFuZG9tTnVtYmVyIiwicmFuZG9tU3RyaW5nIiwicmFuZG9tSHVtYW5pemVTdHJpbmciLCJyZWRpcmVjdCIsInR5cGVPZiIsInR5cGVPZlN0cmljdCIsInVyaSIsInRvT2JqZWN0IiwiaXNIVE1MU3RyaW5nIiwic2VsZWN0b3IiLCJkaXYiLCJOb2RlIiwibGluayIsIk1hdGgiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JpcHQiLCJzcmNzIiwiaXRlcmF0b3IiLCJzY3JpcHRzIiwib2JqZWN0MiIsIm9iamVjdDEiLCJjb250YWluZXIiLCJlIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsInJlY3QiLCJzY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwiY2xpZW50VG9wIiwiY2xpZW50TGVmdCIsInRvcCIsImxlZnQiLCJtaW4iLCJtYXgiLCJsZXR0ZXJzIiwiY29sb3IiLCJzaXplIiwicmVzIiwid2l0aE51bWJlcnMiLCJzdHJpbmciLCJhYnMiLCJjb25zb25hbnQiLCJ2b3dlbCIsInZvd2VsRmlyc3QiLCJzMSIsInMyIiwibG9jIiwicXVlcnlFbGVtZW50cyIsIkpTT04iLCJzaW1wbGVUeXBlcyIsInQiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3BsaXQiLCJmaWx0ZXIiLCJ2IiwicmV2ZXJzZSIsIkdhbWUiLCJsb2ciLCJFcnJvciIsImFwcE5vZGUiLCJmcHNOb2RlIiwiYmFsbHNOb2RlIiwidGFyZ2V0Tm9kZSIsImNyZWF0ZUJhbGwiLCJiYWxsIiwic3BlZWQiLCJjbGFzc05hbWUiLCJzdHlsZSIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvcGFjaXR5IiwidG9TdHJpbmciLCJhcHBlbmRDaGlsZCIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInNwZWVkWCIsInNwZWVkWSIsInJlbW92ZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImJhbGxBY3Rpb24iLCJiYWxscyIsImZvckVhY2giLCJtY0NsaWNrIiwidGltZXIiLCJoaWRlIiwic2hvdyIsImNsaWVudFgiLCJjbGllbnRZIiwidGFyZ2V0IiwiaW5kZXgiLCJtY3MiLCJzdGFydCIsInJvdW5kIiwiU3RhcnQiLCJVdGlsIiwidGVtcGxhdGVNZW51IiwidGVtcGxhdGVQYWdlMSIsInRlbXBsYXRlUGFnZTIiLCJ0ZW1wbGF0ZVBhZ2UzIiwic2NlbmVOb2RlIiwiTWVudUNvbXBvbmVudCIsImJ0bnMiLCJjb21wb25lbnROYW1lIiwiZ2V0QXR0cmlidXRlIiwicmVuZGVyIiwiUGFnZTFDb21wb25lbnQiLCJQYWdlMkNvbXBvbmVudCIsIlBhZ2UzQ29tcG9uZW50IiwicG9pbnROb2RlIiwiQXBwQ2xpcCIsImNyZWF0ZVJvYWRNQyIsImNsYXNzIiwibWMiLCJjcmVhdGVDYXJNQyIsImFuaW1hdGlvbiIsIlJvYWRNQyIsIkNhcjEiLCJjcmVhdGVQbGF5ZXJNQyIsIlBsYXllck1DIiwia2V5Ym9hcmQiLCJyaWdodCIsInVwIiwiZG93biIsImNvZGUiLCJpdGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5vZGVIZXJvIiwibm9kZUluZm8iLCJpbmZvIiwiaW5uZXJIVE1MIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsIm1vdmVDbGlwIiwiS2V5TWFwIiwiaXNVcCIsImlzRG93biIsImlzTGVmdCIsImlzUmlnaHQiLCJzZXRJbnRlcnZhbCIsImV2ZSIsInNjZW5lIiwibWFpbiIsIm1lbnUiLCJuZXh0IiwicGFnZTEiLCJwYWdlMiIsInBhZ2UzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLFksQ0FBQTtBQUNBOztBQUVBLFksQ0FBQTtBQUNBOztBQUVBLGdCQUZBLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBLGdCQU5BLENBTUE7QUFDQTtBQUNBLCtCQURBO0FBRUEsNEJBRkE7QUFHQTtBQUNBLG9C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QTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQSwwRSIsImZpbGUiOiJkZW1vLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJcbmNvbnN0IEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIHRoaXMuY29uc3RydWN0b3IgPSBmdW5jdGlvbiBBbmltYXRpb24oKSB7fTtcbiAgICBjb25zdCByb290ID0ge1xuICAgICAgICByZXF1ZXN0SWQ6IDAsXG4gICAgICAgIHN0YXJ0cGFseTogMCxcbiAgICAgICAgcGF1c2VkOiBmYWxzZSxcbiAgICAgICAgY2FsbGJhY2s6IDAsXG4gICAgICAgIGRlbGF5OiAwLFxuICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgfTtcblxuICAgIHJvb3Quc3RlcCA9IGZ1bmN0aW9uICh0aW1lc3RhbXApIHtcbiAgICAgICAgaWYgKCFyb290LnN0YXJ0cGFseSkgcm9vdC5zdGFydHBhbHkgPSB0aW1lc3RhbXA7XG4gICAgICAgIHJvb3QucHJvZ3Jlc3MgPSB0aW1lc3RhbXAgLSByb290LnN0YXJ0cGFseTtcblxuICAgICAgICBpZiAocm9vdC5jYWxsYmFjaykge1xuICAgICAgICAgICAgcm9vdC5jYWxsYmFjay5jYWxsKHJvb3QsIHJvb3QucHJvZ3Jlc3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJvb3QuZHVyYXRpb24gJiYgcm9vdC5kdXJhdGlvbiA+IHJvb3QucHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJvb3QuY2FuY2VsKCk7XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJvb3Quc3RlcCk7XG4gICAgICAgIGlmIChyb290LnBhdXNlZCkge1xuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyb290LnN0ZXApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcm9vdC5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcm9vdC5wYXVzZWQgPSAhcm9vdC5wYXVzZWQ7XG4gICAgfTtcblxuICAgIHJvb3Quc3RhcnQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByb290LmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvb3QucmVxdWVzdElkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyb290LnN0ZXApO1xuICAgIH07XG5cbiAgICByb290LmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHJvb3QucmVxdWVzdElkKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHJvb3Q7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGlvbkZyYW1lO1xuIiwiaW1wb3J0IHBvc2l0aW9uIGZyb20gXCIuLi9zdGF0aWMvcG9zaXRpb25cIjtcbmltcG9ydCBjb3B5IGZyb20gXCIuLi9zdGF0aWMvY29weVwiO1xuaW1wb3J0IGNsb25lIGZyb20gXCIuLi9zdGF0aWMvY2xvbmVcIjtcblxuZXhwb3J0IGNsYXNzIENsaXBDbGFzcyB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb24oZWxlbWVudCk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHBvc2l0aW9uLmVsZW1lbnQ7XG4gICAgICAgIHRoaXMuc2V0UHJvcGVydGllcygpO1xuICAgIH1cblxuICAgIG1vdmVUbyhwYXJlbnQpIHtcbiAgICAgICAgaWYgKHBhcmVudCBpbnN0YW5jZW9mIENsaXApIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnQuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJlbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb3B5VG8ocGFyZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGNvcHkodGhpcy5lbGVtZW50KTtcbiAgICAgICAgdGhpcy5tb3ZlVG8ocGFyZW50KTtcbiAgICB9XG5cbiAgICBvbiAoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaylcbiAgICB9XG5cbiAgICBjbG9uZSAoKSB7XG4gICAgICAgIHJldHVybiBjbG9uZSh0aGlzKTtcbiAgICB9XG5cbiAgICBzZXRQcm9wZXJ0aWVzKCkge1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnBvc2l0aW9uKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2tleV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSB0aGlzLnBvc2l0aW9uW2tleV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHBvc2l0aW9uKHRoaXMuZWxlbWVudC5wYXJlbnROb2RlKTtcbiAgICAgICAgICAgIHRoaXMueCA9IHRoaXMueCAtIHBhcmVudC54O1xuICAgICAgICAgICAgdGhpcy55ID0gdGhpcy55IC0gcGFyZW50Lnk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNsaXAnLCAodGhpcy5lbGVtZW50LmlkIHx8ICdjbGlwJykpO1xuICAgICAgICB9XG4gICAgfVxufVxuLyoqXG4gKlxuICogQHBhcmFtIGVsZW1lbnRcbiAqIEByZXR1cm5zIHsgYm90dG9tLCBlbGVtZW50LCBoZWlnaHQsIGxlZnQsIHJpZ2h0LCB0b3AsIHdpZHRoLCB4LCB5IH1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBDbGlwID0gZnVuY3Rpb24gKGVsZW1lbnQpXG57XG4gICAgY29uc3Qgcm9vdCA9IHBvc2l0aW9uKGVsZW1lbnQpO1xuXG4gICAgaWYgKHJvb3QuZWxlbWVudCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gcG9zaXRpb24oZWxlbWVudC5wYXJlbnROb2RlKTtcbiAgICAgICAgcm9vdC54ID0gcm9vdC54IC0gcGFyZW50Lng7XG4gICAgICAgIHJvb3QueSA9IHJvb3QueSAtIHBhcmVudC55O1xuICAgICAgICByb290LmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNsaXAnLCByb290LmVsZW1lbnQuaWQgfHwgJ2NsaXAnKTtcbiAgICB9XG5cbiAgICByb290Lm1vdmVUbyA9IGZ1bmN0aW9uIChwYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIGlmIChwYXJlbnRFbGVtZW50IGluc3RhbmNlb2YgQ2xpcCkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudEVsZW1lbnQuZWxlbWVudC5hcHBlbmRDaGlsZChyb290LmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJlbnRFbGVtZW50IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQocm9vdC5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByb290LmNvcHlUbyA9IGZ1bmN0aW9uIChwYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIHJvb3QuZWxlbWVudCA9IGNvcHkocm9vdC5lbGVtZW50KTtcbiAgICAgICAgcm9vdC5tb3ZlVG8ocGFyZW50RWxlbWVudCk7XG4gICAgfTtcblxuICAgIHJvb3Qub24gPSBmdW5jdGlvbiAoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJvb3QuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaylcbiAgICB9O1xuXG4gICAgcm9vdC5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNsb25lKHRoaXMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gcm9vdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENsaXA7XG4iLCJpbXBvcnQgc3RyMm5vZGUgZnJvbSBcIi4uL3N0YXRpYy9zdHIybm9kZVwiO1xuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi4vc3RhdGljL2lzTm9kZVwiO1xuaW1wb3J0IG1lcmdlIGZyb20gXCIuLi9zdGF0aWMvbWVyZ2VcIjtcbmltcG9ydCBzZWFyY2ggZnJvbSBcIi4uL3N0YXRpYy9zZWFyY2hcIjtcbmltcG9ydCBSb3h5IGZyb20gXCIuL1JveHlcIjtcbmltcG9ydCBjbG9uZSBmcm9tIFwiLi4vc3RhdGljL2Nsb25lXCI7XG5pbXBvcnQge3JhbmRvbUh1bWFuaXplU3RyaW5nLCByYW5kb21TdHJpbmd9IGZyb20gXCIuLi9zdGF0aWMvcmFuZG9tXCI7XG5cblxuZXhwb3J0IGNvbnN0IENvbXBvbmVudENsYXNzUHJvcGVydGllcyA9IHtcbiAgICBpZDogbnVsbCxcbiAgICBwcm9wczoge30sXG4gICAgdGVtcGxhdGU6IGZhbHNlLFxuICAgIGVsZW1lbnQ6IGZhbHNlLFxuICAgIG92ZXJyaWRlOiBmYWxzZSxcbiAgICBiZWZvcmU6ICgpID0+IHt9LFxuICAgIGluaXQ6ICgpID0+IHt9LFxuICAgIGRhdGE6ICgpID0+IHt9LFxuICAgIGNvbXBsZXRlOiAoKSA9PiB7fSxcbiAgICBtZXRob2RzOiB7fSxcbiAgICBub2RlOiB7fSxcbiAgICBvbjoge30sXG4gICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgY29tcG9uZW50czoge30sXG4gICAgY2hpbGRyZW46IFtdLFxuICAgIHBhcmVudDoge30sXG59O1xuXG4vKipcbiAqIEBwcm9wZXJ0eSBpZFxuICogQHByb3BlcnR5IHByb3BzXG4gKiBAcHJvcGVydHkgdGVtcGxhdGVcbiAqIEBwcm9wZXJ0eSBlbGVtZW50XG4gKiBAcHJvcGVydHkgb3ZlcnJpZGVcbiAqIEBwcm9wZXJ0eSBiZWZvcmUgW0Z1bmN0aW9uXVxuICogQHByb3BlcnR5IGluaXQgW0Z1bmN0aW9uXVxuICogQHByb3BlcnR5IGRhdGEgW0Z1bmN0aW9uXVxuICogQHByb3BlcnR5IGNvbXBsZXRlIFtGdW5jdGlvbl1cbiAqIEBwcm9wZXJ0eSBtZXRob2RzXG4gKiBAcHJvcGVydHkgbm9kZVxuICogQHByb3BlcnR5IG9uXG4gKiBAcHJvcGVydHkgaW5pdGlhbGl6ZWRcbiAqIEBwcm9wZXJ0eSBjb21wbGV0ZWRcbiAqIEBwcm9wZXJ0eSBjb21wb25lbnRzXG4gKiBAcHJvcGVydHkgY2hpbGRyZW5cbiAqIEBwcm9wZXJ0eSBwYXJlbnRcbiAqL1xuZXhwb3J0IGNsYXNzIENvbXBvbmVudENsYXNzXG57XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHByb3BlcnRpZXMgPSB7fSlcbiAgICB7XG4gICAgICAgIHRoaXMuc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuYmVmb3JlID09PSAnZnVuY3Rpb24nICYmICF0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICB0aGlzLmJlZm9yZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5lbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gc3RyMm5vZGUodGhpcy5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tZXRob2RzICYmIE9iamVjdC52YWx1ZXModGhpcy5tZXRob2RzKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMubWV0aG9kcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm1ldGhvZHNba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1ldGhvZHNba2V5XSA9IHRoaXMubWV0aG9kc1trZXldLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSB0aGlzLm1ldGhvZHNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmluaXQgPT09ICdmdW5jdGlvbicgJiYgIXRoaXMuaW5pdGlhbGl6ZWQpe1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRhdGEgJiYgT2JqZWN0LmtleXModGhpcy5kYXRhKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmRhdGFba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFba2V5XSA9IHRoaXMuZGF0YVtrZXldLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHRoaXMuZGF0YVtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50cyAmJiBPYmplY3Qua2V5cyh0aGlzLmNvbXBvbmVudHMpLmxlbmd0aCkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5jb21wb25lbnRzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuY29tcG9uZW50c1trZXldICYmIHRoaXMuY29tcG9uZW50c1trZXldLmhhc093blByb3BlcnR5KCdrZXknKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNba2V5XS5wYXJlbnQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2godGhpcy5jb21wb25lbnRzW2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmFsc2UgJiYgaXNOb2RlKHRoaXMuZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZSA9IHNlYXJjaCgnW2RhdGEtbm9kZV0nLCAnZGF0YS1ub2RlJywgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMub24gPSBzZWFyY2goJ1tkYXRhLW9uXScsICdkYXRhLW9uJywgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5jb21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiAhdGhpcy5jb21wbGV0ZWQpIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZS5jYWxsKHRoaXMuY29tcGxldGUsIHRoaXMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZS5jYWxsKHRoaXMuY29tcGxldGUsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQ29tcG9uZW50Lmxpc3RbdGhpcy5pZF0gPSB0aGlzO1xuICAgIH1cbiAgICBzZXQgdGVtcGxhdGUgKHRlbXBsYXRlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGVtcGxhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBzdHIybm9kZSh0ZW1wbGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTm9kZSh0ZW1wbGF0ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IHRlbXBsYXRlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCB0ZW1wbGF0ZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gICAgfVxuICAgIGNvbXBvbmVudChuYW1lKSB7XG4gICAgICAgIHJldHVybiBDb21wb25lbnRDbGFzcy5saXN0W25hbWVdO1xuICAgIH1cbiAgICBjb21wb25lbnRDaGlsZHJlbihuYW1lKSB7XG4gICAgICAgIHJldHVybiBDb21wb25lbnRDbGFzcy5saXN0W25hbWVdO1xuICAgIH1cbiAgICBjbG9uZShpZCkge1xuICAgICAgICBjb25zdCBjbG9uZWQgPSBjbG9uZSh0aGlzKTtcbiAgICAgICAgY2xvbmVkLnRlbXBsYXRlID0gY2xvbmVkLnRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgcmV0dXJuIGNsb25lZDtcbiAgICB9XG4gICAgc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgICAgIHByb3BlcnRpZXMgPSBtZXJnZShDb21wb25lbnRDbGFzc1Byb3BlcnRpZXMsIHByb3BlcnRpZXMpO1xuICAgICAgICBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2tleV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBwcm9wZXJ0aWVzW2tleV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9wZXJ0aWVzO1xuICAgIH1cbn1cbkNvbXBvbmVudENsYXNzLmxpc3QgPSB7fTtcblxuLyoqXG4gKlxuY29uZmlnOlxuICAgIGlkOiAnaWQnLFxuICAgIHByb3BzOiB7fSxcbiAgICB0ZW1wbGF0ZTogYGAsXG4gICAgaW5pdCAoKSB7fSxcbiAgICBkYXRhOiB7fSxcbiAgICBjb21wbGV0ZSAoKSB7fSxcbiAgICBtZXRob2RzOiB7fSxcbiAgICBub2RlOiB7fSxcbiAgICBjb21wb25lbnRzOiB7fSxcbiAgICBvdmVycmlkZTogZmFsc2UsXG4gICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgIGNvbXBsZXRlZDogZmFsc2UsXG5cbkNvbXBvbmVudCh7XG4gICAgaWQ6ICdFeHRlcm5hbFRlbXBsYXRlQ29tcG9uZW50JyxcbiAgICBwcm9wczogWyd0aXRsZSddLFxuICAgIHRlbXBsYXRlOiAndGVtcGxhdGUnLFxuICAgIGluaXQgKCkge30sXG4gICAgZGF0YToge1xuICAgICAgICBpdGVyYXRvcjogMCxcbiAgICB9LFxuICAgIGNvbXBsZXRlIChhcHApIHtcbiAgICAgICAgaWYgKHRoaXMubm9kZVsndGl0bGUnXSlcbiAgICAgICAgdGhpcy5ub2RlWyd0aXRsZSddLnRleHRDb250ZW50ID0gdGhpcy50aXRsZTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgYWRkIChlKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuaXRlcmF0b3IudGV4dENvbnRlbnQgPSArKyB0aGlzLmRhdGEuaXRlcmF0b3IgO1xuICAgICAgICB9LFxuICAgICAgICBtaW4gKGUpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5pdGVyYXRvci50ZXh0Q29udGVudCA9IC0tIHRoaXMuZGF0YS5pdGVyYXRvciA7XG4gICAgICAgIH0sXG4gICAgfVxufSk7XG5cbiAqIEBwYXJhbSBjb25maWdcbiAqIEByZXR1cm5zIHsqfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IENvbXBvbmVudCA9IGZ1bmN0aW9uIChjb25maWcpXG57XG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIC8vIGdldCBwcm9wZXJ0eSBieSBpZCBrZXl3b3JkXG4gICAgICAgIHJldHVybiBDb21wb25lbnQubGlzdFtjb25maWddO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghY29uZmlnLmlkKSB7XG4gICAgICAgICAgICBsZXQgcmFuZG9tTmFtZSA9ICByYW5kb21IdW1hbml6ZVN0cmluZyg2KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgcmFuZG9tTmFtZSA9IHJhbmRvbU5hbWUuc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyByYW5kb21OYW1lLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGNvbmZpZy5pZCA9ICdDb21wb25lbnQnICsgcmFuZG9tTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChDb21wb25lbnQubGlzdFtjb25maWcuaWRdKSB7XG4gICAgICAgICAgICByZXR1cm4gQ29tcG9uZW50Lmxpc3RbY29uZmlnLmlkXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbXAgPSBDb21wb25lbnQuY3JlYXRlKGNvbmZpZyk7XG5cbiAgICAgICAgY29tcC5jb21wb25lbnQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wLmNvbXBvbmVudHNbaWRdID8gY29tcC5jb21wb25lbnRzW2lkXSA6IG51bGw7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29tcC5jb21wb25lbnRDaGlsZHJlbiA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXAuY2hpbGRyZW4uZmluZCgoY29tcG9uZW50KSA9PiBjb21wb25lbnQuaWQgPT09IGlkKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb21wLmNsb25lID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICBjb25zdCBjbG9uZWQgPSBjbG9uZSh0aGlzKTtcbiAgICAgICAgICAgIGNsb25lZC50ZW1wbGF0ZSA9IGNsb25lZC50ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4gY2xvbmVkO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29tcC5iZWZvcmUgPT09ICdmdW5jdGlvbicgJiYgIWNvbXAuaW5pdGlhbGl6ZWQpe1xuICAgICAgICAgICAgY29tcC5iZWZvcmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29tcC50ZW1wbGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbXAudGVtcGxhdGUgPSBzdHIybm9kZShjb21wLnRlbXBsYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb21wLm1ldGhvZHMgJiYgT2JqZWN0LnZhbHVlcyhjb21wLm1ldGhvZHMpLmxlbmd0aCkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoY29tcC5tZXRob2RzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbXAubWV0aG9kc1trZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXAubWV0aG9kc1trZXldID0gY29tcC5tZXRob2RzW2tleV0uYmluZChjb21wKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb21wLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBba2V5XSA9IGNvbXAubWV0aG9kc1trZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbXAuaW5pdCA9PT0gJ2Z1bmN0aW9uJyAmJiAhY29tcC5pbml0aWFsaXplZCl7XG4gICAgICAgICAgICBjb21wLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbXAuaW5pdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbXAuZGF0YSAmJiBPYmplY3Qua2V5cyhjb21wLmRhdGEpLmxlbmd0aCkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoY29tcC5kYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbXAuZGF0YVtrZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXAuZGF0YVtrZXldID0gY29tcC5kYXRhW2tleV0uYmluZChjb21wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFjb21wLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcFtrZXldID0gY29tcC5kYXRhW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29tcC5jb21wb25lbnRzICYmIE9iamVjdC5rZXlzKGNvbXAuY29tcG9uZW50cykubGVuZ3RoKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb21wLmNvbXBvbmVudHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggY29tcC5jb21wb25lbnRzW2tleV0gJiYgY29tcC5jb21wb25lbnRzW2tleV0uaGFzT3duUHJvcGVydHkoJ2tleScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXAuY29tcG9uZW50c1trZXldLnBhcmVudCA9IGNvbXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbXAuY2hpbGRyZW4ucHVzaChjb21wLmNvbXBvbmVudHNba2V5XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc05vZGUoY29tcC50ZW1wbGF0ZSkpIHtcbiAgICAgICAgICAgIGNvbXAubm9kZSA9IHNlYXJjaCgnW2RhdGEtbm9kZV0nLCAnZGF0YS1ub2RlJywgY29tcC50ZW1wbGF0ZSk7XG4gICAgICAgICAgICBjb21wLm9uID0gc2VhcmNoKCdbZGF0YS1vbl0nLCAnZGF0YS1vbicsIGNvbXAudGVtcGxhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb21wLmNvbXBsZXRlID09PSAnZnVuY3Rpb24nICYmICFjb21wLmNvbXBsZXRlZCkge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29tcC5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBjb21wLmNvbXBsZXRlLmNhbGwoY29tcCwgY29tcCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbXAuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb21wLmNvbXBsZXRlLmNhbGwoY29tcCwgY29tcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBDb21wb25lbnQubGlzdFtjb21wLmlkXSA9IGNvbXA7XG4gICAgICAgIHJldHVybiBjb21wO1xuICAgIH1cbn07XG5Db21wb25lbnQubGlzdCA9IHt9O1xuQ29tcG9uZW50LmNyZWF0ZSA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICByZXR1cm4gbWVyZ2UoIHtcbiAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgIHByb3BzOiB7fSxcbiAgICAgICAgdGVtcGxhdGU6IGZhbHNlLFxuICAgICAgICBvdmVycmlkZTogZmFsc2UsXG4gICAgICAgIGluaXQ6ICgpID0+IHt9LFxuICAgICAgICBjb21wbGV0ZTogKCkgPT4ge30sXG4gICAgICAgIG1ldGhvZHM6IHt9LFxuICAgICAgICBub2RlOiB7fSxcbiAgICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICBjb21wb25lbnRzOiB7fSxcbiAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICBwYXJlbnQ6IHt9LFxuICAgIH0sIGNvbmZpZylcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDtcbiIsIi8qXG5jb25zdCBrZXlib2FyZCA9IEtleWJvYXJkRXZlbnRNYW5hZ2VyKCk7XG5rZXlib2FyZC5lYWNoKEVWRU5UX05BTUUsIGZ1bmN0aW9uIChldmVudCkge30pXG5rZXlib2FyZC53aXRoQ29uZGl0aW9uS2V5XG5rZXlib2FyZC5wcmVzc1xua2V5Ym9hcmQudXBcbmtleWJvYXJkLmRvd25cbiovXG5jb25zdCBLZXlib2FyZEV2ZW50TWFuYWdlciA9IGZ1bmN0aW9uICgpXG57XG4gICAgY29uc3Qgc3RvcmFnZSA9IHt9O1xuICAgIGNvbnN0IGJhc2VDYWxsYmFja3NMaXN0ID0ge307XG4gICAgY29uc3QgYWRkU3RvcmFnZSA9IGZ1bmN0aW9uIChldmVudCwga2V5LCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoIXN0b3JhZ2VbZXZlbnRdKSBzdG9yYWdlW2V2ZW50XSA9IHt9O1xuICAgICAgICBpZiAoIXN0b3JhZ2VbZXZlbnRdW2tleV0pIHN0b3JhZ2VbZXZlbnRdW2tleV0gPSBbXTtcbiAgICAgICAgc3RvcmFnZVtldmVudF1ba2V5XS5wdXNoKGNhbGxiYWNrKTtcblxuICAgICAgICBpZiAodHlwZW9mIGJhc2VDYWxsYmFja3NMaXN0W2V2ZW50XSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgYmFzZUNhbGxiYWNrc0xpc3RbZXZlbnRdID0gYmFzZUNhbGxiYWNrO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBiYXNlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoc3RvcmFnZSkubWFwKCh0eXBlKSA9PiB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzdG9yYWdlW3R5cGVdKS5tYXAoKGtleUNvZGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSggc3RvcmFnZVt0eXBlXVtrZXlDb2RlXSApKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VbdHlwZV1ba2V5Q29kZV0ubWFwKChjYWxsYmFjaykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IHR5cGUgJiYgcGFyc2VJbnQoa2V5Q29kZSkgPT09IGV2ZW50LmtleUNvZGUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChldmVudCwgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGVhY2hDYWxsYmFja3NMaXN0ID0ge307XG4gICAgY29uc3QgZWFjaENhbGxiYWNrID0gZnVuY3Rpb24gKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICBlYWNoQ2FsbGJhY2tzTGlzdFtldmVudF0gPSBjYWxsYmFjaztcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gc2V0dXBMaXN0ZW5lcnMgKCkge1xuICAgICAgICBjb25zdCBhZGQgPSAoKSA9PiB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhiYXNlQ2FsbGJhY2tzTGlzdCkubWFwKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGJhc2VDYWxsYmFja3NMaXN0W2V2ZW50XSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgT2JqZWN0LmtleXMoZWFjaENhbGxiYWNrc0xpc3QpLm1hcChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBlYWNoQ2FsbGJhY2tzTGlzdFtldmVudF0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgcm0gPSAoKSA9PiB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhiYXNlQ2FsbGJhY2tzTGlzdCkubWFwKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGJhc2VDYWxsYmFja3NMaXN0W2V2ZW50XSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgT2JqZWN0LmtleXMoZWFjaENhbGxiYWNrc0xpc3QpLm1hcChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBlYWNoQ2FsbGJhY2tzTGlzdFtldmVudF0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgICAgcm0oKTtcbiAgICAgICAgYWRkKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgcm9vdCA9IHtcbiAgICAgICAgZWFjaChldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGVhY2hDYWxsYmFjayhldmVudCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgc2V0dXBMaXN0ZW5lcnMoKTtcbiAgICAgICAgfSxcbiAgICAgICAgd2l0aENvbmRpdGlvbktleShldmVudCwga2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgYWRkU3RvcmFnZShldmVudCwga2V5LCBjYWxsYmFjayk7XG4gICAgICAgICAgICBzZXR1cExpc3RlbmVycygpO1xuICAgICAgICB9LFxuICAgICAgICBwcmVzcyhrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByb290LndpdGhDb25kaXRpb25LZXkoJ2tleXByZXNzJywga2V5LCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG4gICAgICAgIHVwKGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJvb3Qud2l0aENvbmRpdGlvbktleSgna2V5dXAnLCBrZXksIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcbiAgICAgICAgZG93bihrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByb290LndpdGhDb25kaXRpb25LZXkoJ2tleWRvd24nLCBrZXksIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHJvb3Q7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBLZXlib2FyZEV2ZW50TWFuYWdlcjtcbiIsImltcG9ydCBDbGlwIGZyb20gXCIuL0NsaXBcIjtcbmltcG9ydCB0b09iamVjdCBmcm9tIFwiLi4vc3RhdGljL3RvT2JqZWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBNb3ZlQ2xpcENsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzKSB7XG4gICAgICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gcHJvcGVydGllcztcbiAgICAgICAgY29uc3QgY2xpcCA9IENsaXAoZWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gY2xpcC5lbGVtZW50O1xuICAgICAgICB0aGlzLmNsaXAgPSBjbGlwO1xuICAgICAgICB0aGlzLmluaXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoKTtcblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuaW5pdCA9PT0gJ2Z1bmN0aW9uJyAmJiAhdGhpcy5pbml0aWFsaXplZCl7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCB4KCkgeyByZXR1cm4gdGhpcy5jbGlwLng7IH1cbiAgICBnZXQgeSgpIHsgcmV0dXJuIHRoaXMuY2xpcC55OyB9XG4gICAgZ2V0IHdpZHRoKCkgeyByZXR1cm4gdGhpcy5jbGlwLndpZHRoOyB9XG4gICAgZ2V0IGhlaWdodCgpIHsgcmV0dXJuIHRoaXMuY2xpcC5oZWlnaHQ7IH1cbiAgICBzZXQgeCh2YWx1ZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWFyZ2luTGVmdCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgdGhpcy5jbGlwLnggPSB2YWx1ZTtcbiAgICB9XG4gICAgc2V0IHkodmFsdWUpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1hcmdpblRvcCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgdGhpcy5jbGlwLnkgPSB2YWx1ZTtcbiAgICB9XG4gICAgc2V0IHdpZHRoKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS53aWR0aCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgdGhpcy5jbGlwLndpZHRoID0gdmFsdWU7XG4gICAgfVxuICAgIHNldCBoZWlnaHQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmhlaWdodCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgdGhpcy5jbGlwLmhlaWdodCA9IHZhbHVlO1xuICAgIH1cbiAgICBjbG9uZSAoYXBwZW5kID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB0b09iamVjdCh0aGlzKTtcbiAgICAgICAgcHJvcHMuZWxlbWVudCA9IHRoaXMuZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGlmIChhcHBlbmQgJiYgdGhpcy5lbGVtZW50KVxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQocHJvcHMuZWxlbWVudCk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBNb3ZlQ2xpcENsYXNzKHByb3BzKTtcbiAgICB9XG4gICAgc2V0UHJvcGVydGllcygpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5wcm9wZXJ0aWVzKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2tleV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSB0aGlzLnByb3BlcnRpZXNba2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1taXZlY2xpcCcsICh0aGlzLnByb3BlcnRpZXMuaWQgfHwgJ21pdmVjbGlwJykpO1xuICAgIH1cbn1cblxuY29uc3QgTW92ZUNsaXAgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBlbGVtZW50IH0gPSBjb25maWc7XG4gICAgY29uc3QgY2xpcCA9IENsaXAoIGVsZW1lbnQgKTtcblxuICAgIGlmKCFjbGlwLmVsZW1lbnQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQcm9wZXJ0eSBbZWxlbWVudF0gbm90IGZvbmQhJyk7XG4gICAgfVxuICAgIGNsaXAuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbWl2ZWNsaXAnLCBjb25maWcuaWQgfHwgJ21pdmVjbGlwJyk7XG5cbiAgICBjb25zdCByb290ID0ge1xuICAgICAgICBlbGVtZW50OiBjbGlwLmVsZW1lbnQsXG4gICAgICAgIHNldCB4KHZhbHVlKSB7XG4gICAgICAgICAgICByb290LmVsZW1lbnQuc3R5bGUubWFyZ2luTGVmdCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgICAgIGNsaXAueCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgeSh2YWx1ZSkge1xuICAgICAgICAgICAgcm9vdC5lbGVtZW50LnN0eWxlLm1hcmdpblRvcCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgICAgIGNsaXAueSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgd2lkdGgodmFsdWUpIHtcbiAgICAgICAgICAgIHJvb3QuZWxlbWVudC5zdHlsZS53aWR0aCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgICAgIGNsaXAud2lkdGggPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IGhlaWdodCh2YWx1ZSkge1xuICAgICAgICAgICAgcm9vdC5lbGVtZW50LnN0eWxlLmhlaWdodCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgICAgIGNsaXAuaGVpZ2h0ID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCB4KCkge1xuICAgICAgICAgICAgcmV0dXJuIGNsaXAueFxuICAgICAgICB9LFxuICAgICAgICBnZXQgeSgpIHtcbiAgICAgICAgICAgIHJldHVybiBjbGlwLnlcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IHdpZHRoKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNsaXAud2lkdGhcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGhlaWdodCgpIHtcbiAgICAgICAgICAgIHJldHVybiBjbGlwLmhlaWdodFxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBPYmplY3Qua2V5cyhjb25maWcpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJvb3Rba2V5XSA9IGNvbmZpZ1trZXldXG4gICAgfSk7XG5cbiAgICBpZiAodHlwZW9mIHJvb3QuaW5pdCA9PT0gJ2Z1bmN0aW9uJyAmJiAhcm9vdC5pbml0aWFsaXplZCl7XG4gICAgICAgIHJvb3QuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICByb290LmluaXQoKTtcbiAgICB9XG5cbiAgICByb290LmNsb25lID0gZnVuY3Rpb24gKGFwcGVuZCA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGNsb25lUHJvcGVydHkgPSB0b09iamVjdChyb290KTtcbiAgICAgICAgY2xvbmVQcm9wZXJ0eS5lbGVtZW50ID0gcm9vdC5lbGVtZW50LmNsb25lTm9kZShyb290KTtcbiAgICAgICAgaWYgKGFwcGVuZCkge1xuICAgICAgICAgICAgcm9vdC5lbGVtZW50LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoY2xvbmVQcm9wZXJ0eS5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTW92ZUNsaXAoY2xvbmVQcm9wZXJ0eSk7XG4gICAgfTtcblxuICAgIHJldHVybiByb290O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTW92ZUNsaXA7XG4iLCIvKipcbiAqXG5cblxuIGNvbnN0IHJ4RGF0YSA9IFJveHkoe1xuICAgICAgICB0aXRsZTogJycsXG4gICAgICAgIGJvZHk6ICcnLFxuICAgIH0pO1xuXG4gZnVuY3Rpb24gc2V0VG8oaWQsIGNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgZWxlbSA9IHF1ZXJ5KCcjJyArIGlkKTtcbiAgICAgICAgaW5qZWN0KGVsZW0sIGNvbnRleHQpO1xuICAgIH1cblxuIHJ4RGF0YS5ldmVudCgoa2V5LCB2YWx1ZXMpPT57XG4gICAgICAgIHNldFRvKGtleSwgdmFsdWVzKTtcbiAgICB9KTtcblxuIFRpbWVyLnRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByeERhdGEuZGlzcGF0Y2goJ3RpdGxlJywgJ0hlbGxvIGZyaWVuZCcpO1xuICAgICAgICByeERhdGEuZGlzcGF0Y2goJ2JvZHknLCAnRG8geW91IGhhcHB5IG5vdz8nKTtcbiAgICB9LCAyMDAwKTtcblxuIFRpbWVyLnRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByeERhdGEuZGlzcGF0Y2goJ2JvZHknLCAnTm8geWVzIG9mY291cnNlJyk7XG4gICAgfSwgNDAwMCk7XG4gKlxuICpcbiAqIEBwYXJhbSBwYXlsb2FkXG4gKiBAcmV0dXJucyB7e3Byb3h5OiAqLCBzZXQoKj0sICo9KTogKiwgZ2V0KCopOiAqLCBhY3Rpb24oKj0sICo9KTogKiwgZmlsbCgqPSwgKj0pOiAqfXxSb3h5fHt9fG51bGx8Ym9vbGVhbn1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5pbXBvcnQgY29weSBmcm9tIFwiLi4vc3RhdGljL2NvcHlcIjtcblxuY29uc3QgUm94eSA9IGZ1bmN0aW9uIChwYXlsb2FkKVxue1xuICAgIGNvbnN0IHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrcyA9IHtcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICB9O1xuXG4gICAgY29uc3QgcHJveHkgPSBuZXcgUHJveHkocGF5bG9hZCwge1xuICAgICAgICBnZXQob2JqLCBwcm9wKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvcCBpbiBvYmogPyBvYmpbcHJvcF0gOiBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBzZXQob2JqLCBwcm9wLCB2YWx1ZSkge1xuXG4gICAgICAgICAgICBvYmpbcHJvcF0gPSB2YWx1ZTtcblxuICAgICAgICAgICAgaWYgKHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrc1twcm9wXSAmJiB0eXBlb2YgcHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzW3Byb3BdID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgICAgICAgICAgcHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzW3Byb3BdLmNhbGwoe30sIHByb3AsIHZhbHVlLCBjb3B5KHByb3h5KSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgcHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3MuZGVmYXVsdC5jYWxsKHt9LCBwcm9wLCB2YWx1ZSwgY29weShwcm94eSkpO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogb2xkZXIgbmFtZTogc2VlfHNldD9cbiAgICAgICAgICogQHBhcmFtIGtleVxuICAgICAgICAgKiBAcGFyYW0gcGF5bG9hZFxuICAgICAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgICAgICovXG4gICAgICAgIGRpc3BhdGNoKGtleSwgcGF5bG9hZCkge1xuICAgICAgICAgICAgbGV0IHJlc3VsdDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09IFwiZnVuY3Rpb25cIiAmJiAhcGF5bG9hZCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGtleS5jYWxsKHt9LCBwcm94eSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxsKHJlc3VsdClcblxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcGF5bG9hZCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcGF5bG9hZC5jYWxsKHt9LCBwcm94eVtrZXldKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICBwcm94eVtrZXldID0gcmVzdWx0O1xuXG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICBwcm94eVtrZXldID0gcGF5bG9hZDtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGFjdGlvbigpXG4gICAgICAgICAqIEBkZXByZWNhdGVkXG4gICAgICAgICAqIEBwYXJhbSBrZXlcbiAgICAgICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAgICAgKi9cbiAgICAgICAgZXZlbnQoa2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub2JzZXJ2ZShrZXksIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRXZlbnQgY2hhbmdlIHByb3BlcnRpZXMgb2Ygc291cmNlIG9iamVjdFxuICAgICAgICAgKiBAcGFyYW0ga2V5XG4gICAgICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgICAgICovXG4gICAgICAgIG9ic2VydmUoa2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09IFwiZnVuY3Rpb25cIiAmJiAhY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3MuZGVmYXVsdCA9IGtleTtcbiAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrc1trZXldID0gdHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgPyBjYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICA6IG51bGw7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldChrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBrZXkgPyBwcm94eVtrZXldIDogY29weShwcm94eSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZmlsbChwYXlsb2FkLCB0bykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocGF5bG9hZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRvKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcHJveHlbdG9dKVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJveHlbdG9dID0ge307XG4gICAgICAgICAgICAgICAgICAgIHByb3h5W3RvXVtrZXldID0gcGF5bG9hZFtrZXldXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJveHlba2V5XSA9IHBheWxvYWRba2V5XVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgcHJveHkoKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJveHk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0UHJveHkoKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJveHk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgUm94eTtcbiIsImltcG9ydCBSb3h5IGZyb20gXCIuL1JveHlcIjtcblxuLyoqXG4gKiBjb25zdCByeCA9IFJveHlMaXN0ZW5lciAoe1xuICogICAgIGV2ZW50TmFtZSAoKSB7IC8vIGhhbmRsZXIgLi4uIH0sXG4gKiAgICAgZXZlbnROYW1lICgpIHsgLy8gaGFuZGxlciAuLi4gfSxcbiAqIH0pXG4gKiByeC5zZXQoKTtcbiAqIHJ4LmRpc3BhdGNoKCk7XG4gKlxuICogcnguYWN0aW9uKCk7XG4gKlxuICogQHBhcmFtIHBheWxvYWRcbiAqIEByZXR1cm5zIHt7cHJveHk6ICosIGRpc3BhdGNoKCo9LCAqPSk6IFJveHksIGdldCgqKTogKiwgZXZlbnQoKj0sICo9KTogdGhpcywgZmlsbCgqPSwgKj0pOiB0aGlzfX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBSb3h5TGlzdGVuZXIgPSBmdW5jdGlvbiAocGF5bG9hZCkge1xuXG4gICAgY29uc3QgYWN0aW9ucyA9IHtcbiAgICAgICAgX19hY3Rpb25fXygpIHtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBhY3Rpb25zTmFtZXMgPSB7fTtcblxuICAgIE9iamVjdC5rZXlzKHBheWxvYWQpLm1hcChmdW5jdGlvbiAoZXZlbnROYW1lLCBpbmRleCkge1xuICAgICAgICBhY3Rpb25zW2V2ZW50TmFtZV0gPSBwYXlsb2FkW2V2ZW50TmFtZV07XG5cbiAgICAgICAgaWYgKHR5cGVvZiBwYXlsb2FkW2V2ZW50TmFtZV0gPT09ICdmdW5jdGlvbicgJiYgZXZlbnROYW1lICE9PSBhY3Rpb25zLl9fYWN0aW9uX18ubmFtZSkge1xuICAgICAgICAgICAgYWN0aW9uc05hbWVzW2V2ZW50TmFtZV0gPSAnJztcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcnggPSBSb3h5KGFjdGlvbnNOYW1lcyk7XG4gICAgLy9cbiAgICByeC5hY3Rpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYWN0aW9uc05hbWVzXG4gICAgfTtcblxuICAgIHJ4LmV2ZW50KChldmVudEN1cnNvciwgdmFsdWVzKSA9PiB7XG4gICAgICAgIGFjdGlvbnMuX19hY3Rpb25fXy5jYWxsKGFjdGlvbnMsIGV2ZW50Q3Vyc29yLCB2YWx1ZXMpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKGFjdGlvbnMpLm1hcChmdW5jdGlvbiAoZXZlbnROYW1lLCBpbmRleCkge1xuXG4gICAgICAgICAgICBpZiAoZXZlbnRDdXJzb3IgPT09IGV2ZW50TmFtZSAmJiB0eXBlb2YgYWN0aW9uc1tldmVudE5hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uc1tldmVudE5hbWVdLmNhbGwoYWN0aW9ucywgZXZlbnRDdXJzb3IsIHZhbHVlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcng7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSb3h5TGlzdGVuZXI7XG4iLCJpbXBvcnQgY2xvbmUgZnJvbSBcIi4uL3N0YXRpYy9jbG9uZVwiO1xuXG5leHBvcnQgY2xhc3MgU2NlbmVDbGFzcyB7XG4gICAgY29uc3RydWN0b3IobGF5ZXJzID0ge30pIHtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gJ2RlZmF1bHQnO1xuICAgICAgICB0aGlzLmxheWVycyA9IHtcbiAgICAgICAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tEZWZhdWx0IFNjZW5lXScpXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIE9iamVjdC5rZXlzKGxheWVycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZChrZXksIGxheWVyc1trZXldKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMubGF5ZXJzW25hbWVdID0gY2FsbGJhY2s7XG4gICAgfVxuXG4gICAgZ2V0KG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5ZXJzW25hbWVdO1xuICAgIH1cblxuICAgIG5leHQoKSB7XG4gICAgICAgIGxldCBsZXN0ID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmxheWVycyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGtleXNbaV0gPT09IHRoaXMuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5c1tpICsgMV0gIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgICAgICAgICAgIGxlc3QgPSBrZXlzW2kgKyAxXTtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0ga2V5cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGxlc3QgPSBrZXlzWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbmRlcihsZXN0KTtcbiAgICB9XG5cbiAgICByZW5kZXIoa2V5ID0gJ2RlZmF1bHQnKSB7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IGtleTtcbiAgICAgICAgY29uc3QgY2IgPSB0aGlzLmxheWVyc1t0aGlzLmN1cnJlbnRdO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY2IgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgY2IuY2FsbChjYik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbG9uZShuYW1lKSB7XG4gICAgICAgIHJldHVybiBjbG9uZSh0aGlzKTtcbiAgICB9XG59XG5cbmNvbnN0IFNjZW5lID0gZnVuY3Rpb24gKGxheWVycykge1xuICAgIGNvbnN0IHJvb3QgPSB7XG4gICAgICAgIGN1cnJlbnQ6ICdkZWZhdWx0JyxcbiAgICAgICAgbGF5ZXJzOiB7XG4gICAgICAgICAgICBkZWZhdWx0KCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbRGVmYXVsdCBTY2VuZV0nKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgcm9vdC5hZGQgPSBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgcm9vdC5sYXllcnNbbmFtZV0gPSBjYWxsYmFjaztcbiAgICB9XG5cbiAgICByb290LmdldCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiByb290LmxheWVyc1tuYW1lXTtcbiAgICB9XG5cbiAgICByb290Lm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBsZXN0ID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhyb290LmxheWVycyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGtleXNbaV0gPT09IHJvb3QuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5c1tpICsgMV0gIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgICAgICAgICAgIGxlc3QgPSBrZXlzW2kgKyAxXTtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0ga2V5cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGxlc3QgPSBrZXlzWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByb290LnNob3cobGVzdCk7XG4gICAgfVxuXG4gICAgcm9vdC5zaG93ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByb290LmN1cnJlbnQgPSBrZXkgfHwgJ2RlZmF1bHQnO1xuICAgICAgICBjb25zdCBjYiA9IHJvb3QubGF5ZXJzW3Jvb3QuY3VycmVudF07XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjYiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBjYi5jYWxsKGNiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJvb3QuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjbG9uZSh0aGlzKTtcbiAgICB9O1xuXG4gICAgaWYgKGxheWVycyAmJiBsYXllcnMuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICBPYmplY3Qua2V5cyhsYXllcnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgcm9vdC5hZGQoa2V5LCBsYXllcnNba2V5XSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByb290O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2NlbmU7XG4iLCJpbXBvcnQgY2xvbmUgZnJvbSBcIi4uL3N0YXRpYy9jbG9uZVwiO1xuXG4vKipcbiAqXG4gICAgY29uc3Qgc3RlcHNBdHRhY2tIZXJvID0gU3RlcHNTY2VuZSh7XG4gICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICBzdGVwczogW1xuICAgICAgICAgICAge25hbWU6ICdzdGFydF9hdHRhY2snLCBjYWxsYmFjazogZnVuY30sXG4gICAgICAgICAgICB7bmFtZTogJ2hlcm9fYXR0YWNrJywgY2FsbGJhY2s6IGZ1bmN9LFxuICAgICAgICAgICAge25hbWU6ICdoZXJvX2F0dGFja19hbmltYXRpb24nLCBjYWxsYmFjazogZnVuY30sXG4gICAgICAgICAgICB7bmFtZTogJ2VuZF9hdHRhY2snLCBjYWxsYmFjazogZnVuY30sXG4gICAgICAgIF1cbiAgICB9KTtcblxuICAgIHN0ZXBzQXR0YWNrSGVyby5lYWNoU3RlcHMoZnVuY3Rpb24gKGNiT2JqZWN0LCBpbmRleCkge30pO1xuICAgIHN0ZXBzQXR0YWNrSGVyby5uZXh0KCk7XG5cbiAgICBzdGVwc0F0dGFja0hlcm8uZ290bygnaGVyb19hdHRhY2tfYW5pbWF0aW9uJykubmV4dCgpO1xuICAgIHN0ZXBzQXR0YWNrSGVyby5zdG9wKCk7XG4gKlxuICogQHBhcmFtIGNvbmZpZ1xuICogQHJldHVybnMge2FueX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBTdGVwc1NjZW5lID0gZnVuY3Rpb24gKGNvbmZpZyA9IHtzdGVwczogW119KSB7XG4gICAgY29uc3Qgcm9vdCA9IHtcbiAgICAgICAgaXRlcmF0aW9uOiAwLFxuICAgICAgICBsb29wOiBjb25maWcubG9vcCB8fCBmYWxzZSxcbiAgICAgICAgc3RlcF9pdGVyYXRpb246IDAsXG4gICAgICAgIHN0ZXBfc3RvcDogZmFsc2UsXG4gICAgICAgIHN0ZXBfY2FsbGJhY2tfZWFjaDogbnVsbCxcbiAgICAgICAgc3RlcF9jYWxsYmFja3M6IGNvbmZpZy5zdGVwcyB8fCB7fSxcbiAgICAgICAgc3RhcnQoKSB7XG4gICAgICAgICAgICByb290LnBsYXkoKTtcbiAgICAgICAgICAgIHJvb3Quc3RlcF9pdGVyYXRpb24gPSAwO1xuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH0sXG4gICAgICAgIHN0b3AoKSB7XG4gICAgICAgICAgICByb290LnN0ZXBfc3RvcCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICAgICAgcGxheSgpIHtcbiAgICAgICAgICAgIHJvb3Quc3RlcF9zdG9wID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICAgICAgZW5kKCkge1xuICAgICAgICAgICAgcm9vdC5zdGVwX2l0ZXJhdGlvbiA9IHJvb3Quc3RlcF9jYWxsYmFja3MubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9LFxuICAgICAgICBkZWxheShtcywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBjYWxsYmFjay5jYWxsKHJvb3QpOyB9LCBtcyk7XG4gICAgICAgIH0sXG4gICAgICAgIGdvdG8obmFtZSkge1xuICAgICAgICAgICAgcm9vdC5zdGVwX2NhbGxiYWNrcy5mb3JFYWNoKChvYmplY3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvb3Quc3RlcF9pdGVyYXRpb24gPSBpbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9LFxuICAgICAgICBlYWNoU3RlcHMoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJvb3Quc3RlcF9jYWxsYmFja19lYWNoID0gY2FsbGJhY2s7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICAgICAgbmV4dCgpIHtcbiAgICAgICAgICAgIGlmIChyb290LnN0ZXBfc3RvcCkgcmV0dXJuIHJvb3Q7XG5cbiAgICAgICAgICAgIGlmIChyb290LnN0ZXBfaXRlcmF0aW9uID4gcm9vdC5zdGVwX2NhbGxiYWNrcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgcm9vdC5zdGVwX2l0ZXJhdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKCFyb290Lmxvb3ApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Q2FsbGJhY2tPYmplY3QgPSByb290LnN0ZXBfY2FsbGJhY2tzW3Jvb3Quc3RlcF9pdGVyYXRpb25dO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJvb3Quc3RlcF9jYWxsYmFja19lYWNoID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgICAgIHJvb3Quc3RlcF9jYWxsYmFja19lYWNoLmNhbGwocm9vdCwgY3VycmVudENhbGxiYWNrT2JqZWN0LCByb290LnN0ZXBfaXRlcmF0aW9uLCByb290Lml0ZXJhdGlvbik7XG5cbiAgICAgICAgICAgIGN1cnJlbnRDYWxsYmFja09iamVjdC5jYWxsYmFjay5jYWxsKHJvb3QsIGN1cnJlbnRDYWxsYmFja09iamVjdCwgcm9vdC5zdGVwX2l0ZXJhdGlvbiwgcm9vdC5pdGVyYXRpb24pO1xuXG4gICAgICAgICAgICByb290Lml0ZXJhdGlvbisrXG4gICAgICAgICAgICByb290LnN0ZXBfaXRlcmF0aW9uKytcblxuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH0sXG4gICAgfVxuXG4gICAgcm9vdC5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNsb25lKHRoaXMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gcm9vdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0ZXBzU2NlbmU7XG4iLCJcbmNvbnN0IFRpbWVyID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBkZWxheSwgcmVwZWF0LCB0aGlzSW5zdGFuY2UpIHtcbiAgICB0aGlzLnJlcGVhdCA9IHJlcGVhdDtcbiAgICB0aGlzLml0ZXJhdG9yID0gMDtcbn07XG5cblxuVGltZXIuc2V0VGltZW91dCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgbXMsIHRoaXNJbnN0KSB7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyAmJiAhaXNOYU4obXMpICYmIG1zID4gMCkge1xuICAgICAgICB0aGlzSW5zdCA9IHR5cGVvZiB0aGlzSW5zdCA9PT0gJ29iamVjdCcgPyB0aGlzSW5zdCA6IHt9O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNJbnN0KVxuICAgICAgICB9LCBtcylcbiAgICB9XG59O1xuVGltZXIuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIG1zLCB0aGlzSW5zdCkge1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgJiYgIWlzTmFOKG1zKSAmJiBtcyA+IDApIHtcbiAgICAgICAgdGhpc0luc3QgPSB0eXBlb2YgdGhpc0luc3QgPT09ICdvYmplY3QnID8gdGhpc0luc3QgOiB7fTtcbiAgICAgICAgcmV0dXJuIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0luc3QpXG4gICAgICAgIH0sIG1zKVxuICAgIH1cbn07XG5UaW1lci5jbGVhclRpbWVvdXQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICBjbGVhclRpbWVvdXQoaWQpXG59O1xuVGltZXIuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uIChpZCkge1xuICAgIGNsZWFySW50ZXJ2YWwoaWQpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaW1lcjsiLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL3N0YXRpYy9nZXRXaW5kb3dcIjtcblxuaW1wb3J0IENsaXAgZnJvbSBcIi4vY29tcG9uZW50cy9DbGlwLmpzXCI7XG5pbXBvcnQgQ29tcG9uZW50LCB7Q29tcG9uZW50Q2xhc3N9IGZyb20gXCIuL2NvbXBvbmVudHMvQ29tcG9uZW50LmpzXCI7XG5pbXBvcnQgS2V5Ym9hcmRFdmVudE1hbmFnZXIgZnJvbSBcIi4vY29tcG9uZW50cy9LZXlib2FyZEV2ZW50TWFuYWdlci5qc1wiO1xuaW1wb3J0IE1vdmVDbGlwLCB7TW92ZUNsaXBDbGFzc30gZnJvbSBcIi4vY29tcG9uZW50cy9Nb3ZlQ2xpcC5qc1wiO1xuaW1wb3J0IFNjZW5lLCB7U2NlbmVDbGFzc30gZnJvbSBcIi4vY29tcG9uZW50cy9TY2VuZS5qc1wiO1xuaW1wb3J0IFN0ZXBzU2NlbmUgZnJvbSBcIi4vY29tcG9uZW50cy9TdGVwc1NjZW5lLmpzXCI7XG5pbXBvcnQgVGltZXIgZnJvbSBcIi4vY29tcG9uZW50cy9UaW1lci5qc1wiO1xuaW1wb3J0IFJveHlMaXN0ZW5lciBmcm9tIFwiLi9jb21wb25lbnRzL1JveHlMaXN0ZW5lci5qc1wiO1xuaW1wb3J0IFJveHkgZnJvbSBcIi4vY29tcG9uZW50cy9Sb3h5LmpzXCI7XG5pbXBvcnQgU3RhdGljIGZyb20gJy4vc3RhdGljJztcbmltcG9ydCBBbmltYXRpb25GcmFtZSBmcm9tIFwiLi9jb21wb25lbnRzL0FuaW1hdGlvbkZyYW1lXCI7XG5cbmNvbnN0IEFuaW1hdGUgPSB7XG4gICAgQ2xpcCxcbiAgICBDb21wb25lbnQsXG4gICAgQ29tcG9uZW50Q2xhc3MsXG4gICAgS2V5Ym9hcmRFdmVudE1hbmFnZXIsXG4gICAgTW92ZUNsaXAsXG4gICAgTW92ZUNsaXBDbGFzcyxcbiAgICBTY2VuZSxcbiAgICBTY2VuZUNsYXNzLFxuICAgIFN0ZXBzU2NlbmUsXG4gICAgVGltZXIsXG4gICAgUm94eUxpc3RlbmVyLFxuICAgIFJveHksXG4gICAgQW5pbWF0aW9uRnJhbWUsXG59O1xuXG5BbmltYXRlLlN0YXRpYyA9XG4gICAgQW5pbWF0ZS5VdGlsID1cbiAgICAgICAgU3RhdGljO1xuXG5pZiAoZ2V0V2luZG93KCkpIHtcbiAgICBnZXRXaW5kb3coKS5BbmltYXRlID0gQW5pbWF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0ZTtcbiIsIlxuZXhwb3J0IGNvbnN0IExFVFRFUl9DT05TT05BTlQgPSAnQixDLEQsRixHLEgsSixLLEwsTSxOLFAsUSxSLFMsVCxWLFcsWCxZLFonO1xuZXhwb3J0IGNvbnN0IExFVFRFUl9WT1dFTCA9ICdBLEUsSSxPLFUsWSc7XG5leHBvcnQgY29uc3QgQUJDID0gJ0EsQixDLEQsRSxGLEcsSCxJLEosSyxMLE0sTixPLFAsUSxSLFMsVCxVLFYsVyxYLFksWic7XG5leHBvcnQgY29uc3QgTlVNQkVSUyA9ICcwLDEsMiwzLDQsNSw2LDcsOCw5JztcbmV4cG9ydCBjb25zdCBBTVBFUlNBTkQgPSAnJic7XG4iLCJpbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5pbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuXG5cbmNvbnN0IGF0dHIgPSBmdW5jdGlvbiAoZWxlbWVudCwgbmFtZSwgdmFsdWUpIHtcbiAgICBjb25zdCB0eXBlX2VsZW1lbnQgPSB0eXBlT2YoZWxlbWVudCk7XG4gICAgaWYgKHR5cGVfZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZWxlbWVudCA9IHF1ZXJ5KGVsZW1lbnQpO1xuICAgIH1cblxuICAgIGlmIChpc05vZGUoZWxlbWVudCkgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBpZiAodHlwZU9mKG5hbWUsICdvYmplY3QnKSkge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIG5hbWUpXG4gICAgICAgICAgICAgICAgYXR0cihlbGVtZW50LCBrZXksIG5hbWVba2V5XSk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc05vZGUoZWxlbWVudCkgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXR0cjtcbiIsIi8qKlxuICpcbiAqIEBwYXJhbSBmcm9tXG4gKiBAcGFyYW0gdG9cbiAqIEByZXR1cm5zIHsqfVxuICovXG5mdW5jdGlvbiBjbG9uZShmcm9tLCB0bylcbntcbiAgICBpZiAoZnJvbSA9PT0gbnVsbCB8fCB0eXBlb2YgZnJvbSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIGZyb207XG4gICAgaWYgKGZyb20uY29uc3RydWN0b3IgIT09IE9iamVjdCAmJiBmcm9tLmNvbnN0cnVjdG9yICE9PSBBcnJheSkgcmV0dXJuIGZyb207XG4gICAgaWYgKGZyb20uY29uc3RydWN0b3IgPT09IERhdGUgfHwgZnJvbS5jb25zdHJ1Y3RvciA9PT0gUmVnRXhwIHx8IGZyb20uY29uc3RydWN0b3IgPT09IEZ1bmN0aW9uIHx8XG4gICAgICAgIGZyb20uY29uc3RydWN0b3IgPT09IFN0cmluZyB8fCBmcm9tLmNvbnN0cnVjdG9yID09PSBOdW1iZXIgfHwgZnJvbS5jb25zdHJ1Y3RvciA9PT0gQm9vbGVhbikge1xuICAgICAgICByZXR1cm4gbmV3IGZyb20uY29uc3RydWN0b3IoZnJvbSk7XG4gICAgfVxuXG4gICAgdG8gPSB0byB8fCBuZXcgZnJvbS5jb25zdHJ1Y3RvcigpO1xuXG4gICAgZm9yIChuYW1lIGluIGZyb20pXG4gICAge1xuICAgICAgICB0b1tuYW1lXSA9IHR5cGVvZiB0b1tuYW1lXSA9PSBcInVuZGVmaW5lZFwiID8gY2xvbmUoZnJvbVtuYW1lXSwgbnVsbCkgOiB0b1tuYW1lXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG87XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsb25lO1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4vaXNOb2RlXCI7XG5pbXBvcnQgdHlwZU9mU3RyaWN0IGZyb20gXCIuL3R5cGVPZlN0cmljdFwiO1xuXG5cbmNvbnN0IGNvcHkgPSBmdW5jdGlvbiAoc3JjLCBpbnN0YW5jZSlcbntcbiAgICBpZiAoaXNOb2RlKHNyYykpXG4gICAgICAgIHJldHVybiBzcmMuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc3JjKSlcbiAgICAgICAgcmV0dXJuIHNyYy5zbGljZSgpO1xuXG4gICAgaWYgKHR5cGVvZiBzcmMgPT09ICdmdW5jdGlvbicpXG4gICAgICAgIHJldHVybiBzcmMuYmluZChpbnN0YW5jZSB8fCB7fSk7XG5cbiAgICBpZiAodHlwZU9mKHNyYywgJ29iamVjdCcpKSB7XG4gICAgICAgIC8vIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzcmMpO1xuICAgICAgICBjb25zb2xlLmxvZyhzcmMsIGluc3RhbmNlKVxuICAgICAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKHNyYykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBzcmNba2V5XTtcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gY29weSh2YWx1ZSwgdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgPyBzcmMgOiB7fSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiBzcmM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb3B5O1xuIiwiLypcblxuY29uc3QgYXJyMCA9IGNyZWF0ZUFycmF5KDUpO1xuY29uc3QgYXJyMCA9IGNyZWF0ZUFycmF5KDUsIHRydWUpO1xuY29uc3QgYXJyMSA9IGNyZWF0ZUFycmF5KDUsIDEpO1xuY29uc3QgYXJyMiA9IGNyZWF0ZUFycmF5KDUsICdoZWxsbyB3b3JsZCcpO1xuY29uc3QgYXJyMyA9IGNyZWF0ZUFycmF5KDUsIFsxMDAsMjAwLDMwMF0pO1xuY29uc3QgYXJyNCA9IGNyZWF0ZUFycmF5KDUsIHthOidBJyxiOidCJyxjOidDJ30pO1xuXG4qL1xuXG4vKipcbiAqXG4gKiBAcGFyYW0gbnVtXG4gKiBAcGFyYW0gZmlsbFxuICogQHJldHVybnMge2FueVtdfVxuICovXG5jb25zdCBjcmVhdGVBcnJheSA9IGZ1bmN0aW9uIChudW0sIGZpbGwpIHtcbiAgICBsZXQgYXJyID0gW107XG5cbiAgICBpZiAodHlwZW9mIGZpbGwgPT09ICdudW1iZXInIHx8IHR5cGVvZiBmaWxsID09PSAnc3RyaW5nJyApe1xuICAgICAgICByZXR1cm4gbmV3IEFycmF5KG51bSkuZmlsbChmaWxsKTtcbiAgICB9XG5cbiAgICBhcnIgPSBuZXcgQXJyYXkobnVtKS5maWxsKDApO1xuICAgIGFyci5mb3JFYWNoKCh2YWx1ZSwgaSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGZpbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IHIgPSBmaWxsLmNhbGwoZmlsbCwgaSwgaSk7XG4gICAgICAgICAgICBhcnJbaV0gPSB0eXBlb2YgciA9PT0gJ2Jvb2xlYW4nIHx8IHIgPyByIDogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmlsbCkpIGFycltpXSA9IGZpbGxbaV0gPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGZpbGxbaV0gO1xuICAgICAgICBlbHNlIGFycltpXSA9IGZpbGw7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFycjtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBcnJheTtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5cblxuY29uc3QgY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uICh0YWcsIGF0dHJzLCBpbm5lcikge1xuICAgIGNvbnN0XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyksXG4gICAgICAgIGlzX2F0dHIgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZU9mKHNyYywgJ29iamVjdCcpICYmICFpc05vZGUoc3JjKVxuICAgICAgICB9LFxuICAgICAgICBpbnNlcnRfaHRtbCA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBzcmMpO1xuICAgICAgICB9LFxuICAgICAgICBpbnNlcnRfY2hpbGQgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHNyYyk7XG4gICAgICAgIH0sXG4gICAgICAgIGluc2VydCA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0eXBlT2Yoc3JjKTtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgICAgICBpbnNlcnRfaHRtbChzcmMpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcgJiYgaXNOb2RlKHNyYykpXG4gICAgICAgICAgICAgICAgaW5zZXJ0X2NoaWxkKHNyYyk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSAnYXJyYXknKVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgaSsrKSBpbnNlcnQoc3JjW2ldKTtcbiAgICAgICAgfTtcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyICYmICFpc19hdHRyKGF0dHJzKSkge1xuICAgICAgICBpbm5lciA9IGF0dHJzO1xuICAgICAgICBhdHRycyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChhdHRycylcbiAgICAgICAgZm9yIChsZXQgayBpbiBhdHRycylcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGssIGF0dHJzW2tdKTtcblxuICAgIGlmIChpbm5lcilcbiAgICAgICAgaW5zZXJ0KGlubmVyKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudDtcbiIsImltcG9ydCBpc05vZGUgZnJvbSBcIi4vaXNOb2RlXCI7XG5pbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuL3N0cjJub2RlXCI7XG5cblxuY29uc3QgY3JlYXRlRnJhZ21lbnQgPSBmdW5jdGlvbiAoYXBwZW5kKSB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgICBpZiAoaXNOb2RlKGFwcGVuZCkpXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGFwcGVuZCk7XG5cbiAgICBpZiAodHlwZU9mKGFwcGVuZCwgJ3N0cmluZycpKVxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChzdHIybm9kZShhcHBlbmQpKTtcblxuICAgIHJldHVybiBmcmFnbWVudFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRnJhZ21lbnQ7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuXG5cbmNvbnN0IGNzcyA9IGZ1bmN0aW9uIChzZWxlY3RvciwgcHJvcGVydGllcykge1xuICAgIGlmICghc2VsZWN0b3IgfHwgIXByb3BlcnRpZXMpIHJldHVybjtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICBjb25zdCBwcm9wID0ge307XG4gICAgICAgIHByb3BbcHJvcGVydGllc10gPSBhcmd1bWVudHNbMl07XG4gICAgICAgIHJldHVybiBjc3Moc2VsZWN0b3IsIHByb3ApO1xuICAgIH1cblxuICAgIGxldCBpLCBrLCBlbGVtZW50cyA9IG51bGwsXG4gICAgICAgIHR5cGVTZWxlY3RvciA9IHR5cGVPZihzZWxlY3RvciksXG4gICAgICAgIHR5cGVQcm9wZXJ0aWVzID0gdHlwZU9mKHByb3BlcnRpZXMpLFxuICAgICAgICBwYXJzZSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgICAgIGxldCBpLCBwMSA9IHN0ci5zcGxpdCgnOycpLCBwMiwgcG4sIGl4LCBvID0ge307XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcDEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwMiA9IHAxW2ldLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICAgICAgcG4gPSBwMlswXS50cmltKCk7XG4gICAgICAgICAgICAgICAgaXggPSBwbi5pbmRleE9mKCctJyk7XG4gICAgICAgICAgICAgICAgaWYgKGl4ICE9PSAtMSlcbiAgICAgICAgICAgICAgICAgICAgcG4gPSBwbi5zdWJzdHJpbmcoMCwgaXgpICsgcG5baXggKyAxXS50b1VwcGVyQ2FzZSgpICsgcG4uc3Vic3RyaW5nKGl4ICsgMik7XG4gICAgICAgICAgICAgICAgaWYgKHAyLmxlbmd0aCA9PT0gMilcbiAgICAgICAgICAgICAgICAgICAgb1twbl0gPSBwMlsxXS50cmltKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICB9O1xuXG5cbiAgICBzd2l0Y2ggKHR5cGVTZWxlY3Rvcikge1xuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgZWxlbWVudHMgPSBxdWVyeUFsbChzZWxlY3Rvcik7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgaWYgKGlzTm9kZShzZWxlY3RvcikpXG4gICAgICAgICAgICAgICAgZWxlbWVudHMgPSBbc2VsZWN0b3JdO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgZWxlbWVudHMgPSBzZWxlY3RvcjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50cykge1xuXG4gICAgICAgIGlmICh0eXBlUHJvcGVydGllcyA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICBwcm9wZXJ0aWVzID0gcGFyc2UocHJvcGVydGllcyk7XG5cbiAgICAgICAgZm9yIChpIGluIGVsZW1lbnRzKVxuICAgICAgICAgICAgZm9yIChrIGluIHByb3BlcnRpZXMpXG4gICAgICAgICAgICAgICAgZWxlbWVudHNbaV0uc3R5bGVba10gPSBwcm9wZXJ0aWVzW2tdO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50c1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3NzO1xuIiwiXG5jb25zdCBkZWNvZGVHZXRRdWVyeSA9IGZ1bmN0aW9uIChxdWVyeSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGNvbnN0IHBhaXJzID0gKHF1ZXJ5WzBdID09PSAnPycgPyBxdWVyeS5zdWJzdHIoMSkgOiBxdWVyeSkuc3BsaXQoJyYnKTtcbiAgICBwYWlycy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgIGxldCBwYWlyID0gcGFpcnNbaV0uc3BsaXQoJz0nKTtcbiAgICAgICAgcmVzdWx0W2RlY29kZVVSSUNvbXBvbmVudChwYWlyWzBdKV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFpclsxXSB8fCAnJyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlY29kZUdldFF1ZXJ5O1xuIiwiXG5jb25zdCBkZWZpbmVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVkO1xuIiwiXG5jb25zdCBkZWZpbmVkSW4gPSBmdW5jdGlvbiAoc3RhY2ssIHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0YWNrICYmIHN0YWNrW3ZhbHVlXSAhPT0gdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lZEluO1xuIiwiaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuL2dldERvY3VtZW50XCI7XG5cblxuY29uc3QgZG9tTG9hZGVkID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZG9jID0gZ2V0RG9jdW1lbnQoKTtcbiAgICBpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSlcbiAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xuICAgIGVsc2VcbiAgICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKClcbiAgICAgICAgfSwgZmFsc2UpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tTG9hZGVkO1xuIiwiaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5pbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuXG5cbi8qY29uc3QgZWFjaCA9IGZ1bmN0aW9uIChsaXN0LCBjYWxsYmFjaywgdG1wKSB7XG4gICAgaWYgKGxpc3QgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBsaXN0LmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIGl0ZW0sIGksIHRtcCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoaXNOb2RlKGxpc3QpKSB7XG4gICAgICAgIGVhY2goW10uc2xpY2UuY2FsbChsaXN0LmNoaWxkTm9kZXMpLCBjYWxsYmFjaywgdG1wKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3Qua2V5cyhsaXN0KS5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBpdGVtLCBpLCB0bXApO1xuICAgICAgICB9KTtcbiAgICB9XG59OyovXG5cbmNvbnN0IGVhY2ggPSBmdW5jdGlvbiAobGlzdCwgY2FsbGJhY2ssIGluc3RhbmNlID0ge30pIHtcbiAgICBsZXQgdHlwZSA9IHR5cGVPZihsaXN0KTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgbGlzdC5mb3JFYWNoKChpLCB2LCBhKSA9PiBjYWxsYmFjay5jYWxsKGluc3RhbmNlLCBpLCB2LCBhKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgIGlmIChpc05vZGUobGlzdCkpIHtcbiAgICAgICAgICAgICAgICBpZiAobGlzdCBpbnN0YW5jZW9mIE5vZGVMaXN0KVxuICAgICAgICAgICAgICAgICAgICBsaXN0ID0gZWFjaChBcnJheS5mcm9tKGxpc3QpLCBjYWxsYmFjaywgaW5zdGFuY2UpXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBsaXN0ID0gZWFjaChbbGlzdF0sIGNhbGxiYWNrLCBpbnN0YW5jZSlcbiAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3QpLmZvckVhY2goKGtleSkgPT4gY2FsbGJhY2suY2FsbChpbnN0YW5jZSwga2V5LCBsaXN0W2tleV0sIGxpc3QpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgbGlzdCA9IGVhY2gobGlzdC5zcGxpdChcIlwiKSwgY2FsbGJhY2ssIGluc3RhbmNlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgY29uc3QgYXJyID0gKG5ldyBBcnJheShsaXN0KSkuZmlsbCgwKTtcbiAgICAgICAgICAgIGxpc3QgPSBlYWNoKGFyciwgY2FsbGJhY2ssIGluc3RhbmNlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBsaXN0O1xufTtcblxuZWFjaC5wYXJlbnQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZpbHRlciwgbG9vcHMgPSAxMCkge1xuICAgIGNvbnN0IGdldFBhcmVudCA9IChlbGVtKSA9PiBlbGVtICYmIGVsZW0ucGFyZW50Tm9kZSA/IGVsZW0ucGFyZW50Tm9kZSA6IGZhbHNlO1xuICAgIGxldCBlbGVtZW50ID0gaXNOb2RlKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogcXVlcnkoc2VsZWN0b3IpO1xuICAgIHdoaWxlIChsb29wcyA+IDAgJiYgZWxlbWVudCkge1xuICAgICAgICBsb29wcy0tO1xuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKGZpbHRlcikpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGdldFBhcmVudChlbGVtZW50KTtcbiAgICB9XG59O1xuXG5lYWNoLmZpbHRlciA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZmlsdGVyLCBjYWxsYmFjaywgbG9vcHMgPSAxMCkge1xuICAgIGNvbnN0IGdldFBhcmVudCA9IChlbGVtKSA9PiBlbGVtICYmIGVsZW0ucGFyZW50Tm9kZSA/IGVsZW0ucGFyZW50Tm9kZSA6IGZhbHNlO1xuICAgIGxldCBlbGVtZW50ID0gaXNOb2RlKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogcXVlcnkoc2VsZWN0b3IpO1xuICAgIHdoaWxlIChsb29wcyA+IDAgJiYgZWxlbWVudCkge1xuICAgICAgICBsb29wcy0tO1xuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKGZpbHRlcikpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVsZW1lbnQpO1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZ2V0UGFyZW50KGVsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVhY2g7XG4iLCJcbmNvbnN0IGVuY29kZUdldFF1ZXJ5ID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICByZXN1bHQgKz0gKChyZXN1bHQubGVuZ3RoKSA/ICcmJyA6ICc/JykgKyBrZXkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tleV0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVuY29kZUdldFF1ZXJ5O1xuIiwiXG5cbmV4cG9ydCBjb25zdCBleHRlbmQgPSBmdW5jdGlvbiAoZGVzdGluYXRpb24sIHNvdXJjZSkge1xuICAgIGZvciAobGV0IHBhcmFtIGluIHNvdXJjZSlcbiAgICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShwYXJhbSkpXG4gICAgICAgICAgICBkZXN0aW5hdGlvbltwYXJhbV0gPSBzb3VyY2VbcGFyYW1dO1xuXG4gICAgZnVuY3Rpb24gX18oKSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IgPSBkZXN0aW5hdGlvbjtcbiAgICB9XG5cbiAgICBfXy5wcm90b3R5cGUgPSBzb3VyY2UucHJvdG90eXBlO1xuICAgIGRlc3RpbmF0aW9uLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcblxuZXhwb3J0IGNvbnN0IGV4dGVuZFJlY3Vyc2l2ZSA9IGZ1bmN0aW9uIChkZXN0aW5hdGlvbiwgc291cmNlKSB7XG4gICAgbGV0IHByb3BlcnR5O1xuICAgIGZvciAocHJvcGVydHkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChzb3VyY2VbcHJvcGVydHldICYmIHNvdXJjZVtwcm9wZXJ0eV0uY29uc3RydWN0b3IgJiYgc291cmNlW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gfHwge307XG4gICAgICAgICAgICBleHRlbmRSZWN1cnNpdmUoZGVzdGluYXRpb25bcHJvcGVydHldLCBzb3VyY2VbcHJvcGVydHldKTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBzb3VyY2VbcHJvcGVydHldO1xuICAgIH1cbiAgICByZXR1cm4gZGVzdGluYXRpb247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBleHRlbmQ7XG4iLCJpbXBvcnQgZmluZE9iamVjdHMgZnJvbSAnLi9maW5kT2JqZWN0cyc7XG5cblxuY29uc3QgZmluZE9iamVjdCA9IGZ1bmN0aW9uICh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSkge1xuICAgIGNvbnN0IHRtcCA9IGZpbmRPYmplY3RzKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKTtcbiAgICByZXR1cm4gdG1wLmxlbmd0aCA/IHRtcFswXSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmluZE9iamVjdDtcbiIsIlxuXG5jb25zdCBmaW5kT2JqZWN0cyA9IGZ1bmN0aW9uIChsaXN0LCBhdHRyLCBhdHRyVmFsdWUpIHtcbiAgICBsZXQgaSwgdG1wID0gW107XG4gICAgaWYgKGxpc3QgJiYgdHlwZW9mIGxpc3QgPT09IFwib2JqZWN0XCIpXG4gICAgICAgIGxpc3QgPSBPYmplY3QudmFsdWVzKGxpc3QpO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobGlzdCkpXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgaWYgKGxpc3RbaV0gJiYgbGlzdFtpXVthdHRyXSAhPT0gdW5kZWZpbmVkICYmIGxpc3RbaV1bYXR0cl0gPT09IGF0dHJWYWx1ZSlcbiAgICAgICAgICAgICAgICB0bXAucHVzaChsaXN0W2ldKTtcblxuICAgIHJldHVybiB0bXAgO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRzID0gZnVuY3Rpb24gKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKSB7XG4gICAgbGV0IHRtcCA9IGZpbmRPYmplY3RzKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKTtcbiAgICByZXR1cm4gdG1wLmxlbmd0aCA/IHRtcCA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmQgPSBmdW5jdGlvbiAodmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpIHtcbiAgICBsZXQgdG1wID0gZmluZE9iamVjdHModmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpO1xuICAgIHJldHVybiB0bXAubGVuZ3RoID8gdG1wWzBdIDogZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmaW5kT2JqZWN0cztcbiIsIlxuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcbmltcG9ydCBkZWZpbmVkIGZyb20gXCIuL2RlZmluZWRcIjtcbmltcG9ydCBub2RlMnN0ciBmcm9tIFwiLi9ub2RlMnN0clwiO1xuXG5cbi8qKlxuICogRm9ybWF0dGluZyBvZiBzdHJpbmcsIG9yIG1heWJlIHRlbXBsYXRlIGJ1aWxkZXJcbiAqXG4gKiBFeGFtcGxlczpcbiAqIC5mb3JtYXQoXCJIZWxsbyB7MH0sIHlvdXIgY29kZSBpcyB7MX0hXCIsIFsnSmFkZScsICdQcmVmZWN0J10pO1xuICogLmZvcm1hdChcIkhlbGxvIHtuYW1lfSwgeW91ciBjb2RlIGlzIHttZWFufSFcIiwge25hbWU6J0phZGUnLCBtZWFuOiAnUHJlZmVjdCd9KTtcbiAqXG4gKiBAcGFyYW0gc3RyaW5nICAgIFN0cmluZ1xuICogQHBhcmFtIGxpc3QgIEFycmF5fE9iamVjdFxuICogQHJldHVybnMgc3RyaW5nXG4gKi9cbmNvbnN0IGZvcm1hdCA9IGZ1bmN0aW9uIChzdHJpbmcsIGxpc3QpIHtcbiAgICBsZXQgcmVnO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGxpc3QpKVxuICAgICAgICByZWcgPSBuZXcgUmVnRXhwKC97KFxcZCspfS9nKTtcbiAgICBlbHNlIGlmIChsaXN0ICYmIHR5cGVvZiBsaXN0ID09PSAnb2JqZWN0JylcbiAgICAgICAgcmVnID0gbmV3IFJlZ0V4cCgveyhcXHcrKX0vZyk7XG5cbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UocmVnLCBmdW5jdGlvbiAobWF0Y2gsIG51bWJlcikge1xuICAgICAgICBpZiAoZGVmaW5lZChsaXN0W251bWJlcl0pICYmIGlzTm9kZShsaXN0W251bWJlcl0pKVxuICAgICAgICAgICAgbGlzdFtudW1iZXJdID0gbm9kZTJzdHIobGlzdFtudW1iZXJdKTtcblxuICAgICAgICByZXR1cm4gdHlwZW9mIGxpc3RbbnVtYmVyXSAhPT0gdW5kZWZpbmVkID8gbGlzdFtudW1iZXJdIDogbWF0Y2g7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXQ7XG4iLCJcbmNvbnN0IGdldERvY3VtZW50ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHJldHVybiBnbG9iYWwgPyBnbG9iYWwgOiB7fTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkb2N1bWVudCBvYmplY3Qgbm90IGV4aXN0IScpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldERvY3VtZW50O1xuIiwiXG5jb25zdCBnZXRMb2NhdGlvbiA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGlmICh0eXBlb2YgbG9jYXRpb24gIT09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbG9jYXRpb24gb2JqZWN0IG5vdCBleGlzdCEnKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRMb2NhdGlvbjtcbiIsIlxuY29uc3QgZ2V0V2luZG93ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3c7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmV0dXJuIGdsb2JhbCA/IGdsb2JhbCA6IHt9O1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3dpbmRvdyBvYmplY3Qgbm90IGV4aXN0IScpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFdpbmRvdztcbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5cbi8qKlxuICogQmFzZSBIVFRQIFJlcXVlc3RcbiAqXG4gKiAuaHR0cFJlcXVlc3QoIHttZXRob2Q6ICdHRVQnLCBkYXRhOiB7fSwgaGVhZGVyczoge30sIGFjdGlvbjogJy9pbmRleCd9LCBmdW5jdGlvbihzdGF0dXMsIGRhdGEpe30sIHRoaXNJbnN0YW5jZSApO1xuICpcbiAqIEBwYXJhbSBjb25maWdcbiAqICAgICAgZGF0YTogICAgICAgICAgIGRhdGEgdG8gc2VuZC4gT2JqZWN0LCBGb3JtRGF0YSAoUE9TVCBvbmx5KSwgSFRNTEZvcm1FbGVtZW50IChQT1NUIG9ubHkpXG4gKiAgICAgIGFjdGlvbiwgdXJsOiAgICB1cmwgYWRkcmVzcyB0b1xuICogICAgICBtZXRob2Q6ICAgICAgICAgcmVxdWVzdCBtZXRob2QgR0VUIFBPU1Qgb3IgY3VzdG9tIG1ldGhvZHMsIGRlZmF1bHQgJ0dFVCdcbiAqICAgICAgaGVhZGVyczogICAgICAgIGhlYWRlcnMgT2JqZWN0LCBrZXkgPSB2YWx1ZVxuICogICAgICB1c2VFbmNvZGU6ICAgICAgdXNlZCB1cmwgZW5jb2RpbmcsIGRlZmF1bHQgVFJVRS4gQm9vbGVhblxuICogICAgICB1c2VGb3JtRGF0YTogICAgdXNlZCBGb3JtRGF0YSwgZGVmYXVsdCBGQUxTRS4gQm9vbGVhblxuICogICAgICBhc3luYzogICAgICAgICAgZGVmYXVsdCBUUlVFLiBCb29sZWFuXG4gKiAgICAgIHVzZXI6XG4gKiAgICAgIHBhc3N3b3JkOlxuICpcbiAqIEBwYXJhbSBjYWxsYmFja1xuICogICAgICBleGVjdXRpbmcgZXZlbnQgLSBvbmxvYWRlbmQuIGZ1bmN0aW9uIChzdGF0dXMsIHJlc3BvbnNlVGV4dClcbiAqXG4gKiBAcGFyYW0gdGhpc0luc3RhbmNlXG4gKiAgICAgIG9iamVjdCAndGhpcycgZm9yIGNhbGxiYWNrXG4gKlxuICogQHJldHVybnMge1hNTEh0dHBSZXF1ZXN0fVxuICovXG5jb25zdCBodHRwUmVxdWVzdCA9IGZ1bmN0aW9uIChjb25maWcsIGNhbGxiYWNrLCB0aGlzSW5zdGFuY2UpIHtcbiAgICBsZXQga2V5O1xuICAgIGxldCBzZW5kRGF0YSA9IHt9O1xuICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGRhdGE6IGNvbmZpZy5kYXRhIHx8IHt9LFxuICAgICAgICBhY3Rpb246IGNvbmZpZy5hY3Rpb24gfHwgY29uZmlnLnVybCB8fCBkb2N1bWVudC5sb2NhdGlvbi5ocmVmLFxuICAgICAgICBtZXRob2Q6IGNvbmZpZy5tZXRob2QgPyBjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCkgOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczogY29uZmlnLmhlYWRlcnMgfHwge30sXG4gICAgICAgIHVzZUVuY29kZTogY29uZmlnLnVzZUVuY29kZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhY29uZmlnLnVzZUVuY29kZSxcbiAgICAgICAgdXNlRm9ybURhdGE6IGNvbmZpZy51c2VGb3JtRGF0YSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiAhIWNvbmZpZy51c2VGb3JtRGF0YSxcbiAgICAgICAgYXN5bmM6IGNvbmZpZy5hc3luYyA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhY29uZmlnLmFzeW5jLFxuICAgICAgICB1c2VyOiBjb25maWcudXNlciB8fCBudWxsLFxuICAgICAgICBwYXNzd29yZDogY29uZmlnLnVzZXIgfHwgbnVsbCxcbiAgICB9O1xuXG4gICAgY29uc3QgY29uY2F0ZVN0cmluZyA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgICAgICBmb3IgKGtleSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAnJicgKyBrZXkgKyAnPScgKyAob3B0aW9ucy51c2VFbmNvZGUgPyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tleV0pIDogcGFyYW1zW2tleV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIHRoaXNJbnN0YW5jZSA9ICh0eXBlT2YodGhpc0luc3RhbmNlLCAnb2JqZWN0JykpID8gdGhpc0luc3RhbmNlIDoge307XG5cbiAgICAvLyBkYXRhIHByZXBhcmVcbiAgICBpZiAob3B0aW9ucy5tZXRob2QgPT09ICdHRVQnKSB7XG5cbiAgICAgICAgLy8gZm9ybSB0byBGb3JtRGF0YVxuICAgICAgICBvcHRpb25zLmFjdGlvbiArPSBvcHRpb25zLmFjdGlvbi5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyc7XG4gICAgICAgIG9wdGlvbnMuYWN0aW9uICs9IGNvbmNhdGVTdHJpbmcob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgc2VuZERhdGEgPSB7fTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgLy8gcmVzZXQgdG8gdXNlRm9ybURhdGEgaW4gdHJ1ZVxuICAgICAgICBpZiAob3B0aW9ucy5kYXRhIGluc3RhbmNlb2YgRm9ybURhdGEpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuZGF0YSA9IHt9O1xuICAgICAgICAgICAgb3B0aW9ucy51c2VGb3JtRGF0YSA9IHRydWU7XG4gICAgICAgICAgICBzZW5kRGF0YSA9IG9wdGlvbnMuZGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvcm0gdG8gRm9ybURhdGFcbiAgICAgICAgaWYgKG9wdGlvbnMuZGF0YSBpbnN0YW5jZW9mIEhUTUxGb3JtRWxlbWVudCkge1xuICAgICAgICAgICAgc2VuZERhdGEgPSBuZXcgRm9ybURhdGEob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgICAgIG9wdGlvbnMudXNlRm9ybURhdGEgPSB0cnVlO1xuICAgICAgICAgICAgb3B0aW9ucy5kYXRhID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy51c2VGb3JtRGF0YSkge1xuICAgICAgICAgICAgaWYgKCEoc2VuZERhdGEgaW5zdGFuY2VvZiBGb3JtRGF0YSkpIHNlbmREYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMuZGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgc2VuZERhdGEuYXBwZW5kKGtleSwgb3B0aW9ucy51c2VFbmNvZGUgPyBlbmNvZGVVUklDb21wb25lbnQob3B0aW9ucy5kYXRhW2tleV0pIDogb3B0aW9ucy5kYXRhW2tleV0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbmREYXRhID0gY29uY2F0ZVN0cmluZyhvcHRpb25zLmRhdGEpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyBidWlsZCByZXF1ZXN0XG4gICAgeGhyLm9wZW4ob3B0aW9ucy5tZXRob2QsIG9wdGlvbnMuYWN0aW9uLCBvcHRpb25zLmFzeW5jLCBvcHRpb25zLnVzZXIsIG9wdGlvbnMucGFzc3dvcmQpO1xuXG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ1gtUmVxdWVzdGVkLVdpdGgnLCAnWE1MSHR0cFJlcXVlc3QnKTtcblxuICAgIGlmIChvcHRpb25zLm1ldGhvZCAhPT0gJ0dFVCcgJiYgIW9wdGlvbnMudXNlRm9ybURhdGEpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICB9XG5cbiAgICBmb3IgKGtleSBpbiBvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoa2V5LCBvcHRpb25zLmhlYWRlcnNba2V5XSk7XG4gICAgfVxuXG4gICAgeGhyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpc0luc3RhbmNlLlhNTEh0dHBSZXF1ZXN0ID0geGhyO1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNJbnN0YW5jZSwgeGhyLnN0YXR1cywgeGhyLnJlc3BvbnNlVGV4dCwgeGhyKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB4aHIuc2VuZE9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHhoci5zZW5kKHNlbmREYXRhKTtcbiAgICByZXR1cm4geGhyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaHR0cFJlcXVlc3Q7XG4iLCJpbXBvcnQgYXR0ciBmcm9tIFwiLi4vc3RhdGljL2F0dHJcIjtcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuLi9zdGF0aWMvY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0IGNyZWF0ZUZyYWdtZW50IGZyb20gXCIuLi9zdGF0aWMvY3JlYXRlRnJhZ21lbnRcIjtcbmltcG9ydCBjc3MgZnJvbSBcIi4uL3N0YXRpYy9jc3NcIjtcbmltcG9ydCBkb21Mb2FkZWQgZnJvbSBcIi4uL3N0YXRpYy9kb21Mb2FkZWRcIjtcbmltcG9ydCBnZXREb2N1bWVudCBmcm9tIFwiLi4vc3RhdGljL2dldERvY3VtZW50XCI7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuLi9zdGF0aWMvZ2V0V2luZG93XCI7XG5pbXBvcnQgaW5qZWN0IGZyb20gXCIuLi9zdGF0aWMvaW5qZWN0XCI7XG5pbXBvcnQgc3RyMm5vZGUgZnJvbSBcIi4uL3N0YXRpYy9zdHIybm9kZVwiO1xuaW1wb3J0IHN0cjJmcmFnbWVudCBmcm9tIFwiLi4vc3RhdGljL3N0cjJmcmFnbWVudFwiO1xuaW1wb3J0IG5vZGUyc3RyIGZyb20gXCIuLi9zdGF0aWMvbm9kZTJzdHJcIjtcbmltcG9ydCBxdWVyeSBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5XCI7XG5pbXBvcnQgcXVlcnlBbGwgZnJvbSBcIi4uL3N0YXRpYy9xdWVyeUFsbFwiO1xuaW1wb3J0IHNlYXJjaCBmcm9tIFwiLi4vc3RhdGljL3NlYXJjaFwiO1xuaW1wb3J0IGVuY29kZUdldFF1ZXJ5IGZyb20gXCIuLi9zdGF0aWMvZW5jb2RlR2V0UXVlcnlcIjtcbmltcG9ydCBkZWNvZGVHZXRRdWVyeSBmcm9tIFwiLi4vc3RhdGljL2RlY29kZUdldFF1ZXJ5XCI7XG5pbXBvcnQgaHR0cFJlcXVlc3QgZnJvbSBcIi4uL3N0YXRpYy9odHRwUmVxdWVzdFwiO1xuaW1wb3J0IGRlZmluZWQgZnJvbSBcIi4uL3N0YXRpYy9kZWZpbmVkXCI7XG5pbXBvcnQgZGVmaW5lZEluIGZyb20gXCIuLi9zdGF0aWMvZGVmaW5lZEluXCI7XG5pbXBvcnQgZWFjaCBmcm9tIFwiLi4vc3RhdGljL2VhY2hcIjtcbmltcG9ydCBleHRlbmQsIHtleHRlbmRSZWN1cnNpdmV9ICBmcm9tIFwiLi4vc3RhdGljL2V4dGVuZFwiO1xuaW1wb3J0IGlzRW1wdHkgZnJvbSBcIi4uL3N0YXRpYy9pc0VtcHR5XCI7XG5pbXBvcnQgZmluZE9iamVjdCBmcm9tIFwiLi4vc3RhdGljL2ZpbmRPYmplY3RcIjtcbmltcG9ydCBmaW5kT2JqZWN0cyBmcm9tIFwiLi4vc3RhdGljL2ZpbmRPYmplY3RzXCI7XG5pbXBvcnQgZm9ybWF0IGZyb20gXCIuLi9zdGF0aWMvZm9ybWF0XCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuLi9zdGF0aWMvaXNOb2RlXCI7XG5pbXBvcnQgbG9hZENTUyBmcm9tIFwiLi4vc3RhdGljL2xvYWRDU1NcIjtcbmltcG9ydCBsb2FkSlMgZnJvbSBcIi4uL3N0YXRpYy9sb2FkSlNcIjtcbmltcG9ydCBsb2FkSlNTeW5jIGZyb20gXCIuLi9zdGF0aWMvbG9hZEpTU3luY1wiO1xuaW1wb3J0IG1lcmdlIGZyb20gXCIuLi9zdGF0aWMvbWVyZ2VcIjtcbmltcG9ydCBudW1iZXIyc3RyaW5nIGZyb20gXCIuLi9zdGF0aWMvbnVtYmVyMnN0cmluZ1wiO1xuaW1wb3J0IG9uIGZyb20gXCIuLi9zdGF0aWMvb25cIjtcbmltcG9ydCBwb3NpdGlvbiBmcm9tIFwiLi4vc3RhdGljL3Bvc2l0aW9uXCI7XG5pbXBvcnQgcG9zaXRpb25Nb3VzZSBmcm9tIFwiLi4vc3RhdGljL3Bvc2l0aW9uTW91c2VcIjtcbmltcG9ydCByYW5kb20sIHtyYW5kb21Db2xvciwgcmFuZG9tSXRlbSwgcmFuZG9tTnVtYmVyLCByYW5kb21TdHJpbmcsIHJhbmRvbUh1bWFuaXplU3RyaW5nfSBmcm9tIFwiLi4vc3RhdGljL3JhbmRvbVwiO1xuaW1wb3J0IHJlZGlyZWN0IGZyb20gXCIuLi9zdGF0aWMvcmVkaXJlY3RcIjtcbmltcG9ydCB0eXBlT2YgZnJvbSBcIi4uL3N0YXRpYy90eXBlT2ZcIjtcbmltcG9ydCB0eXBlT2ZTdHJpY3QgZnJvbSBcIi4uL3N0YXRpYy90eXBlT2ZTdHJpY3RcIjtcbmltcG9ydCB1cmkgZnJvbSBcIi4uL3N0YXRpYy91cmlcIjtcbmltcG9ydCBjb3B5IGZyb20gXCIuLi9zdGF0aWMvY29weVwiO1xuaW1wb3J0IGNsb25lIGZyb20gXCIuLi9zdGF0aWMvY2xvbmVcIjtcbmltcG9ydCB0b09iamVjdCBmcm9tIFwiLi4vc3RhdGljL3RvT2JqZWN0XCI7XG5pbXBvcnQgaXNIVE1MU3RyaW5nIGZyb20gXCIuLi9zdGF0aWMvaXNIVE1MU3RyaW5nXCI7XG5pbXBvcnQgY3JlYXRlQXJyYXkgZnJvbSBcIi4uL3N0YXRpYy9jcmVhdGVBcnJheVwiO1xuXG5jb25zdCBTdGF0aWMgPSB7XG4gICAgYXR0cixcbiAgICBjcmVhdGVFbGVtZW50LFxuICAgIGNyZWF0ZUZyYWdtZW50LFxuICAgIGNzcyxcbiAgICBkb21Mb2FkZWQsXG4gICAgZ2V0RG9jdW1lbnQsXG4gICAgZ2V0V2luZG93LFxuICAgIGluamVjdCxcbiAgICBzdHIybm9kZSxcbiAgICBzdHIyZnJhZ21lbnQsXG4gICAgbm9kZTJzdHIsXG4gICAgcXVlcnksXG4gICAgcXVlcnlBbGwsXG4gICAgc2VhcmNoLFxuICAgIGVuY29kZUdldFF1ZXJ5LFxuICAgIGRlY29kZUdldFF1ZXJ5LFxuICAgIGh0dHBSZXF1ZXN0LFxuICAgIGRlZmluZWQsXG4gICAgZGVmaW5lZEluLFxuICAgIGV4dGVuZCxcbiAgICBleHRlbmRSZWN1cnNpdmUsXG4gICAgZWFjaCxcbiAgICBmaW5kT2JqZWN0LFxuICAgIGZpbmRPYmplY3RzLFxuICAgIGZvcm1hdCxcbiAgICBpc0VtcHR5LFxuICAgIGlzTm9kZSxcbiAgICBsb2FkQ1NTLFxuICAgIGxvYWRKUyxcbiAgICBsb2FkSlNTeW5jLFxuICAgIG1lcmdlLFxuICAgIG51bWJlcjJzdHJpbmcsXG4gICAgb24sXG4gICAgcG9zaXRpb24sXG4gICAgcG9zaXRpb25Nb3VzZSxcbiAgICByYW5kb20sXG4gICAgcmFuZG9tQ29sb3IsXG4gICAgcmFuZG9tSXRlbSxcbiAgICByYW5kb21OdW1iZXIsXG4gICAgcmFuZG9tU3RyaW5nLFxuICAgIHJhbmRvbUh1bWFuaXplU3RyaW5nLFxuICAgIHJlZGlyZWN0LFxuICAgIHR5cGVPZixcbiAgICB0eXBlT2ZTdHJpY3QsXG4gICAgdXJpLFxuICAgIGNvcHksXG4gICAgY2xvbmUsXG4gICAgdG9PYmplY3QsXG4gICAgaXNIVE1MU3RyaW5nLFxuICAgIGNyZWF0ZUFycmF5LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhdGljO1xuIiwiaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBxdWVyeSBmcm9tICcuL3F1ZXJ5JztcblxuXG5jb25zdCBpbmplY3QgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGRhdGEsIGFwcGVuZCwgdG8pXG57XG4gICAgaWYgKHR5cGVPZihzZWxlY3RvciwgJ2FycmF5JykpIHtcbiAgICAgICAgc2VsZWN0b3IuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgICAgaW5qZWN0KGVsZW0sIGRhdGEsIHRydWUsIHRvKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZU9mKHNlbGVjdG9yLCAnc3RyaW5nJykpXG4gICAgICAgIHNlbGVjdG9yID0gcXVlcnkoc2VsZWN0b3IsIHRvKTtcblxuICAgIGlmICghYXBwZW5kKVxuICAgICAgICBzZWxlY3Rvci50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgaWYgKGlzTm9kZShzZWxlY3RvcikpIHtcbiAgICAgICAgaWYgKGlzTm9kZShkYXRhKSkge1xuICAgICAgICAgICAgc2VsZWN0b3IuYXBwZW5kQ2hpbGQoZGF0YSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZU9mKGRhdGEsICdhcnJheScpKSB7XG4gICAgICAgICAgICBsZXQgaTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIGluamVjdChzZWxlY3RvciwgZGF0YVtpXSwgdHJ1ZSwgdG8pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZWN0b3IuaW5uZXJIVE1MID0gKCFhcHBlbmQpID8gZGF0YSA6IHNlbGVjdG9yLmlubmVySFRNTCArIGRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluamVjdDtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5cblxuY29uc3QgaXNFbXB0eSA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICBpZiAodHlwZU9mKHNyYywgJ29iamVjdCcpIHx8IHR5cGVPZihzcmMsICdhcnJheScpKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBzcmMpXG4gICAgICAgICAgICBpZiAoc3JjLmhhc093blByb3BlcnR5KGtleSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHR5cGVPZihzcmMsICdzdHJpbmcnKSkge1xuICAgICAgICBzcmMgPSBzcmMucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgICAgICAgcmV0dXJuIHNyYyA9PT0gXCJcIiB8fCBzcmMgPT09IFwiMFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoc3JjID09PSAwIHx8IHNyYyA9PT0gbnVsbCB8fCBzcmMgPT09IHVuZGVmaW5lZCB8fCBzcmMgPT09IGZhbHNlIHx8IGlzTmFOKHNyYykpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlzRW1wdHk7XG4iLCIvLyBpbXBvcnQgRE9NUGFyc2VyIGZyb20gJ0RPTVBhcnNlcic7XG5cbmNvbnN0IGlzSFRNTFN0cmluZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIC8vIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAvLyBjb25zdCB4bWxEb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHZhbHVlLCBcInRleHQveG1sXCIpO1xuICAgIC8vIHJldHVybiB4bWxEb2M7XG5cbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgcmV0dXJuICEhZGl2LmNoaWxkRWxlbWVudENvdW50O1xuICAgIFxuICAgIFxuICAgIFxufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNIVE1MU3RyaW5nO1xuIiwiXG5cbmNvbnN0IGlzTm9kZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiAodmFsdWUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFIHx8XG4gICAgICAgIHZhbHVlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSB8fFxuICAgICAgICB2YWx1ZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFIHx8XG4gICAgICAgIHZhbHVlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX05PREUpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBpc05vZGU7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuL2dldERvY3VtZW50XCI7XG5cbmNvbnN0IGxvYWRDU1MgPSBmdW5jdGlvbiAoc3JjLCBvbmxvYWQsIG9uZXJyb3IpIHtcbiAgICBpZiAoIXNyYykgcmV0dXJuIG51bGw7XG4gICAgaWYgKHR5cGVPZihzcmMsICdhcnJheScpKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsb2FkQ1NTKHNyY1tpXSwgb25sb2FkLCBvbmVycm9yKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRvYyA9IGdldERvY3VtZW50KCk7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2MuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICBjb25zdCBpZCA9IFwic3JjLVwiICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMik7XG5cbiAgICAgICAgbGluay5ocmVmID0gKHNyYy5zdWJzdHIoLTQpID09PSAnLmNzcycpID8gc3JjIDogc3JjICsgJy5jc3MnO1xuICAgICAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICAgICAgbGluay5pZCA9IGlkO1xuICAgICAgICBsaW5rLm9ubG9hZCA9IG9ubG9hZDtcbiAgICAgICAgbGluay5vbmVycm9yID0gb25lcnJvcjtcblxuICAgICAgICBkb2MuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgICAgcmV0dXJuIGxpbmtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ1NTO1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcbmltcG9ydCBnZXREb2N1bWVudCBmcm9tIFwiLi9nZXREb2N1bWVudFwiO1xuXG5jb25zdCBkb2N1bWVudEVsZW1lbnQgPSBnZXREb2N1bWVudCgpO1xuY29uc3QgbG9hZEpTID0gZnVuY3Rpb24gKHNyYywgb25sb2FkLCBvbmVycm9yKSB7XG4gICAgaWYgKCFzcmMpIHJldHVybiBudWxsO1xuICAgIGlmICh0eXBlT2Yoc3JjLCAnYXJyYXknKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNyYy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbG9hZEpTKHNyY1tpXSwgb25sb2FkLCBvbmVycm9yKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50RWxlbWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgY29uc3QgaWQgPSAncmVzb3VyY2UtJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLnNsaWNlKDIpO1xuXG4gICAgICAgIHNjcmlwdC5zcmMgPSAoc3JjLnN1YnN0cigtMykgPT09ICcuanMnKSA/IHNyYyA6IHNyYyArICcuanMnO1xuICAgICAgICBzY3JpcHQudHlwZSA9ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JztcbiAgICAgICAgc2NyaXB0LmlkID0gaWQ7XG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSBvbmxvYWQ7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gb25lcnJvcjtcblxuICAgICAgICBkb2N1bWVudEVsZW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICByZXR1cm4gc2NyaXB0XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZEpTOyIsIlxuaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRcIjtcblxuLyoqXG4gKiBMb2FkcyBhIHNjcmlwdCBlbGVtZW50IHdpdGggamF2YXNjcmlwdCBzb3VyY2VcbiAqXG4gKiAubG9hZEpTU3luYyAoIHtcbiAqICAgICAgbXlzY3JpcHQxOiAnL3BhdGgvdG8vbXlzY3JpcHQxJyxcbiAqICAgICAgbXlzY3JpcHQyOiAnL3BhdGgvdG8vbXlzY3JpcHQyJyxcbiAqICAgIH0sXG4gKiAgICBmdW5jdGlvbiAobGlzdCkge30pXG4gKlxuICogLmxvYWRKU1N5bmMgKCBbXG4gKiAgICAgICcvcGF0aC90by9teXNjcmlwdDEnLFxuICogICAgICAnL3BhdGgvdG8vbXlzY3JpcHQyJyxcbiAqICAgIF0sXG4gKiAgICBmdW5jdGlvbiAobGlzdCkge30pXG4gKlxuICogQG5hbWVzcGFjZSBOYW1lc3BhY2VBcHBsaWNhdGlvbi5sb2FkSlNTeW5jXG4gKiBAcGFyYW0gc3JjcyAgICAgICBPYmplY3QsIEFycmF5LiBpdGVtczoga2V5IGlzIElELCB2YWx1ZSBpcyBzcmNcbiAqIEBwYXJhbSBjYWxsYmFjayAgRnVuY3Rpb24gY2FsbGVkIHdoZW4gYWxsIHNyY3MgaXMgbG9hZGVkXG4gKiBAcGFyYW0gb25lcnJvciAgIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIGxvYWQgaXMgZmFpbGVkXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuY29uc3QgbG9hZEpTU3luYyA9IGZ1bmN0aW9uIChzcmNzLCBjYWxsYmFjaywgb25lcnJvcikge1xuICAgIGlmICh0eXBlT2Yoc3JjcywgJ29iamVjdCcpIHx8IHR5cGVPZihzcmNzLCAnYXJyYXknKSkge1xuICAgICAgICBpZiAodHlwZU9mKHNyY3MsICdhcnJheScpKSB7XG4gICAgICAgICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgICAgICAgIHNyY3MuZm9yRWFjaCggKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICBvYmpbJ3Jlc291cmNlLScgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyKV0gPSBpdGVtXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNyY3MgPSBvYmo7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGl0ZXJhdG9yID0gMDtcbiAgICAgICAgY29uc3Qgc2NyaXB0cyA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhzcmNzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNyYyA9IHNyY3Nba2V5XTtcbiAgICAgICAgICAgIGNvbnN0IHNjcmlwdCA9IGNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcsIHtcbiAgICAgICAgICAgICAgICBzcmM6IChzcmMuc3Vic3RyKC0zKSA9PT0gJy5qcycpID8gc3JjIDogc3JjICsgJy5qcycsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnLFxuICAgICAgICAgICAgICAgIGlkOiBrZXksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNjcmlwdC5vbmVycm9yID0gb25lcnJvcjtcbiAgICAgICAgICAgIHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHNjcmlwdHNbdGhpcy5pZF0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIGl0ZXJhdG9yICsrO1xuICAgICAgICAgICAgICAgIGlmIChpdGVyYXRvciA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIHNjcmlwdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH0pXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZEpTU3luYztcbiIsIlxuY29uc3QgbWVyZ2UgPSAob2JqZWN0MSwgb2JqZWN0MikgPT4ge1xuICAgIGZvciAobGV0IGtleSBpbiBvYmplY3QyKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIG9iamVjdDJba2V5XS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0ICkge1xuICAgICAgICAgICAgICAgIG9iamVjdDFba2V5XSA9IG1lcmdlKG9iamVjdDFba2V5XSwgb2JqZWN0MltrZXldKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0MVtrZXldID0gb2JqZWN0MltrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIG9iamVjdDFba2V5XSA9IG9iamVjdDJba2V5XTtcblxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3QxO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2U7XG4iLCJcblxuY29uc3Qgbm9kZTJzdHIgPSAgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lci5pbm5lckhUTUw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBub2RlMnN0cjtcbiIsIlxuZXhwb3J0IGNvbnN0IG51bWJlcjJzdHJpbmcgPSBmdW5jdGlvbiAoeCkge1xuICAgIGxldCBlO1xuICAgIGlmIChNYXRoLmFicyh4KSA8IDEuMCkge1xuICAgICAgICBlID0gcGFyc2VJbnQoeC50b1N0cmluZygpLnNwbGl0KCdlLScpWzFdKTtcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIHggKj0gTWF0aC5wb3coMTAsZS0xKTtcbiAgICAgICAgICAgIHggPSAnMC4nICsgKG5ldyBBcnJheShlKSkuam9pbignMCcpICsgeC50b1N0cmluZygpLnN1YnN0cmluZygyKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGUgPSBwYXJzZUludCh4LnRvU3RyaW5nKCkuc3BsaXQoJysnKVsxXSk7XG4gICAgICAgIGlmIChlID4gMjApIHtcbiAgICAgICAgICAgIGUgLT0gMjA7XG4gICAgICAgICAgICB4IC89IE1hdGgucG93KDEwLGUpO1xuICAgICAgICAgICAgeCArPSAobmV3IEFycmF5KGUrMSkpLmpvaW4oJzAnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG51bWJlcjJzdHJpbmc7XG4iLCJpbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5pbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuXG5cbmNvbnN0IG9uID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBldmVudE5hbWUsIGNhbGxiYWNrLCBidWJibGUpIHtcbiAgICBsZXQgaSwgZWxlbWVudHMgPSBbXTtcblxuICAgIHN3aXRjaCAodHlwZU9mKHNlbGVjdG9yKSkge1xuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgZWxlbWVudHMgPSBxdWVyeUFsbChzZWxlY3Rvcik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgIGlmIChpc05vZGUoc2VsZWN0b3IpKVxuICAgICAgICAgICAgICAgIGVsZW1lbnRzID0gW3NlbGVjdG9yXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgICBlbGVtZW50cyA9IHNlbGVjdG9yO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChlbGVtZW50c1tpXSAmJiBlbGVtZW50c1tpXS5hZGRFdmVudExpc3RlbmVyKVxuICAgICAgICAgICAgZWxlbWVudHNbaV0uYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrLCAhIWJ1YmJsZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgb247XG4iLCIvLyBpbXBvcnQgaXNOb2RlIGZyb20gXCIuL2lzTm9kZVwiO1xuXG5cbmltcG9ydCBpc0hUTUxTdHJpbmcgZnJvbSBcIi4vaXNIVE1MU3RyaW5nXCI7XG5pbXBvcnQgc3RyMm5vZGUgZnJvbSBcIi4vc3RyMm5vZGVcIjtcblxuY29uc3QgcG9zaXRpb24gPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgIGNvbnN0IGRhdGEgPSB7eDogMCwgeTogMCwgd2lkdGg6IDAsIGhlaWdodDogMH07XG4gICAgaWYgKHR5cGVvZiBlbGVtID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAoaXNIVE1MU3RyaW5nKGVsZW0pKSB7XG4gICAgICAgICAgICBlbGVtID0gc3RyMm5vZGUoZWxlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlbGVtID09PSB3aW5kb3cgfHwgZWxlbSA9PT0gZG9jdW1lbnQpIHtcbiAgICAgICAgZGF0YS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBkYXRhLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgZGF0YS5lbGVtZW50ID0gd2luZG93O1xuICAgIH1cbiAgICBlbHNlXG4gICAgaWYgKGVsZW0gJiYgZWxlbS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgaWYgKGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGxldCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCxcbiAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCxcbiAgICAgICAgICAgICAgICBjbGllbnRUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50VG9wIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50VG9wIHx8IDAsXG4gICAgICAgICAgICAgICAgY2xpZW50TGVmdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRMZWZ0IHx8IGRvY3VtZW50LmJvZHkuY2xpZW50TGVmdCB8fCAwO1xuXG4gICAgICAgICAgICBkYXRhLnkgPSBNYXRoLnJvdW5kKHJlY3QudG9wICsgc2Nyb2xsVG9wIC0gY2xpZW50VG9wKTtcbiAgICAgICAgICAgIGRhdGEueCA9IE1hdGgucm91bmQocmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdCAtIGNsaWVudExlZnQpO1xuICAgICAgICAgICAgZGF0YS53aWR0aCA9IGVsZW0ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICBkYXRhLmhlaWdodCA9IGVsZW0ub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgICAgICBkYXRhLnRvcCA9IHJlY3QudG9wICsgcGFnZVlPZmZzZXQ7XG4gICAgICAgICAgICBkYXRhLmxlZnQgPSByZWN0LmxlZnQgKyBwYWdlWE9mZnNldDtcbiAgICAgICAgICAgIGRhdGEucmlnaHQgPSByZWN0LnJpZ2h0ICsgcGFnZVhPZmZzZXQ7XG4gICAgICAgICAgICBkYXRhLmJvdHRvbSA9IHJlY3QuYm90dG9tICsgcGFnZVhPZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgdG9wID0gMCwgbGVmdCA9IDA7XG4gICAgICAgICAgICB3aGlsZSAoZWxlbSkge1xuICAgICAgICAgICAgICAgIHRvcCArPSBwYXJzZUludChlbGVtLm9mZnNldFRvcCwgMTApO1xuICAgICAgICAgICAgICAgIGxlZnQgKz0gcGFyc2VJbnQoZWxlbS5vZmZzZXRMZWZ0LCAxMCk7XG4gICAgICAgICAgICAgICAgZWxlbSA9IGVsZW0ub2Zmc2V0UGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF0YS55ID0gdG9wO1xuICAgICAgICAgICAgZGF0YS54ID0gbGVmdDtcbiAgICAgICAgICAgIGRhdGEud2lkdGggPSBlbGVtLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgZGF0YS5oZWlnaHQgPSBlbGVtLm9mZnNldEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBkYXRhLmVsZW1lbnQgPSBlbGVtO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvc2l0aW9uO1xuIiwiXG5cbmNvbnN0IHBvc2l0aW9uTW91c2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoIShldmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiBhcmd1bWVudCBpcyBub3QgdHlwZSB0aGUgTW91c2VFdmVudCEnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0LFxuICAgICAgICB5OiBldmVudC5jbGllbnRZIC0gcmVjdC50b3BcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcG9zaXRpb25Nb3VzZTtcbiIsImltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcblxuLyoqXG4gKlxuICogQHBhcmFtIHNlbGVjdG9yXG4gKiBAcGFyYW0gZnJvbVxuICogQHBhcmFtIGNhbGxiYWNrXG4gKiBAcGFyYW0gdGhpc0luc3RhbmNlXG4gKiBAcmV0dXJucyB7Tm9kZXxib29sZWFufVxuICovXG5jb25zdCBxdWVyeSA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZnJvbSwgY2FsbGJhY2ssIHRoaXNJbnN0YW5jZSkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gcXVlcnlBbGwoc2VsZWN0b3IsIGZyb20sIGNhbGxiYWNrLCB0aGlzSW5zdGFuY2UpO1xuICAgIHJldHVybiBlbGVtZW50cyAmJiBlbGVtZW50c1swXSA/IGVsZW1lbnRzWzBdIDogZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBxdWVyeTtcbiIsImltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSAnLi9nZXREb2N1bWVudCc7XG5cbmNvbnN0IGRvYyA9IGdldERvY3VtZW50KCk7XG5cbmNvbnN0IHF1ZXJ5QWxsID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBmcm9tLCBjYWxsYmFjaywgdGhpc0luc3RhbmNlKSB7XG4gICAgbGV0IGVsZW1lbnRzID0gW107XG4gICAgZnJvbSA9IGZyb20gfHwgZG9jO1xuXG4gICAgaWYgKGlzTm9kZShzZWxlY3RvcikpXG4gICAgICAgIHJldHVybiBbc2VsZWN0b3JdO1xuXG4gICAgaWYgKHR5cGVPZihmcm9tLCAnc3RyaW5nJykpXG4gICAgICAgIGZyb20gPSBkb2MucXVlcnlTZWxlY3Rvcihmcm9tKTtcbiAgICBpZiAoZnJvbSlcbiAgICAgICAgZWxlbWVudHMgPSBbXS5zbGljZS5jYWxsKGZyb20ucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xuXG4gICAgaWYgKGNhbGxiYWNrKVxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7Y2FsbGJhY2suY2FsbCh0aGlzSW5zdGFuY2UgfHwge30sIGVsZW1lbnQpfSk7XG5cbiAgICByZXR1cm4gZWxlbWVudHM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBxdWVyeUFsbDtcbiIsIi8qKlxuICogR2VuZXJhdGUgYSByYW5kb20gbnVtYmVyXG4gKiBAcGFyYW0gbWluXG4gKiBAcGFyYW0gbWF4XG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5pbXBvcnQge0FCQywgTEVUVEVSX0NPTlNPTkFOVCwgTEVUVEVSX1ZPV0VMLCBOVU1CRVJTfSBmcm9tIFwiLi9hYmNcIjtcblxuXG5leHBvcnQgY29uc3QgcmFuZG9tID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG4gICAgbWluID0gbWluIHx8IDA7XG4gICAgbWF4ID0gbWF4IHx8IDEwMDtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcbn07XG5cbi8qKlxuICogR2VuZXJhdGUgYSByYW5kb20gaGV4IGNvbG9yXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgcmFuZG9tQ29sb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbGV0dGVycyA9ICcwMTIzNDU2Nzg5QUJDREVGJy5zcGxpdCgnJyk7XG4gICAgbGV0IGksIGNvbG9yID0gJyMnO1xuICAgIGZvciAoaSA9IDA7IGkgPCA2OyBpKyspXG4gICAgICAgIGNvbG9yICs9IGxldHRlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYpXTtcbiAgICByZXR1cm4gY29sb3I7XG59O1xuXG5leHBvcnQgY29uc3QgcmFuZG9tTnVtYmVyID0gZnVuY3Rpb24gKHNpemUgPSA2KSB7XG4gICAgaWYgKHNpemUgPiAxNikge1xuICAgICAgICBsZXQgaSA9IE1hdGguY2VpbChzaXplLzE2KTtcbiAgICAgICAgbGV0IHJlcyA9ICcnO1xuICAgICAgICBmb3IgKGk7IGkgPiAwOyBpLS0pXG4gICAgICAgICAgICByZXMgKz0gQXJyYXkoMTYpLmZpbGwoMCkubWFwKGkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApKS5qb2luKCcnKTtcbiAgICAgICAgcmV0dXJuIHJlcy5zbGljZSgwLCBzaXplKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlSW50KEFycmF5KHNpemUpLmZpbGwoMCkubWFwKGkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApKS5qb2luKCcnKSk7XG59O1xuXG5leHBvcnQgY29uc3QgcmFuZG9tU3RyaW5nID0gZnVuY3Rpb24gKHNpemUgPSA2LCB3aXRoTnVtYmVycyA9IGZhbHNlKSB7XG4gICAgbGV0IGksIHN0cmluZyA9ICcnO1xuICAgIGNvbnN0IGFicyA9IHdpdGhOdW1iZXJzXG4gICAgICAgID8gQUJDICsgTlVNQkVSUy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcsJylcbiAgICAgICAgOiBBQkMudG9Mb3dlckNhc2UoKS5zcGxpdCgnLCcpO1xuICAgIGZvciAoaSA9IHNpemU7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgc3RyaW5nICs9IGFic1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhYnMubGVuZ3RoKV07XG4gICAgfVxuICAgIHJldHVybiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgcmFuZG9tSHVtYW5pemVTdHJpbmcgPSBmdW5jdGlvbiAoc2l6ZSA9IDYpIHtcbiAgICBsZXQgaSwgc3RyaW5nID0gJyc7XG4gICAgY29uc3QgY29uc29uYW50ID0gIExFVFRFUl9DT05TT05BTlQudG9Mb3dlckNhc2UoKS5zcGxpdCgnLCcpO1xuICAgIGNvbnN0IHZvd2VsID0gIExFVFRFUl9WT1dFTC50b0xvd2VyQ2FzZSgpLnNwbGl0KCcsJyk7XG4gICAgY29uc3Qgdm93ZWxGaXJzdCA9IChNYXRoLnJhbmRvbSgpICogMTApID4gNTtcbiAgICBmb3IgKGkgPSBzaXplIC8gMiArIDE7IGkgPiAwOyBpIC0tKSB7XG4gICAgICAgIGxldCBzMSA9IGNvbnNvbmFudFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb25zb25hbnQubGVuZ3RoKV07XG4gICAgICAgIGxldCBzMiA9IHZvd2VsW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHZvd2VsLmxlbmd0aCldO1xuICAgICAgICBzdHJpbmcgKz0gdm93ZWxGaXJzdCA/IHMxICsgczIgOiBzMiArIHMxO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmcuc3Vic3RyaW5nKDAsIHNpemUpO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gcmFuZG9tIGl0ZW0gZnJvbSBhcnJheVxuICogQHBhcmFtIGFyclxuICogQHJldHVybnMgeyp9XG4gKi9cbmV4cG9ydCBjb25zdCByYW5kb21JdGVtID0gZnVuY3Rpb24gKGFycikge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGFycikgPyBhcnJbcmFuZG9tKDAsIGFyci5sZW5ndGgtMSldIDogZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByYW5kb207XG4iLCJpbXBvcnQgZ2V0TG9jYXRpb24gZnJvbSBcIi4vZ2V0TG9jYXRpb25cIjtcbmltcG9ydCBnZXREb2N1bWVudCBmcm9tIFwiLi9nZXREb2N1bWVudFwiO1xuXG5cbmNvbnN0IHJlZGlyZWN0ID0gZnVuY3Rpb24gKHRvKSB7XG4gICAgY29uc3QgbG9jID0gZ2V0TG9jYXRpb24oKTtcbiAgICBjb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuICAgIGxvYy5ocmVmID0gdG8gfHwgZG9jLmhyZWY7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWRpcmVjdDtcbiIsImltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuaW1wb3J0IHF1ZXJ5IGZyb20gJy4vcXVlcnknO1xuXG4vKipcbiAqIHNlYXJjaCggJ3VsID4gbGknLCAgJ2RhdGEtbGluaycsIE5vZGVFbGVtZW50KTtcbiAqXG4gKiBAcGFyYW0gc2VsZWN0b3JcbiAqIEBwYXJhbSBhdHRyXG4gKiBAcGFyYW0gZnJvbVxuICogQHJldHVybnMge3t9fVxuICovXG5jb25zdCBzZWFyY2ggPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGF0dHIsIGZyb20pIHtcbiAgICBmcm9tID0gaXNOb2RlKGZyb20pID8gZnJvbSA6IHF1ZXJ5KGZyb20pO1xuICAgIGxldCBpID0gMCxcbiAgICAgICAga2V5LFxuICAgICAgICBlbGVtZW50cyA9IHt9LFxuICAgICAgICBxdWVyeUVsZW1lbnRzID0gcXVlcnlBbGwoc2VsZWN0b3IsIGZyb20gfHwgZG9jdW1lbnQuYm9keSk7XG5cbiAgICBpZiAocXVlcnlFbGVtZW50cykge1xuICAgICAgICB3aGlsZSAoaSA8IHF1ZXJ5RWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoIWF0dHIpXG4gICAgICAgICAgICAgICAgZWxlbWVudHNbaV0gPSBxdWVyeUVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXJ5RWxlbWVudHNbaV0uaGFzQXR0cmlidXRlKGF0dHIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IHF1ZXJ5RWxlbWVudHNbaV0uZ2V0QXR0cmlidXRlKGF0dHIpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50c1trZXldID0gcXVlcnlFbGVtZW50c1tpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnRzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoO1xuIiwiXG5jb25zdCBzdHIyZnJhZ21lbnQgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgaWYgKGRvY3VtZW50LmNyZWF0ZVJhbmdlKVxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoc3RyaW5nKTtcbiAgICBlbHNlIHtcbiAgICAgICAgbGV0IGksXG4gICAgICAgICAgICBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IHN0cmluZztcbiAgICAgICAgd2hpbGUgKGkgPSBjb250YWluZXIuZmlyc3RDaGlsZClcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGkpO1xuXG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdHIyZnJhZ21lbnQ7XG4iLCJpbXBvcnQgc3RyMmZyYWdtZW50IGZyb20gXCIuL3N0cjJmcmFnbWVudFwiO1xuXG5jb25zdCBzdHIybm9kZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGxldCBmcmFnbWVudCA9IHN0cjJmcmFnbWVudChzdHJpbmcpO1xuXG4gICAgc3dpdGNoIChmcmFnbWVudC5jaGlsZEVsZW1lbnRDb3VudCkge1xuICAgICAgICBjYXNlIDA6IGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXN1bHQgPSBmcmFnbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRhaW5lcjtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0cjJub2RlO1xuIiwiXG5jb25zdCB0b09iamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JylcbiAgICAgICAgPyBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbHVlKSlcbiAgICAgICAgOiB7fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9PYmplY3Q7XG4iLCJpbXBvcnQgdHlwZU9mU3RyaWN0IGZyb20gXCIuL3R5cGVPZlN0cmljdFwiO1xuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcblxuY29uc3QgdHlwZU9mID0gZnVuY3Rpb24gKHZhbHVlLCB0eXBlKSB7XG4gICAgY29uc3Qgc2ltcGxlVHlwZXMgPSBbJ251bGwnLCAnYm9vbGVhbicsICd1bmRlZmluZWQnLCAnZnVuY3Rpb24nLCAnc3RyaW5nJywgJ251bWJlcicsICdkYXRlJywgJ2FycmF5JywgJ29iamVjdCddO1xuICAgIGxldCB0ID0gdHlwZU9mU3RyaWN0KHZhbHVlKS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChzaW1wbGVUeXBlcy5pbmRleE9mKHQpID09PSAtMSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKVxuICAgICAgICB0ID0gJ29iamVjdCc7XG5cbiAgICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnID8gdHlwZS50b0xvd2VyQ2FzZSgpID09PSB0IDogdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHR5cGVPZjtcbiIsIlxuY29uc3QgdHlwZU9mU3RyaWN0ID0gZnVuY3Rpb24gKHZhbHVlLCB0eXBlKSB7XG4gICAgY29uc3QgdCA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpO1xuICAgIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyB0eXBlID09PSB0IDogdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHR5cGVPZlN0cmljdDtcbiIsImltcG9ydCBnZXRMb2NhdGlvbiBmcm9tIFwiLi9nZXRMb2NhdGlvblwiO1xuXG5cbmNvbnN0IHVyaSA9IGZ1bmN0aW9uICh1cmkpIHtcbiAgICBjb25zdCBsb2MgPSBnZXRMb2NhdGlvbigpO1xuICAgIHVyaSA9IHVyaSB8fCBsb2MucGF0aG5hbWU7XG4gICAgdXJpID0gdXJpLnJlcGxhY2UoL1xcLysvaWcsICcvJyk7XG4gICAgcmV0dXJuIHVyaS5sZW5ndGggPiAxICYmIHVyaS5zbGljZSgwLCAxKSAhPT0gJy8nID8gJy8nICsgdXJpIDogdXJpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXJpO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9zcmMvR2FtZSc7XG5cbmlmIChsb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpLmZpbHRlcigodikgPT4gdikucmV2ZXJzZSgpWzBdID09PSAnYW5pbWF0aW9uJykge1xuICAgIEdhbWUoKTtcbn0iLCJcbmNvbnN0IEdhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coJ0FuaW1hdGlvbiBkZW1vJyk7XG4gICAgaWYgKCEgd2luZG93LkFuaW1hdGUgfHwgISB3aW5kb3cuQW5pbWF0ZS5TdGF0aWMgKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0FuaW1hdGUgb2JqZWN0IG5vdCBleGlzdCEnKTtcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgICBDbGlwLFxuICAgICAgICBNb3ZlQ2xpcCxcbiAgICAgICAgU2NlbmUsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgVGltZXIsXG4gICAgICAgIFJveHksXG4gICAgICAgIEtleWJvYXJkRXZlbnRNYW5hZ2VyLFxuICAgICAgICBBbmltYXRpb25GcmFtZSxcbiAgICB9ID0gd2luZG93LkFuaW1hdGU7XG5cbiAgICBjb25zdCB7XG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBzZWFyY2gsXG4gICAgICAgIGluamVjdCxcbiAgICAgICAgdHlwZU9mLFxuICAgICAgICB0eXBlT2ZTdHJpY3QsXG4gICAgICAgIHVyaSxcbiAgICAgICAgY29weSxcbiAgICAgICAgY2xvbmUsXG4gICAgICAgIG9uLFxuICAgICAgICBlYWNoLFxuICAgICAgICByYW5kb20sXG4gICAgICAgIHJhbmRvbUNvbG9yLFxuICAgIH0gPSB3aW5kb3cuQW5pbWF0ZS5TdGF0aWM7XG5cbiAgICBjb25zdCBhcHBOb2RlID0gcXVlcnkoJyNhcHAnKTtcbiAgICBjb25zdCBmcHNOb2RlID0gcXVlcnkoJyNmcHMnKTtcbiAgICBjb25zdCBiYWxsc05vZGUgPSBxdWVyeSgnI2JhbGxzJyk7XG4gICAgY29uc3QgdGFyZ2V0Tm9kZSA9IHF1ZXJ5KCcudGFyZ2V0Jyk7XG5cbiAgICBjb25zdCBjcmVhdGVCYWxsID0gZnVuY3Rpb24gKGlkID0gJ2lkJykge1xuICAgICAgICBjb25zdCBiYWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHNpemUgPSByYW5kb20oOCwgNjApO1xuICAgICAgICBjb25zdCBzcGVlZCA9IDE7XG5cbiAgICAgICAgYmFsbC5jbGFzc05hbWUgPSAnYmFsbCc7XG4gICAgICAgIGJhbGwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGJhbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcmFuZG9tQ29sb3IoKTtcbiAgICAgICAgYmFsbC5zdHlsZS5vcGFjaXR5ID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygpO1xuXG4gICAgICAgIGFwcE5vZGUuYXBwZW5kQ2hpbGQoYmFsbCk7XG4gICAgICAgIHJldHVybiBNb3ZlQ2xpcCh7XG4gICAgICAgICAgICB4OiByYW5kb20oNTAsIHdpbmRvdy5pbm5lcldpZHRoIC0gNTApLFxuICAgICAgICAgICAgeTogcmFuZG9tKDUwLCB3aW5kb3cuaW5uZXJIZWlnaHQgLSA1MCksXG4gICAgICAgICAgICBzcGVlZFg6IHJhbmRvbSgtc3BlZWQsIHNwZWVkKSB8fCAwLjEsXG4gICAgICAgICAgICBzcGVlZFk6IHJhbmRvbSgtc3BlZWQsIHNwZWVkKSB8fCAwLjEsXG4gICAgICAgICAgICB3aWR0aDogc2l6ZSxcbiAgICAgICAgICAgIGhlaWdodDogc2l6ZSxcbiAgICAgICAgICAgIGVsZW1lbnQ6IGJhbGwsXG4gICAgICAgICAgICByZW1vdmUoKXtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYmFsbEFjdGlvbiAobXMpIHtcbiAgICAgICAgaWYgKG1zKSB7XG4gICAgICAgICAgICBtcy54ICs9IG1zLnNwZWVkWDtcbiAgICAgICAgICAgIG1zLnkgKz0gbXMuc3BlZWRZO1xuICAgICAgICAgICAgaWYgKG1zLnggPCAwKSBtcy5zcGVlZFggKj0gLTE7XG4gICAgICAgICAgICBpZiAobXMueCA+IHdpbmRvdy5pbm5lcldpZHRoIC0gbXMud2lkdGgpIG1zLnNwZWVkWCAqPSAtMTtcbiAgICAgICAgICAgIGlmIChtcy55IDwgMCkgbXMuc3BlZWRZICo9IC0xO1xuICAgICAgICAgICAgaWYgKG1zLnkgPiB3aW5kb3cuaW5uZXJIZWlnaHQgLSBtcy5oZWlnaHQpIG1zLnNwZWVkWSAqPSAtMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGJhbGxzID0gbmV3IEFycmF5KDEwMCkuZmlsbCgwKTtcblxuICAgIGJhbGxzLmZvckVhY2goKHYsIGkpID0+IHtcbiAgICAgICAgYmFsbHNbaV0gPSBjcmVhdGVCYWxsKGkgKyAxKTtcbiAgICB9KVxuXG4gICAgY29uc3QgbWNDbGljayA9IE1vdmVDbGlwKHtcbiAgICAgICAgeDogLTEwMCxcbiAgICAgICAgeTogLTEwMCxcbiAgICAgICAgd2lkdGg6IDUsXG4gICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgZWxlbWVudDogdGFyZ2V0Tm9kZSxcbiAgICAgICAgdGltZXI6IG51bGwsXG4gICAgICAgIGhpZGUoKXt0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ30sXG4gICAgICAgIHNob3coKXtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHt0aGlzLmhpZGUoKX0sIDEwMDApO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmUoKXt0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpfSxcbiAgICB9KTtcblxuICAgIG9uKGFwcE5vZGUsICdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIG1jQ2xpY2sueCA9IGUuY2xpZW50WDtcbiAgICAgICAgbWNDbGljay55ID0gZS5jbGllbnRZO1xuICAgICAgICBtY0NsaWNrLnNob3coKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2JhbGwnKSB7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBtY3MgPSBiYWxscy5maWx0ZXIoKHYsIGkpPT57XG4gICAgICAgICAgICAgICAgaWYgKHYuZWxlbWVudCA9PT0gZS50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChtY3MgJiYgbWNzWzBdICYmIG1jc1swXS5lbGVtZW50ICYmIGluZGV4ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIG1jc1swXS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgYmFsbHNbaW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBBbmltYXRpb25GcmFtZSgpLnN0YXJ0KChwcm9ncmVzcykgPT4ge1xuICAgICAgICBpZiAoTWF0aC5yb3VuZChwcm9ncmVzcykgJSAxMDAwID09PSAwKSB7fVxuXG4gICAgICAgIGVhY2goYmFsbHMsIChiYWxsKSA9PiB7XG4gICAgICAgICAgICBiYWxsQWN0aW9uKGJhbGwpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8qXG4gICAgICAgIGNvbnN0IGlzID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhIWFyZ3NbMF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHR5cGVWYWx1ZSA9IHR5cGVPZihhcmdzWzFdKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0eXBlV2l0aCA9IHR5cGVPZihhcmdzWzFdKTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZVZhbHVlICE9PSAnc3RyaW5nJyAmJiB0eXBlV2l0aCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVPZihhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFyZ3NbMF0gPT09IGFyZ3NbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAqL1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIiwiaW1wb3J0IFN0YXJ0IGZyb20gJy4vc3JjL1N0YXJ0JztcblxuaWYgKGxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJykuZmlsdGVyKCh2KSA9PiB2KS5yZXZlcnNlKClbMF0gPT09ICdjb21wb25lbnRzJykge1xuICAgIFN0YXJ0KCk7XG59IiwiXG5jb25zdCBTdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcIkNvbXBvbmVudHMgZGVtb1wiKTtcbiAgICBpZiAoISB3aW5kb3cuQW5pbWF0ZSB8fCAhIHdpbmRvdy5BbmltYXRlLlN0YXRpYyApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignQW5pbWF0ZSBvYmplY3Qgbm90IGV4aXN0IScpO1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBxdWVyeUFsbCxcbiAgICAgICAgc2VhcmNoLFxuICAgICAgICBpbmplY3QsXG4gICAgICAgIHR5cGVPZixcbiAgICAgICAgY29weSxcbiAgICAgICAgY2xvbmUsXG4gICAgICAgIG9uLFxuICAgICAgICBzdHIybm9kZSxcbiAgICAgICAgZWFjaCxcbiAgICB9ID0gd2luZG93LkFuaW1hdGUuVXRpbDtcblxuICAgIGNvbnN0IHtcbiAgICAgICAgQ2xpcCxcbiAgICAgICAgTW92ZUNsaXAsXG4gICAgICAgIEtleWJvYXJkRXZlbnRNYW5hZ2VyLFxuICAgICAgICBUaW1lcixcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBSb3h5TGlzdGVuZXIsXG4gICAgICAgIFJveHksXG4gICAgfSA9IHdpbmRvdy5BbmltYXRlO1xuXG5cbiAgICBjb25zdCB0ZW1wbGF0ZU1lbnUgPSBgXG4gICAgPGRpdiBjbGFzcz1cIm1lbnVcIj5cbiAgICAgICAgPGRpdiBkYXRhLW9uPVwiUGFnZTFDb21wb25lbnRcIj5QYWdlIDE8L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLW9uPVwiUGFnZTJDb21wb25lbnRcIj5QYWdlIDI8L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLW9uPVwiUGFnZTNDb21wb25lbnRcIj5QYWdlIDM8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgY29uc3QgdGVtcGxhdGVQYWdlMSA9IGBcbiAgICA8ZGl2IGNsYXNzPVwicGFnZSBiZy1jeWFuXCI+XG4gICAgICAgIDxoMT5QYWdlIDE8L2gxPlxuICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICBjb25zdCB0ZW1wbGF0ZVBhZ2UyID0gYFxuICAgIDxkaXYgY2xhc3M9XCJwYWdlIGJnLWRhcmtjeWFuXCI+XG4gICAgICAgIDxoMT5QYWdlIDI8L2gxPlxuICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICBjb25zdCB0ZW1wbGF0ZVBhZ2UzID0gYFxuICAgIDxkaXYgY2xhc3M9XCJwYWdlIGJnLWRhcmtncmVlblwiPlxuICAgICAgICA8aDE+UGFnZSAzPC9oMT5cbiAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgY29uc3Qgc2NlbmVOb2RlID0gcXVlcnkoJyNzY2VuZScpO1xuXG4gICAgY29uc3QgTWVudUNvbXBvbmVudCA9IENvbXBvbmVudCh7XG4gICAgICAgIGlkOiAnTWVudUNvbXBvbmVudCcsXG4gICAgICAgIHByb3BzOiB7fSxcbiAgICAgICAgdGVtcGxhdGU6IHN0cjJub2RlKHRlbXBsYXRlTWVudSksXG4gICAgICAgIGNvbXBsZXRlICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdIZWxsbyAnICsgdGhpcy5pZCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGJ0bnMgPSBzZWFyY2goJ1tkYXRhLW9uXScsICdkYXRhLW9uJywgdGhpcy50ZW1wbGF0ZSk7XG5cbiAgICAgICAgICAgIGVhY2goYnRucywgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhrZXksIHZhbHVlKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgb24odGhpcy50ZW1wbGF0ZSwgJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50TmFtZSA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb24nKTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbY29tcG9uZW50TmFtZV0ucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBQYWdlMUNvbXBvbmVudCA9IENvbXBvbmVudCh7XG4gICAgICAgIGlkOiAnUGFnZTFDb21wb25lbnQnLFxuICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGVQYWdlMSxcbiAgICAgICAgcHJvcHM6IHt9LFxuICAgICAgICBpbml0ICgpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBsZXRlICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdIZWxsbyAnICsgdGhpcy5pZCk7XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHJlbmRlcigpe1xuICAgICAgICAgICAgICAgIGluamVjdCh0aGlzLnRlbXBsYXRlLCBNZW51Q29tcG9uZW50LnRlbXBsYXRlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBpbmplY3Qoc2NlbmVOb2RlLCB0aGlzLnRlbXBsYXRlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBQYWdlMkNvbXBvbmVudCA9IENvbXBvbmVudCh7XG4gICAgICAgIGlkOiAnUGFnZTJDb21wb25lbnQnLFxuICAgICAgICBwcm9wczoge30sXG4gICAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZVBhZ2UyLFxuICAgICAgICBjb21wbGV0ZSAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSGVsbG8gJyArIHRoaXMuaWQpO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICByZW5kZXIoKXtcbiAgICAgICAgICAgICAgICBpbmplY3QodGhpcy50ZW1wbGF0ZSwgTWVudUNvbXBvbmVudC50ZW1wbGF0ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgaW5qZWN0KHNjZW5lTm9kZSwgdGhpcy50ZW1wbGF0ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgUGFnZTNDb21wb25lbnQgPSBDb21wb25lbnQoe1xuICAgICAgICBpZDogJ1BhZ2UzQ29tcG9uZW50JyxcbiAgICAgICAgcHJvcHM6IHt9LFxuICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGVQYWdlMyxcbiAgICAgICAgY29tcGxldGUgKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0hlbGxvICcgKyB0aGlzLmlkKTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgcmVuZGVyKCl7XG4gICAgICAgICAgICAgICAgaW5qZWN0KHRoaXMudGVtcGxhdGUsIE1lbnVDb21wb25lbnQudGVtcGxhdGUsIHRydWUpO1xuICAgICAgICAgICAgICAgIGluamVjdChzY2VuZU5vZGUsIHRoaXMudGVtcGxhdGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIE1lbnVDb21wb25lbnQuY29tcG9uZW50cyA9IHtcbiAgICAgICAgUGFnZTFDb21wb25lbnQsXG4gICAgICAgIFBhZ2UyQ29tcG9uZW50LFxuICAgICAgICBQYWdlM0NvbXBvbmVudCxcbiAgICB9O1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGFydDtcbiIsImltcG9ydCBHYW1lIGZyb20gJy4vc3JjL0dhbWUnO1xuXG5pZiAobG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKS5maWx0ZXIoKHYpID0+IHYpLnJldmVyc2UoKVswXSA9PT0gJ2RlbW8nKSB7XG4gICAgR2FtZSgpO1xufSIsIlxuY29uc3QgR2FtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZygnR2FtZSBkZW1vJyk7XG4gICAgaWYgKCEgd2luZG93LkFuaW1hdGUgfHwgISB3aW5kb3cuQW5pbWF0ZS5TdGF0aWMgKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0FuaW1hdGUgb2JqZWN0IG5vdCBleGlzdCEnKTtcbiAgICB9XG5cbiAgICBjb25zdCB7XG4gICAgICAgIENsaXAsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgS2V5Ym9hcmRFdmVudE1hbmFnZXIsXG4gICAgICAgIE1vdmVDbGlwLFxuICAgICAgICBTY2VuZSxcbiAgICAgICAgU3RlcHNTY2VuZSxcbiAgICAgICAgVGltZXIsXG4gICAgICAgIFJveHlMaXN0ZW5lcixcbiAgICAgICAgUm94eSxcbiAgICAgICAgQW5pbWF0aW9uRnJhbWUsXG4gICAgfSA9IHdpbmRvdy5BbmltYXRlO1xuXG4gICAgY29uc3Qge1xuICAgICAgICBxdWVyeSxcbiAgICAgICAgc2VhcmNoLFxuICAgICAgICBpbmplY3QsXG4gICAgICAgIHR5cGVPZixcbiAgICAgICAgdXJpLFxuICAgICAgICBjb3B5LFxuICAgICAgICBlYWNoLFxuICAgICAgICBvbixcbiAgICB9ID0gd2luZG93LkFuaW1hdGUuU3RhdGljO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9zcmMvR2FtZSc7XG5cbmlmIChsb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpLmZpbHRlcigodikgPT4gdikucmV2ZXJzZSgpWzBdID09PSAnZmx5dGVyJykge1xuICAgIEdhbWUoKTtcbn0iLCJcbmNvbnN0IEdhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coJ0dhbWUgZGVtbycpO1xuICAgIGlmICghIHdpbmRvdy5BbmltYXRlIHx8ICEgd2luZG93LkFuaW1hdGUuU3RhdGljICkge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdBbmltYXRlIG9iamVjdCBub3QgZXhpc3QhJyk7XG4gICAgfVxuXG4gICAgY29uc3Qge1xuICAgICAgICBDbGlwLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIEtleWJvYXJkRXZlbnRNYW5hZ2VyLFxuICAgICAgICBNb3ZlQ2xpcCxcbiAgICAgICAgU2NlbmUsXG4gICAgICAgIFN0ZXBzU2NlbmUsXG4gICAgICAgIFRpbWVyLFxuICAgICAgICBSb3h5TGlzdGVuZXIsXG4gICAgICAgIFJveHksXG4gICAgICAgIEFuaW1hdGlvbkZyYW1lLFxuICAgIH0gPSB3aW5kb3cuQW5pbWF0ZTtcblxuICAgIGNvbnN0IHtcbiAgICAgICAgY3JlYXRlRWxlbWVudCxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIHNlYXJjaCxcbiAgICAgICAgaW5qZWN0LFxuICAgICAgICB0eXBlT2YsXG4gICAgICAgIHVyaSxcbiAgICAgICAgY29weSxcbiAgICAgICAgZWFjaCxcbiAgICAgICAgb24sXG4gICAgICAgIHJhbmRvbSxcbiAgICB9ID0gd2luZG93LkFuaW1hdGUuU3RhdGljO1xuXG4gICAgY29uc3QgYXBwTm9kZSA9IHF1ZXJ5KCcjYXBwJyk7XG4gICAgY29uc3QgcG9pbnROb2RlID0gcXVlcnkoJyNwb2ludCcpO1xuXG4gICAgY29uc3QgQXBwQ2xpcCA9IENsaXAoYXBwTm9kZSk7XG5cbiAgICBjb25zdCBjcmVhdGVSb2FkTUMgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVhY2goMzAsICgpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnbWMtcm9hZCd9KSk7XG4gICAgICAgIH0pO1xuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9ICdtYyc7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnbWMgbWMtbGluZS1sZWZ0J30pKTtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdtYyBtYy1saW5lLXJpZ2h0J30pKTtcblxuICAgICAgICBjb25zdCBtYyA9IE1vdmVDbGlwKHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICAgICAgICB4OiAyMDAsXG4gICAgICAgICAgICB5OiAtNTAwLFxuICAgICAgICAgICAgc3BlZWQ6IDAuNCxcbiAgICAgICAgfSk7XG4gICAgICAgIGFwcE5vZGUuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIHJldHVybiBtYztcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlQ2FyTUMgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnbWMgbWMtY2FyJ30pO1xuICAgICAgICBhcHBOb2RlLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICBjb25zdCByb290ID0gTW92ZUNsaXAoe1xuICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgICAgICAgIHg6IHJhbmRvbSgxMDAsIDI2MCksXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgc3BlZWQ6IDAuMyxcbiAgICAgICAgICAgIGFuaW1hdGlvbiAoaSl7XG4gICAgICAgICAgICAgICAgdGhpcy55ICs9IFJvYWRNQy5zcGVlZCArIHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMueSA+IEFwcENsaXAuaGVpZ2h0ICkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgPSAtNjA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IHJhbmRvbSgxMDAsIDI2MCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vXG4gICAgICAgIGNvbnNvbGUubG9nKCk7XG4gICAgICAgIHJldHVybiByb290O1xuICAgIH07XG4gICAgY29uc3QgQ2FyMSA9IGNyZWF0ZUNhck1DKCk7XG5cbiAgICBjb25zdCBjcmVhdGVQbGF5ZXJNQyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSAnbWMgbWMtcGxheWVyJztcbiAgICAgICAgY29uc3QgbWMgPSBNb3ZlQ2xpcCh7XG4gICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgICAgICAgeDogMjIwLFxuICAgICAgICAgICAgeTogQXBwQ2xpcC5oZWlnaHQgLSA2MCxcbiAgICAgICAgICAgIHNwZWVkOiAxLFxuICAgICAgICAgICAgc3BlZWRYOiAxLFxuICAgICAgICB9KTtcbiAgICAgICAgYXBwTm9kZS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIG1jO1xuICAgIH07XG5cbiAgICBjb25zdCBSb2FkTUMgPSBjcmVhdGVSb2FkTUMoKTtcbiAgICBjb25zdCBQbGF5ZXJNQyA9IGNyZWF0ZVBsYXllck1DKCk7XG5cbiAgICBjb25zdCBrZXlib2FyZCA9IEtleWJvYXJkRXZlbnRNYW5hZ2VyKCk7XG4gICAga2V5Ym9hcmQubGVmdCA9IGZhbHNlO1xuICAgIGtleWJvYXJkLnJpZ2h0ID0gZmFsc2U7XG4gICAga2V5Ym9hcmQudXAgPSBmYWxzZTtcbiAgICBrZXlib2FyZC5kb3duID0gZmFsc2U7XG4gICAga2V5Ym9hcmQuZWFjaCgna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0tleUEnKSBrZXlib2FyZC5sZWZ0ID0gdHJ1ZTtcbiAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdLZXlEJykga2V5Ym9hcmQucmlnaHQgPSB0cnVlO1xuICAgICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0tleVcnKSBrZXlib2FyZC51cCA9IHRydWU7XG4gICAgICAgIGlmIChldmVudC5jb2RlID09PSAnS2V5UycpIGtleWJvYXJkLmRvd24gPSB0cnVlO1xuICAgIH0pXG4gICAga2V5Ym9hcmQuZWFjaCgna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdLZXlBJykga2V5Ym9hcmQubGVmdCA9IGZhbHNlO1xuICAgICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0tleUQnKSBrZXlib2FyZC5yaWdodCA9IGZhbHNlO1xuICAgICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0tleVcnKSBrZXlib2FyZC51cCA9IGZhbHNlO1xuICAgICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0tleVMnKSBrZXlib2FyZC5kb3duID0gZmFsc2U7XG4gICAgfSlcblxuICAgIEFuaW1hdGlvbkZyYW1lKCkuc3RhcnQoKGl0ZXIpID0+IHtcbiAgICAgICAgQ2FyMS5hbmltYXRpb24oMCk7XG5cbiAgICAgICAgaWYgKGtleWJvYXJkLmxlZnQgKSB7XG4gICAgICAgICAgICBQbGF5ZXJNQy54IC09IFBsYXllck1DLnNwZWVkWDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5Ym9hcmQucmlnaHQgKSB7XG4gICAgICAgICAgICBQbGF5ZXJNQy54ICs9IFBsYXllck1DLnNwZWVkWDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5Ym9hcmQudXAgKSB7XG4gICAgICAgICAgICBSb2FkTUMuc3BlZWQgKz0gMC4xO1xuICAgICAgICB9XG4gICAgICAgIGlmIChrZXlib2FyZC5kb3duICkge1xuICAgICAgICAgICAgUm9hZE1DLnNwZWVkIC09IDAuMTtcbiAgICAgICAgfVxuXG4gICAgICAgIFJvYWRNQy55ICs9IFJvYWRNQy5zcGVlZDtcbiAgICAgICAgaWYgKFJvYWRNQy55ID4gMCkge1xuICAgICAgICAgICAgUm9hZE1DLnkgPSAtNTAwO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9zcmMvR2FtZSc7XG5cbmlmIChsb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpLmZpbHRlcigodikgPT4gdikucmV2ZXJzZSgpWzBdID09PSAnbW92ZScpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICBHYW1lKCk7XG4gICAgfSk7XG59XG5cblxuLypjb25zdCBub2RlSW5mbyA9IERvbS5xdWVyeSgnI2luZm8nKTtcbmNvbnN0IG5vZGVIZXJvID0gRG9tLnF1ZXJ5KCcjaGVybycpO1xuY29uc3Qgbm9kZUdhbWUgPSBEb20ucXVlcnkoJyNnYW1lJyk7XG5jb25zdCBvblJlbG9hZCA9IERvbS5xdWVyeSgnW2RhdGEtb249XCJyZWxvYWRcIl0nKTtcblxuZnVuY3Rpb24gaW5mbyhkYXRhKSB7XG4gICAgbm9kZUluZm8uaW5uZXJIVE1MID0gYDxwcmU+JHtkYXRhfTwvcHJlPmBcbn1cblxubm9kZUhlcm8uc3R5bGUubWFyZ2luVG9wID0gJzBweCc7XG5ub2RlSGVyby5zdHlsZS5tYXJnaW5MZWZ0ID0gJzBweCc7XG5jb25zdCBtb3ZlQ2xpcCA9IE1vdmVDbGlwKHtcbiAgICBlbGVtZW50OiBub2RlSGVybyxcbiAgICBzcGVlZDogMSxcbn0pO1xuXG5jb25zdCBrZXlFdmVudCA9IEV2ZW50S2V5TWFuYWdlcigpO1xua2V5RXZlbnQuaXNVcCA9IGZhbHNlO1xua2V5RXZlbnQuaXNEb3duID0gZmFsc2U7XG5rZXlFdmVudC5pc0xlZnQgPSBmYWxzZTtcbmtleUV2ZW50LmlzUmlnaHQgPSBmYWxzZTtcbmtleUV2ZW50LmVhY2goJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZlKSB7XG4gICAgc3dpdGNoIChldmUuY29kZSkge1xuICAgICAgICBjYXNlIFwiS2V5V1wiOlxuICAgICAgICAgICAga2V5RXZlbnQuaXNVcCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIktleVNcIjpcbiAgICAgICAgICAgIGtleUV2ZW50LmlzRG93biA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIktleUFcIjpcbiAgICAgICAgICAgIGtleUV2ZW50LmlzTGVmdCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIktleURcIjpcbiAgICAgICAgICAgIGtleUV2ZW50LmlzUmlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufSk7XG5rZXlFdmVudC5lYWNoKCdrZXl1cCcsIGZ1bmN0aW9uIChldmUpIHtcbiAgICBzd2l0Y2ggKGV2ZS5jb2RlKSB7XG4gICAgICAgIGNhc2UgXCJLZXlXXCI6XG4gICAgICAgICAgICBrZXlFdmVudC5pc1VwID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIktleVNcIjpcbiAgICAgICAgICAgIGtleUV2ZW50LmlzRG93biA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJLZXlBXCI6XG4gICAgICAgICAgICBrZXlFdmVudC5pc0xlZnQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiS2V5RFwiOlxuICAgICAgICAgICAga2V5RXZlbnQuaXNSaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufSk7XG5cblRpbWVyLmludGVydmFsKCgpID0+IHtcbiAgICBpZiAoa2V5RXZlbnQuaXNVcCkgbW92ZUNsaXAueCAtPSBtb3ZlQ2xpcC5zcGVlZDtcbiAgICBpZiAoa2V5RXZlbnQuaXNEb3duKSBtb3ZlQ2xpcC54ICs9IG1vdmVDbGlwLnNwZWVkO1xuICAgIGlmIChrZXlFdmVudC5pc0xlZnQpIG1vdmVDbGlwLnkgLT0gbW92ZUNsaXAuc3BlZWQ7XG4gICAgaWYgKGtleUV2ZW50LmlzUmlnaHQpIG1vdmVDbGlwLnkgKz0gbW92ZUNsaXAuc3BlZWQ7XG5cbiAgICBpbmZvKGB4OiAke21vdmVDbGlwLnh9IHk6ICR7bW92ZUNsaXAueX1gKTtcbn0sIDEwMDAvNjApKi9cblxuXG5cbi8qXG5jb25zdCBTcHJpdGUgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBlbGVtZW50IH0gPSBjb25maWc7XG4gICAgY29uc3QgY2xpcCA9IENsaXAoZWxlbWVudCk7XG5cbiAgICBpbmZvKGB4OiAke2NsaXAueH0geTogJHtjbGlwLnl9YCk7XG4gICAgLy8gY29uc29sZS5sb2coY2xpcCk7XG4gICAgcmV0dXJuIGNsaXA7XG59O1xuY29uc3QgbW92ZUNsaXAgPSBDbGlwKHtcbiAgICBlbGVtZW50OiBub2RlSGVybyxcbn0pO1xuKi9cblxuLy8ga2V5RXZlbnQucHJlc3MoRXZlbnRLZXlDb2RlLlNwYWNlLCBmdW5jdGlvbiAoZXZlKSB7XG4vLyAgICAgY29uc29sZS5sb2coJ3ByZXNzIFNwYWNlJywgRXZlbnRLZXlDb2RlLlNwYWNlLCBldmUpXG4vLyB9KTtcbi8vIGtleUV2ZW50Lm9uKCdrZXl1cCcsIDk3LCBmdW5jdGlvbiAoZXZlKSB7XG4vLyAgICAgY29uc29sZS5sb2coJ2tleXVwJywgRXZlbnRLZXlDb2RlLkFycm93TGVmdCwgZXZlKVxuLy8gfSk7XG5cbi8vIGNvbnN0IE1vdmVDbGlwID0gZnVuY3Rpb24gKGNvbmZpZykgeztcbi8vICAgICBjb25zdCB7IGVsZW1lbnQgfSA9IGNvbmZpZztcbi8vICAgICBjb25zdCBrZXlFdmVudCA9IEV2ZW50S2V5TWFuYWdlcigpXG4vLyAgICAgY29uc3QgY2xpcCA9IENsaXAoZWxlbWVudCk7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgdXAoKXt9LFxuLy8gICAgICAgICBkb3duKCl7fSxcbi8vICAgICAgICAgbGVmdCgpe30sXG4vLyAgICAgICAgIHJpZ2h0KCl7fSxcbi8vICAgICB9O1xuLy8gfTsiLCJcbmNvbnN0IEdhbWUgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBpZiAoISB3aW5kb3cuQW5pbWF0ZSB8fCAhIHdpbmRvdy5BbmltYXRlLlN0YXRpYyApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignQW5pbWF0ZSBvYmplY3Qgbm90IGV4aXN0IScpO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCdHYW1lIG1vdmUnKTtcblxuICAgIGNvbnN0IHtDbGlwLCBNb3ZlQ2xpcCwgS2V5Ym9hcmRFdmVudE1hbmFnZXIsIFRpbWVyfSA9IHdpbmRvdy5BbmltYXRlO1xuICAgIGNvbnN0IHtxdWVyeX0gPSB3aW5kb3cuQW5pbWF0ZS5TdGF0aWM7XG5cbiAgICBjb25zdCBub2RlSGVybyA9IHF1ZXJ5KCcjaGVybycpO1xuICAgIGNvbnN0IG5vZGVJbmZvID0gcXVlcnkoJyNpbmZvJyk7XG5cbiAgICBmdW5jdGlvbiBpbmZvKGRhdGEpIHtcbiAgICAgICAgbm9kZUluZm8uaW5uZXJIVE1MID0gYDxwcmU+JHtkYXRhfTwvcHJlPmBcbiAgICB9XG5cbiAgICBub2RlSGVyby5zdHlsZS5tYXJnaW5Ub3AgPSAnMHB4JztcbiAgICBub2RlSGVyby5zdHlsZS5tYXJnaW5MZWZ0ID0gJzBweCc7XG4gICAgY29uc3QgbW92ZUNsaXAgPSBNb3ZlQ2xpcCh7XG4gICAgICAgIGVsZW1lbnQ6IG5vZGVIZXJvLFxuICAgICAgICBzcGVlZDogMSxcbiAgICB9KTtcblxuICAgIGNvbnN0IEtleU1hcCA9IHtcbiAgICAgICAgaXNVcDogZmFsc2UsXG4gICAgICAgIGlzRG93bjogZmFsc2UsXG4gICAgICAgIGlzTGVmdDogZmFsc2UsXG4gICAgICAgIGlzUmlnaHQ6IGZhbHNlLFxuICAgIH07XG5cbiAgICBUaW1lci5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGlmIChLZXlNYXAuaXNVcCkgbW92ZUNsaXAueSAtPSBtb3ZlQ2xpcC5zcGVlZDtcbiAgICAgICAgaWYgKEtleU1hcC5pc0Rvd24pIG1vdmVDbGlwLnkgKz0gbW92ZUNsaXAuc3BlZWQ7XG4gICAgICAgIGlmIChLZXlNYXAuaXNMZWZ0KSBtb3ZlQ2xpcC54IC09IG1vdmVDbGlwLnNwZWVkO1xuICAgICAgICBpZiAoS2V5TWFwLmlzUmlnaHQpIG1vdmVDbGlwLnggKz0gbW92ZUNsaXAuc3BlZWQ7XG5cbiAgICAgICAgaW5mbyhgeDogJHttb3ZlQ2xpcC54fSB5OiAke21vdmVDbGlwLnl9YCk7XG4gICAgfSwgMTAwMC82MClcblxuICAgIGNvbnN0IGtleWJvYXJkID0gS2V5Ym9hcmRFdmVudE1hbmFnZXIoKTtcblxuICAgIGtleWJvYXJkLmVhY2goJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZlKSB7XG4gICAgICAgIGlmIChldmUuY29kZSA9PT0gJ0tleVcnKSBLZXlNYXAuaXNVcCA9IHRydWU7XG4gICAgICAgIGlmIChldmUuY29kZSA9PT0gJ0tleVMnKSBLZXlNYXAuaXNEb3duID0gdHJ1ZTtcbiAgICAgICAgaWYgKGV2ZS5jb2RlID09PSAnS2V5QScpIEtleU1hcC5pc0xlZnQgPSB0cnVlO1xuICAgICAgICBpZiAoZXZlLmNvZGUgPT09ICdLZXlEJykgS2V5TWFwLmlzUmlnaHQgPSB0cnVlO1xuICAgIH0pO1xuXG4gICAga2V5Ym9hcmQuZWFjaCgna2V5dXAnLCBmdW5jdGlvbiAoZXZlKSB7XG4gICAgICAgIGlmIChldmUuY29kZSA9PT0gJ0tleVcnKSBLZXlNYXAuaXNVcCA9IGZhbHNlO1xuICAgICAgICBpZiAoZXZlLmNvZGUgPT09ICdLZXlTJykgS2V5TWFwLmlzRG93biA9IGZhbHNlO1xuICAgICAgICBpZiAoZXZlLmNvZGUgPT09ICdLZXlBJykgS2V5TWFwLmlzTGVmdCA9IGZhbHNlO1xuICAgICAgICBpZiAoZXZlLmNvZGUgPT09ICdLZXlEJykgS2V5TWFwLmlzUmlnaHQgPSBmYWxzZTtcbiAgICB9KTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiIsImltcG9ydCBHYW1lIGZyb20gJy4vc3JjL0dhbWUnO1xuXG5pZiAobG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKS5maWx0ZXIoKHYpID0+IHYpLnJldmVyc2UoKVswXSA9PT0gJ3NjZW5lJykge1xuICAgIEdhbWUoKTtcbn0iLCJcbi8vIGltcG9ydCBJbnRyb0NvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvSW50cm9Db21wb25lbnQnO1xuLy8gaW1wb3J0IFN0YXJ0R2FtZUNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvU3RhcnRHYW1lQ29tcG9uZW50Jztcbi8vIGltcG9ydCBTZXR0aW5nc0NvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvU2V0dGluZ3NDb21wb25lbnQnO1xuLy8gaW1wb3J0IERldmVsb3BlcnNDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL0RldmVsb3BlcnNDb21wb25lbnQnO1xuLy8gaW1wb3J0IE1lbnVDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL01lbnVDb21wb25lbnQnO1xuXG5jb25zdCBHYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKCdzY2VuZSBkZW1vJylcbiAgICBpZiAoISB3aW5kb3cuQW5pbWF0ZSB8fCAhIHdpbmRvdy5BbmltYXRlLlN0YXRpYyApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignQW5pbWF0ZSBvYmplY3Qgbm90IGV4aXN0IScpO1xuICAgIH1cblxuICAgIGNvbnN0IHtcbiAgICAgICAgQ2xpcCxcbiAgICAgICAgTW92ZUNsaXAsXG4gICAgICAgIFNjZW5lLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIFRpbWVyLFxuICAgICAgICBSb3h5LFxuICAgICAgICBLZXlib2FyZEV2ZW50TWFuYWdlcixcbiAgICB9ID0gd2luZG93LkFuaW1hdGU7XG5cbiAgICBjb25zdCB7XG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBzZWFyY2gsXG4gICAgICAgIGluamVjdCxcbiAgICAgICAgdHlwZU9mLFxuICAgICAgICB0eXBlT2ZTdHJpY3QsXG4gICAgICAgIHVyaSxcbiAgICAgICAgY29weSxcbiAgICAgICAgb24sXG4gICAgICAgIGlzSFRNTFN0cmluZyxcbiAgICB9ID0gd2luZG93LkFuaW1hdGUuU3RhdGljO1xuXG4gICAgY29uc3Qgc2NlbmUgPSBDbGlwKCcjc2NlbmUnKTtcbi8qXG5cbiAgICBjb25zdCBTY2VuZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgcnggPSBSb3h5KHt9KTtcbiAgICAgICAgY29uc3Qgcm9vdCA9IHtcbiAgICAgICAgICAgIGN1cnJlbnQ6ICdkZWZhdWx0JyxcbiAgICAgICAgICAgIGxheWVyczoge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQgKCkgeyBjb25zb2xlLmxvZygnW0RlZmF1bHQgU2NlbmVdJykgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgcm9vdC5sYXllciA9IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcm9vdC5sYXllcnNbbmFtZV0gPSBjYWxsYmFjaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJvb3QuZ2V0ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiByb290LmxheWVyc1tuYW1lXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJvb3QubmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBsZXN0ID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocm9vdC5sYXllcnMpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXNbaV0gPT09IHJvb3QuY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGtleXNbaSArIDFdICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgbGVzdCA9IGtleXNbaSArIDFdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0ga2V5cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXN0ID0ga2V5c1swXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByb290LnNob3cobGVzdCk7XG4gICAgICAgIH1cblxuICAgICAgICByb290LnNob3cgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICByb290LmN1cnJlbnQgPSBrZXk7XG4gICAgICAgICAgICBjb25zdCBjYiA9IHJvb3QubGF5ZXJzW3Jvb3QuY3VycmVudF07XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2IgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIGNiLmNhbGwoY2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgfTtcbiovXG5cbiAgICBjb25zdCB0ZW1wbGF0ZU1lbnUgPSBgXG4gICAgPGRpdiBjbGFzcz1cIm1lbnUgc2VsZWN0LW9mZlwiPlxuICAgICAgICA8ZGl2IGRhdGEtb249XCJwYWdlMVwiPlBhZ2UgMTwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEtb249XCJwYWdlMlwiPlBhZ2UgMjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEtb249XCJwYWdlM1wiPlBhZ2UgMzwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEtb249XCJuZXh0XCI+TkVYVCBQYWdlPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYDtcblxuICAgIGNvbnN0IHRlbXBsYXRlUGFnZTEgPSBgXG4gICAgPGRpdiBjbGFzcz1cInBhZ2UgYmctY3lhblwiPlxuICAgICAgICA8aDE+UGFnZSAxPC9oMT5cbiAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgY29uc3QgdGVtcGxhdGVQYWdlMiA9IGBcbiAgICA8ZGl2IGNsYXNzPVwicGFnZSBiZy1kYXJrY3lhblwiPlxuICAgICAgICA8aDE+UGFnZSAyPC9oMT5cbiAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgY29uc3QgdGVtcGxhdGVQYWdlMyA9IGBcbiAgICA8ZGl2IGNsYXNzPVwicGFnZSBiZy1kYXJrZ3JlZW5cIj5cbiAgICAgICAgPGgxPlBhZ2UgMzwvaDE+XG4gICAgPC9kaXY+XG4gICAgYDtcblxuICAgIGNvbnN0IG1haW4gPSBTY2VuZSgpO1xuICAgIGNvbnN0IG1lbnUgPSBDb21wb25lbnQoe1xuICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGVNZW51LFxuICAgICAgICBpbml0ICgpIHtcbiAgICAgICAgICAgIG9uKHRoaXMudGVtcGxhdGUsICdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW9uJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1vbicpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAnbmV4dCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYWluLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBtYWluLnNob3coa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgIH0pO1xuXG5cbiAgICBjb25zdCBwYWdlMSA9IENsaXAodGVtcGxhdGVQYWdlMSk7XG4gICAgY29uc3QgcGFnZTIgPSBDbGlwKHRlbXBsYXRlUGFnZTIpO1xuICAgIGNvbnN0IHBhZ2UzID0gQ2xpcCh0ZW1wbGF0ZVBhZ2UzKTtcblxuICAgIG1haW4uYWRkKCdwYWdlMScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaW5qZWN0KHNjZW5lLmVsZW1lbnQsIHBhZ2UxLmVsZW1lbnQpO1xuICAgICAgICBpbmplY3Qoc2NlbmUuZWxlbWVudCwgbWVudS50ZW1wbGF0ZSwgdHJ1ZSk7XG4gICAgfSk7XG5cbiAgICBtYWluLmFkZCgncGFnZTInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGluamVjdChzY2VuZS5lbGVtZW50LCBwYWdlMi5lbGVtZW50KTtcbiAgICAgICAgaW5qZWN0KHNjZW5lLmVsZW1lbnQsIG1lbnUudGVtcGxhdGUsIHRydWUpO1xuICAgIH0pO1xuXG4gICAgbWFpbi5hZGQoJ3BhZ2UzJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpbmplY3Qoc2NlbmUuZWxlbWVudCwgcGFnZTMuZWxlbWVudCk7XG4gICAgICAgIGluamVjdChzY2VuZS5lbGVtZW50LCBtZW51LnRlbXBsYXRlLCB0cnVlKTtcbiAgICB9KTtcblxuICAgIG1haW4uc2hvdygncGFnZTEnKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iLCIvLyBucG0gcnVuIHdhdGNoXG5cbi8vIGltcG9ydCAnLi4vLi4vYW5pbWF0ZS5qcy9zcmMvaW5kZXgnO1xuaW1wb3J0ICcuLi8uLi9hbmltYXRlLmpzL2Rpc3QvYW5pbWF0ZS5idW5kbGUnO1xuLy8gaW1wb3J0ICcuLi90ZXN0cy9kZW1vJztcbi8vIGltcG9ydCAnLi4vdGVzdHMvZGVtbyc7XG5cbmltcG9ydCAnLi4vZGVtby9kZW1vL2luZGV4JztcbmltcG9ydCAnLi4vZGVtby9tb3ZlL2luZGV4JztcbmltcG9ydCAnLi4vZGVtby9zY2VuZS9pbmRleCc7XG5pbXBvcnQgJy4uL2RlbW8vY29tcG9uZW50cy9pbmRleCc7XG5pbXBvcnQgJy4uL2RlbW8vYW5pbWF0aW9uL2luZGV4JztcbmltcG9ydCAnLi4vZGVtby9mbHl0ZXIvaW5kZXgnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==