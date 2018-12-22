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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Audio = __webpack_require__(2);

var _Audio2 = _interopRequireDefault(_Audio);

var _Canvas = __webpack_require__(3);

var _Canvas2 = _interopRequireDefault(_Canvas);

var _Controls = __webpack_require__(4);

var _Controls2 = _interopRequireDefault(_Controls);

var _GameState = __webpack_require__(5);

var _GameState2 = _interopRequireDefault(_GameState);

var _Renderer = __webpack_require__(7);

var _Renderer2 = _interopRequireDefault(_Renderer);

var _Scene = __webpack_require__(8);

var _Scene2 = _interopRequireDefault(_Scene);

var _UI = __webpack_require__(14);

var _UI2 = _interopRequireDefault(_UI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var newGame = {
  Audio: _Audio2.default,
  Canvas: _Canvas2.default,
  Controls: _Controls2.default,
  GameState: _GameState2.default,
  Renderer: _Renderer2.default,
  Scene: _Scene2.default,
  UI: _UI2.default
};

document.addEventListener("DOMContentLoaded", function (e) {
  var GameState = new newGame.GameState();

  GameState.Audio = new newGame.Audio(GameState);
  GameState.Audio.init();

  GameState.UI = new newGame.UI(GameState);
  GameState.UI.init();

  GameState.Controls = new newGame.Controls(GameState);
  GameState.Controls.init();

  GameState.Canvas = new newGame.Canvas(GameState);
  GameState.Canvas.init();

  GameState.Scene = new newGame.Scene(GameState);
  GameState.Scene.init();

  GameState.Renderer = new newGame.Renderer(GameState);
  GameState.Renderer.init();
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _throttleDebounce = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class(GameState) {
    _classCallCheck(this, _class);

    this.GameState = GameState;
    this.audioContext = null;
    this.masterAudioNode = null;
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
    }
  }]);

  return _class;
}();

