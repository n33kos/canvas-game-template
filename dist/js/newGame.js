(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("newGame", [], factory);
	else if(typeof exports === 'object')
		exports["newGame"] = factory();
	else
		root["newGame"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, _class);

    this.x = x;
    this.y = y;
  }

  _createClass(_class, [{
    key: "toArray",
    value: function toArray() {
      return [this.x, this.y];
    }
  }]);

  return _class;
}();

exports.default = _class;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Override this class to create game entities.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Draw canvas calls at position 0,0 as position, rotation, and origin will be applied automagically
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */


var _Vector = __webpack_require__(0);

var _Vector2 = _interopRequireDefault(_Vector);

var _worldSpaceToCanvas = __webpack_require__(14);

var _worldSpaceToCanvas2 = _interopRequireDefault(_worldSpaceToCanvas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class(_ref) {
    var _ref$dimensions = _ref.dimensions,
        dimensions = _ref$dimensions === undefined ? new _Vector2.default(100, 100) : _ref$dimensions,
        _ref$GameState = _ref.GameState,
        GameState = _ref$GameState === undefined ? null : _ref$GameState,
        _ref$origin = _ref.origin,
        origin = _ref$origin === undefined ? new _Vector2.default(0.5, 0.5) : _ref$origin,
        _ref$position = _ref.position,
        position = _ref$position === undefined ? new _Vector2.default() : _ref$position,
        _ref$rotation = _ref.rotation,
        rotation = _ref$rotation === undefined ? 0 : _ref$rotation;

    _classCallCheck(this, _class);

    this.dimensions = dimensions;
    this.GameState = GameState;
    this.origin = origin;
    this.position = position;
    this.rotation = rotation;

    // These vars will be calculated via setPosition
    this.canvasPosition = new _Vector2.default();
    this.offset = new _Vector2.default();
    this.setPosition(position);
  }

  // Remember: use setPosition instead of directly setting position var.


  _createClass(_class, [{
    key: 'setPosition',
    value: function setPosition(position) {
      this.position = position;
      this.canvasPosition = (0, _worldSpaceToCanvas2.default)(this.GameState, this.position);
      this.calculateOffset();
    }
  }, {
    key: 'calculateOffset',
    value: function calculateOffset() {
      this.offset = new _Vector2.default(-(this.origin.x * this.dimensions.x), -(this.origin.y * this.dimensions.y));
    }
  }, {
    key: 'drawEntity',
    value: function drawEntity() {
      // Move canvas, rotate, then add origin offset.
      this.GameState.Canvas.ctx.translate(this.canvasPosition.x, this.canvasPosition.y);
      this.GameState.Canvas.ctx.rotate(this.rotation);
      this.GameState.Canvas.ctx.translate(this.offset.x, this.offset.y);

      this.draw();

      // Reset transforms
      this.GameState.Canvas.ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
  }, {
    key: 'update',
    value: function update() {
      // Override this function for the entity's update loop
    }
  }, {
    key: 'draw',
    value: function draw() {
      // Override this function for the entity's draw loop
    }
  }]);

  return _class;
}();

exports.default = _class;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param  {Number}    delay          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {Boolean}   [noTrailing]   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
 *                                    the internal counter is reset)
 * @param  {Function}  callback       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                    to `callback` when the throttled-function is executed.
 * @param  {Boolean}   [debounceMode] If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
 *                                    schedule `callback` to execute after `delay` ms.
 *
 * @return {Function}  A new, throttled, function.
 */
function throttle(delay, noTrailing, callback, debounceMode) {

	/*
  * After wrapper has stopped being called, this timeout ensures that
  * `callback` is executed at the proper times in `throttle` and `end`
  * debounce modes.
  */
	var timeoutID;

	// Keep track of the last time `callback` was executed.
	var lastExec = 0;

	// `noTrailing` defaults to falsy.
	if (typeof noTrailing !== 'boolean') {
		debounceMode = callback;
		callback = noTrailing;
		noTrailing = undefined;
	}

	/*
  * The `wrapper` function encapsulates all of the throttling / debouncing
  * functionality and when executed will limit the rate at which `callback`
  * is executed.
  */
	function wrapper() {

		var self = this;
		var elapsed = Number(new Date()) - lastExec;
		var args = arguments;

		// Execute `callback` and update the `lastExec` timestamp.
		function exec() {
			lastExec = Number(new Date());
			callback.apply(self, args);
		}

		/*
   * If `debounceMode` is true (at begin) this is used to clear the flag
   * to allow future `callback` executions.
   */
		function clear() {
			timeoutID = undefined;
		}

		if (debounceMode && !timeoutID) {
			/*
    * Since `wrapper` is being called for the first time and
    * `debounceMode` is true (at begin), execute `callback`.
    */
			exec();
		}

		// Clear any existing timeout.
		if (timeoutID) {
			clearTimeout(timeoutID);
		}

		if (debounceMode === undefined && elapsed > delay) {
			/*
    * In throttle mode, if `delay` time has been exceeded, execute
    * `callback`.
    */
			exec();
		} else if (noTrailing !== true) {
			/*
    * In trailing throttle mode, since `delay` time has not been
    * exceeded, schedule `callback` to execute `delay` ms after most
    * recent execution.
    *
    * If `debounceMode` is true (at begin), schedule `clear` to execute
    * after `delay` ms.
    *
    * If `debounceMode` is false (at end), schedule `callback` to
    * execute after `delay` ms.
    */
			timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
		}
	}

	// Return the wrapper function.
	return wrapper;
}

