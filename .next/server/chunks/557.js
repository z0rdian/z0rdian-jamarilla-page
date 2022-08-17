exports.id = 557;
exports.ids = [557];
exports.modules = {

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

/***/ 7745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);


function BrandBreadcrumb({ brands_breadcrumb  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "page_banner__bg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Container, {
            children: brands_breadcrumb?.map((brand_breadcrumb, i)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "page_content",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "page_subtitle",
                            children: brand_breadcrumb?.breadcrumbSubtitle
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "page_title",
                            children: brand_breadcrumb?.breadcrumbTitle
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "page_desc",
                            children: brand_breadcrumb?.breadcrumbDesc
                        })
                    ]
                }, i);
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BrandBreadcrumb);


/***/ }),

/***/ 165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _testimonial_testimonial_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9482);
/* harmony import */ var _testimonial_testimonial_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_testimonial_testimonial_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2770);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3630);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9984);
/* harmony import */ var swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_5__);







swiper__WEBPACK_IMPORTED_MODULE_3___default().use([
    swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_3__.Autoplay
]);
function TestimonialTwo({ testimonialItems , testimonial_section__items  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_testimonial_testimonial_module_scss__WEBPACK_IMPORTED_MODULE_6___default().area)} ${(_testimonial_testimonial_module_scss__WEBPACK_IMPORTED_MODULE_6___default().y_axis__140)}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                className: "g-30",
                children: [
                    testimonial_section__items?.map((testimonial_section__item, index)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                            xl: {
                                span: 5
                            },
                            lg: {
                                span: 6
                            },
                            className: "pb-30 pb-lg-0",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_testimonial_testimonial_module_scss__WEBPACK_IMPORTED_MODULE_6___default().section__wrap),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_testimonial_testimonial_module_scss__WEBPACK_IMPORTED_MODULE_6___default().subtitle),
                                        children: testimonial_section__item?.subTitle
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: (_testimonial_testimonial_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title),
                                        children: testimonial_section__item?.title
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_testimonial_testimonial_module_scss__WEBPACK_IMPORTED_MODULE_6___default().desc),
                                        dangerouslySetInnerHTML: {
                                            __html: testimonial_section__item.desc
                                        }
                                    })
                                ]
                            })
                        }, index);
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                        xl: {
                            span: 7
                        },
                        lg: {
                            span: 6
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {
                            // autoplay={{
                            //     delay: 4000,
                            //     disableOnInteraction: false,
                            // }}
                            pagination: false,
                            spaceBetween: 30,
                            loop: false,
                            breakpoints: {
                                1200: {
                                    slidesPerView: 2,
                                    slidesPerColumn: 1,
                                    slidesPerGroup: 1,
                                    slidesPerColumnFill: "colums"
                                },
                                992: {
                                    slidesPerView: 1,
                                    slidesPerColumn: 2,
                                    slidesPerGroup: 1,
                                    slidesPerColumnFill: "row"
                                },
                                768: {
                                    slidesPerView: 2
                                },
                                576: {
                                    slidesPerView: 1
                                },
                                0: {
                                    slidesPerView: 1
                                }
                            },
                            children: testimonialItems?.map((testimonialItem, i)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_testimonial_testimonial_module_scss__WEBPACK_IMPORTED_MODULE_6___default().item),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_testimonial_testimonial_module_scss__WEBPACK_IMPORTED_MODULE_6___default().content),
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: (_testimonial_testimonial_module_scss__WEBPACK_IMPORTED_MODULE_6___default().desc),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: `${(_testimonial_testimonial_module_scss__WEBPACK_IMPORTED_MODULE_6___default().quotation)} ${(_testimonial_testimonial_module_scss__WEBPACK_IMPORTED_MODULE_6___default().direction_left)}`,
                                                            children: "“"
                                                        }),
                                                        testimonialItem?.excerpt,
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: `${(_testimonial_testimonial_module_scss__WEBPACK_IMPORTED_MODULE_6___default().quotation)} ${(_testimonial_testimonial_module_scss__WEBPACK_IMPORTED_MODULE_6___default().direction_right)}`,
                                                            children: "”"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_testimonial_testimonial_module_scss__WEBPACK_IMPORTED_MODULE_6___default().user_info),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "user_img",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: testimonialItem?.avatar,
                                                                alt: testimonialItem?.avatarAlt
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: (_testimonial_testimonial_module_scss__WEBPACK_IMPORTED_MODULE_6___default().user_content),
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    className: (_testimonial_testimonial_module_scss__WEBPACK_IMPORTED_MODULE_6___default().user_name),
                                                                    children: testimonialItem?.userName
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: (_testimonial_testimonial_module_scss__WEBPACK_IMPORTED_MODULE_6___default().user_occupation),
                                                                    children: testimonialItem?.userOccupation
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }, i);
                            })
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestimonialTwo);


/***/ })

};
;