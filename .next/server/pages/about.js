(() => {
var exports = {};
exports.id = 521;
exports.ids = [521];
exports.modules = {

/***/ 7201:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "banner-3_item___83gV",
	"secondary__bg": "banner-3_secondary__bg__hwpS_",
	"primary__bg": "banner-3_primary__bg__ITbOk",
	"content": "banner-3_content__iTi_8",
	"link__btn": "banner-3_link__btn__k2BNf",
	"title": "banner-3_title__gVkRz",
	"desc": "banner-3_desc__sIDKT",
	"icon": "banner-3_icon__0eo6z"
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

/***/ 3810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_about),
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
;// CONCATENATED MODULE: ./src/components/about/about-breadcrumb.js


function AboutBreadcrumb({ aboutItems  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "page_banner__bg",
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: aboutItems === null || aboutItems === void 0 ? void 0 : aboutItems.map((aboutItem, i)=>{
                return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "page_content",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "page_subtitle",
                            children: aboutItem === null || aboutItem === void 0 ? void 0 : aboutItem.breadcrumbSubtitle
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "page_title",
                            children: aboutItem === null || aboutItem === void 0 ? void 0 : aboutItem.breadcrumbTitle
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "page_desc",
                            children: aboutItem === null || aboutItem === void 0 ? void 0 : aboutItem.breadcrumbDesc
                        })
                    ]
                }, i));
            })
        })
    }));
}
/* harmony default export */ const about_breadcrumb = (AboutBreadcrumb);

// EXTERNAL MODULE: ./src/components/banner/banner-3.module.scss
var banner_3_module = __webpack_require__(7201);
var banner_3_module_default = /*#__PURE__*/__webpack_require__.n(banner_3_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-icons/io5"
var io5_ = __webpack_require__(9989);
;// CONCATENATED MODULE: ./src/components/banner/index-3.js





function BannerThree({ bannerThreeItems  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "banner_area",
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                className: "g-30",
                children: bannerThreeItems === null || bannerThreeItems === void 0 ? void 0 : bannerThreeItems.map((bannerThreeItem, i)=>{
                    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                        lg: {
                            span: 4
                        },
                        md: {
                            span: 6
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: bannerThreeItem.dynamicClassName.split(' ').map((item)=>(banner_3_module_default())[item]
                            ).join(' '),
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (banner_3_module_default()).content,
                                "data-count": `${bannerThreeItem === null || bannerThreeItem === void 0 ? void 0 : bannerThreeItem.dataCount}`,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: (banner_3_module_default()).title,
                                        children: bannerThreeItem === null || bannerThreeItem === void 0 ? void 0 : bannerThreeItem.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (banner_3_module_default()).desc,
                                        children: bannerThreeItem === null || bannerThreeItem === void 0 ? void 0 : bannerThreeItem.excerpt
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: `${bannerThreeItem.path}`,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            className: (banner_3_module_default()).link__btn,
                                            children: [
                                                bannerThreeItem === null || bannerThreeItem === void 0 ? void 0 : bannerThreeItem.btnText,
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: (banner_3_module_default()).icon,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(io5_.IoArrowForwardOutline, {})
                                                })
                                            ]
                                        })
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
/* harmony default export */ const index_3 = (BannerThree);

// EXTERNAL MODULE: ./src/components/counter/index-2.js
var index_2 = __webpack_require__(4015);
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
;// CONCATENATED MODULE: ./src/pages/about/index.js













function AboutPage(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "About Us - Oxybuild"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "OxyBuild - Construction React Next JS Template Industry, Products Manufacturing Company, building companies, architecture firms, and the like can take to their advantage by using OxyBuild - Construction React Next JS Template."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(about_breadcrumb, {
                aboutItems: props.aboutItems
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(about/* default */.Z, {
                aboutItems: props.aboutItems
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(index_3, {
                bannerThreeItems: props.bannerThreeItems
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(index_2/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(latest_project/* default */.Z, {
                projects: props.projects,
                project_section__items: props.project_section__items
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(team/* default */.Z, {
                teamItems: props.teamItems,
                team_section__items: props.team_section__items
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(testimonial/* default */.Z, {
                testimonialItems: props.testimonialItems,
                testimonial_section__items: props.testimonial_section__items
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
    const aboutItems = (0,items_util/* getAllItems */.Nx)('about');
    const bannerThreeItems = (0,items_util/* getAllItems */.Nx)('banner-3');
    const project_section__items = (0,items_util/* getAllItems */.Nx)('project-section');
    const projects = (0,items_util/* getAllItems */.Nx)('projects');
    const LatestProject1 = (0,items_util/* getFeaturedItems */.E)(projects);
    const team_section__items = (0,items_util/* getAllItems */.Nx)('team-section');
    const teamItems = (0,items_util/* getAllItems */.Nx)('team');
    const testimonial_section__items = (0,items_util/* getAllItems */.Nx)('testimonial-section');
    const testimonialItems = (0,items_util/* getAllItems */.Nx)('testimonial');
    const newsletterItems = (0,items_util/* getAllItems */.Nx)('newsletter');
    const footerItems = (0,items_util/* getAllItems */.Nx)('footer');
    return {
        props: {
            aboutItems,
            bannerThreeItems,
            project_section__items,
            projects: LatestProject1,
            team_section__items,
            testimonialItems,
            testimonial_section__items,
            teamItems,
            newsletterItems,
            footerItems
        }
    };
}
/* harmony default export */ const pages_about = (AboutPage);


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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,698,71,286,734,252,706], () => (__webpack_exec__(3810)));
module.exports = __webpack_exports__;

})();