/* eslint-disable no-undefined */

/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param  {Number}   delay         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {Boolean}  [atBegin]     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 * @param  {Function} callback      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                  to `callback` when the debounced-function is executed.
 *
 * @return {Function} A new, debounced function.
 */
function debounce(delay, atBegin, callback) {
	return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
}

exports.throttle = throttle;
exports.debounce = debounce;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class() {
    _classCallCheck(this, _class);

    this.isLoaded = false;
  }

  _createClass(_class, [{
    key: "init",
    value: function init(GameState) {
      this.GameState = GameState;
    }
  }, {
    key: "load",
    value: function load() {
      this.isLoaded = true;
    }
  }, {
    key: "gameLogic",
    value: function gameLogic() {
      // Override this function to add level specific game logic
    }
  }]);

  return _class;
}();

exports.default = _class;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (min, max) {
  return Math.random() * (max - min) + min;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Audio = __webpack_require__(6);

var _Audio2 = _interopRequireDefault(_Audio);

var _Canvas = __webpack_require__(7);

var _Canvas2 = _interopRequireDefault(_Canvas);

var _Controls = __webpack_require__(8);

var _Controls2 = _interopRequireDefault(_Controls);

var _GameState = __webpack_require__(9);

var _GameState2 = _interopRequireDefault(_GameState);

var _Render = __webpack_require__(21);

var _Render2 = _interopRequireDefault(_Render);

var _Scene = __webpack_require__(22);

var _Scene2 = _interopRequireDefault(_Scene);

var _UI = __webpack_require__(26);

var _UI2 = _interopRequireDefault(_UI);

var _Update = __webpack_require__(27);

var _Update2 = _interopRequireDefault(_Update);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var newGame = {
  Audio: _Audio2.default,
  Canvas: _Canvas2.default,
  Controls: _Controls2.default,
  GameState: _GameState2.default,
  Render: _Render2.default,
  Scene: _Scene2.default,
  UI: _UI2.default,
  Update: _Update2.default
};

document.addEventListener("DOMContentLoaded", function (e) {
  var GameState = new newGame.GameState();
  GameState.init();

  // Audio needs to be initialized after user input, refer to UI class for init() call
  GameState.Audio = new newGame.Audio(GameState);

  GameState.Controls = new newGame.Controls(GameState);
  GameState.Controls.init();

  GameState.Canvas = new newGame.Canvas(GameState);
  GameState.Canvas.init();

  GameState.Scene = new newGame.Scene(GameState);
  GameState.Scene.init();

  GameState.Render = new newGame.Render(GameState);
  GameState.Render.init();

  GameState.Update = new newGame.Update(GameState);
  GameState.Update.init();

  GameState.UI = new newGame.UI(GameState);
  GameState.UI.init();
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class(GameState) {
    _classCallCheck(this, _class);

    this.GameState = GameState;
    this.audioContext = null;
    this.masterAudioNode = null;
    this.isInitialized = false;
  }

  _createClass(_class, [{
    key: 'init',
    value: function init() {
      var audioContext = new (window.AudioContext || window.webkitAudioContext)();
      this.audioContext = audioContext;

      var master = audioContext.createGain();
      master.gain.value = 0.75;
      master.connect(audioContext.destination);
      this.masterAudioNode = master;

      this.isInitialized = true;
    }
  }, {
    key: 'toggleMute',
    value: function toggleMute() {
      if (this.audioContext.state === 'running') {
        this.audioContext.suspend();
      } else if (this.audioContext.state === 'suspended') {
        this.audioContext.resume();
      }
    }
  }]);

  return _class;
}();

exports.default = _class;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _throttleDebounce = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class(GameState) {
    _classCallCheck(this, _class);

    this.GameState = GameState;
    this.cx = null;
    this.cy = null;
    this.canvas = null;
    this.ctx = null;
    this.scale = 1;
  }

  _createClass(_class, [{
    key: 'init',
    value: function init() {
      this.setDimensions();
      this.initCanvas();
    }
  }, {
    key: 'setDimensions',
    value: function setDimensions() {
      this.scale = window.devicePixelRatio;
      this.width = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) * this.scale;

      this.height = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) * this.scale;
    }
  }, {
    key: 'initCanvas',
    value: function initCanvas() {
      var _this = this;

      var canvas = document.querySelector('canvas');
      canvas.width = this.width;
      canvas.height = this.height;
      this.cx = this.width / 2;
      this.cy = this.height / 2;
      this.canvas = canvas;

      var ctx = canvas.getContext('2d');
      this.ctx = ctx;

      this.resizeCanvas();

      window.addEventListener('resize', (0, _throttleDebounce.throttle)(500, function () {
        _this.setDimensions();
        _this.resizeCanvas();
      }));
    }
  }, {
    key: 'resizeCanvas',
    value: function resizeCanvas() {
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      this.cx = this.width / 2;
      this.cy = this.height / 2;
      this.ctx.imageSmoothingEnabled = false;
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.ctx.clearRect(0, 0, this.width, this.height);
    }
  }]);

  return _class;
}();

