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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_anima_scroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/anima-scroll.js */ \"./js/modules/anima-scroll.js\");\n/* harmony import */ var _modules_initnumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/initnumber.js */ \"./js/modules/initnumber.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_dropdown_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/dropdown.js */ \"./js/modules/dropdown.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n\n\n\n\n\nvar modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[data-abrir=\"modal\"]', '[data-modal=\"fechar\"]', '[data-container]');\nmodal.init();\nvar dropdown = new _modules_dropdown_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('[data-dropdown]');\ndropdown.init();\nvar menuMobile = new _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('[data-mobile=\"click\"]', '[data-mobile=\"list\"]');\nmenuMobile.init();\nvar scroll = new _modules_anima_scroll_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-scroll]');\nscroll.init();\n(0,_modules_initnumber_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://landingpagejs-4/./js/javascript.js?");

/***/ }),

/***/ "./js/modules/anima-scroll.js":
/*!************************************!*\
  !*** ./js/modules/anima-scroll.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimaScroll)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar AnimaScroll = /*#__PURE__*/function () {\n  function AnimaScroll(scrollSart) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, AnimaScroll);\n    this.scrollStart = document.querySelectorAll(scrollSart);\n    this.windowMetade = window.innerHeight * 0.7;\n    this.scroller = this.scroller.bind(this);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(AnimaScroll, [{\n    key: \"scroller\",\n    value: function scroller() {\n      var _this = this;\n      this.scrollStart.forEach(function (itens) {\n        var scrollTop = itens.getBoundingClientRect().top;\n        var conta = scrollTop - _this.windowMetade < 0;\n        if (conta) {\n          itens.classList.add('active');\n        }\n      });\n    }\n  }, {\n    key: \"addEvent\",\n    value: function addEvent() {\n      this.scroller();\n      window.addEventListener('scroll', this.scroller);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.scrollStart.length) {\n        this.addEvent();\n      }\n      return this;\n    }\n  }]);\n  return AnimaScroll;\n}();\n\n\n//# sourceURL=webpack://landingpagejs-4/./js/modules/anima-scroll.js?");

/***/ }),

/***/ "./js/modules/dropdown.js":
/*!********************************!*\
  !*** ./js/modules/dropdown.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Dropdown)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _outside_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./outside.js */ \"./js/modules/outside.js\");\n\n\n\nvar Dropdown = /*#__PURE__*/function () {\n  function Dropdown(dropdown, element) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Dropdown);\n    this.dropdown = document.querySelectorAll(dropdown);\n    if (this.element === undefined) this.element = ['touchstart', 'click'];else this.element = element;\n    this.activeClass = 'active';\n    this.handleDropDown = this.handleDropDown.bind(this);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Dropdown, [{\n    key: \"handleDropDown\",\n    value: function handleDropDown(itens) {\n      var _this = this;\n      itens.preventDefault();\n      var event = itens.currentTarget;\n      event.classList.add(this.activeClass);\n      (0,_outside_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(event, this.element, function () {\n        return event.classList.remove(_this.activeClass);\n      });\n    }\n  }, {\n    key: \"addEvent\",\n    value: function addEvent() {\n      var _this2 = this;\n      this.dropdown.forEach(function (itens) {\n        _this2.element.forEach(function (userEvent) {\n          return itens.addEventListener(userEvent, _this2.handleDropDown);\n        });\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.dropdown.length) {\n        this.addEvent();\n      }\n      return this;\n    }\n  }]);\n  return Dropdown;\n}();\n\n\n//# sourceURL=webpack://landingpagejs-4/./js/modules/dropdown.js?");

/***/ }),

