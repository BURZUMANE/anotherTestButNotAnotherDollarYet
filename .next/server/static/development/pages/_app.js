module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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

/***/ "./mobx/newsContext.js":
/*!*****************************!*\
  !*** ./mobx/newsContext.js ***!
  \*****************************/
/*! exports provided: NewsProvider, useNewsStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NewsProvider\", function() { return NewsProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useNewsStore\", function() { return useNewsStore; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ \"./mobx/store.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ \"mobx-react\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/timurzakirov/Desktop/stupido/anotherTestButNotAnotherDollarYet/mobx/newsContext.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst NewsContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])(null);\nconst NewsProvider = ({\n  children\n}) => {\n  const newsStore = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__[\"useLocalStore\"])(_store__WEBPACK_IMPORTED_MODULE_1__[\"createNewsStore\"]);\n  return __jsx(NewsContext.Provider, {\n    value: newsStore,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, children);\n};\nconst useNewsStore = () => Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(NewsContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2J4L25ld3NDb250ZXh0LmpzP2NiOTYiXSwibmFtZXMiOlsiTmV3c0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiTmV3c1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJuZXdzU3RvcmUiLCJ1c2VMb2NhbFN0b3JlIiwiY3JlYXRlTmV3c1N0b3JlIiwidXNlTmV3c1N0b3JlIiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFdBQVcsR0FBR0MsMkRBQWEsQ0FBQyxJQUFELENBQWpDO0FBRU8sTUFBTUMsWUFBWSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWtCO0FBQzVDLFFBQU1DLFNBQVMsR0FBR0MsZ0VBQWEsQ0FBQ0Msc0RBQUQsQ0FBL0I7QUFDQSxTQUNFLE1BQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFRixTQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXlDRCxRQUF6QyxDQURGO0FBR0QsQ0FMTTtBQVFBLE1BQU1JLFlBQVksR0FBRyxNQUFNQyx3REFBVSxDQUFDUixXQUFELENBQXJDIiwiZmlsZSI6Ii4vbW9ieC9uZXdzQ29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlTmV3c1N0b3JlIH0gZnJvbSBcIi4vc3RvcmVcIjtcbmltcG9ydCB7IHVzZUxvY2FsU3RvcmUgfSBmcm9tICdtb2J4LXJlYWN0J1xuXG5jb25zdCBOZXdzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbClcblxuZXhwb3J0IGNvbnN0IE5ld3NQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgbmV3c1N0b3JlID0gdXNlTG9jYWxTdG9yZShjcmVhdGVOZXdzU3RvcmUpO1xuICByZXR1cm4gKFxuICAgIDxOZXdzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17bmV3c1N0b3JlfT57Y2hpbGRyZW59PC9OZXdzQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cblxuZXhwb3J0IGNvbnN0IHVzZU5ld3NTdG9yZSA9ICgpID0+IHVzZUNvbnRleHQoTmV3c0NvbnRleHQpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./mobx/newsContext.js\n");

/***/ }),

/***/ "./mobx/store.js":
/*!***********************!*\
  !*** ./mobx/store.js ***!
  \***********************/