exports.default = _class;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _throttleDebounce = __webpack_require__(2);

var _Vector = __webpack_require__(0);

var _Vector2 = _interopRequireDefault(_Vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class(GameState) {
    _classCallCheck(this, _class);

    this.GameState = GameState;
    this.isMouseDown = false;
    this.lastPosition = null;
    this.pressedKeys = [];
    this.debounceValue = 10;
  }

  _createClass(_class, [{
    key: 'init',
    value: function init() {
      var _this = this;

      // Mouse
      document.addEventListener("mousemove", (0, _throttleDebounce.throttle)(this.debounceValue, function (e) {
        return _this.handleMouseMove(e);
      }));
      document.addEventListener("mousedown", this.handleMouseDown);
      document.addEventListener("mouseup", function (e) {
        _this.isMouseDown = false;
      });

      // Touch
      document.addEventListener('touchmove', (0, _throttleDebounce.throttle)(this.debounceValue, function (e) {
        return _this.handleTouchMove(e);
      }));
      document.addEventListener('touchstart', this.handleTouchStart);
      document.addEventListener("touchend", function (e) {
        _this.isMouseDown = false;
      });

      // Keys
      document.onkeydown = this.handleKeyDown.bind(this);
      document.onkeyup = this.handleKeyUp.bind(this);
    }
  }, {
    key: 'handleTouchStart',
    value: function handleTouchStart(e) {
      this.isMouseDown = true;

      this.lastPosition = new _Vector2.default(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
    }
  }, {
    key: 'handleTouchMove',
    value: function handleTouchMove(e) {
      e.preventDefault();
      if (!this.isMouseDown || this.GameState.isPaused) return;

      this.lastPosition = new _Vector2.default(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
    }
  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown(e) {
      this.isMouseDown = true;

      this.lastPosition = new _Vector2.default(e.clientX, e.clientY);
    }
  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(e) {
      if (!this.isMouseDown || this.GameState.isPaused) return;

      this.lastPosition = new _Vector2.default(e.clientX, e.clientY);
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(e) {
      if (!this.pressedKeys.includes(e.keyCode)) this.pressedKeys.push(e.keyCode);
    }
  }, {
    key: 'handleKeyUp',
    value: function handleKeyUp(e) {
      var index = this.pressedKeys.indexOf(e.keyCode);
      if (index > -1) this.pressedKeys.splice(index, 1);
    }
  }]);

  return _class;
}();

exports.default = _class;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultConfig = __webpack_require__(10);

var defaultConfig = _interopRequireWildcard(_defaultConfig);

var _levels = __webpack_require__(11);

var _levels2 = _interopRequireDefault(_levels);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class() {
    _classCallCheck(this, _class);

    this.canvas = null;
    this.deltaTime = 1;
    this.isPaused = true;
    this.level = 0;
    this.levels = [];
    this.score = 0;
    this.playerName = defaultConfig.playerName;
    /*
      Class variables added in loader :
      - this.Audio
      - this.UI
      - this.Controls
      - this.Canvas
      - this.Scene
      - this.Render
    */
  }

  _createClass(_class, [{
    key: 'init',
    value: function init() {
      this.levels = _levels2.default;
      this.initLevels();
    }
  }, {
    key: 'initLevels',
    value: function initLevels() {
      var _this = this;

      this.levels = this.levels.map(function (level) {
        var lvl = new level();
        lvl.init(_this);
        return lvl;
      });
    }
  }, {
    key: 'loadLevel',
    value: function loadLevel() {
      var level = this.levels[this.level];
      level.load();

      // Remove focus from any UI elements clicked to prevent control misdirection
      document.activeElement.blur();
    }
  }, {
    key: 'play',
    value: function play() {
      this.isPaused = false;
      this.loadLevel();
    }
  }, {
    key: 'restart',
    value: function restart() {
      var response = confirm("Are you sure you want to exit the level?");
      if (response == true) {
        this.endGame();
        this.UI.setScreen('level');
      }
    }
  }, {
    key: 'togglePause',
    value: function togglePause() {
      this.isPaused = !this.isPaused;

      //Trigger events on unpause
      if (this.isPaused) {
        this.Audio.audioContext.resume();
      }

      //Trigger events on pause
      if (!this.isPaused) {
        this.Audio.audioContext.suspend();
      }
    }
  }, {
    key: 'endGame',
    value: function endGame() {
      this.level = 0;
      this.isRunning = false;
      this.isPaused = true;
      this.score = 0;
    }
  }]);

  return _class;
}();

exports.default = _class;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  playerName: 'Player 1'
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ColorCubes = __webpack_require__(12);

var _ColorCubes2 = _interopRequireDefault(_ColorCubes);

var _Sprites = __webpack_require__(15);

var _Sprites2 = _interopRequireDefault(_Sprites);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_Sprites2.default, _ColorCubes2.default];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ColorCube = __webpack_require__(13);

var _ColorCube2 = _interopRequireDefault(_ColorCube);

var _Level2 = __webpack_require__(3);

var _Level3 = _interopRequireDefault(_Level2);

var _randomRange = __webpack_require__(4);

var _randomRange2 = _interopRequireDefault(_randomRange);

var _Vector = __webpack_require__(0);

var _Vector2 = _interopRequireDefault(_Vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Level) {
  _inherits(_class, _Level);

  function _class(config) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, config));

    _this.name = "Color Cubes";
    return _this;
  }

  _createClass(_class, [{
    key: 'load',
    value: function load() {
      this.GameState.Scene.clear();

      for (var i = 0; i < 1000; i++) {
        var cube = new _ColorCube2.default({
          GameState: this.GameState,
          color: 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')',
          position: new _Vector2.default((0, _randomRange2.default)(-this.GameState.Canvas.cx, this.GameState.Canvas.cx), (0, _randomRange2.default)(-this.GameState.Canvas.cy, this.GameState.Canvas.cy)),
          dimensions: new _Vector2.default(30, 30),
          velocity: new _Vector2.default(Math.random() * 100, Math.random() * 100)
        });

        this.GameState.Scene.add(cube);
      }
    }
  }, {
    key: 'gameLogic',
    value: function gameLogic() {
      // Override this function to add level specific game logic
    }
  }]);

  return _class;
}(_Level3.default);

