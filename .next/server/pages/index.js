(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6632:
/***/ ((module) => {

// Exports
module.exports = {
	"area": "banner_area__Dl07w",
	"title": "banner_title__mmqjX",
	"desc": "banner_desc__pGs12",
	"bg": "banner_bg__LQwe5",
	"bg-01": "banner_bg-01__1P4Z7",
	"bg-02": "banner_bg-02__QdGCr",
	"bg-03": "banner_bg-03__Ppcgx"
};


/***/ }),

/***/ 2907:
/***/ ((module) => {

// Exports
module.exports = {
	"btn": "hero_btn__nVu6W",
	"md-size": "hero_md-size__Jmc9q",
	"btn_primary": "hero_btn_primary__EoTnO",
	"btn_secondary": "hero_btn_secondary__5jHPe",
	"btn_hover__white": "hero_btn_hover__white__JOgZ9",
	"btn_hover__primary": "hero_btn_hover__primary__TKpLP",
	"btn_hover__secondary": "hero_btn_hover__secondary__MbD1O",
	"slide-bg": "hero_slide-bg__fLucr",
	"slide-bg-01": "hero_slide-bg-01__q9m0y",
	"slide-bg-02": "hero_slide-bg-02__wcK73",
	"subtitle": "hero_subtitle__XOxsf",
	"title": "hero_title__j7SVR",
	"desc": "hero_desc__uKsOm",
	"btn_wrap": "hero_btn_wrap__LFAqP"
};


/***/ }),

/***/ 6887:
/***/ ((module) => {

// Exports
module.exports = {
	"area": "latest-blog_area__XolIH",
	"section__holder": "latest-blog_section__holder__hdCAD",
	"section_title": "latest-blog_section_title__CKi5_",
	"section_title__wrap": "latest-blog_section_title__wrap__Vutdr",
	"sub_title": "latest-blog_sub_title__fxRLq",
	"title": "latest-blog_title__Yd6v_",
	"section_desc": "latest-blog_section_desc__xEhCu"
};


/***/ }),

/***/ 8395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/about/index.js
var about = __webpack_require__(156);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./src/components/banner/banner.module.scss
var banner_module = __webpack_require__(6632);
var banner_module_default = /*#__PURE__*/__webpack_require__.n(banner_module);
;// CONCATENATED MODULE: ./src/components/banner/index.js



function BannerOne({ bannerItems  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (banner_module_default()).area,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                className: "g-4",
                children: bannerItems === null || bannerItems === void 0 ? void 0 : bannerItems.map((bannerItem, i)=>{
                    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                        lg: {
                            span: 4
                        },
                        md: {
                            span: 6
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `${bannerItem.bannerBG.split(' ').map((item)=>(banner_module_default())[item]
                            ).join(' ')}`,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (banner_module_default()).content,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: (banner_module_default()).title,
                                        children: bannerItem === null || bannerItem === void 0 ? void 0 : bannerItem.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (banner_module_default()).desc,
                                        children: bannerItem === null || bannerItem === void 0 ? void 0 : bannerItem.desc
                                    })
                                ]
                            })
                        })
                    }, i));
                })
            })
        })
    }));
}
/* harmony default export */ const banner = (BannerOne);

// EXTERNAL MODULE: ./src/components/banner/index-2.js
var index_2 = __webpack_require__(8643);
// EXTERNAL MODULE: ./src/components/brand/index.js
var brand = __webpack_require__(3036);
// EXTERNAL MODULE: external "react-countup"
var external_react_countup_ = __webpack_require__(609);
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_);
// EXTERNAL MODULE: external "react-intersection-observer"
var external_react_intersection_observer_ = __webpack_require__(9785);
// EXTERNAL MODULE: ./src/components/counter/counter.module.scss
var counter_module = __webpack_require__(8178);
var counter_module_default = /*#__PURE__*/__webpack_require__.n(counter_module);
;// CONCATENATED MODULE: ./src/components/counter/index.js






