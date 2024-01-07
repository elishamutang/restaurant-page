/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
}

/* Declare CSS variables */
:root {
    --header: #48694c;
    --content: #c9ffe2;
    --tabBar: rgb(187, 37, 37);
}

body {
    box-sizing: border-box;
    height: 100vh;
    background-color: var(--content);
}

/* Main container div */
#mainContainer {
    width: 100vw;
    height: 100%;
    background-color: var(--content);

    display: grid;
    grid-template-rows: 150px 1fr;
}

/* Header div */
#header {
    width: 100vw;
    height: 150px;
    background-color: var(--header);
    position: fixed;
    grid-row: 1 / 2;

    display: grid;
    grid-template-rows: 0.7fr 0.3fr;
}

/* Logo div */
#logoDiv {
    width: inherit;
    background-color: var(--header);
    grid-row: 1 / 2;

    font-family: Arial, Helvetica, sans-serif;
    font-size: 50px;
    font-weight: bold;
    color: white;
    letter-spacing: 3px;

    display: flex;
    justify-content: center;
    align-items: center;
}

#companyName > a {
    cursor: pointer
}

/* Tab bar div */
#tabDiv {
    width: inherit;
    background-color: var(--tabBar);
    grid-row: 2 / 3;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.menu-item {
    /* border: 1px solid black; */
    color: white;
}

.menu-item > a {
    cursor: pointer;
    transition: 0.2s;
}

.menu-item > a:hover {
    color: var(--header);
}

/* Main content div */

/* Image slider */
#sliderWrapper {
    width: inherit;
    grid-row: 2 / 3;
    overflow: hidden;
}

#wrapper {
    width: 100vw;
    height: 100%;
    display: flex;
    animation: slide 16s infinite;
}

@keyframes slide {
    0% {
        transform: translateX(0);
    }

    25% {
        transform: translateX(0);
    }

    35% {
        transform: translateX(-100%);
    }

    45% {
        transform: translateX(-100%);
    }

    55% {
        transform: translateX(-200%);
    }

    75% {
        transform: translateX(-200%);
    }

    85% {
        transform: translateX(-300%);
    }

    90% {
        transform: translateX(-300%);
    }

    95% {
        transform: translateX(-300%);
    }

    100% {
        transform: translateX(0);
    }
}

#wrapper > img {
    width: 100vw;
    height: 100%;
    flex: 0;
}

