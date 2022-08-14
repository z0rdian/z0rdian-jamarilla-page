(() => {
var exports = {};
exports.id = 0;
exports.ids = [0];
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

/***/ 6205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ our_clients),
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
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/components/brand/brand.module.scss
var brand_module = __webpack_require__(8470);
var brand_module_default = /*#__PURE__*/__webpack_require__.n(brand_module);
// EXTERNAL MODULE: ./node_modules/swiper/swiper-bundle.css
var swiper_bundle = __webpack_require__(9984);
// EXTERNAL MODULE: external "swiper/react"
var react_ = __webpack_require__(3630);
// EXTERNAL MODULE: external "swiper"
var external_swiper_ = __webpack_require__(2770);
var external_swiper_default = /*#__PURE__*/__webpack_require__.n(external_swiper_);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: ./src/components/brand/index-2.js







external_swiper_default().use([
    external_swiper_.Pagination,
    external_swiper_.Autoplay
]);
function BrandTwo({ brandItems  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `${(brand_module_default()).bg} ${(brand_module_default()).space__yaxis}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Swiper, {
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
                    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.SwiperSlide, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: (brand_module_default()).item,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
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
/* harmony default export */ const brand_index_2 = (BrandTwo);

// EXTERNAL MODULE: ./src/components/layout/footer.js
var footer = __webpack_require__(5608);
// EXTERNAL MODULE: ./src/components/newsletter/newsletter.js
var newsletter = __webpack_require__(1939);
// EXTERNAL MODULE: ./src/components/testimonial/index-2.js
var testimonial_index_2 = __webpack_require__(165);
// EXTERNAL MODULE: ./src/lib/items-util.js
var items_util = __webpack_require__(7698);
;// CONCATENATED MODULE: ./src/pages/our-clients/index.js










function OurClients(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Our Clients - Oxybuild"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "OxyBuild - Construction React Next JS Template Industry, Products Manufacturing Company, building companies, architecture firms, and the like can take to their advantage by using OxyBuild - Construction React Next JS Template."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(brand_breadcrumb/* default */.Z, {
                brands_breadcrumb: props.brands_breadcrumb
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(brand_index_2, {
                brandItems: props.brandItems
            }),
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
    const brands_breadcrumb = (0,items_util/* getAllItems */.Nx)('brand-breadcrumb');
    const brandItems = (0,items_util/* getAllItems */.Nx)('brand');
    const bannerTwoItems = (0,items_util/* getAllItems */.Nx)('banner-2');
    const testimonialItems = (0,items_util/* getAllItems */.Nx)('testimonial');
    const testimonial_section__items = (0,items_util/* getAllItems */.Nx)('testimonial-section');
    const newsletterItems = (0,items_util/* getAllItems */.Nx)('newsletter');
    const footerItems = (0,items_util/* getAllItems */.Nx)('footer');
    return {
        props: {
            brands_breadcrumb,
            brandItems,
            bannerTwoItems,
            testimonialItems,
            testimonial_section__items,
            newsletterItems,
            footerItems
        }
    };
}
/* harmony default export */ const our_clients = (OurClients);


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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,698,71,875,557], () => (__webpack_exec__(6205)));
module.exports = __webpack_exports__;

})();