exports.default = _class;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Entity2 = __webpack_require__(1);

var _Entity3 = _interopRequireDefault(_Entity2);

var _Vector = __webpack_require__(0);

var _Vector2 = _interopRequireDefault(_Vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Entity) {
  _inherits(_class, _Entity);

  function _class(config) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, config));

    var color = config.color,
        velocity = config.velocity;


    _this.color = color;
    _this.velocity = velocity;
    return _this;
  }

  _createClass(_class, [{
    key: 'update',
    value: function update() {
      this.rotation += 0.01 * this.GameState.deltaTime;

      this.velocity = new _Vector2.default(this.velocity.x * 0.99, this.velocity.y * 0.99);

      this.setPosition(new _Vector2.default(this.position.x + this.velocity.x, this.position.y + this.velocity.y));

      this.boundingBox();
    }
  }, {
    key: 'boundingBox',
    value: function boundingBox() {
      if (this.position.x > this.GameState.Canvas.cx || this.position.x < -this.GameState.Canvas.cx) this.velocity.x *= -1;
      if (this.position.y > this.GameState.Canvas.cy || this.position.y < -this.GameState.Canvas.cy) this.velocity.y *= -1;
    }
  }, {
    key: 'draw',
    value: function draw() {
      this.GameState.Canvas.ctx.beginPath();
      this.GameState.Canvas.ctx.fillStyle = this.color;
      this.GameState.Canvas.ctx.rect(0, 0, this.dimensions.x, this.dimensions.y);
      this.GameState.Canvas.ctx.fill();
    }
  }]);

  return _class;
}(_Entity3.default);

exports.default = _class;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Vector = __webpack_require__(0);

var _Vector2 = _interopRequireDefault(_Vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (GameState, position) {
  return new _Vector2.default(position.x + GameState.Canvas.width / 2, GameState.Canvas.height - (position.y + GameState.Canvas.height / 2));
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AudioBuffer = __webpack_require__(16);

var _AudioBuffer2 = _interopRequireDefault(_AudioBuffer);

var _Background = __webpack_require__(17);

var _Background2 = _interopRequireDefault(_Background);

var _Level2 = __webpack_require__(3);

var _Level3 = _interopRequireDefault(_Level2);

var _randomRange = __webpack_require__(4);

var _randomRange2 = _interopRequireDefault(_randomRange);

var _RunningMan = __webpack_require__(18);

var _RunningMan2 = _interopRequireDefault(_RunningMan);

var _Vector = __webpack_require__(0);

var _Vector2 = _interopRequireDefault(_Vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Level) {
  _inherits(_class, _Level);

  function _class(config) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, config));

    _this.name = "Sprites";
    return _this;
  }

  _createClass(_class, [{
    key: 'load',
    value: function load() {
      this.GameState.Scene.clear();

      this.addBGMusic();
      this.addGround();
      this.addCharacter();
    }
  }, {
    key: 'addBGMusic',
    value: function addBGMusic() {
      var _this2 = this;

      this.audioNode = new _AudioBuffer2.default({
        GameState: this.GameState,
        audioFileUrl: './audio/bg.mp3',
        shouldLoop: true
      });
      this.audioNode.load(function () {});
      window.setTimeout(function () {
        _this2.audioNode.play();
      }, 100);
    }
  }, {
    key: 'addCharacter',
    value: function addCharacter() {
      var runner = new _RunningMan2.default({
        GameState: this.GameState,
        dimensions: new _Vector2.default(21, 32),
        origin: new _Vector2.default(0.5, 1),
        scale: new _Vector2.default(10, 10),
        initialheight: -this.GameState.Canvas.cy + 285
      });
      runner.setPosition(new _Vector2.default(0, -this.GameState.Canvas.cy + 320));
      runner.load();
      this.GameState.Scene.add(runner);
    }
  }, {
    key: 'addGround',
    value: function addGround() {
      var ground = new _Background2.default({
        GameState: this.GameState,
        origin: new _Vector2.default(0, 0),
        dimensions: new _Vector2.default(this.GameState.Canvas.width, 32),
        position: new _Vector2.default(-this.GameState.Canvas.cx, -this.GameState.Canvas.cy + 320),
        imageUrl: './img/ground.png',
        repeat: 'repeat-x',
        scale: new _Vector2.default(10, 10)
      });
      ground.load();
      this.GameState.Scene.add(ground);
    }
  }, {
    key: 'gameLogic',
    value: function gameLogic() {
      // Override this function to add level specific game logic
    }
  }]);

  return _class;
}(_Level3.default);