exports.default = _class;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _throttleDebounce = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class(GameState) {
    _classCallCheck(this, _class);

    this.GameState = GameState;
    this.cx = null;
    this.cy = null;
    this.canvas = null;
    this.ctx = null;
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
      this.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

      this.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
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

      window.addEventListener('resize', (0, _throttleDebounce.throttle)(200, function () {
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
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _throttleDebounce = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class(GameState) {
    _classCallCheck(this, _class);

    this.GameState = GameState;
    this.isMouseDown = false;
    this.oldPosition = 0;
    this.pressedKeys = [];
    this.debounceValue = 10;
  }

  _createClass(_class, [{
    key: "init",
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
    key: "handleTouchStart",
    value: function handleTouchStart(e) {
      this.isMouseDown = true;
      this.oldPosition = e.targetTouches[0].clientX;
    }
  }, {
    key: "handleTouchMove",
    value: function handleTouchMove(e) {
      e.preventDefault();
      if (!this.isMouseDown || this.GameState.isPaused) return;

      for (var i = 0; i < e.targetTouches.length; i++) {
        // Do something here with position
        this.oldPosition = e.targetTouches[i].clientX;
      }
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(e) {
      this.isMouseDown = true;
      this.oldPosition = e.clientX;
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(e) {
      if (!this.isMouseDown || this.GameState.isPaused) return;

      // Do something here with position
      this.oldPosition = e.clientX;
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(e) {
      if (!this.pressedKeys.includes(e.keyCode)) this.pressedKeys.push(e.keyCode);
    }
  }, {
    key: "handleKeyUp",
    value: function handleKeyUp(e) {
      var index = this.pressedKeys.indexOf(e.keyCode);
      if (index > -1) this.pressedKeys.splice(index, 1);
    }
  }, {
    key: "handlePressedKeys",
    value: function handlePressedKeys() {
      // left arrow
      if (this.pressedKeys.includes(37)) {}
      // right arrow
      if (this.pressedKeys.includes(39)) {}
    }
  }]);

  return _class;
}();

exports.default = _class;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultConfig = __webpack_require__(6);

var defaultConfig = _interopRequireWildcard(_defaultConfig);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class() {
    _classCallCheck(this, _class);

    this.audioContext = null;
    this.canvas = null;
    this.ctx = null;
    this.deltaTime = 1;
    this.isPaused = false;
    this.level = null;
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
      - this.Renderer
    */
  }

  _createClass(_class, [{
    key: 'play',
    value: function play() {
      this.loadLevel();
      if (this.isPaused) this.togglePause();
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
      if (this.isPaused) {
        this.Audio.audioContext.suspend();
      }
    }
  }, {
    key: 'endGame',
    value: function endGame() {
      this.level = null;
      this.isRunning = false;
      this.isPaused = true;
      this.score = 0;
    }
  }, {
    key: 'loadLevel',
    value: function loadLevel() {}
  }]);

  return _class;
}();

exports.default = _class;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  playerName: 'Player 1'
};

/***/ }),
/* 7 */
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
    key: "calculateDeltaTime",
    value: function calculateDeltaTime() {
      var now = Date.now();
      this.GameState.deltaTime = now - this.lastUpdate;
      this.lastUpdate = now;
    }
  }, {
    key: "shouldRender",
    value: function shouldRender() {
      return !this.GameState.isPaused;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      // Request new frame
      if (this.isRunning) window.requestAnimationFrame(this.render.bind(this));

      // Bail out early
      if (!this.shouldRender()) return;

      // Clear screen
      this.GameState.Canvas.clear();

      // Calculations
      this.calculateDeltaTime();

      // Handle Keypresses
      this.GameState.Controls.handlePressedKeys();

      // Draw Entities
      this.GameState.Scene.entities.forEach(function (entity) {
        entity.draw(_this.GameState.Canvas.ctx);
      });
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

var _Entity = __webpack_require__(9);

var _Entity2 = _interopRequireDefault(_Entity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var uuidv4 = __webpack_require__(11);

var _class = function () {
  function _class(GameState) {
    _classCallCheck(this, _class);

    this.Gamestate = GameState;
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
    key: 'clearScene',
    value: function clearScene() {
      this.entities = [];
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

var _Vector = __webpack_require__(10);

var _Vector2 = _interopRequireDefault(_Vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class(GameState) {
    _classCallCheck(this, _class);

    this.Gamestate = GameState;
    this.position = new _Vector2.default();
  }

  _createClass(_class, [{
    key: 'init',
    value: function init() {
      // Nothing here yet
    }
  }, {
    key: 'draw',
    value: function draw(ctx) {
      // Nothing here yet
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var rng = __webpack_require__(12);
var bytesToUuid = __webpack_require__(13);

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
/* 12 */
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
/* 13 */
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
/* 14 */
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
      mute: document.querySelectorAll('[data-nav="mute"]'),
      quit: document.querySelectorAll('[data-nav="quit"]'),
      screens: document.querySelectorAll('[data-target-screen]'),
      play: document.querySelectorAll('[data-gamestate-play]'),
      pause: document.querySelectorAll('[data-gamestate-pause]'),
      restart: document.querySelectorAll('[data-gamestate-restart]'),
      fullscreen: document.querySelectorAll('[data-nav="fullscreen"]'),
      level: document.querySelectorAll('[data-gamestate-change-level]')
    };
    this.isFullscreen = false;
  }

  _createClass(_class, [{
    key: 'init',
    value: function init() {
      this.initListenters();
      this.setScreen('mainmenu');
    }
  }, {
    key: 'initListenters',
    value: function initListenters() {
      var _this = this;

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
          if (_this.GameState.level < 0) _this.GameState.level = _this.GameState.levels.length;

          _this.updateLevel(_this.GameState.levels[_this.GameState.level]);
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

          var audioCtx = _this.GameState.Audio.audioContext;

          if (audioCtx.state === 'running') {
            audioCtx.suspend().then(function () {
              e.target.innerHTML = 'Resume';
            });
          } else if (audioCtx.state === 'suspended') {
            audioCtx.resume().then(function () {
              e.target.innerHTML = 'Mute';
            });
          }
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
        levelElement.innerHTML = level.name;
      });
    }
  }]);

  return _class;
}();

exports.default = _class;

/***/ })
/******/ ]);
});