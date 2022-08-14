exports.id = 354;
exports.ids = [354];
exports.modules = {

/***/ 3865:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "rich-text_item__ltr9a",
	"desc": "rich-text_desc__w9DnJ",
	"group_image": "rich-text_group_image__qUUQx",
	"single_image": "rich-text_single_image__zegWw"
};


/***/ }),

/***/ 1354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3865);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_2__);



function RichText({ richTexts  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default().item),
        children: richTexts === null || richTexts === void 0 ? void 0 : richTexts.map((richText, index)=>{
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
                className: "pb-35 g-30",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                        lg: {
                            span: 4
                        },
                        className: "align-self-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "content",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: `${(_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default().desc)} min-lg-w238`,
                                    children: richText === null || richText === void 0 ? void 0 : richText.textOne
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: `${(_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default().desc)} min-lg-w238`,
                                    children: richText === null || richText === void 0 ? void 0 : richText.textTwo
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: `${(_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default().desc)} mb-0`,
                                    children: richText === null || richText === void 0 ? void 0 : richText.textThree
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                        lg: {
                            span: 8
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `${(_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default().group_image)} pb-20`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `${(_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default().single_image)} pe-20`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: richText === null || richText === void 0 ? void 0 : richText.groupImageOne,
                                            alt: richText === null || richText === void 0 ? void 0 : richText.groupImageAlt
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default().single_image),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: richText === null || richText === void 0 ? void 0 : richText.groupImageTwo,
                                            alt: richText === null || richText === void 0 ? void 0 : richText.groupImageAlt
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `${(_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default().group_image)}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `${(_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default().single_image)} pe-20`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: richText === null || richText === void 0 ? void 0 : richText.groupImageThree,
                                            alt: richText === null || richText === void 0 ? void 0 : richText.groupImageAlt
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default().single_image),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: richText === null || richText === void 0 ? void 0 : richText.groupImageFour,
                                            alt: richText === null || richText === void 0 ? void 0 : richText.groupImageAlt
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                        xs: {
                            span: 12
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: `${(_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default().desc)} mb-0`,
                            children: richText === null || richText === void 0 ? void 0 : richText.additionText
                        })
                    })
                ]
            }, index));
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RichText);


/***/ })

};
;