exports.default = _class;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class(_ref) {
    var audioFileUrl = _ref.audioFileUrl,
        GameState = _ref.GameState,
        shouldLoop = _ref.shouldLoop;

    _classCallCheck(this, _class);

    this.audioFileUrl = audioFileUrl;
    this.GameState = GameState;
    this.shouldLoop = shouldLoop;

    this.audioNode = null;
    this.buffer = null;
  }

  _createClass(_class, [{
    key: "load",
    value: function load(callback) {
      var _this = this;

      var req = new XMLHttpRequest();
      req.responseType = "arraybuffer";
      req.onload = function () {
        _this.createBufferFromData(req.response);
        callback();
      };
      req.onerror = function () {
        callback();
      };
      req.open('GET', this.audioFileUrl, true);
      req.send();
    }
  }, {
    key: "createBufferFromData",
    value: function createBufferFromData(data) {
      var _this2 = this;

      this.GameState.Audio.audioContext.decodeAudioData(data, function (buffer) {
        _this2.buffer = buffer;
      });
    }
  }, {
    key: "play",
    value: function play() {
      this.audioNode = this.GameState.Audio.audioContext.createBufferSource();
      this.audioNode.buffer = this.buffer;
      this.audioNode.connect(this.GameState.Audio.masterAudioNode);
      this.audioNode.loop = this.shouldLoop;
      this.audioNode.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.audioNode && this.audioNode.playbackState === 2) this.audioNode.stop(0);
    }
  }]);

  return _class;
}();

exports.default = _class;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Entity2 = __webpack_require__(1);

var _Entity3 = _interopRequireDefault(_Entity2);

var _Vector = __webpack_require__(0);

var _Vector2 = _interopRequireDefault(_Vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Entity) {
  _inherits(_class, _Entity);

  function _class(config) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, config));

    var imageUrl = config.imageUrl,
        repeat = config.repeat,
        _config$scale = config.scale,
        scale = _config$scale === undefined ? new _Vector2.default(1, 1) : _config$scale;


    _this.imageUrl = imageUrl;
    _this.repeat = repeat;
    _this.scale = scale;

    _this.pattern = null;
    return _this;
  }

  _createClass(_class, [{
    key: 'load',
    value: function load() {
      var _this2 = this;

      var img = new Image();
      img.onload = function () {
        _this2.pattern = _this2.GameState.Canvas.ctx.createPattern(img, _this2.repeat);
      };
      img.src = this.imageUrl;
    }
  }, {
    key: 'calculateOffset',
    value: function calculateOffset() {
      if (!this.scale) return;
      this.offset = new _Vector2.default(-(this.origin.x * this.dimensions.x * this.scale.x), -(this.origin.y * this.dimensions.y * this.scale.y));
    }
  }, {
    key: 'draw',
    value: function draw() {
      this.GameState.Canvas.ctx.beginPath();
      this.GameState.Canvas.ctx.rect(0, 0, this.dimensions.x * this.scale.x, this.dimensions.y * this.scale.y);
      this.GameState.Canvas.ctx.fillStyle = this.pattern;
      this.GameState.Canvas.ctx.scale(this.scale.x, this.scale.y);
      this.GameState.Canvas.ctx.fill();
    }
  }]);

  return _class;
}(_Entity3.default);

exports.default = _class;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Sprite2 = __webpack_require__(19);

var _Sprite3 = _interopRequireDefault(_Sprite2);

var _Vector = __webpack_require__(0);

var _Vector2 = _interopRequireDefault(_Vector);

var _keyCodes = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Sprite) {
  _inherits(_class, _Sprite);

  function _class(config) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, config));

    _this.moveSpeed = 6;
    _this.animations = {
      idle: {
        spriteSheet: './img/idle.png',
        frames: 12,
        ticksPerFrame: 4
      },
      run: {
        spriteSheet: './img/run.png',
        frames: 8,
        ticksPerFrame: 4
      },
      jump: {
        spriteSheet: './img/jump.png',
        frames: 4,
        ticksPerFrame: 12
      }
    };
    _this.initialHeight = config.initialheight;
    _this.yVelocity = 0;
    return _this;
  }

  _createClass(_class, [{
    key: 'update',
    value: function update() {
      this.handleControls();
    }
  }, {
    key: 'handleControls',
    value: function handleControls() {
      var tempPos = new _Vector2.default(this.position.x, this.position.y);
      this.currentAnimation = 'idle';

      if (this.GameState.Controls.pressedKeys.includes(_keyCodes.LEFT_ARROW)) {
        this.currentAnimation = 'run';

        if (this.position.x > -(this.GameState.Canvas.cx - this.offset.x)) {
          this.mirrorX = true;
          tempPos.x -= this.moveSpeed;
        }
      }

      if (this.GameState.Controls.pressedKeys.includes(_keyCodes.RIGHT_ARROW)) {
        this.currentAnimation = 'run';

        if (this.position.x < this.GameState.Canvas.cx + this.offset.x) {
          this.mirrorX = false;
          tempPos.x += this.moveSpeed;
        }
      }

      if (this.position.y > this.initialHeight) {
        this.currentAnimation = 'jump';
        this.yVelocity -= 1;
      }
      if (this.position.y < this.initialHeight) {
        this.yVelocity = 0;
      }
      if (this.GameState.Controls.pressedKeys.includes(_keyCodes.UP_ARROW) && this.position.y <= this.initialHeight) {
        this.yVelocity = 30;
      }
      tempPos.y += this.yVelocity;

      this.setPosition(tempPos);
    }
  }]);

  return _class;
}(_Sprite3.default);

