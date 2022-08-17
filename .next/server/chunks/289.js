exports.id = 289;
exports.ids = [289];
exports.modules = {

/***/ 1049:
/***/ ((module) => {

// Exports
module.exports = {
	"area": "about_area__AAuJJ",
	"section": "about_section__LTcXt",
	"section__wrap": "about_section__wrap__lEuNS",
	"section__title": "about_section__title__r5NYl",
	"section__desc": "about_section__desc__v3og8",
	"img": "about_img__z13ET",
	"img__wrap": "about_img__wrap__v7Wbk",
	"pattern": "about_pattern__IldhE",
	"content": "about_content__5_AXf",
	"experience": "about_experience__3_ttY",
	"experience_content": "about_experience_content__WKTjo",
	"year": "about_year__maAzm",
	"our_progress": "about_our_progress__mI5nD",
	"experience_img": "about_experience_img__emIeF",
	"subtitle": "about_subtitle__djXM1",
	"desc": "about_desc___xIbi",
	"list": "about_list__N45Oo",
	"list__icon": "about_list__icon__kw7Ny",
	"list__text": "about_list__text__LhqHW"
};


/***/ }),

/***/ 8178:
/***/ ((module) => {

// Exports
module.exports = {
	"area": "counter_area__CInUI",
	"max_md_g_y__80": "counter_max_md_g_y__80__tVfOc",
	"pb__140": "counter_pb__140__Rt8Xu",
	"item": "counter_item__SJtZW",
	"count": "counter_count__4pMMP",
	"count_inner__text": "counter_count_inner__text__zeDzQ",
	"count_title": "counter_count_title__oqT3x"
};


/***/ }),

/***/ 2165:
/***/ ((module) => {

// Exports
module.exports = {
	"bg": "latest-project_bg__a8nc8",
	"slider": "latest-project_slider__Qj1Tv",
	"item": "latest-project_item__SGJIs",
	"slider_with__section": "latest-project_slider_with__section__qG3gA",
	"section_area": "latest-project_section_area__kNBru",
	"section_with__navigation": "latest-project_section_with__navigation__K1Mfu",
	"section_title": "latest-project_section_title__zYXdD",
	"section_title__wrap": "latest-project_section_title__wrap__Hdill",
	"section_navigation": "latest-project_section_navigation__dBiQp",
	"button_next": "latest-project_button_next__rKUsJ",
	"button_prev": "latest-project_button_prev__JRh6t",
	"btn": "latest-project_btn__V2Dtc",
	"btn__wrap": "latest-project_btn__wrap__yNAeJ"
};


/***/ }),

/***/ 156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _about_about_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1049);
/* harmony import */ var _about_about_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_about_about_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);




function AboutOne({ aboutItems  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_about_about_module_scss__WEBPACK_IMPORTED_MODULE_3___default().area),
        children: aboutItems?.map((aboutItem, i)=>{
            const CheckIcon = react_icons_fa__WEBPACK_IMPORTED_MODULE_2__[aboutItem?.checkIcon];
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Container, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_about_about_module_scss__WEBPACK_IMPORTED_MODULE_3___default().section),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_about_about_module_scss__WEBPACK_IMPORTED_MODULE_3___default().section__wrap),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_about_about_module_scss__WEBPACK_IMPORTED_MODULE_3___default().section__title),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: aboutItem?.sectionSubtitle
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            children: aboutItem?.sectionTitle
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_about_about_module_scss__WEBPACK_IMPORTED_MODULE_3___default().section__desc),
                                    dangerouslySetInnerHTML: {
                                        __html: aboutItem.sectionDesc
                                    }
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                lg: {
                                    span: 6
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_about_about_module_scss__WEBPACK_IMPORTED_MODULE_3___default().img__wrap),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_about_about_module_scss__WEBPACK_IMPORTED_MODULE_3___default().pattern),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: aboutItem?.pattern,
                                                alt: aboutItem?.patternAlt
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_about_about_module_scss__WEBPACK_IMPORTED_MODULE_3___default().img),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: aboutItem?.image,
                                                alt: aboutItem?.alt,
                                                className: "img-full"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                lg: {
                                    span: 6
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_about_about_module_scss__WEBPACK_IMPORTED_MODULE_3___default().content),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_about_about_module_scss__WEBPACK_IMPORTED_MODULE_3___default().experience),
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_about_about_module_scss__WEBPACK_IMPORTED_MODULE_3___default().experience_content),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: (_about_about_module_scss__WEBPACK_IMPORTED_MODULE_3___default().year),
                                                            children: aboutItem?.experienceYear
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                            className: (_about_about_module_scss__WEBPACK_IMPORTED_MODULE_3___default().our_progress),
                                                            dangerouslySetInnerHTML: {
                                                                __html: aboutItem.ourProgress
                                                            }
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_about_about_module_scss__WEBPACK_IMPORTED_MODULE_3___default().experience_img),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: aboutItem?.experienceImage,
                                                        alt: aboutItem?.experienceAlt
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: (_about_about_module_scss__WEBPACK_IMPORTED_MODULE_3___default().subtitle),
                                            children: aboutItem?.aboutSubtitle
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_about_about_module_scss__WEBPACK_IMPORTED_MODULE_3___default().desc),
                                            children: aboutItem.aboutDesc
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            className: (_about_about_module_scss__WEBPACK_IMPORTED_MODULE_3___default().list__item),
                                            children: aboutItem?.listItem?.map((item, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    className: (_about_about_module_scss__WEBPACK_IMPORTED_MODULE_3___default().list),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: (_about_about_module_scss__WEBPACK_IMPORTED_MODULE_3___default().list__icon),
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CheckIcon, {})
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_about_about_module_scss__WEBPACK_IMPORTED_MODULE_3___default().list__text),
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: item
                                                            })
                                                        })
                                                    ]
                                                }, i))
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }, i);
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutOne);


