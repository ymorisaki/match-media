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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/scss/main.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/sass-loader/dist/cjs.js??ref--5-2!./src/scss/main.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n/*!\n * ress.css • v1.2.2\n * MIT License\n * github.com/filipelinhares/ress\n */\nhtml {\n  box-sizing: border-box;\n  overflow-y: scroll;\n  /* All browsers without overlaying scrollbars */\n  -webkit-text-size-adjust: 100%;\n  /* iOS 8+ */ }\n\n*,\n::before,\n::after {\n  background-repeat: no-repeat;\n  box-sizing: inherit; }\n\n::before,\n::after {\n  text-decoration: inherit;\n  vertical-align: inherit; }\n\n* {\n  padding: 0;\n  margin: 0; }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\nhr {\n  overflow: visible; }\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\nsummary {\n  display: list-item; }\n\nsmall {\n  font-size: 80%; }\n\n[hidden],\ntemplate {\n  display: none; }\n\nabbr[title] {\n  border-bottom: 1px dotted;\n  text-decoration: none; }\n\na {\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects; }\n\na:active,\na:hover {\n  outline-width: 0; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace; }\n\nb,\nstrong {\n  font-weight: bolder; }\n\ndfn {\n  font-style: italic; }\n\nmark {\n  background-color: #ff0;\n  color: #000; }\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\ninput {\n  border-radius: 0; }\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"],\n[role=\"button\"] {\n  cursor: pointer; }\n\n[disabled] {\n  cursor: default; }\n\n[type=\"number\"] {\n  width: auto; }\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; }\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\ntextarea {\n  overflow: auto;\n  resize: vertical; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font: inherit; }\n\noptgroup {\n  font-weight: bold; }\n\nbutton {\n  overflow: visible; }\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: 0;\n  padding: 0; }\n\nbutton:-moz-focusring,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  outline: 1px dotted ButtonText; }\n\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\ninput,\nselect,\ntextarea {\n  background-color: transparent;\n  border-style: none;\n  color: inherit; }\n\nselect {\n  -moz-appearance: none;\n  -webkit-appearance: none; }\n\nselect::-ms-expand {\n  display: none; }\n\nselect::-ms-value {\n  color: currentColor; }\n\nlegend {\n  border: 0;\n  color: inherit;\n  display: table;\n  max-width: 100%;\n  white-space: normal; }\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  font: inherit; }\n\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  outline-offset: -2px; }\n\nimg {\n  border-style: none; }\n\nprogress {\n  vertical-align: baseline; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; }\n\n@media screen {\n  [hidden~=\"screen\"] {\n    display: inherit; }\n  [hidden~=\"screen\"]:not(:active):not(:focus):not(:target) {\n    position: absolute !important;\n    clip: rect(0 0 0 0) !important; } }\n\n[aria-busy=\"true\"] {\n  cursor: progress; }\n\n[aria-controls] {\n  cursor: pointer; }\n\n[aria-disabled] {\n  cursor: default; }\n\n::-moz-selection {\n  background-color: #b3d4fc;\n  color: #000;\n  text-shadow: none; }\n\n::selection {\n  background-color: #b3d4fc;\n  color: #000;\n  text-shadow: none; }\n\nbody {\n  font-size: 16px;\n  font-family: Verdana; }\n  body.is-narrow {\n    background-color: mediumturquoise; }\n\ntable {\n  width: 540px;\n  margin: 20px auto;\n  border-collapse: collapse; }\n  table th, table td {\n    width: 180px;\n    box-sizing: border-box;\n    border: 1px solid #555;\n    padding: 20px; }\n  table th {\n    cursor: pointer; }\n  table tbody tr:nth-child(odd) {\n    background: #f8f8f8; }\n\n.score {\n  text-align: right; }\n\nth:after {\n  content: '\\f0dc';\n  font-family: FontAwesome;\n  font-size: 12px;\n  color: #ccc;\n  float: right;\n  padding-top: 4px;\n  font-weight: nomal; }\n\nth.asc:after {\n  content: '\\f0de';\n  font-family: FontAwesome;\n  color: #000; }\n\nth.desc:after {\n  content: '\\f0dd';\n  font-family: FontAwesome;\n  color: #000; }\n", "",{"version":3,"sources":["main.scss","/Users/yuji/Desktop/work/match-media/src/scss/core/_ress.scss","/Users/yuji/Desktop/work/match-media/src/scss/core/_base.scss"],"names":[],"mappings":"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","file":"main.scss","sourcesContent":["@charset \"UTF-8\";\n/*!\n * ress.css • v1.2.2\n * MIT License\n * github.com/filipelinhares/ress\n */\nhtml {\n  box-sizing: border-box;\n  overflow-y: scroll;\n  /* All browsers without overlaying scrollbars */\n  -webkit-text-size-adjust: 100%;\n  /* iOS 8+ */ }\n\n*,\n::before,\n::after {\n  background-repeat: no-repeat;\n  box-sizing: inherit; }\n\n::before,\n::after {\n  text-decoration: inherit;\n  vertical-align: inherit; }\n\n* {\n  padding: 0;\n  margin: 0; }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\nhr {\n  overflow: visible; }\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\nsummary {\n  display: list-item; }\n\nsmall {\n  font-size: 80%; }\n\n[hidden],\ntemplate {\n  display: none; }\n\nabbr[title] {\n  border-bottom: 1px dotted;\n  text-decoration: none; }\n\na {\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects; }\n\na:active,\na:hover {\n  outline-width: 0; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace; }\n\nb,\nstrong {\n  font-weight: bolder; }\n\ndfn {\n  font-style: italic; }\n\nmark {\n  background-color: #ff0;\n  color: #000; }\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\ninput {\n  border-radius: 0; }\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"],\n[role=\"button\"] {\n  cursor: pointer; }\n\n[disabled] {\n  cursor: default; }\n\n[type=\"number\"] {\n  width: auto; }\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; }\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\ntextarea {\n  overflow: auto;\n  resize: vertical; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font: inherit; }\n\noptgroup {\n  font-weight: bold; }\n\nbutton {\n  overflow: visible; }\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: 0;\n  padding: 0; }\n\nbutton:-moz-focusring,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  outline: 1px dotted ButtonText; }\n\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\ninput,\nselect,\ntextarea {\n  background-color: transparent;\n  border-style: none;\n  color: inherit; }\n\nselect {\n  -moz-appearance: none;\n  -webkit-appearance: none; }\n\nselect::-ms-expand {\n  display: none; }\n\nselect::-ms-value {\n  color: currentColor; }\n\nlegend {\n  border: 0;\n  color: inherit;\n  display: table;\n  max-width: 100%;\n  white-space: normal; }\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  font: inherit; }\n\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  outline-offset: -2px; }\n\nimg {\n  border-style: none; }\n\nprogress {\n  vertical-align: baseline; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; }\n\n@media screen {\n  [hidden~=\"screen\"] {\n    display: inherit; }\n  [hidden~=\"screen\"]:not(:active):not(:focus):not(:target) {\n    position: absolute !important;\n    clip: rect(0 0 0 0) !important; } }\n\n[aria-busy=\"true\"] {\n  cursor: progress; }\n\n[aria-controls] {\n  cursor: pointer; }\n\n[aria-disabled] {\n  cursor: default; }\n\n::-moz-selection {\n  background-color: #b3d4fc;\n  color: #000;\n  text-shadow: none; }\n\n::selection {\n  background-color: #b3d4fc;\n  color: #000;\n  text-shadow: none; }\n\nbody {\n  font-size: 16px;\n  font-family: Verdana; }\n  body.is-narrow {\n    background-color: mediumturquoise; }\n\ntable {\n  width: 540px;\n  margin: 20px auto;\n  border-collapse: collapse; }\n  table th, table td {\n    width: 180px;\n    box-sizing: border-box;\n    border: 1px solid #555;\n    padding: 20px; }\n  table th {\n    cursor: pointer; }\n  table tbody tr:nth-child(odd) {\n    background: #f8f8f8; }\n\n.score {\n  text-align: right; }\n\nth:after {\n  content: '\\f0dc';\n  font-family: FontAwesome;\n  font-size: 12px;\n  color: #ccc;\n  float: right;\n  padding-top: 4px;\n  font-weight: nomal; }\n\nth.asc:after {\n  content: '\\f0de';\n  font-family: FontAwesome;\n  color: #000; }\n\nth.desc:after {\n  content: '\\f0dd';\n  font-family: FontAwesome;\n  color: #000; }\n","/*!\n * ress.css • v1.2.2\n * MIT License\n * github.com/filipelinhares/ress\n */\n\nhtml {\n  box-sizing: border-box;\n  overflow-y: scroll;\n  /* All browsers without overlaying scrollbars */\n  -webkit-text-size-adjust: 100%;\n  /* iOS 8+ */\n}\n\n*,\n::before,\n::after {\n  background-repeat: no-repeat;\n  box-sizing: inherit;\n}\n\n::before,\n::after {\n  text-decoration: inherit;\n  vertical-align: inherit;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n}\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\nhr {\n  overflow: visible;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\nsummary {\n  display: list-item;\n}\n\nsmall {\n  font-size: 80%;\n}\n\n[hidden],\ntemplate {\n  display: none;\n}\n\nabbr[title] {\n  border-bottom: 1px dotted;\n  text-decoration: none;\n}\n\na {\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects;\n}\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n}\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\ndfn {\n  font-style: italic;\n}\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n\ninput {\n  border-radius: 0;\n}\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"],\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n[disabled] {\n  cursor: default;\n}\n\n[type=\"number\"] {\n  width: auto;\n}\n\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n}\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\ntextarea {\n  overflow: auto;\n  resize: vertical;\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font: inherit;\n}\n\noptgroup {\n  font-weight: bold;\n}\n\nbutton {\n  overflow: visible;\n}\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: 0;\n  padding: 0;\n}\n\nbutton:-moz-focusring,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  outline: 1px dotted ButtonText;\n}\n\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\nbutton,\nselect {\n  text-transform: none;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n  background-color: transparent;\n  border-style: none;\n  color: inherit;\n}\n\nselect {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n}\n\nselect::-ms-expand {\n  display: none;\n}\n\nselect::-ms-value {\n  color: currentColor;\n}\n\nlegend {\n  border: 0;\n  color: inherit;\n  display: table;\n  max-width: 100%;\n  white-space: normal;\n}\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  font: inherit;\n}\n\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  outline-offset: -2px;\n}\n\n\nimg {\n  border-style: none;\n}\n\nprogress {\n  vertical-align: baseline;\n}\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n}\n\n\n@media screen {\n  [hidden~=\"screen\"] {\n    display: inherit;\n  }\n\n  [hidden~=\"screen\"]:not(:active):not(:focus):not(:target) {\n    position: absolute !important;\n    clip: rect(0 0 0 0) !important;\n  }\n}\n\n[aria-busy=\"true\"] {\n  cursor: progress;\n}\n\n[aria-controls] {\n  cursor: pointer;\n}\n\n[aria-disabled] {\n  cursor: default;\n}\n\n\n\n::-moz-selection {\n  background-color: #b3d4fc;\n  color: #000;\n  text-shadow: none;\n}\n\n::selection {\n  background-color: #b3d4fc;\n  color: #000;\n  text-shadow: none;\n}","@charset \"UTF-8\";\nbody {\n    font-size: 16px;\n    font-family: Verdana;\n    &.is-narrow {\n        background-color: mediumturquoise;\n    }\n}\n\ntable {\n    width: 540px;\n    margin: 20px auto;\n    border-collapse: collapse;\n\n    th, td {\n        width: 180px;\n        box-sizing: border-box;\n        border: 1px solid #555;\n        padding: 20px;\n    }\n\n    th {\n        cursor: pointer;\n    }\n\n    tbody tr:nth-child(odd) {\n        background: #f8f8f8;\n    }\n}\n\n.score {\n    text-align: right;\n}\n\nth:after {\n    content: '\\f0dc';\n    font-family: FontAwesome;\n    font-size: 12px;\n    color: #ccc;\n    float: right;\n    padding-top: 4px;\n    font-weight: nomal;\n}\nth.asc:after {\n    content: '\\f0de';\n    font-family: FontAwesome;\n    color: #000;\n}\nth.desc:after {\n    content: '\\f0dd';\n    font-family: FontAwesome;\n    color: #000;\n}\n"]}]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */
module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  } // blank or null?


  if (!css || typeof css !== "string") {
    return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/"); // convert each url(...)

  /*
  This regular expression is just a way to recursively match brackets within
  a string.
  	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
     (  = Start a capturing group
       (?:  = Start a non-capturing group
           [^)(]  = Match anything that isn't a parentheses
           |  = OR
           \(  = Match a start parentheses
               (?:  = Start another non-capturing groups
                   [^)(]+  = Match anything that isn't a parentheses
                   |  = OR
                   \(  = Match a start parentheses
                       [^)(]*  = Match anything that isn't a parentheses
                   \)  = Match a end parentheses
               )  = End Group
               *\) = Match anything and then a close parens
           )  = Close non-capturing group
           *  = Match anything
        )  = Close capturing group
   \)  = Match a close parens
  	 /gi  = Get all matches, not the first.  Be case insensitive.
   */

  var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
    // strip quotes (if they exist)
    var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
      return $1;
    }).replace(/^'(.*)'$/, function (o, $1) {
      return $1;
    }); // already a full url? no change

    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
      return fullMatch;
    } // convert the url to a full url


    var newUrl;

    if (unquotedOrigUrl.indexOf("//") === 0) {
      //TODO: should we add protocol?
      newUrl = unquotedOrigUrl;
    } else if (unquotedOrigUrl.indexOf("/") === 0) {
      // path should be relative to the base url
      newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
    } else {
      // path should be relative to current directory
      newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
    } // send back the fixed url(...)


    return "url(" + JSON.stringify(newUrl) + ")";
  }); // send back the fixed css

  return fixedCss;
};

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



(function () {
  var MatchMedia =
  /*#__PURE__*/
  function () {
    function MatchMedia(root, options) {
      var _this = this;

      _classCallCheck(this, MatchMedia);

      var o = {
        breakPoint: 767
      };
      Object.assign(o, options);
      this.root = root;
      this.text = document.querySelector('.text');
      this.breakPoint = window.matchMedia('(max-width: ' + o.breakPoint + 'px)');
      this.breakPoint.addListener(function () {
        _this.checkBreakPoint(_this.breakPoint);
      });
      this.init();
    }

    _createClass(MatchMedia, [{
      key: "init",
      value: function init() {
        this.checkBreakPoint(this.breakPoint);
      }
    }, {
      key: "checkBreakPoint",
      value: function checkBreakPoint(breakPoint) {
        if (breakPoint.matches) {
          this.root.classList.add('is-narrow');
          this.text.innerHTML = 'Narrow';
          return;
        }

        this.root.classList.remove('is-narrow');
        this.text.innerHTML = 'Wide';
      }
    }]);

    return MatchMedia;
  }();

  new MatchMedia(document.querySelector('body'));
})();

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../node_modules/sass-loader/dist/cjs.js??ref--5-2!./main.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/scss/main.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });