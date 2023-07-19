/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/img/timer/start_timer_hover.svg */ "./src/img/timer/start_timer_hover.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/img/timer/pause_hover.svg */ "./src/img/timer/pause_hover.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/img/timer/revert_hover.svg */ "./src/img/timer/revert_hover.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/img/bg/lodka.jpg */ "./src/img/bg/lodka.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.wheather {
  width: 250px;
  height: 180px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 40px;
}

.wheather__input {
  width: 130px;
  background-color: rgb(209, 209, 209);
  color: black;
  border: none;
  border-radius: 5px;
}

.wheather__button {
  background-color: grey;
  border-radius: 5px;
  cursor: pointer;
  font-family: Verdana;
  transition: 0.3s;
}

.wheather__button:hover {
  background-color: rgb(206, 206, 206);
}

.wheather__block {
  display: flex;
}

.wheather__image {
  opacity: 1;
}

.wheather__tempreture {
  color: white;
  opacity: 0.5;
  text-align: center;
  font-family: Verdana;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
  margin: 0;
  display: inline-block;
}

.wheather__celsius {
  opacity: 0.5;
}

.wheather__city {
  color: #FFF;
  font-family: Verdana;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 20px */
  margin: 0;
  padding: 0;
}

.realtime {
  width: 500px;
  height: 300px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 40px;
}

.realtime__time {
  color: white;
  font-family: Verdana;
  font-size: 8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  /* 128px */
}