function Counter() {
    const { 0: focus , 1: setFocus  } = (0,external_react_.useState)(false);
    const visibleChangeHandler = (isVisible)=>{
        if (isVisible) {
            if (!focus) {
                setFocus(true);
            }
        }
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (counter_module_default()).area,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                className: (counter_module_default()).max_md_g_y__80,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                        lg: {
                            span: 3
                        },
                        sm: {
                            span: 6
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_countup_default()), {
                            start: focus ? 0 : null,
                            end: 985,
                            duration: 3,
                            children: ({ countUpRef  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (counter_module_default()).item,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: (counter_module_default()).count_inner__text,
                                            children: "985"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: (counter_module_default()).count,
                                            ref: countUpRef
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_intersection_observer_.InView, {
                                            as: "div",
                                            onChange: (inView)=>visibleChangeHandler(inView)
                                            ,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: (counter_module_default()).count_title,
                                                children: "Projects"
                                            })
                                        })
                                    ]
                                })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                        lg: {
                            span: 3
                        },
                        sm: {
                            span: 6
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_countup_default()), {
                            start: focus ? 0 : null,
                            end: 527,
                            duration: 3,
                            children: ({ countUpRef  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (counter_module_default()).item,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: (counter_module_default()).count_inner__text,
                                            children: "527"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: (counter_module_default()).count,
                                            ref: countUpRef
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_intersection_observer_.InView, {
                                            as: "div",
                                            onChange: (inView)=>visibleChangeHandler(inView)
                                            ,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: (counter_module_default()).count_title,
                                                children: "Clients"
                                            })
                                        })
                                    ]
                                })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                        lg: {
                            span: 3
                        },
                        sm: {
                            span: 6
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_countup_default()), {
                            start: focus ? 0 : null,
                            end: 856,
                            duration: 3,
                            children: ({ countUpRef  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (counter_module_default()).item,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: (counter_module_default()).count_inner__text,
                                            children: "856"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: (counter_module_default()).count,
                                            ref: countUpRef
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_intersection_observer_.InView, {
                                            as: "div",
                                            onChange: (inView)=>visibleChangeHandler(inView)
                                            ,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: (counter_module_default()).count_title,
                                                children: "Success"
                                            })
                                        })
                                    ]
                                })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                        lg: {
                            span: 3
                        },
                        sm: {
                            span: 6
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_countup_default()), {
                            start: focus ? 0 : null,
                            end: 120,
                            duration: 3,
                            children: ({ countUpRef  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (counter_module_default()).item,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: (counter_module_default()).count_inner__text,
                                            children: "120"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: (counter_module_default()).count,
                                            ref: countUpRef
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_intersection_observer_.InView, {
                                            as: "div",
                                            onChange: (inView)=>visibleChangeHandler(inView)
                                            ,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: (counter_module_default()).count_title,
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
    }));
}
/* harmony default export */ const counter = (Counter);

