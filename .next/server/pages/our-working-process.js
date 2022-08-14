"use strict";
(() => {
var exports = {};
exports.id = 907;
exports.ids = [907];
exports.modules = {

/***/ 9044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ our_working_process),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/banner/index-2.js
var index_2 = __webpack_require__(8643);
// EXTERNAL MODULE: ./src/components/brand/brand-breadcrumb.js
var brand_breadcrumb = __webpack_require__(7745);
// EXTERNAL MODULE: ./src/components/banner/index-4.js
var index_4 = __webpack_require__(1105);
// EXTERNAL MODULE: ./src/components/layout/footer.js
var footer = __webpack_require__(5608);
// EXTERNAL MODULE: ./src/components/newsletter/newsletter.js
var newsletter = __webpack_require__(1939);
// EXTERNAL MODULE: ./src/components/testimonial/index-2.js
var testimonial_index_2 = __webpack_require__(165);
// EXTERNAL MODULE: ./src/lib/items-util.js
var items_util = __webpack_require__(7698);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: ./src/components/breadcrumb/banner/banner-breadcrumb.js


function BannerBredcrumb({ bannerBredcrumb: bannerBredcrumb1  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "page_banner__bg",
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: bannerBredcrumb1 === null || bannerBredcrumb1 === void 0 ? void 0 : bannerBredcrumb1.map((bannerBredcrumb, i)=>{
                return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "page_content",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "page_subtitle",
                            children: bannerBredcrumb === null || bannerBredcrumb === void 0 ? void 0 : bannerBredcrumb.breadcrumbSubtitle
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "page_title",
                            children: bannerBredcrumb === null || bannerBredcrumb === void 0 ? void 0 : bannerBredcrumb.breadcrumbTitle
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "page_desc",
                            children: bannerBredcrumb === null || bannerBredcrumb === void 0 ? void 0 : bannerBredcrumb.breadcrumbDesc
                        })
                    ]
                }, i));
            })
        })
    }));
}
/* harmony default export */ const banner_breadcrumb = (BannerBredcrumb);

;// CONCATENATED MODULE: ./src/pages/our-working-process/index.js











function OurClients(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Our Working Process - Oxybuild"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "OxyBuild - Construction React Next JS Template Industry, Products Manufacturing Company, building companies, architecture firms, and the like can take to their advantage by using OxyBuild - Construction React Next JS Template."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(banner_breadcrumb, {
                bannerBredcrumb: props.bannerBredcrumb
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(index_4/* default */.Z, {
                bannerFourItems: props.bannerFourItems,
                bannerSection: props.bannerSection
            }),
            ";",
            /*#__PURE__*/ jsx_runtime_.jsx(index_2/* default */.Z, {
                bannerTwoItems: props.bannerTwoItems
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(testimonial_index_2/* default */.Z, {
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
    const bannerBredcrumb = (0,items_util/* getAllItems */.Nx)('banner-breadcrumb');
    const bannerFourItems = (0,items_util/* getAllItems */.Nx)('banner-4');
    const bannerSection = (0,items_util/* getAllItems */.Nx)('banner-section');
    const bannerTwoItems = (0,items_util/* getAllItems */.Nx)('banner-2');
    const testimonialItems = (0,items_util/* getAllItems */.Nx)('testimonial');
    const testimonial_section__items = (0,items_util/* getAllItems */.Nx)('testimonial-section');
    const newsletterItems = (0,items_util/* getAllItems */.Nx)('newsletter');
    const footerItems = (0,items_util/* getAllItems */.Nx)('footer');
    return {
        props: {
            bannerBredcrumb,
            bannerFourItems,
            bannerSection,
            bannerTwoItems,
            testimonialItems,
            testimonial_section__items,
            newsletterItems,
            footerItems
        }
    };
}
/* harmony default export */ const our_working_process = (OurClients);


/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2770:
/***/ ((module) => {

module.exports = require("swiper");

/***/ }),

/***/ 3630:
/***/ ((module) => {

module.exports = require("swiper/react");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,698,71,875,557,105], () => (__webpack_exec__(9044)));
module.exports = __webpack_exports__;

})();