/***/ "./js/modules/initnumber.js":
/*!**********************************!*\
  !*** ./js/modules/initnumber.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initnumber)\n/* harmony export */ });\nfunction initnumber() {\n  var numeros = document.querySelectorAll('[data-numero]');\n  function animaNumeros() {\n    numeros.forEach(function (itens) {\n      var total = +itens.innerText;\n      var incremento = Math.floor(total / 100);\n      var start = 0;\n      var timer = setInterval(function () {\n        start += incremento;\n        itens.innerText = start;\n        if (start > total) {\n          itens.innerText = total;\n          clearInterval(timer);\n        }\n      }, 25 * Math.random());\n    });\n  }\n  var observer;\n  function handleMutation(mutation) {\n    if (mutation[0].target.classList.contains('active')) {\n      observer.disconnect();\n      animaNumeros();\n    }\n  }\n  var observerTarget = document.querySelector('.fundo-services');\n  observer = new MutationObserver(handleMutation);\n  observer.observe(observerTarget, {\n    attributes: true\n  });\n}\n\n//# sourceURL=webpack://landingpagejs-4/./js/modules/initnumber.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuMobile)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _outside_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./outside.js */ \"./js/modules/outside.js\");\n\n\n\nvar MenuMobile = /*#__PURE__*/function () {\n  function MenuMobile(menuMobile, menuList, element) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, MenuMobile);\n    this.menuMobile = document.querySelector(menuMobile);\n    this.menuList = document.querySelector(menuList);\n    if (this.element === undefined) this.element = ['touchstart', 'click'];else this.element = element;\n    this.activeClass = 'active';\n    this.startMobile = this.startMobile.bind(this);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(MenuMobile, [{\n    key: \"startMobile\",\n    value: function startMobile(event) {\n      var _this = this;\n      event.preventDefault();\n      this.menuMobile.classList.add(this.activeClass);\n      this.menuList.classList.add(this.activeClass);\n      (0,_outside_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this.menuList, this.element, function () {\n        _this.menuMobile.classList.remove(_this.activeClass);\n        _this.menuList.classList.remove(_this.activeClass);\n      });\n    }\n  }, {\n    key: \"addEvent\",\n    value: function addEvent() {\n      var _this2 = this;\n      ['touchstart', 'click'].forEach(function (userEvent) {\n        _this2.menuMobile.addEventListener(userEvent, _this2.startMobile);\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.menuMobile && this.menuList) {\n        this.addEvent();\n      }\n      return this;\n    }\n  }]);\n  return MenuMobile;\n}();\n\n\n//# sourceURL=webpack://landingpagejs-4/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar Modal = /*#__PURE__*/function () {\n  function Modal(openModal, closeModal, modalContainer) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Modal);\n    this.openModal = document.querySelector(openModal);\n    this.closedModal = document.querySelector(closeModal);\n    this.modalContainer = document.querySelector(modalContainer);\n    this.startModal = this.startModal.bind(this);\n    this.eventContainer = this.eventContainer.bind(this);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Modal, [{\n    key: \"startModal\",\n    value: function startModal(event) {\n      event.preventDefault();\n      this.modalContainer.classList.toggle('active');\n    }\n  }, {\n    key: \"eventContainer\",\n    value: function eventContainer(event) {\n      event.preventDefault();\n      if (event.target === this.modalContainer) {\n        this.startModal(event);\n      }\n    }\n  }, {\n    key: \"addEvent\",\n    value: function addEvent() {\n      this.openModal.addEventListener('click', this.startModal);\n      this.closedModal.addEventListener('click', this.startModal);\n      this.modalContainer.addEventListener('click', this.eventContainer);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.openModal && this.closedModal && this.eventContainer) {\n        this.addEvent();\n      }\n      return this;\n    }\n  }]);\n  return Modal;\n}();\n\n\n//# sourceURL=webpack://landingpagejs-4/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outside.js":
/*!*******************************!*\
  !*** ./js/modules/outside.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\n  var html = document.documentElement;\n  var outside = 'data-outside';\n  function handleOutside(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      events.forEach(function (userEvent) {\n        return html.removeEventListener(userEvent, handleOutside);\n      });\n      callback();\n    }\n  }\n  if (!element.hasAttribute(outside)) {\n    events.forEach(function (userEvent) {\n      setTimeout(function () {\n        return html.addEventListener(userEvent, handleOutside);\n      });\n    });\n    element.setAttribute(outside, '');\n  }\n}\n\n//# sourceURL=webpack://landingpagejs-4/./js/modules/outside.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _classCallCheck)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n//# sourceURL=webpack://landingpagejs-4/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _createClass)\n/* harmony export */ });\n/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ \"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js\");\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(descriptor.key), descriptor);\n  }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  Object.defineProperty(Constructor, \"prototype\", {\n    writable: false\n  });\n  return Constructor;\n}\n\n//# sourceURL=webpack://landingpagejs-4/./node_modules/@babel/runtime/helpers/esm/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toPrimitive)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n\nfunction _toPrimitive(input, hint) {\n  if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(input) !== \"object\" || input === null) return input;\n  var prim = input[Symbol.toPrimitive];\n  if (prim !== undefined) {\n    var res = prim.call(input, hint || \"default\");\n    if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(res) !== \"object\") return res;\n    throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n  }\n  return (hint === \"string\" ? String : Number)(input);\n}\n\n//# sourceURL=webpack://landingpagejs-4/./node_modules/@babel/runtime/helpers/esm/toPrimitive.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toPropertyKey)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ \"./node_modules/@babel/runtime/helpers/esm/toPrimitive.js\");\n\n\nfunction _toPropertyKey(arg) {\n  var key = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arg, \"string\");\n  return (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(key) === \"symbol\" ? key : String(key);\n}\n\n//# sourceURL=webpack://landingpagejs-4/./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, _typeof(obj);\n}\n\n//# sourceURL=webpack://landingpagejs-4/./node_modules/@babel/runtime/helpers/esm/typeof.js?");

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