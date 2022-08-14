exports.id = 105;
exports.ids = [105];
exports.modules = {

/***/ 1697:
/***/ ((module) => {

// Exports
module.exports = {
	"py__140": "banner-4_py__140__9wUEB",
	"section": "banner-4_section__nqaVm",
	"section__wrap": "banner-4_section__wrap__cXEox",
	"section__title": "banner-4_section__title__Bvaas",
	"section__desc": "banner-4_section__desc__VxJgw",
	"item": "banner-4_item__adNij",
	"secondary__bg": "banner-4_secondary__bg__qPn0F",
	"primary__bg": "banner-4_primary__bg__BTZ__",
	"content": "banner-4_content__Yq7Y6",
	"link__btn": "banner-4_link__btn__y_XBe",
	"title": "banner-4_title__Lbdqb",
	"desc": "banner-4_desc__yYGyN"
};


/***/ }),

/***/ 1105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _banner_4_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1697);
/* harmony import */ var _banner_4_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_banner_4_module_scss__WEBPACK_IMPORTED_MODULE_2__);



function BannerFour({ bannerFourItems , bannerSection  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_banner_4_module_scss__WEBPACK_IMPORTED_MODULE_2___default().py__140)}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Container, {
            children: [
                bannerSection === null || bannerSection === void 0 ? void 0 : bannerSection.map((items, bannerTitle)=>{
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_banner_4_module_scss__WEBPACK_IMPORTED_MODULE_2___default().section),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_banner_4_module_scss__WEBPACK_IMPORTED_MODULE_2___default().section__wrap),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_banner_4_module_scss__WEBPACK_IMPORTED_MODULE_2___default().section__title),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: items === null || items === void 0 ? void 0 : items.sectionSubtitle
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            children: items === null || items === void 0 ? void 0 : items.sectionTitle
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_banner_4_module_scss__WEBPACK_IMPORTED_MODULE_2___default().section__desc),
                                    dangerouslySetInnerHTML: {
                                        __html: items.sectionDesc
                                    }
                                })
                            ]
                        })
                    }, bannerTitle));
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
                    className: "g-30",
                    children: bannerFourItems === null || bannerFourItems === void 0 ? void 0 : bannerFourItems.map((bannerFourItem, i)=>{
                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                            xl: {
                                span: 3
                            },
                            lg: {
                                span: 4
                            },
                            md: {
                                span: 6
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: bannerFourItem.dynamicClassName.split(' ').map((item)=>(_banner_4_module_scss__WEBPACK_IMPORTED_MODULE_2___default())[item]
                                ).join(' '),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_banner_4_module_scss__WEBPACK_IMPORTED_MODULE_2___default().content),
                                    "data-count": `${bannerFourItem === null || bannerFourItem === void 0 ? void 0 : bannerFourItem.dataCount}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: (_banner_4_module_scss__WEBPACK_IMPORTED_MODULE_2___default().title),
                                            dangerouslySetInnerHTML: {
                                                __html: bannerFourItem === null || bannerFourItem === void 0 ? void 0 : bannerFourItem.title
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_banner_4_module_scss__WEBPACK_IMPORTED_MODULE_2___default().desc),
                                            children: bannerFourItem === null || bannerFourItem === void 0 ? void 0 : bannerFourItem.excerpt
                                        })
                                    ]
                                })
                            })
                        }, i));
                    })
                })
            ]
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerFour);


/***/ })

};
;