exports.id = 875;
exports.ids = [875];
exports.modules = {

/***/ 9289:
/***/ ((module) => {

// Exports
module.exports = {
	"btn": "banner-2_btn__gOw1P",
	"md-size": "banner-2_md-size__wEZAh",
	"btn_primary": "banner-2_btn_primary__SDIrF",
	"btn_secondary": "banner-2_btn_secondary__wBs5K",
	"btn_hover__white": "banner-2_btn_hover__white__Ne3Qp",
	"btn_hover__primary": "banner-2_btn_hover__primary__dwps3",
	"btn_hover__secondary": "banner-2_btn_hover__secondary__fD1mu",
	"bg": "banner-2_bg__9ftsa",
	"image": "banner-2_image__H4_E0",
	"content": "banner-2_content__FNxWK",
	"sub_title": "banner-2_sub_title__mqHXE",
	"title": "banner-2_title__eFcXl",
	"desc": "banner-2_desc__yny_F",
	"with__sticker": "banner-2_with__sticker__AQLYG"
};


/***/ }),

/***/ 9482:
/***/ ((module) => {

// Exports
module.exports = {
	"area": "testimonial_area__D0I_d",
	"y_axis__140": "testimonial_y_axis__140__9kcDi",
	"section__wrap": "testimonial_section__wrap__2yQOk",
	"subtitle": "testimonial_subtitle__wxiD1",
	"title": "testimonial_title__Ug7pI",
	"section__btn": "testimonial_section__btn__4V7T2",
	"item": "testimonial_item__JO1cW",
	"content": "testimonial_content__PmWbO",
	"desc": "testimonial_desc__gpB_E",
	"quotation": "testimonial_quotation__fOmA7",
	"direction_left": "testimonial_direction_left__7oFtg",
	"direction_right": "testimonial_direction_right__lMH5h",
	"user_info": "testimonial_user_info___dbPs",
	"user_content": "testimonial_user_content__igDS8",
	"user_name": "testimonial_user_name__J4ped",
	"user_occupation": "testimonial_user_occupation__QBPND"
};


/***/ }),

/***/ 8643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _banner_banner_2_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9289);
/* harmony import */ var _banner_banner_2_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_banner_banner_2_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);




function BannerTwo({ bannerTwoItems  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_banner_banner_2_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bg),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Container, {
            fluid: true,
            className: "px-0",
            children: bannerTwoItems === null || bannerTwoItems === void 0 ? void 0 : bannerTwoItems.map((bannerTwoItem, i)=>{
                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
                    className: "g-0",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                            lg: {
                                span: 6
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_banner_banner_2_module_scss__WEBPACK_IMPORTED_MODULE_3___default().image),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: bannerTwoItem === null || bannerTwoItem === void 0 ? void 0 : bannerTwoItem.image,
                                    alt: bannerTwoItem === null || bannerTwoItem === void 0 ? void 0 : bannerTwoItem.alt,
                                    className: "img-full"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                            lg: {
                                span: 6
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_banner_banner_2_module_scss__WEBPACK_IMPORTED_MODULE_3___default().with__sticker),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_banner_banner_2_module_scss__WEBPACK_IMPORTED_MODULE_3___default().content),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_banner_banner_2_module_scss__WEBPACK_IMPORTED_MODULE_3___default().sub_title),
                                                children: bannerTwoItem === null || bannerTwoItem === void 0 ? void 0 : bannerTwoItem.subTitle
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: (_banner_banner_2_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),
                                                dangerouslySetInnerHTML: {
                                                    __html: bannerTwoItem.title
                                                }
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_banner_banner_2_module_scss__WEBPACK_IMPORTED_MODULE_3___default().desc),
                                                children: bannerTwoItem === null || bannerTwoItem === void 0 ? void 0 : bannerTwoItem.desc
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_banner_banner_2_module_scss__WEBPACK_IMPORTED_MODULE_3___default().hero_btn__wrap),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                    href: "/projects",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: `me-20 ${(_banner_banner_2_module_scss__WEBPACK_IMPORTED_MODULE_3___default().btn)} ${(_banner_banner_2_module_scss__WEBPACK_IMPORTED_MODULE_3___default().btn_primary)} ${(_banner_banner_2_module_scss__WEBPACK_IMPORTED_MODULE_3___default().btn_hover__white)}`,
                                                        children: "Learn More"
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_banner_banner_2_module_scss__WEBPACK_IMPORTED_MODULE_3___default().sticker),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: bannerTwoItem === null || bannerTwoItem === void 0 ? void 0 : bannerTwoItem.stickerImage,
                                            alt: bannerTwoItem === null || bannerTwoItem === void 0 ? void 0 : bannerTwoItem.stickerAlt,
                                            className: "img-full"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }, i));
            })
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerTwo);


/***/ }),

/***/ 9984:
/***/ (() => {



/***/ })

};
;