exports.default = _class;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Entity2 = __webpack_require__(1);

var _Entity3 = _interopRequireDefault(_Entity2);

var _Vector = __webpack_require__(0);

var _Vector2 = _interopRequireDefault(_Vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Entity) {
  _inherits(_class, _Entity);

  function _class(config) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, config));

    var animations = config.animations,
        _config$currentFrame = config.currentFrame,
        currentFrame = _config$currentFrame === undefined ? 1 : _config$currentFrame,
        _config$currentAnimat = config.currentAnimation,
        currentAnimation = _config$currentAnimat === undefined ? null : _config$currentAnimat,
        _config$mirrorX = config.mirrorX,
        mirrorX = _config$mirrorX === undefined ? false : _config$mirrorX,
        _config$mirrorY = config.mirrorY,
        mirrorY = _config$mirrorY === undefined ? false : _config$mirrorY,
        _config$scale = config.scale,
        scale = _config$scale === undefined ? new _Vector2.default(1, 1) : _config$scale;


    _this.animations = animations;
    _this.currentAnimation = currentAnimation;
    _this.currentFrame = currentFrame;
    _this.scale = scale;
    _this.mirrorX = mirrorX;
    _this.mirrorY = mirrorY;

    _this.lastAnimation = null;
    _this.tickCounter = 0;
    return _this;
  }

  _createClass(_class, [{
    key: 'load',
    value: function load() {
      var _this2 = this;

      Object.keys(this.animations).forEach(function (animation) {
        var img = new Image();
        img.src = _this2.animations[animation].spriteSheet;
        _this2.animations[animation].image = img;
      });
    }
  }, {
    key: 'calculateOffset',
    value: function calculateOffset() {
      if (!this.scale) return;
      this.offset = new _Vector2.default(-(this.origin.x * this.dimensions.x * this.scale.x * (this.mirrorX ? -1 : 1)), -(this.origin.y * this.dimensions.y * this.scale.y * (this.mirrorY ? -1 : 1)));
    }
  }, {
    key: 'draw',
    value: function draw() {
      if (!this.animations[this.currentAnimation]) return;

      this.handleFrames();

      if (this.mirrorX || this.mirrorY) {
        // No need to reset canvas transforms, Entity class handles that
        this.GameState.Canvas.ctx.scale(this.mirrorX ? -1 : 1, this.mirrorY ? -1 : 1);
      }

      this.GameState.Canvas.ctx.drawImage(this.animations[this.currentAnimation].image, this.currentFrame * this.dimensions.x, 0, this.dimensions.x, this.dimensions.y, 0, 0, this.dimensions.x * this.scale.x, this.dimensions.y * this.scale.y);
    }
  }, {
    key: 'handleFrames',
    value: function handleFrames() {
      // repeat animations
      this.tickCounter++;
      if (this.tickCounter > this.animations[this.currentAnimation].ticksPerFrame) {
        this.tickCounter = 0;
        this.currentFrame += 1;
        if (this.currentFrame >= this.animations[this.currentAnimation].frames) this.currentFrame = 1;
      }

      // Reset to first frame on animation switch
      if (this.lastAnimation !== this.currentAnimation) {
        this.lastAnimation = this.currentAnimation;
        this.currentFrame = 1;
      }
    }
  }]);

  return _class;
}(_Entity3.default);

