(function() {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutProperties; }
/* harmony export */ });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__.default)(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutPropertiesLoose; }
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/amber.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/amber.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var amber = {
  50: '#fff8e1',
  100: '#ffecb3',
  200: '#ffe082',
  300: '#ffd54f',
  400: '#ffca28',
  500: '#ffc107',
  600: '#ffb300',
  700: '#ffa000',
  800: '#ff8f00',
  900: '#ff6f00',
  A100: '#ffe57f',
  A200: '#ffd740',
  A400: '#ffc400',
  A700: '#ffab00'
};
/* harmony default export */ __webpack_exports__["default"] = (amber);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/blue.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/blue.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var blue = {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
  A100: '#82b1ff',
  A200: '#448aff',
  A400: '#2979ff',
  A700: '#2962ff'
};
/* harmony default export */ __webpack_exports__["default"] = (blue);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/blueGrey.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/blueGrey.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var blueGrey = {
  50: '#eceff1',
  100: '#cfd8dc',
  200: '#b0bec5',
  300: '#90a4ae',
  400: '#78909c',
  500: '#607d8b',
  600: '#546e7a',
  700: '#455a64',
  800: '#37474f',
  900: '#263238',
  A100: '#cfd8dc',
  A200: '#b0bec5',
  A400: '#78909c',
  A700: '#455a64'
};
/* harmony default export */ __webpack_exports__["default"] = (blueGrey);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/brown.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/brown.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var brown = {
  50: '#efebe9',
  100: '#d7ccc8',
  200: '#bcaaa4',
  300: '#a1887f',
  400: '#8d6e63',
  500: '#795548',
  600: '#6d4c41',
  700: '#5d4037',
  800: '#4e342e',
  900: '#3e2723',
  A100: '#d7ccc8',
  A200: '#bcaaa4',
  A400: '#8d6e63',
  A700: '#5d4037'
};
/* harmony default export */ __webpack_exports__["default"] = (brown);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/common.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/common.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var common = {
  black: '#000',
  white: '#fff'
};
/* harmony default export */ __webpack_exports__["default"] = (common);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/cyan.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/cyan.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var cyan = {
  50: '#e0f7fa',
  100: '#b2ebf2',
  200: '#80deea',
  300: '#4dd0e1',
  400: '#26c6da',
  500: '#00bcd4',
  600: '#00acc1',
  700: '#0097a7',
  800: '#00838f',
  900: '#006064',
  A100: '#84ffff',
  A200: '#18ffff',
  A400: '#00e5ff',
  A700: '#00b8d4'
};
/* harmony default export */ __webpack_exports__["default"] = (cyan);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/deepOrange.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/deepOrange.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var deepOrange = {
  50: '#fbe9e7',
  100: '#ffccbc',
  200: '#ffab91',
  300: '#ff8a65',
  400: '#ff7043',
  500: '#ff5722',
  600: '#f4511e',
  700: '#e64a19',
  800: '#d84315',
  900: '#bf360c',
  A100: '#ff9e80',
  A200: '#ff6e40',
  A400: '#ff3d00',
  A700: '#dd2c00'
};
/* harmony default export */ __webpack_exports__["default"] = (deepOrange);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/deepPurple.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/deepPurple.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var deepPurple = {
  50: '#ede7f6',
  100: '#d1c4e9',
  200: '#b39ddb',
  300: '#9575cd',
  400: '#7e57c2',
  500: '#673ab7',
  600: '#5e35b1',
  700: '#512da8',
  800: '#4527a0',
  900: '#311b92',
  A100: '#b388ff',
  A200: '#7c4dff',
  A400: '#651fff',
  A700: '#6200ea'
};
/* harmony default export */ __webpack_exports__["default"] = (deepPurple);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/green.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/green.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var green = {
  50: '#e8f5e9',
  100: '#c8e6c9',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
  A100: '#b9f6ca',
  A200: '#69f0ae',
  A400: '#00e676',
  A700: '#00c853'
};
/* harmony default export */ __webpack_exports__["default"] = (green);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/grey.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/grey.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#d5d5d5',
  A200: '#aaaaaa',
  A400: '#303030',
  A700: '#616161'
};
/* harmony default export */ __webpack_exports__["default"] = (grey);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "common": function() { return /* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "red": function() { return /* reexport safe */ _red__WEBPACK_IMPORTED_MODULE_1__.default; },
/* harmony export */   "pink": function() { return /* reexport safe */ _pink__WEBPACK_IMPORTED_MODULE_2__.default; },
/* harmony export */   "purple": function() { return /* reexport safe */ _purple__WEBPACK_IMPORTED_MODULE_3__.default; },
/* harmony export */   "deepPurple": function() { return /* reexport safe */ _deepPurple__WEBPACK_IMPORTED_MODULE_4__.default; },
/* harmony export */   "indigo": function() { return /* reexport safe */ _indigo__WEBPACK_IMPORTED_MODULE_5__.default; },
/* harmony export */   "blue": function() { return /* reexport safe */ _blue__WEBPACK_IMPORTED_MODULE_6__.default; },
/* harmony export */   "lightBlue": function() { return /* reexport safe */ _lightBlue__WEBPACK_IMPORTED_MODULE_7__.default; },
/* harmony export */   "cyan": function() { return /* reexport safe */ _cyan__WEBPACK_IMPORTED_MODULE_8__.default; },
/* harmony export */   "teal": function() { return /* reexport safe */ _teal__WEBPACK_IMPORTED_MODULE_9__.default; },
/* harmony export */   "green": function() { return /* reexport safe */ _green__WEBPACK_IMPORTED_MODULE_10__.default; },
/* harmony export */   "lightGreen": function() { return /* reexport safe */ _lightGreen__WEBPACK_IMPORTED_MODULE_11__.default; },
/* harmony export */   "lime": function() { return /* reexport safe */ _lime__WEBPACK_IMPORTED_MODULE_12__.default; },
/* harmony export */   "yellow": function() { return /* reexport safe */ _yellow__WEBPACK_IMPORTED_MODULE_13__.default; },
/* harmony export */   "amber": function() { return /* reexport safe */ _amber__WEBPACK_IMPORTED_MODULE_14__.default; },
/* harmony export */   "orange": function() { return /* reexport safe */ _orange__WEBPACK_IMPORTED_MODULE_15__.default; },
/* harmony export */   "deepOrange": function() { return /* reexport safe */ _deepOrange__WEBPACK_IMPORTED_MODULE_16__.default; },
/* harmony export */   "brown": function() { return /* reexport safe */ _brown__WEBPACK_IMPORTED_MODULE_17__.default; },
/* harmony export */   "grey": function() { return /* reexport safe */ _grey__WEBPACK_IMPORTED_MODULE_18__.default; },
/* harmony export */   "blueGrey": function() { return /* reexport safe */ _blueGrey__WEBPACK_IMPORTED_MODULE_19__.default; }
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./node_modules/@material-ui/core/esm/colors/common.js");
/* harmony import */ var _red__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./red */ "./node_modules/@material-ui/core/esm/colors/red.js");
/* harmony import */ var _pink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pink */ "./node_modules/@material-ui/core/esm/colors/pink.js");
/* harmony import */ var _purple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./purple */ "./node_modules/@material-ui/core/esm/colors/purple.js");
/* harmony import */ var _deepPurple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deepPurple */ "./node_modules/@material-ui/core/esm/colors/deepPurple.js");
/* harmony import */ var _indigo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./indigo */ "./node_modules/@material-ui/core/esm/colors/indigo.js");
/* harmony import */ var _blue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blue */ "./node_modules/@material-ui/core/esm/colors/blue.js");
/* harmony import */ var _lightBlue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lightBlue */ "./node_modules/@material-ui/core/esm/colors/lightBlue.js");
/* harmony import */ var _cyan__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cyan */ "./node_modules/@material-ui/core/esm/colors/cyan.js");
/* harmony import */ var _teal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./teal */ "./node_modules/@material-ui/core/esm/colors/teal.js");
/* harmony import */ var _green__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./green */ "./node_modules/@material-ui/core/esm/colors/green.js");
/* harmony import */ var _lightGreen__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lightGreen */ "./node_modules/@material-ui/core/esm/colors/lightGreen.js");
/* harmony import */ var _lime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lime */ "./node_modules/@material-ui/core/esm/colors/lime.js");
/* harmony import */ var _yellow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./yellow */ "./node_modules/@material-ui/core/esm/colors/yellow.js");
/* harmony import */ var _amber__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./amber */ "./node_modules/@material-ui/core/esm/colors/amber.js");
/* harmony import */ var _orange__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./orange */ "./node_modules/@material-ui/core/esm/colors/orange.js");
/* harmony import */ var _deepOrange__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./deepOrange */ "./node_modules/@material-ui/core/esm/colors/deepOrange.js");
/* harmony import */ var _brown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./brown */ "./node_modules/@material-ui/core/esm/colors/brown.js");
/* harmony import */ var _grey__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./grey */ "./node_modules/@material-ui/core/esm/colors/grey.js");
/* harmony import */ var _blueGrey__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./blueGrey */ "./node_modules/@material-ui/core/esm/colors/blueGrey.js");





















/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/indigo.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/indigo.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var indigo = {
  50: '#e8eaf6',
  100: '#c5cae9',
  200: '#9fa8da',
  300: '#7986cb',
  400: '#5c6bc0',
  500: '#3f51b5',
  600: '#3949ab',
  700: '#303f9f',
  800: '#283593',
  900: '#1a237e',
  A100: '#8c9eff',
  A200: '#536dfe',
  A400: '#3d5afe',
  A700: '#304ffe'
};
/* harmony default export */ __webpack_exports__["default"] = (indigo);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/lightBlue.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/lightBlue.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var lightBlue = {
  50: '#e1f5fe',
  100: '#b3e5fc',
  200: '#81d4fa',
  300: '#4fc3f7',
  400: '#29b6f6',
  500: '#03a9f4',
  600: '#039be5',
  700: '#0288d1',
  800: '#0277bd',
  900: '#01579b',
  A100: '#80d8ff',
  A200: '#40c4ff',
  A400: '#00b0ff',
  A700: '#0091ea'
};
/* harmony default export */ __webpack_exports__["default"] = (lightBlue);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/lightGreen.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/lightGreen.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var lightGreen = {
  50: '#f1f8e9',
  100: '#dcedc8',
  200: '#c5e1a5',
  300: '#aed581',
  400: '#9ccc65',
  500: '#8bc34a',
  600: '#7cb342',
  700: '#689f38',
  800: '#558b2f',
  900: '#33691e',
  A100: '#ccff90',
  A200: '#b2ff59',
  A400: '#76ff03',
  A700: '#64dd17'
};
/* harmony default export */ __webpack_exports__["default"] = (lightGreen);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/lime.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/lime.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var lime = {
  50: '#f9fbe7',
  100: '#f0f4c3',
  200: '#e6ee9c',
  300: '#dce775',
  400: '#d4e157',
  500: '#cddc39',
  600: '#c0ca33',
  700: '#afb42b',
  800: '#9e9d24',
  900: '#827717',
  A100: '#f4ff81',
  A200: '#eeff41',
  A400: '#c6ff00',
  A700: '#aeea00'
};
/* harmony default export */ __webpack_exports__["default"] = (lime);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/orange.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/orange.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var orange = {
  50: '#fff3e0',
  100: '#ffe0b2',
  200: '#ffcc80',
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  600: '#fb8c00',
  700: '#f57c00',
  800: '#ef6c00',
  900: '#e65100',
  A100: '#ffd180',
  A200: '#ffab40',
  A400: '#ff9100',
  A700: '#ff6d00'
};
/* harmony default export */ __webpack_exports__["default"] = (orange);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/pink.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/pink.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var pink = {
  50: '#fce4ec',
  100: '#f8bbd0',
  200: '#f48fb1',
  300: '#f06292',
  400: '#ec407a',
  500: '#e91e63',
  600: '#d81b60',
  700: '#c2185b',
  800: '#ad1457',
  900: '#880e4f',
  A100: '#ff80ab',
  A200: '#ff4081',
  A400: '#f50057',
  A700: '#c51162'
};
/* harmony default export */ __webpack_exports__["default"] = (pink);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/purple.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/purple.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var purple = {
  50: '#f3e5f5',
  100: '#e1bee7',
  200: '#ce93d8',
  300: '#ba68c8',
  400: '#ab47bc',
  500: '#9c27b0',
  600: '#8e24aa',
  700: '#7b1fa2',
  800: '#6a1b9a',
  900: '#4a148c',
  A100: '#ea80fc',
  A200: '#e040fb',
  A400: '#d500f9',
  A700: '#aa00ff'
};
/* harmony default export */ __webpack_exports__["default"] = (purple);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/red.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/red.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var red = {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  A100: '#ff8a80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000'
};
/* harmony default export */ __webpack_exports__["default"] = (red);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/teal.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/teal.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var teal = {
  50: '#e0f2f1',
  100: '#b2dfdb',
  200: '#80cbc4',
  300: '#4db6ac',
  400: '#26a69a',
  500: '#009688',
  600: '#00897b',
  700: '#00796b',
  800: '#00695c',
  900: '#004d40',
  A100: '#a7ffeb',
  A200: '#64ffda',
  A400: '#1de9b6',
  A700: '#00bfa5'
};
/* harmony default export */ __webpack_exports__["default"] = (teal);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/yellow.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/yellow.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var yellow = {
  50: '#fffde7',
  100: '#fff9c4',
  200: '#fff59d',
  300: '#fff176',
  400: '#ffee58',
  500: '#ffeb3b',
  600: '#fdd835',
  700: '#fbc02d',
  800: '#f9a825',
  900: '#f57f17',
  A100: '#ffff8d',
  A200: '#ffff00',
  A400: '#ffea00',
  A700: '#ffd600'
};
/* harmony default export */ __webpack_exports__["default"] = (yellow);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/colorManipulator.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hexToRgb": function() { return /* binding */ hexToRgb; },
/* harmony export */   "rgbToHex": function() { return /* binding */ rgbToHex; },
/* harmony export */   "hslToRgb": function() { return /* binding */ hslToRgb; },
/* harmony export */   "decomposeColor": function() { return /* binding */ decomposeColor; },
/* harmony export */   "recomposeColor": function() { return /* binding */ recomposeColor; },
/* harmony export */   "getContrastRatio": function() { return /* binding */ getContrastRatio; },
/* harmony export */   "getLuminance": function() { return /* binding */ getLuminance; },
/* harmony export */   "emphasize": function() { return /* binding */ emphasize; },
/* harmony export */   "fade": function() { return /* binding */ fade; },
/* harmony export */   "alpha": function() { return /* binding */ alpha; },
/* harmony export */   "darken": function() { return /* binding */ darken; },
/* harmony export */   "lighten": function() { return /* binding */ lighten; }
/* harmony export */ });
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_0__);


/* eslint-disable no-use-before-define */

/**
 * Returns a number whose value is limited to the given range.
 *
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (true) {
    if (value < min || value > max) {
      console.error("Material-UI: The value provided ".concat(value, " is out of range [").concat(min, ", ").concat(max, "]."));
    }
  }

  return Math.min(Math.max(min, value), max);
}
/**
 * Converts a color from CSS hex format to CSS rgb format.
 *
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */


function hexToRgb(color) {
  color = color.substr(1);
  var re = new RegExp(".{1,".concat(color.length >= 6 ? 2 : 1, "}"), 'g');
  var colors = color.match(re);

  if (colors && colors[0].length === 1) {
    colors = colors.map(function (n) {
      return n + n;
    });
  }

  return colors ? "rgb".concat(colors.length === 4 ? 'a' : '', "(").concat(colors.map(function (n, index) {
    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
  }).join(', '), ")") : '';
}

function intToHex(int) {
  var hex = int.toString(16);
  return hex.length === 1 ? "0".concat(hex) : hex;
}
/**
 * Converts a color from CSS rgb format to CSS hex format.
 *
 * @param {string} color - RGB color, i.e. rgb(n, n, n)
 * @returns {string} A CSS rgb color string, i.e. #nnnnnn
 */


function rgbToHex(color) {
  // Idempotent
  if (color.indexOf('#') === 0) {
    return color;
  }

  var _decomposeColor = decomposeColor(color),
      values = _decomposeColor.values;

  return "#".concat(values.map(function (n) {
    return intToHex(n);
  }).join(''));
}
/**
 * Converts a color from hsl format to rgb format.
 *
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */

function hslToRgb(color) {
  color = decomposeColor(color);
  var _color = color,
      values = _color.values;
  var h = values[0];
  var s = values[1] / 100;
  var l = values[2] / 100;
  var a = s * Math.min(l, 1 - l);

  var f = function f(n) {
    var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (n + h / 30) % 12;
    return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  };

  var type = 'rgb';
  var rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];

  if (color.type === 'hsla') {
    type += 'a';
    rgb.push(values[3]);
  }

  return recomposeColor({
    type: type,
    values: rgb
  });
}
/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */

function decomposeColor(color) {
  // Idempotent
  if (color.type) {
    return color;
  }

  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }

  var marker = color.indexOf('(');
  var type = color.substring(0, marker);

  if (['rgb', 'rgba', 'hsl', 'hsla'].indexOf(type) === -1) {
    throw new Error( true ? "Material-UI: Unsupported `".concat(color, "` color.\nWe support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().") : 0);
  }

  var values = color.substring(marker + 1, color.length - 1).split(',');
  values = values.map(function (value) {
    return parseFloat(value);
  });
  return {
    type: type,
    values: values
  };
}
/**
 * Converts a color object with type and values to a string.
 *
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */

function recomposeColor(color) {
  var type = color.type;
  var values = color.values;

  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map(function (n, i) {
      return i < 3 ? parseInt(n, 10) : n;
    });
  } else if (type.indexOf('hsl') !== -1) {
    values[1] = "".concat(values[1], "%");
    values[2] = "".concat(values[2], "%");
  }

  return "".concat(type, "(").concat(values.join(', '), ")");
}
/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */

function getContrastRatio(foreground, background) {
  var lumA = getLuminance(foreground);
  var lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */

function getLuminance(color) {
  color = decomposeColor(color);
  var rgb = color.type === 'hsl' ? decomposeColor(hslToRgb(color)).values : color.values;
  rgb = rgb.map(function (val) {
    val /= 255; // normalized

    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  }); // Truncate at 3 digits

  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
/**
 * Darken or lighten a color, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function emphasize(color) {
  var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.15;
  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}
var warnedOnce = false;
/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0 -1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 *
 * @deprecated
 * Use `import { alpha } from '@material-ui/core/styles'` instead.
 */

function fade(color, value) {
  if (true) {
    if (!warnedOnce) {
      warnedOnce = true;
      console.error(['Material-UI: The `fade` color utility was renamed to `alpha` to better describe its functionality.', '', "You should use `import { alpha } from '@material-ui/core/styles'`"].join('\n'));
    }
  }

  return alpha(color, value);
}
/**
 * Set the absolute transparency of a color.
 * Any existing alpha value is overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0-1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function alpha(color, value) {
  color = decomposeColor(color);
  value = clamp(value);

  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }

  color.values[3] = value;
  return recomposeColor(color);
}
/**
 * Darkens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }

  return recomposeColor(color);
}
/**
 * Lightens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  }

  return recomposeColor(color);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createBreakpoints.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createBreakpoints.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keys": function() { return /* binding */ keys; },
/* harmony export */   "default": function() { return /* binding */ createBreakpoints; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");


// Sorted ASC by size. That's important.
// It can't be configured as it's used statically for propTypes.
var keys = ['xs', 'sm', 'md', 'lg', 'xl']; // Keep in mind that @media is inclusive by the CSS specification.

function createBreakpoints(breakpoints) {
  var _breakpoints$values = breakpoints.values,
      values = _breakpoints$values === void 0 ? {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  } : _breakpoints$values,
      _breakpoints$unit = breakpoints.unit,
      unit = _breakpoints$unit === void 0 ? 'px' : _breakpoints$unit,
      _breakpoints$step = breakpoints.step,
      step = _breakpoints$step === void 0 ? 5 : _breakpoints$step,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(breakpoints, ["values", "unit", "step"]);

  function up(key) {
    var value = typeof values[key] === 'number' ? values[key] : key;
    return "@media (min-width:".concat(value).concat(unit, ")");
  }

  function down(key) {
    var endIndex = keys.indexOf(key) + 1;
    var upperbound = values[keys[endIndex]];

    if (endIndex === keys.length) {
      // xl down applies to all sizes
      return up('xs');
    }

    var value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
    return "@media (max-width:".concat(value - step / 100).concat(unit, ")");
  }

  function between(start, end) {
    var endIndex = keys.indexOf(end);

    if (endIndex === keys.length - 1) {
      return up(start);
    }

    return "@media (min-width:".concat(typeof values[start] === 'number' ? values[start] : start).concat(unit, ") and ") + "(max-width:".concat((endIndex !== -1 && typeof values[keys[endIndex + 1]] === 'number' ? values[keys[endIndex + 1]] : end) - step / 100).concat(unit, ")");
  }

  function only(key) {
    return between(key, key);
  }

  var warnedOnce = false;

  function width(key) {
    if (true) {
      if (!warnedOnce) {
        warnedOnce = true;
        console.warn(["Material-UI: The `theme.breakpoints.width` utility is deprecated because it's redundant.", 'Use the `theme.breakpoints.values` instead.'].join('\n'));
      }
    }

    return values[key];
  }

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    keys: keys,
    values: values,
    up: up,
    down: down,
    between: between,
    only: only,
    width: width
  }, other);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createMixins.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createMixins.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createMixins; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");


function createMixins(breakpoints, spacing, mixins) {
  var _toolbar;

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    gutters: function gutters() {
      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      console.warn(['Material-UI: theme.mixins.gutters() is deprecated.', 'You can use the source of the mixin directly:', "\n      paddingLeft: theme.spacing(2),\n      paddingRight: theme.spacing(2),\n      [theme.breakpoints.up('sm')]: {\n        paddingLeft: theme.spacing(3),\n        paddingRight: theme.spacing(3),\n      },\n      "].join('\n'));
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
        paddingLeft: spacing(2),
        paddingRight: spacing(2)
      }, styles, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, breakpoints.up('sm'), (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
        paddingLeft: spacing(3),
        paddingRight: spacing(3)
      }, styles[breakpoints.up('sm')])));
    },
    toolbar: (_toolbar = {
      minHeight: 56
    }, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_toolbar, "".concat(breakpoints.up('xs'), " and (orientation: landscape)"), {
      minHeight: 48
    }), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_toolbar, breakpoints.up('sm'), {
      minHeight: 64
    }), _toolbar)
  }, mixins);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createMuiStrictModeTheme.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createMuiStrictModeTheme.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createMuiStrictModeTheme; }
/* harmony export */ });
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTheme */ "./node_modules/@material-ui/core/esm/styles/createTheme.js");


function createMuiStrictModeTheme(options) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return _createTheme__WEBPACK_IMPORTED_MODULE_1__.default.apply(void 0, [(0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_0__.deepmerge)({
    unstable_strictMode: true
  }, options)].concat(args));
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createPalette.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createPalette.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "light": function() { return /* binding */ light; },
/* harmony export */   "dark": function() { return /* binding */ dark; },
/* harmony export */   "default": function() { return /* binding */ createPalette; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _colors_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../colors/common */ "./node_modules/@material-ui/core/esm/colors/common.js");
/* harmony import */ var _colors_grey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../colors/grey */ "./node_modules/@material-ui/core/esm/colors/grey.js");
/* harmony import */ var _colors_indigo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../colors/indigo */ "./node_modules/@material-ui/core/esm/colors/indigo.js");
/* harmony import */ var _colors_pink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../colors/pink */ "./node_modules/@material-ui/core/esm/colors/pink.js");
/* harmony import */ var _colors_red__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../colors/red */ "./node_modules/@material-ui/core/esm/colors/red.js");
/* harmony import */ var _colors_orange__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../colors/orange */ "./node_modules/@material-ui/core/esm/colors/orange.js");
/* harmony import */ var _colors_blue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../colors/blue */ "./node_modules/@material-ui/core/esm/colors/blue.js");
/* harmony import */ var _colors_green__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../colors/green */ "./node_modules/@material-ui/core/esm/colors/green.js");
/* harmony import */ var _colorManipulator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");













var light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: 'rgba(0, 0, 0, 0.87)',
    // Secondary text.
    secondary: 'rgba(0, 0, 0, 0.54)',
    // Disabled text have even lower visual prominence.
    disabled: 'rgba(0, 0, 0, 0.38)',
    // Text hints.
    hint: 'rgba(0, 0, 0, 0.38)'
  },
  // The color used to divide different elements.
  divider: 'rgba(0, 0, 0, 0.12)',
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: _colors_common__WEBPACK_IMPORTED_MODULE_3__.default.white,
    default: _colors_grey__WEBPACK_IMPORTED_MODULE_4__.default[50]
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: 'rgba(0, 0, 0, 0.54)',
    // The color of an hovered action.
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: 'rgba(0, 0, 0, 0.26)',
    // The background color of a disabled action.
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
};
var dark = {
  text: {
    primary: _colors_common__WEBPACK_IMPORTED_MODULE_3__.default.white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)'
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: _colors_grey__WEBPACK_IMPORTED_MODULE_4__.default[800],
    default: '#303030'
  },
  action: {
    active: _colors_common__WEBPACK_IMPORTED_MODULE_3__.default.white,
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(255, 255, 255, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};

function addLightOrDark(intent, direction, shade, tonalOffset) {
  var tonalOffsetLight = tonalOffset.light || tonalOffset;
  var tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;

  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = (0,_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.lighten)(intent.main, tonalOffsetLight);
    } else if (direction === 'dark') {
      intent.dark = (0,_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.darken)(intent.main, tonalOffsetDark);
    }
  }
}

function createPalette(palette) {
  var _palette$primary = palette.primary,
      primary = _palette$primary === void 0 ? {
    light: _colors_indigo__WEBPACK_IMPORTED_MODULE_6__.default[300],
    main: _colors_indigo__WEBPACK_IMPORTED_MODULE_6__.default[500],
    dark: _colors_indigo__WEBPACK_IMPORTED_MODULE_6__.default[700]
  } : _palette$primary,
      _palette$secondary = palette.secondary,
      secondary = _palette$secondary === void 0 ? {
    light: _colors_pink__WEBPACK_IMPORTED_MODULE_7__.default.A200,
    main: _colors_pink__WEBPACK_IMPORTED_MODULE_7__.default.A400,
    dark: _colors_pink__WEBPACK_IMPORTED_MODULE_7__.default.A700
  } : _palette$secondary,
      _palette$error = palette.error,
      error = _palette$error === void 0 ? {
    light: _colors_red__WEBPACK_IMPORTED_MODULE_8__.default[300],
    main: _colors_red__WEBPACK_IMPORTED_MODULE_8__.default[500],
    dark: _colors_red__WEBPACK_IMPORTED_MODULE_8__.default[700]
  } : _palette$error,
      _palette$warning = palette.warning,
      warning = _palette$warning === void 0 ? {
    light: _colors_orange__WEBPACK_IMPORTED_MODULE_9__.default[300],
    main: _colors_orange__WEBPACK_IMPORTED_MODULE_9__.default[500],
    dark: _colors_orange__WEBPACK_IMPORTED_MODULE_9__.default[700]
  } : _palette$warning,
      _palette$info = palette.info,
      info = _palette$info === void 0 ? {
    light: _colors_blue__WEBPACK_IMPORTED_MODULE_10__.default[300],
    main: _colors_blue__WEBPACK_IMPORTED_MODULE_10__.default[500],
    dark: _colors_blue__WEBPACK_IMPORTED_MODULE_10__.default[700]
  } : _palette$info,
      _palette$success = palette.success,
      success = _palette$success === void 0 ? {
    light: _colors_green__WEBPACK_IMPORTED_MODULE_11__.default[300],
    main: _colors_green__WEBPACK_IMPORTED_MODULE_11__.default[500],
    dark: _colors_green__WEBPACK_IMPORTED_MODULE_11__.default[700]
  } : _palette$success,
      _palette$type = palette.type,
      type = _palette$type === void 0 ? 'light' : _palette$type,
      _palette$contrastThre = palette.contrastThreshold,
      contrastThreshold = _palette$contrastThre === void 0 ? 3 : _palette$contrastThre,
      _palette$tonalOffset = palette.tonalOffset,
      tonalOffset = _palette$tonalOffset === void 0 ? 0.2 : _palette$tonalOffset,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(palette, ["primary", "secondary", "error", "warning", "info", "success", "type", "contrastThreshold", "tonalOffset"]); // Use the same logic as
  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54


  function getContrastText(background) {
    var contrastText = (0,_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.getContrastRatio)(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

    if (true) {
      var contrast = (0,_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.getContrastRatio)(background, contrastText);

      if (contrast < 3) {
        console.error(["Material-UI: The contrast ratio of ".concat(contrast, ":1 for ").concat(contrastText, " on ").concat(background), 'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.', 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast'].join('\n'));
      }
    }

    return contrastText;
  }

  var augmentColor = function augmentColor(color) {
    var mainShade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    var lightShade = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
    var darkShade = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 700;
    color = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, color);

    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }

    if (!color.main) {
      throw new Error( true ? "Material-UI: The color provided to augmentColor(color) is invalid.\nThe color object needs to have a `main` property or a `".concat(mainShade, "` property.") : 0);
    }

    if (typeof color.main !== 'string') {
      throw new Error( true ? "Material-UI: The color provided to augmentColor(color) is invalid.\n`color.main` should be a string, but `".concat(JSON.stringify(color.main), "` was provided instead.\n\nDid you intend to use one of the following approaches?\n\nimport {\xA0green } from \"@material-ui/core/colors\";\n\nconst theme1 = createTheme({ palette: {\n  primary: green,\n} });\n\nconst theme2 = createTheme({ palette: {\n  primary: { main: green[500] },\n} });") : 0);
    }

    addLightOrDark(color, 'light', lightShade, tonalOffset);
    addLightOrDark(color, 'dark', darkShade, tonalOffset);

    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }

    return color;
  };

  var types = {
    dark: dark,
    light: light
  };

  if (true) {
    if (!types[type]) {
      console.error("Material-UI: The palette type `".concat(type, "` is not supported."));
    }
  }

  var paletteOutput = (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__.deepmerge)((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    // A collection of common colors.
    common: _colors_common__WEBPACK_IMPORTED_MODULE_3__.default,
    // The palette type, can be light or dark.
    type: type,
    // The colors used to represent primary interface elements for a user.
    primary: augmentColor(primary),
    // The colors used to represent secondary interface elements for a user.
    secondary: augmentColor(secondary, 'A400', 'A200', 'A700'),
    // The colors used to represent interface elements that the user should be made aware of.
    error: augmentColor(error),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: augmentColor(warning),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: augmentColor(info),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: augmentColor(success),
    // The grey colors.
    grey: _colors_grey__WEBPACK_IMPORTED_MODULE_4__.default,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: contrastThreshold,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: getContrastText,
    // Generate a rich color object.
    augmentColor: augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: tonalOffset
  }, types[type]), other);
  return paletteOutput;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createSpacing.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createSpacing.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createSpacing; }
/* harmony export */ });
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/system */ "@material-ui/system");
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_system__WEBPACK_IMPORTED_MODULE_0__);

var warnOnce;
function createSpacing() {
  var spacingInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;

  // Already transformed.
  if (spacingInput.mui) {
    return spacingInput;
  } // Material Design layouts are visually balanced. Most measurements align to an 8dp grid applied, which aligns both spacing and the overall layout.
  // Smaller components, such as icons and type, can align to a 4dp grid.
  // https://material.io/design/layout/understanding-layout.html#usage


  var transform = (0,_material_ui_system__WEBPACK_IMPORTED_MODULE_0__.createUnarySpacing)({
    spacing: spacingInput
  });

  var spacing = function spacing() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (true) {
      if (!(args.length <= 4)) {
        console.error("Material-UI: Too many arguments provided, expected between 0 and 4, got ".concat(args.length));
      }
    }

    if (args.length === 0) {
      return transform(1);
    }

    if (args.length === 1) {
      return transform(args[0]);
    }

    return args.map(function (argument) {
      if (typeof argument === 'string') {
        return argument;
      }

      var output = transform(argument);
      return typeof output === 'number' ? "".concat(output, "px") : output;
    }).join(' ');
  }; // Backward compatibility, to remove in v5.


  Object.defineProperty(spacing, 'unit', {
    get: function get() {
      if (true) {
        if (!warnOnce || "development" === 'test') {
          console.error(['Material-UI: theme.spacing.unit usage has been deprecated.', 'It will be removed in v5.', 'You can replace `theme.spacing.unit * y` with `theme.spacing(y)`.', '', 'You can use the `https://github.com/mui-org/material-ui/tree/master/packages/material-ui-codemod/README.md#theme-spacing-api` migration helper to make the process smoother.'].join('\n'));
        }

        warnOnce = true;
      }

      return spacingInput;
    }
  });
  spacing.mui = true;
  return spacing;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createStyles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createStyles.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createStyles; }
/* harmony export */ });
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__);
 // let warnOnce = false;
// To remove in v5

function createStyles(styles) {
  // warning(
  //   warnOnce,
  //   [
  //     'Material-UI: createStyles from @material-ui/core/styles is deprecated.',
  //     'Please use @material-ui/styles/createStyles',
  //   ].join('\n'),
  // );
  // warnOnce = true;
  return (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__.createStyles)(styles);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createTheme.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createTheme.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMuiTheme": function() { return /* binding */ createMuiTheme; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _createBreakpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createBreakpoints */ "./node_modules/@material-ui/core/esm/styles/createBreakpoints.js");
/* harmony import */ var _createMixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createMixins */ "./node_modules/@material-ui/core/esm/styles/createMixins.js");
/* harmony import */ var _createPalette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createPalette */ "./node_modules/@material-ui/core/esm/styles/createPalette.js");
/* harmony import */ var _createTypography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./createTypography */ "./node_modules/@material-ui/core/esm/styles/createTypography.js");
/* harmony import */ var _shadows__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shadows */ "./node_modules/@material-ui/core/esm/styles/shadows.js");
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shape */ "./node_modules/@material-ui/core/esm/styles/shape.js");
/* harmony import */ var _createSpacing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createSpacing */ "./node_modules/@material-ui/core/esm/styles/createSpacing.js");
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./transitions */ "./node_modules/@material-ui/core/esm/styles/transitions.js");
/* harmony import */ var _zIndex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./zIndex */ "./node_modules/@material-ui/core/esm/styles/zIndex.js");













function createTheme() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _options$breakpoints = options.breakpoints,
      breakpointsInput = _options$breakpoints === void 0 ? {} : _options$breakpoints,
      _options$mixins = options.mixins,
      mixinsInput = _options$mixins === void 0 ? {} : _options$mixins,
      _options$palette = options.palette,
      paletteInput = _options$palette === void 0 ? {} : _options$palette,
      spacingInput = options.spacing,
      _options$typography = options.typography,
      typographyInput = _options$typography === void 0 ? {} : _options$typography,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(options, ["breakpoints", "mixins", "palette", "spacing", "typography"]);

  var palette = (0,_createPalette__WEBPACK_IMPORTED_MODULE_3__.default)(paletteInput);
  var breakpoints = (0,_createBreakpoints__WEBPACK_IMPORTED_MODULE_4__.default)(breakpointsInput);
  var spacing = (0,_createSpacing__WEBPACK_IMPORTED_MODULE_5__.default)(spacingInput);
  var muiTheme = (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__.deepmerge)({
    breakpoints: breakpoints,
    direction: 'ltr',
    mixins: (0,_createMixins__WEBPACK_IMPORTED_MODULE_6__.default)(breakpoints, spacing, mixinsInput),
    overrides: {},
    // Inject custom styles
    palette: palette,
    props: {},
    // Provide default props
    shadows: _shadows__WEBPACK_IMPORTED_MODULE_7__.default,
    typography: (0,_createTypography__WEBPACK_IMPORTED_MODULE_8__.default)(palette, typographyInput),
    spacing: spacing,
    shape: _shape__WEBPACK_IMPORTED_MODULE_9__.default,
    transitions: _transitions__WEBPACK_IMPORTED_MODULE_10__.default,
    zIndex: _zIndex__WEBPACK_IMPORTED_MODULE_11__.default
  }, other);

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  muiTheme = args.reduce(function (acc, argument) {
    return (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__.deepmerge)(acc, argument);
  }, muiTheme);

  if (true) {
    var pseudoClasses = ['checked', 'disabled', 'error', 'focused', 'focusVisible', 'required', 'expanded', 'selected'];

    var traverse = function traverse(node, parentKey) {
      var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var key; // eslint-disable-next-line guard-for-in, no-restricted-syntax

      for (key in node) {
        var child = node[key];

        if (depth === 1) {
          if (key.indexOf('Mui') === 0 && child) {
            traverse(child, key, depth + 1);
          }
        } else if (pseudoClasses.indexOf(key) !== -1 && Object.keys(child).length > 0) {
          if (true) {
            console.error(["Material-UI: The `".concat(parentKey, "` component increases ") + "the CSS specificity of the `".concat(key, "` internal state."), 'You can not override it like this: ', JSON.stringify(node, null, 2), '', 'Instead, you need to use the $ruleName syntax:', JSON.stringify({
              root: (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, "&$".concat(key), child)
            }, null, 2), '', 'https://material-ui.com/r/pseudo-classes-guide'].join('\n'));
          } // Remove the style to prevent global conflicts.


          node[key] = {};
        }
      }
    };

    traverse(muiTheme.overrides);
  }

  return muiTheme;
}

var warnedOnce = false;
function createMuiTheme() {
  if (true) {
    if (!warnedOnce) {
      warnedOnce = true;
      console.error(['Material-UI: the createMuiTheme function was renamed to createTheme.', '', "You should use `import { createTheme } from '@material-ui/core/styles'`"].join('\n'));
    }
  }

  return createTheme.apply(void 0, arguments);
}
/* harmony default export */ __webpack_exports__["default"] = (createTheme);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createTypography.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createTypography.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createTypography; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__);




function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

var warnedOnce = false;

function roundWithDeprecationWarning(value) {
  if (true) {
    if (!warnedOnce) {
      console.warn(['Material-UI: The `theme.typography.round` helper is deprecated.', 'Head to https://material-ui.com/r/migration-v4/#theme for a migration path.'].join('\n'));
      warnedOnce = true;
    }
  }

  return round(value);
}

var caseAllCaps = {
  textTransform: 'uppercase'
};
var defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
/**
 * @see @link{https://material.io/design/typography/the-type-system.html}
 * @see @link{https://material.io/design/typography/understanding-typography.html}
 */