// EXTERNAL MODULE: ./src/components/home-page/hero.module.scss
var hero_module = __webpack_require__(2907);
var hero_module_default = /*#__PURE__*/__webpack_require__.n(hero_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "swiper"
var external_swiper_ = __webpack_require__(2770);
var external_swiper_default = /*#__PURE__*/__webpack_require__.n(external_swiper_);
// EXTERNAL MODULE: external "swiper/react"
var react_ = __webpack_require__(3630);
// EXTERNAL MODULE: ./node_modules/swiper/swiper-bundle.css
var swiper_bundle = __webpack_require__(9984);
;// CONCATENATED MODULE: ./src/components/home-page/hero.js






external_swiper_default().use([
    external_swiper_.Navigation,
    external_swiper_.Pagination,
    external_swiper_.Autoplay
]);
function Hero({ heroItems  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Swiper, {
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        speed: 1000,
        pagination: {
            clickable: true,
            type: 'bullets'
        },
        navigation: true,
        updateOnWindowResize: true,
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        className: "hero-slider",
        children: heroItems === null || heroItems === void 0 ? void 0 : heroItems.map((heroItem, i)=>{
            return(/*#__PURE__*/ jsx_runtime_.jsx(react_.SwiperSlide, {
                className: `animation-style-01 ${heroItem.heroBG.split(' ').map((item)=>(hero_module_default())[item]
                ).join(' ')}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `content`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: `subtitle-animation ${(hero_module_default()).subtitle}`,
                                children: heroItem === null || heroItem === void 0 ? void 0 : heroItem.subtitle
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `title-animation ${(hero_module_default()).title}`,
                                dangerouslySetInnerHTML: {
                                    __html: heroItem.title
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `desc-animation ${(hero_module_default()).desc}`,
                                dangerouslySetInnerHTML: {
                                    __html: heroItem.desc
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: `btn-animation ${(hero_module_default()).btn_wrap}`,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/projects/project-fullwidth",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: `me-20 ${(hero_module_default()).btn} ${(hero_module_default()).btn_secondary} ${(hero_module_default()).btn_hover__white}`,
                                            children: heroItem === null || heroItem === void 0 ? void 0 : heroItem.btnSecondaryText
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/contact",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: `${(hero_module_default()).btn} ${(hero_module_default()).btn_primary} ${(hero_module_default()).btn_hover__white}`,
                                            children: heroItem === null || heroItem === void 0 ? void 0 : heroItem.btnPrimaryText
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            }, i));
        })
    }));
}
/* harmony default export */ const hero = (Hero);

// EXTERNAL MODULE: ./src/components/services/service-item.js
var service_item = __webpack_require__(1520);
// EXTERNAL MODULE: ./src/components/services/service.module.scss
var service_module = __webpack_require__(3108);
var service_module_default = /*#__PURE__*/__webpack_require__.n(service_module);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: ./src/components/home-page/homepage-services.js









external_swiper_default().use([
    external_swiper_.Pagination,
    external_swiper_.Autoplay
]);
function HomePageServices(props) {
    const { services , service_section__items  } = props;
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
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (service_module_default()).area,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
            children: [
                service_section__items.map((service_section__item, index)=>{
                    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (service_module_default()).section,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (service_module_default()).section_title,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: service_section__item === null || service_section__item === void 0 ? void 0 : service_section__item.subTitle
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        dangerouslySetInnerHTML: {
                                            __html: service_section__item.title
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (service_module_default()).section_banner,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: (service_module_default()).info,
                                    dangerouslySetInnerHTML: {
                                        __html: service_section__item.bannerInfo
                                    }
                                })
                            })
                        ]
                    }, index));
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (service_module_default()).navigation__holder,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "service-navigation",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "button-next",
                                    ref: prevRef,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaChevronLeft, {})
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "button-prev",
                                    ref: nextRef,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaChevronRight, {})
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                lg: {
                                    span: 12
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Swiper, {
                                    // autoplay={{ delay: 4000, disableOnInteraction: false }}
                                    pagination: false,
                                    spaceBetween: 30,
                                    navigation: {
                                        prevEl: prevRef === null || prevRef === void 0 ? void 0 : prevRef.current,
                                        nextEl: nextRef === null || nextRef === void 0 ? void 0 : nextRef.current
                                    },
                                    onSwiper: setSwiper,
                                    updateOnWindowResize: true,
                                    observer: true,
                                    observeParents: true,
                                    breakpoints: {
                                        1200: {
                                            slidesPerView: 3
                                        },
                                        992: {
                                            slidesPerView: 3
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
                                    className: (service_module_default()).slider,
                                    children: services.map((service)=>{
                                        return(/*#__PURE__*/ jsx_runtime_.jsx(react_.SwiperSlide, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(service_item/* default */.Z, {
                                                service: service
                                            })
                                        }, service.slug));
                                    })
                                })
                            })
                        })
                    ]
                })
            ]
        })
    }));
}
/* harmony default export */ const homepage_services = (HomePageServices);

// EXTERNAL MODULE: ./src/components/home-page/latest-blog.module.scss
var latest_blog_module = __webpack_require__(6887);
var latest_blog_module_default = /*#__PURE__*/__webpack_require__.n(latest_blog_module);
// EXTERNAL MODULE: ./src/components/blogs/blog.module.scss
var blog_module = __webpack_require__(5932);
var blog_module_default = /*#__PURE__*/__webpack_require__.n(blog_module);
;// CONCATENATED MODULE: ./src/components/blogs/latest-blog-item.js



function LatestBlogItem(props) {
    const { title , blogMeta , excerpt , mediumImage , slug  } = props.blog;
    const imagePath = `/images/blogs/${slug}/${mediumImage}`;
    const linkPath = `/blogs/${slug}`;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (blog_module_default()).blog_item,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: linkPath,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: (blog_module_default()).blog_img,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "img-full",
                        src: imagePath,
                        alt: title
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (blog_module_default()).blog_content,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (blog_module_default()).blog_meta,
                        children: blogMeta
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: (blog_module_default()).blog_title,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: linkPath,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: title
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (blog_module_default()).blog_desc,
                        children: excerpt
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: (blog_module_default()).blog_btn__wrap,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: linkPath,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: (blog_module_default()).blog_btn__link,
                                        children: "Read more"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: linkPath,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: "35 Comments"
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const latest_blog_item = (LatestBlogItem);

;// CONCATENATED MODULE: ./src/components/home-page/latest-blog.js

// import Link from 'next/link';






external_swiper_default().use([
    external_swiper_.Pagination,
    external_swiper_.Autoplay
]);
function LatestBlog(props) {
    const { blogs , blog_section__items  } = props;
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (latest_blog_module_default()).area,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
            children: [
                blog_section__items === null || blog_section__items === void 0 ? void 0 : blog_section__items.map((blog_section__item, index)=>{
                    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (latest_blog_module_default()).section__holder,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (latest_blog_module_default()).section_title__wrap,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (latest_blog_module_default()).section_title,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: (latest_blog_module_default()).sub_title,
                                            children: blog_section__item === null || blog_section__item === void 0 ? void 0 : blog_section__item.subTitle
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: (latest_blog_module_default()).title,
                                            children: blog_section__item === null || blog_section__item === void 0 ? void 0 : blog_section__item.title
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (latest_blog_module_default()).section_desc,
                                    children: blog_section__item === null || blog_section__item === void 0 ? void 0 : blog_section__item.excerpt
                                })
                            ]
                        })
                    }, index));
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                        lg: {
                            span: 12
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (latest_blog_module_default()).slider,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Swiper, {
                                // autoplay={{ delay: 4000, disableOnInteraction: false }}
                                pagination: false,
                                spaceBetween: 30,
                                updateOnWindowResize: true,
                                observer: true,
                                observeParents: true,
                                breakpoints: {
                                    1200: {
                                        slidesPerView: 3
                                    },
                                    992: {
                                        slidesPerView: 2
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
                                children: blogs.map((blog)=>{
                                    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.SwiperSlide, {
                                        className: (latest_blog_module_default()).blog__item,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(latest_blog_item, {
                                            blog: blog
                                        })
                                    }, blog.slug));
                                })
                            })
                        })
                    })
                })
            ]
        })
    }));
}
/* harmony default export */ const latest_blog = (LatestBlog);

// EXTERNAL MODULE: ./src/components/home-page/latest-project.js + 1 modules
var latest_project = __webpack_require__(4672);
// EXTERNAL MODULE: ./src/components/layout/footer.js
var footer = __webpack_require__(5608);
// EXTERNAL MODULE: ./src/components/newsletter/newsletter.js
var newsletter = __webpack_require__(1939);
// EXTERNAL MODULE: ./src/components/team/index.js
var team = __webpack_require__(1963);
// EXTERNAL MODULE: ./src/components/testimonial/index.js
var testimonial = __webpack_require__(4286);
// EXTERNAL MODULE: ./src/lib/items-util.js
var items_util = __webpack_require__(7698);
;// CONCATENATED MODULE: ./src/pages/index.js

















function HomePage(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Home - Amarilla Construcciones"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "OxyBuild - Construction React Next JS Template Industry, Products Manufacturing Company, building companies, architecture firms, and the like can take to their advantage by using OxyBuild - Construction React Next JS Template."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(hero, {
                heroItems: props.heroItems
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(banner, {
                bannerItems: props.bannerItems
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(about/* default */.Z, {
                aboutItems: props.aboutItems
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(latest_project/* default */.Z, {
                projects: props.projects,
                project_section__items: props.project_section__items
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(homepage_services, {
                services: props.services,
                service_section__items: props.service_section__items
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(index_2/* default */.Z, {
                bannerTwoItems: props.bannerTwoItems
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(counter, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(team/* default */.Z, {
                teamItems: props.teamItems,
                team_section__items: props.team_section__items
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(testimonial/* default */.Z, {
                testimonialItems: props.testimonialItems,
                testimonial_section__items: props.testimonial_section__items
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(latest_blog, {
                blogs: props.blogs,
                blog_section__items: props.blog_section__items
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(newsletter/* default */.Z, {
                newsletterItems: props.newsletterItems
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer/* default */.Z, {
                footerItems: props.footerItems
            })
        ]
    }));
}
function getStaticProps() {
    const heroItems = (0,items_util/* getAllItems */.Nx)("heros");
    const bannerItems = (0,items_util/* getAllItems */.Nx)("banner");
    const aboutItems = (0,items_util/* getAllItems */.Nx)("about");
    const project_section__items = (0,items_util/* getAllItems */.Nx)("project-section");
    const projects = (0,items_util/* getAllItems */.Nx)("projects");
    const LatestProject1 = (0,items_util/* getFeaturedItems */.E)(projects);
    const brandItems = (0,items_util/* getAllItems */.Nx)("brand");
    const services = (0,items_util/* getAllItems */.Nx)("services");
    const service_section__items = (0,items_util/* getAllItems */.Nx)("service-section");
    const HomePageServices1 = (0,items_util/* getFeaturedItems */.E)(services);
    const bannerTwoItems = (0,items_util/* getAllItems */.Nx)("banner-2");
    const teamItems = (0,items_util/* getAllItems */.Nx)("team");
    const team_section__items = (0,items_util/* getAllItems */.Nx)("team-section");
    const testimonialItems = (0,items_util/* getAllItems */.Nx)("testimonial");
    const testimonial_section__items = (0,items_util/* getAllItems */.Nx)("testimonial-section");
    const blog_section__items = (0,items_util/* getAllItems */.Nx)("blog-section");
    const blogs = (0,items_util/* getAllItems */.Nx)("blogs");
    const LatestBlog1 = (0,items_util/* getFeaturedItems */.E)(blogs);
    const newsletterItems = (0,items_util/* getAllItems */.Nx)("newsletter");
    const footerItems = (0,items_util/* getAllItems */.Nx)("footer");
    return {
        props: {
            heroItems,
            bannerItems,
            aboutItems,
            project_section__items,
            projects: LatestProject1,
            brandItems,
            services: HomePageServices1,
            service_section__items,
            bannerTwoItems,
            teamItems,
            team_section__items,
            testimonialItems,
            testimonial_section__items,
            blog_section__items,
            blogs: LatestBlog1,
            newsletterItems,
            footerItems
        }
    };
}
/* harmony default export */ const pages = (HomePage);


/***/ }),

/***/ 8076:
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ 609:
/***/ ((module) => {

"use strict";
module.exports = require("react-countup");

/***/ }),

/***/ 6290:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ 9989:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/io5");

/***/ }),

/***/ 9785:
/***/ ((module) => {

"use strict";
module.exports = require("react-intersection-observer");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2770:
/***/ ((module) => {

"use strict";
module.exports = require("swiper");

/***/ }),

/***/ 3630:
/***/ ((module) => {

"use strict";
module.exports = require("swiper/react");

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,698,71,932,875,286,734,252,66], () => (__webpack_exec__(8395)));
module.exports = __webpack_exports__;

})();