exports.default = _class;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var BACKSPACE = exports.BACKSPACE = 8;
var TAB = exports.TAB = 9;
var ENTER = exports.ENTER = 13;
var SHIFT = exports.SHIFT = 16;
var CTRL = exports.CTRL = 17;
var ALT = exports.ALT = 18;
var CAPSLOCK = exports.CAPSLOCK = 20;
var ESCAPE = exports.ESCAPE = 27;
var SPACEBAR = exports.SPACEBAR = 32;
var PAGE_UP = exports.PAGE_UP = 33;
var PAGE_DOWN = exports.PAGE_DOWN = 34;
var END = exports.END = 35;
var HOME = exports.HOME = 36;
var LEFT_ARROW = exports.LEFT_ARROW = 37;
var UP_ARROW = exports.UP_ARROW = 38;
var RIGHT_ARROW = exports.RIGHT_ARROW = 39;
var DOWN_ARROW = exports.DOWN_ARROW = 40;
var SELECT = exports.SELECT = 41;
var PRINT = exports.PRINT = 42;
var EXECUTE = exports.EXECUTE = 43;
var PRINT_SCREEN = exports.PRINT_SCREEN = 44;
var INSERT = exports.INSERT = 45;
var DELETE = exports.DELETE = 46;
var HELP = exports.HELP = 47;
var NUMBER_0 = exports.NUMBER_0 = 48;
var NUMBER_1 = exports.NUMBER_1 = 49;
var NUMBER_2 = exports.NUMBER_2 = 50;
var NUMBER_3 = exports.NUMBER_3 = 51;
var NUMBER_4 = exports.NUMBER_4 = 52;
var NUMBER_5 = exports.NUMBER_5 = 53;
var NUMBER_6 = exports.NUMBER_6 = 54;
var NUMBER_7 = exports.NUMBER_7 = 55;
var NUMBER_8 = exports.NUMBER_8 = 56;
var NUMBER_9 = exports.NUMBER_9 = 57;
var A = exports.A = 65;
var B = exports.B = 66;
var C = exports.C = 67;
var D = exports.D = 68;
var E = exports.E = 69;
var F = exports.F = 70;
var G = exports.G = 71;
var H = exports.H = 72;
var I = exports.I = 73;
var J = exports.J = 74;
var K = exports.K = 75;
var L = exports.L = 76;
var M = exports.M = 77;
var N = exports.N = 78;
var O = exports.O = 79;
var P = exports.P = 80;
var Q = exports.Q = 81;
var R = exports.R = 82;
var S = exports.S = 83;
var T = exports.T = 84;
var U = exports.U = 85;
var V = exports.V = 86;
var W = exports.W = 87;
var X = exports.X = 88;
var Y = exports.Y = 89;
var Z = exports.Z = 90;
var NUMPAD_0 = exports.NUMPAD_0 = 96;
var NUMPAD_1 = exports.NUMPAD_1 = 97;
var NUMPAD_2 = exports.NUMPAD_2 = 98;
var NUMPAD_3 = exports.NUMPAD_3 = 99;
var NUMPAD_4 = exports.NUMPAD_4 = 100;
var NUMPAD_5 = exports.NUMPAD_5 = 101;
var NUMPAD_6 = exports.NUMPAD_6 = 102;
var NUMPAD_7 = exports.NUMPAD_7 = 103;
var NUMPAD_8 = exports.NUMPAD_8 = 104;
var NUMPAD_9 = exports.NUMPAD_9 = 105;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class(GameState) {
    _classCallCheck(this, _class);

    this.GameState = GameState;
    this.isRunning = false;
  }

  _createClass(_class, [{
    key: "init",
    value: function init() {
      if (!this.isRunning) {
        this.isRunning = true;
        this.render();
      };
    }
  }, {
    key: "shouldRender",
    value: function shouldRender() {
      return !this.GameState.isPaused;
    }
  }, {
    key: "render",
    value: function render() {
      // Request new frame
      if (this.isRunning) window.requestAnimationFrame(this.render.bind(this));

      // Bail out early
      if (!this.shouldRender()) return;

      // Clear screen
      this.GameState.Canvas.clear();

      // Draw Entities
      this.GameState.Scene.entities.forEach(function (entity) {
        return entity.drawEntity();
      });
    }
  }]);

  return _class;
}();

exports.default = _class;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var uuidv4 = __webpack_require__(23);

var _class = function () {
  function _class(GameState) {
    _classCallCheck(this, _class);

    this.GameState = GameState;
    this.entities = [];
  }

  _createClass(_class, [{
    key: 'init',
    value: function init() {
      // Nothing here yet
    }
  }, {
    key: 'add',
    value: function add(entity) {
      entity.uuid = uuidv4();
      this.entities.push(entity);
    }
  }, {
    key: 'remove',
    value: function remove(uuid) {
      this.entities = this.entities.filter(function (el) {
        return el.uuid !== uuid;
      });
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.entities = [];
    }
  }]);

  return _class;
}();

exports.default = _class;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var rng = __webpack_require__(24);
var bytesToUuid = __webpack_require__(25);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof options == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = typeof crypto != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto);

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return [bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]]].join('');
}

