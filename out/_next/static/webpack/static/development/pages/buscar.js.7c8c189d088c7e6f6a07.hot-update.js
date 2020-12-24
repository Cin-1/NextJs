webpackHotUpdate("static/development/pages/buscar.js",{

/***/ "./pages/buscar.js":
/*!*************************!*\
  !*** ./pages/buscar.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layouts_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layouts/Layout */ "./components/layouts/Layout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layouts_DetallesProductos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layouts/DetallesProductos */ "./components/layouts/DetallesProductos.js");
/* harmony import */ var _hooks_useProd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useProd */ "./hooks/useProd.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
var _this = undefined,
    _jsxFileName = "/home/cin/Desktop/henry/NextJs/pages/buscar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Buscar = function Buscar() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var q = router.query.q;
  console.log(q);

  var _useProductos = Object(_hooks_useProd__WEBPACK_IMPORTED_MODULE_4__["default"])("creado"),
      productos = _useProductos.productos;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      resultado = _useState[0],
      guardarResultado = _useState[1];

  console.log(productos);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var busqueda = q.toLowerCase();
    var filtro = productos.filter(function (producto) {
      return producto.nombre.toLowerCase().includes(busqueda) || producto.descripcion.toLowerCase().includes(busqueda);
    });
    guardarResultado(filtro);
  }, [q, productos]);
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_components_layouts_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    className: "listado-productos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    className: "contenedor",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("ul", {
    className: "bg-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, resultado.map(function (producto) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_components_layouts_DetallesProductos__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: producto.id,
      producto: producto,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }
    });
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Buscar);

/***/ })

})
//# sourceMappingURL=buscar.js.7c8c189d088c7e6f6a07.hot-update.js.map