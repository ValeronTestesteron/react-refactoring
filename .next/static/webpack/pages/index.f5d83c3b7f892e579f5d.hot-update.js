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
  const classes = useStyles(); //???????????????????? 1 ?????? ?????????? render`a

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
  console.log(text);
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
      lineNumber: 68,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 5
  }, this);
} // ?????????????????? ???????????????????? ?????? ?????????????? ?????????????? "npm run dev" ?????? ?????????? ???????????????????? ????????????????


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImN1c3RvbUgxIiwiY29sb3IiLCJib3JkZXJHcmF5IiwiYm9yZGVyIiwiUGFnZSIsImlkIiwib3B0aW9ucyIsImNvdW50IiwiZGF0YSIsIm90aGVyIiwiTXlXb25kZXJmdWxDb21wb25lbnQiLCJjaGlsZHJlbiIsImNvdW50TnVtYmVyIiwic3VtbSIsInNldFN1bW0iLCJ1c2VTdGF0ZSIsImNsYXNzZXMiLCJ1c2VFZmZlY3QiLCJwYXJhbXMiLCJmaWVsZHMiLCJpc0R5bmFtaWMiLCJJbmRleCIsInRleHQiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQztBQUMzQkMsVUFBUSxFQUFFO0FBQ1JDLFNBQUssRUFBRTtBQURDLEdBRGlCO0FBSTNCQyxZQUFVLEVBQUU7QUFDVkMsVUFBTSxFQUFFO0FBREU7QUFKZSxDQUFELENBQTVCOztBQVNBLFNBQVNDLElBQVQsQ0FBYztBQUFFQyxJQUFGO0FBQU1DLFNBQU47QUFBZUMsT0FBZjtBQUFzQk4sT0FBdEI7QUFBNkJPLE1BQTdCO0FBQW1DQztBQUFuQyxDQUFkLEVBQTBEO0FBQ3hELHNCQUNFLDhEQUFDLG9CQUFEO0FBQ0UsTUFBRSxFQUFFSixFQUROO0FBRUUsV0FBTyxFQUFFQyxPQUZYO0FBR0UsU0FBSyxFQUFFQyxLQUhUO0FBSUUsU0FBSyxFQUFFTixLQUpUO0FBS0UsUUFBSSxFQUFFTyxJQUxSO0FBTUUsU0FBSyxFQUFFQyxLQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFXRDs7S0FaUUwsSTs7QUFjVCxTQUFTTSxvQkFBVCxDQUE4QjtBQUFFTCxJQUFGO0FBQU1DLFNBQU47QUFBZUssVUFBZjtBQUF5QkYsT0FBekI7QUFBZ0NGO0FBQWhDLENBQTlCLEVBQXVFO0FBQUE7O0FBQ3JFLFFBQU1LLFdBQVcsR0FBR0wsS0FBcEI7QUFDQSxRQUFNO0FBQUEsT0FBQ00sSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLENBQUNILFdBQUQsQ0FBaEM7QUFFQSxRQUFNSSxPQUFPLEdBQUdsQixTQUFTLEVBQXpCLENBSnFFLENBTXJFOztBQUNBbUIsa0RBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFDRVosRUFBRSxJQUNGQyxPQURBLElBRUFBLE9BQU8sQ0FBQ1ksTUFGUixJQUdBWixPQUFPLENBQUNZLE1BQVIsQ0FBZUMsTUFIZixJQUlBYixPQUFPLENBQUNZLE1BQVIsQ0FBZUMsTUFBZixDQUFzQkMsU0FMeEIsRUFNRTtBQUNBTixhQUFPLENBQUNELElBQUksR0FBRyxDQUFSLENBQVA7QUFDRDtBQUNGLEdBVlEsRUFVTixFQVZNLENBQVQ7QUFZQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFFRyxPQUFPLENBQUNoQixRQUF2QjtBQUFBLG9DQUFpRFMsS0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSw4REFBQyxtREFBRDtBQUFNLGVBQVMsTUFBZjtBQUFnQixhQUFPLEVBQUUsQ0FBekI7QUFBNEIsb0JBQWMsRUFBQyxRQUEzQztBQUFBLDhCQUNFLDhEQUFDLG1EQUFEO0FBQU0saUJBQVMsTUFBZjtBQUFnQixZQUFJLE1BQXBCO0FBQXFCLFVBQUUsRUFBRSxDQUF6QjtBQUE0QixlQUFPLEVBQUUsQ0FBckM7QUFBd0MsaUJBQVMsRUFBRU8sT0FBTyxDQUFDZCxVQUEzRDtBQUFBLGtCQUNHUztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFLDhEQUFDLG1EQUFEO0FBQU0saUJBQVMsTUFBZjtBQUFnQixZQUFJLE1BQXBCO0FBQXFCLFVBQUUsRUFBRSxDQUF6QjtBQUE0QixlQUFPLEVBQUUsQ0FBckM7QUFBd0MsaUJBQVMsRUFBRUssT0FBTyxDQUFDZCxVQUEzRDtBQUFBLGtCQUNHVztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWFEOztHQWhDUUgsb0I7VUFJU1osUzs7O01BSlRZLG9COztBQWtDVCxTQUFTVyxLQUFULENBQWU7QUFBRUM7QUFBRixDQUFmLEVBQXlCO0FBQ3ZCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBLHNCQUNFO0FBQUssYUFBUyxFQUFFRyxtRUFBaEI7QUFBQSwyQkFDRSw4REFBQyxJQUFEO0FBQ0UsUUFBRSxFQUFDLEdBREw7QUFFRSxhQUFPLEVBQUU7QUFDUFAsY0FBTSxFQUFFO0FBQ05DLGdCQUFNLEVBQUU7QUFDTkMscUJBQVMsRUFBRTtBQURMO0FBREY7QUFERCxPQUZYO0FBU0UsV0FBSyxFQUFFLEVBVFQ7QUFVRSxXQUFLLEVBQUMsR0FWUjtBQVdFLFVBQUksRUFBQyxHQVhQO0FBWUUsV0FBSyxFQUFFRTtBQVpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQkQsQyxDQUVEOzs7TUF0QlNELEs7O0FBaUNULCtEQUFlQSxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY1ZDgzYzNiN2Y4OTJlNTc5ZjVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9hcHAubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3BhZ2VzL3RoZW1lJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIGN1c3RvbUgxOiB7XHJcbiAgICBjb2xvcjogJ3JlZCcsXHJcbiAgfSxcclxuICBib3JkZXJHcmF5OiB7XHJcbiAgICBib3JkZXI6ICcxcHggc29saWQgI0MwQzBDMCcsXHJcbiAgfSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBQYWdlKHsgaWQsIG9wdGlvbnMsIGNvdW50LCBjb2xvciwgZGF0YSwgb3RoZXIgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TXlXb25kZXJmdWxDb21wb25lbnRcclxuICAgICAgaWQ9e2lkfVxyXG4gICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICBjb3VudD17Y291bnR9XHJcbiAgICAgIGNvbG9yPXtjb2xvcn1cclxuICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgb3RoZXI9e290aGVyfT5cclxuICAgICAgSSdtIHRleHQgZnJvbSBhIGNvbXBvbmVudFxyXG4gICAgPC9NeVdvbmRlcmZ1bENvbXBvbmVudD5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNeVdvbmRlcmZ1bENvbXBvbmVudCh7IGlkLCBvcHRpb25zLCBjaGlsZHJlbiwgb3RoZXIsIGNvdW50IH0pIHtcclxuICBjb25zdCBjb3VudE51bWJlciA9IGNvdW50O1xyXG4gIGNvbnN0IFtzdW1tLCBzZXRTdW1tXSA9IHVzZVN0YXRlKGNvdW50TnVtYmVyKTtcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAvL9C+0YLRgNCw0LHQvtGC0LDQtdGCIDEg0YDQsNC3INC/0L7RgdC70LUgcmVuZGVyYGFcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBpZCAmJlxyXG4gICAgICBvcHRpb25zICYmXHJcbiAgICAgIG9wdGlvbnMucGFyYW1zICYmXHJcbiAgICAgIG9wdGlvbnMucGFyYW1zLmZpZWxkcyAmJlxyXG4gICAgICBvcHRpb25zLnBhcmFtcy5maWVsZHMuaXNEeW5hbWljXHJcbiAgICApIHtcclxuICAgICAgc2V0U3VtbShzdW1tICsgMSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT17Y2xhc3Nlcy5jdXN0b21IMX0+SGVsbG8gV29ybGQhICsge290aGVyfTwvaDE+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfSBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHhzPXszfSBzcGFjaW5nPXszfSBjbGFzc05hbWU9e2NsYXNzZXMuYm9yZGVyR3JheX0+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHhzPXszfSBzcGFjaW5nPXszfSBjbGFzc05hbWU9e2NsYXNzZXMuYm9yZGVyR3JheX0+XHJcbiAgICAgICAgICB7c3VtbX1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEluZGV4KHsgdGV4dCB9KSB7XHJcbiAgY29uc29sZS5sb2codGV4dCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQXBwfT5cclxuICAgICAgPFBhZ2VcclxuICAgICAgICBpZD1cIjFcIlxyXG4gICAgICAgIG9wdGlvbnM9e3tcclxuICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICBmaWVsZHM6IHtcclxuICAgICAgICAgICAgICBpc0R5bmFtaWM6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgY291bnQ9ezEwfVxyXG4gICAgICAgIGNvbG9yPVwiNFwiXHJcbiAgICAgICAgZGF0YT1cIjVcIlxyXG4gICAgICAgIG90aGVyPXt0ZXh0fVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuLy8g0YHQvtC+0LHRidC10L3QuNC1INC/0YDQvtC60LjQvdC10YLRgdGPINC/0YDQuCDQt9Cw0L/Rg9GB0LrQtSDRgdC10YDQstC10YDQsCBcIm5wbSBydW4gZGV2XCIg0LjQu9C4INC/0L7RgdC70LUg0L7QsdC90L7QstC70LXQvdC40Y8g0YHRgtGA0LDQvdC40YbRi1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICBjb250ZXh0LnRleHQgPSAnSGVsbG8gZnJvbSBTU1InO1xyXG4gIGNvbnN0IHRleHQgPSBjb250ZXh0LnRleHQ7XHJcbiAgY29uc29sZS5sb2codGV4dCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IHRleHQgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==