/***/ }),

/***/ 4672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ latest_project)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./src/components/home-page/latest-project.module.scss
var latest_project_module = __webpack_require__(2165);
var latest_project_module_default = /*#__PURE__*/__webpack_require__.n(latest_project_module);
// EXTERNAL MODULE: ./node_modules/swiper/swiper-bundle.css
var swiper_bundle = __webpack_require__(9984);
// EXTERNAL MODULE: external "swiper/react"
var react_ = __webpack_require__(3630);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "swiper"
var external_swiper_ = __webpack_require__(2770);
var external_swiper_default = /*#__PURE__*/__webpack_require__.n(external_swiper_);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: ./src/components/projects/project-slider.js


function ProjectSlider(props) {
    const { title , subTitle , duration , image , slug  } = props.project;
    const imagePath = `/images/projects/${slug}/${image}`;
    const linkPath = `/projects/${slug}`;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "project-item",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: linkPath,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "project-img",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: imagePath,
                        alt: title
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "project-content",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "sub-title",
                        children: subTitle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "title mb-0",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: linkPath,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: title
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: duration
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const project_slider = (ProjectSlider);

;// CONCATENATED MODULE: ./src/components/home-page/latest-project.js










external_swiper_default().use([
    external_swiper_.Pagination,
    external_swiper_.Autoplay,
    external_swiper_.Navigation
]);
function LatestProject(props) {
    const { projects , project_section__items  } = props;
    const { 0: swiper , 1: setSwiper  } = (0,external_react_.useState)();
    const prevRef = (0,external_react_.useRef)();
    const nextRef = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        if (swiper) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
        }
    }, [
        swiper
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (latest_project_module_default()).bg,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (latest_project_module_default()).btn__wrap,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/contact",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: (latest_project_module_default()).btn,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Cont\xe1ctanos"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                    fluid: true,
                    className: "px-0",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (latest_project_module_default()).slider_with__section,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (latest_project_module_default()).section_area,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (latest_project_module_default()).section_with__navigation,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (latest_project_module_default()).section_title__wrap,
                                            children: project_section__items?.map((project_section__item, index)=>{
                                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: (latest_project_module_default()).section_title,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: project_section__item?.subTitle
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                            dangerouslySetInnerHTML: {
                                                                __html: project_section__item?.title
                                                            }
                                                        })
                                                    ]
                                                }, index);
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (latest_project_module_default()).section_navigation,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (latest_project_module_default()).button_next,
                                                    ref: prevRef,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaChevronLeft, {})
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (latest_project_module_default()).button_prev,
                                                    ref: nextRef,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaChevronRight, {})
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (latest_project_module_default()).slider,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Swiper, {
                                    // autoplay={{ delay: 4000, disableOnInteraction: false }}
                                    pagination: false,
                                    spaceBetween: 0,
                                    navigation: {
                                        prevEl: prevRef?.current,
                                        nextEl: nextRef?.current
                                    },
                                    onSwiper: setSwiper,
                                    updateOnWindowResize: true,
                                    observer: true,
                                    observeParents: true,
                                    breakpoints: {
                                        1200: {
                                            slidesPerView: 4
                                        },
                                        992: {
                                            slidesPerView: 3
                                        },
                                        576: {
                                            slidesPerView: 2
                                        },
                                        0: {
                                            slidesPerView: 1
                                        }
                                    },
                                    children: projects.map((project)=>{
                                        return /*#__PURE__*/ jsx_runtime_.jsx(react_.SwiperSlide, {
                                            className: (latest_project_module_default()).item,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(project_slider, {
                                                project: project
                                            })
                                        }, project.slug);
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const latest_project = (LatestProject);


/***/ })

};
;