/*! exports provided: createNewsStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createNewsStore\", function() { return createNewsStore; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst createNewsStore = () => {\n  return {\n    news: [{\n      title: \"asdasas\"\n    }],\n\n    addBug(item) {\n      this.news.push(item);\n    },\n\n    getNews(news) {\n      const newsArr = Object.values(news);\n      this.news = [...newsArr];\n    },\n\n    get bugsCount() {\n      return store.bugs.length;\n    }\n\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2J4L3N0b3JlLmpzP2ZjODYiXSwibmFtZXMiOlsiY3JlYXRlTmV3c1N0b3JlIiwibmV3cyIsInRpdGxlIiwiYWRkQnVnIiwiaXRlbSIsInB1c2giLCJnZXROZXdzIiwibmV3c0FyciIsIk9iamVjdCIsInZhbHVlcyIsImJ1Z3NDb3VudCIsInN0b3JlIiwiYnVncyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLE1BQU1BLGVBQWUsR0FBSSxNQUFNO0FBRXBDLFNBQU87QUFFTEMsUUFBSSxFQUFFLENBQUM7QUFBQ0MsV0FBSyxFQUFDO0FBQVAsS0FBRCxDQUZEOztBQUdMQyxVQUFNLENBQUNDLElBQUQsRUFBTztBQUNYLFdBQUtILElBQUwsQ0FBVUksSUFBVixDQUFlRCxJQUFmO0FBQ0QsS0FMSTs7QUFPTEUsV0FBTyxDQUFDTCxJQUFELEVBQU87QUFDWixZQUFNTSxPQUFPLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjUixJQUFkLENBQWhCO0FBQ0EsV0FBS0EsSUFBTCxHQUFZLENBQUMsR0FBR00sT0FBSixDQUFaO0FBQ0QsS0FWSTs7QUFXTCxRQUFJRyxTQUFKLEdBQWdCO0FBQ2QsYUFBT0MsS0FBSyxDQUFDQyxJQUFOLENBQVdDLE1BQWxCO0FBQ0Q7O0FBYkksR0FBUDtBQWVELENBakJNIiwiZmlsZSI6Ii4vbW9ieC9zdG9yZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVOZXdzU3RvcmUgPSAgKCkgPT4ge1xuICBcbiAgcmV0dXJuIHtcblxuICAgIG5ld3M6IFt7dGl0bGU6XCJhc2Rhc2FzXCJ9XSxcbiAgICBhZGRCdWcoaXRlbSkge1xuICAgICAgdGhpcy5uZXdzLnB1c2goaXRlbSk7XG4gICAgfSxcblxuICAgIGdldE5ld3MobmV3cykge1xuICAgICAgY29uc3QgbmV3c0FyciA9IE9iamVjdC52YWx1ZXMobmV3cylcbiAgICAgIHRoaXMubmV3cyA9IFsuLi5uZXdzQXJyXVxuICAgIH0sXG4gICAgZ2V0IGJ1Z3NDb3VudCgpIHtcbiAgICAgIHJldHVybiBzdG9yZS5idWdzLmxlbmd0aDtcbiAgICB9LFxuICB9O1xufTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./mobx/store.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ \"mobx-react\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mobx_newsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mobx/newsContext */ \"./mobx/newsContext.js\");\nvar _jsxFileName = \"/Users/timurzakirov/Desktop/stupido/anotherTestButNotAnotherDollarYet/pages/_app.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\nfunction App({\n  Component,\n  pageProps\n}) {\n  const store = Object(_mobx_newsContext__WEBPACK_IMPORTED_MODULE_3__[\"useNewsStore\"])(pageProps.initialState);\n  next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on(\"routeChangeComplete\", () => {\n    if (true) {\n      const els = document.querySelectorAll('link[href*=\"/_next/static/css/styles.chunk.css\"]');\n      const timestamp = new Date().valueOf();\n      els[0].href = \"/_next/static/css/styles.chunk.css?v=\" + timestamp;\n    }\n  });\n  return __jsx(mobx_react__WEBPACK_IMPORTED_MODULE_1__[\"Provider\"], {\n    store: _mobx_newsContext__WEBPACK_IMPORTED_MODULE_3__[\"useNewsStore\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  })));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiLCJ1c2VOZXdzU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJSb3V0ZXIiLCJldmVudHMiLCJvbiIsImVscyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInRpbWVzdGFtcCIsIkRhdGUiLCJ2YWx1ZU9mIiwiaHJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ2UsU0FBU0EsR0FBVCxDQUFhO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFiLEVBQXVDO0FBQ3BELFFBQU1DLEtBQUssR0FBR0Msc0VBQVksQ0FBQ0YsU0FBUyxDQUFDRyxZQUFYLENBQTFCO0FBQ0FDLG9EQUFNLENBQUNDLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixxQkFBakIsRUFBd0MsTUFBTTtBQUM1QyxjQUEyQztBQUN6QyxZQUFNQyxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FDVixrREFEVSxDQUFaO0FBR0EsWUFBTUMsU0FBUyxHQUFHLElBQUlDLElBQUosR0FBV0MsT0FBWCxFQUFsQjtBQUNBTCxTQUFHLENBQUMsQ0FBRCxDQUFILENBQU9NLElBQVAsR0FBYywwQ0FBMENILFNBQXhEO0FBQ0Q7QUFDRixHQVJEO0FBU0EsU0FDRSxNQUFDLG1EQUFEO0FBQVUsU0FBSyxFQUFFUiw4REFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsU0FBRCxlQUFlRixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixDQURGO0FBS0QiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdtb2J4LXJlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VOZXdzU3RvcmUgfSBmcm9tICcuLi9tb2J4L25ld3NDb250ZXh0J1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBzdG9yZSA9IHVzZU5ld3NTdG9yZShwYWdlUHJvcHMuaW5pdGlhbFN0YXRlKVxuICBSb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCAoKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgY29uc3QgZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgJ2xpbmtbaHJlZio9XCIvX25leHQvc3RhdGljL2Nzcy9zdHlsZXMuY2h1bmsuY3NzXCJdJyxcbiAgICAgICk7XG4gICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnZhbHVlT2YoKTtcbiAgICAgIGVsc1swXS5ocmVmID0gXCIvX25leHQvc3RhdGljL2Nzcy9zdHlsZXMuY2h1bmsuY3NzP3Y9XCIgKyB0aW1lc3RhbXA7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3VzZU5ld3NTdG9yZX0+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9Qcm92aWRlcj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-unfetch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIj9lYmI2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Imlzb21vcnBoaWMtdW5mZXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///isomorphic-unfetch\n");

/***/ }),

/***/ "mobx-react":
/*!*****************************!*\
  !*** external "mobx-react" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mobx-react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb2J4LXJlYWN0XCI/NWJjYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb2J4LXJlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9ieC1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mobx-react\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });