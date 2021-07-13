self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_app_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/app.module.css */ "./styles/app.module.css");
/* harmony import */ var _styles_app_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_app_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _pages_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/theme */ "./pages/theme.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\1\\Desktop\\React\\refactor\\pages\\index.js",
    _s = $RefreshSig$();






const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)({
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

_c = Page;

function MyWonderfulComponent({
  id,
  options,
  children,
  other,
  count
}) {
  _s();

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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
      container: true,
      spacing: 1,
      justifyContent: "center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
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

_s(MyWonderfulComponent, "/AGQwk5IpECwxy97NYbsQ0dfBB8=", false, function () {
  return [useStyles];
});

_c2 = MyWonderfulComponent;

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


_c3 = Index;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c, _c2, _c3;

$RefreshReg$(_c, "Page");
$RefreshReg$(_c2, "MyWonderfulComponent");
$RefreshReg$(_c3, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImN1c3RvbUgxIiwiY29sb3IiLCJib3JkZXJHcmF5IiwiYm9yZGVyIiwiUGFnZSIsImlkIiwib3B0aW9ucyIsImNvdW50IiwiZGF0YSIsIm90aGVyIiwiTXlXb25kZXJmdWxDb21wb25lbnQiLCJjaGlsZHJlbiIsImNvdW50TnVtYmVyIiwic3VtbSIsInNldFN1bW0iLCJ1c2VTdGF0ZSIsImNsYXNzZXMiLCJ1c2VFZmZlY3QiLCJwYXJhbXMiLCJmaWVsZHMiLCJpc0R5bmFtaWMiLCJJbmRleCIsInRleHQiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDO0FBQzNCQyxVQUFRLEVBQUU7QUFDUkMsU0FBSyxFQUFFO0FBREMsR0FEaUI7QUFJM0JDLFlBQVUsRUFBRTtBQUNWQyxVQUFNLEVBQUU7QUFERTtBQUplLENBQUQsQ0FBNUI7O0FBU0EsU0FBU0MsSUFBVCxDQUFjO0FBQUVDLElBQUY7QUFBTUMsU0FBTjtBQUFlQyxPQUFmO0FBQXNCTixPQUF0QjtBQUE2Qk8sTUFBN0I7QUFBbUNDO0FBQW5DLENBQWQsRUFBMEQ7QUFDeEQsc0JBQ0UsOERBQUMsb0JBQUQ7QUFDRSxNQUFFLEVBQUVKLEVBRE47QUFFRSxXQUFPLEVBQUVDLE9BRlg7QUFHRSxTQUFLLEVBQUVDLEtBSFQ7QUFJRSxTQUFLLEVBQUVOLEtBSlQ7QUFLRSxRQUFJLEVBQUVPLElBTFI7QUFNRSxTQUFLLEVBQUVDLEtBTlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVdEOztLQVpRTCxJOztBQWNULFNBQVNNLG9CQUFULENBQThCO0FBQUVMLElBQUY7QUFBTUMsU0FBTjtBQUFlSyxVQUFmO0FBQXlCRixPQUF6QjtBQUFnQ0Y7QUFBaEMsQ0FBOUIsRUFBdUU7QUFBQTs7QUFDckUsUUFBTUssV0FBVyxHQUFHTCxLQUFwQjtBQUNBLFFBQU07QUFBQSxPQUFDTSxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsK0NBQVEsQ0FBQ0gsV0FBRCxDQUFoQztBQUVBLFFBQU1JLE9BQU8sR0FBR2xCLFNBQVMsRUFBekIsQ0FKcUUsQ0FNckU7O0FBQ0FtQixrREFBUyxDQUFDLE1BQU07QUFDZCxRQUNFWixFQUFFLElBQ0ZDLE9BREEsSUFFQUEsT0FBTyxDQUFDWSxNQUZSLElBR0FaLE9BQU8sQ0FBQ1ksTUFBUixDQUFlQyxNQUhmLElBSUFiLE9BQU8sQ0FBQ1ksTUFBUixDQUFlQyxNQUFmLENBQXNCQyxTQUx4QixFQU1FO0FBQ0FOLGFBQU8sQ0FBQ0QsSUFBSSxHQUFHLENBQVIsQ0FBUDtBQUNEO0FBQ0YsR0FWUSxFQVVOLEVBVk0sQ0FBVDtBQVlBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBSSxlQUFTLEVBQUVHLE9BQU8sQ0FBQ2hCLFFBQXZCO0FBQUEsb0NBQWlEUyxLQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLDhEQUFDLG1EQUFEO0FBQU0sZUFBUyxNQUFmO0FBQWdCLGFBQU8sRUFBRSxDQUF6QjtBQUE0QixvQkFBYyxFQUFDLFFBQTNDO0FBQUEsOEJBQ0UsOERBQUMsbURBQUQ7QUFBTSxpQkFBUyxNQUFmO0FBQWdCLFlBQUksTUFBcEI7QUFBcUIsVUFBRSxFQUFFLENBQXpCO0FBQTRCLGVBQU8sRUFBRSxDQUFyQztBQUF3QyxpQkFBUyxFQUFFTyxPQUFPLENBQUNkLFVBQTNEO0FBQUEsa0JBQ0dTO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUUsOERBQUMsbURBQUQ7QUFBTSxpQkFBUyxNQUFmO0FBQWdCLFlBQUksTUFBcEI7QUFBcUIsVUFBRSxFQUFFLENBQXpCO0FBQTRCLGVBQU8sRUFBRSxDQUFyQztBQUF3QyxpQkFBUyxFQUFFSyxPQUFPLENBQUNkLFVBQTNEO0FBQUEsa0JBQ0dXO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBYUQ7O0dBaENRSCxvQjtVQUlTWixTOzs7TUFKVFksb0I7O0FBa0NULFNBQVNXLEtBQVQsQ0FBZTtBQUFFQztBQUFGLENBQWYsRUFBeUI7QUFDdkIsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLG1FQUFoQjtBQUFBLDJCQUNFLDhEQUFDLElBQUQ7QUFDRSxRQUFFLEVBQUMsR0FETDtBQUVFLGFBQU8sRUFBRTtBQUNQTCxjQUFNLEVBQUU7QUFDTkMsZ0JBQU0sRUFBRTtBQUNOQyxxQkFBUyxFQUFFO0FBREw7QUFERjtBQURELE9BRlg7QUFTRSxXQUFLLEVBQUUsRUFUVDtBQVVFLFdBQUssRUFBQyxHQVZSO0FBV0UsVUFBSSxFQUFDLEdBWFA7QUFZRSxXQUFLLEVBQUVFO0FBWlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtCRCxDLENBRUQ7OztNQXJCU0QsSzs7QUFnQ1QsK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzIwMTc2ODZkOTA4N2QyYTM5NGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2FwcC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vcGFnZXMvdGhlbWUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgY3VzdG9tSDE6IHtcclxuICAgIGNvbG9yOiAncmVkJyxcclxuICB9LFxyXG4gIGJvcmRlckdyYXk6IHtcclxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjQzBDMEMwJyxcclxuICB9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIFBhZ2UoeyBpZCwgb3B0aW9ucywgY291bnQsIGNvbG9yLCBkYXRhLCBvdGhlciB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNeVdvbmRlcmZ1bENvbXBvbmVudFxyXG4gICAgICBpZD17aWR9XHJcbiAgICAgIG9wdGlvbnM9e29wdGlvbnN9XHJcbiAgICAgIGNvdW50PXtjb3VudH1cclxuICAgICAgY29sb3I9e2NvbG9yfVxyXG4gICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICBvdGhlcj17b3RoZXJ9PlxyXG4gICAgICBJJ20gdGV4dCBmcm9tIGEgY29tcG9uZW50XHJcbiAgICA8L015V29uZGVyZnVsQ29tcG9uZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE15V29uZGVyZnVsQ29tcG9uZW50KHsgaWQsIG9wdGlvbnMsIGNoaWxkcmVuLCBvdGhlciwgY291bnQgfSkge1xyXG4gIGNvbnN0IGNvdW50TnVtYmVyID0gY291bnQ7XHJcbiAgY29uc3QgW3N1bW0sIHNldFN1bW1dID0gdXNlU3RhdGUoY291bnROdW1iZXIpO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIC8v0L7RgtGA0LDQsdC+0YLQsNC10YIgMSDRgNCw0Lcg0L/QvtGB0LvQtSByZW5kZXJgYVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGlkICYmXHJcbiAgICAgIG9wdGlvbnMgJiZcclxuICAgICAgb3B0aW9ucy5wYXJhbXMgJiZcclxuICAgICAgb3B0aW9ucy5wYXJhbXMuZmllbGRzICYmXHJcbiAgICAgIG9wdGlvbnMucGFyYW1zLmZpZWxkcy5pc0R5bmFtaWNcclxuICAgICkge1xyXG4gICAgICBzZXRTdW1tKHN1bW0gKyAxKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPXtjbGFzc2VzLmN1c3RvbUgxfT5IZWxsbyBXb3JsZCEgKyB7b3RoZXJ9PC9oMT5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9IGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0geHM9ezN9IHNwYWNpbmc9ezN9IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3JkZXJHcmF5fT5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0geHM9ezN9IHNwYWNpbmc9ezN9IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3JkZXJHcmF5fT5cclxuICAgICAgICAgIHtzdW1tfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gSW5kZXgoeyB0ZXh0IH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5BcHB9PlxyXG4gICAgICA8UGFnZVxyXG4gICAgICAgIGlkPVwiMVwiXHJcbiAgICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgIGZpZWxkczoge1xyXG4gICAgICAgICAgICAgIGlzRHluYW1pYzogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfX1cclxuICAgICAgICBjb3VudD17MTB9XHJcbiAgICAgICAgY29sb3I9XCI0XCJcclxuICAgICAgICBkYXRhPVwiNVwiXHJcbiAgICAgICAgb3RoZXI9e3RleHR9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG4vLyDRgdC+0L7QsdGJ0LXQvdC40LUg0L/RgNC+0LrQuNC90LXRgtGB0Y8g0L/RgNC4INC30LDQv9GD0YHQutC1INGB0LXRgNCy0LXRgNCwIFwibnBtIHJ1biBkZXZcIiDQuNC70Lgg0L/QvtGB0LvQtSDQvtCx0L3QvtCy0LvQtdC90LjRjyDRgdGC0YDQsNC90LjRhtGLXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnRleHQudGV4dCA9ICdIZWxsbyBmcm9tIFNTUic7XHJcbiAgY29uc3QgdGV4dCA9IGNvbnRleHQudGV4dDtcclxuICBjb25zb2xlLmxvZyh0ZXh0KTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgdGV4dCB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9