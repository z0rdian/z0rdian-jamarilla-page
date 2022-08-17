(() => {
var exports = {};
exports.id = 595;
exports.ids = [595];
exports.modules = {

/***/ 5409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ project_slider),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/banner/index-5.js
var index_5 = __webpack_require__(1717);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: ./src/components/breadcrumb/projects/slider-breadcrumb.js


function SliderBreadcrumb({ projectsBreadcrumb  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "page_banner__bg",
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: projectsBreadcrumb?.map((projectBreadcrumb, i)=>{
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "page_content",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "page_subtitle",
                            children: projectBreadcrumb?.sliderSubtitle
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "page_title",
                            children: projectBreadcrumb?.sliderTitle
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "page_desc",
                            children: projectBreadcrumb?.sliderDesc
                        })
                    ]
                }, i);
            })
        })
    });
}
/* harmony default export */ const slider_breadcrumb = (SliderBreadcrumb);

// EXTERNAL MODULE: ./src/components/layout/footer.js
var footer = __webpack_require__(5608);
// EXTERNAL MODULE: ./src/components/newsletter/newsletter.js
var newsletter = __webpack_require__(1939);
// EXTERNAL MODULE: ./node_modules/swiper/swiper-bundle.css
var swiper_bundle = __webpack_require__(9984);
// EXTERNAL MODULE: external "swiper/react"
var react_ = __webpack_require__(3630);
// EXTERNAL MODULE: external "swiper"
var external_swiper_ = __webpack_require__(2770);
var external_swiper_default = /*#__PURE__*/__webpack_require__.n(external_swiper_);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/projects/slider-item.js


function ProjectSliderItem(props) {
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
/* harmony default export */ const slider_item = (ProjectSliderItem);

;// CONCATENATED MODULE: ./src/components/projects/project-slider-2.js








external_swiper_default().use([
    external_swiper_.Pagination,
    external_swiper_.Autoplay,
    external_swiper_.Navigation
]);
function ProjectSliderTwo(props) {
    const { projects  } = props;
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
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "project-slider py-140",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "project-navigation",
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
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Swiper, {
                        // autoplay={{ delay: 4000, disableOnInteraction: false }}
                        pagination: false,
                        spaceBetween: 30,
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
                                slidesPerView: 3
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
                                children: /*#__PURE__*/ jsx_runtime_.jsx(slider_item, {
                                    project: project
                                })
                            }, project.slug);
                        })
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const project_slider_2 = (ProjectSliderTwo);

// EXTERNAL MODULE: ./src/lib/items-util.js
var items_util = __webpack_require__(7698);
;// CONCATENATED MODULE: ./src/pages/projects/project-slider.js









function ProjectSliderPage(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Projects Slider - OxyBuild"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Projects Slider"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(slider_breadcrumb, {
                projectsBreadcrumb: props.projectsBreadcrumb
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(project_slider_2, {
                projects: props.projects
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(index_5/* default */.Z, {
                bannerTwoItems: props.bannerTwoItems
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(newsletter/* default */.Z, {
                newsletterItems: props.newsletterItems
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer/* default */.Z, {
                footerItems: props.footerItems
            })
        ]
    });
}
function getStaticProps() {
    const projectsBreadcrumb = (0,items_util/* getAllItems */.Nx)("project-breadcrumb");
    const allItems = (0,items_util/* getAllItems */.Nx)("projects");
    const bannerTwoItems = (0,items_util/* getAllItems */.Nx)("banner-2");
    const newsletterItems = (0,items_util/* getAllItems */.Nx)("newsletter");
    const footerItems = (0,items_util/* getAllItems */.Nx)("footer");
    return {
        props: {
            projectsBreadcrumb,
            projects: allItems,
            bannerTwoItems,
            newsletterItems,
            footerItems
        }
    };
}
/* harmony default export */ const project_slider = (ProjectSliderPage);


/***/ }),

/***/ 9984:
/***/ (() => {



/***/ }),

/***/ 8076:
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

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

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

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

/***/ 6290:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,698,71,717], () => (__webpack_exec__(5409)));
module.exports = __webpack_exports__;

})();