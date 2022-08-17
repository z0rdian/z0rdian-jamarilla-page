exports.id = 71;
exports.ids = [71];
exports.modules = {

/***/ 7481:
/***/ ((module) => {

// Exports
module.exports = {
	"bg": "footer_bg__HSh9_",
	"logo": "footer_logo__MuuPn",
	"desc": "footer_desc__RF7Hj",
	"inquary_info": "footer_inquary_info__kpC8i",
	"inquary_number": "footer_inquary_number__F5hn7",
	"widget__item": "footer_widget__item__hp9b5",
	"widget_address": "footer_widget_address__VECWH",
	"widget_number": "footer_widget_number__2Jt4c",
	"widget__title": "footer_widget__title__nJEdC",
	"widget__list": "footer_widget__list__RDrNx",
	"bottom": "footer_bottom__YkJl7",
	"social": "footer_social__xvB_Y",
	"copyright": "footer_copyright__PbbZq",
	"text": "footer_text__pPATd",
	"icon": "footer_icon__hKfLV"
};


/***/ }),

/***/ 6312:
/***/ ((module) => {

// Exports
module.exports = {
	"btn": "newsletter_btn__sgFwr",
	"md-size": "newsletter_md-size__XZOJj",
	"btn_primary": "newsletter_btn_primary__zBqNW",
	"btn_secondary": "newsletter_btn_secondary__Pxcug",
	"btn_hover__white": "newsletter_btn_hover__white__l87aA",
	"btn_hover__primary": "newsletter_btn_hover__primary__67zYa",
	"btn_hover__secondary": "newsletter_btn_hover__secondary__RCusc",
	"bg": "newsletter_bg__Z_0EU",
	"item": "newsletter_item__bH2gx",
	"title": "newsletter_title__ozNqH",
	"form": "newsletter_form__mmWAB",
	"input_field": "newsletter_input_field__OB14q",
	"btn__wrap": "newsletter_btn__wrap__PZHAj"
};


/***/ }),

/***/ 5608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_footer_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7481);
/* harmony import */ var _layout_footer_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_layout_footer_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);






function Footer({ footerItems  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        children: footerItems?.map((footerItem, i)=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${(_layout_footer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().bg)}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Container, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                        lg: {
                                            span: 3
                                        },
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_layout_footer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().widget__item),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: "/",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: (_layout_footer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().logo),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: footerItem?.footerLogo,
                                                            alt: footerItem?.footerLogoAlt
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: (_layout_footer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().desc),
                                                    dangerouslySetInnerHTML: {
                                                        __html: footerItem?.excerpt
                                                    }
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_layout_footer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().inquary),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: (_layout_footer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().inquary_info),
                                                        children: footerItem?.inquary
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                        xl: {
                                            span: 3
                                        },
                                        lg: {
                                            span: 2
                                        },
                                        sm: {
                                            span: 6
                                        },
                                        className: "ps-xl-80 pt-40 pt-lg-0"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                        lg: {
                                            span: 3
                                        },
                                        sm: {
                                            span: 6
                                        },
                                        className: "ps-lg-50 pt-40 pt-lg-0"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                        xl: {
                                            span: 3
                                        },
                                        lg: {
                                            span: 4
                                        },
                                        className: "pt-40 pt-lg-0",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_layout_footer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().widget__item),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: (_layout_footer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().widget__title),
                                                    children: footerItem?.contactInfoTitle
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_layout_footer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().widget__info),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: (_layout_footer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().widget_address),
                                                            dangerouslySetInnerHTML: {
                                                                __html: footerItem?.additionWidgetAddress
                                                            }
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: (_layout_footer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().widget_number),
                                                            children: footerItem?.additionWidgetNumber
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_layout_footer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().bottom),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Container, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                        md: {
                                            span: 6
                                        },
                                        sm: {
                                            span: 4
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            className: (_layout_footer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().social),
                                            children: footerItem?.socialList?.map((item, index)=>{
                                                const Social = react_icons_fa__WEBPACK_IMPORTED_MODULE_2__[item.socialIcon];
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        href: `${item.path}`,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Social, {})
                                                        })
                                                    })
                                                }, index);
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                        md: {
                                            span: 6
                                        },
                                        sm: {
                                            span: 8
                                        }
                                    })
                                ]
                            })
                        })
                    })
                ]
            }, i);
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 1939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _newsletter_newsletter_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6312);
/* harmony import */ var _newsletter_newsletter_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_newsletter_newsletter_module_scss__WEBPACK_IMPORTED_MODULE_2__);



function Newsletter({ newsletterItems  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_newsletter_newsletter_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bg)}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Container, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
                children: newsletterItems?.map((newsletterItem, i)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                        lg: {
                            span: 12
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_newsletter_newsletter_module_scss__WEBPACK_IMPORTED_MODULE_2___default().item),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: (_newsletter_newsletter_module_scss__WEBPACK_IMPORTED_MODULE_2___default().title),
                                    children: newsletterItem?.title
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                    className: (_newsletter_newsletter_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            className: (_newsletter_newsletter_module_scss__WEBPACK_IMPORTED_MODULE_2___default().input_field),
                                            type: "email",
                                            placeholder: "\xbfQu\xe9 esperas?"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_newsletter_newsletter_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btn__wrap),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: `${(_newsletter_newsletter_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btn)} ${(_newsletter_newsletter_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btn_secondary)} ${(_newsletter_newsletter_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btn_hover__white)}`,
                                                children: "Suscribirse"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }, i);
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Newsletter);


/***/ })

};
;