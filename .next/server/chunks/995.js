exports.id = 995;
exports.ids = [995];
exports.modules = {

/***/ 1058:
/***/ ((module) => {

// Exports
module.exports = {
	"area": "team_area__qasn3",
	"area_02": "team_area_02__RJZiA",
	"section": "team_section__CyLEH",
	"section__wrap": "team_section__wrap__pdKxH",
	"section_title": "team_section_title__MUajS",
	"section_desc": "team_section_desc__kJQLA",
	"item": "team_item__Jj_Ol",
	"img": "team_img__Pe_gD",
	"add__action": "team_add__action__fxjtb",
	"mail_link": "team_mail_link__IBllK",
	"content": "team_content__KK1ke",
	"social_link__wrap": "team_social_link__wrap__eniPl",
	"mail_link__wrap": "team_mail_link__wrap__022w6",
	"social_link": "team_social_link__UQJCR",
	"title": "team_title__of6AO",
	"occupation": "team_occupation__tF1Li"
};


/***/ }),

/***/ 4015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(609);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9785);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _counter_counter_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8178);
/* harmony import */ var _counter_counter_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_counter_counter_module_scss__WEBPACK_IMPORTED_MODULE_5__);






function CounterTwo() {
    const { 0: focus , 1: setFocus  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const visibleChangeHandler = (isVisible)=>{
        if (isVisible) {
            if (!focus) {
                setFocus(true);
            }
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_counter_counter_module_scss__WEBPACK_IMPORTED_MODULE_5___default().area)} ${(_counter_counter_module_scss__WEBPACK_IMPORTED_MODULE_5___default().pb__140)}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                className: (_counter_counter_module_scss__WEBPACK_IMPORTED_MODULE_5___default().max_md_g_y__80),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                        lg: {
                            span: 3
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_countup__WEBPACK_IMPORTED_MODULE_3___default()), {
                            start: focus ? 0 : null,
                            end: 985,
                            duration: 3,
                            children: ({ countUpRef  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_counter_counter_module_scss__WEBPACK_IMPORTED_MODULE_5___default().item),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: (_counter_counter_module_scss__WEBPACK_IMPORTED_MODULE_5___default().count_inner__text),
                                            children: "985"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: (_counter_counter_module_scss__WEBPACK_IMPORTED_MODULE_5___default().count),
                                            ref: countUpRef
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.InView, {
                                            as: "div",
                                            onChange: (inView)=>visibleChangeHandler(inView),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_counter_counter_module_scss__WEBPACK_IMPORTED_MODULE_5___default().count_title),
                                                children: "Projects"
                                            })
                                        })
                                    ]
                                })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                        lg: {
                            span: 3
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_countup__WEBPACK_IMPORTED_MODULE_3___default()), {
                            start: focus ? 0 : null,
                            end: 527,
                            duration: 3,
                            children: ({ countUpRef  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_counter_counter_module_scss__WEBPACK_IMPORTED_MODULE_5___default().item),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: (_counter_counter_module_scss__WEBPACK_IMPORTED_MODULE_5___default().count_inner__text),
                                            children: "527"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: (_counter_counter_module_scss__WEBPACK_IMPORTED_MODULE_5___default().count),
                                            ref: countUpRef
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.InView, {
                                            as: "div",
                                            onChange: (inView)=>visibleChangeHandler(inView),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_counter_counter_module_scss__WEBPACK_IMPORTED_MODULE_5___default().count_title),
                                                children: "Clients"
                                            })
                                        })
                                    ]
                                })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                        lg: {
                            span: 3
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_countup__WEBPACK_IMPORTED_MODULE_3___default()), {
                            start: focus ? 0 : null,
                            end: 856,
                            duration: 3,
                            children: ({ countUpRef  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_counter_counter_module_scss__WEBPACK_IMPORTED_MODULE_5___default().item),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: (_counter_counter_module_scss__WEBPACK_IMPORTED_MODULE_5___default().count_inner__text),
                                            children: "856"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: (_counter_counter_module_scss__WEBPACK_IMPORTED_MODULE_5___default().count),
                                            ref: countUpRef
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.InView, {
                                            as: "div",
                                            onChange: (inView)=>visibleChangeHandler(inView),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_counter_counter_module_scss__WEBPACK_IMPORTED_MODULE_5___default().count_title),
                                                children: "Success"
                                            })
                                        })
                                    ]
                                })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                        lg: {
                            span: 3
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_countup__WEBPACK_IMPORTED_MODULE_3___default()), {
                            start: focus ? 0 : null,
                            end: 120,
                            duration: 3,
                            children: ({ countUpRef  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_counter_counter_module_scss__WEBPACK_IMPORTED_MODULE_5___default().item),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: (_counter_counter_module_scss__WEBPACK_IMPORTED_MODULE_5___default().count_inner__text),
                                            children: "120"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: (_counter_counter_module_scss__WEBPACK_IMPORTED_MODULE_5___default().count),
                                            ref: countUpRef
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.InView, {
                                            as: "div",
                                            onChange: (inView)=>visibleChangeHandler(inView),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_counter_counter_module_scss__WEBPACK_IMPORTED_MODULE_5___default().count_title),
                                                children: "Awards"
                                            })
                                        })
                                    ]
                                })
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CounterTwo);


/***/ }),

/***/ 9984:
/***/ (() => {



/***/ })

};
;