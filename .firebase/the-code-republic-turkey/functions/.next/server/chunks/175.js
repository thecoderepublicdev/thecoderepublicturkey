"use strict";
exports.id = 175;
exports.ids = [175];
exports.modules = {

/***/ 2175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SectionHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function SectionHeader({ ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: props.align === "left" ? "text-white mb-10 lg:text-start" : "px-4 sm:px-6 lg:px-8 mb-10 lg:text-center text-white",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "font-body tracking-tighter text-lg text-violet-600 font-semibold",
                children: props.subTitle
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "font-body tracking-tighter mt-2 text-3xl leading-8 font-bold tracking-tight text-whitew sm:text-4xl sm:tracking-tight",
                children: props.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: props.align === "left" ? "font-body tracking-tighter mt-4 max-w-2xl text-xl text-gray-500" : "font-body tracking-tighter mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto",
                children: props.description
            })
        ]
    });
}


/***/ })

};
;