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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./webpack/_base.js":
/*!**************************!*\
  !*** ./webpack/_base.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./webpack/_base.js?");

/***/ }),

/***/ "./webpack/index.js":
/*!**************************!*\
  !*** ./webpack/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _organisms_list_cassette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./organisms/_list_cassette */ \"./webpack/organisms/_list_cassette.js\");\n\n\n// カセットdomにイベントを定義\nvar $listCassettes = document.getElementsByClassName(\"var-output-cassette\");\nvar ListCassetteInstance = new _organisms_list_cassette__WEBPACK_IMPORTED_MODULE_0__[\"default\"]($listCassettes);\n\n\n//# sourceURL=webpack:///./webpack/index.js?");

/***/ }),

/***/ "./webpack/molecules/_cassette.js":
/*!***************************************!*\
  !*** ./webpack/molecules/_cassette.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Cassette; });\nclass Cassette {\n    // cassetteの振る舞いを定義\n\n    constructor($dom) {\n        this.$dom = $dom;\n        // 初期の背景色\n        this.initBackgroundColor = $dom.style.backgroundColor;\n        // 背景色が初期化した色かどうか\n        this.isInitBackgroundColor = true;\n    }\n\n    toggleColor(backgroundColor) {\n        // 背景色を変更するメソッド\n        if (this.isInitBackgroundColor) {\n            this.$dom.style.backgroundColor = backgroundColor;\n        }\n        else {\n            this.$dom.style.backgroundColor = this.initBackgroundColor;\n        }\n        this.isInitBackgroundColor = !this.isInitBackgroundColor;\n    }\n\n    setClickEvent(changeColor) {\n        // カセットを押したらイベントを発火させる\n        // コールバック関数とthisの罠\n        // = function() {~}とかくと, 受け取るthisはクリックされたオブジェクトになっている...違うものが渡されている\n        // アロー関数を使うと解決できる\n        this.$dom.onclick = () => { this.toggleColor(changeColor) };\n    }\n}\n\n\n//# sourceURL=webpack:///./webpack/molecules/_cassette.js?");

/***/ }),

/***/ "./webpack/organisms/_list_cassette.js":
/*!*********************************************!*\
  !*** ./webpack/organisms/_list_cassette.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ListCassette; });\n/* harmony import */ var _molecules_cassette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../molecules/_cassette */ \"./webpack/molecules/_cassette.js\");\n\n\nclass ListCassette {\n    // list_cassetteの振る舞いを定義\n\n    constructor($dom) {\n        // cassetteのリスト\n        this.$dom = $dom;\n\n        // 1つ1つ初期化していく\n        var color = ['red', 'green']\n        this.listCassetteInstance = [];\n        for (let index = 0; index < $dom.length; index++) {\n            // クラス追加\n            this.listCassetteInstance[index] = new _molecules_cassette__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.$dom[index]);\n            this.listCassetteInstance[index].setClickEvent(color[index%2]);\n            // this.$dom[index].onclick = () => { console.log(this)} ;\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./webpack/organisms/_list_cassette.js?");

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./webpack/_base.js ./webpack/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./webpack/_base.js */\"./webpack/_base.js\");\nmodule.exports = __webpack_require__(/*! ./webpack/index.js */\"./webpack/index.js\");\n\n\n//# sourceURL=webpack:///multi_./webpack/_base.js_./webpack/index.js?");

/***/ })

/******/ });