.realtime__date {
  color: white;
  opacity: 0.5;
  font-family: Verdana;
  font-size: 3rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.currency {
  width: 250px;
  height: 120px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 40px;
  align-self: start;
  justify-self: end;
}

.currency__usd {
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  font-family: Verdana;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 20px */
}

.currency__eur {
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  font-family: Verdana;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 20px */
}

.links {
  width: 250px;
  height: 120px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 40px;
  align-self: end;
  justify-self: start;
}

.links__list {
  list-style: none;
  display: flex;
  gap: 12px;
  margin: 0;
  padding: 0;
}

.quots {
  width: 500px;
  height: 100px;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 40px;
  align-self: end;
}

.quots__text {
  color: white;
  text-align: center;
  font-family: Verdana;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  /* 20px */
  margin: 0;
  padding: 0;
}

.timer {
  width: 250px;
  height: 400px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 40px;
  align-self: end;
  justify-self: end;
}

.timer__mode {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  border: 3px solid rgba(255, 255, 255, 0.5);
}

.timer__work,
.timer__rest {
  color: rgba(255, 255, 255, 0.5);
  font-family: Verdana;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  /* 20px */
  margin: 0;
  padding: 0;
  margin: 0 auto;
}

.timer__line {
  position: absolute;
  top: -14px;
  left: 107px;
  width: 3px;
  height: 48px;
  background: rgba(255, 255, 255, 0.5);
}

.timer__work_active {
  color: white;
  font-weight: 700;
}

.timer__rest_active {
  color: white;
  font-weight: 700;
}

.timer__indication {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid #FF8A00;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.timer__time {
  color: #FFF;
  font-family: Verdana;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  /* 64px */
  margin: 0;
  padding: 0;
}

.timer__control {
  width: 200px;
  height: 50px;
}

.timer__list {
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
}

.timer__item {
  width: 24px;
  height: 24px;
}

.timer__btn {
  background-color: rgba(255, 255, 255, 0);
  color: black;
  border: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
  margin: 0;
  padding: 0;
  opacity: 0.3;
}

.timer__btn:hover {
  opacity: 0.5;
  transition: 0.3s;
}

.timer__btn:active {
  opacity: 1;
  transition: 0.2s;
}

.timer__btn_play::after {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

.timer__btn_pause::after {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

.timer__btn_revert::after {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

.page {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  min-height: 100%;
}

.page__body {
  min-height: 100%;
}

.content {
  min-height: 100vh;
  margin: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
}`, "",{"version":3,"sources":["webpack://./src/scss/wheather.scss","webpack://./src/scss/style.scss","webpack://./src/scss/realtime.scss","webpack://./src/scss/currency.scss","webpack://./src/scss/links.scss","webpack://./src/scss/quots.scss","webpack://./src/scss/timer.scss"],"names":[],"mappings":"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","sourcesContent":[".wheather {\r\n  width: 250px;\r\n  height: 180px;\r\n\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  flex-direction: column;\r\n  align-items: center;\r\n\r\n  background-color: rgba(0, 0, 0, 0.50);\r\n  border-radius: 40px;\r\n}\r\n.wheather__input {\r\n  width: 130px;\r\n  background-color: rgb(209, 209, 209);\r\n  color: black;\r\n  border: none;\r\n  border-radius: 5px;\r\n}\r\n.wheather__button {\r\n  background-color: grey;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  font-family: Verdana;\r\n  transition: 0.3s;\r\n}\r\n.wheather__button:hover {\r\n  background-color: rgb(206, 206, 206);\r\n}\r\n.wheather__block {\r\n  display: flex;\r\n\r\n}\r\n.wheather__image {\r\n  opacity: 1;\r\n}\r\n.wheather__tempreture {\r\n  color: white;\r\n  opacity: 0.5;\r\n  text-align: center;\r\n  font-family: Verdana;\r\n  font-size: 36px;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  line-height: 36px;\r\n\r\n  margin: 0;\r\n  display: inline-block;\r\n}\r\n.sign {\r\n}\r\n.wheather__celsius {\r\n  opacity: 0.5;\r\n}\r\n.wheather__city {\r\n  color: #FFF;\r\nfont-family: Verdana;\r\nfont-size: 20px;\r\nfont-style: normal;\r\nfont-weight: 700;\r\nline-height: 100%; /* 20px */\r\nmargin: 0;\r\npadding: 0;\r\n}","@import 'wheather', 'realtime', 'currency', 'links', 'quots', 'timer';\r\n\r\n.page {\r\n  background-image: url(/src/img/bg/lodka.jpg);\r\n  background-repeat: no-repeat;\r\n  background-size: 100% 100%;\r\n  min-height: 100%;\r\n}\r\n\r\n.page__body {\r\n  min-height: 100%;\r\n}\r\n\r\n.content {\r\n  min-height: 100vh;\r\n  margin: 40px;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  grid-template-rows: auto auto;\r\n}",".realtime {\r\n  width: 500px;\r\n  height: 300px;\r\n\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  flex-direction: column;\r\n  align-items: center;\r\n\r\n  background-color: rgba(0, 0, 0, 0.50);\r\n  border-radius: 40px;\r\n}\r\n.realtime__time {\r\n  color: white;\r\n  font-family: Verdana;\r\n  font-size: 8rem;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  line-height: 100%;\r\n  /* 128px */\r\n}\r\n\r\n.realtime__date {\r\n  color: white;\r\n  opacity: 0.5;\r\n  font-family: Verdana;\r\n  font-size: 3rem;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  line-height: normal;\r\n}",".currency {\r\n  width: 250px;\r\n  height: 120px;\r\n\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  flex-direction: column;\r\n  align-items: center;\r\n\r\n  background-color: rgba(0, 0, 0, 0.50);\r\n  border-radius: 40px;\r\n  align-self: start;\r\n  justify-self: end;\r\n}\r\n.currency__usd {\r\n  color: rgba(255, 255, 255, 0.50);\r\ntext-align: center;\r\nfont-family: Verdana;\r\nfont-size: 20px;\r\nfont-style: normal;\r\nfont-weight: 700;\r\nline-height: 100%; /* 20px */\r\n}\r\n.currency__eur {\r\n  color: rgba(255, 255, 255, 0.50);\r\ntext-align: center;\r\nfont-family: Verdana;\r\nfont-size: 20px;\r\nfont-style: normal;\r\nfont-weight: 700;\r\nline-height: 100%; /* 20px */\r\n}",".links {\r\n  width: 250px;\r\n  height: 120px;\r\n\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  flex-direction: row;\r\n  align-items: center;\r\n\r\n  background-color: rgba(0, 0, 0, 0.50);\r\n  border-radius: 40px;\r\n  align-self: end;\r\n  justify-self: start;\r\n}\r\n.links__list {\r\n  list-style: none;\r\n  display: flex;\r\n  gap: 12px;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.links__item {\r\n}\r\n.links__link {\r\n}",".quots {\r\n  width: 500px;\r\n  height: 100px;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n\r\n  background-color: rgba(0, 0, 0, 0.50);\r\n  border-radius: 40px;\r\n\r\n  align-self: end;\r\n}\r\n\r\n.quots__text {\r\n  color: white;\r\n  text-align: center;\r\n  font-family: Verdana;\r\n  font-size: 20px;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  line-height: 100%;\r\n  /* 20px */\r\n\r\n  margin: 0;\r\n  padding: 0;\r\n}",".timer {\r\n  width: 250px;\r\n  height: 400px;\r\n\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  flex-direction: column;\r\n  align-items: center;\r\n\r\n  background-color: rgba(0, 0, 0, 0.50);\r\n  border-radius: 40px;\r\n  align-self: end;\r\n  justify-self: end;\r\n}\r\n\r\n.timer__mode {\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 200px;\r\n  height: 50px;\r\n  border-radius: 10px;\r\n  border: 3px solid rgba(255, 255, 255, 0.50);\r\n}\r\n\r\n.timer__work,\r\n.timer__rest {\r\n  color: rgba(255, 255, 255, 0.50);\r\n  font-family: Verdana;\r\n  font-size: 20px;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  line-height: 100%;\r\n  /* 20px */\r\n  margin: 0;\r\n  padding: 0;\r\n  margin: 0 auto;\r\n}\r\n\r\n.timer__line {\r\n  position: absolute;\r\n  top: -14px;\r\n  left: 107px;\r\n\r\n  width: 3px;\r\n  height: 48px;\r\n  background: rgba(255, 255, 255, 0.50);\r\n}\r\n\r\n.timer__work_active {\r\n  color: white;\r\n  font-weight: 700;\r\n}\r\n.timer__rest_active {\r\n  color: white;\r\n  font-weight: 700;\r\n}\r\n\r\n.timer__indication {\r\n  width: 200px;\r\n  height: 200px;\r\n  border-radius: 50%;\r\n  border: 5px solid #FF8A00;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n}\r\n\r\n.timer__time {\r\n  color: #FFF;\r\n  font-family: Verdana;\r\n  font-size: 48px;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  line-height: 100%;\r\n  /* 64px */\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.timer__control {\r\n  width: 200px;\r\n  height: 50px;\r\n}\r\n\r\n.timer__list {\r\n  list-style: none;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.timer__item {\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n\r\n.timer__btn {\r\n  background-color: rgba(255, 255, 255, 0.0);\r\n  color: black;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 24px;\r\n  height: 24px;\r\n  margin: 0;\r\n  padding: 0;\r\n  opacity: 0.3;\r\n}\r\n\r\n.timer__btn:hover {\r\n  opacity: 0.5;\r\n  transition: 0.3s;\r\n}\r\n\r\n.timer__btn:active {\r\n  opacity: 1;\r\n  transition: 0.2s;\r\n}\r\n\r\n.timer__btn_play::after {\r\n  content: url(/src/img/timer/start_timer_hover.svg);\r\n}\r\n\r\n.timer__btn_pause::after {\r\n  content: url(/src/img/timer/pause_hover.svg);\r\n}\r\n\r\n.timer__btn_revert::after {\r\n  content: url(/src/img/timer/revert_hover.svg);\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./css/style.css */ "./src/css/style.css"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/img/wheather/partly-cloudy-day.svg */ "./src/img/wheather/partly-cloudy-day.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/img/wheather/celsius.svg */ "./src/img/wheather/celsius.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/img/google/gsearch.svg */ "./src/img/google/gsearch.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/img/google/gdoc.svg */ "./src/img/google/gdoc.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/img/google/gmaps.svg */ "./src/img/google/gmaps.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/img/google/gmail.svg */ "./src/img/google/gmail.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../dist/main.js */ "./dist/main.js"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var code = "<!DOCTYPE html>\r\n<html class=\"page\" lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <link rel=\"stylesheet\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\r\n    <title>Yourmood</title>\r\n</head>\r\n<body class=\"page__body\">\r\n    <div class=\"content\">\r\n            <section class=\"wheather\">\r\n                <div class=\"wheather__search\">\r\n                    <input class=\"wheather__input\" type=\"text\" placeholder=\"enter city name\">\r\n                    <button class=\"wheather__button\">Search</button>\r\n                </div>\r\n                <div class=\"wheather__block\">\r\n                    <img class=\"wheather__image\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\" width=\"70px\">\r\n                    <div class=\"wheather__temp-block\">\r\n                        <p class=\"wheather__tempreture\">24</p>\r\n                        <img class=\"wheather__celsius\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\">\r\n                    </div>\r\n                </div>\r\n                <h2 class=\"wheather__city\">Moscow</h2>\r\n            </section>\r\n            <section class=\"realtime\">\r\n                <div class=\"realtime__time\">10:20</div>\r\n                <div class=\"realtime__date\">15.12.23</div>\r\n            </section>\r\n            <section class=\"currency\">\r\n                <p class=\"currency__usd\">usd 87.8</p>\r\n                <p class=\"currency__eur\">eur 91.4</p>\r\n            </section>\r\n            <section class=\"links\">\r\n                <ul class=\"links__list\">\r\n                    <li class=\"links__item\">\r\n                        <a class=\"links__link\" href=\"https://www.google.com/\" target=\"_blank\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\" width=\"48px\">\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"links__item\">\r\n                        <a class=\"links__link\" href=\"https://docs.google.com/document/\" target=\"_blank\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\" width=\"48px\">\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"links__item\">\r\n                        <a class=\"links__link\" href=\"https://www.google.com/maps\" target=\"_blank\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\" width=\"48px\">\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"links__item\">\r\n                        <a class=\"links__link\" href=\"https://mail.google.com/\" target=\"_blank\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"\" width=\"48px\">\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </section>\r\n            <section class=\"quots\">\r\n                <p class=\"quots__text\">If you fall asleep now, you will dream. If you study now, you will live your dream.</p>\r\n            </section>\r\n            <section class=\"timer\">\r\n                <div class=\"timer__mode\">\r\n                    <p class=\"timer__work\">work</p>\r\n                    <p class=\"timer__line\"></p>\r\n                    <p class=\"timer__rest\">rest</p>\r\n                </div>\r\n                <div class=\"timer__indication\">\r\n                    <p class=\"timer__time\">24:35</p>\r\n                </div>\r\n                <div class=\"timer__control\">\r\n                    <ul class=\"timer__list\">\r\n                        <li class=\"timer__item\">\r\n                            <button class=\"timer__btn timer__btn_play\">\r\n                            </button>\r\n                        </li>\r\n                        <li class=\"timer__item\">\r\n                            <button disabled class=\"timer__btn timer__btn_pause\">\r\n                            </button>\r\n                        </li>\r\n                        <li class=\"timer__item\">\r\n                            <button class=\"timer__btn timer__btn_revert\" value=\"Refresh Page\" onClick=\"window.location.reload();\">\r\n                            </button>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </section>\r\n    </div>\r\n<" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\"><" + "/script>\r\n</body>\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/js/realDate.js":
/*!****************************!*\
  !*** ./src/js/realDate.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ realDate)
/* harmony export */ });
function realDate() {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  const year = date.getFullYear();

  day = (`0${day}`).slice(-2);
  month = (`0${month}`).slice(-2);

  const dispdate = document.querySelector('.realtime__date');
  dispdate.innerHTML = `${day}.${month}.${year}`;
  setTimeout(realDate, 1000);
}


/***/ }),

/***/ "./src/js/realTime.js":
/*!****************************!*\
  !*** ./src/js/realTime.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ realTime)
/* harmony export */ });
function realTime() {
  const time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();

  hours = (`0${hours}`).slice(-2);
  minutes = (`0${minutes}`).slice(-2);

  const disptime = document.querySelector('.realtime__time');
  disptime.innerHTML = `${hours}:${minutes}`;
  setTimeout(realTime, 1000);
}


/***/ }),

/***/ "./src/js/timer.js":
/*!*************************!*\
  !*** ./src/js/timer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ timer)
/* harmony export */ });
function timer() {
  const timerdisp = document.querySelector('.timer__time');
  const btnplay = document.querySelector('.timer__btn_play');
  const btnpause = document.querySelector('.timer__btn_pause');
  const timerwork = document.querySelector('.timer__work');
  const timerrest = document.querySelector('.timer__rest');

  const minutes = 50;
  let seconds = '00';
  const restminutes = 10;
  let workInterval = 0;
  let restInerval = 0;
  let isPaused = false;

  timerdisp.innerHTML = `${minutes}:${seconds}`;

  function startRest() {
    seconds = 59;

    timerrest.classList.add('timer__rest_active');

    let restmin = restminutes - 1;

    function restFunction() {
      if (!isPaused) {
        timerdisp.innerHTML = `${restmin}:${seconds}`;

        seconds -= 1;

        if (seconds === 0) {
          restmin -= 1;
          seconds = 59;
          if (restmin === -1) {
            seconds = '00';
            timerdisp.innerHTML = `${minutes}:${seconds}`;
            console.log('rest');
            timerrest.classList.remove('timer__rest_active');
            clearInterval(restInerval);
          }
        }
      }
    }
    restInerval = setInterval(restFunction, 1000);
  }
  function startTimer() {
    seconds = 59;

    timerwork.classList.add('timer__work_active');

    let workminutes = minutes - 1;

    function timerFunction() {
      if (!isPaused) {
        timerdisp.innerHTML = `${workminutes}:${seconds}`;

        seconds -= 1;

        if (seconds === 0) {
          workminutes -= 1;
          seconds = 3;
          if (workminutes === -1) {
            console.log('work');
            timerwork.classList.remove('timer__work_active');
            clearInterval(workInterval);
            startRest();
          }
        }
      }
    }
    workInterval = setInterval(timerFunction, 1000);
  }

  function Start() {
    btnplay.classList.remove('timer__btn_play');
    // btnplay.classList.add('timer__btn_pause');
    btnplay.style.display = 'none';
    btnpause.removeAttribute('disabled', '');
    startTimer();
  }
  function Pause() {
    if (btnpause.classList.contains('timer__btn_play')) {
      btnpause.classList.remove('timer__btn_pause');
    } else {
      btnpause.classList.add('timer__btn_pause');
    }
    if (btnpause.classList.contains('timer__btn_pause')) {
      btnpause.classList.remove('timer__btn_play');
    } else {
      btnpause.classList.add('timer__btn_play');
    }
    if (!isPaused) {
      isPaused = true;
    } else {
      isPaused = false;
    }
  }

  btnplay.addEventListener('click', Start, { once: true });
  btnpause.addEventListener('click', Pause);
}


/***/ }),

/***/ "./src/js/wheather.js":
/*!****************************!*\
  !*** ./src/js/wheather.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ wheather)
/* harmony export */ });
function wheather() {
  const apiKey = '7199b6220103ca8a019f29d439cdd7e9';
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';
  const inputbox = document.querySelector('.wheather__input');
  const searchbtn = document.querySelector('.wheather__button');
  const wheathericon = document.querySelector('.wheather__image');
  const citywheather = document.querySelector('.wheather__city');
  const wheatherblock = document.querySelector('.wheather__block');

  async function checkWheather(city) {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

    if (response.status === 404) {
      citywheather.innerHTML = 'Invalid city name';
      wheatherblock.style.display = 'none';
    } else {
      const data = await response.json();

      citywheather.innerHTML = data.name;
      document.querySelector('.wheather__tempreture').innerHTML = Math.round(data.main.temp);

      if (data.weather[0].main === 'Clouds') {
        wheathericon.src = 'img/wheather/cloudy.svg';
      } else if (data.weather[0].main === 'Clear') {
        wheathericon.src = 'img/wheather/clear-day.svg';
      } else if (data.weather[0].main === 'Rain') {
        wheathericon.src = 'img/wheather/rain.svg';
      } else if (data.weather[0].main === 'Drizzle') {
        wheathericon.src = '/src/img/wheather/drizzle.svg';
      } else if (data.weather[0].main === 'Mist') {
        wheathericon.src = '/src/img/wheather/fog.svg';
      } else {
        wheathericon.src = '/src/img/wheather/clear.svg';
      }
    }
  }

  searchbtn.addEventListener('click', () => {
    checkWheather(inputbox.value);
  });
}


/***/ }),

/***/ "./dist/main.js":
/*!**********************!*\
  !*** ./dist/main.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "81baf739f998eff76eaf.js";

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5e0cd27037cb71e691aa.css";

/***/ }),

/***/ "./src/img/bg/lodka.jpg":
/*!******************************!*\
  !*** ./src/img/bg/lodka.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "004abb96959c2c3241a9.jpg";

/***/ }),

/***/ "./src/img/google/gdoc.svg":
/*!*********************************!*\
  !*** ./src/img/google/gdoc.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0343e74a5b7e83b9ffb3.svg";

/***/ }),

/***/ "./src/img/google/gmail.svg":
/*!**********************************!*\
  !*** ./src/img/google/gmail.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2573e85713b7b8c24364.svg";

/***/ }),

/***/ "./src/img/google/gmaps.svg":
/*!**********************************!*\
  !*** ./src/img/google/gmaps.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7f02e40aeeac4659f064.svg";

/***/ }),

/***/ "./src/img/google/gsearch.svg":
/*!************************************!*\
  !*** ./src/img/google/gsearch.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6f4ead038a2274432f22.svg";

/***/ }),

/***/ "./src/img/timer/pause_hover.svg":
/*!***************************************!*\
  !*** ./src/img/timer/pause_hover.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0897e22fc54ad0250789.svg";

/***/ }),

/***/ "./src/img/timer/revert_hover.svg":
/*!****************************************!*\
  !*** ./src/img/timer/revert_hover.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "759fe8dbf1f3e9eb43be.svg";

/***/ }),

/***/ "./src/img/timer/start_timer_hover.svg":
/*!*********************************************!*\
  !*** ./src/img/timer/start_timer_hover.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ae2eb1b6fe6f5191ae6c.svg";

/***/ }),

/***/ "./src/img/wheather/celsius.svg":
/*!**************************************!*\
  !*** ./src/img/wheather/celsius.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c8450f078e2df5425880.svg";

/***/ }),

/***/ "./src/img/wheather/partly-cloudy-day.svg":
/*!************************************************!*\
  !*** ./src/img/wheather/partly-cloudy-day.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c76bf2b7a620dcca8048.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.html */ "./src/index.html");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _realTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./realTime */ "./src/js/realTime.js");
/* harmony import */ var _realDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./realDate */ "./src/js/realDate.js");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timer */ "./src/js/timer.js");
/* harmony import */ var _wheather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wheather */ "./src/js/wheather.js");







(0,_realTime__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_realDate__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_timer__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_wheather__WEBPACK_IMPORTED_MODULE_5__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map