module.exports = bytesToUuid;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class(GameState) {
    _classCallCheck(this, _class);

    this.GameState = GameState;
    this.screens = document.querySelectorAll('[data-screen]');
    this.buttons = {
      fullscreen: document.querySelectorAll('[data-gamestate-fullscreen]'),
      initAudio: document.querySelectorAll('[data-gamestate-init-audio]'),
      level: document.querySelectorAll('[data-gamestate-change-level]'),
      mute: document.querySelectorAll('[data-gamestate-mute]'),
      pause: document.querySelectorAll('[data-gamestate-pause]'),
      play: document.querySelectorAll('[data-gamestate-play]'),
      quit: document.querySelectorAll('[data-gamestate-quit]'),
      restart: document.querySelectorAll('[data-gamestate-restart]'),
      screens: document.querySelectorAll('[data-target-screen]')
    };
    this.isFullscreen = false;
  }

  _createClass(_class, [{
    key: 'init',
    value: function init() {
      this.initListenters();
      this.setScreen('mainmenu');
      this.updateLevel(this.GameState.levels[this.GameState.level].name);
    }
  }, {
    key: 'initListenters',
    value: function initListenters() {
      var _this = this;

      // Init audio on user input
      Array.from(this.buttons.initAudio).forEach(function (button) {
        button.addEventListener('click', function () {
          if (!_this.GameState.Audio.isInitialized) _this.GameState.Audio.init();
        });
      });

      // Play buttons
      Array.from(this.buttons.play).forEach(function (button) {
        button.addEventListener('click', function () {
          return _this.GameState.play();
        });
      });

      // Pause buttons
      Array.from(this.buttons.pause).forEach(function (button) {
        button.addEventListener('click', function () {
          return _this.GameState.togglePause();
        });
      });

      // Restart Buttons
      Array.from(this.buttons.restart).forEach(function (button) {
        button.addEventListener('click', function () {
          return _this.GameState.restart();
        });
      });

      //Fullscreen buttons
      Array.from(this.buttons.fullscreen).forEach(function (button) {
        button.addEventListener('click', function () {
          return _this.toggleFullscreen();
        });
      });

      //Level selection buttons
      Array.from(this.buttons.level).forEach(function (button) {
        button.addEventListener('click', function (e) {
          _this.GameState.level += parseInt(e.target.dataset.gamestateChangeLevel, 10);
          if (_this.GameState.level >= _this.GameState.levels.length) _this.GameState.level = 0;
          if (_this.GameState.level < 0) _this.GameState.level = _this.GameState.levels.length - 1;

          _this.updateLevel(_this.GameState.levels[_this.GameState.level].name);
        });
      });

      // Quit buttons
      Array.from(this.buttons.quit).forEach(function (button) {
        button.addEventListener('click', function () {
          return window.close();
        });
      });

      // Mute Buttons
      Array.from(this.buttons.mute).forEach(function (button) {
        button.addEventListener('click', function (e) {
          return _this.GameState.Audio.toggleMute();
        });
      });

      // UI Screen Transitions
      Array.from(this.buttons.screens).forEach(function (button) {
        button.addEventListener('click', _this.initTransitions.bind(_this));
      });
    }
  }, {
    key: 'initTransitions',
    value: function initTransitions(e) {
      this.setScreen(e.target.dataset.targetScreen);
    }
  }, {
    key: 'setScreen',
    value: function setScreen(screenToSet) {
      Array.from(this.screens).forEach(function (screen) {
        if (screen.dataset.screen === screenToSet) {
          screen.classList.add('active');
        } else {
          screen.classList.remove('active');
        }
      });
    }
  }, {
    key: 'toggleFullscreen',
    value: function toggleFullscreen() {
      var elem = document.documentElement;

      /* View in fullscreen */
      if (!this.isFullscreen) {
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
          /* Firefox */
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
          /* Chrome, Safari and Opera */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
          /* IE/Edge */
          elem.msRequestFullscreen();
        }
      }

      /* Close fullscreen */
      if (this.isFullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          /* Firefox */
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          /* Chrome, Safari and Opera */
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          /* IE/Edge */
          document.msExitFullscreen();
        }
      }

      this.isFullscreen = !this.isFullscreen;
    }
  }, {
    key: 'updateScore',
    value: function updateScore(score) {
      var scores = document.querySelectorAll('[data-ui="score"]');
      Array.from(scores).forEach(function (scoreElement) {
        scoreElement.innerHTML = score;
      });
    }
  }, {
    key: 'updateLevel',
    value: function updateLevel(level) {
      if (!level) return;

      Array.from(document.querySelectorAll('[data-ui="level"]')).forEach(function (levelElement) {
        levelElement.innerHTML = level;
      });
    }
  }]);

  return _class;
}();

exports.default = _class;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class(GameState) {
    _classCallCheck(this, _class);

    this.GameState = GameState;
    this.isRunning = false;
    this.lastUpdate = Date.now();
    this.updateRate = 10;
  }

  _createClass(_class, [{
    key: "init",
    value: function init() {
      if (!this.isRunning) {
        this.isRunning = true;
        this.update();
      };
    }
  }, {
    key: "calculateDeltaTime",
    value: function calculateDeltaTime() {
      var now = Date.now();
      this.GameState.deltaTime = now - this.lastUpdate;
      this.lastUpdate = now;
    }
  }, {
    key: "shouldUpdate",
    value: function shouldUpdate() {
      return !this.GameState.isPaused;
    }
  }, {
    key: "update",
    value: function update() {
      // Request new frame
      if (this.isRunning) window.setTimeout(this.update.bind(this), this.updateRate);

      // Bail out early
      if (!this.shouldUpdate()) return;

      // Calculations
      this.calculateDeltaTime();

      // Handle Level specific game logic
      this.GameState.levels[this.GameState.level].gameLogic();

      // Handle Entity Update
      this.GameState.Scene.entities.forEach(function (entity) {
        return entity.update();
      });
    }
  }]);

  return _class;
}();

exports.default = _class;

/***/ })
/******/ ]);
});