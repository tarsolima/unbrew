/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/javascript.js":
/*!**************************!*\
  !*** ./js/javascript.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_initscroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/initscroll.js */ \"./js/modules/initscroll.js\");\n/* harmony import */ var _modules_initnumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/initnumber.js */ \"./js/modules/initnumber.js\");\n/* harmony import */ var _modules_initmodal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/initmodal.js */ \"./js/modules/initmodal.js\");\n/* harmony import */ var _modules_initdropdown_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/initdropdown.js */ \"./js/modules/initdropdown.js\");\n/* harmony import */ var _modules_initmenumobile_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/initmenumobile.js */ \"./js/modules/initmenumobile.js\");\n\n\n\n\n\n(0,_modules_initscroll_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_initnumber_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_initmodal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_initdropdown_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_initmenumobile_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack://landingpagejs-4/./js/javascript.js?");

/***/ }),

/***/ "./js/modules/initdropdown.js":
/*!************************************!*\
  !*** ./js/modules/initdropdown.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdown)\n/* harmony export */ });\n/* harmony import */ var _outside_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outside.js */ \"./js/modules/outside.js\");\n\nfunction initDropdown() {\n  var dropdown = document.querySelectorAll('[data-dropdown]');\n  function handleDropDown(itens) {\n    var _this = this;\n    itens.preventDefault();\n    this.classList.add('active');\n    (0,_outside_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ['touchstart', 'click'], function () {\n      return _this.classList.remove('active');\n    });\n  }\n  dropdown.forEach(function (itens) {\n    ['touchstart', 'click'].forEach(function (userEvent) {\n      return itens.addEventListener(userEvent, handleDropDown);\n    });\n  });\n}\n\n//# sourceURL=webpack://landingpagejs-4/./js/modules/initdropdown.js?");

/***/ }),

/***/ "./js/modules/initmenumobile.js":
/*!**************************************!*\
  !*** ./js/modules/initmenumobile.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outside_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outside.js */ \"./js/modules/outside.js\");\n\nfunction initMenuMobile() {\n  var menuMobile = document.querySelector('[data-mobile=\"click\"]');\n  var menuList = document.querySelector('[data-mobile=\"list\"]');\n  function startMobile() {\n    menuMobile.classList.add('active');\n    menuList.classList.add('active');\n    (0,_outside_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, ['touchstart', 'click'], function () {\n      menuMobile.classList.remove('active');\n      menuList.classList.remove('active');\n    });\n  }\n  ['touchstart', 'click'].forEach(function (userEvent) {\n    return menuMobile.addEventListener(userEvent, startMobile);\n  });\n}\n\n//# sourceURL=webpack://landingpagejs-4/./js/modules/initmenumobile.js?");

/***/ }),

/***/ "./js/modules/initmodal.js":
/*!*********************************!*\
  !*** ./js/modules/initmodal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\n  var openModal = document.querySelector('[data-abrir=\"modal\"]');\n  var closedModal = document.querySelector('[data-modal=\"fechar\"]');\n  var modalContainer = document.querySelector('[data-container]');\n  function startModal(event) {\n    event.preventDefault();\n    modalContainer.classList.toggle('active');\n  }\n  function eventContainer(event) {\n    event.preventDefault();\n    if (event.target === this) {\n      startModal(event);\n    }\n  }\n  openModal.addEventListener('click', startModal);\n  closedModal.addEventListener('click', startModal);\n  modalContainer.addEventListener('click', eventContainer);\n}\n\n//# sourceURL=webpack://landingpagejs-4/./js/modules/initmodal.js?");

/***/ }),

/***/ "./js/modules/initnumber.js":
/*!**********************************!*\
  !*** ./js/modules/initnumber.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initnumber)\n/* harmony export */ });\nfunction initnumber() {\n  var numeros = document.querySelectorAll('[data-numero]');\n  function animaNumeros() {\n    numeros.forEach(function (itens) {\n      var total = +itens.innerText;\n      var incremento = Math.floor(total / 100);\n      var start = 0;\n      var timer = setInterval(function () {\n        start += incremento;\n        itens.innerText = start;\n        if (start > total) {\n          itens.innerText = total;\n          clearInterval(timer);\n        }\n      }, 25 * Math.random());\n    });\n  }\n  var observer;\n  function handleMutation(mutation) {\n    if (mutation[0].target.classList.contains('active')) {\n      observer.disconnect();\n      animaNumeros();\n    }\n  }\n  var observerTarget = document.querySelector('.fundo-services');\n  observer = new MutationObserver(handleMutation);\n  observer.observe(observerTarget, {\n    attributes: true\n  });\n}\n\n//# sourceURL=webpack://landingpagejs-4/./js/modules/initnumber.js?");

/***/ }),

/***/ "./js/modules/initscroll.js":
/*!**********************************!*\
  !*** ./js/modules/initscroll.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initscroll)\n/* harmony export */ });\nfunction initscroll() {\n  var scrollStart = document.querySelectorAll('[data-scroll]');\n  var windowMetade = window.innerHeight * 0.7;\n  function scroller() {\n    scrollStart.forEach(function (itens) {\n      var scrollTop = itens.getBoundingClientRect().top;\n      var conta = scrollTop - windowMetade < 0;\n      if (conta) {\n        itens.classList.add('active');\n      }\n    });\n  }\n  scroller();\n  window.addEventListener('scroll', scroller);\n}\n\n//# sourceURL=webpack://landingpagejs-4/./js/modules/initscroll.js?");

/***/ }),

/***/ "./js/modules/outside.js":
/*!*******************************!*\
  !*** ./js/modules/outside.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\n  var html = document.documentElement;\n  var outside = 'data-outside';\n  function handleOutside(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      events.forEach(function (userEvent) {\n        return html.removeEventListener(userEvent, handleOutside);\n      });\n      callback();\n    }\n  }\n  if (!element.hasAttribute(outside)) {\n    events.forEach(function (userEvent) {\n      setTimeout(function () {\n        return html.addEventListener(userEvent, handleOutside);\n      });\n    });\n    element.setAttribute(outside, '');\n  }\n}\n\n//# sourceURL=webpack://landingpagejs-4/./js/modules/outside.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/javascript.js");
/******/ 	
/******/ })()
;