/* Old image div */`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA,0BAA0B;AAC1B;IACI,iBAAiB;IACjB,kBAAkB;IAClB,0BAA0B;AAC9B;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,gCAAgC;AACpC;;AAEA,uBAAuB;AACvB;IACI,YAAY;IACZ,YAAY;IACZ,gCAAgC;;IAEhC,aAAa;IACb,6BAA6B;AACjC;;AAEA,eAAe;AACf;IACI,YAAY;IACZ,aAAa;IACb,+BAA+B;IAC/B,eAAe;IACf,eAAe;;IAEf,aAAa;IACb,+BAA+B;AACnC;;AAEA,aAAa;AACb;IACI,cAAc;IACd,+BAA+B;IAC/B,eAAe;;IAEf,yCAAyC;IACzC,eAAe;IACf,iBAAiB;IACjB,YAAY;IACZ,mBAAmB;;IAEnB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI;AACJ;;AAEA,gBAAgB;AAChB;IACI,cAAc;IACd,+BAA+B;IAC/B,eAAe;;IAEf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,6BAA6B;IAC7B,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,oBAAoB;AACxB;;AAEA,qBAAqB;;AAErB,iBAAiB;AACjB;IACI,cAAc;IACd,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI;QACI,wBAAwB;IAC5B;;IAEA;QACI,wBAAwB;IAC5B;;IAEA;QACI,4BAA4B;IAChC;;IAEA;QACI,4BAA4B;IAChC;;IAEA;QACI,4BAA4B;IAChC;;IAEA;QACI,4BAA4B;IAChC;;IAEA;QACI,4BAA4B;IAChC;;IAEA;QACI,4BAA4B;IAChC;;IAEA;QACI,4BAA4B;IAChC;;IAEA;QACI,wBAAwB;IAC5B;AACJ;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,OAAO;AACX;;AAEA,kBAAkB","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n\n/* Declare CSS variables */\n:root {\n    --header: #48694c;\n    --content: #c9ffe2;\n    --tabBar: rgb(187, 37, 37);\n}\n\nbody {\n    box-sizing: border-box;\n    height: 100vh;\n    background-color: var(--content);\n}\n\n/* Main container div */\n#mainContainer {\n    width: 100vw;\n    height: 100%;\n    background-color: var(--content);\n\n    display: grid;\n    grid-template-rows: 150px 1fr;\n}\n\n/* Header div */\n#header {\n    width: 100vw;\n    height: 150px;\n    background-color: var(--header);\n    position: fixed;\n    grid-row: 1 / 2;\n\n    display: grid;\n    grid-template-rows: 0.7fr 0.3fr;\n}\n\n/* Logo div */\n#logoDiv {\n    width: inherit;\n    background-color: var(--header);\n    grid-row: 1 / 2;\n\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 50px;\n    font-weight: bold;\n    color: white;\n    letter-spacing: 3px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#companyName > a {\n    cursor: pointer\n}\n\n/* Tab bar div */\n#tabDiv {\n    width: inherit;\n    background-color: var(--tabBar);\n    grid-row: 2 / 3;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n\n.menu-item {\n    /* border: 1px solid black; */\n    color: white;\n}\n\n.menu-item > a {\n    cursor: pointer;\n    transition: 0.2s;\n}\n\n.menu-item > a:hover {\n    color: var(--header);\n}\n\n/* Main content div */\n\n/* Image slider */\n#sliderWrapper {\n    width: inherit;\n    grid-row: 2 / 3;\n    overflow: hidden;\n}\n\n#wrapper {\n    width: 100vw;\n    height: 100%;\n    display: flex;\n    animation: slide 16s infinite;\n}\n\n@keyframes slide {\n    0% {\n        transform: translateX(0);\n    }\n\n    25% {\n        transform: translateX(0);\n    }\n\n    35% {\n        transform: translateX(-100%);\n    }\n\n    45% {\n        transform: translateX(-100%);\n    }\n\n    55% {\n        transform: translateX(-200%);\n    }\n\n    75% {\n        transform: translateX(-200%);\n    }\n\n    85% {\n        transform: translateX(-300%);\n    }\n\n    90% {\n        transform: translateX(-300%);\n    }\n\n    95% {\n        transform: translateX(-300%);\n    }\n\n    100% {\n        transform: translateX(0);\n    }\n}\n\n#wrapper > img {\n    width: 100vw;\n    height: 100%;\n    flex: 0;\n}\n\n/* Old image div */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   header: () => (/* binding */ header),
/* harmony export */   tabDiv: () => (/* binding */ tabDiv)
/* harmony export */ });
// Module for generating and appending header to webpage.

// Main header
const header = document.createElement("div");
header.className = "header";
header.id = "header";

// Logo div
const logoDiv = document.createElement('div');
logoDiv.className = 'header';
logoDiv.id = 'logoDiv';

header.append(logoDiv);

// Company name
const companyName = document.createElement('div');
companyName.id = 'companyName';

const companyNameLink = document.createElement('a');
companyNameLink.textContent = 'Oriental Kopi';

companyName.append(companyNameLink);
logoDiv.append(companyName);

// Tabs on header div
const tabDiv = document.createElement('div');
tabDiv.className = 'header';
tabDiv.id = 'tabDiv';

header.append(tabDiv);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homePage: () => (/* binding */ homePage)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _assets_oriental_1_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/oriental_1.webp */ "./src/assets/oriental_1.webp");
/* harmony import */ var _assets_oriental_2_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/oriental_2.webp */ "./src/assets/oriental_2.webp");
/* harmony import */ var _assets_oriental_3_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/oriental_3.webp */ "./src/assets/oriental_3.webp");
/* harmony import */ var _assets_oriental_4_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/oriental_4.webp */ "./src/assets/oriental_4.webp");
/* harmony import */ var _assets_oriental_5_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/oriental_5.webp */ "./src/assets/oriental_5.webp");
/* harmony import */ var _assets_owner_1_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/owner_1.jpg */ "./src/assets/owner_1.jpg");
/* harmony import */ var _assets_owner_2_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/owner_2.jpg */ "./src/assets/owner_2.jpg");
// Homepage (or initial load-up page)









function homePage() {

    // Create sliderWrapper div
    const sliderWrapper = document.createElement('div');
    sliderWrapper.id = 'sliderWrapper';

    // Create wrapper to contain all the images
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper';

    // Append wrapper to sliderWrapper
    sliderWrapper.append(wrapper);

    // Append to mainContainer div
    _index_js__WEBPACK_IMPORTED_MODULE_0__.mainContainer.append(sliderWrapper);

    // Generate image tags
    const images = generateImg();

    // Store images in array
    const imageData = [_assets_oriental_1_webp__WEBPACK_IMPORTED_MODULE_1__, _assets_oriental_2_webp__WEBPACK_IMPORTED_MODULE_2__, _assets_oriental_3_webp__WEBPACK_IMPORTED_MODULE_3__, _assets_oriental_4_webp__WEBPACK_IMPORTED_MODULE_4__, _assets_oriental_5_webp__WEBPACK_IMPORTED_MODULE_5__];

    // Link image source to each img tag.
    for(let i=0; i<5; i++) {
        images[i].src = imageData[i];
        wrapper.append(images[i]);
    }

    // Generate additional divs
    additionalDivs();

}

function generateImg() {

    let images = [];

    // In total, there are 5 images to show.
    for(let i=1; i < 6; i++) {

        const image = document.createElement('img');
        image.id = `image-${i}`;

        images.push(image);

    }

    return images;

}

function additionalDivs() {

    // Old owner picture(?)
    const oldImg = document.createElement('div');
    oldImg.id = 'oldImg';

    // Since there are 2 images, create a wrapper
    const oldImgWrapper = document.createElement('div');
    oldImgWrapper.id = 'oldImgWrapper';

    // Create img tags and append inside oldImgWrapper
    const ownerOneImg = document.createElement('img');
    ownerOneImg.src = _assets_owner_1_jpg__WEBPACK_IMPORTED_MODULE_6__;

    const ownerTwoImg = document.createElement('img');
    ownerTwoImg.src = _assets_owner_2_jpg__WEBPACK_IMPORTED_MODULE_7__;

    oldImgWrapper.append(ownerOneImg);
    oldImgWrapper.append(ownerTwoImg);

    oldImg.append(oldImgWrapper);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.mainContainer.append(oldImg);

}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mainContainer: () => (/* binding */ mainContainer)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _menuBar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuBar.js */ "./src/menuBar.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
// This module is the main module containing of the tab switching logic.



// import { pictureDiv } from './branchAddress.js';



// Target main container div
const mainContainer = document.querySelector('#mainContainer');

// Append different sections to main web page.
mainContainer.append(_header_js__WEBPACK_IMPORTED_MODULE_1__.header);
// mainContainer.append(pictureDiv);

// Append menu bar items to menu bar.
_menuBar_js__WEBPACK_IMPORTED_MODULE_2__.menuBarDivs.forEach((div) => {
    _header_js__WEBPACK_IMPORTED_MODULE_1__.tabDiv.append(div);
})

// Initial home page load-up
;(0,_home_js__WEBPACK_IMPORTED_MODULE_3__.homePage)();

/***/ }),

/***/ "./src/menuBar.js":
/*!************************!*\
  !*** ./src/menuBar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuBarDivs: () => (/* binding */ menuBarDivs)
/* harmony export */ });
// Menu bar for webpage.

const menuBarItems = ['Reservation for Egg Tart', 'Merchandise', 'Branch Address', 'Join Member', 'Contact Us' ];
const menuBarDivs = [];

for(let i = 0; i < 5; i++) {
    const item = document.createElement('div');
    item.dataset.index = `${i}`;
    item.className = 'menu-item';
    menuBarDivs.push(item);

    const itemLink = document.createElement('a');
    itemLink.textContent = `${menuBarItems[i]}`;
    menuBarDivs[i].append(itemLink);
}


/***/ }),

/***/ "./src/assets/oriental_1.webp":
/*!************************************!*\
  !*** ./src/assets/oriental_1.webp ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "oriental_1.webp";

/***/ }),

/***/ "./src/assets/oriental_2.webp":
/*!************************************!*\
  !*** ./src/assets/oriental_2.webp ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "oriental_2.webp";

/***/ }),

/***/ "./src/assets/oriental_3.webp":
/*!************************************!*\
  !*** ./src/assets/oriental_3.webp ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "oriental_3.webp";

/***/ }),

/***/ "./src/assets/oriental_4.webp":
/*!************************************!*\
  !*** ./src/assets/oriental_4.webp ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "oriental_4.webp";

/***/ }),

/***/ "./src/assets/oriental_5.webp":
/*!************************************!*\
  !*** ./src/assets/oriental_5.webp ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "oriental_5.webp";

/***/ }),

/***/ "./src/assets/owner_1.jpg":
/*!********************************!*\
  !*** ./src/assets/owner_1.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "owner_1.jpg";

/***/ }),

/***/ "./src/assets/owner_2.jpg":
/*!********************************!*\
  !*** ./src/assets/owner_2.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "owner_2.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map