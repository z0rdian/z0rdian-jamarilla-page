exports.id = 72;
exports.ids = [72];
exports.modules = {

/***/ 2193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blog_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5932);
/* harmony import */ var _blog_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_blog_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2770);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3630);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9984);
/* harmony import */ var swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_5__);







swiper__WEBPACK_IMPORTED_MODULE_3___default().use([
    swiper__WEBPACK_IMPORTED_MODULE_3__.Autoplay
]);
function BlogSidebar({ blogsSidebar , categories , tags  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_blog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().sidebar),
        children: blogsSidebar === null || blogsSidebar === void 0 ? void 0 : blogsSidebar.map((blogSidebar, i)=>{
            var ref;
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "sidebar-inner",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_blog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().sidebar_widget)} mb-40`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: (_blog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().sidebar_title),
                                children: blogSidebar === null || blogSidebar === void 0 ? void 0 : blogSidebar.searchTitle
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                className: (_blog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().sidebar_form),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: (_blog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().searchbox_input),
                                        type: "search",
                                        name: "search",
                                        placeholder: "Type your keyword..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: (_blog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().searchbox_btn),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoSearchOutline, {})
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_blog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().sidebar_widget)} mb-40`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: (_blog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().sidebar_title),
                                children: blogSidebar === null || blogSidebar === void 0 ? void 0 : blogSidebar.categoryTitle
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: `${(_blog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().sidebar_widget__list)}`,
                                children: categories === null || categories === void 0 ? void 0 : categories.map((category)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            href: `/blogs/category/${category.split('|')[0].trim()}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                dangerouslySetInnerHTML: {
                                                    __html: category.replace('|', '')
                                                }
                                            })
                                        })
                                    }, category)
                                )
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_blog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().sidebar_widget)} mb-40`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: `${(_blog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().sidebar_title)} mb-25`,
                                children: blogSidebar === null || blogSidebar === void 0 ? void 0 : blogSidebar.popularPostTitle
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_blog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().sidebar_list__slider),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {
                                    autoplay: false,
                                    speed: 1000,
                                    spaceBetween: 0,
                                    slidesPerView: 1,
                                    loop: false,
                                    breakpoints: {
                                        1200: {
                                            slidesPerView: 1,
                                            slidesPerColumn: 2,
                                            slidesPerGroup: 1,
                                            slidesPerColumnFill: 'row'
                                        },
                                        992: {
                                            slidesPerView: 1,
                                            slidesPerColumn: 2,
                                            slidesPerGroup: 1,
                                            slidesPerColumnFill: 'row'
                                        },
                                        576: {
                                            slidesPerView: 1,
                                            slidesPerColumn: 2,
                                            slidesPerGroup: 1,
                                            slidesPerColumnFill: 'row'
                                        },
                                        0: {
                                            slidesPerView: 1,
                                            slidesPerColumn: 2,
                                            slidesPerGroup: 1,
                                            slidesPerColumnFill: 'row'
                                        }
                                    },
                                    children: blogSidebar === null || blogSidebar === void 0 ? void 0 : (ref = blogSidebar.listSlider) === null || ref === void 0 ? void 0 : ref.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
                                            className: (_blog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().sidebar_list__item),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                    href: `/${item.path}`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: (_blog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().sidebar_list__img),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: item.slideImage,
                                                            alt: item.slideImageAlt
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_blog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().sidebar_list__content),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: (_blog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().sidebar_list__title),
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                                href: `/${item.path}`,
                                                                children: item.title
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: (_blog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().sidebar_list__meta),
                                                            children: item.meta
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, index)
                                    )
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_blog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().sidebar_widget)}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: (_blog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().sidebar_title),
                                children: blogSidebar === null || blogSidebar === void 0 ? void 0 : blogSidebar.tagTitle
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: `${(_blog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().sidebar_widget__tags)}`,
                                children: tags === null || tags === void 0 ? void 0 : tags.map((tag)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            href: `/blogs/tag/${tag}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                children: tag
                                            })
                                        })
                                    }, tag)
                                )
                            })
                        ]
                    })
                ]
            }, i));
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogSidebar);


/***/ }),

/***/ 8044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ getBlogCategories)
/* harmony export */ });
/* harmony import */ var _items_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7698);
/* harmony import */ var _utils_flatDeep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3847);


const getBlogCategories = ()=>{
    const blogs = (0,_items_util__WEBPACK_IMPORTED_MODULE_0__/* .getAllItems */ .Nx)('blogs');
    const categories = (0,_utils_flatDeep__WEBPACK_IMPORTED_MODULE_1__/* .flatDeep */ .d)(blogs.map((blog)=>blog.category
    ));
    return [
        ...new Set(categories)
    ];
};


/***/ }),

/***/ 3434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ getBlogTags)
/* harmony export */ });
/* harmony import */ var _items_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7698);
/* harmony import */ var _utils_flatDeep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3847);


const getBlogTags = ()=>{
    const blogs = (0,_items_util__WEBPACK_IMPORTED_MODULE_0__/* .getAllItems */ .Nx)("blogs");
    const tags = (0,_utils_flatDeep__WEBPACK_IMPORTED_MODULE_1__/* .flatDeep */ .d)(blogs.map((blog)=>blog.tag
    ));
    return [
        ...new Set(tags)
    ];
};


/***/ }),

/***/ 3847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ flatDeep)
/* harmony export */ });
const flatDeep = (arr, d = 1)=>{
    return d > 0 ? arr.reduce((acc, val)=>acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val)
    , []) : arr.slice();
};


/***/ }),

/***/ 9984:
/***/ (() => {



/***/ })

};
;