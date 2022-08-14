exports.id = 66;
exports.ids = [66];
exports.modules = {

/***/ 8470:
/***/ ((module) => {

// Exports
module.exports = {
	"space__top": "brand_space__top__rmuSQ",
	"space__yaxis": "brand_space__yaxis__5JsOo",
	"bg": "brand_bg__aZ7X6",
	"item": "brand_item__ikgQW"
};


/***/ }),

/***/ 3108:
/***/ ((module) => {

// Exports
module.exports = {
	"area": "service_area__DF6p2",
	"img": "service_img__CNH_Q",
	"add__action": "service_add__action__jYpUQ",
	"icon": "service_icon__9TyRK",
	"section": "service_section__nDyrh",
	"section_title": "service_section_title__7F5iJ",
	"section_banner": "service_section_banner__lQal2",
	"info": "service_info__Pl1fT",
	"navigation__holder": "service_navigation__holder__dlwHq",
	"sidebar_widget": "service_sidebar_widget__kkJTh",
	"sidebar_list": "service_sidebar_list__6TgU5",
	"sidebar_brochure__widget": "service_sidebar_brochure__widget__yjLiO",
	"sidebar_brochure__list": "service_sidebar_brochure__list__Qguk2"
};


/***/ }),

/***/ 3036:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var _brand_brand_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8470);
/* harmony import */ var _brand_brand_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_brand_brand_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9984);
/* harmony import */ var swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3630);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2770);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__);







swiper__WEBPACK_IMPORTED_MODULE_4___default().use([
    swiper__WEBPACK_IMPORTED_MODULE_4__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_4__.Autoplay
]);
function BrandOne({ brandItems  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_brand_brand_module_scss__WEBPACK_IMPORTED_MODULE_6___default().bg)} ${(_brand_brand_module_scss__WEBPACK_IMPORTED_MODULE_6___default().space__top)}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Container, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                // autoplay={{
                //     delay: 4000,
                //     disableOnInteraction: false,
                // }}
                pagination: false,
                loop: false,
                breakpoints: {
                    1200: {
                        slidesPerView: 5,
                        slidesPerColumn: 2,
                        slidesPerGroup: 1,
                        slidesPerColumnFill: 'row',
                        spaceBetween: 100
                    },
                    768: {
                        slidesPerView: 4,
                        slidesPerColumn: 2,
                        slidesPerGroup: 1,
                        slidesPerColumnFill: 'row',
                        spaceBetween: 100
                    },
                    576: {
                        slidesPerView: 3,
                        slidesPerColumn: 2,
                        slidesPerGroup: 1,
                        slidesPerColumnFill: 'row',
                        spaceBetween: 30
                    },
                    480: {
                        slidesPerView: 2,
                        slidesPerColumn: 2,
                        slidesPerGroup: 1,
                        slidesPerColumnFill: 'row',
                        spaceBetween: 30
                    },
                    0: {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        slidesPerColumnFill: 'row',
                        spaceBetween: 30
                    }
                },
                children: brandItems === null || brandItems === void 0 ? void 0 : brandItems.map((brandItem, i)=>{
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: (_brand_brand_module_scss__WEBPACK_IMPORTED_MODULE_6___default().item),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: brandItem === null || brandItem === void 0 ? void 0 : brandItem.image,
                                    alt: brandItem === null || brandItem === void 0 ? void 0 : brandItem.imageAlt
                                })
                            })
                        })
                    }, i));
                })
            })
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BrandOne);


/***/ }),

/***/ 1520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var _service_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3108);
/* harmony import */ var _service_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_service_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_2__);




function ServiceItem(props) {
    const { title , mediumImage , slug  } = props.service;
    const imagePath = `/images/services/${slug}/${mediumImage}`;
    const linkPath = `/services/${slug}`;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "service-item",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                href: linkPath,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: (_service_module_scss__WEBPACK_IMPORTED_MODULE_3___default().img),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: "img-full",
                        src: imagePath,
                        alt: title
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_service_module_scss__WEBPACK_IMPORTED_MODULE_3___default().add__action),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "title mb-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            href: linkPath,
                            children: title
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_service_module_scss__WEBPACK_IMPORTED_MODULE_3___default().icon),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            href: "mailto://info@example.com",
                            passHref: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_2__.IoAddSharp, {})
                            })
                        })
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServiceItem);


/***/ })

};
;