function createTypography(palette, typography) {
  var _ref = typeof typography === 'function' ? typography(palette) : typography,
      _ref$fontFamily = _ref.fontFamily,
      fontFamily = _ref$fontFamily === void 0 ? defaultFontFamily : _ref$fontFamily,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 14 : _ref$fontSize,
      _ref$fontWeightLight = _ref.fontWeightLight,
      fontWeightLight = _ref$fontWeightLight === void 0 ? 300 : _ref$fontWeightLight,
      _ref$fontWeightRegula = _ref.fontWeightRegular,
      fontWeightRegular = _ref$fontWeightRegula === void 0 ? 400 : _ref$fontWeightRegula,
      _ref$fontWeightMedium = _ref.fontWeightMedium,
      fontWeightMedium = _ref$fontWeightMedium === void 0 ? 500 : _ref$fontWeightMedium,
      _ref$fontWeightBold = _ref.fontWeightBold,
      fontWeightBold = _ref$fontWeightBold === void 0 ? 700 : _ref$fontWeightBold,
      _ref$htmlFontSize = _ref.htmlFontSize,
      htmlFontSize = _ref$htmlFontSize === void 0 ? 16 : _ref$htmlFontSize,
      allVariants = _ref.allVariants,
      pxToRem2 = _ref.pxToRem,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"]);

  if (true) {
    if (typeof fontSize !== 'number') {
      console.error('Material-UI: `fontSize` is required to be a number.');
    }

    if (typeof htmlFontSize !== 'number') {
      console.error('Material-UI: `htmlFontSize` is required to be a number.');
    }
  }

  var coef = fontSize / 14;

  var pxToRem = pxToRem2 || function (size) {
    return "".concat(size / htmlFontSize * coef, "rem");
  };

  var buildVariant = function buildVariant(fontWeight, size, lineHeight, letterSpacing, casing) {
    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      fontSize: pxToRem(size),
      // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
      lineHeight: lineHeight
    }, fontFamily === defaultFontFamily ? {
      letterSpacing: "".concat(round(letterSpacing / size), "em")
    } : {}, casing, allVariants);
  };

  var variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
  };
  return (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__.deepmerge)((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    htmlFontSize: htmlFontSize,
    pxToRem: pxToRem,
    round: roundWithDeprecationWarning,
    // TODO v5: remove
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeightLight: fontWeightLight,
    fontWeightRegular: fontWeightRegular,
    fontWeightMedium: fontWeightMedium,
    fontWeightBold: fontWeightBold
  }, variants), other, {
    clone: false // No need to clone deep

  });
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/cssUtils.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/cssUtils.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isUnitless": function() { return /* binding */ isUnitless; },
/* harmony export */   "getUnit": function() { return /* binding */ getUnit; },
/* harmony export */   "toUnitless": function() { return /* binding */ toUnitless; },
/* harmony export */   "convertLength": function() { return /* binding */ convertLength; },
/* harmony export */   "alignProperty": function() { return /* binding */ alignProperty; },
/* harmony export */   "fontGrid": function() { return /* binding */ fontGrid; },
/* harmony export */   "responsiveProperty": function() { return /* binding */ responsiveProperty; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function isUnitless(value) {
  return String(parseFloat(value)).length === String(value).length;
} // Ported from Compass
// https://github.com/Compass/compass/blob/master/core/stylesheets/compass/typography/_units.scss
// Emulate the sass function "unit"

function getUnit(input) {
  return String(input).match(/[\d.\-+]*\s*(.*)/)[1] || '';
} // Emulate the sass function "unitless"

function toUnitless(length) {
  return parseFloat(length);
} // Convert any CSS <length> or <percentage> value to any another.
// From https://github.com/KyleAMathews/convert-css-length

function convertLength(baseFontSize) {
  return function (length, toUnit) {
    var fromUnit = getUnit(length); // Optimize for cases where `from` and `to` units are accidentally the same.

    if (fromUnit === toUnit) {
      return length;
    } // Convert input length to pixels.


    var pxLength = toUnitless(length);

    if (fromUnit !== 'px') {
      if (fromUnit === 'em') {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
      } else if (fromUnit === 'rem') {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
        return length;
      }
    } // Convert length in pixels to the output unit


    var outputLength = pxLength;

    if (toUnit !== 'px') {
      if (toUnit === 'em') {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else if (toUnit === 'rem') {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else {
        return length;
      }
    }

    return parseFloat(outputLength.toFixed(5)) + toUnit;
  };
}
function alignProperty(_ref) {
  var size = _ref.size,
      grid = _ref.grid;
  var sizeBelow = size - size % grid;
  var sizeAbove = sizeBelow + grid;
  return size - sizeBelow < sizeAbove - size ? sizeBelow : sizeAbove;
} // fontGrid finds a minimal grid (in rem) for the fontSize values so that the
// lineHeight falls under a x pixels grid, 4px in the case of Material Design,
// without changing the relative line height

function fontGrid(_ref2) {
  var lineHeight = _ref2.lineHeight,
      pixels = _ref2.pixels,
      htmlFontSize = _ref2.htmlFontSize;
  return pixels / (lineHeight * htmlFontSize);
}
/**
 * generate a responsive version of a given CSS property
 * @example
 * responsiveProperty({
 *   cssProperty: 'fontSize',
 *   min: 15,
 *   max: 20,
 *   unit: 'px',
 *   breakpoints: [300, 600],
 * })
 *
 * // this returns
 *
 * {
 *   fontSize: '15px',
 *   '@media (min-width:300px)': {
 *     fontSize: '17.5px',
 *   },
 *   '@media (min-width:600px)': {
 *     fontSize: '20px',
 *   },
 * }
 *
 * @param {Object} params
 * @param {string} params.cssProperty - The CSS property to be made responsive
 * @param {number} params.min - The smallest value of the CSS property
 * @param {number} params.max - The largest value of the CSS property
 * @param {string} [params.unit] - The unit to be used for the CSS property
 * @param {Array.number} [params.breakpoints]  - An array of breakpoints
 * @param {number} [params.alignStep] - Round scaled value to fall under this grid
 * @returns {Object} responsive styles for {params.cssProperty}
 */

function responsiveProperty(_ref3) {
  var cssProperty = _ref3.cssProperty,
      min = _ref3.min,
      max = _ref3.max,
      _ref3$unit = _ref3.unit,
      unit = _ref3$unit === void 0 ? 'rem' : _ref3$unit,
      _ref3$breakpoints = _ref3.breakpoints,
      breakpoints = _ref3$breakpoints === void 0 ? [600, 960, 1280] : _ref3$breakpoints,
      _ref3$transform = _ref3.transform,
      transform = _ref3$transform === void 0 ? null : _ref3$transform;

  var output = (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, cssProperty, "".concat(min).concat(unit));

  var factor = (max - min) / breakpoints[breakpoints.length - 1];
  breakpoints.forEach(function (breakpoint) {
    var value = min + factor * breakpoint;

    if (transform !== null) {
      value = transform(value);
    }

    output["@media (min-width:".concat(breakpoint, "px)")] = (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, cssProperty, "".concat(Math.round(value * 10000) / 10000).concat(unit));
  });
  return output;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/defaultTheme.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTheme */ "./node_modules/@material-ui/core/esm/styles/createTheme.js");

var defaultTheme = (0,_createTheme__WEBPACK_IMPORTED_MODULE_0__.default)();
/* harmony default export */ __webpack_exports__["default"] = (defaultTheme);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTheme": function() { return /* reexport safe */ _createTheme__WEBPACK_IMPORTED_MODULE_1__.default; },
/* harmony export */   "createMuiTheme": function() { return /* reexport safe */ _createTheme__WEBPACK_IMPORTED_MODULE_1__.createMuiTheme; },
/* harmony export */   "unstable_createMuiStrictModeTheme": function() { return /* reexport safe */ _createMuiStrictModeTheme__WEBPACK_IMPORTED_MODULE_2__.default; },
/* harmony export */   "createStyles": function() { return /* reexport safe */ _createStyles__WEBPACK_IMPORTED_MODULE_3__.default; },
/* harmony export */   "makeStyles": function() { return /* reexport safe */ _makeStyles__WEBPACK_IMPORTED_MODULE_4__.default; },
/* harmony export */   "responsiveFontSizes": function() { return /* reexport safe */ _responsiveFontSizes__WEBPACK_IMPORTED_MODULE_5__.default; },
/* harmony export */   "styled": function() { return /* reexport safe */ _styled__WEBPACK_IMPORTED_MODULE_6__.default; },
/* harmony export */   "useTheme": function() { return /* reexport safe */ _useTheme__WEBPACK_IMPORTED_MODULE_8__.default; },
/* harmony export */   "withStyles": function() { return /* reexport safe */ _withStyles__WEBPACK_IMPORTED_MODULE_9__.default; },
/* harmony export */   "withTheme": function() { return /* reexport safe */ _withTheme__WEBPACK_IMPORTED_MODULE_10__.default; },
/* harmony export */   "createGenerateClassName": function() { return /* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.createGenerateClassName; },
/* harmony export */   "jssPreset": function() { return /* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.jssPreset; },
/* harmony export */   "ServerStyleSheets": function() { return /* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.ServerStyleSheets; },
/* harmony export */   "StylesProvider": function() { return /* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.StylesProvider; },
/* harmony export */   "MuiThemeProvider": function() { return /* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.ThemeProvider; },
/* harmony export */   "ThemeProvider": function() { return /* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.ThemeProvider; }
/* harmony export */ });
/* harmony import */ var _colorManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _colorManipulator__WEBPACK_IMPORTED_MODULE_0__) if(["default","createTheme","createMuiTheme","unstable_createMuiStrictModeTheme","createStyles","makeStyles","responsiveFontSizes","styled","useTheme","withStyles","withTheme","createGenerateClassName","jssPreset","ServerStyleSheets","StylesProvider","MuiThemeProvider","ThemeProvider"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _createTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTheme */ "./node_modules/@material-ui/core/esm/styles/createTheme.js");
/* harmony import */ var _createMuiStrictModeTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createMuiStrictModeTheme */ "./node_modules/@material-ui/core/esm/styles/createMuiStrictModeTheme.js");
/* harmony import */ var _createStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createStyles */ "./node_modules/@material-ui/core/esm/styles/createStyles.js");
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./makeStyles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _responsiveFontSizes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./responsiveFontSizes */ "./node_modules/@material-ui/core/esm/styles/responsiveFontSizes.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styled */ "./node_modules/@material-ui/core/esm/styles/styled.js");
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transitions */ "./node_modules/@material-ui/core/esm/styles/transitions.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _transitions__WEBPACK_IMPORTED_MODULE_7__) if(["default","createTheme","createMuiTheme","unstable_createMuiStrictModeTheme","createStyles","makeStyles","responsiveFontSizes","styled","useTheme","withStyles","withTheme","createGenerateClassName","jssPreset","ServerStyleSheets","StylesProvider","MuiThemeProvider","ThemeProvider"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _transitions__WEBPACK_IMPORTED_MODULE_7__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _withTheme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./withTheme */ "./node_modules/@material-ui/core/esm/styles/withTheme.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_11__);

 // eslint-disable-next-line camelcase












/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/makeStyles.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/makeStyles.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");




function makeStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(stylesOrCreator, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_2__.default
  }, options));
}

/* harmony default export */ __webpack_exports__["default"] = (makeStyles);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/responsiveFontSizes.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/responsiveFontSizes.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ responsiveFontSizes; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cssUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cssUtils */ "./node_modules/@material-ui/core/esm/styles/cssUtils.js");



function responsiveFontSizes(themeInput) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$breakpoints = options.breakpoints,
      breakpoints = _options$breakpoints === void 0 ? ['sm', 'md', 'lg'] : _options$breakpoints,
      _options$disableAlign = options.disableAlign,
      disableAlign = _options$disableAlign === void 0 ? false : _options$disableAlign,
      _options$factor = options.factor,
      factor = _options$factor === void 0 ? 2 : _options$factor,
      _options$variants = options.variants,
      variants = _options$variants === void 0 ? ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline'] : _options$variants;

  var theme = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, themeInput);

  theme.typography = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, theme.typography);
  var typography = theme.typography; // Convert between css lengths e.g. em->px or px->rem
  // Set the baseFontSize for your project. Defaults to 16px (also the browser default).

  var convert = (0,_cssUtils__WEBPACK_IMPORTED_MODULE_2__.convertLength)(typography.htmlFontSize);
  var breakpointValues = breakpoints.map(function (x) {
    return theme.breakpoints.values[x];
  });
  variants.forEach(function (variant) {
    var style = typography[variant];
    var remFontSize = parseFloat(convert(style.fontSize, 'rem'));

    if (remFontSize <= 1) {
      return;
    }

    var maxFontSize = remFontSize;
    var minFontSize = 1 + (maxFontSize - 1) / factor;
    var lineHeight = style.lineHeight;

    if (!(0,_cssUtils__WEBPACK_IMPORTED_MODULE_2__.isUnitless)(lineHeight) && !disableAlign) {
      throw new Error( true ? "Material-UI: Unsupported non-unitless line height with grid alignment.\nUse unitless line heights instead." : 0);
    }

    if (!(0,_cssUtils__WEBPACK_IMPORTED_MODULE_2__.isUnitless)(lineHeight)) {
      // make it unitless
      lineHeight = parseFloat(convert(lineHeight, 'rem')) / parseFloat(remFontSize);
    }

    var transform = null;

    if (!disableAlign) {
      transform = function transform(value) {
        return (0,_cssUtils__WEBPACK_IMPORTED_MODULE_2__.alignProperty)({
          size: value,
          grid: (0,_cssUtils__WEBPACK_IMPORTED_MODULE_2__.fontGrid)({
            pixels: 4,
            lineHeight: lineHeight,
            htmlFontSize: typography.htmlFontSize
          })
        });
      };
    }

    typography[variant] = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, style, (0,_cssUtils__WEBPACK_IMPORTED_MODULE_2__.responsiveProperty)({
      cssProperty: 'fontSize',
      min: minFontSize,
      max: maxFontSize,
      unit: 'rem',
      breakpoints: breakpointValues,
      transform: transform
    }));
  });
  return theme;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/shadows.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/shadows.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var shadowKeyUmbraOpacity = 0.2;
var shadowKeyPenumbraOpacity = 0.14;
var shadowAmbientShadowOpacity = 0.12;

function createShadow() {
  return ["".concat(arguments.length <= 0 ? undefined : arguments[0], "px ").concat(arguments.length <= 1 ? undefined : arguments[1], "px ").concat(arguments.length <= 2 ? undefined : arguments[2], "px ").concat(arguments.length <= 3 ? undefined : arguments[3], "px rgba(0,0,0,").concat(shadowKeyUmbraOpacity, ")"), "".concat(arguments.length <= 4 ? undefined : arguments[4], "px ").concat(arguments.length <= 5 ? undefined : arguments[5], "px ").concat(arguments.length <= 6 ? undefined : arguments[6], "px ").concat(arguments.length <= 7 ? undefined : arguments[7], "px rgba(0,0,0,").concat(shadowKeyPenumbraOpacity, ")"), "".concat(arguments.length <= 8 ? undefined : arguments[8], "px ").concat(arguments.length <= 9 ? undefined : arguments[9], "px ").concat(arguments.length <= 10 ? undefined : arguments[10], "px ").concat(arguments.length <= 11 ? undefined : arguments[11], "px rgba(0,0,0,").concat(shadowAmbientShadowOpacity, ")")].join(',');
} // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss


var shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
/* harmony default export */ __webpack_exports__["default"] = (shadows);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/shape.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/shape.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var shape = {
  borderRadius: 4
};
/* harmony default export */ __webpack_exports__["default"] = (shape);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/styled.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/styled.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");




var styled = function styled(Component) {
  var componentCreator = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__.styled)(Component);
  return function (style, options) {
    return componentCreator(style, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_2__.default
    }, options));
  };
};

/* harmony default export */ __webpack_exports__["default"] = (styled);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/transitions.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/transitions.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "easing": function() { return /* binding */ easing; },
/* harmony export */   "duration": function() { return /* binding */ duration; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");

// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.
var easing = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
}; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing

var duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};

function formatMs(milliseconds) {
  return "".concat(Math.round(milliseconds), "ms");
}
/**
 * @param {string|Array} props
 * @param {object} param
 * @param {string} param.prop
 * @param {number} param.duration
 * @param {string} param.easing
 * @param {number} param.delay
 */


/* harmony default export */ __webpack_exports__["default"] = ({
  easing: easing,
  duration: duration,
  create: function create() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['all'];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _options$duration = options.duration,
        durationOption = _options$duration === void 0 ? duration.standard : _options$duration,
        _options$easing = options.easing,
        easingOption = _options$easing === void 0 ? easing.easeInOut : _options$easing,
        _options$delay = options.delay,
        delay = _options$delay === void 0 ? 0 : _options$delay,
        other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(options, ["duration", "easing", "delay"]);

    if (true) {
      var isString = function isString(value) {
        return typeof value === 'string';
      };

      var isNumber = function isNumber(value) {
        return !isNaN(parseFloat(value));
      };

      if (!isString(props) && !Array.isArray(props)) {
        console.error('Material-UI: Argument "props" must be a string or Array.');
      }

      if (!isNumber(durationOption) && !isString(durationOption)) {
        console.error("Material-UI: Argument \"duration\" must be a number or a string but found ".concat(durationOption, "."));
      }

      if (!isString(easingOption)) {
        console.error('Material-UI: Argument "easing" must be a string.');
      }

      if (!isNumber(delay) && !isString(delay)) {
        console.error('Material-UI: Argument "delay" must be a number or a string.');
      }

      if (Object.keys(other).length !== 0) {
        console.error("Material-UI: Unrecognized argument(s) [".concat(Object.keys(other).join(','), "]."));
      }
    }

    return (Array.isArray(props) ? props : [props]).map(function (animatedProp) {
      return "".concat(animatedProp, " ").concat(typeof durationOption === 'string' ? durationOption : formatMs(durationOption), " ").concat(easingOption, " ").concat(typeof delay === 'string' ? delay : formatMs(delay));
    }).join(',');
  },
  getAutoHeightDuration: function getAutoHeightDuration(height) {
    if (!height) {
      return 0;
    }

    var constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

    return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
  }
});

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/useTheme.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/useTheme.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useTheme; }
/* harmony export */ });
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");



function useTheme() {
  var theme = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__.useTheme)() || _defaultTheme__WEBPACK_IMPORTED_MODULE_2__.default;

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_1___default().useDebugValue(theme);
  }

  return theme;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/withStyles.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/withStyles.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");




function withStyles(stylesOrCreator, options) {
  return (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__.withStyles)(stylesOrCreator, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_2__.default
  }, options));
}

/* harmony default export */ __webpack_exports__["default"] = (withStyles);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/withTheme.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/withTheme.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");


var withTheme = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__.withThemeCreator)({
  defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_1__.default
});
/* harmony default export */ __webpack_exports__["default"] = (withTheme);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/zIndex.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/zIndex.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// We need to centralize the zIndex definitions as they work
// like global values in the browser.
var zIndex = {
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
/* harmony default export */ __webpack_exports__["default"] = (zIndex);

/***/ }),

/***/ "./node_modules/next/dist/client/head-manager.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/head-manager.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.default = initHeadManager;
exports.DOMAttributeNames = void 0;
const DOMAttributeNames = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv',
  noModule: 'noModule'
};
exports.DOMAttributeNames = DOMAttributeNames;

function reactElementToDOM({
  type,
  props
}) {
  const el = document.createElement(type);

  for (const p in props) {
    if (!props.hasOwnProperty(p)) continue;
    if (p === 'children' || p === 'dangerouslySetInnerHTML') continue; // we don't render undefined props to the DOM

    if (props[p] === undefined) continue;
    const attr = DOMAttributeNames[p] || p.toLowerCase();

    if (type === 'script' && (attr === 'async' || attr === 'defer' || attr === 'noModule')) {
      ;
      el[attr] = !!props[p];
    } else {
      el.setAttribute(attr, props[p]);
    }
  }

  const {
    children,
    dangerouslySetInnerHTML
  } = props;

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  }

  return el;
}

function updateElements(type, components) {
  const headEl = document.getElementsByTagName('head')[0];
  const headCountEl = headEl.querySelector('meta[name=next-head-count]');

  if (true) {
    if (!headCountEl) {
      console.error('Warning: next-head-count is missing. https://nextjs.org/docs/messages/next-head-count-missing');
      return;
    }
  }

  const headCount = Number(headCountEl.content);
  const oldTags = [];

  for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = j.previousElementSibling) {
    if (j.tagName.toLowerCase() === type) {
      oldTags.push(j);
    }
  }

  const newTags = components.map(reactElementToDOM).filter(newTag => {
    for (let k = 0, len = oldTags.length; k < len; k++) {
      const oldTag = oldTags[k];

      if (oldTag.isEqualNode(newTag)) {
        oldTags.splice(k, 1);
        return false;
      }
    }

    return true;
  });
  oldTags.forEach(t => t.parentNode.removeChild(t));
  newTags.forEach(t => headEl.insertBefore(t, headCountEl));
  headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
}

function initHeadManager() {
  let updatePromise = null;
  return {
    mountedInstances: new Set(),
    updateHead: head => {
      const promise = updatePromise = Promise.resolve().then(() => {
        if (promise !== updatePromise) return;
        updatePromise = null;
        const tags = {};
        head.forEach(h => {
          if ( // If the font tag is loaded only on client navigation
          // it won't be inlined. In this case revert to the original behavior
          h.type === 'link' && h.props['data-optimized-fonts'] && !document.querySelector(`style[data-href="${h.props['data-href']}"]`)) {
            h.props.href = h.props['data-href'];
            h.props['data-href'] = undefined;
          }

          const components = tags[h.type] || [];
          components.push(h);
          tags[h.type] = components;
        });
        const titleComponent = tags.title ? tags.title[0] : null;
        let title = '';

        if (titleComponent) {
          const {
            children
          } = titleComponent.props;
          title = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
        }

        if (title !== document.title) document.title = title;
        ['meta', 'base', 'link', 'style', 'script'].forEach(type => {
          updateElements(type, tags[type] || []);
        });
      });
    }
  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/script.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/script.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.initScriptLoader = initScriptLoader;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _react = __webpack_require__(/*! react */ "react");

var _headManagerContext = __webpack_require__(/*! ../next-server/lib/head-manager-context */ "../next-server/lib/head-manager-context");

var _headManager = __webpack_require__(/*! ./head-manager */ "./node_modules/next/dist/client/head-manager.js");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const ScriptCache = new Map();
const LoadCache = new Set();
const ignoreProps = ['onLoad', 'dangerouslySetInnerHTML', 'children', 'onError', 'strategy'];

const loadScript = props => {
  const {
    src,
    id,
    onLoad = () => {},
    dangerouslySetInnerHTML,
    children = '',
    onError
  } = props;
  const cacheKey = id || src;

  if (ScriptCache.has(src)) {
    if (!LoadCache.has(cacheKey)) {
      LoadCache.add(cacheKey); // Execute onLoad since the script loading has begun

      ScriptCache.get(src).then(onLoad, onError);
    }

    return;
  }

  const el = document.createElement('script');
  const loadPromise = new Promise((resolve, reject) => {
    el.addEventListener('load', function () {
      resolve();

      if (onLoad) {
        onLoad.call(this);
      }
    });
    el.addEventListener('error', function () {
      reject();

      if (onError) {
        onError();
      }
    });
  });

  if (src) {
    ScriptCache.set(src, loadPromise);
    LoadCache.add(cacheKey);
  }

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  } else if (src) {
    el.src = src;
  }

  for (const [k, value] of Object.entries(props)) {
    if (value === undefined || ignoreProps.includes(k)) {
      continue;
    }

    const attr = _headManager.DOMAttributeNames[k] || k.toLowerCase();
    el.setAttribute(attr, value);
  }

  document.body.appendChild(el);
};

function handleClientScriptLoad(props) {
  const {
    strategy = 'afterInteractive'
  } = props;

  if (strategy === 'afterInteractive') {
    loadScript(props);
  } else if (strategy === 'lazyOnload') {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback.requestIdleCallback)(() => loadScript(props));
    });
  }
}

function loadLazyScript(props) {
  if (document.readyState === 'complete') {
    (0, _requestIdleCallback.requestIdleCallback)(() => loadScript(props));
  } else {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback.requestIdleCallback)(() => loadScript(props));
    });
  }
}

function initScriptLoader(scriptLoaderItems) {
  scriptLoaderItems.forEach(handleClientScriptLoad);
}

function Script(props) {
  const {
    src = '',
    onLoad = () => {},
    strategy = 'afterInteractive',
    onError
  } = props,
        restProps = (0, _objectWithoutPropertiesLoose2.default)(props, ["src", "onLoad", "dangerouslySetInnerHTML", "strategy", "onError"]); // Context is available only during SSR

  const {
    updateScripts,
    scripts
  } = (0, _react.useContext)(_headManagerContext.HeadManagerContext);
  (0, _react.useEffect)(() => {
    if (strategy === 'afterInteractive') {
      loadScript(props);
    } else if (strategy === 'lazyOnload') {
      loadLazyScript(props);
    }
  }, [props, strategy]);

  if (strategy === 'beforeInteractive') {
    if (updateScripts) {
      scripts.beforeInteractive = (scripts.beforeInteractive || []).concat([(0, _extends2.default)({
        src,
        onLoad,
        onError
      }, restProps)]);
      updateScripts(scripts);
    }
  }

  return null;
}

var _default = Script;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

exports.__esModule = true;
exports.Html = Html;
exports.Main = Main;
exports.NextScript = exports.Head = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));

var _constants = __webpack_require__(/*! ../next-server/lib/constants */ "../next-server/lib/constants");

var _documentContext = __webpack_require__(/*! ../next-server/lib/document-context */ "../next-server/lib/document-context");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _getPageFiles = __webpack_require__(/*! ../next-server/server/get-page-files */ "../next-server/server/get-page-files");

var _utils2 = __webpack_require__(/*! ../next-server/server/utils */ "../next-server/server/utils");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "./node_modules/next/dist/server/htmlescape.js");

var _script = _interopRequireDefault(__webpack_require__(/*! ../client/script */ "./node_modules/next/dist/client/script.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function getDocumentFiles(buildManifest, pathname, inAmpMode) {
  const sharedFiles = (0, _getPageFiles.getPageFiles)(buildManifest, '/_app');
  const pageFiles = inAmpMode ? [] : (0, _getPageFiles.getPageFiles)(buildManifest, pathname);
  return {
    sharedFiles,
    pageFiles,
    allFiles: [...new Set([...sharedFiles, ...pageFiles])]
  };
}

function getPolyfillScripts(context, props) {
  // polyfills.js has to be rendered as nomodule without async
  // It also has to be the first script to load
  const {
    assetPrefix,
    buildManifest,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  return buildManifest.polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !polyfill.endsWith('.module.js')).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
    key: polyfill,
    defer: !disableOptimizedLoading,
    nonce: props.nonce,
    crossOrigin: props.crossOrigin || undefined,
    noModule: true,
    src: `${assetPrefix}/_next/${polyfill}${devOnlyCacheBusterQueryString}`
  }));
}

function getPreNextScripts(context, props) {
  const {
    scriptLoader,
    disableOptimizedLoading
  } = context;
  return (scriptLoader.beforeInteractive || []).map(file => {
    const {
      strategy
    } = file,
          scriptProps = _objectWithoutProperties(file, ["strategy"]);

    return /*#__PURE__*/_react.default.createElement("script", Object.assign({}, scriptProps, {
      defer: !disableOptimizedLoading,
      nonce: props.nonce,
      crossOrigin: props.crossOrigin || undefined
    }));
  });
}

function getDynamicChunks(context, props, files) {
  const {
    dynamicImports,
    assetPrefix,
    isDevelopment,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  return dynamicImports.map(file => {
    if (!file.endsWith('.js') || files.allFiles.includes(file)) return null;
    return /*#__PURE__*/_react.default.createElement("script", {
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: props.nonce,
      crossOrigin: props.crossOrigin || undefined
    });
  });
}

function getScripts(context, props, files) {
  var _buildManifest$lowPri;

  const {
    assetPrefix,
    buildManifest,
    isDevelopment,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  const normalScripts = files.allFiles.filter(file => file.endsWith('.js'));
  const lowPriorityScripts = (_buildManifest$lowPri = buildManifest.lowPriorityFiles) == null ? void 0 : _buildManifest$lowPri.filter(file => file.endsWith('.js'));
  return [...normalScripts, ...lowPriorityScripts].map(file => {
    return /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: props.nonce,
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      crossOrigin: props.crossOrigin || undefined
    });
  });
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhanceApp = App => {
      return props => /*#__PURE__*/_react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)()];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(DocumentComponent, props) {
    return /*#__PURE__*/_react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: props
    }, /*#__PURE__*/_react.default.createElement(DocumentComponent, props));
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;

function Html(props) {
  const {
    inAmpMode,
    docComponentsRendered,
    locale
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Html = true;
  return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, props, {
    lang: props.lang || locale || undefined,
    amp: inAmpMode ? '' : undefined,
    "data-ampdevmode": inAmpMode && true ? '' : undefined
  }));
}

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      dynamicImports
    } = this.context;
    const cssFiles = files.allFiles.filter(f => f.endsWith('.css'));
    const sharedFiles = new Set(files.sharedFiles); // Unmanaged files are CSS files that will be handled directly by the
    // webpack runtime (`mini-css-extract-plugin`).

    let unmangedFiles = new Set([]);
    let dynamicCssFiles = Array.from(new Set(dynamicImports.filter(file => file.endsWith('.css'))));

    if (dynamicCssFiles.length) {
      const existing = new Set(cssFiles);
      dynamicCssFiles = dynamicCssFiles.filter(f => !(existing.has(f) || sharedFiles.has(f)));
      unmangedFiles = new Set(dynamicCssFiles);
      cssFiles.push(...dynamicCssFiles);
    }

    let cssLinkElements = [];
    cssFiles.forEach(file => {
      const isSharedFile = sharedFiles.has(file);

      if (true) {
        cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
          key: `${file}-preload`,
          nonce: this.props.nonce,
          rel: "preload",
          href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
          as: "style",
          crossOrigin: this.props.crossOrigin || undefined
        }));
      }

      const isUnmanagedFile = unmangedFiles.has(file);
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-n-g": isUnmanagedFile ? undefined : isSharedFile ? '' : undefined,
        "data-n-p": isUnmanagedFile ? undefined : isSharedFile ? undefined : ''
      }));
    });

    if (false) {}

    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dynamicImports.map(file => {
      if (!file.endsWith('.js')) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: file,
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      scriptLoader
    } = this.context;
    const preloadFiles = files.allFiles.filter(file => {
      return file.endsWith('.js');
    });
    return [...(scriptLoader.beforeInteractive || []).map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file.src,
      nonce: this.props.nonce,
      rel: "preload",
      href: file.src,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    })), ...preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }))];
  }

  getDynamicChunks(files) {
    return getDynamicChunks(this.context, this.props, files);
  }

  getPreNextScripts() {
    return getPreNextScripts(this.context, this.props);
  }

  getScripts(files) {
    return getScripts(this.context, this.props, files);
  }

  getPolyfillScripts() {
    return getPolyfillScripts(this.context, this.props);
  }

  handleDocumentScriptLoaderItems(children) {
    const {
      scriptLoader
    } = this.context;
    const scriptLoaderItems = [];
    const filteredChildren = [];

    _react.default.Children.forEach(children, child => {
      if (child.type === _script.default) {
        if (child.props.strategy === 'beforeInteractive') {
          scriptLoader.beforeInteractive = (scriptLoader.beforeInteractive || []).concat([_objectSpread({}, child.props)]);
          return;
        } else if (['lazyOnload', 'afterInteractive'].includes(child.props.strategy)) {
          scriptLoaderItems.push(child.props);
          return;
        }
      }

      filteredChildren.push(child);
    });

    this.context.__NEXT_DATA__.scriptLoader = scriptLoaderItems;
    return filteredChildren;
  }

  makeStylesheetInert(node) {
    return _react.default.Children.map(node, c => {
      if (c.type === 'link' && c.props['href'] && _constants.OPTIMIZED_FONT_PROVIDERS.some(({
        url
      }) => c.props['href'].startsWith(url))) {
        const newProps = _objectSpread({}, c.props || {});

        newProps['data-href'] = newProps['href'];
        newProps['href'] = undefined;
        return /*#__PURE__*/_react.default.cloneElement(c, newProps);
      } else if (c.props && c.props['children']) {
        c.props['children'] = this.makeStylesheetInert(c.props['children']);
      }

      return c;
    });
  }

  render() {
    var _this$props$nonce, _this$props$nonce2;

    const {
      styles,
      ampPath,
      inAmpMode,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS,
      unstable_JsPreload,
      disableOptimizedLoading
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const disableJsPreload = unstable_JsPreload === false || !disableOptimizedLoading;
    this.context.docComponentsRendered.Head = true;
    let {
      head
    } = this.context;
    let cssPreloads = [];
    let otherHeadElements = [];

    if (head) {
      head.forEach(c => {
        if (c && c.type === 'link' && c.props['rel'] === 'preload' && c.props['as'] === 'style') {
          cssPreloads.push(c);
        } else {
          c && otherHeadElements.push(c);
        }
      });
      head = cssPreloads.concat(otherHeadElements);
    }

    let children = _react.default.Children.toArray(this.props.children).filter(Boolean); // show a warning if Head contains <title> (only in development)


    if (true) {
      children = _react.default.Children.map(children, child => {
        var _child$props;

        const isReactHelmet = child == null ? void 0 : (_child$props = child.props) == null ? void 0 : _child$props['data-react-helmet'];

        if (!isReactHelmet) {
          var _child$props2;

          if ((child == null ? void 0 : child.type) === 'title') {
            console.warn("Warning: <title> should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-title");
          } else if ((child == null ? void 0 : child.type) === 'meta' && (child == null ? void 0 : (_child$props2 = child.props) == null ? void 0 : _child$props2.name) === 'viewport') {
            console.warn("Warning: viewport meta tags should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-viewport-meta");
          }
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated');
    }

    if (false) {}

    children = this.handleDocumentScriptLoaderItems(children);
    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://nextjs.org/docs/messages/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var _el$props, _el$props$dangerously;

        return el == null ? void 0 : (_el$props = el.props) == null ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) == null ? void 0 : _el$props$dangerously.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
    return /*#__PURE__*/_react.default.createElement("head", this.props, this.context.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children,  false && /*#__PURE__*/0, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }),  true && this.getCssLinks(files),  true && /*#__PURE__*/_react.default.createElement("noscript", {
      "data-n-css": (_this$props$nonce = this.props.nonce) != null ? _this$props$nonce : ''
    }),  false && /*#__PURE__*/0, !disableRuntimeJS && !disableJsPreload && this.getPreloadDynamicChunks(), !disableRuntimeJS && !disableJsPreload && this.getPreloadMainLinks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files),  false && 0,  false && /*#__PURE__*/0, this.context.isDevelopment &&
    /*#__PURE__*/
    // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

function Main() {
  const {
    inAmpMode,
    html,
    docComponentsRendered
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Main = true;
  if (inAmpMode) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _constants.AMP_RENDER_TARGET);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "__next",
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks(files) {
    return getDynamicChunks(this.context, this.props, files);
  }

  getPreNextScripts() {
    return getPreNextScripts(this.context, this.props);
  }

  getScripts(files) {
    return getScripts(this.context, this.props, files);
  }

  getPolyfillScripts() {
    return getPolyfillScripts(this.context, this.props);
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://nextjs.org/docs/messages/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      assetPrefix,
      inAmpMode,
      buildManifest,
      unstable_runtimeJS,
      docComponentsRendered,
      devOnlyCacheBusterQueryString,
      disableOptimizedLoading
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    docComponentsRendered.NextScript = true;

    if (inAmpMode) {
      if (false) {}

      const ampDevFiles = [...buildManifest.devFiles, ...buildManifest.polyfillFiles, ...buildManifest.ampDevFiles];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context)
        },
        "data-ampdevmode": true
      }), ampDevFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })));
    }

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated');
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context)
      }
    }), disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MyDocument; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _pages_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/theme */ "./pages/theme.js");

var _jsxFileName = "C:\\Users\\1\\Desktop\\React\\refactor\\pages\\_document.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_2___default()) {
  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Html, {
      lang: "en",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Head, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          name: "theme-color",
          content: _pages_theme__WEBPACK_IMPORTED_MODULE_3__.default.palette.primary.main
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("body", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Main, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.NextScript, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this);
  }

} // `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () => originalRenderPage({
    enhanceApp: App => props => sheets.collect( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(App, _objectSpread({}, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 54
    }, undefined))
  });

  const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_2___default().getInitialProps(ctx);
  return _objectSpread(_objectSpread({}, initialProps), {}, {
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...react__WEBPACK_IMPORTED_MODULE_1___default().Children.toArray(initialProps.styles), sheets.getStyleElement()]
  });
};

/***/ }),

/***/ "./pages/theme.js":
/*!************************!*\
  !*** ./pages/theme.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");

 // Create a theme instance.

const theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__.red.A400
    },
    background: {
      default: '#fff'
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./node_modules/next/dist/server/htmlescape.js":
/*!*****************************************************!*\
  !*** ./node_modules/next/dist/server/htmlescape.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}
//# sourceMappingURL=htmlescape.js.map

/***/ }),

/***/ "./node_modules/next/document.js":
/*!***************************************!*\
  !*** ./node_modules/next/document.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_document */ "./node_modules/next/dist/pages/_document.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/extends.js ***!
  \**************************************************************************/
/***/ (function(module) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \***********************************************************************************************/
/***/ (function(module) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/styles");;

/***/ }),

/***/ "@material-ui/system":
/*!**************************************!*\
  !*** external "@material-ui/system" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/system");;

/***/ }),

/***/ "@material-ui/utils":
/*!*************************************!*\
  !*** external "@material-ui/utils" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/utils");;

/***/ }),

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/constants.js");;

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/document-context.js");;

/***/ }),

/***/ "../next-server/lib/head-manager-context":
/*!********************************************************************!*\
  !*** external "next/dist/next-server/lib/head-manager-context.js" ***!
  \********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head-manager-context.js");;

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "../next-server/server/get-page-files":
/*!*****************************************************************!*\
  !*** external "next/dist/next-server/server/get-page-files.js" ***!
  \*****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/get-page-files.js");;

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/utils.js");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/server");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_document.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWZhY3Rvci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9yZWZhY3Rvci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwid2VicGFjazovL3JlZmFjdG9yLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL3JlZmFjdG9yLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vcmVmYWN0b3IvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9hbWJlci5qcyIsIndlYnBhY2s6Ly9yZWZhY3Rvci8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vY29sb3JzL2JsdWUuanMiLCJ3ZWJwYWNrOi8vcmVmYWN0b3IvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9ibHVlR3JleS5qcyIsIndlYnBhY2s6Ly9yZWZhY3Rvci8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vY29sb3JzL2Jyb3duLmpzIiwid2VicGFjazovL3JlZmFjdG9yLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9jb2xvcnMvY29tbW9uLmpzIiwid2VicGFjazovL3JlZmFjdG9yLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9jb2xvcnMvY3lhbi5qcyIsIndlYnBhY2s6Ly9yZWZhY3Rvci8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vY29sb3JzL2RlZXBPcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vcmVmYWN0b3IvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9kZWVwUHVycGxlLmpzIiwid2VicGFjazovL3JlZmFjdG9yLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9jb2xvcnMvZ3JlZW4uanMiLCJ3ZWJwYWNrOi8vcmVmYWN0b3IvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9ncmV5LmpzIiwid2VicGFjazovL3JlZmFjdG9yLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9jb2xvcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVmYWN0b3IvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9pbmRpZ28uanMiLCJ3ZWJwYWNrOi8vcmVmYWN0b3IvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9saWdodEJsdWUuanMiLCJ3ZWJwYWNrOi8vcmVmYWN0b3IvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9saWdodEdyZWVuLmpzIiwid2VicGFjazovL3JlZmFjdG9yLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9jb2xvcnMvbGltZS5qcyIsIndlYnBhY2s6Ly9yZWZhY3Rvci8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vY29sb3JzL29yYW5nZS5qcyIsIndlYnBhY2s6Ly9yZWZhY3Rvci8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vY29sb3JzL3BpbmsuanMiLCJ3ZWJwYWNrOi8vcmVmYWN0b3IvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9wdXJwbGUuanMiLCJ3ZWJwYWNrOi8vcmVmYWN0b3IvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9yZWQuanMiLCJ3ZWJwYWNrOi8vcmVmYWN0b3IvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy90ZWFsLmpzIiwid2VicGFjazovL3JlZmFjdG9yLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9jb2xvcnMveWVsbG93LmpzIiwid2VicGFjazovL3JlZmFjdG9yLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvY29sb3JNYW5pcHVsYXRvci5qcyIsIndlYnBhY2s6Ly9yZWZhY3Rvci8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZUJyZWFrcG9pbnRzLmpzIiwid2VicGFjazovL3JlZmFjdG9yLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvY3JlYXRlTWl4aW5zLmpzIiwid2VicGFjazovL3JlZmFjdG9yLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvY3JlYXRlTXVpU3RyaWN0TW9kZVRoZW1lLmpzIiwid2VicGFjazovL3JlZmFjdG9yLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvY3JlYXRlUGFsZXR0ZS5qcyIsIndlYnBhY2s6Ly9yZWZhY3Rvci8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZVNwYWNpbmcuanMiLCJ3ZWJwYWNrOi8vcmVmYWN0b3IvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9jcmVhdGVTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vcmVmYWN0b3IvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9jcmVhdGVUaGVtZS5qcyIsIndlYnBhY2s6Ly9yZWZhY3Rvci8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZVR5cG9ncmFwaHkuanMiLCJ3ZWJwYWNrOi8vcmVmYWN0b3IvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9jc3NVdGlscy5qcyIsIndlYnBhY2s6Ly9yZWZhY3Rvci8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2RlZmF1bHRUaGVtZS5qcyIsIndlYnBhY2s6Ly9yZWZhY3Rvci8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2luZGV4LmpzIiwid2VicGFjazovL3JlZmFjdG9yLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvbWFrZVN0eWxlcy5qcyIsIndlYnBhY2s6Ly9yZWZhY3Rvci8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3Jlc3BvbnNpdmVGb250U2l6ZXMuanMiLCJ3ZWJwYWNrOi8vcmVmYWN0b3IvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9zaGFkb3dzLmpzIiwid2VicGFjazovL3JlZmFjdG9yLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvc2hhcGUuanMiLCJ3ZWJwYWNrOi8vcmVmYWN0b3IvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9zdHlsZWQuanMiLCJ3ZWJwYWNrOi8vcmVmYWN0b3IvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy90cmFuc2l0aW9ucy5qcyIsIndlYnBhY2s6Ly9yZWZhY3Rvci8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3VzZVRoZW1lLmpzIiwid2VicGFjazovL3JlZmFjdG9yLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvd2l0aFN0eWxlcy5qcyIsIndlYnBhY2s6Ly9yZWZhY3Rvci8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3dpdGhUaGVtZS5qcyIsIndlYnBhY2s6Ly9yZWZhY3Rvci8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3pJbmRleC5qcyIsIndlYnBhY2s6Ly9yZWZhY3Rvci8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2hlYWQtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly9yZWZhY3Rvci8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9yZWZhY3Rvci8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9yZWZhY3Rvci8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2RvY3VtZW50LmpzIiwid2VicGFjazovL3JlZmFjdG9yLy4vcGFnZXMvX2RvY3VtZW50LmpzIiwid2VicGFjazovL3JlZmFjdG9yLy4vcGFnZXMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vcmVmYWN0b3IvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci9odG1sZXNjYXBlLmpzIiwid2VicGFjazovL3JlZmFjdG9yLy4vbm9kZV9tb2R1bGVzL25leHQvZG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVmYWN0b3IvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovL3JlZmFjdG9yLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL3JlZmFjdG9yLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly9yZWZhY3Rvci9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9zdHlsZXNcIiIsIndlYnBhY2s6Ly9yZWZhY3Rvci9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9zeXN0ZW1cIiIsIndlYnBhY2s6Ly9yZWZhY3Rvci9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS91dGlsc1wiIiwid2VicGFjazovL3JlZmFjdG9yL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIiIsIndlYnBhY2s6Ly9yZWZhY3Rvci9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvZG9jdW1lbnQtY29udGV4dC5qc1wiIiwid2VicGFjazovL3JlZmFjdG9yL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLW1hbmFnZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL3JlZmFjdG9yL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL3JlZmFjdG9yL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9nZXQtcGFnZS1maWxlcy5qc1wiIiwid2VicGFjazovL3JlZmFjdG9yL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci91dGlscy5qc1wiIiwid2VicGFjazovL3JlZmFjdG9yL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovL3JlZmFjdG9yL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9yZWZhY3Rvci9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3JlZmFjdG9yL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zZXJ2ZXJcIiJdLCJuYW1lcyI6WyJleHBvcnRzIiwiaW5pdEhlYWRNYW5hZ2VyIiwiRE9NQXR0cmlidXRlTmFtZXMiLCJhY2NlcHRDaGFyc2V0IiwiY2xhc3NOYW1lIiwiaHRtbEZvciIsImh0dHBFcXVpdiIsIm5vTW9kdWxlIiwicmVhY3RFbGVtZW50VG9ET00iLCJ0eXBlIiwicHJvcHMiLCJlbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInAiLCJoYXNPd25Qcm9wZXJ0eSIsInVuZGVmaW5lZCIsImF0dHIiLCJ0b0xvd2VyQ2FzZSIsInNldEF0dHJpYnV0ZSIsImNoaWxkcmVuIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJpbm5lckhUTUwiLCJfX2h0bWwiLCJ0ZXh0Q29udGVudCIsIkFycmF5IiwiaXNBcnJheSIsImpvaW4iLCJ1cGRhdGVFbGVtZW50cyIsImNvbXBvbmVudHMiLCJoZWFkRWwiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImhlYWRDb3VudEVsIiwicXVlcnlTZWxlY3RvciIsImNvbnNvbGUiLCJlcnJvciIsImhlYWRDb3VudCIsIk51bWJlciIsImNvbnRlbnQiLCJvbGRUYWdzIiwiaSIsImoiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwidGFnTmFtZSIsInB1c2giLCJuZXdUYWdzIiwibWFwIiwiZmlsdGVyIiwibmV3VGFnIiwiayIsImxlbiIsImxlbmd0aCIsIm9sZFRhZyIsImlzRXF1YWxOb2RlIiwic3BsaWNlIiwiZm9yRWFjaCIsInQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJ0b1N0cmluZyIsInVwZGF0ZVByb21pc2UiLCJtb3VudGVkSW5zdGFuY2VzIiwiU2V0IiwidXBkYXRlSGVhZCIsImhlYWQiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwidGFncyIsImgiLCJocmVmIiwidGl0bGVDb21wb25lbnQiLCJ0aXRsZSIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwiY2IiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwibWF4IiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiaWQiLCJjbGVhclRpbWVvdXQiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImluaXRTY3JpcHRMb2FkZXIiLCJfZXh0ZW5kczIiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIiLCJfcmVhY3QiLCJfaGVhZE1hbmFnZXJDb250ZXh0IiwiX2hlYWRNYW5hZ2VyIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJTY3JpcHRDYWNoZSIsIk1hcCIsIkxvYWRDYWNoZSIsImlnbm9yZVByb3BzIiwibG9hZFNjcmlwdCIsInNyYyIsIm9uTG9hZCIsIm9uRXJyb3IiLCJjYWNoZUtleSIsImhhcyIsImFkZCIsImdldCIsImxvYWRQcm9taXNlIiwicmVqZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbGwiLCJzZXQiLCJ2YWx1ZSIsIk9iamVjdCIsImVudHJpZXMiLCJpbmNsdWRlcyIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImhhbmRsZUNsaWVudFNjcmlwdExvYWQiLCJzdHJhdGVneSIsIndpbmRvdyIsImxvYWRMYXp5U2NyaXB0IiwicmVhZHlTdGF0ZSIsInNjcmlwdExvYWRlckl0ZW1zIiwiU2NyaXB0IiwicmVzdFByb3BzIiwiZGVmYXVsdCIsInVwZGF0ZVNjcmlwdHMiLCJzY3JpcHRzIiwidXNlQ29udGV4dCIsIkhlYWRNYW5hZ2VyQ29udGV4dCIsInVzZUVmZmVjdCIsImJlZm9yZUludGVyYWN0aXZlIiwiY29uY2F0IiwiX2RlZmF1bHQiLCJIdG1sIiwiTWFpbiIsIl9wcm9wVHlwZXMiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIl9zZXJ2ZXIiLCJfY29uc3RhbnRzIiwiX2RvY3VtZW50Q29udGV4dCIsIl91dGlscyIsIkRvY3VtZW50Q29udGV4dCIsIkRvY3VtZW50SW5pdGlhbFByb3BzIiwiRG9jdW1lbnRQcm9wcyIsIl9nZXRQYWdlRmlsZXMiLCJfdXRpbHMyIiwiX2h0bWxlc2NhcGUiLCJfc2NyaXB0IiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiV2Vha01hcCIsImNhY2hlIiwib2JqIiwiX19lc01vZHVsZSIsIm5ld09iaiIsImhhc1Byb3BlcnR5RGVzY3JpcHRvciIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwia2V5IiwicHJvdG90eXBlIiwiZGVzYyIsImdldERvY3VtZW50RmlsZXMiLCJidWlsZE1hbmlmZXN0IiwicGF0aG5hbWUiLCJpbkFtcE1vZGUiLCJzaGFyZWRGaWxlcyIsImdldFBhZ2VGaWxlcyIsInBhZ2VGaWxlcyIsImFsbEZpbGVzIiwiZ2V0UG9seWZpbGxTY3JpcHRzIiwiY29udGV4dCIsImFzc2V0UHJlZml4IiwiZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmciLCJkaXNhYmxlT3B0aW1pemVkTG9hZGluZyIsInBvbHlmaWxsRmlsZXMiLCJwb2x5ZmlsbCIsImVuZHNXaXRoIiwiZGVmZXIiLCJub25jZSIsImNyb3NzT3JpZ2luIiwicHJvY2VzcyIsImdldFByZU5leHRTY3JpcHRzIiwic2NyaXB0TG9hZGVyIiwiZmlsZSIsInNjcmlwdFByb3BzIiwiYXNzaWduIiwiX19ORVhUX0NST1NTX09SSUdJTiIsImdldER5bmFtaWNDaHVua3MiLCJmaWxlcyIsImR5bmFtaWNJbXBvcnRzIiwiaXNEZXZlbG9wbWVudCIsImFzeW5jIiwiZW5jb2RlVVJJIiwiZ2V0U2NyaXB0cyIsIl9idWlsZE1hbmlmZXN0JGxvd1ByaSIsIm5vcm1hbFNjcmlwdHMiLCJsb3dQcmlvcml0eVNjcmlwdHMiLCJsb3dQcmlvcml0eUZpbGVzIiwiRG9jdW1lbnQiLCJDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJlbmhhbmNlQXBwIiwiQXBwIiwiaHRtbCIsInJlbmRlclBhZ2UiLCJzdHlsZXMiLCJyZW5kZXJEb2N1bWVudCIsIkRvY3VtZW50Q29tcG9uZW50IiwiUHJvdmlkZXIiLCJyZW5kZXIiLCJIZWFkIiwiTmV4dFNjcmlwdCIsImRvY0NvbXBvbmVudHNSZW5kZXJlZCIsImxvY2FsZSIsImxhbmciLCJhbXAiLCJjb25zdHJ1Y3RvciIsImFyZ3MiLCJnZXRDc3NMaW5rcyIsImNzc0ZpbGVzIiwiZiIsInVubWFuZ2VkRmlsZXMiLCJkeW5hbWljQ3NzRmlsZXMiLCJmcm9tIiwiZXhpc3RpbmciLCJjc3NMaW5rRWxlbWVudHMiLCJpc1NoYXJlZEZpbGUiLCJyZWwiLCJhcyIsImlzVW5tYW5hZ2VkRmlsZSIsImdldFByZWxvYWREeW5hbWljQ2h1bmtzIiwiQm9vbGVhbiIsImdldFByZWxvYWRNYWluTGlua3MiLCJwcmVsb2FkRmlsZXMiLCJoYW5kbGVEb2N1bWVudFNjcmlwdExvYWRlckl0ZW1zIiwiZmlsdGVyZWRDaGlsZHJlbiIsIkNoaWxkcmVuIiwiY2hpbGQiLCJfX05FWFRfREFUQV9fIiwibWFrZVN0eWxlc2hlZXRJbmVydCIsIm5vZGUiLCJjIiwiT1BUSU1JWkVEX0ZPTlRfUFJPVklERVJTIiwic29tZSIsInVybCIsInN0YXJ0c1dpdGgiLCJuZXdQcm9wcyIsImNsb25lRWxlbWVudCIsIl90aGlzJHByb3BzJG5vbmNlIiwiX3RoaXMkcHJvcHMkbm9uY2UyIiwiYW1wUGF0aCIsImh5YnJpZEFtcCIsImNhbm9uaWNhbEJhc2UiLCJkYW5nZXJvdXNBc1BhdGgiLCJoZWFkVGFncyIsInVuc3RhYmxlX3J1bnRpbWVKUyIsInVuc3RhYmxlX0pzUHJlbG9hZCIsImRpc2FibGVSdW50aW1lSlMiLCJkaXNhYmxlSnNQcmVsb2FkIiwiY3NzUHJlbG9hZHMiLCJvdGhlckhlYWRFbGVtZW50cyIsInRvQXJyYXkiLCJfY2hpbGQkcHJvcHMiLCJpc1JlYWN0SGVsbWV0IiwiX2NoaWxkJHByb3BzMiIsIndhcm4iLCJuYW1lIiwiaGFzQW1waHRtbFJlbCIsImhhc0Nhbm9uaWNhbFJlbCIsImJhZFByb3AiLCJpbmRleE9mIiwia2V5cyIsInByb3AiLCJwYWdlIiwiY3VyU3R5bGVzIiwiaGFzU3R5bGVzIiwiX2VsJHByb3BzIiwiX2VsJHByb3BzJGRhbmdlcm91c2x5IiwiRnJhZ21lbnQiLCJjb3VudCIsImNsZWFuQW1wUGF0aCIsInN0eWxlIiwicmVwbGFjZSIsImdldEFtcFBhdGgiLCJjb250ZXh0VHlwZSIsInByb3BUeXBlcyIsInN0cmluZyIsIkFNUF9SRU5ERVJfVEFSR0VUIiwiZ2V0SW5saW5lU2NyaXB0U291cmNlIiwiZG9jdW1lbnRQcm9wcyIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiaHRtbEVzY2FwZUpzb25TdHJpbmciLCJlcnIiLCJtZXNzYWdlIiwiRXJyb3IiLCJhbXBEZXZGaWxlcyIsImRldkZpbGVzIiwic2FmYXJpTm9tb2R1bGVGaXgiLCJhc1BhdGgiLCJNeURvY3VtZW50IiwidGhlbWUiLCJtYWluIiwic2hlZXRzIiwiU2VydmVyU3R5bGVTaGVldHMiLCJvcmlnaW5hbFJlbmRlclBhZ2UiLCJjb2xsZWN0IiwiaW5pdGlhbFByb3BzIiwiUmVhY3QiLCJnZXRTdHlsZUVsZW1lbnQiLCJjcmVhdGVUaGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwicmVkIiwiQTQwMCIsImJhY2tncm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNiZTtBQUNmO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQjZFO0FBQzlEO0FBQ2Y7QUFDQSxlQUFlLHlFQUE0QjtBQUMzQzs7QUFFQTtBQUNBOztBQUVBLGVBQWUsNkJBQTZCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ2xCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsdUJBQXVCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBZSxLQUFLLEU7Ozs7Ozs7Ozs7OztBQ2hCcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBZSxJQUFJLEU7Ozs7Ozs7Ozs7OztBQ2hCbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBZSxRQUFRLEU7Ozs7Ozs7Ozs7OztBQ2hCdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBZSxLQUFLLEU7Ozs7Ozs7Ozs7OztBQ2hCcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBZSxNQUFNLEU7Ozs7Ozs7Ozs7OztBQ0pyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUFlLElBQUksRTs7Ozs7Ozs7Ozs7O0FDaEJuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUFlLFVBQVUsRTs7Ozs7Ozs7Ozs7O0FDaEJ6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUFlLFVBQVUsRTs7Ozs7Ozs7Ozs7O0FDaEJ6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUFlLEtBQUssRTs7Ozs7Ozs7Ozs7O0FDaEJwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUFlLElBQUksRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEIwQjtBQUNOO0FBQ0U7QUFDSTtBQUNRO0FBQ1I7QUFDSjtBQUNVO0FBQ1Y7QUFDQTtBQUNFO0FBQ1U7QUFDWjtBQUNJO0FBQ0Y7QUFDRTtBQUNRO0FBQ1Y7QUFDRjs7Ozs7Ozs7Ozs7OztBQ2xCekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBZSxNQUFNLEU7Ozs7Ozs7Ozs7OztBQ2hCckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBZSxTQUFTLEU7Ozs7Ozs7Ozs7OztBQ2hCeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBZSxVQUFVLEU7Ozs7Ozs7Ozs7OztBQ2hCekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBZSxJQUFJLEU7Ozs7Ozs7Ozs7OztBQ2hCbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBZSxNQUFNLEU7Ozs7Ozs7Ozs7OztBQ2hCckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBVVBDLGNBQVUsRUFBRTtBQUNWak0sYUFBTyxFQUFFO0FBREM7QUFWTDtBQURlLENBQUQsQ0FBekI7QUFpQkEsK0RBQWVrTCxLQUFmLEU7Ozs7Ozs7Ozs7O0FDckJhLGtCQUFrQixNQUFNLDRCQUE0QixzQkFBc0I7QUFDdkY7QUFDQSxxQkFBcUIsaUZBQWlGLHdDQUF3QyxtQ0FBbUM7QUFDakwsc0M7Ozs7Ozs7Ozs7QUNIQSxpSEFBa0Q7Ozs7Ozs7Ozs7O0FDQWxEO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEI7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwrQzs7Ozs7Ozs7Ozs7QUNmQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7QUNBQSwyRTs7Ozs7Ozs7Ozs7QUNBQSwrRTs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSw0RTs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9fZG9jdW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsImltcG9ydCBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCIuL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJ2YXIgYW1iZXIgPSB7XG4gIDUwOiAnI2ZmZjhlMScsXG4gIDEwMDogJyNmZmVjYjMnLFxuICAyMDA6ICcjZmZlMDgyJyxcbiAgMzAwOiAnI2ZmZDU0ZicsXG4gIDQwMDogJyNmZmNhMjgnLFxuICA1MDA6ICcjZmZjMTA3JyxcbiAgNjAwOiAnI2ZmYjMwMCcsXG4gIDcwMDogJyNmZmEwMDAnLFxuICA4MDA6ICcjZmY4ZjAwJyxcbiAgOTAwOiAnI2ZmNmYwMCcsXG4gIEExMDA6ICcjZmZlNTdmJyxcbiAgQTIwMDogJyNmZmQ3NDAnLFxuICBBNDAwOiAnI2ZmYzQwMCcsXG4gIEE3MDA6ICcjZmZhYjAwJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGFtYmVyOyIsInZhciBibHVlID0ge1xuICA1MDogJyNlM2YyZmQnLFxuICAxMDA6ICcjYmJkZWZiJyxcbiAgMjAwOiAnIzkwY2FmOScsXG4gIDMwMDogJyM2NGI1ZjYnLFxuICA0MDA6ICcjNDJhNWY1JyxcbiAgNTAwOiAnIzIxOTZmMycsXG4gIDYwMDogJyMxZTg4ZTUnLFxuICA3MDA6ICcjMTk3NmQyJyxcbiAgODAwOiAnIzE1NjVjMCcsXG4gIDkwMDogJyMwZDQ3YTEnLFxuICBBMTAwOiAnIzgyYjFmZicsXG4gIEEyMDA6ICcjNDQ4YWZmJyxcbiAgQTQwMDogJyMyOTc5ZmYnLFxuICBBNzAwOiAnIzI5NjJmZidcbn07XG5leHBvcnQgZGVmYXVsdCBibHVlOyIsInZhciBibHVlR3JleSA9IHtcbiAgNTA6ICcjZWNlZmYxJyxcbiAgMTAwOiAnI2NmZDhkYycsXG4gIDIwMDogJyNiMGJlYzUnLFxuICAzMDA6ICcjOTBhNGFlJyxcbiAgNDAwOiAnIzc4OTA5YycsXG4gIDUwMDogJyM2MDdkOGInLFxuICA2MDA6ICcjNTQ2ZTdhJyxcbiAgNzAwOiAnIzQ1NWE2NCcsXG4gIDgwMDogJyMzNzQ3NGYnLFxuICA5MDA6ICcjMjYzMjM4JyxcbiAgQTEwMDogJyNjZmQ4ZGMnLFxuICBBMjAwOiAnI2IwYmVjNScsXG4gIEE0MDA6ICcjNzg5MDljJyxcbiAgQTcwMDogJyM0NTVhNjQnXG59O1xuZXhwb3J0IGRlZmF1bHQgYmx1ZUdyZXk7IiwidmFyIGJyb3duID0ge1xuICA1MDogJyNlZmViZTknLFxuICAxMDA6ICcjZDdjY2M4JyxcbiAgMjAwOiAnI2JjYWFhNCcsXG4gIDMwMDogJyNhMTg4N2YnLFxuICA0MDA6ICcjOGQ2ZTYzJyxcbiAgNTAwOiAnIzc5NTU0OCcsXG4gIDYwMDogJyM2ZDRjNDEnLFxuICA3MDA6ICcjNWQ0MDM3JyxcbiAgODAwOiAnIzRlMzQyZScsXG4gIDkwMDogJyMzZTI3MjMnLFxuICBBMTAwOiAnI2Q3Y2NjOCcsXG4gIEEyMDA6ICcjYmNhYWE0JyxcbiAgQTQwMDogJyM4ZDZlNjMnLFxuICBBNzAwOiAnIzVkNDAzNydcbn07XG5leHBvcnQgZGVmYXVsdCBicm93bjsiLCJ2YXIgY29tbW9uID0ge1xuICBibGFjazogJyMwMDAnLFxuICB3aGl0ZTogJyNmZmYnXG59O1xuZXhwb3J0IGRlZmF1bHQgY29tbW9uOyIsInZhciBjeWFuID0ge1xuICA1MDogJyNlMGY3ZmEnLFxuICAxMDA6ICcjYjJlYmYyJyxcbiAgMjAwOiAnIzgwZGVlYScsXG4gIDMwMDogJyM0ZGQwZTEnLFxuICA0MDA6ICcjMjZjNmRhJyxcbiAgNTAwOiAnIzAwYmNkNCcsXG4gIDYwMDogJyMwMGFjYzEnLFxuICA3MDA6ICcjMDA5N2E3JyxcbiAgODAwOiAnIzAwODM4ZicsXG4gIDkwMDogJyMwMDYwNjQnLFxuICBBMTAwOiAnIzg0ZmZmZicsXG4gIEEyMDA6ICcjMThmZmZmJyxcbiAgQTQwMDogJyMwMGU1ZmYnLFxuICBBNzAwOiAnIzAwYjhkNCdcbn07XG5leHBvcnQgZGVmYXVsdCBjeWFuOyIsInZhciBkZWVwT3JhbmdlID0ge1xuICA1MDogJyNmYmU5ZTcnLFxuICAxMDA6ICcjZmZjY2JjJyxcbiAgMjAwOiAnI2ZmYWI5MScsXG4gIDMwMDogJyNmZjhhNjUnLFxuICA0MDA6ICcjZmY3MDQzJyxcbiAgNTAwOiAnI2ZmNTcyMicsXG4gIDYwMDogJyNmNDUxMWUnLFxuICA3MDA6ICcjZTY0YTE5JyxcbiAgODAwOiAnI2Q4NDMxNScsXG4gIDkwMDogJyNiZjM2MGMnLFxuICBBMTAwOiAnI2ZmOWU4MCcsXG4gIEEyMDA6ICcjZmY2ZTQwJyxcbiAgQTQwMDogJyNmZjNkMDAnLFxuICBBNzAwOiAnI2RkMmMwMCdcbn07XG5leHBvcnQgZGVmYXVsdCBkZWVwT3JhbmdlOyIsInZhciBkZWVwUHVycGxlID0ge1xuICA1MDogJyNlZGU3ZjYnLFxuICAxMDA6ICcjZDFjNGU5JyxcbiAgMjAwOiAnI2IzOWRkYicsXG4gIDMwMDogJyM5NTc1Y2QnLFxuICA0MDA6ICcjN2U1N2MyJyxcbiAgNTAwOiAnIzY3M2FiNycsXG4gIDYwMDogJyM1ZTM1YjEnLFxuICA3MDA6ICcjNTEyZGE4JyxcbiAgODAwOiAnIzQ1MjdhMCcsXG4gIDkwMDogJyMzMTFiOTInLFxuICBBMTAwOiAnI2IzODhmZicsXG4gIEEyMDA6ICcjN2M0ZGZmJyxcbiAgQTQwMDogJyM2NTFmZmYnLFxuICBBNzAwOiAnIzYyMDBlYSdcbn07XG5leHBvcnQgZGVmYXVsdCBkZWVwUHVycGxlOyIsInZhciBncmVlbiA9IHtcbiAgNTA6ICcjZThmNWU5JyxcbiAgMTAwOiAnI2M4ZTZjOScsXG4gIDIwMDogJyNhNWQ2YTcnLFxuICAzMDA6ICcjODFjNzg0JyxcbiAgNDAwOiAnIzY2YmI2YScsXG4gIDUwMDogJyM0Y2FmNTAnLFxuICA2MDA6ICcjNDNhMDQ3JyxcbiAgNzAwOiAnIzM4OGUzYycsXG4gIDgwMDogJyMyZTdkMzInLFxuICA5MDA6ICcjMWI1ZTIwJyxcbiAgQTEwMDogJyNiOWY2Y2EnLFxuICBBMjAwOiAnIzY5ZjBhZScsXG4gIEE0MDA6ICcjMDBlNjc2JyxcbiAgQTcwMDogJyMwMGM4NTMnXG59O1xuZXhwb3J0IGRlZmF1bHQgZ3JlZW47IiwidmFyIGdyZXkgPSB7XG4gIDUwOiAnI2ZhZmFmYScsXG4gIDEwMDogJyNmNWY1ZjUnLFxuICAyMDA6ICcjZWVlZWVlJyxcbiAgMzAwOiAnI2UwZTBlMCcsXG4gIDQwMDogJyNiZGJkYmQnLFxuICA1MDA6ICcjOWU5ZTllJyxcbiAgNjAwOiAnIzc1NzU3NScsXG4gIDcwMDogJyM2MTYxNjEnLFxuICA4MDA6ICcjNDI0MjQyJyxcbiAgOTAwOiAnIzIxMjEyMScsXG4gIEExMDA6ICcjZDVkNWQ1JyxcbiAgQTIwMDogJyNhYWFhYWEnLFxuICBBNDAwOiAnIzMwMzAzMCcsXG4gIEE3MDA6ICcjNjE2MTYxJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGdyZXk7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBjb21tb24gfSBmcm9tICcuL2NvbW1vbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlZCB9IGZyb20gJy4vcmVkJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGluayB9IGZyb20gJy4vcGluayc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHB1cnBsZSB9IGZyb20gJy4vcHVycGxlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZGVlcFB1cnBsZSB9IGZyb20gJy4vZGVlcFB1cnBsZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGluZGlnbyB9IGZyb20gJy4vaW5kaWdvJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYmx1ZSB9IGZyb20gJy4vYmx1ZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGxpZ2h0Qmx1ZSB9IGZyb20gJy4vbGlnaHRCbHVlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3lhbiB9IGZyb20gJy4vY3lhbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHRlYWwgfSBmcm9tICcuL3RlYWwnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBncmVlbiB9IGZyb20gJy4vZ3JlZW4nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBsaWdodEdyZWVuIH0gZnJvbSAnLi9saWdodEdyZWVuJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbGltZSB9IGZyb20gJy4vbGltZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHllbGxvdyB9IGZyb20gJy4veWVsbG93JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYW1iZXIgfSBmcm9tICcuL2FtYmVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgb3JhbmdlIH0gZnJvbSAnLi9vcmFuZ2UnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBkZWVwT3JhbmdlIH0gZnJvbSAnLi9kZWVwT3JhbmdlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYnJvd24gfSBmcm9tICcuL2Jyb3duJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ3JleSB9IGZyb20gJy4vZ3JleSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGJsdWVHcmV5IH0gZnJvbSAnLi9ibHVlR3JleSc7IiwidmFyIGluZGlnbyA9IHtcbiAgNTA6ICcjZThlYWY2JyxcbiAgMTAwOiAnI2M1Y2FlOScsXG4gIDIwMDogJyM5ZmE4ZGEnLFxuICAzMDA6ICcjNzk4NmNiJyxcbiAgNDAwOiAnIzVjNmJjMCcsXG4gIDUwMDogJyMzZjUxYjUnLFxuICA2MDA6ICcjMzk0OWFiJyxcbiAgNzAwOiAnIzMwM2Y5ZicsXG4gIDgwMDogJyMyODM1OTMnLFxuICA5MDA6ICcjMWEyMzdlJyxcbiAgQTEwMDogJyM4YzllZmYnLFxuICBBMjAwOiAnIzUzNmRmZScsXG4gIEE0MDA6ICcjM2Q1YWZlJyxcbiAgQTcwMDogJyMzMDRmZmUnXG59O1xuZXhwb3J0IGRlZmF1bHQgaW5kaWdvOyIsInZhciBsaWdodEJsdWUgPSB7XG4gIDUwOiAnI2UxZjVmZScsXG4gIDEwMDogJyNiM2U1ZmMnLFxuICAyMDA6ICcjODFkNGZhJyxcbiAgMzAwOiAnIzRmYzNmNycsXG4gIDQwMDogJyMyOWI2ZjYnLFxuICA1MDA6ICcjMDNhOWY0JyxcbiAgNjAwOiAnIzAzOWJlNScsXG4gIDcwMDogJyMwMjg4ZDEnLFxuICA4MDA6ICcjMDI3N2JkJyxcbiAgOTAwOiAnIzAxNTc5YicsXG4gIEExMDA6ICcjODBkOGZmJyxcbiAgQTIwMDogJyM0MGM0ZmYnLFxuICBBNDAwOiAnIzAwYjBmZicsXG4gIEE3MDA6ICcjMDA5MWVhJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGxpZ2h0Qmx1ZTsiLCJ2YXIgbGlnaHRHcmVlbiA9IHtcbiAgNTA6ICcjZjFmOGU5JyxcbiAgMTAwOiAnI2RjZWRjOCcsXG4gIDIwMDogJyNjNWUxYTUnLFxuICAzMDA6ICcjYWVkNTgxJyxcbiAgNDAwOiAnIzljY2M2NScsXG4gIDUwMDogJyM4YmMzNGEnLFxuICA2MDA6ICcjN2NiMzQyJyxcbiAgNzAwOiAnIzY4OWYzOCcsXG4gIDgwMDogJyM1NThiMmYnLFxuICA5MDA6ICcjMzM2OTFlJyxcbiAgQTEwMDogJyNjY2ZmOTAnLFxuICBBMjAwOiAnI2IyZmY1OScsXG4gIEE0MDA6ICcjNzZmZjAzJyxcbiAgQTcwMDogJyM2NGRkMTcnXG59O1xuZXhwb3J0IGRlZmF1bHQgbGlnaHRHcmVlbjsiLCJ2YXIgbGltZSA9IHtcbiAgNTA6ICcjZjlmYmU3JyxcbiAgMTAwOiAnI2YwZjRjMycsXG4gIDIwMDogJyNlNmVlOWMnLFxuICAzMDA6ICcjZGNlNzc1JyxcbiAgNDAwOiAnI2Q0ZTE1NycsXG4gIDUwMDogJyNjZGRjMzknLFxuICA2MDA6ICcjYzBjYTMzJyxcbiAgNzAwOiAnI2FmYjQyYicsXG4gIDgwMDogJyM5ZTlkMjQnLFxuICA5MDA6ICcjODI3NzE3JyxcbiAgQTEwMDogJyNmNGZmODEnLFxuICBBMjAwOiAnI2VlZmY0MScsXG4gIEE0MDA6ICcjYzZmZjAwJyxcbiAgQTcwMDogJyNhZWVhMDAnXG59O1xuZXhwb3J0IGRlZmF1bHQgbGltZTsiLCJ2YXIgb3JhbmdlID0ge1xuICA1MDogJyNmZmYzZTAnLFxuICAxMDA6ICcjZmZlMGIyJyxcbiAgMjAwOiAnI2ZmY2M4MCcsXG4gIDMwMDogJyNmZmI3NGQnLFxuICA0MDA6ICcjZmZhNzI2JyxcbiAgNTAwOiAnI2ZmOTgwMCcsXG4gIDYwMDogJyNmYjhjMDAnLFxuICA3MDA6ICcjZjU3YzAwJyxcbiAgODAwOiAnI2VmNmMwMCcsXG4gIDkwMDogJyNlNjUxMDAnLFxuICBBMTAwOiAnI2ZmZDE4MCcsXG4gIEEyMDA6ICcjZmZhYjQwJyxcbiAgQTQwMDogJyNmZjkxMDAnLFxuICBBNzAwOiAnI2ZmNmQwMCdcbn07XG5leHBvcnQgZGVmYXVsdCBvcmFuZ2U7IiwidmFyIHBpbmsgPSB7XG4gIDUwOiAnI2ZjZTRlYycsXG4gIDEwMDogJyNmOGJiZDAnLFxuICAyMDA6ICcjZjQ4ZmIxJyxcbiAgMzAwOiAnI2YwNjI5MicsXG4gIDQwMDogJyNlYzQwN2EnLFxuICA1MDA6ICcjZTkxZTYzJyxcbiAgNjAwOiAnI2Q4MWI2MCcsXG4gIDcwMDogJyNjMjE4NWInLFxuICA4MDA6ICcjYWQxNDU3JyxcbiAgOTAwOiAnIzg4MGU0ZicsXG4gIEExMDA6ICcjZmY4MGFiJyxcbiAgQTIwMDogJyNmZjQwODEnLFxuICBBNDAwOiAnI2Y1MDA1NycsXG4gIEE3MDA6ICcjYzUxMTYyJ1xufTtcbmV4cG9ydCBkZWZhdWx0IHBpbms7IiwidmFyIHB1cnBsZSA9IHtcbiAgNTA6ICcjZjNlNWY1JyxcbiAgMTAwOiAnI2UxYmVlNycsXG4gIDIwMDogJyNjZTkzZDgnLFxuICAzMDA6ICcjYmE2OGM4JyxcbiAgNDAwOiAnI2FiNDdiYycsXG4gIDUwMDogJyM5YzI3YjAnLFxuICA2MDA6ICcjOGUyNGFhJyxcbiAgNzAwOiAnIzdiMWZhMicsXG4gIDgwMDogJyM2YTFiOWEnLFxuICA5MDA6ICcjNGExNDhjJyxcbiAgQTEwMDogJyNlYTgwZmMnLFxuICBBMjAwOiAnI2UwNDBmYicsXG4gIEE0MDA6ICcjZDUwMGY5JyxcbiAgQTcwMDogJyNhYTAwZmYnXG59O1xuZXhwb3J0IGRlZmF1bHQgcHVycGxlOyIsInZhciByZWQgPSB7XG4gIDUwOiAnI2ZmZWJlZScsXG4gIDEwMDogJyNmZmNkZDInLFxuICAyMDA6ICcjZWY5YTlhJyxcbiAgMzAwOiAnI2U1NzM3MycsXG4gIDQwMDogJyNlZjUzNTAnLFxuICA1MDA6ICcjZjQ0MzM2JyxcbiAgNjAwOiAnI2U1MzkzNScsXG4gIDcwMDogJyNkMzJmMmYnLFxuICA4MDA6ICcjYzYyODI4JyxcbiAgOTAwOiAnI2I3MWMxYycsXG4gIEExMDA6ICcjZmY4YTgwJyxcbiAgQTIwMDogJyNmZjUyNTInLFxuICBBNDAwOiAnI2ZmMTc0NCcsXG4gIEE3MDA6ICcjZDUwMDAwJ1xufTtcbmV4cG9ydCBkZWZhdWx0IHJlZDsiLCJ2YXIgdGVhbCA9IHtcbiAgNTA6ICcjZTBmMmYxJyxcbiAgMTAwOiAnI2IyZGZkYicsXG4gIDIwMDogJyM4MGNiYzQnLFxuICAzMDA6ICcjNGRiNmFjJyxcbiAgNDAwOiAnIzI2YTY5YScsXG4gIDUwMDogJyMwMDk2ODgnLFxuICA2MDA6ICcjMDA4OTdiJyxcbiAgNzAwOiAnIzAwNzk2YicsXG4gIDgwMDogJyMwMDY5NWMnLFxuICA5MDA6ICcjMDA0ZDQwJyxcbiAgQTEwMDogJyNhN2ZmZWInLFxuICBBMjAwOiAnIzY0ZmZkYScsXG4gIEE0MDA6ICcjMWRlOWI2JyxcbiAgQTcwMDogJyMwMGJmYTUnXG59O1xuZXhwb3J0IGRlZmF1bHQgdGVhbDsiLCJ2YXIgeWVsbG93ID0ge1xuICA1MDogJyNmZmZkZTcnLFxuICAxMDA6ICcjZmZmOWM0JyxcbiAgMjAwOiAnI2ZmZjU5ZCcsXG4gIDMwMDogJyNmZmYxNzYnLFxuICA0MDA6ICcjZmZlZTU4JyxcbiAgNTAwOiAnI2ZmZWIzYicsXG4gIDYwMDogJyNmZGQ4MzUnLFxuICA3MDA6ICcjZmJjMDJkJyxcbiAgODAwOiAnI2Y5YTgyNScsXG4gIDkwMDogJyNmNTdmMTcnLFxuICBBMTAwOiAnI2ZmZmY4ZCcsXG4gIEEyMDA6ICcjZmZmZjAwJyxcbiAgQTQwMDogJyNmZmVhMDAnLFxuICBBNzAwOiAnI2ZmZDYwMCdcbn07XG5leHBvcnQgZGVmYXVsdCB5ZWxsb3c7IiwiaW1wb3J0IHsgZm9ybWF0TXVpRXJyb3JNZXNzYWdlIGFzIF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3V0aWxzXCI7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5cbi8qKlxyXG4gKiBSZXR1cm5zIGEgbnVtYmVyIHdob3NlIHZhbHVlIGlzIGxpbWl0ZWQgdG8gdGhlIGdpdmVuIHJhbmdlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIGNsYW1wZWRcclxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBUaGUgbG93ZXIgYm91bmRhcnkgb2YgdGhlIG91dHB1dCByYW5nZVxyXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IFRoZSB1cHBlciBib3VuZGFyeSBvZiB0aGUgb3V0cHV0IHJhbmdlXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IEEgbnVtYmVyIGluIHRoZSByYW5nZSBbbWluLCBtYXhdXHJcbiAqL1xuZnVuY3Rpb24gY2xhbXAodmFsdWUpIHtcbiAgdmFyIG1pbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgdmFyIG1heCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogMTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICh2YWx1ZSA8IG1pbiB8fCB2YWx1ZSA+IG1heCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIk1hdGVyaWFsLVVJOiBUaGUgdmFsdWUgcHJvdmlkZWQgXCIuY29uY2F0KHZhbHVlLCBcIiBpcyBvdXQgb2YgcmFuZ2UgW1wiKS5jb25jYXQobWluLCBcIiwgXCIpLmNvbmNhdChtYXgsIFwiXS5cIikpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChtaW4sIHZhbHVlKSwgbWF4KTtcbn1cbi8qKlxyXG4gKiBDb252ZXJ0cyBhIGNvbG9yIGZyb20gQ1NTIGhleCBmb3JtYXQgdG8gQ1NTIHJnYiBmb3JtYXQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIEhleCBjb2xvciwgaS5lLiAjbm5uIG9yICNubm5ubm5cclxuICogQHJldHVybnMge3N0cmluZ30gQSBDU1MgcmdiIGNvbG9yIHN0cmluZ1xyXG4gKi9cblxuXG5leHBvcnQgZnVuY3Rpb24gaGV4VG9SZ2IoY29sb3IpIHtcbiAgY29sb3IgPSBjb2xvci5zdWJzdHIoMSk7XG4gIHZhciByZSA9IG5ldyBSZWdFeHAoXCIuezEsXCIuY29uY2F0KGNvbG9yLmxlbmd0aCA+PSA2ID8gMiA6IDEsIFwifVwiKSwgJ2cnKTtcbiAgdmFyIGNvbG9ycyA9IGNvbG9yLm1hdGNoKHJlKTtcblxuICBpZiAoY29sb3JzICYmIGNvbG9yc1swXS5sZW5ndGggPT09IDEpIHtcbiAgICBjb2xvcnMgPSBjb2xvcnMubWFwKGZ1bmN0aW9uIChuKSB7XG4gICAgICByZXR1cm4gbiArIG47XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gY29sb3JzID8gXCJyZ2JcIi5jb25jYXQoY29sb3JzLmxlbmd0aCA9PT0gNCA/ICdhJyA6ICcnLCBcIihcIikuY29uY2F0KGNvbG9ycy5tYXAoZnVuY3Rpb24gKG4sIGluZGV4KSB7XG4gICAgcmV0dXJuIGluZGV4IDwgMyA/IHBhcnNlSW50KG4sIDE2KSA6IE1hdGgucm91bmQocGFyc2VJbnQobiwgMTYpIC8gMjU1ICogMTAwMCkgLyAxMDAwO1xuICB9KS5qb2luKCcsICcpLCBcIilcIikgOiAnJztcbn1cblxuZnVuY3Rpb24gaW50VG9IZXgoaW50KSB7XG4gIHZhciBoZXggPSBpbnQudG9TdHJpbmcoMTYpO1xuICByZXR1cm4gaGV4Lmxlbmd0aCA9PT0gMSA/IFwiMFwiLmNvbmNhdChoZXgpIDogaGV4O1xufVxuLyoqXHJcbiAqIENvbnZlcnRzIGEgY29sb3IgZnJvbSBDU1MgcmdiIGZvcm1hdCB0byBDU1MgaGV4IGZvcm1hdC5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gUkdCIGNvbG9yLCBpLmUuIHJnYihuLCBuLCBuKVxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIENTUyByZ2IgY29sb3Igc3RyaW5nLCBpLmUuICNubm5ubm5cclxuICovXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJnYlRvSGV4KGNvbG9yKSB7XG4gIC8vIElkZW1wb3RlbnRcbiAgaWYgKGNvbG9yLmluZGV4T2YoJyMnKSA9PT0gMCkge1xuICAgIHJldHVybiBjb2xvcjtcbiAgfVxuXG4gIHZhciBfZGVjb21wb3NlQ29sb3IgPSBkZWNvbXBvc2VDb2xvcihjb2xvciksXG4gICAgICB2YWx1ZXMgPSBfZGVjb21wb3NlQ29sb3IudmFsdWVzO1xuXG4gIHJldHVybiBcIiNcIi5jb25jYXQodmFsdWVzLm1hcChmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBpbnRUb0hleChuKTtcbiAgfSkuam9pbignJykpO1xufVxuLyoqXHJcbiAqIENvbnZlcnRzIGEgY29sb3IgZnJvbSBoc2wgZm9ybWF0IHRvIHJnYiBmb3JtYXQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIEhTTCBjb2xvciB2YWx1ZXNcclxuICogQHJldHVybnMge3N0cmluZ30gcmdiIGNvbG9yIHZhbHVlc1xyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGhzbFRvUmdiKGNvbG9yKSB7XG4gIGNvbG9yID0gZGVjb21wb3NlQ29sb3IoY29sb3IpO1xuICB2YXIgX2NvbG9yID0gY29sb3IsXG4gICAgICB2YWx1ZXMgPSBfY29sb3IudmFsdWVzO1xuICB2YXIgaCA9IHZhbHVlc1swXTtcbiAgdmFyIHMgPSB2YWx1ZXNbMV0gLyAxMDA7XG4gIHZhciBsID0gdmFsdWVzWzJdIC8gMTAwO1xuICB2YXIgYSA9IHMgKiBNYXRoLm1pbihsLCAxIC0gbCk7XG5cbiAgdmFyIGYgPSBmdW5jdGlvbiBmKG4pIHtcbiAgICB2YXIgayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogKG4gKyBoIC8gMzApICUgMTI7XG4gICAgcmV0dXJuIGwgLSBhICogTWF0aC5tYXgoTWF0aC5taW4oayAtIDMsIDkgLSBrLCAxKSwgLTEpO1xuICB9O1xuXG4gIHZhciB0eXBlID0gJ3JnYic7XG4gIHZhciByZ2IgPSBbTWF0aC5yb3VuZChmKDApICogMjU1KSwgTWF0aC5yb3VuZChmKDgpICogMjU1KSwgTWF0aC5yb3VuZChmKDQpICogMjU1KV07XG5cbiAgaWYgKGNvbG9yLnR5cGUgPT09ICdoc2xhJykge1xuICAgIHR5cGUgKz0gJ2EnO1xuICAgIHJnYi5wdXNoKHZhbHVlc1szXSk7XG4gIH1cblxuICByZXR1cm4gcmVjb21wb3NlQ29sb3Ioe1xuICAgIHR5cGU6IHR5cGUsXG4gICAgdmFsdWVzOiByZ2JcbiAgfSk7XG59XG4vKipcclxuICogUmV0dXJucyBhbiBvYmplY3Qgd2l0aCB0aGUgdHlwZSBhbmQgdmFsdWVzIG9mIGEgY29sb3IuXHJcbiAqXHJcbiAqIE5vdGU6IERvZXMgbm90IHN1cHBvcnQgcmdiICUgdmFsdWVzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBDU1MgY29sb3IsIGkuZS4gb25lIG9mOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpXHJcbiAqIEByZXR1cm5zIHtvYmplY3R9IC0gQSBNVUkgY29sb3Igb2JqZWN0OiB7dHlwZTogc3RyaW5nLCB2YWx1ZXM6IG51bWJlcltdfVxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY29tcG9zZUNvbG9yKGNvbG9yKSB7XG4gIC8vIElkZW1wb3RlbnRcbiAgaWYgKGNvbG9yLnR5cGUpIHtcbiAgICByZXR1cm4gY29sb3I7XG4gIH1cblxuICBpZiAoY29sb3IuY2hhckF0KDApID09PSAnIycpIHtcbiAgICByZXR1cm4gZGVjb21wb3NlQ29sb3IoaGV4VG9SZ2IoY29sb3IpKTtcbiAgfVxuXG4gIHZhciBtYXJrZXIgPSBjb2xvci5pbmRleE9mKCcoJyk7XG4gIHZhciB0eXBlID0gY29sb3Iuc3Vic3RyaW5nKDAsIG1hcmtlcik7XG5cbiAgaWYgKFsncmdiJywgJ3JnYmEnLCAnaHNsJywgJ2hzbGEnXS5pbmRleE9mKHR5cGUpID09PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBcIk1hdGVyaWFsLVVJOiBVbnN1cHBvcnRlZCBgXCIuY29uY2F0KGNvbG9yLCBcImAgY29sb3IuXFxuV2Ugc3VwcG9ydCB0aGUgZm9sbG93aW5nIGZvcm1hdHM6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKCkuXCIpIDogX2Zvcm1hdE11aUVycm9yTWVzc2FnZSgzLCBjb2xvcikpO1xuICB9XG5cbiAgdmFyIHZhbHVlcyA9IGNvbG9yLnN1YnN0cmluZyhtYXJrZXIgKyAxLCBjb2xvci5sZW5ndGggLSAxKS5zcGxpdCgnLCcpO1xuICB2YWx1ZXMgPSB2YWx1ZXMubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZSxcbiAgICB2YWx1ZXM6IHZhbHVlc1xuICB9O1xufVxuLyoqXHJcbiAqIENvbnZlcnRzIGEgY29sb3Igb2JqZWN0IHdpdGggdHlwZSBhbmQgdmFsdWVzIHRvIGEgc3RyaW5nLlxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gY29sb3IgLSBEZWNvbXBvc2VkIGNvbG9yXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvci50eXBlIC0gT25lIG9mOiAncmdiJywgJ3JnYmEnLCAnaHNsJywgJ2hzbGEnXHJcbiAqIEBwYXJhbSB7YXJyYXl9IGNvbG9yLnZhbHVlcyAtIFtuLG4sbl0gb3IgW24sbixuLG5dXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIGNvbG9yIHN0cmluZ1xyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJlY29tcG9zZUNvbG9yKGNvbG9yKSB7XG4gIHZhciB0eXBlID0gY29sb3IudHlwZTtcbiAgdmFyIHZhbHVlcyA9IGNvbG9yLnZhbHVlcztcblxuICBpZiAodHlwZS5pbmRleE9mKCdyZ2InKSAhPT0gLTEpIHtcbiAgICAvLyBPbmx5IGNvbnZlcnQgdGhlIGZpcnN0IDMgdmFsdWVzIHRvIGludCAoaS5lLiBub3QgYWxwaGEpXG4gICAgdmFsdWVzID0gdmFsdWVzLm1hcChmdW5jdGlvbiAobiwgaSkge1xuICAgICAgcmV0dXJuIGkgPCAzID8gcGFyc2VJbnQobiwgMTApIDogbjtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlLmluZGV4T2YoJ2hzbCcpICE9PSAtMSkge1xuICAgIHZhbHVlc1sxXSA9IFwiXCIuY29uY2F0KHZhbHVlc1sxXSwgXCIlXCIpO1xuICAgIHZhbHVlc1syXSA9IFwiXCIuY29uY2F0KHZhbHVlc1syXSwgXCIlXCIpO1xuICB9XG5cbiAgcmV0dXJuIFwiXCIuY29uY2F0KHR5cGUsIFwiKFwiKS5jb25jYXQodmFsdWVzLmpvaW4oJywgJyksIFwiKVwiKTtcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBjb250cmFzdCByYXRpbyBiZXR3ZWVuIHR3byBjb2xvcnMuXHJcbiAqXHJcbiAqIEZvcm11bGE6IGh0dHBzOi8vd3d3LnczLm9yZy9UUi9XQ0FHMjAtVEVDSFMvRzE3Lmh0bWwjRzE3LXRlc3RzXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JlZ3JvdW5kIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFja2dyb3VuZCAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcclxuICogQHJldHVybnMge251bWJlcn0gQSBjb250cmFzdCByYXRpbyB2YWx1ZSBpbiB0aGUgcmFuZ2UgMCAtIDIxLlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRyYXN0UmF0aW8oZm9yZWdyb3VuZCwgYmFja2dyb3VuZCkge1xuICB2YXIgbHVtQSA9IGdldEx1bWluYW5jZShmb3JlZ3JvdW5kKTtcbiAgdmFyIGx1bUIgPSBnZXRMdW1pbmFuY2UoYmFja2dyb3VuZCk7XG4gIHJldHVybiAoTWF0aC5tYXgobHVtQSwgbHVtQikgKyAwLjA1KSAvIChNYXRoLm1pbihsdW1BLCBsdW1CKSArIDAuMDUpO1xufVxuLyoqXHJcbiAqIFRoZSByZWxhdGl2ZSBicmlnaHRuZXNzIG9mIGFueSBwb2ludCBpbiBhIGNvbG9yIHNwYWNlLFxyXG4gKiBub3JtYWxpemVkIHRvIDAgZm9yIGRhcmtlc3QgYmxhY2sgYW5kIDEgZm9yIGxpZ2h0ZXN0IHdoaXRlLlxyXG4gKlxyXG4gKiBGb3JtdWxhOiBodHRwczovL3d3dy53My5vcmcvVFIvV0NBRzIwLVRFQ0hTL0cxNy5odG1sI0cxNy10ZXN0c1xyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBDU1MgY29sb3IsIGkuZS4gb25lIG9mOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSByZWxhdGl2ZSBicmlnaHRuZXNzIG9mIHRoZSBjb2xvciBpbiB0aGUgcmFuZ2UgMCAtIDFcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMdW1pbmFuY2UoY29sb3IpIHtcbiAgY29sb3IgPSBkZWNvbXBvc2VDb2xvcihjb2xvcik7XG4gIHZhciByZ2IgPSBjb2xvci50eXBlID09PSAnaHNsJyA/IGRlY29tcG9zZUNvbG9yKGhzbFRvUmdiKGNvbG9yKSkudmFsdWVzIDogY29sb3IudmFsdWVzO1xuICByZ2IgPSByZ2IubWFwKGZ1bmN0aW9uICh2YWwpIHtcbiAgICB2YWwgLz0gMjU1OyAvLyBub3JtYWxpemVkXG5cbiAgICByZXR1cm4gdmFsIDw9IDAuMDM5MjggPyB2YWwgLyAxMi45MiA6IE1hdGgucG93KCh2YWwgKyAwLjA1NSkgLyAxLjA1NSwgMi40KTtcbiAgfSk7IC8vIFRydW5jYXRlIGF0IDMgZGlnaXRzXG5cbiAgcmV0dXJuIE51bWJlcigoMC4yMTI2ICogcmdiWzBdICsgMC43MTUyICogcmdiWzFdICsgMC4wNzIyICogcmdiWzJdKS50b0ZpeGVkKDMpKTtcbn1cbi8qKlxyXG4gKiBEYXJrZW4gb3IgbGlnaHRlbiBhIGNvbG9yLCBkZXBlbmRpbmcgb24gaXRzIGx1bWluYW5jZS5cclxuICogTGlnaHQgY29sb3JzIGFyZSBkYXJrZW5lZCwgZGFyayBjb2xvcnMgYXJlIGxpZ2h0ZW5lZC5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxyXG4gKiBAcGFyYW0ge251bWJlcn0gY29lZmZpY2llbnQ9MC4xNSAtIG11bHRpcGxpZXIgaW4gdGhlIHJhbmdlIDAgLSAxXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIGNvbG9yIHN0cmluZy4gSGV4IGlucHV0IHZhbHVlcyBhcmUgcmV0dXJuZWQgYXMgcmdiXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZW1waGFzaXplKGNvbG9yKSB7XG4gIHZhciBjb2VmZmljaWVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMC4xNTtcbiAgcmV0dXJuIGdldEx1bWluYW5jZShjb2xvcikgPiAwLjUgPyBkYXJrZW4oY29sb3IsIGNvZWZmaWNpZW50KSA6IGxpZ2h0ZW4oY29sb3IsIGNvZWZmaWNpZW50KTtcbn1cbnZhciB3YXJuZWRPbmNlID0gZmFsc2U7XG4vKipcclxuICogU2V0IHRoZSBhYnNvbHV0ZSB0cmFuc3BhcmVuY3kgb2YgYSBjb2xvci5cclxuICogQW55IGV4aXN0aW5nIGFscGhhIHZhbHVlcyBhcmUgb3ZlcndyaXR0ZW4uXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcclxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gdmFsdWUgdG8gc2V0IHRoZSBhbHBoYSBjaGFubmVsIHRvIGluIHRoZSByYW5nZSAwIC0xXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIGNvbG9yIHN0cmluZy4gSGV4IGlucHV0IHZhbHVlcyBhcmUgcmV0dXJuZWQgYXMgcmdiXHJcbiAqXHJcbiAqIEBkZXByZWNhdGVkXHJcbiAqIFVzZSBgaW1wb3J0IHsgYWxwaGEgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnYCBpbnN0ZWFkLlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZhZGUoY29sb3IsIHZhbHVlKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCF3YXJuZWRPbmNlKSB7XG4gICAgICB3YXJuZWRPbmNlID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoWydNYXRlcmlhbC1VSTogVGhlIGBmYWRlYCBjb2xvciB1dGlsaXR5IHdhcyByZW5hbWVkIHRvIGBhbHBoYWAgdG8gYmV0dGVyIGRlc2NyaWJlIGl0cyBmdW5jdGlvbmFsaXR5LicsICcnLCBcIllvdSBzaG91bGQgdXNlIGBpbXBvcnQgeyBhbHBoYSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydgXCJdLmpvaW4oJ1xcbicpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYWxwaGEoY29sb3IsIHZhbHVlKTtcbn1cbi8qKlxyXG4gKiBTZXQgdGhlIGFic29sdXRlIHRyYW5zcGFyZW5jeSBvZiBhIGNvbG9yLlxyXG4gKiBBbnkgZXhpc3RpbmcgYWxwaGEgdmFsdWUgaXMgb3ZlcndyaXR0ZW4uXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcclxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gdmFsdWUgdG8gc2V0IHRoZSBhbHBoYSBjaGFubmVsIHRvIGluIHRoZSByYW5nZSAwLTFcclxuICogQHJldHVybnMge3N0cmluZ30gQSBDU1MgY29sb3Igc3RyaW5nLiBIZXggaW5wdXQgdmFsdWVzIGFyZSByZXR1cm5lZCBhcyByZ2JcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBhbHBoYShjb2xvciwgdmFsdWUpIHtcbiAgY29sb3IgPSBkZWNvbXBvc2VDb2xvcihjb2xvcik7XG4gIHZhbHVlID0gY2xhbXAodmFsdWUpO1xuXG4gIGlmIChjb2xvci50eXBlID09PSAncmdiJyB8fCBjb2xvci50eXBlID09PSAnaHNsJykge1xuICAgIGNvbG9yLnR5cGUgKz0gJ2EnO1xuICB9XG5cbiAgY29sb3IudmFsdWVzWzNdID0gdmFsdWU7XG4gIHJldHVybiByZWNvbXBvc2VDb2xvcihjb2xvcik7XG59XG4vKipcclxuICogRGFya2VucyBhIGNvbG9yLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBDU1MgY29sb3IsIGkuZS4gb25lIG9mOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb2VmZmljaWVudCAtIG11bHRpcGxpZXIgaW4gdGhlIHJhbmdlIDAgLSAxXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIGNvbG9yIHN0cmluZy4gSGV4IGlucHV0IHZhbHVlcyBhcmUgcmV0dXJuZWQgYXMgcmdiXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZGFya2VuKGNvbG9yLCBjb2VmZmljaWVudCkge1xuICBjb2xvciA9IGRlY29tcG9zZUNvbG9yKGNvbG9yKTtcbiAgY29lZmZpY2llbnQgPSBjbGFtcChjb2VmZmljaWVudCk7XG5cbiAgaWYgKGNvbG9yLnR5cGUuaW5kZXhPZignaHNsJykgIT09IC0xKSB7XG4gICAgY29sb3IudmFsdWVzWzJdICo9IDEgLSBjb2VmZmljaWVudDtcbiAgfSBlbHNlIGlmIChjb2xvci50eXBlLmluZGV4T2YoJ3JnYicpICE9PSAtMSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgICBjb2xvci52YWx1ZXNbaV0gKj0gMSAtIGNvZWZmaWNpZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWNvbXBvc2VDb2xvcihjb2xvcik7XG59XG4vKipcclxuICogTGlnaHRlbnMgYSBjb2xvci5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxyXG4gKiBAcGFyYW0ge251bWJlcn0gY29lZmZpY2llbnQgLSBtdWx0aXBsaWVyIGluIHRoZSByYW5nZSAwIC0gMVxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIENTUyBjb2xvciBzdHJpbmcuIEhleCBpbnB1dCB2YWx1ZXMgYXJlIHJldHVybmVkIGFzIHJnYlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGxpZ2h0ZW4oY29sb3IsIGNvZWZmaWNpZW50KSB7XG4gIGNvbG9yID0gZGVjb21wb3NlQ29sb3IoY29sb3IpO1xuICBjb2VmZmljaWVudCA9IGNsYW1wKGNvZWZmaWNpZW50KTtcblxuICBpZiAoY29sb3IudHlwZS5pbmRleE9mKCdoc2wnKSAhPT0gLTEpIHtcbiAgICBjb2xvci52YWx1ZXNbMl0gKz0gKDEwMCAtIGNvbG9yLnZhbHVlc1syXSkgKiBjb2VmZmljaWVudDtcbiAgfSBlbHNlIGlmIChjb2xvci50eXBlLmluZGV4T2YoJ3JnYicpICE9PSAtMSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgICBjb2xvci52YWx1ZXNbaV0gKz0gKDI1NSAtIGNvbG9yLnZhbHVlc1tpXSkgKiBjb2VmZmljaWVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVjb21wb3NlQ29sb3IoY29sb3IpO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbi8vIFNvcnRlZCBBU0MgYnkgc2l6ZS4gVGhhdCdzIGltcG9ydGFudC5cbi8vIEl0IGNhbid0IGJlIGNvbmZpZ3VyZWQgYXMgaXQncyB1c2VkIHN0YXRpY2FsbHkgZm9yIHByb3BUeXBlcy5cbmV4cG9ydCB2YXIga2V5cyA9IFsneHMnLCAnc20nLCAnbWQnLCAnbGcnLCAneGwnXTsgLy8gS2VlcCBpbiBtaW5kIHRoYXQgQG1lZGlhIGlzIGluY2x1c2l2ZSBieSB0aGUgQ1NTIHNwZWNpZmljYXRpb24uXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUJyZWFrcG9pbnRzKGJyZWFrcG9pbnRzKSB7XG4gIHZhciBfYnJlYWtwb2ludHMkdmFsdWVzID0gYnJlYWtwb2ludHMudmFsdWVzLFxuICAgICAgdmFsdWVzID0gX2JyZWFrcG9pbnRzJHZhbHVlcyA9PT0gdm9pZCAwID8ge1xuICAgIHhzOiAwLFxuICAgIHNtOiA2MDAsXG4gICAgbWQ6IDk2MCxcbiAgICBsZzogMTI4MCxcbiAgICB4bDogMTkyMFxuICB9IDogX2JyZWFrcG9pbnRzJHZhbHVlcyxcbiAgICAgIF9icmVha3BvaW50cyR1bml0ID0gYnJlYWtwb2ludHMudW5pdCxcbiAgICAgIHVuaXQgPSBfYnJlYWtwb2ludHMkdW5pdCA9PT0gdm9pZCAwID8gJ3B4JyA6IF9icmVha3BvaW50cyR1bml0LFxuICAgICAgX2JyZWFrcG9pbnRzJHN0ZXAgPSBicmVha3BvaW50cy5zdGVwLFxuICAgICAgc3RlcCA9IF9icmVha3BvaW50cyRzdGVwID09PSB2b2lkIDAgPyA1IDogX2JyZWFrcG9pbnRzJHN0ZXAsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhicmVha3BvaW50cywgW1widmFsdWVzXCIsIFwidW5pdFwiLCBcInN0ZXBcIl0pO1xuXG4gIGZ1bmN0aW9uIHVwKGtleSkge1xuICAgIHZhciB2YWx1ZSA9IHR5cGVvZiB2YWx1ZXNba2V5XSA9PT0gJ251bWJlcicgPyB2YWx1ZXNba2V5XSA6IGtleTtcbiAgICByZXR1cm4gXCJAbWVkaWEgKG1pbi13aWR0aDpcIi5jb25jYXQodmFsdWUpLmNvbmNhdCh1bml0LCBcIilcIik7XG4gIH1cblxuICBmdW5jdGlvbiBkb3duKGtleSkge1xuICAgIHZhciBlbmRJbmRleCA9IGtleXMuaW5kZXhPZihrZXkpICsgMTtcbiAgICB2YXIgdXBwZXJib3VuZCA9IHZhbHVlc1trZXlzW2VuZEluZGV4XV07XG5cbiAgICBpZiAoZW5kSW5kZXggPT09IGtleXMubGVuZ3RoKSB7XG4gICAgICAvLyB4bCBkb3duIGFwcGxpZXMgdG8gYWxsIHNpemVzXG4gICAgICByZXR1cm4gdXAoJ3hzJyk7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlID0gdHlwZW9mIHVwcGVyYm91bmQgPT09ICdudW1iZXInICYmIGVuZEluZGV4ID4gMCA/IHVwcGVyYm91bmQgOiBrZXk7XG4gICAgcmV0dXJuIFwiQG1lZGlhIChtYXgtd2lkdGg6XCIuY29uY2F0KHZhbHVlIC0gc3RlcCAvIDEwMCkuY29uY2F0KHVuaXQsIFwiKVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJldHdlZW4oc3RhcnQsIGVuZCkge1xuICAgIHZhciBlbmRJbmRleCA9IGtleXMuaW5kZXhPZihlbmQpO1xuXG4gICAgaWYgKGVuZEluZGV4ID09PSBrZXlzLmxlbmd0aCAtIDEpIHtcbiAgICAgIHJldHVybiB1cChzdGFydCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiQG1lZGlhIChtaW4td2lkdGg6XCIuY29uY2F0KHR5cGVvZiB2YWx1ZXNbc3RhcnRdID09PSAnbnVtYmVyJyA/IHZhbHVlc1tzdGFydF0gOiBzdGFydCkuY29uY2F0KHVuaXQsIFwiKSBhbmQgXCIpICsgXCIobWF4LXdpZHRoOlwiLmNvbmNhdCgoZW5kSW5kZXggIT09IC0xICYmIHR5cGVvZiB2YWx1ZXNba2V5c1tlbmRJbmRleCArIDFdXSA9PT0gJ251bWJlcicgPyB2YWx1ZXNba2V5c1tlbmRJbmRleCArIDFdXSA6IGVuZCkgLSBzdGVwIC8gMTAwKS5jb25jYXQodW5pdCwgXCIpXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25seShrZXkpIHtcbiAgICByZXR1cm4gYmV0d2VlbihrZXksIGtleSk7XG4gIH1cblxuICB2YXIgd2FybmVkT25jZSA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIHdpZHRoKGtleSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoIXdhcm5lZE9uY2UpIHtcbiAgICAgICAgd2FybmVkT25jZSA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUud2FybihbXCJNYXRlcmlhbC1VSTogVGhlIGB0aGVtZS5icmVha3BvaW50cy53aWR0aGAgdXRpbGl0eSBpcyBkZXByZWNhdGVkIGJlY2F1c2UgaXQncyByZWR1bmRhbnQuXCIsICdVc2UgdGhlIGB0aGVtZS5icmVha3BvaW50cy52YWx1ZXNgIGluc3RlYWQuJ10uam9pbignXFxuJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXNba2V5XTtcbiAgfVxuXG4gIHJldHVybiBfZXh0ZW5kcyh7XG4gICAga2V5czoga2V5cyxcbiAgICB2YWx1ZXM6IHZhbHVlcyxcbiAgICB1cDogdXAsXG4gICAgZG93bjogZG93bixcbiAgICBiZXR3ZWVuOiBiZXR3ZWVuLFxuICAgIG9ubHk6IG9ubHksXG4gICAgd2lkdGg6IHdpZHRoXG4gIH0sIG90aGVyKTtcbn0iLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNaXhpbnMoYnJlYWtwb2ludHMsIHNwYWNpbmcsIG1peGlucykge1xuICB2YXIgX3Rvb2xiYXI7XG5cbiAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICBndXR0ZXJzOiBmdW5jdGlvbiBndXR0ZXJzKCkge1xuICAgICAgdmFyIHN0eWxlcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgICBjb25zb2xlLndhcm4oWydNYXRlcmlhbC1VSTogdGhlbWUubWl4aW5zLmd1dHRlcnMoKSBpcyBkZXByZWNhdGVkLicsICdZb3UgY2FuIHVzZSB0aGUgc291cmNlIG9mIHRoZSBtaXhpbiBkaXJlY3RseTonLCBcIlxcbiAgICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxcbiAgICAgIHBhZGRpbmdSaWdodDogdGhlbWUuc3BhY2luZygyKSxcXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XFxuICAgICAgICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZygzKSxcXG4gICAgICAgIHBhZGRpbmdSaWdodDogdGhlbWUuc3BhY2luZygzKSxcXG4gICAgICB9LFxcbiAgICAgIFwiXS5qb2luKCdcXG4nKSk7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICBwYWRkaW5nTGVmdDogc3BhY2luZygyKSxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBzcGFjaW5nKDIpXG4gICAgICB9LCBzdHlsZXMsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgYnJlYWtwb2ludHMudXAoJ3NtJyksIF9leHRlbmRzKHtcbiAgICAgICAgcGFkZGluZ0xlZnQ6IHNwYWNpbmcoMyksXG4gICAgICAgIHBhZGRpbmdSaWdodDogc3BhY2luZygzKVxuICAgICAgfSwgc3R5bGVzW2JyZWFrcG9pbnRzLnVwKCdzbScpXSkpKTtcbiAgICB9LFxuICAgIHRvb2xiYXI6IChfdG9vbGJhciA9IHtcbiAgICAgIG1pbkhlaWdodDogNTZcbiAgICB9LCBfZGVmaW5lUHJvcGVydHkoX3Rvb2xiYXIsIFwiXCIuY29uY2F0KGJyZWFrcG9pbnRzLnVwKCd4cycpLCBcIiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCIpLCB7XG4gICAgICBtaW5IZWlnaHQ6IDQ4XG4gICAgfSksIF9kZWZpbmVQcm9wZXJ0eShfdG9vbGJhciwgYnJlYWtwb2ludHMudXAoJ3NtJyksIHtcbiAgICAgIG1pbkhlaWdodDogNjRcbiAgICB9KSwgX3Rvb2xiYXIpXG4gIH0sIG1peGlucyk7XG59IiwiaW1wb3J0IHsgZGVlcG1lcmdlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBjcmVhdGVUaGVtZSBmcm9tICcuL2NyZWF0ZVRoZW1lJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU11aVN0cmljdE1vZGVUaGVtZShvcHRpb25zKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVUaGVtZS5hcHBseSh2b2lkIDAsIFtkZWVwbWVyZ2Uoe1xuICAgIHVuc3RhYmxlX3N0cmljdE1vZGU6IHRydWVcbiAgfSwgb3B0aW9ucyldLmNvbmNhdChhcmdzKSk7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IHsgZm9ybWF0TXVpRXJyb3JNZXNzYWdlIGFzIF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3V0aWxzXCI7XG5pbXBvcnQgeyBkZWVwbWVyZ2UgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IGNvbW1vbiBmcm9tICcuLi9jb2xvcnMvY29tbW9uJztcbmltcG9ydCBncmV5IGZyb20gJy4uL2NvbG9ycy9ncmV5JztcbmltcG9ydCBpbmRpZ28gZnJvbSAnLi4vY29sb3JzL2luZGlnbyc7XG5pbXBvcnQgcGluayBmcm9tICcuLi9jb2xvcnMvcGluayc7XG5pbXBvcnQgcmVkIGZyb20gJy4uL2NvbG9ycy9yZWQnO1xuaW1wb3J0IG9yYW5nZSBmcm9tICcuLi9jb2xvcnMvb3JhbmdlJztcbmltcG9ydCBibHVlIGZyb20gJy4uL2NvbG9ycy9ibHVlJztcbmltcG9ydCBncmVlbiBmcm9tICcuLi9jb2xvcnMvZ3JlZW4nO1xuaW1wb3J0IHsgZGFya2VuLCBnZXRDb250cmFzdFJhdGlvLCBsaWdodGVuIH0gZnJvbSAnLi9jb2xvck1hbmlwdWxhdG9yJztcbmV4cG9ydCB2YXIgbGlnaHQgPSB7XG4gIC8vIFRoZSBjb2xvcnMgdXNlZCB0byBzdHlsZSB0aGUgdGV4dC5cbiAgdGV4dDoge1xuICAgIC8vIFRoZSBtb3N0IGltcG9ydGFudCB0ZXh0LlxuICAgIHByaW1hcnk6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJyxcbiAgICAvLyBTZWNvbmRhcnkgdGV4dC5cbiAgICBzZWNvbmRhcnk6ICdyZ2JhKDAsIDAsIDAsIDAuNTQpJyxcbiAgICAvLyBEaXNhYmxlZCB0ZXh0IGhhdmUgZXZlbiBsb3dlciB2aXN1YWwgcHJvbWluZW5jZS5cbiAgICBkaXNhYmxlZDogJ3JnYmEoMCwgMCwgMCwgMC4zOCknLFxuICAgIC8vIFRleHQgaGludHMuXG4gICAgaGludDogJ3JnYmEoMCwgMCwgMCwgMC4zOCknXG4gIH0sXG4gIC8vIFRoZSBjb2xvciB1c2VkIHRvIGRpdmlkZSBkaWZmZXJlbnQgZWxlbWVudHMuXG4gIGRpdmlkZXI6ICdyZ2JhKDAsIDAsIDAsIDAuMTIpJyxcbiAgLy8gVGhlIGJhY2tncm91bmQgY29sb3JzIHVzZWQgdG8gc3R5bGUgdGhlIHN1cmZhY2VzLlxuICAvLyBDb25zaXN0ZW5jeSBiZXR3ZWVuIHRoZXNlIHZhbHVlcyBpcyBpbXBvcnRhbnQuXG4gIGJhY2tncm91bmQ6IHtcbiAgICBwYXBlcjogY29tbW9uLndoaXRlLFxuICAgIGRlZmF1bHQ6IGdyZXlbNTBdXG4gIH0sXG4gIC8vIFRoZSBjb2xvcnMgdXNlZCB0byBzdHlsZSB0aGUgYWN0aW9uIGVsZW1lbnRzLlxuICBhY3Rpb246IHtcbiAgICAvLyBUaGUgY29sb3Igb2YgYW4gYWN0aXZlIGFjdGlvbiBsaWtlIGFuIGljb24gYnV0dG9uLlxuICAgIGFjdGl2ZTogJ3JnYmEoMCwgMCwgMCwgMC41NCknLFxuICAgIC8vIFRoZSBjb2xvciBvZiBhbiBob3ZlcmVkIGFjdGlvbi5cbiAgICBob3ZlcjogJ3JnYmEoMCwgMCwgMCwgMC4wNCknLFxuICAgIGhvdmVyT3BhY2l0eTogMC4wNCxcbiAgICAvLyBUaGUgY29sb3Igb2YgYSBzZWxlY3RlZCBhY3Rpb24uXG4gICAgc2VsZWN0ZWQ6ICdyZ2JhKDAsIDAsIDAsIDAuMDgpJyxcbiAgICBzZWxlY3RlZE9wYWNpdHk6IDAuMDgsXG4gICAgLy8gVGhlIGNvbG9yIG9mIGEgZGlzYWJsZWQgYWN0aW9uLlxuICAgIGRpc2FibGVkOiAncmdiYSgwLCAwLCAwLCAwLjI2KScsXG4gICAgLy8gVGhlIGJhY2tncm91bmQgY29sb3Igb2YgYSBkaXNhYmxlZCBhY3Rpb24uXG4gICAgZGlzYWJsZWRCYWNrZ3JvdW5kOiAncmdiYSgwLCAwLCAwLCAwLjEyKScsXG4gICAgZGlzYWJsZWRPcGFjaXR5OiAwLjM4LFxuICAgIGZvY3VzOiAncmdiYSgwLCAwLCAwLCAwLjEyKScsXG4gICAgZm9jdXNPcGFjaXR5OiAwLjEyLFxuICAgIGFjdGl2YXRlZE9wYWNpdHk6IDAuMTJcbiAgfVxufTtcbmV4cG9ydCB2YXIgZGFyayA9IHtcbiAgdGV4dDoge1xuICAgIHByaW1hcnk6IGNvbW1vbi53aGl0ZSxcbiAgICBzZWNvbmRhcnk6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyknLFxuICAgIGRpc2FibGVkOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJyxcbiAgICBoaW50OiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJyxcbiAgICBpY29uOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJ1xuICB9LFxuICBkaXZpZGVyOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKScsXG4gIGJhY2tncm91bmQ6IHtcbiAgICBwYXBlcjogZ3JleVs4MDBdLFxuICAgIGRlZmF1bHQ6ICcjMzAzMDMwJ1xuICB9LFxuICBhY3Rpb246IHtcbiAgICBhY3RpdmU6IGNvbW1vbi53aGl0ZSxcbiAgICBob3ZlcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCknLFxuICAgIGhvdmVyT3BhY2l0eTogMC4wOCxcbiAgICBzZWxlY3RlZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNiknLFxuICAgIHNlbGVjdGVkT3BhY2l0eTogMC4xNixcbiAgICBkaXNhYmxlZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKScsXG4gICAgZGlzYWJsZWRCYWNrZ3JvdW5kOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKScsXG4gICAgZGlzYWJsZWRPcGFjaXR5OiAwLjM4LFxuICAgIGZvY3VzOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKScsXG4gICAgZm9jdXNPcGFjaXR5OiAwLjEyLFxuICAgIGFjdGl2YXRlZE9wYWNpdHk6IDAuMjRcbiAgfVxufTtcblxuZnVuY3Rpb24gYWRkTGlnaHRPckRhcmsoaW50ZW50LCBkaXJlY3Rpb24sIHNoYWRlLCB0b25hbE9mZnNldCkge1xuICB2YXIgdG9uYWxPZmZzZXRMaWdodCA9IHRvbmFsT2Zmc2V0LmxpZ2h0IHx8IHRvbmFsT2Zmc2V0O1xuICB2YXIgdG9uYWxPZmZzZXREYXJrID0gdG9uYWxPZmZzZXQuZGFyayB8fCB0b25hbE9mZnNldCAqIDEuNTtcblxuICBpZiAoIWludGVudFtkaXJlY3Rpb25dKSB7XG4gICAgaWYgKGludGVudC5oYXNPd25Qcm9wZXJ0eShzaGFkZSkpIHtcbiAgICAgIGludGVudFtkaXJlY3Rpb25dID0gaW50ZW50W3NoYWRlXTtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2xpZ2h0Jykge1xuICAgICAgaW50ZW50LmxpZ2h0ID0gbGlnaHRlbihpbnRlbnQubWFpbiwgdG9uYWxPZmZzZXRMaWdodCk7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdkYXJrJykge1xuICAgICAgaW50ZW50LmRhcmsgPSBkYXJrZW4oaW50ZW50Lm1haW4sIHRvbmFsT2Zmc2V0RGFyayk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVBhbGV0dGUocGFsZXR0ZSkge1xuICB2YXIgX3BhbGV0dGUkcHJpbWFyeSA9IHBhbGV0dGUucHJpbWFyeSxcbiAgICAgIHByaW1hcnkgPSBfcGFsZXR0ZSRwcmltYXJ5ID09PSB2b2lkIDAgPyB7XG4gICAgbGlnaHQ6IGluZGlnb1szMDBdLFxuICAgIG1haW46IGluZGlnb1s1MDBdLFxuICAgIGRhcms6IGluZGlnb1s3MDBdXG4gIH0gOiBfcGFsZXR0ZSRwcmltYXJ5LFxuICAgICAgX3BhbGV0dGUkc2Vjb25kYXJ5ID0gcGFsZXR0ZS5zZWNvbmRhcnksXG4gICAgICBzZWNvbmRhcnkgPSBfcGFsZXR0ZSRzZWNvbmRhcnkgPT09IHZvaWQgMCA/IHtcbiAgICBsaWdodDogcGluay5BMjAwLFxuICAgIG1haW46IHBpbmsuQTQwMCxcbiAgICBkYXJrOiBwaW5rLkE3MDBcbiAgfSA6IF9wYWxldHRlJHNlY29uZGFyeSxcbiAgICAgIF9wYWxldHRlJGVycm9yID0gcGFsZXR0ZS5lcnJvcixcbiAgICAgIGVycm9yID0gX3BhbGV0dGUkZXJyb3IgPT09IHZvaWQgMCA/IHtcbiAgICBsaWdodDogcmVkWzMwMF0sXG4gICAgbWFpbjogcmVkWzUwMF0sXG4gICAgZGFyazogcmVkWzcwMF1cbiAgfSA6IF9wYWxldHRlJGVycm9yLFxuICAgICAgX3BhbGV0dGUkd2FybmluZyA9IHBhbGV0dGUud2FybmluZyxcbiAgICAgIHdhcm5pbmcgPSBfcGFsZXR0ZSR3YXJuaW5nID09PSB2b2lkIDAgPyB7XG4gICAgbGlnaHQ6IG9yYW5nZVszMDBdLFxuICAgIG1haW46IG9yYW5nZVs1MDBdLFxuICAgIGRhcms6IG9yYW5nZVs3MDBdXG4gIH0gOiBfcGFsZXR0ZSR3YXJuaW5nLFxuICAgICAgX3BhbGV0dGUkaW5mbyA9IHBhbGV0dGUuaW5mbyxcbiAgICAgIGluZm8gPSBfcGFsZXR0ZSRpbmZvID09PSB2b2lkIDAgPyB7XG4gICAgbGlnaHQ6IGJsdWVbMzAwXSxcbiAgICBtYWluOiBibHVlWzUwMF0sXG4gICAgZGFyazogYmx1ZVs3MDBdXG4gIH0gOiBfcGFsZXR0ZSRpbmZvLFxuICAgICAgX3BhbGV0dGUkc3VjY2VzcyA9IHBhbGV0dGUuc3VjY2VzcyxcbiAgICAgIHN1Y2Nlc3MgPSBfcGFsZXR0ZSRzdWNjZXNzID09PSB2b2lkIDAgPyB7XG4gICAgbGlnaHQ6IGdyZWVuWzMwMF0sXG4gICAgbWFpbjogZ3JlZW5bNTAwXSxcbiAgICBkYXJrOiBncmVlbls3MDBdXG4gIH0gOiBfcGFsZXR0ZSRzdWNjZXNzLFxuICAgICAgX3BhbGV0dGUkdHlwZSA9IHBhbGV0dGUudHlwZSxcbiAgICAgIHR5cGUgPSBfcGFsZXR0ZSR0eXBlID09PSB2b2lkIDAgPyAnbGlnaHQnIDogX3BhbGV0dGUkdHlwZSxcbiAgICAgIF9wYWxldHRlJGNvbnRyYXN0VGhyZSA9IHBhbGV0dGUuY29udHJhc3RUaHJlc2hvbGQsXG4gICAgICBjb250cmFzdFRocmVzaG9sZCA9IF9wYWxldHRlJGNvbnRyYXN0VGhyZSA9PT0gdm9pZCAwID8gMyA6IF9wYWxldHRlJGNvbnRyYXN0VGhyZSxcbiAgICAgIF9wYWxldHRlJHRvbmFsT2Zmc2V0ID0gcGFsZXR0ZS50b25hbE9mZnNldCxcbiAgICAgIHRvbmFsT2Zmc2V0ID0gX3BhbGV0dGUkdG9uYWxPZmZzZXQgPT09IHZvaWQgMCA/IDAuMiA6IF9wYWxldHRlJHRvbmFsT2Zmc2V0LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocGFsZXR0ZSwgW1wicHJpbWFyeVwiLCBcInNlY29uZGFyeVwiLCBcImVycm9yXCIsIFwid2FybmluZ1wiLCBcImluZm9cIiwgXCJzdWNjZXNzXCIsIFwidHlwZVwiLCBcImNvbnRyYXN0VGhyZXNob2xkXCIsIFwidG9uYWxPZmZzZXRcIl0pOyAvLyBVc2UgdGhlIHNhbWUgbG9naWMgYXNcbiAgLy8gQm9vdHN0cmFwOiBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi8xZDZlMzcxMGRkNDQ3ZGUxYTIwMGYyOWU4ZmE1MjFmOGEwOTA4ZjcwL3Njc3MvX2Z1bmN0aW9ucy5zY3NzI0w1OVxuICAvLyBhbmQgbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIgaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9hYzQ2Yjg4NjNjNGRhYjlmYzIyYzRjNjYyZGM2YmQxYjY1ZGQ2NTJmL3BhY2thZ2VzL21kYy10aGVtZS9fZnVuY3Rpb25zLnNjc3MjTDU0XG5cblxuICBmdW5jdGlvbiBnZXRDb250cmFzdFRleHQoYmFja2dyb3VuZCkge1xuICAgIHZhciBjb250cmFzdFRleHQgPSBnZXRDb250cmFzdFJhdGlvKGJhY2tncm91bmQsIGRhcmsudGV4dC5wcmltYXJ5KSA+PSBjb250cmFzdFRocmVzaG9sZCA/IGRhcmsudGV4dC5wcmltYXJ5IDogbGlnaHQudGV4dC5wcmltYXJ5O1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBjb250cmFzdCA9IGdldENvbnRyYXN0UmF0aW8oYmFja2dyb3VuZCwgY29udHJhc3RUZXh0KTtcblxuICAgICAgaWYgKGNvbnRyYXN0IDwgMykge1xuICAgICAgICBjb25zb2xlLmVycm9yKFtcIk1hdGVyaWFsLVVJOiBUaGUgY29udHJhc3QgcmF0aW8gb2YgXCIuY29uY2F0KGNvbnRyYXN0LCBcIjoxIGZvciBcIikuY29uY2F0KGNvbnRyYXN0VGV4dCwgXCIgb24gXCIpLmNvbmNhdChiYWNrZ3JvdW5kKSwgJ2ZhbGxzIGJlbG93IHRoZSBXQ0FHIHJlY29tbWVuZGVkIGFic29sdXRlIG1pbmltdW0gY29udHJhc3QgcmF0aW8gb2YgMzoxLicsICdodHRwczovL3d3dy53My5vcmcvVFIvMjAwOC9SRUMtV0NBRzIwLTIwMDgxMjExLyN2aXN1YWwtYXVkaW8tY29udHJhc3QtY29udHJhc3QnXS5qb2luKCdcXG4nKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyYXN0VGV4dDtcbiAgfVxuXG4gIHZhciBhdWdtZW50Q29sb3IgPSBmdW5jdGlvbiBhdWdtZW50Q29sb3IoY29sb3IpIHtcbiAgICB2YXIgbWFpblNoYWRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiA1MDA7XG4gICAgdmFyIGxpZ2h0U2hhZGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDMwMDtcbiAgICB2YXIgZGFya1NoYWRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiA3MDA7XG4gICAgY29sb3IgPSBfZXh0ZW5kcyh7fSwgY29sb3IpO1xuXG4gICAgaWYgKCFjb2xvci5tYWluICYmIGNvbG9yW21haW5TaGFkZV0pIHtcbiAgICAgIGNvbG9yLm1haW4gPSBjb2xvclttYWluU2hhZGVdO1xuICAgIH1cblxuICAgIGlmICghY29sb3IubWFpbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFwiTWF0ZXJpYWwtVUk6IFRoZSBjb2xvciBwcm92aWRlZCB0byBhdWdtZW50Q29sb3IoY29sb3IpIGlzIGludmFsaWQuXFxuVGhlIGNvbG9yIG9iamVjdCBuZWVkcyB0byBoYXZlIGEgYG1haW5gIHByb3BlcnR5IG9yIGEgYFwiLmNvbmNhdChtYWluU2hhZGUsIFwiYCBwcm9wZXJ0eS5cIikgOiBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlKDQsIG1haW5TaGFkZSkpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29sb3IubWFpbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBcIk1hdGVyaWFsLVVJOiBUaGUgY29sb3IgcHJvdmlkZWQgdG8gYXVnbWVudENvbG9yKGNvbG9yKSBpcyBpbnZhbGlkLlxcbmBjb2xvci5tYWluYCBzaG91bGQgYmUgYSBzdHJpbmcsIGJ1dCBgXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KGNvbG9yLm1haW4pLCBcImAgd2FzIHByb3ZpZGVkIGluc3RlYWQuXFxuXFxuRGlkIHlvdSBpbnRlbmQgdG8gdXNlIG9uZSBvZiB0aGUgZm9sbG93aW5nIGFwcHJvYWNoZXM/XFxuXFxuaW1wb3J0IHtcXHhBMGdyZWVuIH0gZnJvbSBcXFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXFxcIjtcXG5cXG5jb25zdCB0aGVtZTEgPSBjcmVhdGVUaGVtZSh7IHBhbGV0dGU6IHtcXG4gIHByaW1hcnk6IGdyZWVuLFxcbn0gfSk7XFxuXFxuY29uc3QgdGhlbWUyID0gY3JlYXRlVGhlbWUoeyBwYWxldHRlOiB7XFxuICBwcmltYXJ5OiB7IG1haW46IGdyZWVuWzUwMF0gfSxcXG59IH0pO1wiKSA6IF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UoNSwgSlNPTi5zdHJpbmdpZnkoY29sb3IubWFpbikpKTtcbiAgICB9XG5cbiAgICBhZGRMaWdodE9yRGFyayhjb2xvciwgJ2xpZ2h0JywgbGlnaHRTaGFkZSwgdG9uYWxPZmZzZXQpO1xuICAgIGFkZExpZ2h0T3JEYXJrKGNvbG9yLCAnZGFyaycsIGRhcmtTaGFkZSwgdG9uYWxPZmZzZXQpO1xuXG4gICAgaWYgKCFjb2xvci5jb250cmFzdFRleHQpIHtcbiAgICAgIGNvbG9yLmNvbnRyYXN0VGV4dCA9IGdldENvbnRyYXN0VGV4dChjb2xvci5tYWluKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3I7XG4gIH07XG5cbiAgdmFyIHR5cGVzID0ge1xuICAgIGRhcms6IGRhcmssXG4gICAgbGlnaHQ6IGxpZ2h0XG4gIH07XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXR5cGVzW3R5cGVdKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiTWF0ZXJpYWwtVUk6IFRoZSBwYWxldHRlIHR5cGUgYFwiLmNvbmNhdCh0eXBlLCBcImAgaXMgbm90IHN1cHBvcnRlZC5cIikpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBwYWxldHRlT3V0cHV0ID0gZGVlcG1lcmdlKF9leHRlbmRzKHtcbiAgICAvLyBBIGNvbGxlY3Rpb24gb2YgY29tbW9uIGNvbG9ycy5cbiAgICBjb21tb246IGNvbW1vbixcbiAgICAvLyBUaGUgcGFsZXR0ZSB0eXBlLCBjYW4gYmUgbGlnaHQgb3IgZGFyay5cbiAgICB0eXBlOiB0eXBlLFxuICAgIC8vIFRoZSBjb2xvcnMgdXNlZCB0byByZXByZXNlbnQgcHJpbWFyeSBpbnRlcmZhY2UgZWxlbWVudHMgZm9yIGEgdXNlci5cbiAgICBwcmltYXJ5OiBhdWdtZW50Q29sb3IocHJpbWFyeSksXG4gICAgLy8gVGhlIGNvbG9ycyB1c2VkIHRvIHJlcHJlc2VudCBzZWNvbmRhcnkgaW50ZXJmYWNlIGVsZW1lbnRzIGZvciBhIHVzZXIuXG4gICAgc2Vjb25kYXJ5OiBhdWdtZW50Q29sb3Ioc2Vjb25kYXJ5LCAnQTQwMCcsICdBMjAwJywgJ0E3MDAnKSxcbiAgICAvLyBUaGUgY29sb3JzIHVzZWQgdG8gcmVwcmVzZW50IGludGVyZmFjZSBlbGVtZW50cyB0aGF0IHRoZSB1c2VyIHNob3VsZCBiZSBtYWRlIGF3YXJlIG9mLlxuICAgIGVycm9yOiBhdWdtZW50Q29sb3IoZXJyb3IpLFxuICAgIC8vIFRoZSBjb2xvcnMgdXNlZCB0byByZXByZXNlbnQgcG90ZW50aWFsbHkgZGFuZ2Vyb3VzIGFjdGlvbnMgb3IgaW1wb3J0YW50IG1lc3NhZ2VzLlxuICAgIHdhcm5pbmc6IGF1Z21lbnRDb2xvcih3YXJuaW5nKSxcbiAgICAvLyBUaGUgY29sb3JzIHVzZWQgdG8gcHJlc2VudCBpbmZvcm1hdGlvbiB0byB0aGUgdXNlciB0aGF0IGlzIG5ldXRyYWwgYW5kIG5vdCBuZWNlc3NhcmlseSBpbXBvcnRhbnQuXG4gICAgaW5mbzogYXVnbWVudENvbG9yKGluZm8pLFxuICAgIC8vIFRoZSBjb2xvcnMgdXNlZCB0byBpbmRpY2F0ZSB0aGUgc3VjY2Vzc2Z1bCBjb21wbGV0aW9uIG9mIGFuIGFjdGlvbiB0aGF0IHVzZXIgdHJpZ2dlcmVkLlxuICAgIHN1Y2Nlc3M6IGF1Z21lbnRDb2xvcihzdWNjZXNzKSxcbiAgICAvLyBUaGUgZ3JleSBjb2xvcnMuXG4gICAgZ3JleTogZ3JleSxcbiAgICAvLyBVc2VkIGJ5IGBnZXRDb250cmFzdFRleHQoKWAgdG8gbWF4aW1pemUgdGhlIGNvbnRyYXN0IGJldHdlZW5cbiAgICAvLyB0aGUgYmFja2dyb3VuZCBhbmQgdGhlIHRleHQuXG4gICAgY29udHJhc3RUaHJlc2hvbGQ6IGNvbnRyYXN0VGhyZXNob2xkLFxuICAgIC8vIFRha2VzIGEgYmFja2dyb3VuZCBjb2xvciBhbmQgcmV0dXJucyB0aGUgdGV4dCBjb2xvciB0aGF0IG1heGltaXplcyB0aGUgY29udHJhc3QuXG4gICAgZ2V0Q29udHJhc3RUZXh0OiBnZXRDb250cmFzdFRleHQsXG4gICAgLy8gR2VuZXJhdGUgYSByaWNoIGNvbG9yIG9iamVjdC5cbiAgICBhdWdtZW50Q29sb3I6IGF1Z21lbnRDb2xvcixcbiAgICAvLyBVc2VkIGJ5IHRoZSBmdW5jdGlvbnMgYmVsb3cgdG8gc2hpZnQgYSBjb2xvcidzIGx1bWluYW5jZSBieSBhcHByb3hpbWF0ZWx5XG4gICAgLy8gdHdvIGluZGV4ZXMgd2l0aGluIGl0cyB0b25hbCBwYWxldHRlLlxuICAgIC8vIEUuZy4sIHNoaWZ0IGZyb20gUmVkIDUwMCB0byBSZWQgMzAwIG9yIFJlZCA3MDAuXG4gICAgdG9uYWxPZmZzZXQ6IHRvbmFsT2Zmc2V0XG4gIH0sIHR5cGVzW3R5cGVdKSwgb3RoZXIpO1xuICByZXR1cm4gcGFsZXR0ZU91dHB1dDtcbn0iLCJpbXBvcnQgeyBjcmVhdGVVbmFyeVNwYWNpbmcgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3lzdGVtJztcbnZhciB3YXJuT25jZTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVNwYWNpbmcoKSB7XG4gIHZhciBzcGFjaW5nSW5wdXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDg7XG5cbiAgLy8gQWxyZWFkeSB0cmFuc2Zvcm1lZC5cbiAgaWYgKHNwYWNpbmdJbnB1dC5tdWkpIHtcbiAgICByZXR1cm4gc3BhY2luZ0lucHV0O1xuICB9IC8vIE1hdGVyaWFsIERlc2lnbiBsYXlvdXRzIGFyZSB2aXN1YWxseSBiYWxhbmNlZC4gTW9zdCBtZWFzdXJlbWVudHMgYWxpZ24gdG8gYW4gOGRwIGdyaWQgYXBwbGllZCwgd2hpY2ggYWxpZ25zIGJvdGggc3BhY2luZyBhbmQgdGhlIG92ZXJhbGwgbGF5b3V0LlxuICAvLyBTbWFsbGVyIGNvbXBvbmVudHMsIHN1Y2ggYXMgaWNvbnMgYW5kIHR5cGUsIGNhbiBhbGlnbiB0byBhIDRkcCBncmlkLlxuICAvLyBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9sYXlvdXQvdW5kZXJzdGFuZGluZy1sYXlvdXQuaHRtbCN1c2FnZVxuXG5cbiAgdmFyIHRyYW5zZm9ybSA9IGNyZWF0ZVVuYXJ5U3BhY2luZyh7XG4gICAgc3BhY2luZzogc3BhY2luZ0lucHV0XG4gIH0pO1xuXG4gIHZhciBzcGFjaW5nID0gZnVuY3Rpb24gc3BhY2luZygpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICghKGFyZ3MubGVuZ3RoIDw9IDQpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNYXRlcmlhbC1VSTogVG9vIG1hbnkgYXJndW1lbnRzIHByb3ZpZGVkLCBleHBlY3RlZCBiZXR3ZWVuIDAgYW5kIDQsIGdvdCBcIi5jb25jYXQoYXJncy5sZW5ndGgpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0cmFuc2Zvcm0oMSk7XG4gICAgfVxuXG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gdHJhbnNmb3JtKGFyZ3NbMF0pO1xuICAgIH1cblxuICAgIHJldHVybiBhcmdzLm1hcChmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgICAgIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBhcmd1bWVudDtcbiAgICAgIH1cblxuICAgICAgdmFyIG91dHB1dCA9IHRyYW5zZm9ybShhcmd1bWVudCk7XG4gICAgICByZXR1cm4gdHlwZW9mIG91dHB1dCA9PT0gJ251bWJlcicgPyBcIlwiLmNvbmNhdChvdXRwdXQsIFwicHhcIikgOiBvdXRwdXQ7XG4gICAgfSkuam9pbignICcpO1xuICB9OyAvLyBCYWNrd2FyZCBjb21wYXRpYmlsaXR5LCB0byByZW1vdmUgaW4gdjUuXG5cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3BhY2luZywgJ3VuaXQnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoIXdhcm5PbmNlIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCcpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFsnTWF0ZXJpYWwtVUk6IHRoZW1lLnNwYWNpbmcudW5pdCB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLicsICdJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdjUuJywgJ1lvdSBjYW4gcmVwbGFjZSBgdGhlbWUuc3BhY2luZy51bml0ICogeWAgd2l0aCBgdGhlbWUuc3BhY2luZyh5KWAuJywgJycsICdZb3UgY2FuIHVzZSB0aGUgYGh0dHBzOi8vZ2l0aHViLmNvbS9tdWktb3JnL21hdGVyaWFsLXVpL3RyZWUvbWFzdGVyL3BhY2thZ2VzL21hdGVyaWFsLXVpLWNvZGVtb2QvUkVBRE1FLm1kI3RoZW1lLXNwYWNpbmctYXBpYCBtaWdyYXRpb24gaGVscGVyIHRvIG1ha2UgdGhlIHByb2Nlc3Mgc21vb3RoZXIuJ10uam9pbignXFxuJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2Fybk9uY2UgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3BhY2luZ0lucHV0O1xuICAgIH1cbiAgfSk7XG4gIHNwYWNpbmcubXVpID0gdHJ1ZTtcbiAgcmV0dXJuIHNwYWNpbmc7XG59IiwiaW1wb3J0IHsgY3JlYXRlU3R5bGVzIGFzIGNyZWF0ZVN0eWxlc09yaWdpbmFsIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7IC8vIGxldCB3YXJuT25jZSA9IGZhbHNlO1xuLy8gVG8gcmVtb3ZlIGluIHY1XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVN0eWxlcyhzdHlsZXMpIHtcbiAgLy8gd2FybmluZyhcbiAgLy8gICB3YXJuT25jZSxcbiAgLy8gICBbXG4gIC8vICAgICAnTWF0ZXJpYWwtVUk6IGNyZWF0ZVN0eWxlcyBmcm9tIEBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyBpcyBkZXByZWNhdGVkLicsXG4gIC8vICAgICAnUGxlYXNlIHVzZSBAbWF0ZXJpYWwtdWkvc3R5bGVzL2NyZWF0ZVN0eWxlcycsXG4gIC8vICAgXS5qb2luKCdcXG4nKSxcbiAgLy8gKTtcbiAgLy8gd2Fybk9uY2UgPSB0cnVlO1xuICByZXR1cm4gY3JlYXRlU3R5bGVzT3JpZ2luYWwoc3R5bGVzKTtcbn0iLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCB7IGRlZXBtZXJnZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgY3JlYXRlQnJlYWtwb2ludHMgZnJvbSAnLi9jcmVhdGVCcmVha3BvaW50cyc7XG5pbXBvcnQgY3JlYXRlTWl4aW5zIGZyb20gJy4vY3JlYXRlTWl4aW5zJztcbmltcG9ydCBjcmVhdGVQYWxldHRlIGZyb20gJy4vY3JlYXRlUGFsZXR0ZSc7XG5pbXBvcnQgY3JlYXRlVHlwb2dyYXBoeSBmcm9tICcuL2NyZWF0ZVR5cG9ncmFwaHknO1xuaW1wb3J0IHNoYWRvd3MgZnJvbSAnLi9zaGFkb3dzJztcbmltcG9ydCBzaGFwZSBmcm9tICcuL3NoYXBlJztcbmltcG9ydCBjcmVhdGVTcGFjaW5nIGZyb20gJy4vY3JlYXRlU3BhY2luZyc7XG5pbXBvcnQgdHJhbnNpdGlvbnMgZnJvbSAnLi90cmFuc2l0aW9ucyc7XG5pbXBvcnQgekluZGV4IGZyb20gJy4vekluZGV4JztcblxuZnVuY3Rpb24gY3JlYXRlVGhlbWUoKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICB2YXIgX29wdGlvbnMkYnJlYWtwb2ludHMgPSBvcHRpb25zLmJyZWFrcG9pbnRzLFxuICAgICAgYnJlYWtwb2ludHNJbnB1dCA9IF9vcHRpb25zJGJyZWFrcG9pbnRzID09PSB2b2lkIDAgPyB7fSA6IF9vcHRpb25zJGJyZWFrcG9pbnRzLFxuICAgICAgX29wdGlvbnMkbWl4aW5zID0gb3B0aW9ucy5taXhpbnMsXG4gICAgICBtaXhpbnNJbnB1dCA9IF9vcHRpb25zJG1peGlucyA9PT0gdm9pZCAwID8ge30gOiBfb3B0aW9ucyRtaXhpbnMsXG4gICAgICBfb3B0aW9ucyRwYWxldHRlID0gb3B0aW9ucy5wYWxldHRlLFxuICAgICAgcGFsZXR0ZUlucHV0ID0gX29wdGlvbnMkcGFsZXR0ZSA9PT0gdm9pZCAwID8ge30gOiBfb3B0aW9ucyRwYWxldHRlLFxuICAgICAgc3BhY2luZ0lucHV0ID0gb3B0aW9ucy5zcGFjaW5nLFxuICAgICAgX29wdGlvbnMkdHlwb2dyYXBoeSA9IG9wdGlvbnMudHlwb2dyYXBoeSxcbiAgICAgIHR5cG9ncmFwaHlJbnB1dCA9IF9vcHRpb25zJHR5cG9ncmFwaHkgPT09IHZvaWQgMCA/IHt9IDogX29wdGlvbnMkdHlwb2dyYXBoeSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9wdGlvbnMsIFtcImJyZWFrcG9pbnRzXCIsIFwibWl4aW5zXCIsIFwicGFsZXR0ZVwiLCBcInNwYWNpbmdcIiwgXCJ0eXBvZ3JhcGh5XCJdKTtcblxuICB2YXIgcGFsZXR0ZSA9IGNyZWF0ZVBhbGV0dGUocGFsZXR0ZUlucHV0KTtcbiAgdmFyIGJyZWFrcG9pbnRzID0gY3JlYXRlQnJlYWtwb2ludHMoYnJlYWtwb2ludHNJbnB1dCk7XG4gIHZhciBzcGFjaW5nID0gY3JlYXRlU3BhY2luZyhzcGFjaW5nSW5wdXQpO1xuICB2YXIgbXVpVGhlbWUgPSBkZWVwbWVyZ2Uoe1xuICAgIGJyZWFrcG9pbnRzOiBicmVha3BvaW50cyxcbiAgICBkaXJlY3Rpb246ICdsdHInLFxuICAgIG1peGluczogY3JlYXRlTWl4aW5zKGJyZWFrcG9pbnRzLCBzcGFjaW5nLCBtaXhpbnNJbnB1dCksXG4gICAgb3ZlcnJpZGVzOiB7fSxcbiAgICAvLyBJbmplY3QgY3VzdG9tIHN0eWxlc1xuICAgIHBhbGV0dGU6IHBhbGV0dGUsXG4gICAgcHJvcHM6IHt9LFxuICAgIC8vIFByb3ZpZGUgZGVmYXVsdCBwcm9wc1xuICAgIHNoYWRvd3M6IHNoYWRvd3MsXG4gICAgdHlwb2dyYXBoeTogY3JlYXRlVHlwb2dyYXBoeShwYWxldHRlLCB0eXBvZ3JhcGh5SW5wdXQpLFxuICAgIHNwYWNpbmc6IHNwYWNpbmcsXG4gICAgc2hhcGU6IHNoYXBlLFxuICAgIHRyYW5zaXRpb25zOiB0cmFuc2l0aW9ucyxcbiAgICB6SW5kZXg6IHpJbmRleFxuICB9LCBvdGhlcik7XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgbXVpVGhlbWUgPSBhcmdzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBhcmd1bWVudCkge1xuICAgIHJldHVybiBkZWVwbWVyZ2UoYWNjLCBhcmd1bWVudCk7XG4gIH0sIG11aVRoZW1lKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHZhciBwc2V1ZG9DbGFzc2VzID0gWydjaGVja2VkJywgJ2Rpc2FibGVkJywgJ2Vycm9yJywgJ2ZvY3VzZWQnLCAnZm9jdXNWaXNpYmxlJywgJ3JlcXVpcmVkJywgJ2V4cGFuZGVkJywgJ3NlbGVjdGVkJ107XG5cbiAgICB2YXIgdHJhdmVyc2UgPSBmdW5jdGlvbiB0cmF2ZXJzZShub2RlLCBwYXJlbnRLZXkpIHtcbiAgICAgIHZhciBkZXB0aCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogMTtcbiAgICAgIHZhciBrZXk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBndWFyZC1mb3ItaW4sIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG5cbiAgICAgIGZvciAoa2V5IGluIG5vZGUpIHtcbiAgICAgICAgdmFyIGNoaWxkID0gbm9kZVtrZXldO1xuXG4gICAgICAgIGlmIChkZXB0aCA9PT0gMSkge1xuICAgICAgICAgIGlmIChrZXkuaW5kZXhPZignTXVpJykgPT09IDAgJiYgY2hpbGQpIHtcbiAgICAgICAgICAgIHRyYXZlcnNlKGNoaWxkLCBrZXksIGRlcHRoICsgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHBzZXVkb0NsYXNzZXMuaW5kZXhPZihrZXkpICE9PSAtMSAmJiBPYmplY3Qua2V5cyhjaGlsZCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFtcIk1hdGVyaWFsLVVJOiBUaGUgYFwiLmNvbmNhdChwYXJlbnRLZXksIFwiYCBjb21wb25lbnQgaW5jcmVhc2VzIFwiKSArIFwidGhlIENTUyBzcGVjaWZpY2l0eSBvZiB0aGUgYFwiLmNvbmNhdChrZXksIFwiYCBpbnRlcm5hbCBzdGF0ZS5cIiksICdZb3UgY2FuIG5vdCBvdmVycmlkZSBpdCBsaWtlIHRoaXM6ICcsIEpTT04uc3RyaW5naWZ5KG5vZGUsIG51bGwsIDIpLCAnJywgJ0luc3RlYWQsIHlvdSBuZWVkIHRvIHVzZSB0aGUgJHJ1bGVOYW1lIHN5bnRheDonLCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgIHJvb3Q6IF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCImJFwiLmNvbmNhdChrZXkpLCBjaGlsZClcbiAgICAgICAgICAgIH0sIG51bGwsIDIpLCAnJywgJ2h0dHBzOi8vbWF0ZXJpYWwtdWkuY29tL3IvcHNldWRvLWNsYXNzZXMtZ3VpZGUnXS5qb2luKCdcXG4nKSk7XG4gICAgICAgICAgfSAvLyBSZW1vdmUgdGhlIHN0eWxlIHRvIHByZXZlbnQgZ2xvYmFsIGNvbmZsaWN0cy5cblxuXG4gICAgICAgICAgbm9kZVtrZXldID0ge307XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdHJhdmVyc2UobXVpVGhlbWUub3ZlcnJpZGVzKTtcbiAgfVxuXG4gIHJldHVybiBtdWlUaGVtZTtcbn1cblxudmFyIHdhcm5lZE9uY2UgPSBmYWxzZTtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNdWlUaGVtZSgpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXdhcm5lZE9uY2UpIHtcbiAgICAgIHdhcm5lZE9uY2UgPSB0cnVlO1xuICAgICAgY29uc29sZS5lcnJvcihbJ01hdGVyaWFsLVVJOiB0aGUgY3JlYXRlTXVpVGhlbWUgZnVuY3Rpb24gd2FzIHJlbmFtZWQgdG8gY3JlYXRlVGhlbWUuJywgJycsIFwiWW91IHNob3VsZCB1c2UgYGltcG9ydCB7IGNyZWF0ZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ2BcIl0uam9pbignXFxuJykpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjcmVhdGVUaGVtZS5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG59XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUaGVtZTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgeyBkZWVwbWVyZ2UgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuXG5mdW5jdGlvbiByb3VuZCh2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIDFlNSkgLyAxZTU7XG59XG5cbnZhciB3YXJuZWRPbmNlID0gZmFsc2U7XG5cbmZ1bmN0aW9uIHJvdW5kV2l0aERlcHJlY2F0aW9uV2FybmluZyh2YWx1ZSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghd2FybmVkT25jZSkge1xuICAgICAgY29uc29sZS53YXJuKFsnTWF0ZXJpYWwtVUk6IFRoZSBgdGhlbWUudHlwb2dyYXBoeS5yb3VuZGAgaGVscGVyIGlzIGRlcHJlY2F0ZWQuJywgJ0hlYWQgdG8gaHR0cHM6Ly9tYXRlcmlhbC11aS5jb20vci9taWdyYXRpb24tdjQvI3RoZW1lIGZvciBhIG1pZ3JhdGlvbiBwYXRoLiddLmpvaW4oJ1xcbicpKTtcbiAgICAgIHdhcm5lZE9uY2UgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByb3VuZCh2YWx1ZSk7XG59XG5cbnZhciBjYXNlQWxsQ2FwcyA9IHtcbiAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZSdcbn07XG52YXIgZGVmYXVsdEZvbnRGYW1pbHkgPSAnXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmJztcbi8qKlxyXG4gKiBAc2VlIEBsaW5re2h0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL3R5cG9ncmFwaHkvdGhlLXR5cGUtc3lzdGVtLmh0bWx9XHJcbiAqIEBzZWUgQGxpbmt7aHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vdHlwb2dyYXBoeS91bmRlcnN0YW5kaW5nLXR5cG9ncmFwaHkuaHRtbH1cclxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVR5cG9ncmFwaHkocGFsZXR0ZSwgdHlwb2dyYXBoeSkge1xuICB2YXIgX3JlZiA9IHR5cGVvZiB0eXBvZ3JhcGh5ID09PSAnZnVuY3Rpb24nID8gdHlwb2dyYXBoeShwYWxldHRlKSA6IHR5cG9ncmFwaHksXG4gICAgICBfcmVmJGZvbnRGYW1pbHkgPSBfcmVmLmZvbnRGYW1pbHksXG4gICAgICBmb250RmFtaWx5ID0gX3JlZiRmb250RmFtaWx5ID09PSB2b2lkIDAgPyBkZWZhdWx0Rm9udEZhbWlseSA6IF9yZWYkZm9udEZhbWlseSxcbiAgICAgIF9yZWYkZm9udFNpemUgPSBfcmVmLmZvbnRTaXplLFxuICAgICAgZm9udFNpemUgPSBfcmVmJGZvbnRTaXplID09PSB2b2lkIDAgPyAxNCA6IF9yZWYkZm9udFNpemUsXG4gICAgICBfcmVmJGZvbnRXZWlnaHRMaWdodCA9IF9yZWYuZm9udFdlaWdodExpZ2h0LFxuICAgICAgZm9udFdlaWdodExpZ2h0ID0gX3JlZiRmb250V2VpZ2h0TGlnaHQgPT09IHZvaWQgMCA/IDMwMCA6IF9yZWYkZm9udFdlaWdodExpZ2h0LFxuICAgICAgX3JlZiRmb250V2VpZ2h0UmVndWxhID0gX3JlZi5mb250V2VpZ2h0UmVndWxhcixcbiAgICAgIGZvbnRXZWlnaHRSZWd1bGFyID0gX3JlZiRmb250V2VpZ2h0UmVndWxhID09PSB2b2lkIDAgPyA0MDAgOiBfcmVmJGZvbnRXZWlnaHRSZWd1bGEsXG4gICAgICBfcmVmJGZvbnRXZWlnaHRNZWRpdW0gPSBfcmVmLmZvbnRXZWlnaHRNZWRpdW0sXG4gICAgICBmb250V2VpZ2h0TWVkaXVtID0gX3JlZiRmb250V2VpZ2h0TWVkaXVtID09PSB2b2lkIDAgPyA1MDAgOiBfcmVmJGZvbnRXZWlnaHRNZWRpdW0sXG4gICAgICBfcmVmJGZvbnRXZWlnaHRCb2xkID0gX3JlZi5mb250V2VpZ2h0Qm9sZCxcbiAgICAgIGZvbnRXZWlnaHRCb2xkID0gX3JlZiRmb250V2VpZ2h0Qm9sZCA9PT0gdm9pZCAwID8gNzAwIDogX3JlZiRmb250V2VpZ2h0Qm9sZCxcbiAgICAgIF9yZWYkaHRtbEZvbnRTaXplID0gX3JlZi5odG1sRm9udFNpemUsXG4gICAgICBodG1sRm9udFNpemUgPSBfcmVmJGh0bWxGb250U2l6ZSA9PT0gdm9pZCAwID8gMTYgOiBfcmVmJGh0bWxGb250U2l6ZSxcbiAgICAgIGFsbFZhcmlhbnRzID0gX3JlZi5hbGxWYXJpYW50cyxcbiAgICAgIHB4VG9SZW0yID0gX3JlZi5weFRvUmVtLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1wiZm9udEZhbWlseVwiLCBcImZvbnRTaXplXCIsIFwiZm9udFdlaWdodExpZ2h0XCIsIFwiZm9udFdlaWdodFJlZ3VsYXJcIiwgXCJmb250V2VpZ2h0TWVkaXVtXCIsIFwiZm9udFdlaWdodEJvbGRcIiwgXCJodG1sRm9udFNpemVcIiwgXCJhbGxWYXJpYW50c1wiLCBcInB4VG9SZW1cIl0pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKHR5cGVvZiBmb250U2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ01hdGVyaWFsLVVJOiBgZm9udFNpemVgIGlzIHJlcXVpcmVkIHRvIGJlIGEgbnVtYmVyLicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaHRtbEZvbnRTaXplICE9PSAnbnVtYmVyJykge1xuICAgICAgY29uc29sZS5lcnJvcignTWF0ZXJpYWwtVUk6IGBodG1sRm9udFNpemVgIGlzIHJlcXVpcmVkIHRvIGJlIGEgbnVtYmVyLicpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb2VmID0gZm9udFNpemUgLyAxNDtcblxuICB2YXIgcHhUb1JlbSA9IHB4VG9SZW0yIHx8IGZ1bmN0aW9uIChzaXplKSB7XG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KHNpemUgLyBodG1sRm9udFNpemUgKiBjb2VmLCBcInJlbVwiKTtcbiAgfTtcblxuICB2YXIgYnVpbGRWYXJpYW50ID0gZnVuY3Rpb24gYnVpbGRWYXJpYW50KGZvbnRXZWlnaHQsIHNpemUsIGxpbmVIZWlnaHQsIGxldHRlclNwYWNpbmcsIGNhc2luZykge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICBmb250RmFtaWx5OiBmb250RmFtaWx5LFxuICAgICAgZm9udFdlaWdodDogZm9udFdlaWdodCxcbiAgICAgIGZvbnRTaXplOiBweFRvUmVtKHNpemUpLFxuICAgICAgLy8gVW5pdGxlc3MgZm9sbG93aW5nIGh0dHBzOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdGhvdWdodHMvMjAwNi8wMi8wOC91bml0bGVzcy1saW5lLWhlaWdodHMvXG4gICAgICBsaW5lSGVpZ2h0OiBsaW5lSGVpZ2h0XG4gICAgfSwgZm9udEZhbWlseSA9PT0gZGVmYXVsdEZvbnRGYW1pbHkgPyB7XG4gICAgICBsZXR0ZXJTcGFjaW5nOiBcIlwiLmNvbmNhdChyb3VuZChsZXR0ZXJTcGFjaW5nIC8gc2l6ZSksIFwiZW1cIilcbiAgICB9IDoge30sIGNhc2luZywgYWxsVmFyaWFudHMpO1xuICB9O1xuXG4gIHZhciB2YXJpYW50cyA9IHtcbiAgICBoMTogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRMaWdodCwgOTYsIDEuMTY3LCAtMS41KSxcbiAgICBoMjogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRMaWdodCwgNjAsIDEuMiwgLTAuNSksXG4gICAgaDM6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0UmVndWxhciwgNDgsIDEuMTY3LCAwKSxcbiAgICBoNDogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRSZWd1bGFyLCAzNCwgMS4yMzUsIDAuMjUpLFxuICAgIGg1OiBidWlsZFZhcmlhbnQoZm9udFdlaWdodFJlZ3VsYXIsIDI0LCAxLjMzNCwgMCksXG4gICAgaDY6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0TWVkaXVtLCAyMCwgMS42LCAwLjE1KSxcbiAgICBzdWJ0aXRsZTE6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0UmVndWxhciwgMTYsIDEuNzUsIDAuMTUpLFxuICAgIHN1YnRpdGxlMjogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRNZWRpdW0sIDE0LCAxLjU3LCAwLjEpLFxuICAgIGJvZHkxOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodFJlZ3VsYXIsIDE2LCAxLjUsIDAuMTUpLFxuICAgIGJvZHkyOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodFJlZ3VsYXIsIDE0LCAxLjQzLCAwLjE1KSxcbiAgICBidXR0b246IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0TWVkaXVtLCAxNCwgMS43NSwgMC40LCBjYXNlQWxsQ2FwcyksXG4gICAgY2FwdGlvbjogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRSZWd1bGFyLCAxMiwgMS42NiwgMC40KSxcbiAgICBvdmVybGluZTogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRSZWd1bGFyLCAxMiwgMi42NiwgMSwgY2FzZUFsbENhcHMpXG4gIH07XG4gIHJldHVybiBkZWVwbWVyZ2UoX2V4dGVuZHMoe1xuICAgIGh0bWxGb250U2l6ZTogaHRtbEZvbnRTaXplLFxuICAgIHB4VG9SZW06IHB4VG9SZW0sXG4gICAgcm91bmQ6IHJvdW5kV2l0aERlcHJlY2F0aW9uV2FybmluZyxcbiAgICAvLyBUT0RPIHY1OiByZW1vdmVcbiAgICBmb250RmFtaWx5OiBmb250RmFtaWx5LFxuICAgIGZvbnRTaXplOiBmb250U2l6ZSxcbiAgICBmb250V2VpZ2h0TGlnaHQ6IGZvbnRXZWlnaHRMaWdodCxcbiAgICBmb250V2VpZ2h0UmVndWxhcjogZm9udFdlaWdodFJlZ3VsYXIsXG4gICAgZm9udFdlaWdodE1lZGl1bTogZm9udFdlaWdodE1lZGl1bSxcbiAgICBmb250V2VpZ2h0Qm9sZDogZm9udFdlaWdodEJvbGRcbiAgfSwgdmFyaWFudHMpLCBvdGhlciwge1xuICAgIGNsb25lOiBmYWxzZSAvLyBObyBuZWVkIHRvIGNsb25lIGRlZXBcblxuICB9KTtcbn0iLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuZXhwb3J0IGZ1bmN0aW9uIGlzVW5pdGxlc3ModmFsdWUpIHtcbiAgcmV0dXJuIFN0cmluZyhwYXJzZUZsb2F0KHZhbHVlKSkubGVuZ3RoID09PSBTdHJpbmcodmFsdWUpLmxlbmd0aDtcbn0gLy8gUG9ydGVkIGZyb20gQ29tcGFzc1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL0NvbXBhc3MvY29tcGFzcy9ibG9iL21hc3Rlci9jb3JlL3N0eWxlc2hlZXRzL2NvbXBhc3MvdHlwb2dyYXBoeS9fdW5pdHMuc2Nzc1xuLy8gRW11bGF0ZSB0aGUgc2FzcyBmdW5jdGlvbiBcInVuaXRcIlxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VW5pdChpbnB1dCkge1xuICByZXR1cm4gU3RyaW5nKGlucHV0KS5tYXRjaCgvW1xcZC5cXC0rXSpcXHMqKC4qKS8pWzFdIHx8ICcnO1xufSAvLyBFbXVsYXRlIHRoZSBzYXNzIGZ1bmN0aW9uIFwidW5pdGxlc3NcIlxuXG5leHBvcnQgZnVuY3Rpb24gdG9Vbml0bGVzcyhsZW5ndGgpIHtcbiAgcmV0dXJuIHBhcnNlRmxvYXQobGVuZ3RoKTtcbn0gLy8gQ29udmVydCBhbnkgQ1NTIDxsZW5ndGg+IG9yIDxwZXJjZW50YWdlPiB2YWx1ZSB0byBhbnkgYW5vdGhlci5cbi8vIEZyb20gaHR0cHM6Ly9naXRodWIuY29tL0t5bGVBTWF0aGV3cy9jb252ZXJ0LWNzcy1sZW5ndGhcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRMZW5ndGgoYmFzZUZvbnRTaXplKSB7XG4gIHJldHVybiBmdW5jdGlvbiAobGVuZ3RoLCB0b1VuaXQpIHtcbiAgICB2YXIgZnJvbVVuaXQgPSBnZXRVbml0KGxlbmd0aCk7IC8vIE9wdGltaXplIGZvciBjYXNlcyB3aGVyZSBgZnJvbWAgYW5kIGB0b2AgdW5pdHMgYXJlIGFjY2lkZW50YWxseSB0aGUgc2FtZS5cblxuICAgIGlmIChmcm9tVW5pdCA9PT0gdG9Vbml0KSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH0gLy8gQ29udmVydCBpbnB1dCBsZW5ndGggdG8gcGl4ZWxzLlxuXG5cbiAgICB2YXIgcHhMZW5ndGggPSB0b1VuaXRsZXNzKGxlbmd0aCk7XG5cbiAgICBpZiAoZnJvbVVuaXQgIT09ICdweCcpIHtcbiAgICAgIGlmIChmcm9tVW5pdCA9PT0gJ2VtJykge1xuICAgICAgICBweExlbmd0aCA9IHRvVW5pdGxlc3MobGVuZ3RoKSAqIHRvVW5pdGxlc3MoYmFzZUZvbnRTaXplKTtcbiAgICAgIH0gZWxzZSBpZiAoZnJvbVVuaXQgPT09ICdyZW0nKSB7XG4gICAgICAgIHB4TGVuZ3RoID0gdG9Vbml0bGVzcyhsZW5ndGgpICogdG9Vbml0bGVzcyhiYXNlRm9udFNpemUpO1xuICAgICAgICByZXR1cm4gbGVuZ3RoO1xuICAgICAgfVxuICAgIH0gLy8gQ29udmVydCBsZW5ndGggaW4gcGl4ZWxzIHRvIHRoZSBvdXRwdXQgdW5pdFxuXG5cbiAgICB2YXIgb3V0cHV0TGVuZ3RoID0gcHhMZW5ndGg7XG5cbiAgICBpZiAodG9Vbml0ICE9PSAncHgnKSB7XG4gICAgICBpZiAodG9Vbml0ID09PSAnZW0nKSB7XG4gICAgICAgIG91dHB1dExlbmd0aCA9IHB4TGVuZ3RoIC8gdG9Vbml0bGVzcyhiYXNlRm9udFNpemUpO1xuICAgICAgfSBlbHNlIGlmICh0b1VuaXQgPT09ICdyZW0nKSB7XG4gICAgICAgIG91dHB1dExlbmd0aCA9IHB4TGVuZ3RoIC8gdG9Vbml0bGVzcyhiYXNlRm9udFNpemUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VGbG9hdChvdXRwdXRMZW5ndGgudG9GaXhlZCg1KSkgKyB0b1VuaXQ7XG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gYWxpZ25Qcm9wZXJ0eShfcmVmKSB7XG4gIHZhciBzaXplID0gX3JlZi5zaXplLFxuICAgICAgZ3JpZCA9IF9yZWYuZ3JpZDtcbiAgdmFyIHNpemVCZWxvdyA9IHNpemUgLSBzaXplICUgZ3JpZDtcbiAgdmFyIHNpemVBYm92ZSA9IHNpemVCZWxvdyArIGdyaWQ7XG4gIHJldHVybiBzaXplIC0gc2l6ZUJlbG93IDwgc2l6ZUFib3ZlIC0gc2l6ZSA/IHNpemVCZWxvdyA6IHNpemVBYm92ZTtcbn0gLy8gZm9udEdyaWQgZmluZHMgYSBtaW5pbWFsIGdyaWQgKGluIHJlbSkgZm9yIHRoZSBmb250U2l6ZSB2YWx1ZXMgc28gdGhhdCB0aGVcbi8vIGxpbmVIZWlnaHQgZmFsbHMgdW5kZXIgYSB4IHBpeGVscyBncmlkLCA0cHggaW4gdGhlIGNhc2Ugb2YgTWF0ZXJpYWwgRGVzaWduLFxuLy8gd2l0aG91dCBjaGFuZ2luZyB0aGUgcmVsYXRpdmUgbGluZSBoZWlnaHRcblxuZXhwb3J0IGZ1bmN0aW9uIGZvbnRHcmlkKF9yZWYyKSB7XG4gIHZhciBsaW5lSGVpZ2h0ID0gX3JlZjIubGluZUhlaWdodCxcbiAgICAgIHBpeGVscyA9IF9yZWYyLnBpeGVscyxcbiAgICAgIGh0bWxGb250U2l6ZSA9IF9yZWYyLmh0bWxGb250U2l6ZTtcbiAgcmV0dXJuIHBpeGVscyAvIChsaW5lSGVpZ2h0ICogaHRtbEZvbnRTaXplKTtcbn1cbi8qKlxyXG4gKiBnZW5lcmF0ZSBhIHJlc3BvbnNpdmUgdmVyc2lvbiBvZiBhIGdpdmVuIENTUyBwcm9wZXJ0eVxyXG4gKiBAZXhhbXBsZVxyXG4gKiByZXNwb25zaXZlUHJvcGVydHkoe1xyXG4gKiAgIGNzc1Byb3BlcnR5OiAnZm9udFNpemUnLFxyXG4gKiAgIG1pbjogMTUsXHJcbiAqICAgbWF4OiAyMCxcclxuICogICB1bml0OiAncHgnLFxyXG4gKiAgIGJyZWFrcG9pbnRzOiBbMzAwLCA2MDBdLFxyXG4gKiB9KVxyXG4gKlxyXG4gKiAvLyB0aGlzIHJldHVybnNcclxuICpcclxuICoge1xyXG4gKiAgIGZvbnRTaXplOiAnMTVweCcsXHJcbiAqICAgJ0BtZWRpYSAobWluLXdpZHRoOjMwMHB4KSc6IHtcclxuICogICAgIGZvbnRTaXplOiAnMTcuNXB4JyxcclxuICogICB9LFxyXG4gKiAgICdAbWVkaWEgKG1pbi13aWR0aDo2MDBweCknOiB7XHJcbiAqICAgICBmb250U2l6ZTogJzIwcHgnLFxyXG4gKiAgIH0sXHJcbiAqIH1cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmNzc1Byb3BlcnR5IC0gVGhlIENTUyBwcm9wZXJ0eSB0byBiZSBtYWRlIHJlc3BvbnNpdmVcclxuICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtcy5taW4gLSBUaGUgc21hbGxlc3QgdmFsdWUgb2YgdGhlIENTUyBwcm9wZXJ0eVxyXG4gKiBAcGFyYW0ge251bWJlcn0gcGFyYW1zLm1heCAtIFRoZSBsYXJnZXN0IHZhbHVlIG9mIHRoZSBDU1MgcHJvcGVydHlcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwYXJhbXMudW5pdF0gLSBUaGUgdW5pdCB0byBiZSB1c2VkIGZvciB0aGUgQ1NTIHByb3BlcnR5XHJcbiAqIEBwYXJhbSB7QXJyYXkubnVtYmVyfSBbcGFyYW1zLmJyZWFrcG9pbnRzXSAgLSBBbiBhcnJheSBvZiBicmVha3BvaW50c1xyXG4gKiBAcGFyYW0ge251bWJlcn0gW3BhcmFtcy5hbGlnblN0ZXBdIC0gUm91bmQgc2NhbGVkIHZhbHVlIHRvIGZhbGwgdW5kZXIgdGhpcyBncmlkXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IHJlc3BvbnNpdmUgc3R5bGVzIGZvciB7cGFyYW1zLmNzc1Byb3BlcnR5fVxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc3BvbnNpdmVQcm9wZXJ0eShfcmVmMykge1xuICB2YXIgY3NzUHJvcGVydHkgPSBfcmVmMy5jc3NQcm9wZXJ0eSxcbiAgICAgIG1pbiA9IF9yZWYzLm1pbixcbiAgICAgIG1heCA9IF9yZWYzLm1heCxcbiAgICAgIF9yZWYzJHVuaXQgPSBfcmVmMy51bml0LFxuICAgICAgdW5pdCA9IF9yZWYzJHVuaXQgPT09IHZvaWQgMCA/ICdyZW0nIDogX3JlZjMkdW5pdCxcbiAgICAgIF9yZWYzJGJyZWFrcG9pbnRzID0gX3JlZjMuYnJlYWtwb2ludHMsXG4gICAgICBicmVha3BvaW50cyA9IF9yZWYzJGJyZWFrcG9pbnRzID09PSB2b2lkIDAgPyBbNjAwLCA5NjAsIDEyODBdIDogX3JlZjMkYnJlYWtwb2ludHMsXG4gICAgICBfcmVmMyR0cmFuc2Zvcm0gPSBfcmVmMy50cmFuc2Zvcm0sXG4gICAgICB0cmFuc2Zvcm0gPSBfcmVmMyR0cmFuc2Zvcm0gPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmMyR0cmFuc2Zvcm07XG5cbiAgdmFyIG91dHB1dCA9IF9kZWZpbmVQcm9wZXJ0eSh7fSwgY3NzUHJvcGVydHksIFwiXCIuY29uY2F0KG1pbikuY29uY2F0KHVuaXQpKTtcblxuICB2YXIgZmFjdG9yID0gKG1heCAtIG1pbikgLyBicmVha3BvaW50c1ticmVha3BvaW50cy5sZW5ndGggLSAxXTtcbiAgYnJlYWtwb2ludHMuZm9yRWFjaChmdW5jdGlvbiAoYnJlYWtwb2ludCkge1xuICAgIHZhciB2YWx1ZSA9IG1pbiArIGZhY3RvciAqIGJyZWFrcG9pbnQ7XG5cbiAgICBpZiAodHJhbnNmb3JtICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRyYW5zZm9ybSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgb3V0cHV0W1wiQG1lZGlhIChtaW4td2lkdGg6XCIuY29uY2F0KGJyZWFrcG9pbnQsIFwicHgpXCIpXSA9IF9kZWZpbmVQcm9wZXJ0eSh7fSwgY3NzUHJvcGVydHksIFwiXCIuY29uY2F0KE1hdGgucm91bmQodmFsdWUgKiAxMDAwMCkgLyAxMDAwMCkuY29uY2F0KHVuaXQpKTtcbiAgfSk7XG4gIHJldHVybiBvdXRwdXQ7XG59IiwiaW1wb3J0IGNyZWF0ZVRoZW1lIGZyb20gJy4vY3JlYXRlVGhlbWUnO1xudmFyIGRlZmF1bHRUaGVtZSA9IGNyZWF0ZVRoZW1lKCk7XG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0VGhlbWU7IiwiZXhwb3J0ICogZnJvbSAnLi9jb2xvck1hbmlwdWxhdG9yJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3JlYXRlVGhlbWUsIGNyZWF0ZU11aVRoZW1lIH0gZnJvbSAnLi9jcmVhdGVUaGVtZSc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyB1bnN0YWJsZV9jcmVhdGVNdWlTdHJpY3RNb2RlVGhlbWUgfSBmcm9tICcuL2NyZWF0ZU11aVN0cmljdE1vZGVUaGVtZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNyZWF0ZVN0eWxlcyB9IGZyb20gJy4vY3JlYXRlU3R5bGVzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWFrZVN0eWxlcyB9IGZyb20gJy4vbWFrZVN0eWxlcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlc3BvbnNpdmVGb250U2l6ZXMgfSBmcm9tICcuL3Jlc3BvbnNpdmVGb250U2l6ZXMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzdHlsZWQgfSBmcm9tICcuL3N0eWxlZCc7XG5leHBvcnQgKiBmcm9tICcuL3RyYW5zaXRpb25zJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlVGhlbWUgfSBmcm9tICcuL3VzZVRoZW1lJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFN0eWxlcyB9IGZyb20gJy4vd2l0aFN0eWxlcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhUaGVtZSB9IGZyb20gJy4vd2l0aFRoZW1lJztcbmV4cG9ydCB7IGNyZWF0ZUdlbmVyYXRlQ2xhc3NOYW1lLCBqc3NQcmVzZXQsIFNlcnZlclN0eWxlU2hlZXRzLCBTdHlsZXNQcm92aWRlciwgVGhlbWVQcm92aWRlciBhcyBNdWlUaGVtZVByb3ZpZGVyLCBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIGFzIG1ha2VTdHlsZXNXaXRob3V0RGVmYXVsdCB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IGRlZmF1bHRUaGVtZSBmcm9tICcuL2RlZmF1bHRUaGVtZSc7XG5cbmZ1bmN0aW9uIG1ha2VTdHlsZXMoc3R5bGVzT3JDcmVhdG9yKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgcmV0dXJuIG1ha2VTdHlsZXNXaXRob3V0RGVmYXVsdChzdHlsZXNPckNyZWF0b3IsIF9leHRlbmRzKHtcbiAgICBkZWZhdWx0VGhlbWU6IGRlZmF1bHRUaGVtZVxuICB9LCBvcHRpb25zKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VTdHlsZXM7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgeyBmb3JtYXRNdWlFcnJvck1lc3NhZ2UgYXMgX2Zvcm1hdE11aUVycm9yTWVzc2FnZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvdXRpbHNcIjtcbmltcG9ydCB7IGlzVW5pdGxlc3MsIGNvbnZlcnRMZW5ndGgsIHJlc3BvbnNpdmVQcm9wZXJ0eSwgYWxpZ25Qcm9wZXJ0eSwgZm9udEdyaWQgfSBmcm9tICcuL2Nzc1V0aWxzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc3BvbnNpdmVGb250U2l6ZXModGhlbWVJbnB1dCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBfb3B0aW9ucyRicmVha3BvaW50cyA9IG9wdGlvbnMuYnJlYWtwb2ludHMsXG4gICAgICBicmVha3BvaW50cyA9IF9vcHRpb25zJGJyZWFrcG9pbnRzID09PSB2b2lkIDAgPyBbJ3NtJywgJ21kJywgJ2xnJ10gOiBfb3B0aW9ucyRicmVha3BvaW50cyxcbiAgICAgIF9vcHRpb25zJGRpc2FibGVBbGlnbiA9IG9wdGlvbnMuZGlzYWJsZUFsaWduLFxuICAgICAgZGlzYWJsZUFsaWduID0gX29wdGlvbnMkZGlzYWJsZUFsaWduID09PSB2b2lkIDAgPyBmYWxzZSA6IF9vcHRpb25zJGRpc2FibGVBbGlnbixcbiAgICAgIF9vcHRpb25zJGZhY3RvciA9IG9wdGlvbnMuZmFjdG9yLFxuICAgICAgZmFjdG9yID0gX29wdGlvbnMkZmFjdG9yID09PSB2b2lkIDAgPyAyIDogX29wdGlvbnMkZmFjdG9yLFxuICAgICAgX29wdGlvbnMkdmFyaWFudHMgPSBvcHRpb25zLnZhcmlhbnRzLFxuICAgICAgdmFyaWFudHMgPSBfb3B0aW9ucyR2YXJpYW50cyA9PT0gdm9pZCAwID8gWydoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdzdWJ0aXRsZTEnLCAnc3VidGl0bGUyJywgJ2JvZHkxJywgJ2JvZHkyJywgJ2NhcHRpb24nLCAnYnV0dG9uJywgJ292ZXJsaW5lJ10gOiBfb3B0aW9ucyR2YXJpYW50cztcblxuICB2YXIgdGhlbWUgPSBfZXh0ZW5kcyh7fSwgdGhlbWVJbnB1dCk7XG5cbiAgdGhlbWUudHlwb2dyYXBoeSA9IF9leHRlbmRzKHt9LCB0aGVtZS50eXBvZ3JhcGh5KTtcbiAgdmFyIHR5cG9ncmFwaHkgPSB0aGVtZS50eXBvZ3JhcGh5OyAvLyBDb252ZXJ0IGJldHdlZW4gY3NzIGxlbmd0aHMgZS5nLiBlbS0+cHggb3IgcHgtPnJlbVxuICAvLyBTZXQgdGhlIGJhc2VGb250U2l6ZSBmb3IgeW91ciBwcm9qZWN0LiBEZWZhdWx0cyB0byAxNnB4IChhbHNvIHRoZSBicm93c2VyIGRlZmF1bHQpLlxuXG4gIHZhciBjb252ZXJ0ID0gY29udmVydExlbmd0aCh0eXBvZ3JhcGh5Lmh0bWxGb250U2l6ZSk7XG4gIHZhciBicmVha3BvaW50VmFsdWVzID0gYnJlYWtwb2ludHMubWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHRoZW1lLmJyZWFrcG9pbnRzLnZhbHVlc1t4XTtcbiAgfSk7XG4gIHZhcmlhbnRzLmZvckVhY2goZnVuY3Rpb24gKHZhcmlhbnQpIHtcbiAgICB2YXIgc3R5bGUgPSB0eXBvZ3JhcGh5W3ZhcmlhbnRdO1xuICAgIHZhciByZW1Gb250U2l6ZSA9IHBhcnNlRmxvYXQoY29udmVydChzdHlsZS5mb250U2l6ZSwgJ3JlbScpKTtcblxuICAgIGlmIChyZW1Gb250U2l6ZSA8PSAxKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG1heEZvbnRTaXplID0gcmVtRm9udFNpemU7XG4gICAgdmFyIG1pbkZvbnRTaXplID0gMSArIChtYXhGb250U2l6ZSAtIDEpIC8gZmFjdG9yO1xuICAgIHZhciBsaW5lSGVpZ2h0ID0gc3R5bGUubGluZUhlaWdodDtcblxuICAgIGlmICghaXNVbml0bGVzcyhsaW5lSGVpZ2h0KSAmJiAhZGlzYWJsZUFsaWduKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJNYXRlcmlhbC1VSTogVW5zdXBwb3J0ZWQgbm9uLXVuaXRsZXNzIGxpbmUgaGVpZ2h0IHdpdGggZ3JpZCBhbGlnbm1lbnQuXFxuVXNlIHVuaXRsZXNzIGxpbmUgaGVpZ2h0cyBpbnN0ZWFkLlwiIDogX2Zvcm1hdE11aUVycm9yTWVzc2FnZSg2KSk7XG4gICAgfVxuXG4gICAgaWYgKCFpc1VuaXRsZXNzKGxpbmVIZWlnaHQpKSB7XG4gICAgICAvLyBtYWtlIGl0IHVuaXRsZXNzXG4gICAgICBsaW5lSGVpZ2h0ID0gcGFyc2VGbG9hdChjb252ZXJ0KGxpbmVIZWlnaHQsICdyZW0nKSkgLyBwYXJzZUZsb2F0KHJlbUZvbnRTaXplKTtcbiAgICB9XG5cbiAgICB2YXIgdHJhbnNmb3JtID0gbnVsbDtcblxuICAgIGlmICghZGlzYWJsZUFsaWduKSB7XG4gICAgICB0cmFuc2Zvcm0gPSBmdW5jdGlvbiB0cmFuc2Zvcm0odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGFsaWduUHJvcGVydHkoe1xuICAgICAgICAgIHNpemU6IHZhbHVlLFxuICAgICAgICAgIGdyaWQ6IGZvbnRHcmlkKHtcbiAgICAgICAgICAgIHBpeGVsczogNCxcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IGxpbmVIZWlnaHQsXG4gICAgICAgICAgICBodG1sRm9udFNpemU6IHR5cG9ncmFwaHkuaHRtbEZvbnRTaXplXG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHR5cG9ncmFwaHlbdmFyaWFudF0gPSBfZXh0ZW5kcyh7fSwgc3R5bGUsIHJlc3BvbnNpdmVQcm9wZXJ0eSh7XG4gICAgICBjc3NQcm9wZXJ0eTogJ2ZvbnRTaXplJyxcbiAgICAgIG1pbjogbWluRm9udFNpemUsXG4gICAgICBtYXg6IG1heEZvbnRTaXplLFxuICAgICAgdW5pdDogJ3JlbScsXG4gICAgICBicmVha3BvaW50czogYnJlYWtwb2ludFZhbHVlcyxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtXG4gICAgfSkpO1xuICB9KTtcbiAgcmV0dXJuIHRoZW1lO1xufSIsInZhciBzaGFkb3dLZXlVbWJyYU9wYWNpdHkgPSAwLjI7XG52YXIgc2hhZG93S2V5UGVudW1icmFPcGFjaXR5ID0gMC4xNDtcbnZhciBzaGFkb3dBbWJpZW50U2hhZG93T3BhY2l0eSA9IDAuMTI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNoYWRvdygpIHtcbiAgcmV0dXJuIFtcIlwiLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDAgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMF0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDEgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMV0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDIgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMl0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDMgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbM10sIFwicHggcmdiYSgwLDAsMCxcIikuY29uY2F0KHNoYWRvd0tleVVtYnJhT3BhY2l0eSwgXCIpXCIpLCBcIlwiLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDQgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbNF0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDUgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbNV0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDYgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbNl0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDcgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbN10sIFwicHggcmdiYSgwLDAsMCxcIikuY29uY2F0KHNoYWRvd0tleVBlbnVtYnJhT3BhY2l0eSwgXCIpXCIpLCBcIlwiLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDggPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbOF0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDkgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbOV0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDEwID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzEwXSwgXCJweCBcIikuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gMTEgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMTFdLCBcInB4IHJnYmEoMCwwLDAsXCIpLmNvbmNhdChzaGFkb3dBbWJpZW50U2hhZG93T3BhY2l0eSwgXCIpXCIpXS5qb2luKCcsJyk7XG59IC8vIFZhbHVlcyBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvYmU4NzQ3Zjk0NTc0NjY5Y2I1ZTdhZGQxYTdjNTRmYTQxYTg5Y2VjNy9wYWNrYWdlcy9tZGMtZWxldmF0aW9uL192YXJpYWJsZXMuc2Nzc1xuXG5cbnZhciBzaGFkb3dzID0gWydub25lJywgY3JlYXRlU2hhZG93KDAsIDIsIDEsIC0xLCAwLCAxLCAxLCAwLCAwLCAxLCAzLCAwKSwgY3JlYXRlU2hhZG93KDAsIDMsIDEsIC0yLCAwLCAyLCAyLCAwLCAwLCAxLCA1LCAwKSwgY3JlYXRlU2hhZG93KDAsIDMsIDMsIC0yLCAwLCAzLCA0LCAwLCAwLCAxLCA4LCAwKSwgY3JlYXRlU2hhZG93KDAsIDIsIDQsIC0xLCAwLCA0LCA1LCAwLCAwLCAxLCAxMCwgMCksIGNyZWF0ZVNoYWRvdygwLCAzLCA1LCAtMSwgMCwgNSwgOCwgMCwgMCwgMSwgMTQsIDApLCBjcmVhdGVTaGFkb3coMCwgMywgNSwgLTEsIDAsIDYsIDEwLCAwLCAwLCAxLCAxOCwgMCksIGNyZWF0ZVNoYWRvdygwLCA0LCA1LCAtMiwgMCwgNywgMTAsIDEsIDAsIDIsIDE2LCAxKSwgY3JlYXRlU2hhZG93KDAsIDUsIDUsIC0zLCAwLCA4LCAxMCwgMSwgMCwgMywgMTQsIDIpLCBjcmVhdGVTaGFkb3coMCwgNSwgNiwgLTMsIDAsIDksIDEyLCAxLCAwLCAzLCAxNiwgMiksIGNyZWF0ZVNoYWRvdygwLCA2LCA2LCAtMywgMCwgMTAsIDE0LCAxLCAwLCA0LCAxOCwgMyksIGNyZWF0ZVNoYWRvdygwLCA2LCA3LCAtNCwgMCwgMTEsIDE1LCAxLCAwLCA0LCAyMCwgMyksIGNyZWF0ZVNoYWRvdygwLCA3LCA4LCAtNCwgMCwgMTIsIDE3LCAyLCAwLCA1LCAyMiwgNCksIGNyZWF0ZVNoYWRvdygwLCA3LCA4LCAtNCwgMCwgMTMsIDE5LCAyLCAwLCA1LCAyNCwgNCksIGNyZWF0ZVNoYWRvdygwLCA3LCA5LCAtNCwgMCwgMTQsIDIxLCAyLCAwLCA1LCAyNiwgNCksIGNyZWF0ZVNoYWRvdygwLCA4LCA5LCAtNSwgMCwgMTUsIDIyLCAyLCAwLCA2LCAyOCwgNSksIGNyZWF0ZVNoYWRvdygwLCA4LCAxMCwgLTUsIDAsIDE2LCAyNCwgMiwgMCwgNiwgMzAsIDUpLCBjcmVhdGVTaGFkb3coMCwgOCwgMTEsIC01LCAwLCAxNywgMjYsIDIsIDAsIDYsIDMyLCA1KSwgY3JlYXRlU2hhZG93KDAsIDksIDExLCAtNSwgMCwgMTgsIDI4LCAyLCAwLCA3LCAzNCwgNiksIGNyZWF0ZVNoYWRvdygwLCA5LCAxMiwgLTYsIDAsIDE5LCAyOSwgMiwgMCwgNywgMzYsIDYpLCBjcmVhdGVTaGFkb3coMCwgMTAsIDEzLCAtNiwgMCwgMjAsIDMxLCAzLCAwLCA4LCAzOCwgNyksIGNyZWF0ZVNoYWRvdygwLCAxMCwgMTMsIC02LCAwLCAyMSwgMzMsIDMsIDAsIDgsIDQwLCA3KSwgY3JlYXRlU2hhZG93KDAsIDEwLCAxNCwgLTYsIDAsIDIyLCAzNSwgMywgMCwgOCwgNDIsIDcpLCBjcmVhdGVTaGFkb3coMCwgMTEsIDE0LCAtNywgMCwgMjMsIDM2LCAzLCAwLCA5LCA0NCwgOCksIGNyZWF0ZVNoYWRvdygwLCAxMSwgMTUsIC03LCAwLCAyNCwgMzgsIDMsIDAsIDksIDQ2LCA4KV07XG5leHBvcnQgZGVmYXVsdCBzaGFkb3dzOyIsInZhciBzaGFwZSA9IHtcbiAgYm9yZGVyUmFkaXVzOiA0XG59O1xuZXhwb3J0IGRlZmF1bHQgc2hhcGU7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgeyBzdHlsZWQgYXMgc3R5bGVkV2l0aG91dERlZmF1bHQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCBkZWZhdWx0VGhlbWUgZnJvbSAnLi9kZWZhdWx0VGhlbWUnO1xuXG52YXIgc3R5bGVkID0gZnVuY3Rpb24gc3R5bGVkKENvbXBvbmVudCkge1xuICB2YXIgY29tcG9uZW50Q3JlYXRvciA9IHN0eWxlZFdpdGhvdXREZWZhdWx0KENvbXBvbmVudCk7XG4gIHJldHVybiBmdW5jdGlvbiAoc3R5bGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gY29tcG9uZW50Q3JlYXRvcihzdHlsZSwgX2V4dGVuZHMoe1xuICAgICAgZGVmYXVsdFRoZW1lOiBkZWZhdWx0VGhlbWVcbiAgICB9LCBvcHRpb25zKSk7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZWQ7IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbi8vIEZvbGxvdyBodHRwczovL21hdGVyaWFsLmdvb2dsZS5jb20vbW90aW9uL2R1cmF0aW9uLWVhc2luZy5odG1sI2R1cmF0aW9uLWVhc2luZy1uYXR1cmFsLWVhc2luZy1jdXJ2ZXNcbi8vIHRvIGxlYXJuIHRoZSBjb250ZXh0IGluIHdoaWNoIGVhY2ggZWFzaW5nIHNob3VsZCBiZSB1c2VkLlxuZXhwb3J0IHZhciBlYXNpbmcgPSB7XG4gIC8vIFRoaXMgaXMgdGhlIG1vc3QgY29tbW9uIGVhc2luZyBjdXJ2ZS5cbiAgZWFzZUluT3V0OiAnY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKScsXG4gIC8vIE9iamVjdHMgZW50ZXIgdGhlIHNjcmVlbiBhdCBmdWxsIHZlbG9jaXR5IGZyb20gb2ZmLXNjcmVlbiBhbmRcbiAgLy8gc2xvd2x5IGRlY2VsZXJhdGUgdG8gYSByZXN0aW5nIHBvaW50LlxuICBlYXNlT3V0OiAnY3ViaWMtYmV6aWVyKDAuMCwgMCwgMC4yLCAxKScsXG4gIC8vIE9iamVjdHMgbGVhdmUgdGhlIHNjcmVlbiBhdCBmdWxsIHZlbG9jaXR5LiBUaGV5IGRvIG5vdCBkZWNlbGVyYXRlIHdoZW4gb2ZmLXNjcmVlbi5cbiAgZWFzZUluOiAnY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSknLFxuICAvLyBUaGUgc2hhcnAgY3VydmUgaXMgdXNlZCBieSBvYmplY3RzIHRoYXQgbWF5IHJldHVybiB0byB0aGUgc2NyZWVuIGF0IGFueSB0aW1lLlxuICBzaGFycDogJ2N1YmljLWJlemllcigwLjQsIDAsIDAuNiwgMSknXG59OyAvLyBGb2xsb3cgaHR0cHM6Ly9tYXRlcmlhbC5pby9ndWlkZWxpbmVzL21vdGlvbi9kdXJhdGlvbi1lYXNpbmcuaHRtbCNkdXJhdGlvbi1lYXNpbmctY29tbW9uLWR1cmF0aW9uc1xuLy8gdG8gbGVhcm4gd2hlbiB1c2Ugd2hhdCB0aW1pbmdcblxuZXhwb3J0IHZhciBkdXJhdGlvbiA9IHtcbiAgc2hvcnRlc3Q6IDE1MCxcbiAgc2hvcnRlcjogMjAwLFxuICBzaG9ydDogMjUwLFxuICAvLyBtb3N0IGJhc2ljIHJlY29tbWVuZGVkIHRpbWluZ1xuICBzdGFuZGFyZDogMzAwLFxuICAvLyB0aGlzIGlzIHRvIGJlIHVzZWQgaW4gY29tcGxleCBhbmltYXRpb25zXG4gIGNvbXBsZXg6IDM3NSxcbiAgLy8gcmVjb21tZW5kZWQgd2hlbiBzb21ldGhpbmcgaXMgZW50ZXJpbmcgc2NyZWVuXG4gIGVudGVyaW5nU2NyZWVuOiAyMjUsXG4gIC8vIHJlY29tbWVuZGVkIHdoZW4gc29tZXRoaW5nIGlzIGxlYXZpbmcgc2NyZWVuXG4gIGxlYXZpbmdTY3JlZW46IDE5NVxufTtcblxuZnVuY3Rpb24gZm9ybWF0TXMobWlsbGlzZWNvbmRzKSB7XG4gIHJldHVybiBcIlwiLmNvbmNhdChNYXRoLnJvdW5kKG1pbGxpc2Vjb25kcyksIFwibXNcIik7XG59XG4vKipcclxuICogQHBhcmFtIHtzdHJpbmd8QXJyYXl9IHByb3BzXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW0ucHJvcFxyXG4gKiBAcGFyYW0ge251bWJlcn0gcGFyYW0uZHVyYXRpb25cclxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtLmVhc2luZ1xyXG4gKiBAcGFyYW0ge251bWJlcn0gcGFyYW0uZGVsYXlcclxuICovXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBlYXNpbmc6IGVhc2luZyxcbiAgZHVyYXRpb246IGR1cmF0aW9uLFxuICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFsnYWxsJ107XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgdmFyIF9vcHRpb25zJGR1cmF0aW9uID0gb3B0aW9ucy5kdXJhdGlvbixcbiAgICAgICAgZHVyYXRpb25PcHRpb24gPSBfb3B0aW9ucyRkdXJhdGlvbiA9PT0gdm9pZCAwID8gZHVyYXRpb24uc3RhbmRhcmQgOiBfb3B0aW9ucyRkdXJhdGlvbixcbiAgICAgICAgX29wdGlvbnMkZWFzaW5nID0gb3B0aW9ucy5lYXNpbmcsXG4gICAgICAgIGVhc2luZ09wdGlvbiA9IF9vcHRpb25zJGVhc2luZyA9PT0gdm9pZCAwID8gZWFzaW5nLmVhc2VJbk91dCA6IF9vcHRpb25zJGVhc2luZyxcbiAgICAgICAgX29wdGlvbnMkZGVsYXkgPSBvcHRpb25zLmRlbGF5LFxuICAgICAgICBkZWxheSA9IF9vcHRpb25zJGRlbGF5ID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkZGVsYXksXG4gICAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9wdGlvbnMsIFtcImR1cmF0aW9uXCIsIFwiZWFzaW5nXCIsIFwiZGVsYXlcIl0pO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBpc1N0cmluZyA9IGZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xuICAgICAgfTtcblxuICAgICAgdmFyIGlzTnVtYmVyID0gZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KHZhbHVlKSk7XG4gICAgICB9O1xuXG4gICAgICBpZiAoIWlzU3RyaW5nKHByb3BzKSAmJiAhQXJyYXkuaXNBcnJheShwcm9wcykpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignTWF0ZXJpYWwtVUk6IEFyZ3VtZW50IFwicHJvcHNcIiBtdXN0IGJlIGEgc3RyaW5nIG9yIEFycmF5LicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTnVtYmVyKGR1cmF0aW9uT3B0aW9uKSAmJiAhaXNTdHJpbmcoZHVyYXRpb25PcHRpb24pKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNYXRlcmlhbC1VSTogQXJndW1lbnQgXFxcImR1cmF0aW9uXFxcIiBtdXN0IGJlIGEgbnVtYmVyIG9yIGEgc3RyaW5nIGJ1dCBmb3VuZCBcIi5jb25jYXQoZHVyYXRpb25PcHRpb24sIFwiLlwiKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNTdHJpbmcoZWFzaW5nT3B0aW9uKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdNYXRlcmlhbC1VSTogQXJndW1lbnQgXCJlYXNpbmdcIiBtdXN0IGJlIGEgc3RyaW5nLicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTnVtYmVyKGRlbGF5KSAmJiAhaXNTdHJpbmcoZGVsYXkpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ01hdGVyaWFsLVVJOiBBcmd1bWVudCBcImRlbGF5XCIgbXVzdCBiZSBhIG51bWJlciBvciBhIHN0cmluZy4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKE9iamVjdC5rZXlzKG90aGVyKS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk1hdGVyaWFsLVVJOiBVbnJlY29nbml6ZWQgYXJndW1lbnQocykgW1wiLmNvbmNhdChPYmplY3Qua2V5cyhvdGhlcikuam9pbignLCcpLCBcIl0uXCIpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKEFycmF5LmlzQXJyYXkocHJvcHMpID8gcHJvcHMgOiBbcHJvcHNdKS5tYXAoZnVuY3Rpb24gKGFuaW1hdGVkUHJvcCkge1xuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGFuaW1hdGVkUHJvcCwgXCIgXCIpLmNvbmNhdCh0eXBlb2YgZHVyYXRpb25PcHRpb24gPT09ICdzdHJpbmcnID8gZHVyYXRpb25PcHRpb24gOiBmb3JtYXRNcyhkdXJhdGlvbk9wdGlvbiksIFwiIFwiKS5jb25jYXQoZWFzaW5nT3B0aW9uLCBcIiBcIikuY29uY2F0KHR5cGVvZiBkZWxheSA9PT0gJ3N0cmluZycgPyBkZWxheSA6IGZvcm1hdE1zKGRlbGF5KSk7XG4gICAgfSkuam9pbignLCcpO1xuICB9LFxuICBnZXRBdXRvSGVpZ2h0RHVyYXRpb246IGZ1bmN0aW9uIGdldEF1dG9IZWlnaHREdXJhdGlvbihoZWlnaHQpIHtcbiAgICBpZiAoIWhlaWdodCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgdmFyIGNvbnN0YW50ID0gaGVpZ2h0IC8gMzY7IC8vIGh0dHBzOi8vd3d3LndvbGZyYW1hbHBoYS5jb20vaW5wdXQvP2k9KDQrJTJCKzE1KyorKHgrJTJGKzM2KykrKiorMC4yNSslMkIrKHgrJTJGKzM2KSslMkYrNSkrKisxMFxuXG4gICAgcmV0dXJuIE1hdGgucm91bmQoKDQgKyAxNSAqIE1hdGgucG93KGNvbnN0YW50LCAwLjI1KSArIGNvbnN0YW50IC8gNSkgKiAxMCk7XG4gIH1cbn07IiwiaW1wb3J0IHsgdXNlVGhlbWUgYXMgdXNlVGhlbWVXaXRob3V0RGVmYXVsdCB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkZWZhdWx0VGhlbWUgZnJvbSAnLi9kZWZhdWx0VGhlbWUnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlVGhlbWUoKSB7XG4gIHZhciB0aGVtZSA9IHVzZVRoZW1lV2l0aG91dERlZmF1bHQoKSB8fCBkZWZhdWx0VGhlbWU7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBSZWFjdC51c2VEZWJ1Z1ZhbHVlKHRoZW1lKTtcbiAgfVxuXG4gIHJldHVybiB0aGVtZTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCB7IHdpdGhTdHlsZXMgYXMgd2l0aFN0eWxlc1dpdGhvdXREZWZhdWx0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XG5pbXBvcnQgZGVmYXVsdFRoZW1lIGZyb20gJy4vZGVmYXVsdFRoZW1lJztcblxuZnVuY3Rpb24gd2l0aFN0eWxlcyhzdHlsZXNPckNyZWF0b3IsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHdpdGhTdHlsZXNXaXRob3V0RGVmYXVsdChzdHlsZXNPckNyZWF0b3IsIF9leHRlbmRzKHtcbiAgICBkZWZhdWx0VGhlbWU6IGRlZmF1bHRUaGVtZVxuICB9LCBvcHRpb25zKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXM7IiwiaW1wb3J0IHsgd2l0aFRoZW1lQ3JlYXRvciB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IGRlZmF1bHRUaGVtZSBmcm9tICcuL2RlZmF1bHRUaGVtZSc7XG52YXIgd2l0aFRoZW1lID0gd2l0aFRoZW1lQ3JlYXRvcih7XG4gIGRlZmF1bHRUaGVtZTogZGVmYXVsdFRoZW1lXG59KTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZTsiLCIvLyBXZSBuZWVkIHRvIGNlbnRyYWxpemUgdGhlIHpJbmRleCBkZWZpbml0aW9ucyBhcyB0aGV5IHdvcmtcbi8vIGxpa2UgZ2xvYmFsIHZhbHVlcyBpbiB0aGUgYnJvd3Nlci5cbnZhciB6SW5kZXggPSB7XG4gIG1vYmlsZVN0ZXBwZXI6IDEwMDAsXG4gIHNwZWVkRGlhbDogMTA1MCxcbiAgYXBwQmFyOiAxMTAwLFxuICBkcmF3ZXI6IDEyMDAsXG4gIG1vZGFsOiAxMzAwLFxuICBzbmFja2JhcjogMTQwMCxcbiAgdG9vbHRpcDogMTUwMFxufTtcbmV4cG9ydCBkZWZhdWx0IHpJbmRleDsiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9aW5pdEhlYWRNYW5hZ2VyO2V4cG9ydHMuRE9NQXR0cmlidXRlTmFtZXM9dm9pZCAwO2NvbnN0IERPTUF0dHJpYnV0ZU5hbWVzPXthY2NlcHRDaGFyc2V0OidhY2NlcHQtY2hhcnNldCcsY2xhc3NOYW1lOidjbGFzcycsaHRtbEZvcjonZm9yJyxodHRwRXF1aXY6J2h0dHAtZXF1aXYnLG5vTW9kdWxlOidub01vZHVsZSd9O2V4cG9ydHMuRE9NQXR0cmlidXRlTmFtZXM9RE9NQXR0cmlidXRlTmFtZXM7ZnVuY3Rpb24gcmVhY3RFbGVtZW50VG9ET00oe3R5cGUscHJvcHN9KXtjb25zdCBlbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO2Zvcihjb25zdCBwIGluIHByb3BzKXtpZighcHJvcHMuaGFzT3duUHJvcGVydHkocCkpY29udGludWU7aWYocD09PSdjaGlsZHJlbid8fHA9PT0nZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnKWNvbnRpbnVlOy8vIHdlIGRvbid0IHJlbmRlciB1bmRlZmluZWQgcHJvcHMgdG8gdGhlIERPTVxuaWYocHJvcHNbcF09PT11bmRlZmluZWQpY29udGludWU7Y29uc3QgYXR0cj1ET01BdHRyaWJ1dGVOYW1lc1twXXx8cC50b0xvd2VyQ2FzZSgpO2lmKHR5cGU9PT0nc2NyaXB0JyYmKGF0dHI9PT0nYXN5bmMnfHxhdHRyPT09J2RlZmVyJ3x8YXR0cj09PSdub01vZHVsZScpKXs7ZWxbYXR0cl09ISFwcm9wc1twXTt9ZWxzZXtlbC5zZXRBdHRyaWJ1dGUoYXR0cixwcm9wc1twXSk7fX1jb25zdHtjaGlsZHJlbixkYW5nZXJvdXNseVNldElubmVySFRNTH09cHJvcHM7aWYoZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpe2VsLmlubmVySFRNTD1kYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWx8fCcnO31lbHNlIGlmKGNoaWxkcmVuKXtlbC50ZXh0Q29udGVudD10eXBlb2YgY2hpbGRyZW49PT0nc3RyaW5nJz9jaGlsZHJlbjpBcnJheS5pc0FycmF5KGNoaWxkcmVuKT9jaGlsZHJlbi5qb2luKCcnKTonJzt9cmV0dXJuIGVsO31mdW5jdGlvbiB1cGRhdGVFbGVtZW50cyh0eXBlLGNvbXBvbmVudHMpe2NvbnN0IGhlYWRFbD1kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO2NvbnN0IGhlYWRDb3VudEVsPWhlYWRFbC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9bmV4dC1oZWFkLWNvdW50XScpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZighaGVhZENvdW50RWwpe2NvbnNvbGUuZXJyb3IoJ1dhcm5pbmc6IG5leHQtaGVhZC1jb3VudCBpcyBtaXNzaW5nLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWhlYWQtY291bnQtbWlzc2luZycpO3JldHVybjt9fWNvbnN0IGhlYWRDb3VudD1OdW1iZXIoaGVhZENvdW50RWwuY29udGVudCk7Y29uc3Qgb2xkVGFncz1bXTtmb3IobGV0IGk9MCxqPWhlYWRDb3VudEVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7aTxoZWFkQ291bnQ7aSsrLGo9ai5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKXtpZihqLnRhZ05hbWUudG9Mb3dlckNhc2UoKT09PXR5cGUpe29sZFRhZ3MucHVzaChqKTt9fWNvbnN0IG5ld1RhZ3M9Y29tcG9uZW50cy5tYXAocmVhY3RFbGVtZW50VG9ET00pLmZpbHRlcihuZXdUYWc9Pntmb3IobGV0IGs9MCxsZW49b2xkVGFncy5sZW5ndGg7azxsZW47aysrKXtjb25zdCBvbGRUYWc9b2xkVGFnc1trXTtpZihvbGRUYWcuaXNFcXVhbE5vZGUobmV3VGFnKSl7b2xkVGFncy5zcGxpY2UoaywxKTtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9KTtvbGRUYWdzLmZvckVhY2godD0+dC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQpKTtuZXdUYWdzLmZvckVhY2godD0+aGVhZEVsLmluc2VydEJlZm9yZSh0LGhlYWRDb3VudEVsKSk7aGVhZENvdW50RWwuY29udGVudD0oaGVhZENvdW50LW9sZFRhZ3MubGVuZ3RoK25ld1RhZ3MubGVuZ3RoKS50b1N0cmluZygpO31mdW5jdGlvbiBpbml0SGVhZE1hbmFnZXIoKXtsZXQgdXBkYXRlUHJvbWlzZT1udWxsO3JldHVybnttb3VudGVkSW5zdGFuY2VzOm5ldyBTZXQoKSx1cGRhdGVIZWFkOmhlYWQ9Pntjb25zdCBwcm9taXNlPXVwZGF0ZVByb21pc2U9UHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+e2lmKHByb21pc2UhPT11cGRhdGVQcm9taXNlKXJldHVybjt1cGRhdGVQcm9taXNlPW51bGw7Y29uc3QgdGFncz17fTtoZWFkLmZvckVhY2goaD0+e2lmKC8vIElmIHRoZSBmb250IHRhZyBpcyBsb2FkZWQgb25seSBvbiBjbGllbnQgbmF2aWdhdGlvblxuLy8gaXQgd29uJ3QgYmUgaW5saW5lZC4gSW4gdGhpcyBjYXNlIHJldmVydCB0byB0aGUgb3JpZ2luYWwgYmVoYXZpb3JcbmgudHlwZT09PSdsaW5rJyYmaC5wcm9wc1snZGF0YS1vcHRpbWl6ZWQtZm9udHMnXSYmIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHN0eWxlW2RhdGEtaHJlZj1cIiR7aC5wcm9wc1snZGF0YS1ocmVmJ119XCJdYCkpe2gucHJvcHMuaHJlZj1oLnByb3BzWydkYXRhLWhyZWYnXTtoLnByb3BzWydkYXRhLWhyZWYnXT11bmRlZmluZWQ7fWNvbnN0IGNvbXBvbmVudHM9dGFnc1toLnR5cGVdfHxbXTtjb21wb25lbnRzLnB1c2goaCk7dGFnc1toLnR5cGVdPWNvbXBvbmVudHM7fSk7Y29uc3QgdGl0bGVDb21wb25lbnQ9dGFncy50aXRsZT90YWdzLnRpdGxlWzBdOm51bGw7bGV0IHRpdGxlPScnO2lmKHRpdGxlQ29tcG9uZW50KXtjb25zdHtjaGlsZHJlbn09dGl0bGVDb21wb25lbnQucHJvcHM7dGl0bGU9dHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZyc/Y2hpbGRyZW46QXJyYXkuaXNBcnJheShjaGlsZHJlbik/Y2hpbGRyZW4uam9pbignJyk6Jyc7fWlmKHRpdGxlIT09ZG9jdW1lbnQudGl0bGUpZG9jdW1lbnQudGl0bGU9dGl0bGU7WydtZXRhJywnYmFzZScsJ2xpbmsnLCdzdHlsZScsJ3NjcmlwdCddLmZvckVhY2godHlwZT0+e3VwZGF0ZUVsZW1lbnRzKHR5cGUsdGFnc1t0eXBlXXx8W10pO30pO30pO319O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhlYWQtbWFuYWdlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9dm9pZCAwO2NvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrfHxmdW5jdGlvbihjYil7bGV0IHN0YXJ0PURhdGUubm93KCk7cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtjYih7ZGlkVGltZW91dDpmYWxzZSx0aW1lUmVtYWluaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIE1hdGgubWF4KDAsNTAtKERhdGUubm93KCktc3RhcnQpKTt9fSk7fSwxKTt9O2V4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1ZXN0SWRsZUNhbGxiYWNrO2NvbnN0IGNhbmNlbElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLmNhbmNlbElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oaWQpe3JldHVybiBjbGVhclRpbWVvdXQoaWQpO307ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9Y2FuY2VsSWRsZUNhbGxiYWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmluaXRTY3JpcHRMb2FkZXI9aW5pdFNjcmlwdExvYWRlcjtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfZXh0ZW5kczI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTt2YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7dmFyIF9yZWFjdD1yZXF1aXJlKFwicmVhY3RcIik7dmFyIF9oZWFkTWFuYWdlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9oZWFkLW1hbmFnZXItY29udGV4dFwiKTt2YXIgX2hlYWRNYW5hZ2VyPXJlcXVpcmUoXCIuL2hlYWQtbWFuYWdlclwiKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO2NvbnN0IFNjcmlwdENhY2hlPW5ldyBNYXAoKTtjb25zdCBMb2FkQ2FjaGU9bmV3IFNldCgpO2NvbnN0IGlnbm9yZVByb3BzPVsnb25Mb2FkJywnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnLCdjaGlsZHJlbicsJ29uRXJyb3InLCdzdHJhdGVneSddO2NvbnN0IGxvYWRTY3JpcHQ9cHJvcHM9Pntjb25zdHtzcmMsaWQsb25Mb2FkPSgpPT57fSxkYW5nZXJvdXNseVNldElubmVySFRNTCxjaGlsZHJlbj0nJyxvbkVycm9yfT1wcm9wcztjb25zdCBjYWNoZUtleT1pZHx8c3JjO2lmKFNjcmlwdENhY2hlLmhhcyhzcmMpKXtpZighTG9hZENhY2hlLmhhcyhjYWNoZUtleSkpe0xvYWRDYWNoZS5hZGQoY2FjaGVLZXkpOy8vIEV4ZWN1dGUgb25Mb2FkIHNpbmNlIHRoZSBzY3JpcHQgbG9hZGluZyBoYXMgYmVndW5cblNjcmlwdENhY2hlLmdldChzcmMpLnRoZW4ob25Mb2FkLG9uRXJyb3IpO31yZXR1cm47fWNvbnN0IGVsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO2NvbnN0IGxvYWRQcm9taXNlPW5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntlbC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJyxmdW5jdGlvbigpe3Jlc29sdmUoKTtpZihvbkxvYWQpe29uTG9hZC5jYWxsKHRoaXMpO319KTtlbC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsZnVuY3Rpb24oKXtyZWplY3QoKTtpZihvbkVycm9yKXtvbkVycm9yKCk7fX0pO30pO2lmKHNyYyl7U2NyaXB0Q2FjaGUuc2V0KHNyYyxsb2FkUHJvbWlzZSk7TG9hZENhY2hlLmFkZChjYWNoZUtleSk7fWlmKGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKXtlbC5pbm5lckhUTUw9ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwuX19odG1sfHwnJzt9ZWxzZSBpZihjaGlsZHJlbil7ZWwudGV4dENvbnRlbnQ9dHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZyc/Y2hpbGRyZW46QXJyYXkuaXNBcnJheShjaGlsZHJlbik/Y2hpbGRyZW4uam9pbignJyk6Jyc7fWVsc2UgaWYoc3JjKXtlbC5zcmM9c3JjO31mb3IoY29uc3Rbayx2YWx1ZV1vZiBPYmplY3QuZW50cmllcyhwcm9wcykpe2lmKHZhbHVlPT09dW5kZWZpbmVkfHxpZ25vcmVQcm9wcy5pbmNsdWRlcyhrKSl7Y29udGludWU7fWNvbnN0IGF0dHI9X2hlYWRNYW5hZ2VyLkRPTUF0dHJpYnV0ZU5hbWVzW2tdfHxrLnRvTG93ZXJDYXNlKCk7ZWwuc2V0QXR0cmlidXRlKGF0dHIsdmFsdWUpO31kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKTt9O2Z1bmN0aW9uIGhhbmRsZUNsaWVudFNjcmlwdExvYWQocHJvcHMpe2NvbnN0e3N0cmF0ZWd5PSdhZnRlckludGVyYWN0aXZlJ309cHJvcHM7aWYoc3RyYXRlZ3k9PT0nYWZ0ZXJJbnRlcmFjdGl2ZScpe2xvYWRTY3JpcHQocHJvcHMpO31lbHNlIGlmKHN0cmF0ZWd5PT09J2xhenlPbmxvYWQnKXt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsKCk9PnsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+bG9hZFNjcmlwdChwcm9wcykpO30pO319ZnVuY3Rpb24gbG9hZExhenlTY3JpcHQocHJvcHMpe2lmKGRvY3VtZW50LnJlYWR5U3RhdGU9PT0nY29tcGxldGUnKXsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+bG9hZFNjcmlwdChwcm9wcykpO31lbHNle3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywoKT0+eygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5sb2FkU2NyaXB0KHByb3BzKSk7fSk7fX1mdW5jdGlvbiBpbml0U2NyaXB0TG9hZGVyKHNjcmlwdExvYWRlckl0ZW1zKXtzY3JpcHRMb2FkZXJJdGVtcy5mb3JFYWNoKGhhbmRsZUNsaWVudFNjcmlwdExvYWQpO31mdW5jdGlvbiBTY3JpcHQocHJvcHMpe2NvbnN0e3NyYz0nJyxvbkxvYWQ9KCk9Pnt9LHN0cmF0ZWd5PSdhZnRlckludGVyYWN0aXZlJyxvbkVycm9yfT1wcm9wcyxyZXN0UHJvcHM9KDAsX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKHByb3BzLFtcInNyY1wiLFwib25Mb2FkXCIsXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiLFwic3RyYXRlZ3lcIixcIm9uRXJyb3JcIl0pOy8vIENvbnRleHQgaXMgYXZhaWxhYmxlIG9ubHkgZHVyaW5nIFNTUlxuY29uc3R7dXBkYXRlU2NyaXB0cyxzY3JpcHRzfT0oMCxfcmVhY3QudXNlQ29udGV4dCkoX2hlYWRNYW5hZ2VyQ29udGV4dC5IZWFkTWFuYWdlckNvbnRleHQpOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57aWYoc3RyYXRlZ3k9PT0nYWZ0ZXJJbnRlcmFjdGl2ZScpe2xvYWRTY3JpcHQocHJvcHMpO31lbHNlIGlmKHN0cmF0ZWd5PT09J2xhenlPbmxvYWQnKXtsb2FkTGF6eVNjcmlwdChwcm9wcyk7fX0sW3Byb3BzLHN0cmF0ZWd5XSk7aWYoc3RyYXRlZ3k9PT0nYmVmb3JlSW50ZXJhY3RpdmUnKXtpZih1cGRhdGVTY3JpcHRzKXtzY3JpcHRzLmJlZm9yZUludGVyYWN0aXZlPShzY3JpcHRzLmJlZm9yZUludGVyYWN0aXZlfHxbXSkuY29uY2F0KFsoMCxfZXh0ZW5kczIuZGVmYXVsdCkoe3NyYyxvbkxvYWQsb25FcnJvcn0scmVzdFByb3BzKV0pO3VwZGF0ZVNjcmlwdHMoc2NyaXB0cyk7fX1yZXR1cm4gbnVsbDt9dmFyIF9kZWZhdWx0PVNjcmlwdDtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY3JpcHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5IdG1sPUh0bWw7ZXhwb3J0cy5NYWluPU1haW47ZXhwb3J0cy5OZXh0U2NyaXB0PWV4cG9ydHMuSGVhZD1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcHJvcFR5cGVzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3NlcnZlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJzdHlsZWQtanN4L3NlcnZlclwiKSk7dmFyIF9jb25zdGFudHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9jb25zdGFudHNcIik7dmFyIF9kb2N1bWVudENvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9kb2N1bWVudC1jb250ZXh0XCIpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTtleHBvcnRzLkRvY3VtZW50Q29udGV4dD1fdXRpbHMuRG9jdW1lbnRDb250ZXh0O2V4cG9ydHMuRG9jdW1lbnRJbml0aWFsUHJvcHM9X3V0aWxzLkRvY3VtZW50SW5pdGlhbFByb3BzO2V4cG9ydHMuRG9jdW1lbnRQcm9wcz1fdXRpbHMuRG9jdW1lbnRQcm9wczt2YXIgX2dldFBhZ2VGaWxlcz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL2dldC1wYWdlLWZpbGVzXCIpO3ZhciBfdXRpbHMyPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9zZXJ2ZXIvdXRpbHNcIik7dmFyIF9odG1sZXNjYXBlPXJlcXVpcmUoXCIuLi9zZXJ2ZXIvaHRtbGVzY2FwZVwiKTt2YXIgX3NjcmlwdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9jbGllbnQvc2NyaXB0XCIpKTtmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKXtpZih0eXBlb2YgV2Vha01hcCE9PVwiZnVuY3Rpb25cIilyZXR1cm4gbnVsbDt2YXIgY2FjaGU9bmV3IFdlYWtNYXAoKTtfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGU9ZnVuY3Rpb24oKXtyZXR1cm4gY2FjaGU7fTtyZXR1cm4gY2FjaGU7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iail7aWYob2JqJiZvYmouX19lc01vZHVsZSl7cmV0dXJuIG9iajt9aWYob2JqPT09bnVsbHx8dHlwZW9mIG9iaiE9PVwib2JqZWN0XCImJnR5cGVvZiBvYmohPT1cImZ1bmN0aW9uXCIpe3JldHVybntkZWZhdWx0Om9ian07fXZhciBjYWNoZT1fZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtpZihjYWNoZSYmY2FjaGUuaGFzKG9iaikpe3JldHVybiBjYWNoZS5nZXQob2JqKTt9dmFyIG5ld09iaj17fTt2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSYmT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtmb3IodmFyIGtleSBpbiBvYmope2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosa2V5KSl7dmFyIGRlc2M9aGFzUHJvcGVydHlEZXNjcmlwdG9yP09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLGtleSk6bnVsbDtpZihkZXNjJiYoZGVzYy5nZXR8fGRlc2Muc2V0KSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaixrZXksZGVzYyk7fWVsc2V7bmV3T2JqW2tleV09b2JqW2tleV07fX19bmV3T2JqLmRlZmF1bHQ9b2JqO2lmKGNhY2hlKXtjYWNoZS5zZXQob2JqLG5ld09iaik7fXJldHVybiBuZXdPYmo7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9ZnVuY3Rpb24gZ2V0RG9jdW1lbnRGaWxlcyhidWlsZE1hbmlmZXN0LHBhdGhuYW1lLGluQW1wTW9kZSl7Y29uc3Qgc2hhcmVkRmlsZXM9KDAsX2dldFBhZ2VGaWxlcy5nZXRQYWdlRmlsZXMpKGJ1aWxkTWFuaWZlc3QsJy9fYXBwJyk7Y29uc3QgcGFnZUZpbGVzPWluQW1wTW9kZT9bXTooMCxfZ2V0UGFnZUZpbGVzLmdldFBhZ2VGaWxlcykoYnVpbGRNYW5pZmVzdCxwYXRobmFtZSk7cmV0dXJue3NoYXJlZEZpbGVzLHBhZ2VGaWxlcyxhbGxGaWxlczpbLi4ubmV3IFNldChbLi4uc2hhcmVkRmlsZXMsLi4ucGFnZUZpbGVzXSldfTt9ZnVuY3Rpb24gZ2V0UG9seWZpbGxTY3JpcHRzKGNvbnRleHQscHJvcHMpey8vIHBvbHlmaWxscy5qcyBoYXMgdG8gYmUgcmVuZGVyZWQgYXMgbm9tb2R1bGUgd2l0aG91dCBhc3luY1xuLy8gSXQgYWxzbyBoYXMgdG8gYmUgdGhlIGZpcnN0IHNjcmlwdCB0byBsb2FkXG5jb25zdHthc3NldFByZWZpeCxidWlsZE1hbmlmZXN0LGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nfT1jb250ZXh0O3JldHVybiBidWlsZE1hbmlmZXN0LnBvbHlmaWxsRmlsZXMuZmlsdGVyKHBvbHlmaWxsPT5wb2x5ZmlsbC5lbmRzV2l0aCgnLmpzJykmJiFwb2x5ZmlsbC5lbmRzV2l0aCgnLm1vZHVsZS5qcycpKS5tYXAocG9seWZpbGw9Pi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2tleTpwb2x5ZmlsbCxkZWZlcjohZGlzYWJsZU9wdGltaXplZExvYWRpbmcsbm9uY2U6cHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46cHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4sbm9Nb2R1bGU6dHJ1ZSxzcmM6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7cG9seWZpbGx9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfSkpO31mdW5jdGlvbiBnZXRQcmVOZXh0U2NyaXB0cyhjb250ZXh0LHByb3BzKXtjb25zdHtzY3JpcHRMb2FkZXIsZGlzYWJsZU9wdGltaXplZExvYWRpbmd9PWNvbnRleHQ7cmV0dXJuKHNjcmlwdExvYWRlci5iZWZvcmVJbnRlcmFjdGl2ZXx8W10pLm1hcChmaWxlPT57Y29uc3R7c3RyYXRlZ3ksLi4uc2NyaXB0UHJvcHN9PWZpbGU7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIixPYmplY3QuYXNzaWduKHt9LHNjcmlwdFByb3BzLHtkZWZlcjohZGlzYWJsZU9wdGltaXplZExvYWRpbmcsbm9uY2U6cHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46cHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU59KSk7fSk7fWZ1bmN0aW9uIGdldER5bmFtaWNDaHVua3MoY29udGV4dCxwcm9wcyxmaWxlcyl7Y29uc3R7ZHluYW1pY0ltcG9ydHMsYXNzZXRQcmVmaXgsaXNEZXZlbG9wbWVudCxkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxkaXNhYmxlT3B0aW1pemVkTG9hZGluZ309Y29udGV4dDtyZXR1cm4gZHluYW1pY0ltcG9ydHMubWFwKGZpbGU9PntpZighZmlsZS5lbmRzV2l0aCgnLmpzJyl8fGZpbGVzLmFsbEZpbGVzLmluY2x1ZGVzKGZpbGUpKXJldHVybiBudWxsO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2FzeW5jOiFpc0RldmVsb3BtZW50JiZkaXNhYmxlT3B0aW1pemVkTG9hZGluZyxkZWZlcjohZGlzYWJsZU9wdGltaXplZExvYWRpbmcsa2V5OmZpbGUsc3JjOmAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWAsbm9uY2U6cHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46cHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU59KTt9KTt9ZnVuY3Rpb24gZ2V0U2NyaXB0cyhjb250ZXh0LHByb3BzLGZpbGVzKXt2YXIgX2J1aWxkTWFuaWZlc3QkbG93UHJpO2NvbnN0e2Fzc2V0UHJlZml4LGJ1aWxkTWFuaWZlc3QsaXNEZXZlbG9wbWVudCxkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxkaXNhYmxlT3B0aW1pemVkTG9hZGluZ309Y29udGV4dDtjb25zdCBub3JtYWxTY3JpcHRzPWZpbGVzLmFsbEZpbGVzLmZpbHRlcihmaWxlPT5maWxlLmVuZHNXaXRoKCcuanMnKSk7Y29uc3QgbG93UHJpb3JpdHlTY3JpcHRzPShfYnVpbGRNYW5pZmVzdCRsb3dQcmk9YnVpbGRNYW5pZmVzdC5sb3dQcmlvcml0eUZpbGVzKT09bnVsbD92b2lkIDA6X2J1aWxkTWFuaWZlc3QkbG93UHJpLmZpbHRlcihmaWxlPT5maWxlLmVuZHNXaXRoKCcuanMnKSk7cmV0dXJuWy4uLm5vcm1hbFNjcmlwdHMsLi4ubG93UHJpb3JpdHlTY3JpcHRzXS5tYXAoZmlsZT0+e3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2tleTpmaWxlLHNyYzpgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gLG5vbmNlOnByb3BzLm5vbmNlLGFzeW5jOiFpc0RldmVsb3BtZW50JiZkaXNhYmxlT3B0aW1pemVkTG9hZGluZyxkZWZlcjohZGlzYWJsZU9wdGltaXplZExvYWRpbmcsY3Jvc3NPcmlnaW46cHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU59KTt9KTt9LyoqXG4gKiBgRG9jdW1lbnRgIGNvbXBvbmVudCBoYW5kbGVzIHRoZSBpbml0aWFsIGBkb2N1bWVudGAgbWFya3VwIGFuZCByZW5kZXJzIG9ubHkgb24gdGhlIHNlcnZlciBzaWRlLlxuICogQ29tbW9ubHkgdXNlZCBmb3IgaW1wbGVtZW50aW5nIHNlcnZlciBzaWRlIHJlbmRlcmluZyBmb3IgYGNzcy1pbi1qc2AgbGlicmFyaWVzLlxuICovY2xhc3MgRG9jdW1lbnQgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50ey8qKlxuICAgKiBgZ2V0SW5pdGlhbFByb3BzYCBob29rIHJldHVybnMgdGhlIGNvbnRleHQgb2JqZWN0IHdpdGggdGhlIGFkZGl0aW9uIG9mIGByZW5kZXJQYWdlYC5cbiAgICogYHJlbmRlclBhZ2VgIGNhbGxiYWNrIGV4ZWN1dGVzIGBSZWFjdGAgcmVuZGVyaW5nIGxvZ2ljIHN5bmNocm9ub3VzbHkgdG8gc3VwcG9ydCBzZXJ2ZXItcmVuZGVyaW5nIHdyYXBwZXJzXG4gICAqL3N0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY3R4KXtjb25zdCBlbmhhbmNlQXBwPUFwcD0+e3JldHVybiBwcm9wcz0+LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQXBwLHByb3BzKTt9O2NvbnN0e2h0bWwsaGVhZH09YXdhaXQgY3R4LnJlbmRlclBhZ2Uoe2VuaGFuY2VBcHB9KTtjb25zdCBzdHlsZXM9Wy4uLigwLF9zZXJ2ZXIuZGVmYXVsdCkoKV07cmV0dXJue2h0bWwsaGVhZCxzdHlsZXN9O31zdGF0aWMgcmVuZGVyRG9jdW1lbnQoRG9jdW1lbnRDb21wb25lbnQscHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9kb2N1bWVudENvbnRleHQuRG9jdW1lbnRDb250ZXh0LlByb3ZpZGVyLHt2YWx1ZTpwcm9wc30sLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoRG9jdW1lbnRDb21wb25lbnQscHJvcHMpKTt9cmVuZGVyKCl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoSHRtbCxudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEhlYWQsbnVsbCksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJib2R5XCIsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChNYWluLG51bGwpLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE5leHRTY3JpcHQsbnVsbCkpKTt9fWV4cG9ydHMuZGVmYXVsdD1Eb2N1bWVudDtmdW5jdGlvbiBIdG1sKHByb3BzKXtjb25zdHtpbkFtcE1vZGUsZG9jQ29tcG9uZW50c1JlbmRlcmVkLGxvY2FsZX09KDAsX3JlYWN0LnVzZUNvbnRleHQpKF9kb2N1bWVudENvbnRleHQuRG9jdW1lbnRDb250ZXh0KTtkb2NDb21wb25lbnRzUmVuZGVyZWQuSHRtbD10cnVlO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaHRtbFwiLE9iamVjdC5hc3NpZ24oe30scHJvcHMse2xhbmc6cHJvcHMubGFuZ3x8bG9jYWxlfHx1bmRlZmluZWQsYW1wOmluQW1wTW9kZT8nJzp1bmRlZmluZWQsXCJkYXRhLWFtcGRldm1vZGVcIjppbkFtcE1vZGUmJnByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nPycnOnVuZGVmaW5lZH0pKTt9Y2xhc3MgSGVhZCBleHRlbmRzIF9yZWFjdC5Db21wb25lbnR7Y29uc3RydWN0b3IoLi4uYXJncyl7c3VwZXIoLi4uYXJncyk7dGhpcy5jb250ZXh0PXZvaWQgMDt9Z2V0Q3NzTGlua3MoZmlsZXMpe2NvbnN0e2Fzc2V0UHJlZml4LGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLGR5bmFtaWNJbXBvcnRzfT10aGlzLmNvbnRleHQ7Y29uc3QgY3NzRmlsZXM9ZmlsZXMuYWxsRmlsZXMuZmlsdGVyKGY9PmYuZW5kc1dpdGgoJy5jc3MnKSk7Y29uc3Qgc2hhcmVkRmlsZXM9bmV3IFNldChmaWxlcy5zaGFyZWRGaWxlcyk7Ly8gVW5tYW5hZ2VkIGZpbGVzIGFyZSBDU1MgZmlsZXMgdGhhdCB3aWxsIGJlIGhhbmRsZWQgZGlyZWN0bHkgYnkgdGhlXG4vLyB3ZWJwYWNrIHJ1bnRpbWUgKGBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbmApLlxubGV0IHVubWFuZ2VkRmlsZXM9bmV3IFNldChbXSk7bGV0IGR5bmFtaWNDc3NGaWxlcz1BcnJheS5mcm9tKG5ldyBTZXQoZHluYW1pY0ltcG9ydHMuZmlsdGVyKGZpbGU9PmZpbGUuZW5kc1dpdGgoJy5jc3MnKSkpKTtpZihkeW5hbWljQ3NzRmlsZXMubGVuZ3RoKXtjb25zdCBleGlzdGluZz1uZXcgU2V0KGNzc0ZpbGVzKTtkeW5hbWljQ3NzRmlsZXM9ZHluYW1pY0Nzc0ZpbGVzLmZpbHRlcihmPT4hKGV4aXN0aW5nLmhhcyhmKXx8c2hhcmVkRmlsZXMuaGFzKGYpKSk7dW5tYW5nZWRGaWxlcz1uZXcgU2V0KGR5bmFtaWNDc3NGaWxlcyk7Y3NzRmlsZXMucHVzaCguLi5keW5hbWljQ3NzRmlsZXMpO31sZXQgY3NzTGlua0VsZW1lbnRzPVtdO2Nzc0ZpbGVzLmZvckVhY2goZmlsZT0+e2NvbnN0IGlzU2hhcmVkRmlsZT1zaGFyZWRGaWxlcy5oYXMoZmlsZSk7aWYoIXByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1Mpe2Nzc0xpbmtFbGVtZW50cy5wdXNoKC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtrZXk6YCR7ZmlsZX0tcHJlbG9hZGAsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxyZWw6XCJwcmVsb2FkXCIsaHJlZjpgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gLGFzOlwic3R5bGVcIixjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOfSkpO31jb25zdCBpc1VubWFuYWdlZEZpbGU9dW5tYW5nZWRGaWxlcy5oYXMoZmlsZSk7Y3NzTGlua0VsZW1lbnRzLnB1c2goLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse2tleTpmaWxlLG5vbmNlOnRoaXMucHJvcHMubm9uY2UscmVsOlwic3R5bGVzaGVldFwiLGhyZWY6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOLFwiZGF0YS1uLWdcIjppc1VubWFuYWdlZEZpbGU/dW5kZWZpbmVkOmlzU2hhcmVkRmlsZT8nJzp1bmRlZmluZWQsXCJkYXRhLW4tcFwiOmlzVW5tYW5hZ2VkRmlsZT91bmRlZmluZWQ6aXNTaGFyZWRGaWxlP3VuZGVmaW5lZDonJ30pKTt9KTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdkZXZlbG9wbWVudCcmJnByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9GT05UUyl7Y3NzTGlua0VsZW1lbnRzPXRoaXMubWFrZVN0eWxlc2hlZXRJbmVydChjc3NMaW5rRWxlbWVudHMpO31yZXR1cm4gY3NzTGlua0VsZW1lbnRzLmxlbmd0aD09PTA/bnVsbDpjc3NMaW5rRWxlbWVudHM7fWdldFByZWxvYWREeW5hbWljQ2h1bmtzKCl7Y29uc3R7ZHluYW1pY0ltcG9ydHMsYXNzZXRQcmVmaXgsZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9PXRoaXMuY29udGV4dDtyZXR1cm4gZHluYW1pY0ltcG9ydHMubWFwKGZpbGU9PntpZighZmlsZS5lbmRzV2l0aCgnLmpzJykpe3JldHVybiBudWxsO31yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7cmVsOlwicHJlbG9hZFwiLGtleTpmaWxlLGhyZWY6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxhczpcInNjcmlwdFwiLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTn0pO30pLy8gRmlsdGVyIG91dCBudWxsZWQgc2NyaXB0c1xuLmZpbHRlcihCb29sZWFuKTt9Z2V0UHJlbG9hZE1haW5MaW5rcyhmaWxlcyl7Y29uc3R7YXNzZXRQcmVmaXgsZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsc2NyaXB0TG9hZGVyfT10aGlzLmNvbnRleHQ7Y29uc3QgcHJlbG9hZEZpbGVzPWZpbGVzLmFsbEZpbGVzLmZpbHRlcihmaWxlPT57cmV0dXJuIGZpbGUuZW5kc1dpdGgoJy5qcycpO30pO3JldHVyblsuLi4oc2NyaXB0TG9hZGVyLmJlZm9yZUludGVyYWN0aXZlfHxbXSkubWFwKGZpbGU9Pi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtrZXk6ZmlsZS5zcmMsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxyZWw6XCJwcmVsb2FkXCIsaHJlZjpmaWxlLnNyYyxhczpcInNjcmlwdFwiLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU59KSksLi4ucHJlbG9hZEZpbGVzLm1hcChmaWxlPT4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7a2V5OmZpbGUsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxyZWw6XCJwcmVsb2FkXCIsaHJlZjpgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gLGFzOlwic2NyaXB0XCIsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTn0pKV07fWdldER5bmFtaWNDaHVua3MoZmlsZXMpe3JldHVybiBnZXREeW5hbWljQ2h1bmtzKHRoaXMuY29udGV4dCx0aGlzLnByb3BzLGZpbGVzKTt9Z2V0UHJlTmV4dFNjcmlwdHMoKXtyZXR1cm4gZ2V0UHJlTmV4dFNjcmlwdHModGhpcy5jb250ZXh0LHRoaXMucHJvcHMpO31nZXRTY3JpcHRzKGZpbGVzKXtyZXR1cm4gZ2V0U2NyaXB0cyh0aGlzLmNvbnRleHQsdGhpcy5wcm9wcyxmaWxlcyk7fWdldFBvbHlmaWxsU2NyaXB0cygpe3JldHVybiBnZXRQb2x5ZmlsbFNjcmlwdHModGhpcy5jb250ZXh0LHRoaXMucHJvcHMpO31oYW5kbGVEb2N1bWVudFNjcmlwdExvYWRlckl0ZW1zKGNoaWxkcmVuKXtjb25zdHtzY3JpcHRMb2FkZXJ9PXRoaXMuY29udGV4dDtjb25zdCBzY3JpcHRMb2FkZXJJdGVtcz1bXTtjb25zdCBmaWx0ZXJlZENoaWxkcmVuPVtdO19yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sY2hpbGQ9PntpZihjaGlsZC50eXBlPT09X3NjcmlwdC5kZWZhdWx0KXtpZihjaGlsZC5wcm9wcy5zdHJhdGVneT09PSdiZWZvcmVJbnRlcmFjdGl2ZScpe3NjcmlwdExvYWRlci5iZWZvcmVJbnRlcmFjdGl2ZT0oc2NyaXB0TG9hZGVyLmJlZm9yZUludGVyYWN0aXZlfHxbXSkuY29uY2F0KFt7Li4uY2hpbGQucHJvcHN9XSk7cmV0dXJuO31lbHNlIGlmKFsnbGF6eU9ubG9hZCcsJ2FmdGVySW50ZXJhY3RpdmUnXS5pbmNsdWRlcyhjaGlsZC5wcm9wcy5zdHJhdGVneSkpe3NjcmlwdExvYWRlckl0ZW1zLnB1c2goY2hpbGQucHJvcHMpO3JldHVybjt9fWZpbHRlcmVkQ2hpbGRyZW4ucHVzaChjaGlsZCk7fSk7dGhpcy5jb250ZXh0Ll9fTkVYVF9EQVRBX18uc2NyaXB0TG9hZGVyPXNjcmlwdExvYWRlckl0ZW1zO3JldHVybiBmaWx0ZXJlZENoaWxkcmVuO31tYWtlU3R5bGVzaGVldEluZXJ0KG5vZGUpe3JldHVybiBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5tYXAobm9kZSxjPT57aWYoYy50eXBlPT09J2xpbmsnJiZjLnByb3BzWydocmVmJ10mJl9jb25zdGFudHMuT1BUSU1JWkVEX0ZPTlRfUFJPVklERVJTLnNvbWUoKHt1cmx9KT0+Yy5wcm9wc1snaHJlZiddLnN0YXJ0c1dpdGgodXJsKSkpe2NvbnN0IG5ld1Byb3BzPXsuLi4oYy5wcm9wc3x8e30pfTtuZXdQcm9wc1snZGF0YS1ocmVmJ109bmV3UHJvcHNbJ2hyZWYnXTtuZXdQcm9wc1snaHJlZiddPXVuZGVmaW5lZDtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGMsbmV3UHJvcHMpO31lbHNlIGlmKGMucHJvcHMmJmMucHJvcHNbJ2NoaWxkcmVuJ10pe2MucHJvcHNbJ2NoaWxkcmVuJ109dGhpcy5tYWtlU3R5bGVzaGVldEluZXJ0KGMucHJvcHNbJ2NoaWxkcmVuJ10pO31yZXR1cm4gYzt9KTt9cmVuZGVyKCl7dmFyIF90aGlzJHByb3BzJG5vbmNlLF90aGlzJHByb3BzJG5vbmNlMjtjb25zdHtzdHlsZXMsYW1wUGF0aCxpbkFtcE1vZGUsaHlicmlkQW1wLGNhbm9uaWNhbEJhc2UsX19ORVhUX0RBVEFfXyxkYW5nZXJvdXNBc1BhdGgsaGVhZFRhZ3MsdW5zdGFibGVfcnVudGltZUpTLHVuc3RhYmxlX0pzUHJlbG9hZCxkaXNhYmxlT3B0aW1pemVkTG9hZGluZ309dGhpcy5jb250ZXh0O2NvbnN0IGRpc2FibGVSdW50aW1lSlM9dW5zdGFibGVfcnVudGltZUpTPT09ZmFsc2U7Y29uc3QgZGlzYWJsZUpzUHJlbG9hZD11bnN0YWJsZV9Kc1ByZWxvYWQ9PT1mYWxzZXx8IWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nO3RoaXMuY29udGV4dC5kb2NDb21wb25lbnRzUmVuZGVyZWQuSGVhZD10cnVlO2xldHtoZWFkfT10aGlzLmNvbnRleHQ7bGV0IGNzc1ByZWxvYWRzPVtdO2xldCBvdGhlckhlYWRFbGVtZW50cz1bXTtpZihoZWFkKXtoZWFkLmZvckVhY2goYz0+e2lmKGMmJmMudHlwZT09PSdsaW5rJyYmYy5wcm9wc1sncmVsJ109PT0ncHJlbG9hZCcmJmMucHJvcHNbJ2FzJ109PT0nc3R5bGUnKXtjc3NQcmVsb2Fkcy5wdXNoKGMpO31lbHNle2MmJm90aGVySGVhZEVsZW1lbnRzLnB1c2goYyk7fX0pO2hlYWQ9Y3NzUHJlbG9hZHMuY29uY2F0KG90aGVySGVhZEVsZW1lbnRzKTt9bGV0IGNoaWxkcmVuPV9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLnRvQXJyYXkodGhpcy5wcm9wcy5jaGlsZHJlbikuZmlsdGVyKEJvb2xlYW4pOy8vIHNob3cgYSB3YXJuaW5nIGlmIEhlYWQgY29udGFpbnMgPHRpdGxlPiAob25seSBpbiBkZXZlbG9wbWVudClcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjaGlsZHJlbj1fcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sY2hpbGQ9Pnt2YXIgX2NoaWxkJHByb3BzO2NvbnN0IGlzUmVhY3RIZWxtZXQ9Y2hpbGQ9PW51bGw/dm9pZCAwOihfY2hpbGQkcHJvcHM9Y2hpbGQucHJvcHMpPT1udWxsP3ZvaWQgMDpfY2hpbGQkcHJvcHNbJ2RhdGEtcmVhY3QtaGVsbWV0J107aWYoIWlzUmVhY3RIZWxtZXQpe3ZhciBfY2hpbGQkcHJvcHMyO2lmKChjaGlsZD09bnVsbD92b2lkIDA6Y2hpbGQudHlwZSk9PT0ndGl0bGUnKXtjb25zb2xlLndhcm4oXCJXYXJuaW5nOiA8dGl0bGU+IHNob3VsZCBub3QgYmUgdXNlZCBpbiBfZG9jdW1lbnQuanMncyA8SGVhZD4uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25vLWRvY3VtZW50LXRpdGxlXCIpO31lbHNlIGlmKChjaGlsZD09bnVsbD92b2lkIDA6Y2hpbGQudHlwZSk9PT0nbWV0YScmJihjaGlsZD09bnVsbD92b2lkIDA6KF9jaGlsZCRwcm9wczI9Y2hpbGQucHJvcHMpPT1udWxsP3ZvaWQgMDpfY2hpbGQkcHJvcHMyLm5hbWUpPT09J3ZpZXdwb3J0Jyl7Y29uc29sZS53YXJuKFwiV2FybmluZzogdmlld3BvcnQgbWV0YSB0YWdzIHNob3VsZCBub3QgYmUgdXNlZCBpbiBfZG9jdW1lbnQuanMncyA8SGVhZD4uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25vLWRvY3VtZW50LXZpZXdwb3J0LW1ldGFcIik7fX1yZXR1cm4gY2hpbGQ7fSk7aWYodGhpcy5wcm9wcy5jcm9zc09yaWdpbiljb25zb2xlLndhcm4oJ1dhcm5pbmc6IGBIZWFkYCBhdHRyaWJ1dGUgYGNyb3NzT3JpZ2luYCBpcyBkZXByZWNhdGVkLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9kb2MtY3Jvc3NvcmlnaW4tZGVwcmVjYXRlZCcpO31pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdkZXZlbG9wbWVudCcmJnByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9GT05UUyYmIWluQW1wTW9kZSl7Y2hpbGRyZW49dGhpcy5tYWtlU3R5bGVzaGVldEluZXJ0KGNoaWxkcmVuKTt9Y2hpbGRyZW49dGhpcy5oYW5kbGVEb2N1bWVudFNjcmlwdExvYWRlckl0ZW1zKGNoaWxkcmVuKTtsZXQgaGFzQW1waHRtbFJlbD1mYWxzZTtsZXQgaGFzQ2Fub25pY2FsUmVsPWZhbHNlOy8vIHNob3cgd2FybmluZyBhbmQgcmVtb3ZlIGNvbmZsaWN0aW5nIGFtcCBoZWFkIHRhZ3NcbmhlYWQ9X3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ubWFwKGhlYWR8fFtdLGNoaWxkPT57aWYoIWNoaWxkKXJldHVybiBjaGlsZDtjb25zdHt0eXBlLHByb3BzfT1jaGlsZDtpZihpbkFtcE1vZGUpe2xldCBiYWRQcm9wPScnO2lmKHR5cGU9PT0nbWV0YScmJnByb3BzLm5hbWU9PT0ndmlld3BvcnQnKXtiYWRQcm9wPSduYW1lPVwidmlld3BvcnRcIic7fWVsc2UgaWYodHlwZT09PSdsaW5rJyYmcHJvcHMucmVsPT09J2Nhbm9uaWNhbCcpe2hhc0Nhbm9uaWNhbFJlbD10cnVlO31lbHNlIGlmKHR5cGU9PT0nc2NyaXB0Jyl7Ly8gb25seSBibG9jayBpZlxuLy8gMS4gaXQgaGFzIGEgc3JjIGFuZCBpc24ndCBwb2ludGluZyB0byBhbXBwcm9qZWN0J3MgQ0ROXG4vLyAyLiBpdCBpcyB1c2luZyBkYW5nZXJvdXNseVNldElubmVySFRNTCB3aXRob3V0IGEgdHlwZSBvclxuLy8gYSB0eXBlIG9mIHRleHQvamF2YXNjcmlwdFxuaWYocHJvcHMuc3JjJiZwcm9wcy5zcmMuaW5kZXhPZignYW1wcHJvamVjdCcpPC0xfHxwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCYmKCFwcm9wcy50eXBlfHxwcm9wcy50eXBlPT09J3RleHQvamF2YXNjcmlwdCcpKXtiYWRQcm9wPSc8c2NyaXB0JztPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChwcm9wPT57YmFkUHJvcCs9YCAke3Byb3B9PVwiJHtwcm9wc1twcm9wXX1cImA7fSk7YmFkUHJvcCs9Jy8+Jzt9fWlmKGJhZFByb3Ape2NvbnNvbGUud2FybihgRm91bmQgY29uZmxpY3RpbmcgYW1wIHRhZyBcIiR7Y2hpbGQudHlwZX1cIiB3aXRoIGNvbmZsaWN0aW5nIHByb3AgJHtiYWRQcm9wfSBpbiAke19fTkVYVF9EQVRBX18ucGFnZX0uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2NvbmZsaWN0aW5nLWFtcC10YWdgKTtyZXR1cm4gbnVsbDt9fWVsc2V7Ly8gbm9uLWFtcCBtb2RlXG5pZih0eXBlPT09J2xpbmsnJiZwcm9wcy5yZWw9PT0nYW1waHRtbCcpe2hhc0FtcGh0bWxSZWw9dHJ1ZTt9fXJldHVybiBjaGlsZDt9KTsvLyB0cnkgdG8gcGFyc2Ugc3R5bGVzIGZyb20gZnJhZ21lbnQgZm9yIGJhY2t3YXJkcyBjb21wYXRcbmNvbnN0IGN1clN0eWxlcz1BcnJheS5pc0FycmF5KHN0eWxlcyk/c3R5bGVzOltdO2lmKGluQW1wTW9kZSYmc3R5bGVzJiYvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbnN0eWxlcy5wcm9wcyYmLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG5BcnJheS5pc0FycmF5KHN0eWxlcy5wcm9wcy5jaGlsZHJlbikpe2NvbnN0IGhhc1N0eWxlcz1lbD0+e3ZhciBfZWwkcHJvcHMsX2VsJHByb3BzJGRhbmdlcm91c2x5O3JldHVybiBlbD09bnVsbD92b2lkIDA6KF9lbCRwcm9wcz1lbC5wcm9wcyk9PW51bGw/dm9pZCAwOihfZWwkcHJvcHMkZGFuZ2Vyb3VzbHk9X2VsJHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKT09bnVsbD92b2lkIDA6X2VsJHByb3BzJGRhbmdlcm91c2x5Ll9faHRtbDt9Oy8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuc3R5bGVzLnByb3BzLmNoaWxkcmVuLmZvckVhY2goY2hpbGQ9PntpZihBcnJheS5pc0FycmF5KGNoaWxkKSl7Y2hpbGQuZm9yRWFjaChlbD0+aGFzU3R5bGVzKGVsKSYmY3VyU3R5bGVzLnB1c2goZWwpKTt9ZWxzZSBpZihoYXNTdHlsZXMoY2hpbGQpKXtjdXJTdHlsZXMucHVzaChjaGlsZCk7fX0pO31jb25zdCBmaWxlcz1nZXREb2N1bWVudEZpbGVzKHRoaXMuY29udGV4dC5idWlsZE1hbmlmZXN0LHRoaXMuY29udGV4dC5fX05FWFRfREFUQV9fLnBhZ2UsaW5BbXBNb2RlKTtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImhlYWRcIix0aGlzLnByb3BzLHRoaXMuY29udGV4dC5pc0RldmVsb3BtZW50JiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCxudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIix7XCJkYXRhLW5leHQtaGlkZS1mb3VjXCI6dHJ1ZSxcImRhdGEtYW1wZGV2bW9kZVwiOmluQW1wTW9kZT8ndHJ1ZSc6dW5kZWZpbmVkLGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6YGJvZHl7ZGlzcGxheTpub25lfWB9fSksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLHtcImRhdGEtbmV4dC1oaWRlLWZvdWNcIjp0cnVlLFwiZGF0YS1hbXBkZXZtb2RlXCI6aW5BbXBNb2RlPyd0cnVlJzp1bmRlZmluZWR9LC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIix7ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpgYm9keXtkaXNwbGF5OmJsb2NrfWB9fSkpKSxjaGlsZHJlbixwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfRk9OVFMmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLHtuYW1lOlwibmV4dC1mb250LXByZWNvbm5lY3RcIn0pLGhlYWQsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIse25hbWU6XCJuZXh0LWhlYWQtY291bnRcIixjb250ZW50Ol9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLmNvdW50KGhlYWR8fFtdKS50b1N0cmluZygpfSksaW5BbXBNb2RlJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCxudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLHtuYW1lOlwidmlld3BvcnRcIixjb250ZW50Olwid2lkdGg9ZGV2aWNlLXdpZHRoLG1pbmltdW0tc2NhbGU9MSxpbml0aWFsLXNjYWxlPTFcIn0pLCFoYXNDYW5vbmljYWxSZWwmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtyZWw6XCJjYW5vbmljYWxcIixocmVmOmNhbm9uaWNhbEJhc2UrKDAsX3V0aWxzMi5jbGVhbkFtcFBhdGgpKGRhbmdlcm91c0FzUGF0aCl9KSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7cmVsOlwicHJlbG9hZFwiLGFzOlwic2NyaXB0XCIsaHJlZjpcImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwLmpzXCJ9KSxzdHlsZXMmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIix7XCJhbXAtY3VzdG9tXCI6XCJcIixkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOmN1clN0eWxlcy5tYXAoc3R5bGU9PnN0eWxlLnByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbCkuam9pbignJykucmVwbGFjZSgvXFwvXFwqIyBzb3VyY2VNYXBwaW5nVVJMPS4qXFwqXFwvL2csJycpLnJlcGxhY2UoL1xcL1xcKkAgc291cmNlVVJMPS4qP1xcKlxcLy9nLCcnKX19KSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIse1wiYW1wLWJvaWxlcnBsYXRlXCI6XCJcIixkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOmBib2R5ey13ZWJraXQtYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7LW1vei1hbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aDstbXMtYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7YW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGh9QC13ZWJraXQta2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUAtbW96LWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW1zLWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW8ta2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUBrZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19YH19KSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIse1wiYW1wLWJvaWxlcnBsYXRlXCI6XCJcIixkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOmBib2R5ey13ZWJraXQtYW5pbWF0aW9uOm5vbmU7LW1vei1hbmltYXRpb246bm9uZTstbXMtYW5pbWF0aW9uOm5vbmU7YW5pbWF0aW9uOm5vbmV9YH19KSksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIix7YXN5bmM6dHJ1ZSxzcmM6XCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC5qc1wifSkpLCFpbkFtcE1vZGUmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LG51bGwsIWhhc0FtcGh0bWxSZWwmJmh5YnJpZEFtcCYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse3JlbDpcImFtcGh0bWxcIixocmVmOmNhbm9uaWNhbEJhc2UrZ2V0QW1wUGF0aChhbXBQYXRoLGRhbmdlcm91c0FzUGF0aCl9KSwhcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUyYmdGhpcy5nZXRDc3NMaW5rcyhmaWxlcyksIXByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1MmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIix7XCJkYXRhLW4tY3NzXCI6KF90aGlzJHByb3BzJG5vbmNlPXRoaXMucHJvcHMubm9uY2UpIT1udWxsP190aGlzJHByb3BzJG5vbmNlOicnfSkscHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0lNQUdFUyYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIse25hbWU6XCJuZXh0LWltYWdlLXByZWxvYWRcIn0pLCFkaXNhYmxlUnVudGltZUpTJiYhZGlzYWJsZUpzUHJlbG9hZCYmdGhpcy5nZXRQcmVsb2FkRHluYW1pY0NodW5rcygpLCFkaXNhYmxlUnVudGltZUpTJiYhZGlzYWJsZUpzUHJlbG9hZCYmdGhpcy5nZXRQcmVsb2FkTWFpbkxpbmtzKGZpbGVzKSwhZGlzYWJsZU9wdGltaXplZExvYWRpbmcmJiFkaXNhYmxlUnVudGltZUpTJiZ0aGlzLmdldFBvbHlmaWxsU2NyaXB0cygpLCFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyYmIWRpc2FibGVSdW50aW1lSlMmJnRoaXMuZ2V0UHJlTmV4dFNjcmlwdHMoKSwhZGlzYWJsZU9wdGltaXplZExvYWRpbmcmJiFkaXNhYmxlUnVudGltZUpTJiZ0aGlzLmdldER5bmFtaWNDaHVua3MoZmlsZXMpLCFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyYmIWRpc2FibGVSdW50aW1lSlMmJnRoaXMuZ2V0U2NyaXB0cyhmaWxlcykscHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUyYmdGhpcy5nZXRDc3NMaW5rcyhmaWxlcykscHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUyYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLHtcImRhdGEtbi1jc3NcIjooX3RoaXMkcHJvcHMkbm9uY2UyPXRoaXMucHJvcHMubm9uY2UpIT1udWxsP190aGlzJHByb3BzJG5vbmNlMjonJ30pLHRoaXMuY29udGV4dC5pc0RldmVsb3BtZW50JiYvKiNfX1BVUkVfXyovIC8vIHRoaXMgZWxlbWVudCBpcyB1c2VkIHRvIG1vdW50IGRldmVsb3BtZW50IHN0eWxlcyBzbyB0aGVcbi8vIG9yZGVyaW5nIG1hdGNoZXMgcHJvZHVjdGlvblxuLy8gKGJ5IGRlZmF1bHQsIHN0eWxlLWxvYWRlciBpbmplY3RzIGF0IHRoZSBib3R0b20gb2YgPGhlYWQgLz4pXG5fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIix7aWQ6XCJfX25leHRfY3NzX19ET19OT1RfVVNFX19cIn0pLHN0eWxlc3x8bnVsbCksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQse30sLi4uKGhlYWRUYWdzfHxbXSkpKTt9fWV4cG9ydHMuSGVhZD1IZWFkO0hlYWQuY29udGV4dFR5cGU9X2RvY3VtZW50Q29udGV4dC5Eb2N1bWVudENvbnRleHQ7SGVhZC5wcm9wVHlwZXM9e25vbmNlOl9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsY3Jvc3NPcmlnaW46X3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZ307ZnVuY3Rpb24gTWFpbigpe2NvbnN0e2luQW1wTW9kZSxodG1sLGRvY0NvbXBvbmVudHNSZW5kZXJlZH09KDAsX3JlYWN0LnVzZUNvbnRleHQpKF9kb2N1bWVudENvbnRleHQuRG9jdW1lbnRDb250ZXh0KTtkb2NDb21wb25lbnRzUmVuZGVyZWQuTWFpbj10cnVlO2lmKGluQW1wTW9kZSlyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCxudWxsLF9jb25zdGFudHMuQU1QX1JFTkRFUl9UQVJHRVQpO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2lkOlwiX19uZXh0XCIsZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpodG1sfX0pO31jbGFzcyBOZXh0U2NyaXB0IGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHtjb25zdHJ1Y3RvciguLi5hcmdzKXtzdXBlciguLi5hcmdzKTt0aGlzLmNvbnRleHQ9dm9pZCAwO31nZXREeW5hbWljQ2h1bmtzKGZpbGVzKXtyZXR1cm4gZ2V0RHluYW1pY0NodW5rcyh0aGlzLmNvbnRleHQsdGhpcy5wcm9wcyxmaWxlcyk7fWdldFByZU5leHRTY3JpcHRzKCl7cmV0dXJuIGdldFByZU5leHRTY3JpcHRzKHRoaXMuY29udGV4dCx0aGlzLnByb3BzKTt9Z2V0U2NyaXB0cyhmaWxlcyl7cmV0dXJuIGdldFNjcmlwdHModGhpcy5jb250ZXh0LHRoaXMucHJvcHMsZmlsZXMpO31nZXRQb2x5ZmlsbFNjcmlwdHMoKXtyZXR1cm4gZ2V0UG9seWZpbGxTY3JpcHRzKHRoaXMuY29udGV4dCx0aGlzLnByb3BzKTt9c3RhdGljIGdldElubGluZVNjcmlwdFNvdXJjZShkb2N1bWVudFByb3BzKXtjb25zdHtfX05FWFRfREFUQV9ffT1kb2N1bWVudFByb3BzO3RyeXtjb25zdCBkYXRhPUpTT04uc3RyaW5naWZ5KF9fTkVYVF9EQVRBX18pO3JldHVybigwLF9odG1sZXNjYXBlLmh0bWxFc2NhcGVKc29uU3RyaW5nKShkYXRhKTt9Y2F0Y2goZXJyKXtpZihlcnIubWVzc2FnZS5pbmRleE9mKCdjaXJjdWxhciBzdHJ1Y3R1cmUnKSl7dGhyb3cgbmV3IEVycm9yKGBDaXJjdWxhciBzdHJ1Y3R1cmUgaW4gXCJnZXRJbml0aWFsUHJvcHNcIiByZXN1bHQgb2YgcGFnZSBcIiR7X19ORVhUX0RBVEFfXy5wYWdlfVwiLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9jaXJjdWxhci1zdHJ1Y3R1cmVgKTt9dGhyb3cgZXJyO319cmVuZGVyKCl7Y29uc3R7YXNzZXRQcmVmaXgsaW5BbXBNb2RlLGJ1aWxkTWFuaWZlc3QsdW5zdGFibGVfcnVudGltZUpTLGRvY0NvbXBvbmVudHNSZW5kZXJlZCxkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxkaXNhYmxlT3B0aW1pemVkTG9hZGluZ309dGhpcy5jb250ZXh0O2NvbnN0IGRpc2FibGVSdW50aW1lSlM9dW5zdGFibGVfcnVudGltZUpTPT09ZmFsc2U7ZG9jQ29tcG9uZW50c1JlbmRlcmVkLk5leHRTY3JpcHQ9dHJ1ZTtpZihpbkFtcE1vZGUpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J3Byb2R1Y3Rpb24nKXtyZXR1cm4gbnVsbDt9Y29uc3QgYW1wRGV2RmlsZXM9Wy4uLmJ1aWxkTWFuaWZlc3QuZGV2RmlsZXMsLi4uYnVpbGRNYW5pZmVzdC5wb2x5ZmlsbEZpbGVzLC4uLmJ1aWxkTWFuaWZlc3QuYW1wRGV2RmlsZXNdO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LG51bGwsZGlzYWJsZVJ1bnRpbWVKUz9udWxsOi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2lkOlwiX19ORVhUX0RBVEFfX1wiLHR5cGU6XCJhcHBsaWNhdGlvbi9qc29uXCIsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOLGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6TmV4dFNjcmlwdC5nZXRJbmxpbmVTY3JpcHRTb3VyY2UodGhpcy5jb250ZXh0KX0sXCJkYXRhLWFtcGRldm1vZGVcIjp0cnVlfSksYW1wRGV2RmlsZXMubWFwKGZpbGU9Pi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2tleTpmaWxlLHNyYzpgJHthc3NldFByZWZpeH0vX25leHQvJHtmaWxlfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4sXCJkYXRhLWFtcGRldm1vZGVcIjp0cnVlfSkpKTt9aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4pY29uc29sZS53YXJuKCdXYXJuaW5nOiBgTmV4dFNjcmlwdGAgYXR0cmlidXRlIGBjcm9zc09yaWdpbmAgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZG9jLWNyb3Nzb3JpZ2luLWRlcHJlY2F0ZWQnKTt9Y29uc3QgZmlsZXM9Z2V0RG9jdW1lbnRGaWxlcyh0aGlzLmNvbnRleHQuYnVpbGRNYW5pZmVzdCx0aGlzLmNvbnRleHQuX19ORVhUX0RBVEFfXy5wYWdlLGluQW1wTW9kZSk7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsbnVsbCwhZGlzYWJsZVJ1bnRpbWVKUyYmYnVpbGRNYW5pZmVzdC5kZXZGaWxlcz9idWlsZE1hbmlmZXN0LmRldkZpbGVzLm1hcChmaWxlPT4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHtrZXk6ZmlsZSxzcmM6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU59KSk6bnVsbCxkaXNhYmxlUnVudGltZUpTP251bGw6LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIix7aWQ6XCJfX05FWFRfREFUQV9fXCIsdHlwZTpcImFwcGxpY2F0aW9uL2pzb25cIixub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4sZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpOZXh0U2NyaXB0LmdldElubGluZVNjcmlwdFNvdXJjZSh0aGlzLmNvbnRleHQpfX0pLGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nJiYhZGlzYWJsZVJ1bnRpbWVKUyYmdGhpcy5nZXRQb2x5ZmlsbFNjcmlwdHMoKSxkaXNhYmxlT3B0aW1pemVkTG9hZGluZyYmIWRpc2FibGVSdW50aW1lSlMmJnRoaXMuZ2V0UHJlTmV4dFNjcmlwdHMoKSxkaXNhYmxlT3B0aW1pemVkTG9hZGluZyYmIWRpc2FibGVSdW50aW1lSlMmJnRoaXMuZ2V0RHluYW1pY0NodW5rcyhmaWxlcyksZGlzYWJsZU9wdGltaXplZExvYWRpbmcmJiFkaXNhYmxlUnVudGltZUpTJiZ0aGlzLmdldFNjcmlwdHMoZmlsZXMpKTt9fWV4cG9ydHMuTmV4dFNjcmlwdD1OZXh0U2NyaXB0O05leHRTY3JpcHQuY29udGV4dFR5cGU9X2RvY3VtZW50Q29udGV4dC5Eb2N1bWVudENvbnRleHQ7TmV4dFNjcmlwdC5wcm9wVHlwZXM9e25vbmNlOl9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsY3Jvc3NPcmlnaW46X3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZ307TmV4dFNjcmlwdC5zYWZhcmlOb21vZHVsZUZpeD0nIWZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQsdD1lLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7aWYoIShcIm5vTW9kdWxlXCJpbiB0KSYmXCJvbmJlZm9yZWxvYWRcImluIHQpe3ZhciBuPSExO2UuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZWxvYWRcIixmdW5jdGlvbihlKXtpZihlLnRhcmdldD09PXQpbj0hMDtlbHNlIGlmKCFlLnRhcmdldC5oYXNBdHRyaWJ1dGUoXCJub21vZHVsZVwiKXx8IW4pcmV0dXJuO2UucHJldmVudERlZmF1bHQoKX0sITApLHQudHlwZT1cIm1vZHVsZVwiLHQuc3JjPVwiLlwiLGUuaGVhZC5hcHBlbmRDaGlsZCh0KSx0LnJlbW92ZSgpfX0oKTsnO2Z1bmN0aW9uIGdldEFtcFBhdGgoYW1wUGF0aCxhc1BhdGgpe3JldHVybiBhbXBQYXRofHxgJHthc1BhdGh9JHthc1BhdGguaW5jbHVkZXMoJz8nKT8nJic6Jz8nfWFtcD0xYDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1fZG9jdW1lbnQuanMubWFwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IERvY3VtZW50LCB7IEh0bWwsIEhlYWQsIE1haW4sIE5leHRTY3JpcHQgfSBmcm9tICduZXh0L2RvY3VtZW50JztcclxuaW1wb3J0IHsgU2VydmVyU3R5bGVTaGVldHMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vcGFnZXMvdGhlbWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlEb2N1bWVudCBleHRlbmRzIERvY3VtZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8SHRtbCBsYW5nPVwiZW5cIj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIHsvKiBQV0EgcHJpbWFyeSBjb2xvciAqL31cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9e3RoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWlufSAvPlxyXG4gICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCw0MDAsNTAwLDcwMCZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGJvZHk+XHJcbiAgICAgICAgICA8TWFpbiAvPlxyXG4gICAgICAgICAgPE5leHRTY3JpcHQgLz5cclxuICAgICAgICA8L2JvZHk+XHJcbiAgICAgIDwvSHRtbD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBgZ2V0SW5pdGlhbFByb3BzYCBiZWxvbmdzIHRvIGBfZG9jdW1lbnRgIChpbnN0ZWFkIG9mIGBfYXBwYCksXHJcbi8vIGl0J3MgY29tcGF0aWJsZSB3aXRoIHNlcnZlci1zaWRlIGdlbmVyYXRpb24gKFNTRykuXHJcbk15RG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIC8vIFJlc29sdXRpb24gb3JkZXJcclxuICAvL1xyXG4gIC8vIE9uIHRoZSBzZXJ2ZXI6XHJcbiAgLy8gMS4gYXBwLmdldEluaXRpYWxQcm9wc1xyXG4gIC8vIDIuIHBhZ2UuZ2V0SW5pdGlhbFByb3BzXHJcbiAgLy8gMy4gZG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzXHJcbiAgLy8gNC4gYXBwLnJlbmRlclxyXG4gIC8vIDUuIHBhZ2UucmVuZGVyXHJcbiAgLy8gNi4gZG9jdW1lbnQucmVuZGVyXHJcbiAgLy9cclxuICAvLyBPbiB0aGUgc2VydmVyIHdpdGggZXJyb3I6XHJcbiAgLy8gMS4gZG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzXHJcbiAgLy8gMi4gYXBwLnJlbmRlclxyXG4gIC8vIDMuIHBhZ2UucmVuZGVyXHJcbiAgLy8gNC4gZG9jdW1lbnQucmVuZGVyXHJcbiAgLy9cclxuICAvLyBPbiB0aGUgY2xpZW50XHJcbiAgLy8gMS4gYXBwLmdldEluaXRpYWxQcm9wc1xyXG4gIC8vIDIuIHBhZ2UuZ2V0SW5pdGlhbFByb3BzXHJcbiAgLy8gMy4gYXBwLnJlbmRlclxyXG4gIC8vIDQuIHBhZ2UucmVuZGVyXHJcblxyXG4gIC8vIFJlbmRlciBhcHAgYW5kIHBhZ2UgYW5kIGdldCB0aGUgY29udGV4dCBvZiB0aGUgcGFnZSB3aXRoIGNvbGxlY3RlZCBzaWRlIGVmZmVjdHMuXHJcbiAgY29uc3Qgc2hlZXRzID0gbmV3IFNlcnZlclN0eWxlU2hlZXRzKCk7XHJcbiAgY29uc3Qgb3JpZ2luYWxSZW5kZXJQYWdlID0gY3R4LnJlbmRlclBhZ2U7XHJcblxyXG4gIGN0eC5yZW5kZXJQYWdlID0gKCkgPT5cclxuICAgIG9yaWdpbmFsUmVuZGVyUGFnZSh7XHJcbiAgICAgIGVuaGFuY2VBcHA6IChBcHApID0+IChwcm9wcykgPT4gc2hlZXRzLmNvbGxlY3QoPEFwcCB7Li4ucHJvcHN9IC8+KSxcclxuICAgIH0pO1xyXG5cclxuICBjb25zdCBpbml0aWFsUHJvcHMgPSBhd2FpdCBEb2N1bWVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmluaXRpYWxQcm9wcyxcclxuICAgIC8vIFN0eWxlcyBmcmFnbWVudCBpcyByZW5kZXJlZCBhZnRlciB0aGUgYXBwIGFuZCBwYWdlIHJlbmRlcmluZyBmaW5pc2guXHJcbiAgICBzdHlsZXM6IFsuLi5SZWFjdC5DaGlsZHJlbi50b0FycmF5KGluaXRpYWxQcm9wcy5zdHlsZXMpLCBzaGVldHMuZ2V0U3R5bGVFbGVtZW50KCldLFxyXG4gIH07XHJcbn07XHJcbiIsImltcG9ydCB7IGNyZWF0ZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgcmVkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzJztcclxuXHJcbi8vIENyZWF0ZSBhIHRoZW1lIGluc3RhbmNlLlxyXG5jb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcclxuICBwYWxldHRlOiB7XHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIG1haW46ICcjNTU2Y2Q2JyxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgbWFpbjogJyMxOTg1N2InLFxyXG4gICAgfSxcclxuICAgIGVycm9yOiB7XHJcbiAgICAgIG1haW46IHJlZC5BNDAwLFxyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgZGVmYXVsdDogJyNmZmYnLFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmh0bWxFc2NhcGVKc29uU3RyaW5nPWh0bWxFc2NhcGVKc29uU3RyaW5nOy8vIFRoaXMgdXRpbGl0eSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vemVydG9zaC9odG1sZXNjYXBlXG4vLyBMaWNlbnNlOiBodHRwczovL2dpdGh1Yi5jb20vemVydG9zaC9odG1sZXNjYXBlL2Jsb2IvMDUyN2NhNzE1NmE1MjRkMjU2MTAxYmIzMTBhOWY5NzBmNjMwNzhhZC9MSUNFTlNFXG5jb25zdCBFU0NBUEVfTE9PS1VQPXsnJic6J1xcXFx1MDAyNicsJz4nOidcXFxcdTAwM2UnLCc8JzonXFxcXHUwMDNjJywnXFx1MjAyOCc6J1xcXFx1MjAyOCcsJ1xcdTIwMjknOidcXFxcdTIwMjknfTtjb25zdCBFU0NBUEVfUkVHRVg9L1smPjxcXHUyMDI4XFx1MjAyOV0vZztmdW5jdGlvbiBodG1sRXNjYXBlSnNvblN0cmluZyhzdHIpe3JldHVybiBzdHIucmVwbGFjZShFU0NBUEVfUkVHRVgsbWF0Y2g9PkVTQ0FQRV9MT09LVVBbbWF0Y2hdKTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1odG1sZXNjYXBlLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19kb2N1bWVudCcpXG4iLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvc3lzdGVtXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvdXRpbHNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvY29uc3RhbnRzLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC1tYW5hZ2VyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvdXRpbHMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc2VydmVyXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9