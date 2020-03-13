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

/***/ "./src/ant.js":
/*!********************!*\
  !*** ./src/ant.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Ant {\n  constructor() {\n    this.keyPresses = {};\n    this.dx = 0;\n    this.dy = 0;\n    this.posX = 0;\n    this.posY = 335;\n  }\n\n  moveSprite(dx, dy, canvas) {\n    this.posX += dx\n    if (this.posX + 60 > 315) {\n      this.posX = -6\n    }\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ant);\n\n//# sourceURL=webpack:///./src/ant.js?");

/***/ }),

/***/ "./src/bowser.js":
/*!***********************!*\
  !*** ./src/bowser.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Bowser {\n  constructor() {\n    this.keyPresses = {};\n    this.dx = 0;\n    this.dy = 0;\n    this.posX = 30;\n    this.posY = 400;\n  }\n\n  moveSprite(dx, dy, canvas) {\n    this.posX +=dx\n    if (this.posX+65 < 0){\n      this.posX += 270\n    }\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bowser);\n\n//# sourceURL=webpack:///./src/bowser.js?");

/***/ }),

/***/ "./src/char.js":
/*!*********************!*\
  !*** ./src/char.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass Char {\n  constructor(){\n    this.keyPresses = {};\n    this.dx = 0;\n    this.dy = 0;\n    this.posX = 50;\n    this.posY = 460;\n    this.keydownListener = this.keydownListener.bind(this);\n    this.keyupListener = this.keyupListener.bind(this);\n    window.addEventListener(\"keydown\", this.keydownListener, false);\n    window.addEventListener(\"keyup\", this.keyupListener, false);\n  }\n\n  keydownListener(event){\n    this.keyPresses[event.key] = true;\n    // debugger;\n    // console.log(\"down\")\n  }\n\n  keyupListener(e){\n    this.keyPresses[e.key] = false;\n    this.dx = 0;\n    this.dy = 0;\n    // console.log(this.keyPresses)\n  }\n\n  moveSprite(dx, dy, canvas){\n    if (this.keyPresses[\"w\"]){\n      this.dy = -(dy)\n    } else if (this.keyPresses[\"s\"]){\n      this.dy = dy\n    } else if (this.keyPresses[\"a\"]){\n      this.dx = -(dx)\n    } else if (this.keyPresses[\"d\"]){\n      this.dx = dx\n    }\n    if (this.posX + this.dx > 0 && this.posX + 55 + this.dx < 630 && this.posX + 55 + this.dx > 0){\n      this.posX += this.dx;\n    }\n    if (this.posY + this.dy > 0 && this.posY + 50 + this.dy < 510 && this.posY + 50 + this.dy > 0){\n      this.posY += this.dy;\n    }\n  }\n}\n// conditions between 200 - 630\n/* harmony default export */ __webpack_exports__[\"default\"] = (Char);\n// constructor({ pos, vel, radius, color }) {\n//   this.pos = pos;\n//   this.vel = vel;\n//   this.radius = radius;\n//   this.color = color;\n// }\n\n// move() {\n//   this.pos[0] += this.vel[0];\n//   this.pos[1] += this.vel[1];\n// }\n\n// draw(ctx) {\n//   ctx.fillStyle = this.color;\n//   ctx.beginPath();\n//   ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n//   ctx.fill();\n// }\n\n//# sourceURL=webpack:///./src/char.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _char__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./char */ \"./src/char.js\");\n/* harmony import */ var _bowser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bowser */ \"./src/bowser.js\");\n/* harmony import */ var _ant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ant */ \"./src/ant.js\");\n/* harmony import */ var _wolf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wolf */ \"./src/wolf.js\");\n/* harmony import */ var _rock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rock */ \"./src/rock.js\");\n// const GameView = require(\"./game_view.js\")\n// window.GameView = GameView;\n\n\n\n\n\n// import \"../stylesheets/index.css\";\n\nlet canvas = document.createElement(\"canvas\"); canvas.className=\"canvas\";\nlet ctx = canvas.getContext(\"2d\");\n\ncanvas.width = 600; //385\ncanvas.height = 600; //100\ndocument.body.appendChild(canvas);\n\nlet lava = new Image(); \nlava.src = \"./lava.png\";\nlet lavaFloor = new Image(); \nlavaFloor.src = \"./Dungeon_A5.png\";\nlet grass = new Image(); \ngrass.src = \"./Dungeon_A4.png\";\n\nlet charImage = new Image(); \ncharImage.src = \"cindyschar.png\";\nlet char = new _char__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\nlet wolf = new _wolf__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nlet wolfImage = new Image(); \nwolfImage.src = \"wolf.png\";\n\nlet bowser = new _bowser__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nlet bowserImage = new Image(); \nbowserImage.src = \"bowser.png\";\n\nlet ant = new _ant__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nlet antImage = new Image(); \nantImage.src = \"ant.png\";\n\nlet rock = new _rock__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\nlet rockImage = new Image(); \nrockImage.src = \"Dungeon_B.png\";\n// ctx.strokeStyle = 'black';\n// ctx.strokeRect(380, 90, 615,500);\n// (x, y, width, height)\n// const gameView = new GameView(ctx);\n// gameView.start()\n// new GameView(game,ctx).start();\nfunction drawBackground(){\n  // (5th, 6th number is x, y of the canvas)\n  ctx.drawImage(lavaFloor, 0, 250, 145, 40, 0, 0, 615, 80);\n  ctx.drawImage(lava, 0, 70, 615, 50);\n  ctx.drawImage(lava, 0, 120, 615, 50);\n  ctx.drawImage(lava, 0, 170, 615, 50);\n  // ctx.drawImage(lava, 380, 160, 615, 50);\n  // ctx.drawImage(lava, 380, 210, 615, 50);\n  // ctx.drawImage(lava, 380, 260, 615, 50);\n  ctx.drawImage(lavaFloor, 0, 245, 145, 40, 0, 220, 615, 60)\n  ctx.drawImage(grass, 390, 105, 90, 50, 0, 280, 615, 60)\n  ctx.drawImage(grass, 390, 105, 90, 50, 0, 340.2, 615, 60)\n  ctx.drawImage(grass, 390, 105, 90, 50, 0, 400.4, 615, 60)\n  ctx.drawImage(grass, 400, 270, 80, 50, 0, 460.6, 615, 40)\n\n  //dy = 60.2\n}\n\nfunction drawChar(){\n  ctx.drawImage(wolfImage, 5, 10, 120, 60, wolf.posX, wolf.posY, 90, 50)\n  ctx.drawImage(wolfImage, 5, 10, 120, 60, wolf.posX + 250, wolf.posY, 90, 50)\n  ctx.drawImage(wolfImage, 5, 10, 120, 60, wolf.posX + 500, wolf.posY, 90, 50)\n  ctx.drawImage(antImage, 0, 0, 30, 20, ant.posX, ant.posY, 60, 50)\n  ctx.drawImage(antImage, 0, 0, 30, 20, ant.posX + 260, ant.posY, 60, 50)\n  ctx.drawImage(antImage, 0, 0, 30, 20, ant.posX+520, ant.posY, 60, 50)\n  ctx.drawImage(bowserImage, 0, 90, 80, 80, bowser.posX+270, bowser.posY, 60, 50)\n  ctx.drawImage(bowserImage, 0, 90, 80, 80, bowser.posX + 540, bowser.posY, 60, 50)\n  ctx.drawImage(bowserImage, 0, 90, 80, 80, bowser.posX, bowser.posY, 60, 50)\n\n  ctx.drawImage(rockImage, 480, 100, 45, 40, 0, 75, 35, 35) //33\n  ctx.drawImage(rockImage, 480, 100, 45, 40, 33, 75, 35, 35)\n  ctx.drawImage(rockImage, 480, 100, 45, 40, 66, 75, 35, 35)\n\n  ctx.drawImage(rockImage, 480, 100, 45, 40, 190, 75, 35, 35) //144\n  ctx.drawImage(rockImage, 480, 100, 45, 40, 220, 75, 35, 35)\n  ctx.drawImage(rockImage, 480, 100, 45, 40, 250, 75, 35, 35) //420\n\n  ctx.drawImage(rockImage, 480, 100, 45, 40, 420, 75, 35, 35)//189\n  ctx.drawImage(rockImage, 480, 100, 45, 40, 450, 75, 35, 35)\n  ctx.drawImage(rockImage, 480, 100, 45, 40, 480, 75, 35, 35)\n\n  ctx.drawImage(rockImage, 480, 100, 45, 40, 110, 120, 35, 35)\n  ctx.drawImage(rockImage, 480, 100, 45, 40, 143, 120, 35, 35)\n\n  ctx.drawImage(rockImage, 480, 100, 45, 40, 320, 120, 35, 35)\n  ctx.drawImage(rockImage, 480, 100, 45, 40, 353, 120, 35, 35)\n\n  ctx.drawImage(rockImage, 480, 100, 45, 40, 520, 120, 35, 35)\n  ctx.drawImage(rockImage, 480, 100, 45, 40, 553, 120, 35, 35)\n\n  ctx.drawImage(rockImage, 480, 100, 45, 40, 0, 175, 35, 35)\n  ctx.drawImage(rockImage, 480, 100, 45, 40, 33, 175, 35, 35)\n  ctx.drawImage(rockImage, 480, 100, 45, 40, 66, 175, 35, 35)\n\n  ctx.drawImage(rockImage, 480, 100, 45, 40, 190, 175, 35, 35)\n  ctx.drawImage(rockImage, 480, 100, 45, 40, 220, 175, 35, 35)\n  ctx.drawImage(rockImage, 480, 100, 45, 40, 250, 175, 35, 35)\n\n  ctx.drawImage(rockImage, 480, 100, 45, 40, 420, 175, 35, 35)\n  ctx.drawImage(rockImage, 480, 100, 45, 40, 450, 175, 35, 35)\n  ctx.drawImage(rockImage, 480, 100, 45, 40, 480, 175, 35, 35)\n\n  ctx.drawImage(rockImage, 478, 720, 45, 45, 10, 235, 35, 35) //skeleton\n  ctx.drawImage(charImage, 0, 3, 50, 50, char.posX, char.posY, 45, 45)\n}\n\nfunction draw(){\n  ctx.clearRect(0,0, canvas.width, canvas.height);\n  char.moveSprite(4, 4, canvas);\n  bowser.moveSprite(-2, 0, canvas);\n  ant.moveSprite(2,0, canvas);\n  wolf.moveSprite(-2, 0, canvas);\n  drawBackground();\n  drawChar();\n  requestAnimationFrame(draw);\n}\ndraw();\n\n// (0, -5)\n// have conditions, once out of bound no longer render it\n\n// function drawBackground() {\n//   // (5th, 6th number is x, y of the canvas)\n//   ctx.drawImage(lavaFloor, 0, 250, 145, 40, 380, 90, 615, 80)\n//   ctx.drawImage(lava, 380, 160, 615, 50);\n//   ctx.drawImage(lava, 380, 210, 615, 50);\n//   ctx.drawImage(lava, 380, 260, 615, 50);\n//   ctx.drawImage(lavaFloor, 0, 245, 145, 40, 380, 310, 615, 60)\n//   ctx.drawImage(grass, 390, 105, 90, 50, 380, 370, 615, 60)\n//   ctx.drawImage(grass, 390, 105, 90, 50, 380, 430.2, 615, 60)\n//   ctx.drawImage(grass, 390, 105, 90, 50, 380, 490.4, 615, 60)\n//   ctx.drawImage(grass, 400, 270, 80, 50, 380, 550, 615, 40)\n// }\n\n// function drawChar() {\n//   ctx.drawImage(wolf, 5, 10, 120, 60, 820, 375, 90, 50)\n//   ctx.drawImage(wolf, 5, 10, 120, 60, 520, 375, 90, 50)\n//   ctx.drawImage(ant, 0, 0, 30, 20, 400, 425, 60, 50)\n//   ctx.drawImage(ant, 0, 0, 30, 20, 660, 425, 60, 50)\n//   ctx.drawImage(ant, 0, 0, 30, 20, 930, 425, 60, 50)\n//   ctx.drawImage(bowserImage, 0, 90, 80, 80, bowser.posX + 270, bowser.posY, 60, 50)\n//   ctx.drawImage(bowserImage, 0, 90, 80, 80, bowser.posX + 540, bowser.posY, 60, 50)\n//   ctx.drawImage(bowserImage, 0, 90, 80, 80, bowser.posX, bowser.posY, 60, 50)\n//   ctx.drawImage(rock, 480, 100, 45, 40, 380, 160, 35, 35)\n//   ctx.drawImage(rock, 480, 100, 45, 40, 413, 160, 35, 35)\n//   ctx.drawImage(rock, 480, 100, 45, 40, 446, 160, 35, 35)\n//   ctx.drawImage(rock, 480, 100, 45, 40, 590, 160, 35, 35)\n//   ctx.drawImage(rock, 480, 100, 45, 40, 623, 160, 35, 35)\n//   ctx.drawImage(rock, 480, 100, 45, 40, 656, 160, 35, 35)\n//   ctx.drawImage(rock, 480, 100, 45, 40, 845, 160, 35, 35)\n//   ctx.drawImage(rock, 480, 100, 45, 40, 878, 160, 35, 35)\n//   ctx.drawImage(rock, 480, 100, 45, 40, 911, 160, 35, 35)\n//   ctx.drawImage(rock, 480, 100, 45, 40, 490, 210, 35, 35)\n//   ctx.drawImage(rock, 480, 100, 45, 40, 523, 210, 35, 35)\n//   ctx.drawImage(rock, 480, 100, 45, 40, 723, 210, 35, 35)\n//   ctx.drawImage(rock, 480, 100, 45, 40, 756, 210, 35, 35)\n//   ctx.drawImage(rock, 480, 100, 45, 40, 380, 270, 35, 35)\n//   ctx.drawImage(rock, 480, 100, 45, 40, 413, 270, 35, 35)\n//   ctx.drawImage(rock, 480, 100, 45, 40, 446, 270, 35, 35)\n//   ctx.drawImage(rock, 480, 100, 45, 40, 590, 270, 35, 35)\n//   ctx.drawImage(rock, 480, 100, 45, 40, 623, 270, 35, 35)\n//   ctx.drawImage(rock, 480, 100, 45, 40, 656, 270, 35, 35)\n//   ctx.drawImage(rock, 480, 100, 45, 40, 845, 270, 35, 35)\n//   ctx.drawImage(rock, 480, 100, 45, 40, 878, 270, 35, 35)\n//   ctx.drawImage(rock, 480, 100, 45, 40, 911, 270, 35, 35)\n//   ctx.drawImage(rock, 478, 720, 45, 45, 390, 320, 35, 35)\n//   ctx.drawImage(charImage, 0, 3, 50, 50, char.posX, char.posY, 45, 45)\n// }\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/rock.js":
/*!*********************!*\
  !*** ./src/rock.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Rock {\n  constructor() {\n    this.keyPresses = {};\n    this.dx = 0;\n    this.dy = 0;\n    this.posX = 0;\n    this.posY = 335;\n  }\n\n  moveSprite(dx, dy, canvas) {\n    this.posX += dx\n    if (this.posX + 60 > 315) {\n      this.posX = -6\n    }\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Rock);\n\n//# sourceURL=webpack:///./src/rock.js?");

/***/ }),

/***/ "./src/wolf.js":
/*!*********************!*\
  !*** ./src/wolf.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Wolf {\n  constructor() {\n    this.dx = 0;\n    this.dy = 0;\n    this.posX = 50;\n    this.posY = 285;\n  }\n\n  moveSprite(dx, dy, canvas) {\n    this.posX += dx\n    if (this.posX + 195 < -30) {\n      this.posX += 250\n    }\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wolf);\n\n//# sourceURL=webpack:///./src/wolf.js?");

/***/ })

/******/ });