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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.body.style.margin = \"0px\";\r\ndocument.body.style.overflow = \"hidden\";\r\nlet canvas = document.createElement(\"canvas\");\r\ncanvas.width = window.innerWidth;\r\ncanvas.height = window.innerHeight;\r\ndocument.body.appendChild(canvas);\r\n\r\nlet ctx = canvas.getContext(\"2d\");\r\n\r\nwindow.requestAnimationFrame(loop);\r\n\r\nlet ball = {\r\n    position: {\r\n        x: 100,\r\n        y: 100\r\n    },\r\n    velocity: {\r\n        x: 500,\r\n        y: 500\r\n    }\r\n};\r\n\r\nlet lastTime = new Date().getTime();\r\nfunction loop() {\r\n    let time = new Date().getTime();\r\n    let dt = (time - lastTime) / 1000;\r\n\r\n    ball.position.x += ball.velocity.x * dt;\r\n    ball.position.y += ball.velocity.y * dt;\r\n\r\n    if (ball.position.x < 50)\r\n        ball.velocity.x *= -1;\r\n    if (ball.position.x > canvas.width - 50)\r\n        ball.velocity.x *= -1;\r\n    if (ball.position.y < 50)\r\n        ball.velocity.y *= -1;\r\n    if (ball.position.y > canvas.height - 50)\r\n        ball.velocity.y *= -1;\r\n\r\n    ctx.fillStyle = \"#303030\";\r\n    ctx.fillRect(0, 0, canvas.width, canvas.height);\r\n\r\n    ctx.fillStyle = \"#ff1111\";\r\n    ctx.beginPath();\r\n    ctx.arc(ball.position.x, ball.position.y, 50, 0, 2 * Math.PI);\r\n    ctx.fill();\r\n\r\n    lastTime = time;\r\n    window.requestAnimationFrame(loop);\r\n}\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });