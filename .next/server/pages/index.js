(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_app_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/app.module.css */ "./styles/app.module.css");
/* harmony import */ var _styles_app_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_app_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _pages_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/theme */ "./pages/theme.js");

var _jsxFileName = "C:\\Users\\1\\Desktop\\React\\refactor\\pages\\index.js";





const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.makeStyles)({
  customH1: {
    color: 'red'
  },
  borderGray: {
    border: '1px solid #C0C0C0'
  }
});

function Page({
  id,
  options,
  count,
  color,
  data,
  other
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MyWonderfulComponent, {
    id: id,
    options: options,
    count: count,
    color: color,
    data: data,
    other: other,
    children: "I'm text from a component"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

function MyWonderfulComponent({
  id,
  options,
  children,
  other,
  count
}) {
  const countNumber = count;
  const {
    0: summ,
    1: setSumm
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(countNumber);
  const classes = useStyles(); //отработает 1 раз после render`a

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (id && options && options.params && options.params.fields && options.params.fields.isDynamic) {
      setSumm(summ + 1);
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: classes.customH1,
      children: ["Hello World! + ", other]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
      container: true,
      spacing: 1,
      justifyContent: "center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        container: true,
        item: true,
        xs: 3,
        spacing: 3,
        className: classes.borderGray,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        container: true,
        item: true,
        xs: 3,
        spacing: 3,
        className: classes.borderGray,
        children: summ
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, this);
}

function Index({
  text
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_app_module_css__WEBPACK_IMPORTED_MODULE_5___default().App),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Page, {
      id: "1",
      options: {
        params: {
          fields: {
            isDynamic: true
          }
        }
      },
      count: 10,
      color: "4",
      data: "5",
      other: text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 5
  }, this);
} // сообщение прокинется при запуске сервера "npm run dev" или после обновления страницы


function getStaticProps(context) {
  context.text = 'Hello from SSR';
  const text = context.text;
  console.log(text);
  return {
    props: {
      text
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Index);

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

/***/ "./styles/app.module.css":
/*!*******************************!*\
  !*** ./styles/app.module.css ***!
  \*******************************/
/***/ (function(module) {

// Exports
module.exports = {
	"App": "app_App__21lMl",
	"App-logo": "app_App-logo__1vsp3",
	"App-logo-spin": "app_App-logo-spin__xbFgW",
	"App-header": "app_App-header__2RGIV",
	"App-link": "app_App-link__2Csgq"
};


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core");;

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWZhY3Rvci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9yZWZhY3Rvci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwid2VicGFjazovL3JlZmFjdG9yLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL3JlZmFjdG9yLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vcmVmYWN0b3IvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9hbWJlci5qcyIsIndlYnBhY2s6Ly9yZWZhY3Rvci8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vY29sb3JzL2JsdWUuanMiLCJ3ZWJwYWNrOi8vcmVmYWN0b3IvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9ibHVlR3JleS5qcyIsIndlYnBhY2s6Ly9yZWZhY3Rvci8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vY29sb3JzL2Jyb3duLmpzIiwid2VicGFjazovL3JlZmFjdG9yLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9jb2xvcnMvY29tbW9uLmpzIiwid2VicGFjazovL3JlZmFjdG9yLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9jb2xvcnMvY3lhbi5qcyIsIndlYnBhY2s6Ly9yZWZhY3Rvci8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vY29sb3JzL2RlZXBPcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vcmVmYWN0b3IvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9kZWVwUHVycGxlLmpzIiwid2VicGFjazovL3JlZmFjdG9yLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9jb2xvcnMvZ3JlZW4uanMiLCJ3ZWJwYWNrOi8vcmVmYWN0b3IvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9ncmV5LmpzIiwid2VicGFjazovL3JlZmFjdG9yLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9jb2xvcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVmYWN0b3IvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9pbmRpZ28uanMiLCJ3ZWJwYWNrOi8vcmVmYWN0b3IvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9saWdodEJsdWUuanMiLCJ3ZWJwYWNrOi8vcmVmYWN0b3IvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9saWdodEdyZWVuLmpzIiwid2VicGFjazovL3JlZmFjdG9yLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9jb2xvcnMvbGltZS5qcyIsIndlYnBhY2s6Ly9yZWZhY3Rvci8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vY29sb3JzL29yYW5nZS5qcyIsIndlYnBhY2s6Ly9yZWZhY3Rvci8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vY29sb3JzL3BpbmsuanMiLCJ3ZWJwYWNrOi8vcmVmYWN0b3IvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9wdXJwbGUuanMiLCJ3ZWJwYWNrOi8vcmVmYWN0b3IvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9yZWQuanMiLCJ3ZWJwYWNrOi8vcmVmYWN0b3IvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy90ZWFsLmpzIiwid2VicGFjazovL3JlZmFjdG9yLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9jb2xvcnMveWVsbG93LmpzIiwid2VicGFjazovL3JlZmFjdG9yLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvY29sb3JNYW5pcHVsYXRvci5qcyIsIndlYnBhY2s6Ly9yZWZhY3Rvci8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZUJyZWFrcG9pbnRzLmpzIiwid2VicGFjazovL3JlZmFjdG9yLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvY3JlYXRlTWl4aW5zLmpzIiwid2VicGFjazovL3JlZmFjdG9yLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvY3JlYXRlTXVpU3RyaWN0TW9kZVRoZW1lLmpzIiwid2VicGFjazovL3JlZmFjdG9yLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvY3JlYXRlUGFsZXR0ZS5qcyIsIndlYnBhY2s6Ly9yZWZhY3Rvci8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZVNwYWNpbmcuanMiLCJ3ZWJwYWNrOi8vcmVmYWN0b3IvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9jcmVhdGVTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vcmVmYWN0b3IvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9jcmVhdGVUaGVtZS5qcyIsIndlYnBhY2s6Ly9yZWZhY3Rvci8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZVR5cG9ncmFwaHkuanMiLCJ3ZWJwYWNrOi8vcmVmYWN0b3IvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9jc3NVdGlscy5qcyIsIndlYnBhY2s6Ly9yZWZhY3Rvci8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2RlZmF1bHRUaGVtZS5qcyIsIndlYnBhY2s6Ly9yZWZhY3Rvci8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2luZGV4LmpzIiwid2VicGFjazovL3JlZmFjdG9yLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvbWFrZVN0eWxlcy5qcyIsIndlYnBhY2s6Ly9yZWZhY3Rvci8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3Jlc3BvbnNpdmVGb250U2l6ZXMuanMiLCJ3ZWJwYWNrOi8vcmVmYWN0b3IvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9zaGFkb3dzLmpzIiwid2VicGFjazovL3JlZmFjdG9yLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvc2hhcGUuanMiLCJ3ZWJwYWNrOi8vcmVmYWN0b3IvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9zdHlsZWQuanMiLCJ3ZWJwYWNrOi8vcmVmYWN0b3IvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy90cmFuc2l0aW9ucy5qcyIsIndlYnBhY2s6Ly9yZWZhY3Rvci8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3VzZVRoZW1lLmpzIiwid2VicGFjazovL3JlZmFjdG9yLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvd2l0aFN0eWxlcy5qcyIsIndlYnBhY2s6Ly9yZWZhY3Rvci8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3dpdGhUaGVtZS5qcyIsIndlYnBhY2s6Ly9yZWZhY3Rvci8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3pJbmRleC5qcyIsIndlYnBhY2s6Ly9yZWZhY3Rvci8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3JlZmFjdG9yLy4vcGFnZXMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vcmVmYWN0b3IvLi9zdHlsZXMvYXBwLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVmYWN0b3IvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovL3JlZmFjdG9yL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiIiwid2VicGFjazovL3JlZmFjdG9yL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL3N5c3RlbVwiIiwid2VicGFjazovL3JlZmFjdG9yL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL3V0aWxzXCIiLCJ3ZWJwYWNrOi8vcmVmYWN0b3IvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3JlZmFjdG9yL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImN1c3RvbUgxIiwiY29sb3IiLCJib3JkZXJHcmF5IiwiYm9yZGVyIiwiUGFnZSIsImlkIiwib3B0aW9ucyIsImNvdW50IiwiZGF0YSIsIm90aGVyIiwiTXlXb25kZXJmdWxDb21wb25lbnQiLCJjaGlsZHJlbiIsImNvdW50TnVtYmVyIiwic3VtbSIsInNldFN1bW0iLCJ1c2VTdGF0ZSIsImNsYXNzZXMiLCJ1c2VFZmZlY3QiLCJwYXJhbXMiLCJmaWVsZHMiLCJpc0R5bmFtaWMiLCJJbmRleCIsInRleHQiLCJzdHlsZXMiLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJ0aGVtZSIsImNyZWF0ZVRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwic2Vjb25kYXJ5IiwiZXJyb3IiLCJyZWQiLCJBNDAwIiwiYmFja2dyb3VuZCIsImRlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNiZTtBQUNmO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQjZFO0FBQzlEO0FBQ2Y7QUFDQSxlQUFlLHlFQUE0QjtBQUMzQzs7QUFFQTtBQUNBOztBQUVBLGVBQWUsNkJBQTZCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ2xCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsdUJBQXVCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBZSxLQUFLLEU7Ozs7Ozs7Ozs7OztBQ2hCcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBZSxJQUFJLEU7Ozs7Ozs7Ozs7OztBQ2hCbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBZSxRQUFRLEU7Ozs7Ozs7Ozs7OztBQ2hCdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBZSxLQUFLLEU7Ozs7Ozs7Ozs7OztBQ2hCcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBZSxNQUFNLEU7Ozs7Ozs7Ozs7OztBQ0pyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUFlLElBQUksRTs7Ozs7Ozs7Ozs7O0FDaEJuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUFlLFVBQVUsRTs7Ozs7Ozs7Ozs7O0FDaEJ6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUFlLFVBQVUsRTs7Ozs7Ozs7Ozs7O0FDaEJ6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUFlLEtBQUssRTs7Ozs7Ozs7Ozs7O0FDaEJwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUFlLElBQUksRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEIwQjtBQUNOO0FBQ0U7QUFDSTtBQUNRO0FBQ1I7QUFDSjtBQUNVO0FBQ1Y7QUFDQTtBQUNFO0FBQ1U7QUFDWjtBQUNJO0FBQ0Y7QUFDRTtBQUNRO0FBQ1Y7QUFDRjs7Ozs7Ozs7Ozs7OztBQ2xCekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBZSxNQUFNLEU7Ozs7Ozs7Ozs7OztBQ2hCckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBZSxTQUFTLEU7Ozs7Ozs7Ozs7OztBQ2hCeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBZSxVQUFVLEU7Ozs7Ozs7Ozs7OztBQ2hCekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBZSxJQUFJLEU7Ozs7Ozs7Ozs7OztBQ2hCbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBZSxNQUFNLEU7Ozs7Ozs7Ozs7OztBQ2hCckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBZSxJQUFJLEU7Ozs7Ozs7Ozs7OztBQ2hCbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBZSxNQUFNLEU7Ozs7Ozs7Ozs7OztBQ2hCckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBZSxHQUFHLEU7Ozs7Ozs7Ozs7OztBQ2hCbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBZSxJQUFJLEU7Ozs7Ozs7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QUFLLEVBQUU7QUFDTEYsVUFBSSxFQUFFRyw4REFBUUM7QUFEVCxLQVBBO0FBVVBDLGNBQVUsRUFBRTtBQUNWQyxhQUFPLEVBQUU7QUFEQztBQVZMO0FBRGUsQ0FBRCxDQUF6QjtBQWlCQSwrREFBZVYsS0FBZixFOzs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1BBLCtDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn0iLCJpbXBvcnQgb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiLi9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwidmFyIGFtYmVyID0ge1xuICA1MDogJyNmZmY4ZTEnLFxuICAxMDA6ICcjZmZlY2IzJyxcbiAgMjAwOiAnI2ZmZTA4MicsXG4gIDMwMDogJyNmZmQ1NGYnLFxuICA0MDA6ICcjZmZjYTI4JyxcbiAgNTAwOiAnI2ZmYzEwNycsXG4gIDYwMDogJyNmZmIzMDAnLFxuICA3MDA6ICcjZmZhMDAwJyxcbiAgODAwOiAnI2ZmOGYwMCcsXG4gIDkwMDogJyNmZjZmMDAnLFxuICBBMTAwOiAnI2ZmZTU3ZicsXG4gIEEyMDA6ICcjZmZkNzQwJyxcbiAgQTQwMDogJyNmZmM0MDAnLFxuICBBNzAwOiAnI2ZmYWIwMCdcbn07XG5leHBvcnQgZGVmYXVsdCBhbWJlcjsiLCJ2YXIgYmx1ZSA9IHtcbiAgNTA6ICcjZTNmMmZkJyxcbiAgMTAwOiAnI2JiZGVmYicsXG4gIDIwMDogJyM5MGNhZjknLFxuICAzMDA6ICcjNjRiNWY2JyxcbiAgNDAwOiAnIzQyYTVmNScsXG4gIDUwMDogJyMyMTk2ZjMnLFxuICA2MDA6ICcjMWU4OGU1JyxcbiAgNzAwOiAnIzE5NzZkMicsXG4gIDgwMDogJyMxNTY1YzAnLFxuICA5MDA6ICcjMGQ0N2ExJyxcbiAgQTEwMDogJyM4MmIxZmYnLFxuICBBMjAwOiAnIzQ0OGFmZicsXG4gIEE0MDA6ICcjMjk3OWZmJyxcbiAgQTcwMDogJyMyOTYyZmYnXG59O1xuZXhwb3J0IGRlZmF1bHQgYmx1ZTsiLCJ2YXIgYmx1ZUdyZXkgPSB7XG4gIDUwOiAnI2VjZWZmMScsXG4gIDEwMDogJyNjZmQ4ZGMnLFxuICAyMDA6ICcjYjBiZWM1JyxcbiAgMzAwOiAnIzkwYTRhZScsXG4gIDQwMDogJyM3ODkwOWMnLFxuICA1MDA6ICcjNjA3ZDhiJyxcbiAgNjAwOiAnIzU0NmU3YScsXG4gIDcwMDogJyM0NTVhNjQnLFxuICA4MDA6ICcjMzc0NzRmJyxcbiAgOTAwOiAnIzI2MzIzOCcsXG4gIEExMDA6ICcjY2ZkOGRjJyxcbiAgQTIwMDogJyNiMGJlYzUnLFxuICBBNDAwOiAnIzc4OTA5YycsXG4gIEE3MDA6ICcjNDU1YTY0J1xufTtcbmV4cG9ydCBkZWZhdWx0IGJsdWVHcmV5OyIsInZhciBicm93biA9IHtcbiAgNTA6ICcjZWZlYmU5JyxcbiAgMTAwOiAnI2Q3Y2NjOCcsXG4gIDIwMDogJyNiY2FhYTQnLFxuICAzMDA6ICcjYTE4ODdmJyxcbiAgNDAwOiAnIzhkNmU2MycsXG4gIDUwMDogJyM3OTU1NDgnLFxuICA2MDA6ICcjNmQ0YzQxJyxcbiAgNzAwOiAnIzVkNDAzNycsXG4gIDgwMDogJyM0ZTM0MmUnLFxuICA5MDA6ICcjM2UyNzIzJyxcbiAgQTEwMDogJyNkN2NjYzgnLFxuICBBMjAwOiAnI2JjYWFhNCcsXG4gIEE0MDA6ICcjOGQ2ZTYzJyxcbiAgQTcwMDogJyM1ZDQwMzcnXG59O1xuZXhwb3J0IGRlZmF1bHQgYnJvd247IiwidmFyIGNvbW1vbiA9IHtcbiAgYmxhY2s6ICcjMDAwJyxcbiAgd2hpdGU6ICcjZmZmJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGNvbW1vbjsiLCJ2YXIgY3lhbiA9IHtcbiAgNTA6ICcjZTBmN2ZhJyxcbiAgMTAwOiAnI2IyZWJmMicsXG4gIDIwMDogJyM4MGRlZWEnLFxuICAzMDA6ICcjNGRkMGUxJyxcbiAgNDAwOiAnIzI2YzZkYScsXG4gIDUwMDogJyMwMGJjZDQnLFxuICA2MDA6ICcjMDBhY2MxJyxcbiAgNzAwOiAnIzAwOTdhNycsXG4gIDgwMDogJyMwMDgzOGYnLFxuICA5MDA6ICcjMDA2MDY0JyxcbiAgQTEwMDogJyM4NGZmZmYnLFxuICBBMjAwOiAnIzE4ZmZmZicsXG4gIEE0MDA6ICcjMDBlNWZmJyxcbiAgQTcwMDogJyMwMGI4ZDQnXG59O1xuZXhwb3J0IGRlZmF1bHQgY3lhbjsiLCJ2YXIgZGVlcE9yYW5nZSA9IHtcbiAgNTA6ICcjZmJlOWU3JyxcbiAgMTAwOiAnI2ZmY2NiYycsXG4gIDIwMDogJyNmZmFiOTEnLFxuICAzMDA6ICcjZmY4YTY1JyxcbiAgNDAwOiAnI2ZmNzA0MycsXG4gIDUwMDogJyNmZjU3MjInLFxuICA2MDA6ICcjZjQ1MTFlJyxcbiAgNzAwOiAnI2U2NGExOScsXG4gIDgwMDogJyNkODQzMTUnLFxuICA5MDA6ICcjYmYzNjBjJyxcbiAgQTEwMDogJyNmZjllODAnLFxuICBBMjAwOiAnI2ZmNmU0MCcsXG4gIEE0MDA6ICcjZmYzZDAwJyxcbiAgQTcwMDogJyNkZDJjMDAnXG59O1xuZXhwb3J0IGRlZmF1bHQgZGVlcE9yYW5nZTsiLCJ2YXIgZGVlcFB1cnBsZSA9IHtcbiAgNTA6ICcjZWRlN2Y2JyxcbiAgMTAwOiAnI2QxYzRlOScsXG4gIDIwMDogJyNiMzlkZGInLFxuICAzMDA6ICcjOTU3NWNkJyxcbiAgNDAwOiAnIzdlNTdjMicsXG4gIDUwMDogJyM2NzNhYjcnLFxuICA2MDA6ICcjNWUzNWIxJyxcbiAgNzAwOiAnIzUxMmRhOCcsXG4gIDgwMDogJyM0NTI3YTAnLFxuICA5MDA6ICcjMzExYjkyJyxcbiAgQTEwMDogJyNiMzg4ZmYnLFxuICBBMjAwOiAnIzdjNGRmZicsXG4gIEE0MDA6ICcjNjUxZmZmJyxcbiAgQTcwMDogJyM2MjAwZWEnXG59O1xuZXhwb3J0IGRlZmF1bHQgZGVlcFB1cnBsZTsiLCJ2YXIgZ3JlZW4gPSB7XG4gIDUwOiAnI2U4ZjVlOScsXG4gIDEwMDogJyNjOGU2YzknLFxuICAyMDA6ICcjYTVkNmE3JyxcbiAgMzAwOiAnIzgxYzc4NCcsXG4gIDQwMDogJyM2NmJiNmEnLFxuICA1MDA6ICcjNGNhZjUwJyxcbiAgNjAwOiAnIzQzYTA0NycsXG4gIDcwMDogJyMzODhlM2MnLFxuICA4MDA6ICcjMmU3ZDMyJyxcbiAgOTAwOiAnIzFiNWUyMCcsXG4gIEExMDA6ICcjYjlmNmNhJyxcbiAgQTIwMDogJyM2OWYwYWUnLFxuICBBNDAwOiAnIzAwZTY3NicsXG4gIEE3MDA6ICcjMDBjODUzJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGdyZWVuOyIsInZhciBncmV5ID0ge1xuICA1MDogJyNmYWZhZmEnLFxuICAxMDA6ICcjZjVmNWY1JyxcbiAgMjAwOiAnI2VlZWVlZScsXG4gIDMwMDogJyNlMGUwZTAnLFxuICA0MDA6ICcjYmRiZGJkJyxcbiAgNTAwOiAnIzllOWU5ZScsXG4gIDYwMDogJyM3NTc1NzUnLFxuICA3MDA6ICcjNjE2MTYxJyxcbiAgODAwOiAnIzQyNDI0MicsXG4gIDkwMDogJyMyMTIxMjEnLFxuICBBMTAwOiAnI2Q1ZDVkNScsXG4gIEEyMDA6ICcjYWFhYWFhJyxcbiAgQTQwMDogJyMzMDMwMzAnLFxuICBBNzAwOiAnIzYxNjE2MSdcbn07XG5leHBvcnQgZGVmYXVsdCBncmV5OyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgY29tbW9uIH0gZnJvbSAnLi9jb21tb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyByZWQgfSBmcm9tICcuL3JlZCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHBpbmsgfSBmcm9tICcuL3BpbmsnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwdXJwbGUgfSBmcm9tICcuL3B1cnBsZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGRlZXBQdXJwbGUgfSBmcm9tICcuL2RlZXBQdXJwbGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpbmRpZ28gfSBmcm9tICcuL2luZGlnbyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGJsdWUgfSBmcm9tICcuL2JsdWUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBsaWdodEJsdWUgfSBmcm9tICcuL2xpZ2h0Qmx1ZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGN5YW4gfSBmcm9tICcuL2N5YW4nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0ZWFsIH0gZnJvbSAnLi90ZWFsJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ3JlZW4gfSBmcm9tICcuL2dyZWVuJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbGlnaHRHcmVlbiB9IGZyb20gJy4vbGlnaHRHcmVlbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGxpbWUgfSBmcm9tICcuL2xpbWUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB5ZWxsb3cgfSBmcm9tICcuL3llbGxvdyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFtYmVyIH0gZnJvbSAnLi9hbWJlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG9yYW5nZSB9IGZyb20gJy4vb3JhbmdlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZGVlcE9yYW5nZSB9IGZyb20gJy4vZGVlcE9yYW5nZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGJyb3duIH0gZnJvbSAnLi9icm93bic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGdyZXkgfSBmcm9tICcuL2dyZXknO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBibHVlR3JleSB9IGZyb20gJy4vYmx1ZUdyZXknOyIsInZhciBpbmRpZ28gPSB7XG4gIDUwOiAnI2U4ZWFmNicsXG4gIDEwMDogJyNjNWNhZTknLFxuICAyMDA6ICcjOWZhOGRhJyxcbiAgMzAwOiAnIzc5ODZjYicsXG4gIDQwMDogJyM1YzZiYzAnLFxuICA1MDA6ICcjM2Y1MWI1JyxcbiAgNjAwOiAnIzM5NDlhYicsXG4gIDcwMDogJyMzMDNmOWYnLFxuICA4MDA6ICcjMjgzNTkzJyxcbiAgOTAwOiAnIzFhMjM3ZScsXG4gIEExMDA6ICcjOGM5ZWZmJyxcbiAgQTIwMDogJyM1MzZkZmUnLFxuICBBNDAwOiAnIzNkNWFmZScsXG4gIEE3MDA6ICcjMzA0ZmZlJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGluZGlnbzsiLCJ2YXIgbGlnaHRCbHVlID0ge1xuICA1MDogJyNlMWY1ZmUnLFxuICAxMDA6ICcjYjNlNWZjJyxcbiAgMjAwOiAnIzgxZDRmYScsXG4gIDMwMDogJyM0ZmMzZjcnLFxuICA0MDA6ICcjMjliNmY2JyxcbiAgNTAwOiAnIzAzYTlmNCcsXG4gIDYwMDogJyMwMzliZTUnLFxuICA3MDA6ICcjMDI4OGQxJyxcbiAgODAwOiAnIzAyNzdiZCcsXG4gIDkwMDogJyMwMTU3OWInLFxuICBBMTAwOiAnIzgwZDhmZicsXG4gIEEyMDA6ICcjNDBjNGZmJyxcbiAgQTQwMDogJyMwMGIwZmYnLFxuICBBNzAwOiAnIzAwOTFlYSdcbn07XG5leHBvcnQgZGVmYXVsdCBsaWdodEJsdWU7IiwidmFyIGxpZ2h0R3JlZW4gPSB7XG4gIDUwOiAnI2YxZjhlOScsXG4gIDEwMDogJyNkY2VkYzgnLFxuICAyMDA6ICcjYzVlMWE1JyxcbiAgMzAwOiAnI2FlZDU4MScsXG4gIDQwMDogJyM5Y2NjNjUnLFxuICA1MDA6ICcjOGJjMzRhJyxcbiAgNjAwOiAnIzdjYjM0MicsXG4gIDcwMDogJyM2ODlmMzgnLFxuICA4MDA6ICcjNTU4YjJmJyxcbiAgOTAwOiAnIzMzNjkxZScsXG4gIEExMDA6ICcjY2NmZjkwJyxcbiAgQTIwMDogJyNiMmZmNTknLFxuICBBNDAwOiAnIzc2ZmYwMycsXG4gIEE3MDA6ICcjNjRkZDE3J1xufTtcbmV4cG9ydCBkZWZhdWx0IGxpZ2h0R3JlZW47IiwidmFyIGxpbWUgPSB7XG4gIDUwOiAnI2Y5ZmJlNycsXG4gIDEwMDogJyNmMGY0YzMnLFxuICAyMDA6ICcjZTZlZTljJyxcbiAgMzAwOiAnI2RjZTc3NScsXG4gIDQwMDogJyNkNGUxNTcnLFxuICA1MDA6ICcjY2RkYzM5JyxcbiAgNjAwOiAnI2MwY2EzMycsXG4gIDcwMDogJyNhZmI0MmInLFxuICA4MDA6ICcjOWU5ZDI0JyxcbiAgOTAwOiAnIzgyNzcxNycsXG4gIEExMDA6ICcjZjRmZjgxJyxcbiAgQTIwMDogJyNlZWZmNDEnLFxuICBBNDAwOiAnI2M2ZmYwMCcsXG4gIEE3MDA6ICcjYWVlYTAwJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGxpbWU7IiwidmFyIG9yYW5nZSA9IHtcbiAgNTA6ICcjZmZmM2UwJyxcbiAgMTAwOiAnI2ZmZTBiMicsXG4gIDIwMDogJyNmZmNjODAnLFxuICAzMDA6ICcjZmZiNzRkJyxcbiAgNDAwOiAnI2ZmYTcyNicsXG4gIDUwMDogJyNmZjk4MDAnLFxuICA2MDA6ICcjZmI4YzAwJyxcbiAgNzAwOiAnI2Y1N2MwMCcsXG4gIDgwMDogJyNlZjZjMDAnLFxuICA5MDA6ICcjZTY1MTAwJyxcbiAgQTEwMDogJyNmZmQxODAnLFxuICBBMjAwOiAnI2ZmYWI0MCcsXG4gIEE0MDA6ICcjZmY5MTAwJyxcbiAgQTcwMDogJyNmZjZkMDAnXG59O1xuZXhwb3J0IGRlZmF1bHQgb3JhbmdlOyIsInZhciBwaW5rID0ge1xuICA1MDogJyNmY2U0ZWMnLFxuICAxMDA6ICcjZjhiYmQwJyxcbiAgMjAwOiAnI2Y0OGZiMScsXG4gIDMwMDogJyNmMDYyOTInLFxuICA0MDA6ICcjZWM0MDdhJyxcbiAgNTAwOiAnI2U5MWU2MycsXG4gIDYwMDogJyNkODFiNjAnLFxuICA3MDA6ICcjYzIxODViJyxcbiAgODAwOiAnI2FkMTQ1NycsXG4gIDkwMDogJyM4ODBlNGYnLFxuICBBMTAwOiAnI2ZmODBhYicsXG4gIEEyMDA6ICcjZmY0MDgxJyxcbiAgQTQwMDogJyNmNTAwNTcnLFxuICBBNzAwOiAnI2M1MTE2Midcbn07XG5leHBvcnQgZGVmYXVsdCBwaW5rOyIsInZhciBwdXJwbGUgPSB7XG4gIDUwOiAnI2YzZTVmNScsXG4gIDEwMDogJyNlMWJlZTcnLFxuICAyMDA6ICcjY2U5M2Q4JyxcbiAgMzAwOiAnI2JhNjhjOCcsXG4gIDQwMDogJyNhYjQ3YmMnLFxuICA1MDA6ICcjOWMyN2IwJyxcbiAgNjAwOiAnIzhlMjRhYScsXG4gIDcwMDogJyM3YjFmYTInLFxuICA4MDA6ICcjNmExYjlhJyxcbiAgOTAwOiAnIzRhMTQ4YycsXG4gIEExMDA6ICcjZWE4MGZjJyxcbiAgQTIwMDogJyNlMDQwZmInLFxuICBBNDAwOiAnI2Q1MDBmOScsXG4gIEE3MDA6ICcjYWEwMGZmJ1xufTtcbmV4cG9ydCBkZWZhdWx0IHB1cnBsZTsiLCJ2YXIgcmVkID0ge1xuICA1MDogJyNmZmViZWUnLFxuICAxMDA6ICcjZmZjZGQyJyxcbiAgMjAwOiAnI2VmOWE5YScsXG4gIDMwMDogJyNlNTczNzMnLFxuICA0MDA6ICcjZWY1MzUwJyxcbiAgNTAwOiAnI2Y0NDMzNicsXG4gIDYwMDogJyNlNTM5MzUnLFxuICA3MDA6ICcjZDMyZjJmJyxcbiAgODAwOiAnI2M2MjgyOCcsXG4gIDkwMDogJyNiNzFjMWMnLFxuICBBMTAwOiAnI2ZmOGE4MCcsXG4gIEEyMDA6ICcjZmY1MjUyJyxcbiAgQTQwMDogJyNmZjE3NDQnLFxuICBBNzAwOiAnI2Q1MDAwMCdcbn07XG5leHBvcnQgZGVmYXVsdCByZWQ7IiwidmFyIHRlYWwgPSB7XG4gIDUwOiAnI2UwZjJmMScsXG4gIDEwMDogJyNiMmRmZGInLFxuICAyMDA6ICcjODBjYmM0JyxcbiAgMzAwOiAnIzRkYjZhYycsXG4gIDQwMDogJyMyNmE2OWEnLFxuICA1MDA6ICcjMDA5Njg4JyxcbiAgNjAwOiAnIzAwODk3YicsXG4gIDcwMDogJyMwMDc5NmInLFxuICA4MDA6ICcjMDA2OTVjJyxcbiAgOTAwOiAnIzAwNGQ0MCcsXG4gIEExMDA6ICcjYTdmZmViJyxcbiAgQTIwMDogJyM2NGZmZGEnLFxuICBBNDAwOiAnIzFkZTliNicsXG4gIEE3MDA6ICcjMDBiZmE1J1xufTtcbmV4cG9ydCBkZWZhdWx0IHRlYWw7IiwidmFyIHllbGxvdyA9IHtcbiAgNTA6ICcjZmZmZGU3JyxcbiAgMTAwOiAnI2ZmZjljNCcsXG4gIDIwMDogJyNmZmY1OWQnLFxuICAzMDA6ICcjZmZmMTc2JyxcbiAgNDAwOiAnI2ZmZWU1OCcsXG4gIDUwMDogJyNmZmViM2InLFxuICA2MDA6ICcjZmRkODM1JyxcbiAgNzAwOiAnI2ZiYzAyZCcsXG4gIDgwMDogJyNmOWE4MjUnLFxuICA5MDA6ICcjZjU3ZjE3JyxcbiAgQTEwMDogJyNmZmZmOGQnLFxuICBBMjAwOiAnI2ZmZmYwMCcsXG4gIEE0MDA6ICcjZmZlYTAwJyxcbiAgQTcwMDogJyNmZmQ2MDAnXG59O1xuZXhwb3J0IGRlZmF1bHQgeWVsbG93OyIsImltcG9ydCB7IGZvcm1hdE11aUVycm9yTWVzc2FnZSBhcyBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS91dGlsc1wiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuXG4vKipcclxuICogUmV0dXJucyBhIG51bWJlciB3aG9zZSB2YWx1ZSBpcyBsaW1pdGVkIHRvIHRoZSBnaXZlbiByYW5nZS5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFRoZSB2YWx1ZSB0byBiZSBjbGFtcGVkXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gVGhlIGxvd2VyIGJvdW5kYXJ5IG9mIHRoZSBvdXRwdXQgcmFuZ2VcclxuICogQHBhcmFtIHtudW1iZXJ9IG1heCBUaGUgdXBwZXIgYm91bmRhcnkgb2YgdGhlIG91dHB1dCByYW5nZVxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBBIG51bWJlciBpbiB0aGUgcmFuZ2UgW21pbiwgbWF4XVxyXG4gKi9cbmZ1bmN0aW9uIGNsYW1wKHZhbHVlKSB7XG4gIHZhciBtaW4gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gIHZhciBtYXggPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDE7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAodmFsdWUgPCBtaW4gfHwgdmFsdWUgPiBtYXgpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJNYXRlcmlhbC1VSTogVGhlIHZhbHVlIHByb3ZpZGVkIFwiLmNvbmNhdCh2YWx1ZSwgXCIgaXMgb3V0IG9mIHJhbmdlIFtcIikuY29uY2F0KG1pbiwgXCIsIFwiKS5jb25jYXQobWF4LCBcIl0uXCIpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobWluLCB2YWx1ZSksIG1heCk7XG59XG4vKipcclxuICogQ29udmVydHMgYSBjb2xvciBmcm9tIENTUyBoZXggZm9ybWF0IHRvIENTUyByZ2IgZm9ybWF0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBIZXggY29sb3IsIGkuZS4gI25ubiBvciAjbm5ubm5uXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIHJnYiBjb2xvciBzdHJpbmdcclxuICovXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGhleFRvUmdiKGNvbG9yKSB7XG4gIGNvbG9yID0gY29sb3Iuc3Vic3RyKDEpO1xuICB2YXIgcmUgPSBuZXcgUmVnRXhwKFwiLnsxLFwiLmNvbmNhdChjb2xvci5sZW5ndGggPj0gNiA/IDIgOiAxLCBcIn1cIiksICdnJyk7XG4gIHZhciBjb2xvcnMgPSBjb2xvci5tYXRjaChyZSk7XG5cbiAgaWYgKGNvbG9ycyAmJiBjb2xvcnNbMF0ubGVuZ3RoID09PSAxKSB7XG4gICAgY29sb3JzID0gY29sb3JzLm1hcChmdW5jdGlvbiAobikge1xuICAgICAgcmV0dXJuIG4gKyBuO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGNvbG9ycyA/IFwicmdiXCIuY29uY2F0KGNvbG9ycy5sZW5ndGggPT09IDQgPyAnYScgOiAnJywgXCIoXCIpLmNvbmNhdChjb2xvcnMubWFwKGZ1bmN0aW9uIChuLCBpbmRleCkge1xuICAgIHJldHVybiBpbmRleCA8IDMgPyBwYXJzZUludChuLCAxNikgOiBNYXRoLnJvdW5kKHBhcnNlSW50KG4sIDE2KSAvIDI1NSAqIDEwMDApIC8gMTAwMDtcbiAgfSkuam9pbignLCAnKSwgXCIpXCIpIDogJyc7XG59XG5cbmZ1bmN0aW9uIGludFRvSGV4KGludCkge1xuICB2YXIgaGV4ID0gaW50LnRvU3RyaW5nKDE2KTtcbiAgcmV0dXJuIGhleC5sZW5ndGggPT09IDEgPyBcIjBcIi5jb25jYXQoaGV4KSA6IGhleDtcbn1cbi8qKlxyXG4gKiBDb252ZXJ0cyBhIGNvbG9yIGZyb20gQ1NTIHJnYiBmb3JtYXQgdG8gQ1NTIGhleCBmb3JtYXQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIFJHQiBjb2xvciwgaS5lLiByZ2IobiwgbiwgbilcclxuICogQHJldHVybnMge3N0cmluZ30gQSBDU1MgcmdiIGNvbG9yIHN0cmluZywgaS5lLiAjbm5ubm5uXHJcbiAqL1xuXG5cbmV4cG9ydCBmdW5jdGlvbiByZ2JUb0hleChjb2xvcikge1xuICAvLyBJZGVtcG90ZW50XG4gIGlmIChjb2xvci5pbmRleE9mKCcjJykgPT09IDApIHtcbiAgICByZXR1cm4gY29sb3I7XG4gIH1cblxuICB2YXIgX2RlY29tcG9zZUNvbG9yID0gZGVjb21wb3NlQ29sb3IoY29sb3IpLFxuICAgICAgdmFsdWVzID0gX2RlY29tcG9zZUNvbG9yLnZhbHVlcztcblxuICByZXR1cm4gXCIjXCIuY29uY2F0KHZhbHVlcy5tYXAoZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gaW50VG9IZXgobik7XG4gIH0pLmpvaW4oJycpKTtcbn1cbi8qKlxyXG4gKiBDb252ZXJ0cyBhIGNvbG9yIGZyb20gaHNsIGZvcm1hdCB0byByZ2IgZm9ybWF0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBIU0wgY29sb3IgdmFsdWVzXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IHJnYiBjb2xvciB2YWx1ZXNcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBoc2xUb1JnYihjb2xvcikge1xuICBjb2xvciA9IGRlY29tcG9zZUNvbG9yKGNvbG9yKTtcbiAgdmFyIF9jb2xvciA9IGNvbG9yLFxuICAgICAgdmFsdWVzID0gX2NvbG9yLnZhbHVlcztcbiAgdmFyIGggPSB2YWx1ZXNbMF07XG4gIHZhciBzID0gdmFsdWVzWzFdIC8gMTAwO1xuICB2YXIgbCA9IHZhbHVlc1syXSAvIDEwMDtcbiAgdmFyIGEgPSBzICogTWF0aC5taW4obCwgMSAtIGwpO1xuXG4gIHZhciBmID0gZnVuY3Rpb24gZihuKSB7XG4gICAgdmFyIGsgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IChuICsgaCAvIDMwKSAlIDEyO1xuICAgIHJldHVybiBsIC0gYSAqIE1hdGgubWF4KE1hdGgubWluKGsgLSAzLCA5IC0gaywgMSksIC0xKTtcbiAgfTtcblxuICB2YXIgdHlwZSA9ICdyZ2InO1xuICB2YXIgcmdiID0gW01hdGgucm91bmQoZigwKSAqIDI1NSksIE1hdGgucm91bmQoZig4KSAqIDI1NSksIE1hdGgucm91bmQoZig0KSAqIDI1NSldO1xuXG4gIGlmIChjb2xvci50eXBlID09PSAnaHNsYScpIHtcbiAgICB0eXBlICs9ICdhJztcbiAgICByZ2IucHVzaCh2YWx1ZXNbM10pO1xuICB9XG5cbiAgcmV0dXJuIHJlY29tcG9zZUNvbG9yKHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIHZhbHVlczogcmdiXG4gIH0pO1xufVxuLyoqXHJcbiAqIFJldHVybnMgYW4gb2JqZWN0IHdpdGggdGhlIHR5cGUgYW5kIHZhbHVlcyBvZiBhIGNvbG9yLlxyXG4gKlxyXG4gKiBOb3RlOiBEb2VzIG5vdCBzdXBwb3J0IHJnYiAlIHZhbHVlcy5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxyXG4gKiBAcmV0dXJucyB7b2JqZWN0fSAtIEEgTVVJIGNvbG9yIG9iamVjdDoge3R5cGU6IHN0cmluZywgdmFsdWVzOiBudW1iZXJbXX1cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNvbXBvc2VDb2xvcihjb2xvcikge1xuICAvLyBJZGVtcG90ZW50XG4gIGlmIChjb2xvci50eXBlKSB7XG4gICAgcmV0dXJuIGNvbG9yO1xuICB9XG5cbiAgaWYgKGNvbG9yLmNoYXJBdCgwKSA9PT0gJyMnKSB7XG4gICAgcmV0dXJuIGRlY29tcG9zZUNvbG9yKGhleFRvUmdiKGNvbG9yKSk7XG4gIH1cblxuICB2YXIgbWFya2VyID0gY29sb3IuaW5kZXhPZignKCcpO1xuICB2YXIgdHlwZSA9IGNvbG9yLnN1YnN0cmluZygwLCBtYXJrZXIpO1xuXG4gIGlmIChbJ3JnYicsICdyZ2JhJywgJ2hzbCcsICdoc2xhJ10uaW5kZXhPZih0eXBlKSA9PT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJNYXRlcmlhbC1VSTogVW5zdXBwb3J0ZWQgYFwiLmNvbmNhdChjb2xvciwgXCJgIGNvbG9yLlxcbldlIHN1cHBvcnQgdGhlIGZvbGxvd2luZyBmb3JtYXRzOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpLlwiKSA6IF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UoMywgY29sb3IpKTtcbiAgfVxuXG4gIHZhciB2YWx1ZXMgPSBjb2xvci5zdWJzdHJpbmcobWFya2VyICsgMSwgY29sb3IubGVuZ3RoIC0gMSkuc3BsaXQoJywnKTtcbiAgdmFsdWVzID0gdmFsdWVzLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGUsXG4gICAgdmFsdWVzOiB2YWx1ZXNcbiAgfTtcbn1cbi8qKlxyXG4gKiBDb252ZXJ0cyBhIGNvbG9yIG9iamVjdCB3aXRoIHR5cGUgYW5kIHZhbHVlcyB0byBhIHN0cmluZy5cclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IGNvbG9yIC0gRGVjb21wb3NlZCBjb2xvclxyXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IudHlwZSAtIE9uZSBvZjogJ3JnYicsICdyZ2JhJywgJ2hzbCcsICdoc2xhJ1xyXG4gKiBAcGFyYW0ge2FycmF5fSBjb2xvci52YWx1ZXMgLSBbbixuLG5dIG9yIFtuLG4sbixuXVxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIENTUyBjb2xvciBzdHJpbmdcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByZWNvbXBvc2VDb2xvcihjb2xvcikge1xuICB2YXIgdHlwZSA9IGNvbG9yLnR5cGU7XG4gIHZhciB2YWx1ZXMgPSBjb2xvci52YWx1ZXM7XG5cbiAgaWYgKHR5cGUuaW5kZXhPZigncmdiJykgIT09IC0xKSB7XG4gICAgLy8gT25seSBjb252ZXJ0IHRoZSBmaXJzdCAzIHZhbHVlcyB0byBpbnQgKGkuZS4gbm90IGFscGhhKVxuICAgIHZhbHVlcyA9IHZhbHVlcy5tYXAoZnVuY3Rpb24gKG4sIGkpIHtcbiAgICAgIHJldHVybiBpIDwgMyA/IHBhcnNlSW50KG4sIDEwKSA6IG47XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZS5pbmRleE9mKCdoc2wnKSAhPT0gLTEpIHtcbiAgICB2YWx1ZXNbMV0gPSBcIlwiLmNvbmNhdCh2YWx1ZXNbMV0sIFwiJVwiKTtcbiAgICB2YWx1ZXNbMl0gPSBcIlwiLmNvbmNhdCh2YWx1ZXNbMl0sIFwiJVwiKTtcbiAgfVxuXG4gIHJldHVybiBcIlwiLmNvbmNhdCh0eXBlLCBcIihcIikuY29uY2F0KHZhbHVlcy5qb2luKCcsICcpLCBcIilcIik7XG59XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgY29udHJhc3QgcmF0aW8gYmV0d2VlbiB0d28gY29sb3JzLlxyXG4gKlxyXG4gKiBGb3JtdWxhOiBodHRwczovL3d3dy53My5vcmcvVFIvV0NBRzIwLVRFQ0hTL0cxNy5odG1sI0cxNy10ZXN0c1xyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZm9yZWdyb3VuZCAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcclxuICogQHBhcmFtIHtzdHJpbmd9IGJhY2tncm91bmQgLSBDU1MgY29sb3IsIGkuZS4gb25lIG9mOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IEEgY29udHJhc3QgcmF0aW8gdmFsdWUgaW4gdGhlIHJhbmdlIDAgLSAyMS5cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb250cmFzdFJhdGlvKGZvcmVncm91bmQsIGJhY2tncm91bmQpIHtcbiAgdmFyIGx1bUEgPSBnZXRMdW1pbmFuY2UoZm9yZWdyb3VuZCk7XG4gIHZhciBsdW1CID0gZ2V0THVtaW5hbmNlKGJhY2tncm91bmQpO1xuICByZXR1cm4gKE1hdGgubWF4KGx1bUEsIGx1bUIpICsgMC4wNSkgLyAoTWF0aC5taW4obHVtQSwgbHVtQikgKyAwLjA1KTtcbn1cbi8qKlxyXG4gKiBUaGUgcmVsYXRpdmUgYnJpZ2h0bmVzcyBvZiBhbnkgcG9pbnQgaW4gYSBjb2xvciBzcGFjZSxcclxuICogbm9ybWFsaXplZCB0byAwIGZvciBkYXJrZXN0IGJsYWNrIGFuZCAxIGZvciBsaWdodGVzdCB3aGl0ZS5cclxuICpcclxuICogRm9ybXVsYTogaHR0cHM6Ly93d3cudzMub3JnL1RSL1dDQUcyMC1URUNIUy9HMTcuaHRtbCNHMTctdGVzdHNcclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgcmVsYXRpdmUgYnJpZ2h0bmVzcyBvZiB0aGUgY29sb3IgaW4gdGhlIHJhbmdlIDAgLSAxXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0THVtaW5hbmNlKGNvbG9yKSB7XG4gIGNvbG9yID0gZGVjb21wb3NlQ29sb3IoY29sb3IpO1xuICB2YXIgcmdiID0gY29sb3IudHlwZSA9PT0gJ2hzbCcgPyBkZWNvbXBvc2VDb2xvcihoc2xUb1JnYihjb2xvcikpLnZhbHVlcyA6IGNvbG9yLnZhbHVlcztcbiAgcmdiID0gcmdiLm1hcChmdW5jdGlvbiAodmFsKSB7XG4gICAgdmFsIC89IDI1NTsgLy8gbm9ybWFsaXplZFxuXG4gICAgcmV0dXJuIHZhbCA8PSAwLjAzOTI4ID8gdmFsIC8gMTIuOTIgOiBNYXRoLnBvdygodmFsICsgMC4wNTUpIC8gMS4wNTUsIDIuNCk7XG4gIH0pOyAvLyBUcnVuY2F0ZSBhdCAzIGRpZ2l0c1xuXG4gIHJldHVybiBOdW1iZXIoKDAuMjEyNiAqIHJnYlswXSArIDAuNzE1MiAqIHJnYlsxXSArIDAuMDcyMiAqIHJnYlsyXSkudG9GaXhlZCgzKSk7XG59XG4vKipcclxuICogRGFya2VuIG9yIGxpZ2h0ZW4gYSBjb2xvciwgZGVwZW5kaW5nIG9uIGl0cyBsdW1pbmFuY2UuXHJcbiAqIExpZ2h0IGNvbG9ycyBhcmUgZGFya2VuZWQsIGRhcmsgY29sb3JzIGFyZSBsaWdodGVuZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcclxuICogQHBhcmFtIHtudW1iZXJ9IGNvZWZmaWNpZW50PTAuMTUgLSBtdWx0aXBsaWVyIGluIHRoZSByYW5nZSAwIC0gMVxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIENTUyBjb2xvciBzdHJpbmcuIEhleCBpbnB1dCB2YWx1ZXMgYXJlIHJldHVybmVkIGFzIHJnYlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGVtcGhhc2l6ZShjb2xvcikge1xuICB2YXIgY29lZmZpY2llbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDAuMTU7XG4gIHJldHVybiBnZXRMdW1pbmFuY2UoY29sb3IpID4gMC41ID8gZGFya2VuKGNvbG9yLCBjb2VmZmljaWVudCkgOiBsaWdodGVuKGNvbG9yLCBjb2VmZmljaWVudCk7XG59XG52YXIgd2FybmVkT25jZSA9IGZhbHNlO1xuLyoqXHJcbiAqIFNldCB0aGUgYWJzb2x1dGUgdHJhbnNwYXJlbmN5IG9mIGEgY29sb3IuXHJcbiAqIEFueSBleGlzdGluZyBhbHBoYSB2YWx1ZXMgYXJlIG92ZXJ3cml0dGVuLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBDU1MgY29sb3IsIGkuZS4gb25lIG9mOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAtIHZhbHVlIHRvIHNldCB0aGUgYWxwaGEgY2hhbm5lbCB0byBpbiB0aGUgcmFuZ2UgMCAtMVxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIENTUyBjb2xvciBzdHJpbmcuIEhleCBpbnB1dCB2YWx1ZXMgYXJlIHJldHVybmVkIGFzIHJnYlxyXG4gKlxyXG4gKiBAZGVwcmVjYXRlZFxyXG4gKiBVc2UgYGltcG9ydCB7IGFscGhhIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ2AgaW5zdGVhZC5cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmYWRlKGNvbG9yLCB2YWx1ZSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghd2FybmVkT25jZSkge1xuICAgICAgd2FybmVkT25jZSA9IHRydWU7XG4gICAgICBjb25zb2xlLmVycm9yKFsnTWF0ZXJpYWwtVUk6IFRoZSBgZmFkZWAgY29sb3IgdXRpbGl0eSB3YXMgcmVuYW1lZCB0byBgYWxwaGFgIHRvIGJldHRlciBkZXNjcmliZSBpdHMgZnVuY3Rpb25hbGl0eS4nLCAnJywgXCJZb3Ugc2hvdWxkIHVzZSBgaW1wb3J0IHsgYWxwaGEgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnYFwiXS5qb2luKCdcXG4nKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFscGhhKGNvbG9yLCB2YWx1ZSk7XG59XG4vKipcclxuICogU2V0IHRoZSBhYnNvbHV0ZSB0cmFuc3BhcmVuY3kgb2YgYSBjb2xvci5cclxuICogQW55IGV4aXN0aW5nIGFscGhhIHZhbHVlIGlzIG92ZXJ3cml0dGVuLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBDU1MgY29sb3IsIGkuZS4gb25lIG9mOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAtIHZhbHVlIHRvIHNldCB0aGUgYWxwaGEgY2hhbm5lbCB0byBpbiB0aGUgcmFuZ2UgMC0xXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIGNvbG9yIHN0cmluZy4gSGV4IGlucHV0IHZhbHVlcyBhcmUgcmV0dXJuZWQgYXMgcmdiXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYWxwaGEoY29sb3IsIHZhbHVlKSB7XG4gIGNvbG9yID0gZGVjb21wb3NlQ29sb3IoY29sb3IpO1xuICB2YWx1ZSA9IGNsYW1wKHZhbHVlKTtcblxuICBpZiAoY29sb3IudHlwZSA9PT0gJ3JnYicgfHwgY29sb3IudHlwZSA9PT0gJ2hzbCcpIHtcbiAgICBjb2xvci50eXBlICs9ICdhJztcbiAgfVxuXG4gIGNvbG9yLnZhbHVlc1szXSA9IHZhbHVlO1xuICByZXR1cm4gcmVjb21wb3NlQ29sb3IoY29sb3IpO1xufVxuLyoqXHJcbiAqIERhcmtlbnMgYSBjb2xvci5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxyXG4gKiBAcGFyYW0ge251bWJlcn0gY29lZmZpY2llbnQgLSBtdWx0aXBsaWVyIGluIHRoZSByYW5nZSAwIC0gMVxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIENTUyBjb2xvciBzdHJpbmcuIEhleCBpbnB1dCB2YWx1ZXMgYXJlIHJldHVybmVkIGFzIHJnYlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRhcmtlbihjb2xvciwgY29lZmZpY2llbnQpIHtcbiAgY29sb3IgPSBkZWNvbXBvc2VDb2xvcihjb2xvcik7XG4gIGNvZWZmaWNpZW50ID0gY2xhbXAoY29lZmZpY2llbnQpO1xuXG4gIGlmIChjb2xvci50eXBlLmluZGV4T2YoJ2hzbCcpICE9PSAtMSkge1xuICAgIGNvbG9yLnZhbHVlc1syXSAqPSAxIC0gY29lZmZpY2llbnQ7XG4gIH0gZWxzZSBpZiAoY29sb3IudHlwZS5pbmRleE9mKCdyZ2InKSAhPT0gLTEpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkgKz0gMSkge1xuICAgICAgY29sb3IudmFsdWVzW2ldICo9IDEgLSBjb2VmZmljaWVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVjb21wb3NlQ29sb3IoY29sb3IpO1xufVxuLyoqXHJcbiAqIExpZ2h0ZW5zIGEgY29sb3IuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcclxuICogQHBhcmFtIHtudW1iZXJ9IGNvZWZmaWNpZW50IC0gbXVsdGlwbGllciBpbiB0aGUgcmFuZ2UgMCAtIDFcclxuICogQHJldHVybnMge3N0cmluZ30gQSBDU1MgY29sb3Igc3RyaW5nLiBIZXggaW5wdXQgdmFsdWVzIGFyZSByZXR1cm5lZCBhcyByZ2JcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBsaWdodGVuKGNvbG9yLCBjb2VmZmljaWVudCkge1xuICBjb2xvciA9IGRlY29tcG9zZUNvbG9yKGNvbG9yKTtcbiAgY29lZmZpY2llbnQgPSBjbGFtcChjb2VmZmljaWVudCk7XG5cbiAgaWYgKGNvbG9yLnR5cGUuaW5kZXhPZignaHNsJykgIT09IC0xKSB7XG4gICAgY29sb3IudmFsdWVzWzJdICs9ICgxMDAgLSBjb2xvci52YWx1ZXNbMl0pICogY29lZmZpY2llbnQ7XG4gIH0gZWxzZSBpZiAoY29sb3IudHlwZS5pbmRleE9mKCdyZ2InKSAhPT0gLTEpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkgKz0gMSkge1xuICAgICAgY29sb3IudmFsdWVzW2ldICs9ICgyNTUgLSBjb2xvci52YWx1ZXNbaV0pICogY29lZmZpY2llbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlY29tcG9zZUNvbG9yKGNvbG9yKTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG4vLyBTb3J0ZWQgQVNDIGJ5IHNpemUuIFRoYXQncyBpbXBvcnRhbnQuXG4vLyBJdCBjYW4ndCBiZSBjb25maWd1cmVkIGFzIGl0J3MgdXNlZCBzdGF0aWNhbGx5IGZvciBwcm9wVHlwZXMuXG5leHBvcnQgdmFyIGtleXMgPSBbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJywgJ3hsJ107IC8vIEtlZXAgaW4gbWluZCB0aGF0IEBtZWRpYSBpcyBpbmNsdXNpdmUgYnkgdGhlIENTUyBzcGVjaWZpY2F0aW9uLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVCcmVha3BvaW50cyhicmVha3BvaW50cykge1xuICB2YXIgX2JyZWFrcG9pbnRzJHZhbHVlcyA9IGJyZWFrcG9pbnRzLnZhbHVlcyxcbiAgICAgIHZhbHVlcyA9IF9icmVha3BvaW50cyR2YWx1ZXMgPT09IHZvaWQgMCA/IHtcbiAgICB4czogMCxcbiAgICBzbTogNjAwLFxuICAgIG1kOiA5NjAsXG4gICAgbGc6IDEyODAsXG4gICAgeGw6IDE5MjBcbiAgfSA6IF9icmVha3BvaW50cyR2YWx1ZXMsXG4gICAgICBfYnJlYWtwb2ludHMkdW5pdCA9IGJyZWFrcG9pbnRzLnVuaXQsXG4gICAgICB1bml0ID0gX2JyZWFrcG9pbnRzJHVuaXQgPT09IHZvaWQgMCA/ICdweCcgOiBfYnJlYWtwb2ludHMkdW5pdCxcbiAgICAgIF9icmVha3BvaW50cyRzdGVwID0gYnJlYWtwb2ludHMuc3RlcCxcbiAgICAgIHN0ZXAgPSBfYnJlYWtwb2ludHMkc3RlcCA9PT0gdm9pZCAwID8gNSA6IF9icmVha3BvaW50cyRzdGVwLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoYnJlYWtwb2ludHMsIFtcInZhbHVlc1wiLCBcInVuaXRcIiwgXCJzdGVwXCJdKTtcblxuICBmdW5jdGlvbiB1cChrZXkpIHtcbiAgICB2YXIgdmFsdWUgPSB0eXBlb2YgdmFsdWVzW2tleV0gPT09ICdudW1iZXInID8gdmFsdWVzW2tleV0gOiBrZXk7XG4gICAgcmV0dXJuIFwiQG1lZGlhIChtaW4td2lkdGg6XCIuY29uY2F0KHZhbHVlKS5jb25jYXQodW5pdCwgXCIpXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZG93bihrZXkpIHtcbiAgICB2YXIgZW5kSW5kZXggPSBrZXlzLmluZGV4T2Yoa2V5KSArIDE7XG4gICAgdmFyIHVwcGVyYm91bmQgPSB2YWx1ZXNba2V5c1tlbmRJbmRleF1dO1xuXG4gICAgaWYgKGVuZEluZGV4ID09PSBrZXlzLmxlbmd0aCkge1xuICAgICAgLy8geGwgZG93biBhcHBsaWVzIHRvIGFsbCBzaXplc1xuICAgICAgcmV0dXJuIHVwKCd4cycpO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZSA9IHR5cGVvZiB1cHBlcmJvdW5kID09PSAnbnVtYmVyJyAmJiBlbmRJbmRleCA+IDAgPyB1cHBlcmJvdW5kIDoga2V5O1xuICAgIHJldHVybiBcIkBtZWRpYSAobWF4LXdpZHRoOlwiLmNvbmNhdCh2YWx1ZSAtIHN0ZXAgLyAxMDApLmNvbmNhdCh1bml0LCBcIilcIik7XG4gIH1cblxuICBmdW5jdGlvbiBiZXR3ZWVuKHN0YXJ0LCBlbmQpIHtcbiAgICB2YXIgZW5kSW5kZXggPSBrZXlzLmluZGV4T2YoZW5kKTtcblxuICAgIGlmIChlbmRJbmRleCA9PT0ga2V5cy5sZW5ndGggLSAxKSB7XG4gICAgICByZXR1cm4gdXAoc3RhcnQpO1xuICAgIH1cblxuICAgIHJldHVybiBcIkBtZWRpYSAobWluLXdpZHRoOlwiLmNvbmNhdCh0eXBlb2YgdmFsdWVzW3N0YXJ0XSA9PT0gJ251bWJlcicgPyB2YWx1ZXNbc3RhcnRdIDogc3RhcnQpLmNvbmNhdCh1bml0LCBcIikgYW5kIFwiKSArIFwiKG1heC13aWR0aDpcIi5jb25jYXQoKGVuZEluZGV4ICE9PSAtMSAmJiB0eXBlb2YgdmFsdWVzW2tleXNbZW5kSW5kZXggKyAxXV0gPT09ICdudW1iZXInID8gdmFsdWVzW2tleXNbZW5kSW5kZXggKyAxXV0gOiBlbmQpIC0gc3RlcCAvIDEwMCkuY29uY2F0KHVuaXQsIFwiKVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9ubHkoa2V5KSB7XG4gICAgcmV0dXJuIGJldHdlZW4oa2V5LCBrZXkpO1xuICB9XG5cbiAgdmFyIHdhcm5lZE9uY2UgPSBmYWxzZTtcblxuICBmdW5jdGlvbiB3aWR0aChrZXkpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCF3YXJuZWRPbmNlKSB7XG4gICAgICAgIHdhcm5lZE9uY2UgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLndhcm4oW1wiTWF0ZXJpYWwtVUk6IFRoZSBgdGhlbWUuYnJlYWtwb2ludHMud2lkdGhgIHV0aWxpdHkgaXMgZGVwcmVjYXRlZCBiZWNhdXNlIGl0J3MgcmVkdW5kYW50LlwiLCAnVXNlIHRoZSBgdGhlbWUuYnJlYWtwb2ludHMudmFsdWVzYCBpbnN0ZWFkLiddLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzW2tleV07XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe1xuICAgIGtleXM6IGtleXMsXG4gICAgdmFsdWVzOiB2YWx1ZXMsXG4gICAgdXA6IHVwLFxuICAgIGRvd246IGRvd24sXG4gICAgYmV0d2VlbjogYmV0d2VlbixcbiAgICBvbmx5OiBvbmx5LFxuICAgIHdpZHRoOiB3aWR0aFxuICB9LCBvdGhlcik7XG59IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWl4aW5zKGJyZWFrcG9pbnRzLCBzcGFjaW5nLCBtaXhpbnMpIHtcbiAgdmFyIF90b29sYmFyO1xuXG4gIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgZ3V0dGVyczogZnVuY3Rpb24gZ3V0dGVycygpIHtcbiAgICAgIHZhciBzdHlsZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgICAgY29uc29sZS53YXJuKFsnTWF0ZXJpYWwtVUk6IHRoZW1lLm1peGlucy5ndXR0ZXJzKCkgaXMgZGVwcmVjYXRlZC4nLCAnWW91IGNhbiB1c2UgdGhlIHNvdXJjZSBvZiB0aGUgbWl4aW4gZGlyZWN0bHk6JywgXCJcXG4gICAgICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZygyKSxcXG4gICAgICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xcbiAgICAgICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoMyksXFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMyksXFxuICAgICAgfSxcXG4gICAgICBcIl0uam9pbignXFxuJykpO1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgcGFkZGluZ0xlZnQ6IHNwYWNpbmcoMiksXG4gICAgICAgIHBhZGRpbmdSaWdodDogc3BhY2luZygyKVxuICAgICAgfSwgc3R5bGVzLCBfZGVmaW5lUHJvcGVydHkoe30sIGJyZWFrcG9pbnRzLnVwKCdzbScpLCBfZXh0ZW5kcyh7XG4gICAgICAgIHBhZGRpbmdMZWZ0OiBzcGFjaW5nKDMpLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IHNwYWNpbmcoMylcbiAgICAgIH0sIHN0eWxlc1ticmVha3BvaW50cy51cCgnc20nKV0pKSk7XG4gICAgfSxcbiAgICB0b29sYmFyOiAoX3Rvb2xiYXIgPSB7XG4gICAgICBtaW5IZWlnaHQ6IDU2XG4gICAgfSwgX2RlZmluZVByb3BlcnR5KF90b29sYmFyLCBcIlwiLmNvbmNhdChicmVha3BvaW50cy51cCgneHMnKSwgXCIgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKSwge1xuICAgICAgbWluSGVpZ2h0OiA0OFxuICAgIH0pLCBfZGVmaW5lUHJvcGVydHkoX3Rvb2xiYXIsIGJyZWFrcG9pbnRzLnVwKCdzbScpLCB7XG4gICAgICBtaW5IZWlnaHQ6IDY0XG4gICAgfSksIF90b29sYmFyKVxuICB9LCBtaXhpbnMpO1xufSIsImltcG9ydCB7IGRlZXBtZXJnZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgY3JlYXRlVGhlbWUgZnJvbSAnLi9jcmVhdGVUaGVtZSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNdWlTdHJpY3RNb2RlVGhlbWUob3B0aW9ucykge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gY3JlYXRlVGhlbWUuYXBwbHkodm9pZCAwLCBbZGVlcG1lcmdlKHtcbiAgICB1bnN0YWJsZV9zdHJpY3RNb2RlOiB0cnVlXG4gIH0sIG9wdGlvbnMpXS5jb25jYXQoYXJncykpO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCB7IGZvcm1hdE11aUVycm9yTWVzc2FnZSBhcyBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS91dGlsc1wiO1xuaW1wb3J0IHsgZGVlcG1lcmdlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBjb21tb24gZnJvbSAnLi4vY29sb3JzL2NvbW1vbic7XG5pbXBvcnQgZ3JleSBmcm9tICcuLi9jb2xvcnMvZ3JleSc7XG5pbXBvcnQgaW5kaWdvIGZyb20gJy4uL2NvbG9ycy9pbmRpZ28nO1xuaW1wb3J0IHBpbmsgZnJvbSAnLi4vY29sb3JzL3BpbmsnO1xuaW1wb3J0IHJlZCBmcm9tICcuLi9jb2xvcnMvcmVkJztcbmltcG9ydCBvcmFuZ2UgZnJvbSAnLi4vY29sb3JzL29yYW5nZSc7XG5pbXBvcnQgYmx1ZSBmcm9tICcuLi9jb2xvcnMvYmx1ZSc7XG5pbXBvcnQgZ3JlZW4gZnJvbSAnLi4vY29sb3JzL2dyZWVuJztcbmltcG9ydCB7IGRhcmtlbiwgZ2V0Q29udHJhc3RSYXRpbywgbGlnaHRlbiB9IGZyb20gJy4vY29sb3JNYW5pcHVsYXRvcic7XG5leHBvcnQgdmFyIGxpZ2h0ID0ge1xuICAvLyBUaGUgY29sb3JzIHVzZWQgdG8gc3R5bGUgdGhlIHRleHQuXG4gIHRleHQ6IHtcbiAgICAvLyBUaGUgbW9zdCBpbXBvcnRhbnQgdGV4dC5cbiAgICBwcmltYXJ5OiAncmdiYSgwLCAwLCAwLCAwLjg3KScsXG4gICAgLy8gU2Vjb25kYXJ5IHRleHQuXG4gICAgc2Vjb25kYXJ5OiAncmdiYSgwLCAwLCAwLCAwLjU0KScsXG4gICAgLy8gRGlzYWJsZWQgdGV4dCBoYXZlIGV2ZW4gbG93ZXIgdmlzdWFsIHByb21pbmVuY2UuXG4gICAgZGlzYWJsZWQ6ICdyZ2JhKDAsIDAsIDAsIDAuMzgpJyxcbiAgICAvLyBUZXh0IGhpbnRzLlxuICAgIGhpbnQ6ICdyZ2JhKDAsIDAsIDAsIDAuMzgpJ1xuICB9LFxuICAvLyBUaGUgY29sb3IgdXNlZCB0byBkaXZpZGUgZGlmZmVyZW50IGVsZW1lbnRzLlxuICBkaXZpZGVyOiAncmdiYSgwLCAwLCAwLCAwLjEyKScsXG4gIC8vIFRoZSBiYWNrZ3JvdW5kIGNvbG9ycyB1c2VkIHRvIHN0eWxlIHRoZSBzdXJmYWNlcy5cbiAgLy8gQ29uc2lzdGVuY3kgYmV0d2VlbiB0aGVzZSB2YWx1ZXMgaXMgaW1wb3J0YW50LlxuICBiYWNrZ3JvdW5kOiB7XG4gICAgcGFwZXI6IGNvbW1vbi53aGl0ZSxcbiAgICBkZWZhdWx0OiBncmV5WzUwXVxuICB9LFxuICAvLyBUaGUgY29sb3JzIHVzZWQgdG8gc3R5bGUgdGhlIGFjdGlvbiBlbGVtZW50cy5cbiAgYWN0aW9uOiB7XG4gICAgLy8gVGhlIGNvbG9yIG9mIGFuIGFjdGl2ZSBhY3Rpb24gbGlrZSBhbiBpY29uIGJ1dHRvbi5cbiAgICBhY3RpdmU6ICdyZ2JhKDAsIDAsIDAsIDAuNTQpJyxcbiAgICAvLyBUaGUgY29sb3Igb2YgYW4gaG92ZXJlZCBhY3Rpb24uXG4gICAgaG92ZXI6ICdyZ2JhKDAsIDAsIDAsIDAuMDQpJyxcbiAgICBob3Zlck9wYWNpdHk6IDAuMDQsXG4gICAgLy8gVGhlIGNvbG9yIG9mIGEgc2VsZWN0ZWQgYWN0aW9uLlxuICAgIHNlbGVjdGVkOiAncmdiYSgwLCAwLCAwLCAwLjA4KScsXG4gICAgc2VsZWN0ZWRPcGFjaXR5OiAwLjA4LFxuICAgIC8vIFRoZSBjb2xvciBvZiBhIGRpc2FibGVkIGFjdGlvbi5cbiAgICBkaXNhYmxlZDogJ3JnYmEoMCwgMCwgMCwgMC4yNiknLFxuICAgIC8vIFRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIGEgZGlzYWJsZWQgYWN0aW9uLlxuICAgIGRpc2FibGVkQmFja2dyb3VuZDogJ3JnYmEoMCwgMCwgMCwgMC4xMiknLFxuICAgIGRpc2FibGVkT3BhY2l0eTogMC4zOCxcbiAgICBmb2N1czogJ3JnYmEoMCwgMCwgMCwgMC4xMiknLFxuICAgIGZvY3VzT3BhY2l0eTogMC4xMixcbiAgICBhY3RpdmF0ZWRPcGFjaXR5OiAwLjEyXG4gIH1cbn07XG5leHBvcnQgdmFyIGRhcmsgPSB7XG4gIHRleHQ6IHtcbiAgICBwcmltYXJ5OiBjb21tb24ud2hpdGUsXG4gICAgc2Vjb25kYXJ5OiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpJyxcbiAgICBkaXNhYmxlZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41KScsXG4gICAgaGludDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41KScsXG4gICAgaWNvbjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSdcbiAgfSxcbiAgZGl2aWRlcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMiknLFxuICBiYWNrZ3JvdW5kOiB7XG4gICAgcGFwZXI6IGdyZXlbODAwXSxcbiAgICBkZWZhdWx0OiAnIzMwMzAzMCdcbiAgfSxcbiAgYWN0aW9uOiB7XG4gICAgYWN0aXZlOiBjb21tb24ud2hpdGUsXG4gICAgaG92ZXI6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpJyxcbiAgICBob3Zlck9wYWNpdHk6IDAuMDgsXG4gICAgc2VsZWN0ZWQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTYpJyxcbiAgICBzZWxlY3RlZE9wYWNpdHk6IDAuMTYsXG4gICAgZGlzYWJsZWQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyknLFxuICAgIGRpc2FibGVkQmFja2dyb3VuZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMiknLFxuICAgIGRpc2FibGVkT3BhY2l0eTogMC4zOCxcbiAgICBmb2N1czogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMiknLFxuICAgIGZvY3VzT3BhY2l0eTogMC4xMixcbiAgICBhY3RpdmF0ZWRPcGFjaXR5OiAwLjI0XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGFkZExpZ2h0T3JEYXJrKGludGVudCwgZGlyZWN0aW9uLCBzaGFkZSwgdG9uYWxPZmZzZXQpIHtcbiAgdmFyIHRvbmFsT2Zmc2V0TGlnaHQgPSB0b25hbE9mZnNldC5saWdodCB8fCB0b25hbE9mZnNldDtcbiAgdmFyIHRvbmFsT2Zmc2V0RGFyayA9IHRvbmFsT2Zmc2V0LmRhcmsgfHwgdG9uYWxPZmZzZXQgKiAxLjU7XG5cbiAgaWYgKCFpbnRlbnRbZGlyZWN0aW9uXSkge1xuICAgIGlmIChpbnRlbnQuaGFzT3duUHJvcGVydHkoc2hhZGUpKSB7XG4gICAgICBpbnRlbnRbZGlyZWN0aW9uXSA9IGludGVudFtzaGFkZV07XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdsaWdodCcpIHtcbiAgICAgIGludGVudC5saWdodCA9IGxpZ2h0ZW4oaW50ZW50Lm1haW4sIHRvbmFsT2Zmc2V0TGlnaHQpO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnZGFyaycpIHtcbiAgICAgIGludGVudC5kYXJrID0gZGFya2VuKGludGVudC5tYWluLCB0b25hbE9mZnNldERhcmspO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQYWxldHRlKHBhbGV0dGUpIHtcbiAgdmFyIF9wYWxldHRlJHByaW1hcnkgPSBwYWxldHRlLnByaW1hcnksXG4gICAgICBwcmltYXJ5ID0gX3BhbGV0dGUkcHJpbWFyeSA9PT0gdm9pZCAwID8ge1xuICAgIGxpZ2h0OiBpbmRpZ29bMzAwXSxcbiAgICBtYWluOiBpbmRpZ29bNTAwXSxcbiAgICBkYXJrOiBpbmRpZ29bNzAwXVxuICB9IDogX3BhbGV0dGUkcHJpbWFyeSxcbiAgICAgIF9wYWxldHRlJHNlY29uZGFyeSA9IHBhbGV0dGUuc2Vjb25kYXJ5LFxuICAgICAgc2Vjb25kYXJ5ID0gX3BhbGV0dGUkc2Vjb25kYXJ5ID09PSB2b2lkIDAgPyB7XG4gICAgbGlnaHQ6IHBpbmsuQTIwMCxcbiAgICBtYWluOiBwaW5rLkE0MDAsXG4gICAgZGFyazogcGluay5BNzAwXG4gIH0gOiBfcGFsZXR0ZSRzZWNvbmRhcnksXG4gICAgICBfcGFsZXR0ZSRlcnJvciA9IHBhbGV0dGUuZXJyb3IsXG4gICAgICBlcnJvciA9IF9wYWxldHRlJGVycm9yID09PSB2b2lkIDAgPyB7XG4gICAgbGlnaHQ6IHJlZFszMDBdLFxuICAgIG1haW46IHJlZFs1MDBdLFxuICAgIGRhcms6IHJlZFs3MDBdXG4gIH0gOiBfcGFsZXR0ZSRlcnJvcixcbiAgICAgIF9wYWxldHRlJHdhcm5pbmcgPSBwYWxldHRlLndhcm5pbmcsXG4gICAgICB3YXJuaW5nID0gX3BhbGV0dGUkd2FybmluZyA9PT0gdm9pZCAwID8ge1xuICAgIGxpZ2h0OiBvcmFuZ2VbMzAwXSxcbiAgICBtYWluOiBvcmFuZ2VbNTAwXSxcbiAgICBkYXJrOiBvcmFuZ2VbNzAwXVxuICB9IDogX3BhbGV0dGUkd2FybmluZyxcbiAgICAgIF9wYWxldHRlJGluZm8gPSBwYWxldHRlLmluZm8sXG4gICAgICBpbmZvID0gX3BhbGV0dGUkaW5mbyA9PT0gdm9pZCAwID8ge1xuICAgIGxpZ2h0OiBibHVlWzMwMF0sXG4gICAgbWFpbjogYmx1ZVs1MDBdLFxuICAgIGRhcms6IGJsdWVbNzAwXVxuICB9IDogX3BhbGV0dGUkaW5mbyxcbiAgICAgIF9wYWxldHRlJHN1Y2Nlc3MgPSBwYWxldHRlLnN1Y2Nlc3MsXG4gICAgICBzdWNjZXNzID0gX3BhbGV0dGUkc3VjY2VzcyA9PT0gdm9pZCAwID8ge1xuICAgIGxpZ2h0OiBncmVlblszMDBdLFxuICAgIG1haW46IGdyZWVuWzUwMF0sXG4gICAgZGFyazogZ3JlZW5bNzAwXVxuICB9IDogX3BhbGV0dGUkc3VjY2VzcyxcbiAgICAgIF9wYWxldHRlJHR5cGUgPSBwYWxldHRlLnR5cGUsXG4gICAgICB0eXBlID0gX3BhbGV0dGUkdHlwZSA9PT0gdm9pZCAwID8gJ2xpZ2h0JyA6IF9wYWxldHRlJHR5cGUsXG4gICAgICBfcGFsZXR0ZSRjb250cmFzdFRocmUgPSBwYWxldHRlLmNvbnRyYXN0VGhyZXNob2xkLFxuICAgICAgY29udHJhc3RUaHJlc2hvbGQgPSBfcGFsZXR0ZSRjb250cmFzdFRocmUgPT09IHZvaWQgMCA/IDMgOiBfcGFsZXR0ZSRjb250cmFzdFRocmUsXG4gICAgICBfcGFsZXR0ZSR0b25hbE9mZnNldCA9IHBhbGV0dGUudG9uYWxPZmZzZXQsXG4gICAgICB0b25hbE9mZnNldCA9IF9wYWxldHRlJHRvbmFsT2Zmc2V0ID09PSB2b2lkIDAgPyAwLjIgOiBfcGFsZXR0ZSR0b25hbE9mZnNldCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHBhbGV0dGUsIFtcInByaW1hcnlcIiwgXCJzZWNvbmRhcnlcIiwgXCJlcnJvclwiLCBcIndhcm5pbmdcIiwgXCJpbmZvXCIsIFwic3VjY2Vzc1wiLCBcInR5cGVcIiwgXCJjb250cmFzdFRocmVzaG9sZFwiLCBcInRvbmFsT2Zmc2V0XCJdKTsgLy8gVXNlIHRoZSBzYW1lIGxvZ2ljIGFzXG4gIC8vIEJvb3RzdHJhcDogaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvMWQ2ZTM3MTBkZDQ0N2RlMWEyMDBmMjllOGZhNTIxZjhhMDkwOGY3MC9zY3NzL19mdW5jdGlvbnMuc2NzcyNMNTlcbiAgLy8gYW5kIG1hdGVyaWFsLWNvbXBvbmVudHMtd2ViIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvYWM0NmI4ODYzYzRkYWI5ZmMyMmM0YzY2MmRjNmJkMWI2NWRkNjUyZi9wYWNrYWdlcy9tZGMtdGhlbWUvX2Z1bmN0aW9ucy5zY3NzI0w1NFxuXG5cbiAgZnVuY3Rpb24gZ2V0Q29udHJhc3RUZXh0KGJhY2tncm91bmQpIHtcbiAgICB2YXIgY29udHJhc3RUZXh0ID0gZ2V0Q29udHJhc3RSYXRpbyhiYWNrZ3JvdW5kLCBkYXJrLnRleHQucHJpbWFyeSkgPj0gY29udHJhc3RUaHJlc2hvbGQgPyBkYXJrLnRleHQucHJpbWFyeSA6IGxpZ2h0LnRleHQucHJpbWFyeTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgY29udHJhc3QgPSBnZXRDb250cmFzdFJhdGlvKGJhY2tncm91bmQsIGNvbnRyYXN0VGV4dCk7XG5cbiAgICAgIGlmIChjb250cmFzdCA8IDMpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihbXCJNYXRlcmlhbC1VSTogVGhlIGNvbnRyYXN0IHJhdGlvIG9mIFwiLmNvbmNhdChjb250cmFzdCwgXCI6MSBmb3IgXCIpLmNvbmNhdChjb250cmFzdFRleHQsIFwiIG9uIFwiKS5jb25jYXQoYmFja2dyb3VuZCksICdmYWxscyBiZWxvdyB0aGUgV0NBRyByZWNvbW1lbmRlZCBhYnNvbHV0ZSBtaW5pbXVtIGNvbnRyYXN0IHJhdGlvIG9mIDM6MS4nLCAnaHR0cHM6Ly93d3cudzMub3JnL1RSLzIwMDgvUkVDLVdDQUcyMC0yMDA4MTIxMS8jdmlzdWFsLWF1ZGlvLWNvbnRyYXN0LWNvbnRyYXN0J10uam9pbignXFxuJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb250cmFzdFRleHQ7XG4gIH1cblxuICB2YXIgYXVnbWVudENvbG9yID0gZnVuY3Rpb24gYXVnbWVudENvbG9yKGNvbG9yKSB7XG4gICAgdmFyIG1haW5TaGFkZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogNTAwO1xuICAgIHZhciBsaWdodFNoYWRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAzMDA7XG4gICAgdmFyIGRhcmtTaGFkZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogNzAwO1xuICAgIGNvbG9yID0gX2V4dGVuZHMoe30sIGNvbG9yKTtcblxuICAgIGlmICghY29sb3IubWFpbiAmJiBjb2xvclttYWluU2hhZGVdKSB7XG4gICAgICBjb2xvci5tYWluID0gY29sb3JbbWFpblNoYWRlXTtcbiAgICB9XG5cbiAgICBpZiAoIWNvbG9yLm1haW4pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBcIk1hdGVyaWFsLVVJOiBUaGUgY29sb3IgcHJvdmlkZWQgdG8gYXVnbWVudENvbG9yKGNvbG9yKSBpcyBpbnZhbGlkLlxcblRoZSBjb2xvciBvYmplY3QgbmVlZHMgdG8gaGF2ZSBhIGBtYWluYCBwcm9wZXJ0eSBvciBhIGBcIi5jb25jYXQobWFpblNoYWRlLCBcImAgcHJvcGVydHkuXCIpIDogX2Zvcm1hdE11aUVycm9yTWVzc2FnZSg0LCBtYWluU2hhZGUpKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbG9yLm1haW4gIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJNYXRlcmlhbC1VSTogVGhlIGNvbG9yIHByb3ZpZGVkIHRvIGF1Z21lbnRDb2xvcihjb2xvcikgaXMgaW52YWxpZC5cXG5gY29sb3IubWFpbmAgc2hvdWxkIGJlIGEgc3RyaW5nLCBidXQgYFwiLmNvbmNhdChKU09OLnN0cmluZ2lmeShjb2xvci5tYWluKSwgXCJgIHdhcyBwcm92aWRlZCBpbnN0ZWFkLlxcblxcbkRpZCB5b3UgaW50ZW5kIHRvIHVzZSBvbmUgb2YgdGhlIGZvbGxvd2luZyBhcHByb2FjaGVzP1xcblxcbmltcG9ydCB7XFx4QTBncmVlbiB9IGZyb20gXFxcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1xcXCI7XFxuXFxuY29uc3QgdGhlbWUxID0gY3JlYXRlVGhlbWUoeyBwYWxldHRlOiB7XFxuICBwcmltYXJ5OiBncmVlbixcXG59IH0pO1xcblxcbmNvbnN0IHRoZW1lMiA9IGNyZWF0ZVRoZW1lKHsgcGFsZXR0ZToge1xcbiAgcHJpbWFyeTogeyBtYWluOiBncmVlbls1MDBdIH0sXFxufSB9KTtcIikgOiBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlKDUsIEpTT04uc3RyaW5naWZ5KGNvbG9yLm1haW4pKSk7XG4gICAgfVxuXG4gICAgYWRkTGlnaHRPckRhcmsoY29sb3IsICdsaWdodCcsIGxpZ2h0U2hhZGUsIHRvbmFsT2Zmc2V0KTtcbiAgICBhZGRMaWdodE9yRGFyayhjb2xvciwgJ2RhcmsnLCBkYXJrU2hhZGUsIHRvbmFsT2Zmc2V0KTtcblxuICAgIGlmICghY29sb3IuY29udHJhc3RUZXh0KSB7XG4gICAgICBjb2xvci5jb250cmFzdFRleHQgPSBnZXRDb250cmFzdFRleHQoY29sb3IubWFpbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbG9yO1xuICB9O1xuXG4gIHZhciB0eXBlcyA9IHtcbiAgICBkYXJrOiBkYXJrLFxuICAgIGxpZ2h0OiBsaWdodFxuICB9O1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCF0eXBlc1t0eXBlXSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIk1hdGVyaWFsLVVJOiBUaGUgcGFsZXR0ZSB0eXBlIGBcIi5jb25jYXQodHlwZSwgXCJgIGlzIG5vdCBzdXBwb3J0ZWQuXCIpKTtcbiAgICB9XG4gIH1cblxuICB2YXIgcGFsZXR0ZU91dHB1dCA9IGRlZXBtZXJnZShfZXh0ZW5kcyh7XG4gICAgLy8gQSBjb2xsZWN0aW9uIG9mIGNvbW1vbiBjb2xvcnMuXG4gICAgY29tbW9uOiBjb21tb24sXG4gICAgLy8gVGhlIHBhbGV0dGUgdHlwZSwgY2FuIGJlIGxpZ2h0IG9yIGRhcmsuXG4gICAgdHlwZTogdHlwZSxcbiAgICAvLyBUaGUgY29sb3JzIHVzZWQgdG8gcmVwcmVzZW50IHByaW1hcnkgaW50ZXJmYWNlIGVsZW1lbnRzIGZvciBhIHVzZXIuXG4gICAgcHJpbWFyeTogYXVnbWVudENvbG9yKHByaW1hcnkpLFxuICAgIC8vIFRoZSBjb2xvcnMgdXNlZCB0byByZXByZXNlbnQgc2Vjb25kYXJ5IGludGVyZmFjZSBlbGVtZW50cyBmb3IgYSB1c2VyLlxuICAgIHNlY29uZGFyeTogYXVnbWVudENvbG9yKHNlY29uZGFyeSwgJ0E0MDAnLCAnQTIwMCcsICdBNzAwJyksXG4gICAgLy8gVGhlIGNvbG9ycyB1c2VkIHRvIHJlcHJlc2VudCBpbnRlcmZhY2UgZWxlbWVudHMgdGhhdCB0aGUgdXNlciBzaG91bGQgYmUgbWFkZSBhd2FyZSBvZi5cbiAgICBlcnJvcjogYXVnbWVudENvbG9yKGVycm9yKSxcbiAgICAvLyBUaGUgY29sb3JzIHVzZWQgdG8gcmVwcmVzZW50IHBvdGVudGlhbGx5IGRhbmdlcm91cyBhY3Rpb25zIG9yIGltcG9ydGFudCBtZXNzYWdlcy5cbiAgICB3YXJuaW5nOiBhdWdtZW50Q29sb3Iod2FybmluZyksXG4gICAgLy8gVGhlIGNvbG9ycyB1c2VkIHRvIHByZXNlbnQgaW5mb3JtYXRpb24gdG8gdGhlIHVzZXIgdGhhdCBpcyBuZXV0cmFsIGFuZCBub3QgbmVjZXNzYXJpbHkgaW1wb3J0YW50LlxuICAgIGluZm86IGF1Z21lbnRDb2xvcihpbmZvKSxcbiAgICAvLyBUaGUgY29sb3JzIHVzZWQgdG8gaW5kaWNhdGUgdGhlIHN1Y2Nlc3NmdWwgY29tcGxldGlvbiBvZiBhbiBhY3Rpb24gdGhhdCB1c2VyIHRyaWdnZXJlZC5cbiAgICBzdWNjZXNzOiBhdWdtZW50Q29sb3Ioc3VjY2VzcyksXG4gICAgLy8gVGhlIGdyZXkgY29sb3JzLlxuICAgIGdyZXk6IGdyZXksXG4gICAgLy8gVXNlZCBieSBgZ2V0Q29udHJhc3RUZXh0KClgIHRvIG1heGltaXplIHRoZSBjb250cmFzdCBiZXR3ZWVuXG4gICAgLy8gdGhlIGJhY2tncm91bmQgYW5kIHRoZSB0ZXh0LlxuICAgIGNvbnRyYXN0VGhyZXNob2xkOiBjb250cmFzdFRocmVzaG9sZCxcbiAgICAvLyBUYWtlcyBhIGJhY2tncm91bmQgY29sb3IgYW5kIHJldHVybnMgdGhlIHRleHQgY29sb3IgdGhhdCBtYXhpbWl6ZXMgdGhlIGNvbnRyYXN0LlxuICAgIGdldENvbnRyYXN0VGV4dDogZ2V0Q29udHJhc3RUZXh0LFxuICAgIC8vIEdlbmVyYXRlIGEgcmljaCBjb2xvciBvYmplY3QuXG4gICAgYXVnbWVudENvbG9yOiBhdWdtZW50Q29sb3IsXG4gICAgLy8gVXNlZCBieSB0aGUgZnVuY3Rpb25zIGJlbG93IHRvIHNoaWZ0IGEgY29sb3IncyBsdW1pbmFuY2UgYnkgYXBwcm94aW1hdGVseVxuICAgIC8vIHR3byBpbmRleGVzIHdpdGhpbiBpdHMgdG9uYWwgcGFsZXR0ZS5cbiAgICAvLyBFLmcuLCBzaGlmdCBmcm9tIFJlZCA1MDAgdG8gUmVkIDMwMCBvciBSZWQgNzAwLlxuICAgIHRvbmFsT2Zmc2V0OiB0b25hbE9mZnNldFxuICB9LCB0eXBlc1t0eXBlXSksIG90aGVyKTtcbiAgcmV0dXJuIHBhbGV0dGVPdXRwdXQ7XG59IiwiaW1wb3J0IHsgY3JlYXRlVW5hcnlTcGFjaW5nIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N5c3RlbSc7XG52YXIgd2Fybk9uY2U7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTcGFjaW5nKCkge1xuICB2YXIgc3BhY2luZ0lucHV0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiA4O1xuXG4gIC8vIEFscmVhZHkgdHJhbnNmb3JtZWQuXG4gIGlmIChzcGFjaW5nSW5wdXQubXVpKSB7XG4gICAgcmV0dXJuIHNwYWNpbmdJbnB1dDtcbiAgfSAvLyBNYXRlcmlhbCBEZXNpZ24gbGF5b3V0cyBhcmUgdmlzdWFsbHkgYmFsYW5jZWQuIE1vc3QgbWVhc3VyZW1lbnRzIGFsaWduIHRvIGFuIDhkcCBncmlkIGFwcGxpZWQsIHdoaWNoIGFsaWducyBib3RoIHNwYWNpbmcgYW5kIHRoZSBvdmVyYWxsIGxheW91dC5cbiAgLy8gU21hbGxlciBjb21wb25lbnRzLCBzdWNoIGFzIGljb25zIGFuZCB0eXBlLCBjYW4gYWxpZ24gdG8gYSA0ZHAgZ3JpZC5cbiAgLy8gaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vbGF5b3V0L3VuZGVyc3RhbmRpbmctbGF5b3V0Lmh0bWwjdXNhZ2VcblxuXG4gIHZhciB0cmFuc2Zvcm0gPSBjcmVhdGVVbmFyeVNwYWNpbmcoe1xuICAgIHNwYWNpbmc6IHNwYWNpbmdJbnB1dFxuICB9KTtcblxuICB2YXIgc3BhY2luZyA9IGZ1bmN0aW9uIHNwYWNpbmcoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoIShhcmdzLmxlbmd0aCA8PSA0KSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiTWF0ZXJpYWwtVUk6IFRvbyBtYW55IGFyZ3VtZW50cyBwcm92aWRlZCwgZXhwZWN0ZWQgYmV0d2VlbiAwIGFuZCA0LCBnb3QgXCIuY29uY2F0KGFyZ3MubGVuZ3RoKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdHJhbnNmb3JtKDEpO1xuICAgIH1cblxuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIHRyYW5zZm9ybShhcmdzWzBdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJncy5tYXAoZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gICAgICBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gYXJndW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIHZhciBvdXRwdXQgPSB0cmFuc2Zvcm0oYXJndW1lbnQpO1xuICAgICAgcmV0dXJuIHR5cGVvZiBvdXRwdXQgPT09ICdudW1iZXInID8gXCJcIi5jb25jYXQob3V0cHV0LCBcInB4XCIpIDogb3V0cHV0O1xuICAgIH0pLmpvaW4oJyAnKTtcbiAgfTsgLy8gQmFja3dhcmQgY29tcGF0aWJpbGl0eSwgdG8gcmVtb3ZlIGluIHY1LlxuXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNwYWNpbmcsICd1bml0Jywge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKCF3YXJuT25jZSB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihbJ01hdGVyaWFsLVVJOiB0aGVtZS5zcGFjaW5nLnVuaXQgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4nLCAnSXQgd2lsbCBiZSByZW1vdmVkIGluIHY1LicsICdZb3UgY2FuIHJlcGxhY2UgYHRoZW1lLnNwYWNpbmcudW5pdCAqIHlgIHdpdGggYHRoZW1lLnNwYWNpbmcoeSlgLicsICcnLCAnWW91IGNhbiB1c2UgdGhlIGBodHRwczovL2dpdGh1Yi5jb20vbXVpLW9yZy9tYXRlcmlhbC11aS90cmVlL21hc3Rlci9wYWNrYWdlcy9tYXRlcmlhbC11aS1jb2RlbW9kL1JFQURNRS5tZCN0aGVtZS1zcGFjaW5nLWFwaWAgbWlncmF0aW9uIGhlbHBlciB0byBtYWtlIHRoZSBwcm9jZXNzIHNtb290aGVyLiddLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdhcm5PbmNlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNwYWNpbmdJbnB1dDtcbiAgICB9XG4gIH0pO1xuICBzcGFjaW5nLm11aSA9IHRydWU7XG4gIHJldHVybiBzcGFjaW5nO1xufSIsImltcG9ydCB7IGNyZWF0ZVN0eWxlcyBhcyBjcmVhdGVTdHlsZXNPcmlnaW5hbCB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnOyAvLyBsZXQgd2Fybk9uY2UgPSBmYWxzZTtcbi8vIFRvIHJlbW92ZSBpbiB2NVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTdHlsZXMoc3R5bGVzKSB7XG4gIC8vIHdhcm5pbmcoXG4gIC8vICAgd2Fybk9uY2UsXG4gIC8vICAgW1xuICAvLyAgICAgJ01hdGVyaWFsLVVJOiBjcmVhdGVTdHlsZXMgZnJvbSBAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMgaXMgZGVwcmVjYXRlZC4nLFxuICAvLyAgICAgJ1BsZWFzZSB1c2UgQG1hdGVyaWFsLXVpL3N0eWxlcy9jcmVhdGVTdHlsZXMnLFxuICAvLyAgIF0uam9pbignXFxuJyksXG4gIC8vICk7XG4gIC8vIHdhcm5PbmNlID0gdHJ1ZTtcbiAgcmV0dXJuIGNyZWF0ZVN0eWxlc09yaWdpbmFsKHN0eWxlcyk7XG59IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgeyBkZWVwbWVyZ2UgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IGNyZWF0ZUJyZWFrcG9pbnRzIGZyb20gJy4vY3JlYXRlQnJlYWtwb2ludHMnO1xuaW1wb3J0IGNyZWF0ZU1peGlucyBmcm9tICcuL2NyZWF0ZU1peGlucyc7XG5pbXBvcnQgY3JlYXRlUGFsZXR0ZSBmcm9tICcuL2NyZWF0ZVBhbGV0dGUnO1xuaW1wb3J0IGNyZWF0ZVR5cG9ncmFwaHkgZnJvbSAnLi9jcmVhdGVUeXBvZ3JhcGh5JztcbmltcG9ydCBzaGFkb3dzIGZyb20gJy4vc2hhZG93cyc7XG5pbXBvcnQgc2hhcGUgZnJvbSAnLi9zaGFwZSc7XG5pbXBvcnQgY3JlYXRlU3BhY2luZyBmcm9tICcuL2NyZWF0ZVNwYWNpbmcnO1xuaW1wb3J0IHRyYW5zaXRpb25zIGZyb20gJy4vdHJhbnNpdGlvbnMnO1xuaW1wb3J0IHpJbmRleCBmcm9tICcuL3pJbmRleCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRoZW1lKCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgdmFyIF9vcHRpb25zJGJyZWFrcG9pbnRzID0gb3B0aW9ucy5icmVha3BvaW50cyxcbiAgICAgIGJyZWFrcG9pbnRzSW5wdXQgPSBfb3B0aW9ucyRicmVha3BvaW50cyA9PT0gdm9pZCAwID8ge30gOiBfb3B0aW9ucyRicmVha3BvaW50cyxcbiAgICAgIF9vcHRpb25zJG1peGlucyA9IG9wdGlvbnMubWl4aW5zLFxuICAgICAgbWl4aW5zSW5wdXQgPSBfb3B0aW9ucyRtaXhpbnMgPT09IHZvaWQgMCA/IHt9IDogX29wdGlvbnMkbWl4aW5zLFxuICAgICAgX29wdGlvbnMkcGFsZXR0ZSA9IG9wdGlvbnMucGFsZXR0ZSxcbiAgICAgIHBhbGV0dGVJbnB1dCA9IF9vcHRpb25zJHBhbGV0dGUgPT09IHZvaWQgMCA/IHt9IDogX29wdGlvbnMkcGFsZXR0ZSxcbiAgICAgIHNwYWNpbmdJbnB1dCA9IG9wdGlvbnMuc3BhY2luZyxcbiAgICAgIF9vcHRpb25zJHR5cG9ncmFwaHkgPSBvcHRpb25zLnR5cG9ncmFwaHksXG4gICAgICB0eXBvZ3JhcGh5SW5wdXQgPSBfb3B0aW9ucyR0eXBvZ3JhcGh5ID09PSB2b2lkIDAgPyB7fSA6IF9vcHRpb25zJHR5cG9ncmFwaHksXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvcHRpb25zLCBbXCJicmVha3BvaW50c1wiLCBcIm1peGluc1wiLCBcInBhbGV0dGVcIiwgXCJzcGFjaW5nXCIsIFwidHlwb2dyYXBoeVwiXSk7XG5cbiAgdmFyIHBhbGV0dGUgPSBjcmVhdGVQYWxldHRlKHBhbGV0dGVJbnB1dCk7XG4gIHZhciBicmVha3BvaW50cyA9IGNyZWF0ZUJyZWFrcG9pbnRzKGJyZWFrcG9pbnRzSW5wdXQpO1xuICB2YXIgc3BhY2luZyA9IGNyZWF0ZVNwYWNpbmcoc3BhY2luZ0lucHV0KTtcbiAgdmFyIG11aVRoZW1lID0gZGVlcG1lcmdlKHtcbiAgICBicmVha3BvaW50czogYnJlYWtwb2ludHMsXG4gICAgZGlyZWN0aW9uOiAnbHRyJyxcbiAgICBtaXhpbnM6IGNyZWF0ZU1peGlucyhicmVha3BvaW50cywgc3BhY2luZywgbWl4aW5zSW5wdXQpLFxuICAgIG92ZXJyaWRlczoge30sXG4gICAgLy8gSW5qZWN0IGN1c3RvbSBzdHlsZXNcbiAgICBwYWxldHRlOiBwYWxldHRlLFxuICAgIHByb3BzOiB7fSxcbiAgICAvLyBQcm92aWRlIGRlZmF1bHQgcHJvcHNcbiAgICBzaGFkb3dzOiBzaGFkb3dzLFxuICAgIHR5cG9ncmFwaHk6IGNyZWF0ZVR5cG9ncmFwaHkocGFsZXR0ZSwgdHlwb2dyYXBoeUlucHV0KSxcbiAgICBzcGFjaW5nOiBzcGFjaW5nLFxuICAgIHNoYXBlOiBzaGFwZSxcbiAgICB0cmFuc2l0aW9uczogdHJhbnNpdGlvbnMsXG4gICAgekluZGV4OiB6SW5kZXhcbiAgfSwgb3RoZXIpO1xuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIG11aVRoZW1lID0gYXJncy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgYXJndW1lbnQpIHtcbiAgICByZXR1cm4gZGVlcG1lcmdlKGFjYywgYXJndW1lbnQpO1xuICB9LCBtdWlUaGVtZSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YXIgcHNldWRvQ2xhc3NlcyA9IFsnY2hlY2tlZCcsICdkaXNhYmxlZCcsICdlcnJvcicsICdmb2N1c2VkJywgJ2ZvY3VzVmlzaWJsZScsICdyZXF1aXJlZCcsICdleHBhbmRlZCcsICdzZWxlY3RlZCddO1xuXG4gICAgdmFyIHRyYXZlcnNlID0gZnVuY3Rpb24gdHJhdmVyc2Uobm9kZSwgcGFyZW50S2V5KSB7XG4gICAgICB2YXIgZGVwdGggPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDE7XG4gICAgICB2YXIga2V5OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ3VhcmQtZm9yLWluLCBuby1yZXN0cmljdGVkLXN5bnRheFxuXG4gICAgICBmb3IgKGtleSBpbiBub2RlKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IG5vZGVba2V5XTtcblxuICAgICAgICBpZiAoZGVwdGggPT09IDEpIHtcbiAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoJ011aScpID09PSAwICYmIGNoaWxkKSB7XG4gICAgICAgICAgICB0cmF2ZXJzZShjaGlsZCwga2V5LCBkZXB0aCArIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChwc2V1ZG9DbGFzc2VzLmluZGV4T2Yoa2V5KSAhPT0gLTEgJiYgT2JqZWN0LmtleXMoY2hpbGQpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihbXCJNYXRlcmlhbC1VSTogVGhlIGBcIi5jb25jYXQocGFyZW50S2V5LCBcImAgY29tcG9uZW50IGluY3JlYXNlcyBcIikgKyBcInRoZSBDU1Mgc3BlY2lmaWNpdHkgb2YgdGhlIGBcIi5jb25jYXQoa2V5LCBcImAgaW50ZXJuYWwgc3RhdGUuXCIpLCAnWW91IGNhbiBub3Qgb3ZlcnJpZGUgaXQgbGlrZSB0aGlzOiAnLCBKU09OLnN0cmluZ2lmeShub2RlLCBudWxsLCAyKSwgJycsICdJbnN0ZWFkLCB5b3UgbmVlZCB0byB1c2UgdGhlICRydWxlTmFtZSBzeW50YXg6JywgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICByb290OiBfZGVmaW5lUHJvcGVydHkoe30sIFwiJiRcIi5jb25jYXQoa2V5KSwgY2hpbGQpXG4gICAgICAgICAgICB9LCBudWxsLCAyKSwgJycsICdodHRwczovL21hdGVyaWFsLXVpLmNvbS9yL3BzZXVkby1jbGFzc2VzLWd1aWRlJ10uam9pbignXFxuJykpO1xuICAgICAgICAgIH0gLy8gUmVtb3ZlIHRoZSBzdHlsZSB0byBwcmV2ZW50IGdsb2JhbCBjb25mbGljdHMuXG5cblxuICAgICAgICAgIG5vZGVba2V5XSA9IHt9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRyYXZlcnNlKG11aVRoZW1lLm92ZXJyaWRlcyk7XG4gIH1cblxuICByZXR1cm4gbXVpVGhlbWU7XG59XG5cbnZhciB3YXJuZWRPbmNlID0gZmFsc2U7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTXVpVGhlbWUoKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCF3YXJuZWRPbmNlKSB7XG4gICAgICB3YXJuZWRPbmNlID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoWydNYXRlcmlhbC1VSTogdGhlIGNyZWF0ZU11aVRoZW1lIGZ1bmN0aW9uIHdhcyByZW5hbWVkIHRvIGNyZWF0ZVRoZW1lLicsICcnLCBcIllvdSBzaG91bGQgdXNlIGBpbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydgXCJdLmpvaW4oJ1xcbicpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY3JlYXRlVGhlbWUuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xufVxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGhlbWU7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IHsgZGVlcG1lcmdlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcblxuZnVuY3Rpb24gcm91bmQodmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiAxZTUpIC8gMWU1O1xufVxuXG52YXIgd2FybmVkT25jZSA9IGZhbHNlO1xuXG5mdW5jdGlvbiByb3VuZFdpdGhEZXByZWNhdGlvbldhcm5pbmcodmFsdWUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXdhcm5lZE9uY2UpIHtcbiAgICAgIGNvbnNvbGUud2FybihbJ01hdGVyaWFsLVVJOiBUaGUgYHRoZW1lLnR5cG9ncmFwaHkucm91bmRgIGhlbHBlciBpcyBkZXByZWNhdGVkLicsICdIZWFkIHRvIGh0dHBzOi8vbWF0ZXJpYWwtdWkuY29tL3IvbWlncmF0aW9uLXY0LyN0aGVtZSBmb3IgYSBtaWdyYXRpb24gcGF0aC4nXS5qb2luKCdcXG4nKSk7XG4gICAgICB3YXJuZWRPbmNlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcm91bmQodmFsdWUpO1xufVxuXG52YXIgY2FzZUFsbENhcHMgPSB7XG4gIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnXG59O1xudmFyIGRlZmF1bHRGb250RmFtaWx5ID0gJ1wiUm9ib3RvXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZic7XG4vKipcclxuICogQHNlZSBAbGlua3todHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi90eXBvZ3JhcGh5L3RoZS10eXBlLXN5c3RlbS5odG1sfVxyXG4gKiBAc2VlIEBsaW5re2h0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL3R5cG9ncmFwaHkvdW5kZXJzdGFuZGluZy10eXBvZ3JhcGh5Lmh0bWx9XHJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUeXBvZ3JhcGh5KHBhbGV0dGUsIHR5cG9ncmFwaHkpIHtcbiAgdmFyIF9yZWYgPSB0eXBlb2YgdHlwb2dyYXBoeSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cG9ncmFwaHkocGFsZXR0ZSkgOiB0eXBvZ3JhcGh5LFxuICAgICAgX3JlZiRmb250RmFtaWx5ID0gX3JlZi5mb250RmFtaWx5LFxuICAgICAgZm9udEZhbWlseSA9IF9yZWYkZm9udEZhbWlseSA9PT0gdm9pZCAwID8gZGVmYXVsdEZvbnRGYW1pbHkgOiBfcmVmJGZvbnRGYW1pbHksXG4gICAgICBfcmVmJGZvbnRTaXplID0gX3JlZi5mb250U2l6ZSxcbiAgICAgIGZvbnRTaXplID0gX3JlZiRmb250U2l6ZSA9PT0gdm9pZCAwID8gMTQgOiBfcmVmJGZvbnRTaXplLFxuICAgICAgX3JlZiRmb250V2VpZ2h0TGlnaHQgPSBfcmVmLmZvbnRXZWlnaHRMaWdodCxcbiAgICAgIGZvbnRXZWlnaHRMaWdodCA9IF9yZWYkZm9udFdlaWdodExpZ2h0ID09PSB2b2lkIDAgPyAzMDAgOiBfcmVmJGZvbnRXZWlnaHRMaWdodCxcbiAgICAgIF9yZWYkZm9udFdlaWdodFJlZ3VsYSA9IF9yZWYuZm9udFdlaWdodFJlZ3VsYXIsXG4gICAgICBmb250V2VpZ2h0UmVndWxhciA9IF9yZWYkZm9udFdlaWdodFJlZ3VsYSA9PT0gdm9pZCAwID8gNDAwIDogX3JlZiRmb250V2VpZ2h0UmVndWxhLFxuICAgICAgX3JlZiRmb250V2VpZ2h0TWVkaXVtID0gX3JlZi5mb250V2VpZ2h0TWVkaXVtLFxuICAgICAgZm9udFdlaWdodE1lZGl1bSA9IF9yZWYkZm9udFdlaWdodE1lZGl1bSA9PT0gdm9pZCAwID8gNTAwIDogX3JlZiRmb250V2VpZ2h0TWVkaXVtLFxuICAgICAgX3JlZiRmb250V2VpZ2h0Qm9sZCA9IF9yZWYuZm9udFdlaWdodEJvbGQsXG4gICAgICBmb250V2VpZ2h0Qm9sZCA9IF9yZWYkZm9udFdlaWdodEJvbGQgPT09IHZvaWQgMCA/IDcwMCA6IF9yZWYkZm9udFdlaWdodEJvbGQsXG4gICAgICBfcmVmJGh0bWxGb250U2l6ZSA9IF9yZWYuaHRtbEZvbnRTaXplLFxuICAgICAgaHRtbEZvbnRTaXplID0gX3JlZiRodG1sRm9udFNpemUgPT09IHZvaWQgMCA/IDE2IDogX3JlZiRodG1sRm9udFNpemUsXG4gICAgICBhbGxWYXJpYW50cyA9IF9yZWYuYWxsVmFyaWFudHMsXG4gICAgICBweFRvUmVtMiA9IF9yZWYucHhUb1JlbSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcImZvbnRGYW1pbHlcIiwgXCJmb250U2l6ZVwiLCBcImZvbnRXZWlnaHRMaWdodFwiLCBcImZvbnRXZWlnaHRSZWd1bGFyXCIsIFwiZm9udFdlaWdodE1lZGl1bVwiLCBcImZvbnRXZWlnaHRCb2xkXCIsIFwiaHRtbEZvbnRTaXplXCIsIFwiYWxsVmFyaWFudHNcIiwgXCJweFRvUmVtXCJdKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICh0eXBlb2YgZm9udFNpemUgIT09ICdudW1iZXInKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdNYXRlcmlhbC1VSTogYGZvbnRTaXplYCBpcyByZXF1aXJlZCB0byBiZSBhIG51bWJlci4nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGh0bWxGb250U2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ01hdGVyaWFsLVVJOiBgaHRtbEZvbnRTaXplYCBpcyByZXF1aXJlZCB0byBiZSBhIG51bWJlci4nKTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29lZiA9IGZvbnRTaXplIC8gMTQ7XG5cbiAgdmFyIHB4VG9SZW0gPSBweFRvUmVtMiB8fCBmdW5jdGlvbiAoc2l6ZSkge1xuICAgIHJldHVybiBcIlwiLmNvbmNhdChzaXplIC8gaHRtbEZvbnRTaXplICogY29lZiwgXCJyZW1cIik7XG4gIH07XG5cbiAgdmFyIGJ1aWxkVmFyaWFudCA9IGZ1bmN0aW9uIGJ1aWxkVmFyaWFudChmb250V2VpZ2h0LCBzaXplLCBsaW5lSGVpZ2h0LCBsZXR0ZXJTcGFjaW5nLCBjYXNpbmcpIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgZm9udEZhbWlseTogZm9udEZhbWlseSxcbiAgICAgIGZvbnRXZWlnaHQ6IGZvbnRXZWlnaHQsXG4gICAgICBmb250U2l6ZTogcHhUb1JlbShzaXplKSxcbiAgICAgIC8vIFVuaXRsZXNzIGZvbGxvd2luZyBodHRwczovL21leWVyd2ViLmNvbS9lcmljL3Rob3VnaHRzLzIwMDYvMDIvMDgvdW5pdGxlc3MtbGluZS1oZWlnaHRzL1xuICAgICAgbGluZUhlaWdodDogbGluZUhlaWdodFxuICAgIH0sIGZvbnRGYW1pbHkgPT09IGRlZmF1bHRGb250RmFtaWx5ID8ge1xuICAgICAgbGV0dGVyU3BhY2luZzogXCJcIi5jb25jYXQocm91bmQobGV0dGVyU3BhY2luZyAvIHNpemUpLCBcImVtXCIpXG4gICAgfSA6IHt9LCBjYXNpbmcsIGFsbFZhcmlhbnRzKTtcbiAgfTtcblxuICB2YXIgdmFyaWFudHMgPSB7XG4gICAgaDE6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0TGlnaHQsIDk2LCAxLjE2NywgLTEuNSksXG4gICAgaDI6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0TGlnaHQsIDYwLCAxLjIsIC0wLjUpLFxuICAgIGgzOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodFJlZ3VsYXIsIDQ4LCAxLjE2NywgMCksXG4gICAgaDQ6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0UmVndWxhciwgMzQsIDEuMjM1LCAwLjI1KSxcbiAgICBoNTogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRSZWd1bGFyLCAyNCwgMS4zMzQsIDApLFxuICAgIGg2OiBidWlsZFZhcmlhbnQoZm9udFdlaWdodE1lZGl1bSwgMjAsIDEuNiwgMC4xNSksXG4gICAgc3VidGl0bGUxOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodFJlZ3VsYXIsIDE2LCAxLjc1LCAwLjE1KSxcbiAgICBzdWJ0aXRsZTI6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0TWVkaXVtLCAxNCwgMS41NywgMC4xKSxcbiAgICBib2R5MTogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRSZWd1bGFyLCAxNiwgMS41LCAwLjE1KSxcbiAgICBib2R5MjogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRSZWd1bGFyLCAxNCwgMS40MywgMC4xNSksXG4gICAgYnV0dG9uOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodE1lZGl1bSwgMTQsIDEuNzUsIDAuNCwgY2FzZUFsbENhcHMpLFxuICAgIGNhcHRpb246IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0UmVndWxhciwgMTIsIDEuNjYsIDAuNCksXG4gICAgb3ZlcmxpbmU6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0UmVndWxhciwgMTIsIDIuNjYsIDEsIGNhc2VBbGxDYXBzKVxuICB9O1xuICByZXR1cm4gZGVlcG1lcmdlKF9leHRlbmRzKHtcbiAgICBodG1sRm9udFNpemU6IGh0bWxGb250U2l6ZSxcbiAgICBweFRvUmVtOiBweFRvUmVtLFxuICAgIHJvdW5kOiByb3VuZFdpdGhEZXByZWNhdGlvbldhcm5pbmcsXG4gICAgLy8gVE9ETyB2NTogcmVtb3ZlXG4gICAgZm9udEZhbWlseTogZm9udEZhbWlseSxcbiAgICBmb250U2l6ZTogZm9udFNpemUsXG4gICAgZm9udFdlaWdodExpZ2h0OiBmb250V2VpZ2h0TGlnaHQsXG4gICAgZm9udFdlaWdodFJlZ3VsYXI6IGZvbnRXZWlnaHRSZWd1bGFyLFxuICAgIGZvbnRXZWlnaHRNZWRpdW06IGZvbnRXZWlnaHRNZWRpdW0sXG4gICAgZm9udFdlaWdodEJvbGQ6IGZvbnRXZWlnaHRCb2xkXG4gIH0sIHZhcmlhbnRzKSwgb3RoZXIsIHtcbiAgICBjbG9uZTogZmFsc2UgLy8gTm8gbmVlZCB0byBjbG9uZSBkZWVwXG5cbiAgfSk7XG59IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmV4cG9ydCBmdW5jdGlvbiBpc1VuaXRsZXNzKHZhbHVlKSB7XG4gIHJldHVybiBTdHJpbmcocGFyc2VGbG9hdCh2YWx1ZSkpLmxlbmd0aCA9PT0gU3RyaW5nKHZhbHVlKS5sZW5ndGg7XG59IC8vIFBvcnRlZCBmcm9tIENvbXBhc3Ncbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Db21wYXNzL2NvbXBhc3MvYmxvYi9tYXN0ZXIvY29yZS9zdHlsZXNoZWV0cy9jb21wYXNzL3R5cG9ncmFwaHkvX3VuaXRzLnNjc3Ncbi8vIEVtdWxhdGUgdGhlIHNhc3MgZnVuY3Rpb24gXCJ1bml0XCJcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVuaXQoaW5wdXQpIHtcbiAgcmV0dXJuIFN0cmluZyhpbnB1dCkubWF0Y2goL1tcXGQuXFwtK10qXFxzKiguKikvKVsxXSB8fCAnJztcbn0gLy8gRW11bGF0ZSB0aGUgc2FzcyBmdW5jdGlvbiBcInVuaXRsZXNzXCJcblxuZXhwb3J0IGZ1bmN0aW9uIHRvVW5pdGxlc3MobGVuZ3RoKSB7XG4gIHJldHVybiBwYXJzZUZsb2F0KGxlbmd0aCk7XG59IC8vIENvbnZlcnQgYW55IENTUyA8bGVuZ3RoPiBvciA8cGVyY2VudGFnZT4gdmFsdWUgdG8gYW55IGFub3RoZXIuXG4vLyBGcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9LeWxlQU1hdGhld3MvY29udmVydC1jc3MtbGVuZ3RoXG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0TGVuZ3RoKGJhc2VGb250U2l6ZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGxlbmd0aCwgdG9Vbml0KSB7XG4gICAgdmFyIGZyb21Vbml0ID0gZ2V0VW5pdChsZW5ndGgpOyAvLyBPcHRpbWl6ZSBmb3IgY2FzZXMgd2hlcmUgYGZyb21gIGFuZCBgdG9gIHVuaXRzIGFyZSBhY2NpZGVudGFsbHkgdGhlIHNhbWUuXG5cbiAgICBpZiAoZnJvbVVuaXQgPT09IHRvVW5pdCkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9IC8vIENvbnZlcnQgaW5wdXQgbGVuZ3RoIHRvIHBpeGVscy5cblxuXG4gICAgdmFyIHB4TGVuZ3RoID0gdG9Vbml0bGVzcyhsZW5ndGgpO1xuXG4gICAgaWYgKGZyb21Vbml0ICE9PSAncHgnKSB7XG4gICAgICBpZiAoZnJvbVVuaXQgPT09ICdlbScpIHtcbiAgICAgICAgcHhMZW5ndGggPSB0b1VuaXRsZXNzKGxlbmd0aCkgKiB0b1VuaXRsZXNzKGJhc2VGb250U2l6ZSk7XG4gICAgICB9IGVsc2UgaWYgKGZyb21Vbml0ID09PSAncmVtJykge1xuICAgICAgICBweExlbmd0aCA9IHRvVW5pdGxlc3MobGVuZ3RoKSAqIHRvVW5pdGxlc3MoYmFzZUZvbnRTaXplKTtcbiAgICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICAgIH1cbiAgICB9IC8vIENvbnZlcnQgbGVuZ3RoIGluIHBpeGVscyB0byB0aGUgb3V0cHV0IHVuaXRcblxuXG4gICAgdmFyIG91dHB1dExlbmd0aCA9IHB4TGVuZ3RoO1xuXG4gICAgaWYgKHRvVW5pdCAhPT0gJ3B4Jykge1xuICAgICAgaWYgKHRvVW5pdCA9PT0gJ2VtJykge1xuICAgICAgICBvdXRwdXRMZW5ndGggPSBweExlbmd0aCAvIHRvVW5pdGxlc3MoYmFzZUZvbnRTaXplKTtcbiAgICAgIH0gZWxzZSBpZiAodG9Vbml0ID09PSAncmVtJykge1xuICAgICAgICBvdXRwdXRMZW5ndGggPSBweExlbmd0aCAvIHRvVW5pdGxlc3MoYmFzZUZvbnRTaXplKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQob3V0cHV0TGVuZ3RoLnRvRml4ZWQoNSkpICsgdG9Vbml0O1xuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFsaWduUHJvcGVydHkoX3JlZikge1xuICB2YXIgc2l6ZSA9IF9yZWYuc2l6ZSxcbiAgICAgIGdyaWQgPSBfcmVmLmdyaWQ7XG4gIHZhciBzaXplQmVsb3cgPSBzaXplIC0gc2l6ZSAlIGdyaWQ7XG4gIHZhciBzaXplQWJvdmUgPSBzaXplQmVsb3cgKyBncmlkO1xuICByZXR1cm4gc2l6ZSAtIHNpemVCZWxvdyA8IHNpemVBYm92ZSAtIHNpemUgPyBzaXplQmVsb3cgOiBzaXplQWJvdmU7XG59IC8vIGZvbnRHcmlkIGZpbmRzIGEgbWluaW1hbCBncmlkIChpbiByZW0pIGZvciB0aGUgZm9udFNpemUgdmFsdWVzIHNvIHRoYXQgdGhlXG4vLyBsaW5lSGVpZ2h0IGZhbGxzIHVuZGVyIGEgeCBwaXhlbHMgZ3JpZCwgNHB4IGluIHRoZSBjYXNlIG9mIE1hdGVyaWFsIERlc2lnbixcbi8vIHdpdGhvdXQgY2hhbmdpbmcgdGhlIHJlbGF0aXZlIGxpbmUgaGVpZ2h0XG5cbmV4cG9ydCBmdW5jdGlvbiBmb250R3JpZChfcmVmMikge1xuICB2YXIgbGluZUhlaWdodCA9IF9yZWYyLmxpbmVIZWlnaHQsXG4gICAgICBwaXhlbHMgPSBfcmVmMi5waXhlbHMsXG4gICAgICBodG1sRm9udFNpemUgPSBfcmVmMi5odG1sRm9udFNpemU7XG4gIHJldHVybiBwaXhlbHMgLyAobGluZUhlaWdodCAqIGh0bWxGb250U2l6ZSk7XG59XG4vKipcclxuICogZ2VuZXJhdGUgYSByZXNwb25zaXZlIHZlcnNpb24gb2YgYSBnaXZlbiBDU1MgcHJvcGVydHlcclxuICogQGV4YW1wbGVcclxuICogcmVzcG9uc2l2ZVByb3BlcnR5KHtcclxuICogICBjc3NQcm9wZXJ0eTogJ2ZvbnRTaXplJyxcclxuICogICBtaW46IDE1LFxyXG4gKiAgIG1heDogMjAsXHJcbiAqICAgdW5pdDogJ3B4JyxcclxuICogICBicmVha3BvaW50czogWzMwMCwgNjAwXSxcclxuICogfSlcclxuICpcclxuICogLy8gdGhpcyByZXR1cm5zXHJcbiAqXHJcbiAqIHtcclxuICogICBmb250U2l6ZTogJzE1cHgnLFxyXG4gKiAgICdAbWVkaWEgKG1pbi13aWR0aDozMDBweCknOiB7XHJcbiAqICAgICBmb250U2l6ZTogJzE3LjVweCcsXHJcbiAqICAgfSxcclxuICogICAnQG1lZGlhIChtaW4td2lkdGg6NjAwcHgpJzoge1xyXG4gKiAgICAgZm9udFNpemU6ICcyMHB4JyxcclxuICogICB9LFxyXG4gKiB9XHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcclxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5jc3NQcm9wZXJ0eSAtIFRoZSBDU1MgcHJvcGVydHkgdG8gYmUgbWFkZSByZXNwb25zaXZlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBwYXJhbXMubWluIC0gVGhlIHNtYWxsZXN0IHZhbHVlIG9mIHRoZSBDU1MgcHJvcGVydHlcclxuICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtcy5tYXggLSBUaGUgbGFyZ2VzdCB2YWx1ZSBvZiB0aGUgQ1NTIHByb3BlcnR5XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcGFyYW1zLnVuaXRdIC0gVGhlIHVuaXQgdG8gYmUgdXNlZCBmb3IgdGhlIENTUyBwcm9wZXJ0eVxyXG4gKiBAcGFyYW0ge0FycmF5Lm51bWJlcn0gW3BhcmFtcy5icmVha3BvaW50c10gIC0gQW4gYXJyYXkgb2YgYnJlYWtwb2ludHNcclxuICogQHBhcmFtIHtudW1iZXJ9IFtwYXJhbXMuYWxpZ25TdGVwXSAtIFJvdW5kIHNjYWxlZCB2YWx1ZSB0byBmYWxsIHVuZGVyIHRoaXMgZ3JpZFxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSByZXNwb25zaXZlIHN0eWxlcyBmb3Ige3BhcmFtcy5jc3NQcm9wZXJ0eX1cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByZXNwb25zaXZlUHJvcGVydHkoX3JlZjMpIHtcbiAgdmFyIGNzc1Byb3BlcnR5ID0gX3JlZjMuY3NzUHJvcGVydHksXG4gICAgICBtaW4gPSBfcmVmMy5taW4sXG4gICAgICBtYXggPSBfcmVmMy5tYXgsXG4gICAgICBfcmVmMyR1bml0ID0gX3JlZjMudW5pdCxcbiAgICAgIHVuaXQgPSBfcmVmMyR1bml0ID09PSB2b2lkIDAgPyAncmVtJyA6IF9yZWYzJHVuaXQsXG4gICAgICBfcmVmMyRicmVha3BvaW50cyA9IF9yZWYzLmJyZWFrcG9pbnRzLFxuICAgICAgYnJlYWtwb2ludHMgPSBfcmVmMyRicmVha3BvaW50cyA9PT0gdm9pZCAwID8gWzYwMCwgOTYwLCAxMjgwXSA6IF9yZWYzJGJyZWFrcG9pbnRzLFxuICAgICAgX3JlZjMkdHJhbnNmb3JtID0gX3JlZjMudHJhbnNmb3JtLFxuICAgICAgdHJhbnNmb3JtID0gX3JlZjMkdHJhbnNmb3JtID09PSB2b2lkIDAgPyBudWxsIDogX3JlZjMkdHJhbnNmb3JtO1xuXG4gIHZhciBvdXRwdXQgPSBfZGVmaW5lUHJvcGVydHkoe30sIGNzc1Byb3BlcnR5LCBcIlwiLmNvbmNhdChtaW4pLmNvbmNhdCh1bml0KSk7XG5cbiAgdmFyIGZhY3RvciA9IChtYXggLSBtaW4pIC8gYnJlYWtwb2ludHNbYnJlYWtwb2ludHMubGVuZ3RoIC0gMV07XG4gIGJyZWFrcG9pbnRzLmZvckVhY2goZnVuY3Rpb24gKGJyZWFrcG9pbnQpIHtcbiAgICB2YXIgdmFsdWUgPSBtaW4gKyBmYWN0b3IgKiBicmVha3BvaW50O1xuXG4gICAgaWYgKHRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSB0cmFuc2Zvcm0odmFsdWUpO1xuICAgIH1cblxuICAgIG91dHB1dFtcIkBtZWRpYSAobWluLXdpZHRoOlwiLmNvbmNhdChicmVha3BvaW50LCBcInB4KVwiKV0gPSBfZGVmaW5lUHJvcGVydHkoe30sIGNzc1Byb3BlcnR5LCBcIlwiLmNvbmNhdChNYXRoLnJvdW5kKHZhbHVlICogMTAwMDApIC8gMTAwMDApLmNvbmNhdCh1bml0KSk7XG4gIH0pO1xuICByZXR1cm4gb3V0cHV0O1xufSIsImltcG9ydCBjcmVhdGVUaGVtZSBmcm9tICcuL2NyZWF0ZVRoZW1lJztcbnZhciBkZWZhdWx0VGhlbWUgPSBjcmVhdGVUaGVtZSgpO1xuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdFRoZW1lOyIsImV4cG9ydCAqIGZyb20gJy4vY29sb3JNYW5pcHVsYXRvcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNyZWF0ZVRoZW1lLCBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJy4vY3JlYXRlVGhlbWUnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgdW5zdGFibGVfY3JlYXRlTXVpU3RyaWN0TW9kZVRoZW1lIH0gZnJvbSAnLi9jcmVhdGVNdWlTdHJpY3RNb2RlVGhlbWUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjcmVhdGVTdHlsZXMgfSBmcm9tICcuL2NyZWF0ZVN0eWxlcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1ha2VTdHlsZXMgfSBmcm9tICcuL21ha2VTdHlsZXMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyByZXNwb25zaXZlRm9udFNpemVzIH0gZnJvbSAnLi9yZXNwb25zaXZlRm9udFNpemVzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3R5bGVkIH0gZnJvbSAnLi9zdHlsZWQnO1xuZXhwb3J0ICogZnJvbSAnLi90cmFuc2l0aW9ucyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZVRoZW1lIH0gZnJvbSAnLi91c2VUaGVtZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhTdHlsZXMgfSBmcm9tICcuL3dpdGhTdHlsZXMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoVGhlbWUgfSBmcm9tICcuL3dpdGhUaGVtZSc7XG5leHBvcnQgeyBjcmVhdGVHZW5lcmF0ZUNsYXNzTmFtZSwganNzUHJlc2V0LCBTZXJ2ZXJTdHlsZVNoZWV0cywgU3R5bGVzUHJvdmlkZXIsIFRoZW1lUHJvdmlkZXIgYXMgTXVpVGhlbWVQcm92aWRlciwgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyBhcyBtYWtlU3R5bGVzV2l0aG91dERlZmF1bHQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCBkZWZhdWx0VGhlbWUgZnJvbSAnLi9kZWZhdWx0VGhlbWUnO1xuXG5mdW5jdGlvbiBtYWtlU3R5bGVzKHN0eWxlc09yQ3JlYXRvcikge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHJldHVybiBtYWtlU3R5bGVzV2l0aG91dERlZmF1bHQoc3R5bGVzT3JDcmVhdG9yLCBfZXh0ZW5kcyh7XG4gICAgZGVmYXVsdFRoZW1lOiBkZWZhdWx0VGhlbWVcbiAgfSwgb3B0aW9ucykpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtYWtlU3R5bGVzOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IHsgZm9ybWF0TXVpRXJyb3JNZXNzYWdlIGFzIF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3V0aWxzXCI7XG5pbXBvcnQgeyBpc1VuaXRsZXNzLCBjb252ZXJ0TGVuZ3RoLCByZXNwb25zaXZlUHJvcGVydHksIGFsaWduUHJvcGVydHksIGZvbnRHcmlkIH0gZnJvbSAnLi9jc3NVdGlscyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNwb25zaXZlRm9udFNpemVzKHRoZW1lSW5wdXQpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgX29wdGlvbnMkYnJlYWtwb2ludHMgPSBvcHRpb25zLmJyZWFrcG9pbnRzLFxuICAgICAgYnJlYWtwb2ludHMgPSBfb3B0aW9ucyRicmVha3BvaW50cyA9PT0gdm9pZCAwID8gWydzbScsICdtZCcsICdsZyddIDogX29wdGlvbnMkYnJlYWtwb2ludHMsXG4gICAgICBfb3B0aW9ucyRkaXNhYmxlQWxpZ24gPSBvcHRpb25zLmRpc2FibGVBbGlnbixcbiAgICAgIGRpc2FibGVBbGlnbiA9IF9vcHRpb25zJGRpc2FibGVBbGlnbiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRkaXNhYmxlQWxpZ24sXG4gICAgICBfb3B0aW9ucyRmYWN0b3IgPSBvcHRpb25zLmZhY3RvcixcbiAgICAgIGZhY3RvciA9IF9vcHRpb25zJGZhY3RvciA9PT0gdm9pZCAwID8gMiA6IF9vcHRpb25zJGZhY3RvcixcbiAgICAgIF9vcHRpb25zJHZhcmlhbnRzID0gb3B0aW9ucy52YXJpYW50cyxcbiAgICAgIHZhcmlhbnRzID0gX29wdGlvbnMkdmFyaWFudHMgPT09IHZvaWQgMCA/IFsnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnLCAnc3VidGl0bGUxJywgJ3N1YnRpdGxlMicsICdib2R5MScsICdib2R5MicsICdjYXB0aW9uJywgJ2J1dHRvbicsICdvdmVybGluZSddIDogX29wdGlvbnMkdmFyaWFudHM7XG5cbiAgdmFyIHRoZW1lID0gX2V4dGVuZHMoe30sIHRoZW1lSW5wdXQpO1xuXG4gIHRoZW1lLnR5cG9ncmFwaHkgPSBfZXh0ZW5kcyh7fSwgdGhlbWUudHlwb2dyYXBoeSk7XG4gIHZhciB0eXBvZ3JhcGh5ID0gdGhlbWUudHlwb2dyYXBoeTsgLy8gQ29udmVydCBiZXR3ZWVuIGNzcyBsZW5ndGhzIGUuZy4gZW0tPnB4IG9yIHB4LT5yZW1cbiAgLy8gU2V0IHRoZSBiYXNlRm9udFNpemUgZm9yIHlvdXIgcHJvamVjdC4gRGVmYXVsdHMgdG8gMTZweCAoYWxzbyB0aGUgYnJvd3NlciBkZWZhdWx0KS5cblxuICB2YXIgY29udmVydCA9IGNvbnZlcnRMZW5ndGgodHlwb2dyYXBoeS5odG1sRm9udFNpemUpO1xuICB2YXIgYnJlYWtwb2ludFZhbHVlcyA9IGJyZWFrcG9pbnRzLm1hcChmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB0aGVtZS5icmVha3BvaW50cy52YWx1ZXNbeF07XG4gIH0pO1xuICB2YXJpYW50cy5mb3JFYWNoKGZ1bmN0aW9uICh2YXJpYW50KSB7XG4gICAgdmFyIHN0eWxlID0gdHlwb2dyYXBoeVt2YXJpYW50XTtcbiAgICB2YXIgcmVtRm9udFNpemUgPSBwYXJzZUZsb2F0KGNvbnZlcnQoc3R5bGUuZm9udFNpemUsICdyZW0nKSk7XG5cbiAgICBpZiAocmVtRm9udFNpemUgPD0gMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBtYXhGb250U2l6ZSA9IHJlbUZvbnRTaXplO1xuICAgIHZhciBtaW5Gb250U2l6ZSA9IDEgKyAobWF4Rm9udFNpemUgLSAxKSAvIGZhY3RvcjtcbiAgICB2YXIgbGluZUhlaWdodCA9IHN0eWxlLmxpbmVIZWlnaHQ7XG5cbiAgICBpZiAoIWlzVW5pdGxlc3MobGluZUhlaWdodCkgJiYgIWRpc2FibGVBbGlnbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFwiTWF0ZXJpYWwtVUk6IFVuc3VwcG9ydGVkIG5vbi11bml0bGVzcyBsaW5lIGhlaWdodCB3aXRoIGdyaWQgYWxpZ25tZW50LlxcblVzZSB1bml0bGVzcyBsaW5lIGhlaWdodHMgaW5zdGVhZC5cIiA6IF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UoNikpO1xuICAgIH1cblxuICAgIGlmICghaXNVbml0bGVzcyhsaW5lSGVpZ2h0KSkge1xuICAgICAgLy8gbWFrZSBpdCB1bml0bGVzc1xuICAgICAgbGluZUhlaWdodCA9IHBhcnNlRmxvYXQoY29udmVydChsaW5lSGVpZ2h0LCAncmVtJykpIC8gcGFyc2VGbG9hdChyZW1Gb250U2l6ZSk7XG4gICAgfVxuXG4gICAgdmFyIHRyYW5zZm9ybSA9IG51bGw7XG5cbiAgICBpZiAoIWRpc2FibGVBbGlnbikge1xuICAgICAgdHJhbnNmb3JtID0gZnVuY3Rpb24gdHJhbnNmb3JtKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBhbGlnblByb3BlcnR5KHtcbiAgICAgICAgICBzaXplOiB2YWx1ZSxcbiAgICAgICAgICBncmlkOiBmb250R3JpZCh7XG4gICAgICAgICAgICBwaXhlbHM6IDQsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBsaW5lSGVpZ2h0LFxuICAgICAgICAgICAgaHRtbEZvbnRTaXplOiB0eXBvZ3JhcGh5Lmh0bWxGb250U2l6ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICB0eXBvZ3JhcGh5W3ZhcmlhbnRdID0gX2V4dGVuZHMoe30sIHN0eWxlLCByZXNwb25zaXZlUHJvcGVydHkoe1xuICAgICAgY3NzUHJvcGVydHk6ICdmb250U2l6ZScsXG4gICAgICBtaW46IG1pbkZvbnRTaXplLFxuICAgICAgbWF4OiBtYXhGb250U2l6ZSxcbiAgICAgIHVuaXQ6ICdyZW0nLFxuICAgICAgYnJlYWtwb2ludHM6IGJyZWFrcG9pbnRWYWx1ZXMsXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybVxuICAgIH0pKTtcbiAgfSk7XG4gIHJldHVybiB0aGVtZTtcbn0iLCJ2YXIgc2hhZG93S2V5VW1icmFPcGFjaXR5ID0gMC4yO1xudmFyIHNoYWRvd0tleVBlbnVtYnJhT3BhY2l0eSA9IDAuMTQ7XG52YXIgc2hhZG93QW1iaWVudFNoYWRvd09wYWNpdHkgPSAwLjEyO1xuXG5mdW5jdGlvbiBjcmVhdGVTaGFkb3coKSB7XG4gIHJldHVybiBbXCJcIi5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCA8PSAwID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzBdLCBcInB4IFwiKS5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCA8PSAxID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzFdLCBcInB4IFwiKS5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCA8PSAyID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzJdLCBcInB4IFwiKS5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCA8PSAzID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzNdLCBcInB4IHJnYmEoMCwwLDAsXCIpLmNvbmNhdChzaGFkb3dLZXlVbWJyYU9wYWNpdHksIFwiKVwiKSwgXCJcIi5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCA8PSA0ID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzRdLCBcInB4IFwiKS5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCA8PSA1ID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzVdLCBcInB4IFwiKS5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCA8PSA2ID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzZdLCBcInB4IFwiKS5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCA8PSA3ID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzddLCBcInB4IHJnYmEoMCwwLDAsXCIpLmNvbmNhdChzaGFkb3dLZXlQZW51bWJyYU9wYWNpdHksIFwiKVwiKSwgXCJcIi5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCA8PSA4ID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzhdLCBcInB4IFwiKS5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCA8PSA5ID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzldLCBcInB4IFwiKS5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCA8PSAxMCA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1sxMF0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDExID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzExXSwgXCJweCByZ2JhKDAsMCwwLFwiKS5jb25jYXQoc2hhZG93QW1iaWVudFNoYWRvd09wYWNpdHksIFwiKVwiKV0uam9pbignLCcpO1xufSAvLyBWYWx1ZXMgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL2JlODc0N2Y5NDU3NDY2OWNiNWU3YWRkMWE3YzU0ZmE0MWE4OWNlYzcvcGFja2FnZXMvbWRjLWVsZXZhdGlvbi9fdmFyaWFibGVzLnNjc3NcblxuXG52YXIgc2hhZG93cyA9IFsnbm9uZScsIGNyZWF0ZVNoYWRvdygwLCAyLCAxLCAtMSwgMCwgMSwgMSwgMCwgMCwgMSwgMywgMCksIGNyZWF0ZVNoYWRvdygwLCAzLCAxLCAtMiwgMCwgMiwgMiwgMCwgMCwgMSwgNSwgMCksIGNyZWF0ZVNoYWRvdygwLCAzLCAzLCAtMiwgMCwgMywgNCwgMCwgMCwgMSwgOCwgMCksIGNyZWF0ZVNoYWRvdygwLCAyLCA0LCAtMSwgMCwgNCwgNSwgMCwgMCwgMSwgMTAsIDApLCBjcmVhdGVTaGFkb3coMCwgMywgNSwgLTEsIDAsIDUsIDgsIDAsIDAsIDEsIDE0LCAwKSwgY3JlYXRlU2hhZG93KDAsIDMsIDUsIC0xLCAwLCA2LCAxMCwgMCwgMCwgMSwgMTgsIDApLCBjcmVhdGVTaGFkb3coMCwgNCwgNSwgLTIsIDAsIDcsIDEwLCAxLCAwLCAyLCAxNiwgMSksIGNyZWF0ZVNoYWRvdygwLCA1LCA1LCAtMywgMCwgOCwgMTAsIDEsIDAsIDMsIDE0LCAyKSwgY3JlYXRlU2hhZG93KDAsIDUsIDYsIC0zLCAwLCA5LCAxMiwgMSwgMCwgMywgMTYsIDIpLCBjcmVhdGVTaGFkb3coMCwgNiwgNiwgLTMsIDAsIDEwLCAxNCwgMSwgMCwgNCwgMTgsIDMpLCBjcmVhdGVTaGFkb3coMCwgNiwgNywgLTQsIDAsIDExLCAxNSwgMSwgMCwgNCwgMjAsIDMpLCBjcmVhdGVTaGFkb3coMCwgNywgOCwgLTQsIDAsIDEyLCAxNywgMiwgMCwgNSwgMjIsIDQpLCBjcmVhdGVTaGFkb3coMCwgNywgOCwgLTQsIDAsIDEzLCAxOSwgMiwgMCwgNSwgMjQsIDQpLCBjcmVhdGVTaGFkb3coMCwgNywgOSwgLTQsIDAsIDE0LCAyMSwgMiwgMCwgNSwgMjYsIDQpLCBjcmVhdGVTaGFkb3coMCwgOCwgOSwgLTUsIDAsIDE1LCAyMiwgMiwgMCwgNiwgMjgsIDUpLCBjcmVhdGVTaGFkb3coMCwgOCwgMTAsIC01LCAwLCAxNiwgMjQsIDIsIDAsIDYsIDMwLCA1KSwgY3JlYXRlU2hhZG93KDAsIDgsIDExLCAtNSwgMCwgMTcsIDI2LCAyLCAwLCA2LCAzMiwgNSksIGNyZWF0ZVNoYWRvdygwLCA5LCAxMSwgLTUsIDAsIDE4LCAyOCwgMiwgMCwgNywgMzQsIDYpLCBjcmVhdGVTaGFkb3coMCwgOSwgMTIsIC02LCAwLCAxOSwgMjksIDIsIDAsIDcsIDM2LCA2KSwgY3JlYXRlU2hhZG93KDAsIDEwLCAxMywgLTYsIDAsIDIwLCAzMSwgMywgMCwgOCwgMzgsIDcpLCBjcmVhdGVTaGFkb3coMCwgMTAsIDEzLCAtNiwgMCwgMjEsIDMzLCAzLCAwLCA4LCA0MCwgNyksIGNyZWF0ZVNoYWRvdygwLCAxMCwgMTQsIC02LCAwLCAyMiwgMzUsIDMsIDAsIDgsIDQyLCA3KSwgY3JlYXRlU2hhZG93KDAsIDExLCAxNCwgLTcsIDAsIDIzLCAzNiwgMywgMCwgOSwgNDQsIDgpLCBjcmVhdGVTaGFkb3coMCwgMTEsIDE1LCAtNywgMCwgMjQsIDM4LCAzLCAwLCA5LCA0NiwgOCldO1xuZXhwb3J0IGRlZmF1bHQgc2hhZG93czsiLCJ2YXIgc2hhcGUgPSB7XG4gIGJvcmRlclJhZGl1czogNFxufTtcbmV4cG9ydCBkZWZhdWx0IHNoYXBlOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IHsgc3R5bGVkIGFzIHN0eWxlZFdpdGhvdXREZWZhdWx0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XG5pbXBvcnQgZGVmYXVsdFRoZW1lIGZyb20gJy4vZGVmYXVsdFRoZW1lJztcblxudmFyIHN0eWxlZCA9IGZ1bmN0aW9uIHN0eWxlZChDb21wb25lbnQpIHtcbiAgdmFyIGNvbXBvbmVudENyZWF0b3IgPSBzdHlsZWRXaXRob3V0RGVmYXVsdChDb21wb25lbnQpO1xuICByZXR1cm4gZnVuY3Rpb24gKHN0eWxlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudENyZWF0b3Ioc3R5bGUsIF9leHRlbmRzKHtcbiAgICAgIGRlZmF1bHRUaGVtZTogZGVmYXVsdFRoZW1lXG4gICAgfSwgb3B0aW9ucykpO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkOyIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG4vLyBGb2xsb3cgaHR0cHM6Ly9tYXRlcmlhbC5nb29nbGUuY29tL21vdGlvbi9kdXJhdGlvbi1lYXNpbmcuaHRtbCNkdXJhdGlvbi1lYXNpbmctbmF0dXJhbC1lYXNpbmctY3VydmVzXG4vLyB0byBsZWFybiB0aGUgY29udGV4dCBpbiB3aGljaCBlYWNoIGVhc2luZyBzaG91bGQgYmUgdXNlZC5cbmV4cG9ydCB2YXIgZWFzaW5nID0ge1xuICAvLyBUaGlzIGlzIHRoZSBtb3N0IGNvbW1vbiBlYXNpbmcgY3VydmUuXG4gIGVhc2VJbk91dDogJ2N1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSknLFxuICAvLyBPYmplY3RzIGVudGVyIHRoZSBzY3JlZW4gYXQgZnVsbCB2ZWxvY2l0eSBmcm9tIG9mZi1zY3JlZW4gYW5kXG4gIC8vIHNsb3dseSBkZWNlbGVyYXRlIHRvIGEgcmVzdGluZyBwb2ludC5cbiAgZWFzZU91dDogJ2N1YmljLWJlemllcigwLjAsIDAsIDAuMiwgMSknLFxuICAvLyBPYmplY3RzIGxlYXZlIHRoZSBzY3JlZW4gYXQgZnVsbCB2ZWxvY2l0eS4gVGhleSBkbyBub3QgZGVjZWxlcmF0ZSB3aGVuIG9mZi1zY3JlZW4uXG4gIGVhc2VJbjogJ2N1YmljLWJlemllcigwLjQsIDAsIDEsIDEpJyxcbiAgLy8gVGhlIHNoYXJwIGN1cnZlIGlzIHVzZWQgYnkgb2JqZWN0cyB0aGF0IG1heSByZXR1cm4gdG8gdGhlIHNjcmVlbiBhdCBhbnkgdGltZS5cbiAgc2hhcnA6ICdjdWJpYy1iZXppZXIoMC40LCAwLCAwLjYsIDEpJ1xufTsgLy8gRm9sbG93IGh0dHBzOi8vbWF0ZXJpYWwuaW8vZ3VpZGVsaW5lcy9tb3Rpb24vZHVyYXRpb24tZWFzaW5nLmh0bWwjZHVyYXRpb24tZWFzaW5nLWNvbW1vbi1kdXJhdGlvbnNcbi8vIHRvIGxlYXJuIHdoZW4gdXNlIHdoYXQgdGltaW5nXG5cbmV4cG9ydCB2YXIgZHVyYXRpb24gPSB7XG4gIHNob3J0ZXN0OiAxNTAsXG4gIHNob3J0ZXI6IDIwMCxcbiAgc2hvcnQ6IDI1MCxcbiAgLy8gbW9zdCBiYXNpYyByZWNvbW1lbmRlZCB0aW1pbmdcbiAgc3RhbmRhcmQ6IDMwMCxcbiAgLy8gdGhpcyBpcyB0byBiZSB1c2VkIGluIGNvbXBsZXggYW5pbWF0aW9uc1xuICBjb21wbGV4OiAzNzUsXG4gIC8vIHJlY29tbWVuZGVkIHdoZW4gc29tZXRoaW5nIGlzIGVudGVyaW5nIHNjcmVlblxuICBlbnRlcmluZ1NjcmVlbjogMjI1LFxuICAvLyByZWNvbW1lbmRlZCB3aGVuIHNvbWV0aGluZyBpcyBsZWF2aW5nIHNjcmVlblxuICBsZWF2aW5nU2NyZWVuOiAxOTVcbn07XG5cbmZ1bmN0aW9uIGZvcm1hdE1zKG1pbGxpc2Vjb25kcykge1xuICByZXR1cm4gXCJcIi5jb25jYXQoTWF0aC5yb3VuZChtaWxsaXNlY29uZHMpLCBcIm1zXCIpO1xufVxuLyoqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfEFycmF5fSBwcm9wc1xyXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyYW1cclxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtLnByb3BcclxuICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtLmR1cmF0aW9uXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbS5lYXNpbmdcclxuICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtLmRlbGF5XHJcbiAqL1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZWFzaW5nOiBlYXNpbmcsXG4gIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbJ2FsbCddO1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgIHZhciBfb3B0aW9ucyRkdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb24sXG4gICAgICAgIGR1cmF0aW9uT3B0aW9uID0gX29wdGlvbnMkZHVyYXRpb24gPT09IHZvaWQgMCA/IGR1cmF0aW9uLnN0YW5kYXJkIDogX29wdGlvbnMkZHVyYXRpb24sXG4gICAgICAgIF9vcHRpb25zJGVhc2luZyA9IG9wdGlvbnMuZWFzaW5nLFxuICAgICAgICBlYXNpbmdPcHRpb24gPSBfb3B0aW9ucyRlYXNpbmcgPT09IHZvaWQgMCA/IGVhc2luZy5lYXNlSW5PdXQgOiBfb3B0aW9ucyRlYXNpbmcsXG4gICAgICAgIF9vcHRpb25zJGRlbGF5ID0gb3B0aW9ucy5kZWxheSxcbiAgICAgICAgZGVsYXkgPSBfb3B0aW9ucyRkZWxheSA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJGRlbGF5LFxuICAgICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvcHRpb25zLCBbXCJkdXJhdGlvblwiLCBcImVhc2luZ1wiLCBcImRlbGF5XCJdKTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgaXNTdHJpbmcgPSBmdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbiAgICAgIH07XG5cbiAgICAgIHZhciBpc051bWJlciA9IGZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdCh2YWx1ZSkpO1xuICAgICAgfTtcblxuICAgICAgaWYgKCFpc1N0cmluZyhwcm9wcykgJiYgIUFycmF5LmlzQXJyYXkocHJvcHMpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ01hdGVyaWFsLVVJOiBBcmd1bWVudCBcInByb3BzXCIgbXVzdCBiZSBhIHN0cmluZyBvciBBcnJheS4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc051bWJlcihkdXJhdGlvbk9wdGlvbikgJiYgIWlzU3RyaW5nKGR1cmF0aW9uT3B0aW9uKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiTWF0ZXJpYWwtVUk6IEFyZ3VtZW50IFxcXCJkdXJhdGlvblxcXCIgbXVzdCBiZSBhIG51bWJlciBvciBhIHN0cmluZyBidXQgZm91bmQgXCIuY29uY2F0KGR1cmF0aW9uT3B0aW9uLCBcIi5cIikpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzU3RyaW5nKGVhc2luZ09wdGlvbikpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignTWF0ZXJpYWwtVUk6IEFyZ3VtZW50IFwiZWFzaW5nXCIgbXVzdCBiZSBhIHN0cmluZy4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc051bWJlcihkZWxheSkgJiYgIWlzU3RyaW5nKGRlbGF5KSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdNYXRlcmlhbC1VSTogQXJndW1lbnQgXCJkZWxheVwiIG11c3QgYmUgYSBudW1iZXIgb3IgYSBzdHJpbmcuJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChPYmplY3Qua2V5cyhvdGhlcikubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNYXRlcmlhbC1VSTogVW5yZWNvZ25pemVkIGFyZ3VtZW50KHMpIFtcIi5jb25jYXQoT2JqZWN0LmtleXMob3RoZXIpLmpvaW4oJywnKSwgXCJdLlwiKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChBcnJheS5pc0FycmF5KHByb3BzKSA/IHByb3BzIDogW3Byb3BzXSkubWFwKGZ1bmN0aW9uIChhbmltYXRlZFByb3ApIHtcbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdChhbmltYXRlZFByb3AsIFwiIFwiKS5jb25jYXQodHlwZW9mIGR1cmF0aW9uT3B0aW9uID09PSAnc3RyaW5nJyA/IGR1cmF0aW9uT3B0aW9uIDogZm9ybWF0TXMoZHVyYXRpb25PcHRpb24pLCBcIiBcIikuY29uY2F0KGVhc2luZ09wdGlvbiwgXCIgXCIpLmNvbmNhdCh0eXBlb2YgZGVsYXkgPT09ICdzdHJpbmcnID8gZGVsYXkgOiBmb3JtYXRNcyhkZWxheSkpO1xuICAgIH0pLmpvaW4oJywnKTtcbiAgfSxcbiAgZ2V0QXV0b0hlaWdodER1cmF0aW9uOiBmdW5jdGlvbiBnZXRBdXRvSGVpZ2h0RHVyYXRpb24oaGVpZ2h0KSB7XG4gICAgaWYgKCFoZWlnaHQpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHZhciBjb25zdGFudCA9IGhlaWdodCAvIDM2OyAvLyBodHRwczovL3d3dy53b2xmcmFtYWxwaGEuY29tL2lucHV0Lz9pPSg0KyUyQisxNSsqKyh4KyUyRiszNispKyoqKzAuMjUrJTJCKyh4KyUyRiszNikrJTJGKzUpKyorMTBcblxuICAgIHJldHVybiBNYXRoLnJvdW5kKCg0ICsgMTUgKiBNYXRoLnBvdyhjb25zdGFudCwgMC4yNSkgKyBjb25zdGFudCAvIDUpICogMTApO1xuICB9XG59OyIsImltcG9ydCB7IHVzZVRoZW1lIGFzIHVzZVRoZW1lV2l0aG91dERlZmF1bHQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZGVmYXVsdFRoZW1lIGZyb20gJy4vZGVmYXVsdFRoZW1lJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVRoZW1lKCkge1xuICB2YXIgdGhlbWUgPSB1c2VUaGVtZVdpdGhvdXREZWZhdWx0KCkgfHwgZGVmYXVsdFRoZW1lO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgUmVhY3QudXNlRGVidWdWYWx1ZSh0aGVtZSk7XG4gIH1cblxuICByZXR1cm4gdGhlbWU7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIGFzIHdpdGhTdHlsZXNXaXRob3V0RGVmYXVsdCB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IGRlZmF1bHRUaGVtZSBmcm9tICcuL2RlZmF1bHRUaGVtZSc7XG5cbmZ1bmN0aW9uIHdpdGhTdHlsZXMoc3R5bGVzT3JDcmVhdG9yLCBvcHRpb25zKSB7XG4gIHJldHVybiB3aXRoU3R5bGVzV2l0aG91dERlZmF1bHQoc3R5bGVzT3JDcmVhdG9yLCBfZXh0ZW5kcyh7XG4gICAgZGVmYXVsdFRoZW1lOiBkZWZhdWx0VGhlbWVcbiAgfSwgb3B0aW9ucykpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzOyIsImltcG9ydCB7IHdpdGhUaGVtZUNyZWF0b3IgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCBkZWZhdWx0VGhlbWUgZnJvbSAnLi9kZWZhdWx0VGhlbWUnO1xudmFyIHdpdGhUaGVtZSA9IHdpdGhUaGVtZUNyZWF0b3Ioe1xuICBkZWZhdWx0VGhlbWU6IGRlZmF1bHRUaGVtZVxufSk7XG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWU7IiwiLy8gV2UgbmVlZCB0byBjZW50cmFsaXplIHRoZSB6SW5kZXggZGVmaW5pdGlvbnMgYXMgdGhleSB3b3JrXG4vLyBsaWtlIGdsb2JhbCB2YWx1ZXMgaW4gdGhlIGJyb3dzZXIuXG52YXIgekluZGV4ID0ge1xuICBtb2JpbGVTdGVwcGVyOiAxMDAwLFxuICBzcGVlZERpYWw6IDEwNTAsXG4gIGFwcEJhcjogMTEwMCxcbiAgZHJhd2VyOiAxMjAwLFxuICBtb2RhbDogMTMwMCxcbiAgc25hY2tiYXI6IDE0MDAsXG4gIHRvb2x0aXA6IDE1MDBcbn07XG5leHBvcnQgZGVmYXVsdCB6SW5kZXg7IiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvYXBwLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi9wYWdlcy90aGVtZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICBjdXN0b21IMToge1xyXG4gICAgY29sb3I6ICdyZWQnLFxyXG4gIH0sXHJcbiAgYm9yZGVyR3JheToge1xyXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNDMEMwQzAnLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gUGFnZSh7IGlkLCBvcHRpb25zLCBjb3VudCwgY29sb3IsIGRhdGEsIG90aGVyIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPE15V29uZGVyZnVsQ29tcG9uZW50XHJcbiAgICAgIGlkPXtpZH1cclxuICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgY291bnQ9e2NvdW50fVxyXG4gICAgICBjb2xvcj17Y29sb3J9XHJcbiAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgIG90aGVyPXtvdGhlcn0+XHJcbiAgICAgIEknbSB0ZXh0IGZyb20gYSBjb21wb25lbnRcclxuICAgIDwvTXlXb25kZXJmdWxDb21wb25lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTXlXb25kZXJmdWxDb21wb25lbnQoeyBpZCwgb3B0aW9ucywgY2hpbGRyZW4sIG90aGVyLCBjb3VudCB9KSB7XHJcbiAgY29uc3QgY291bnROdW1iZXIgPSBjb3VudDtcclxuICBjb25zdCBbc3VtbSwgc2V0U3VtbV0gPSB1c2VTdGF0ZShjb3VudE51bWJlcik7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgLy/QvtGC0YDQsNCx0L7RgtCw0LXRgiAxINGA0LDQtyDQv9C+0YHQu9C1IHJlbmRlcmBhXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgaWQgJiZcclxuICAgICAgb3B0aW9ucyAmJlxyXG4gICAgICBvcHRpb25zLnBhcmFtcyAmJlxyXG4gICAgICBvcHRpb25zLnBhcmFtcy5maWVsZHMgJiZcclxuICAgICAgb3B0aW9ucy5wYXJhbXMuZmllbGRzLmlzRHluYW1pY1xyXG4gICAgKSB7XHJcbiAgICAgIHNldFN1bW0oc3VtbSArIDEpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9e2NsYXNzZXMuY3VzdG9tSDF9PkhlbGxvIFdvcmxkISArIHtvdGhlcn08L2gxPlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0ganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSB4cz17M30gc3BhY2luZz17M30gY2xhc3NOYW1lPXtjbGFzc2VzLmJvcmRlckdyYXl9PlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSB4cz17M30gc3BhY2luZz17M30gY2xhc3NOYW1lPXtjbGFzc2VzLmJvcmRlckdyYXl9PlxyXG4gICAgICAgICAge3N1bW19XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBJbmRleCh7IHRleHQgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkFwcH0+XHJcbiAgICAgIDxQYWdlXHJcbiAgICAgICAgaWQ9XCIxXCJcclxuICAgICAgICBvcHRpb25zPXt7XHJcbiAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgICAgICAgaXNEeW5hbWljOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGNvdW50PXsxMH1cclxuICAgICAgICBjb2xvcj1cIjRcIlxyXG4gICAgICAgIGRhdGE9XCI1XCJcclxuICAgICAgICBvdGhlcj17dGV4dH1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbi8vINGB0L7QvtCx0YnQtdC90LjQtSDQv9GA0L7QutC40L3QtdGC0YHRjyDQv9GA0Lgg0LfQsNC/0YPRgdC60LUg0YHQtdGA0LLQtdGA0LAgXCJucG0gcnVuIGRldlwiINC40LvQuCDQv9C+0YHQu9C1INC+0LHQvdC+0LLQu9C10L3QuNGPINGB0YLRgNCw0L3QuNGG0YtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29udGV4dC50ZXh0ID0gJ0hlbGxvIGZyb20gU1NSJztcclxuICBjb25zdCB0ZXh0ID0gY29udGV4dC50ZXh0O1xyXG4gIGNvbnNvbGUubG9nKHRleHQpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyB0ZXh0IH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgcmVkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzJztcclxuXHJcbi8vIENyZWF0ZSBhIHRoZW1lIGluc3RhbmNlLlxyXG5jb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcclxuICBwYWxldHRlOiB7XHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIG1haW46ICcjNTU2Y2Q2JyxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgbWFpbjogJyMxOTg1N2InLFxyXG4gICAgfSxcclxuICAgIGVycm9yOiB7XHJcbiAgICAgIG1haW46IHJlZC5BNDAwLFxyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgZGVmYXVsdDogJyNmZmYnLFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJBcHBcIjogXCJhcHBfQXBwX18yMWxNbFwiLFxuXHRcIkFwcC1sb2dvXCI6IFwiYXBwX0FwcC1sb2dvX18xdnNwM1wiLFxuXHRcIkFwcC1sb2dvLXNwaW5cIjogXCJhcHBfQXBwLWxvZ28tc3Bpbl9feGJGZ1dcIixcblx0XCJBcHAtaGVhZGVyXCI6IFwiYXBwX0FwcC1oZWFkZXJfXzJSR0lWXCIsXG5cdFwiQXBwLWxpbmtcIjogXCJhcHBfQXBwLWxpbmtfXzJDc2dxXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL3N5c3RlbVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL3V0aWxzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9