(() => {
var exports = {};
exports.id = 54;
exports.ids = [54];
exports.modules = {

/***/ 9251:
/***/ ((module) => {

// Exports
module.exports = {
	"area": "about-2_area__SvMME",
	"pattern": "about-2_pattern__KE7iW",
	"img": "about-2_img__eZCs6",
	"img__wrap": "about-2_img__wrap__86ED2",
	"group__img": "about-2_group__img__UxHG2",
	"single_img": "about-2_single_img__I7P25",
	"content": "about-2_content__WAH9S",
	"title": "about-2_title__6zrvp",
	"subtitle": "about-2_subtitle__3KX9W",
	"desc": "about-2_desc__SI3eQ",
	"list__item": "about-2_list__item__LPdAx",
	"list": "about-2_list__uk8V3",
	"icon": "about-2_icon__jiBLO",
	"text": "about-2_text__S3FLS"
};


/***/ }),

/***/ 9592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ services),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./src/components/about/about-2.module.scss
var about_2_module = __webpack_require__(9251);
var about_2_module_default = /*#__PURE__*/__webpack_require__.n(about_2_module);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: ./src/components/about/index-2.js




function AboutTwo({ aboutItemsTwo  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (about_2_module_default()).area,
        children: aboutItemsTwo === null || aboutItemsTwo === void 0 ? void 0 : aboutItemsTwo.map((aboutItemTwo, i)=>{
            var ref;
            return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                    className: "g-0",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                            lg: {
                                span: 6
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (about_2_module_default()).img__wrap,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (about_2_module_default()).pattern,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "img-full",
                                            src: aboutItemTwo === null || aboutItemTwo === void 0 ? void 0 : aboutItemTwo.aboutPattern,
                                            alt: aboutItemTwo === null || aboutItemTwo === void 0 ? void 0 : aboutItemTwo.aboutPatternAlt
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (about_2_module_default()).img,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "img-full",
                                            src: aboutItemTwo === null || aboutItemTwo === void 0 ? void 0 : aboutItemTwo.aboutImage,
                                            alt: aboutItemTwo === null || aboutItemTwo === void 0 ? void 0 : aboutItemTwo.aboutImageAlt
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (about_2_module_default()).group__img,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (about_2_module_default()).single_img,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    className: "img-full",
                                                    src: aboutItemTwo === null || aboutItemTwo === void 0 ? void 0 : aboutItemTwo.singleImageOne,
                                                    alt: aboutItemTwo === null || aboutItemTwo === void 0 ? void 0 : aboutItemTwo.singleImageOneAlt
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (about_2_module_default()).single_img,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    className: "img-full",
                                                    src: aboutItemTwo === null || aboutItemTwo === void 0 ? void 0 : aboutItemTwo.singleImageTwo,
                                                    alt: aboutItemTwo === null || aboutItemTwo === void 0 ? void 0 : aboutItemTwo.singleImageTwoAlt
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                            className: "align-self-end",
                            lg: {
                                span: 6
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (about_2_module_default()).content,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: (about_2_module_default()).title,
                                        children: aboutItemTwo === null || aboutItemTwo === void 0 ? void 0 : aboutItemTwo.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: (about_2_module_default()).subtitle,
                                        children: aboutItemTwo === null || aboutItemTwo === void 0 ? void 0 : aboutItemTwo.subTitle
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (about_2_module_default()).desc,
                                        children: aboutItemTwo === null || aboutItemTwo === void 0 ? void 0 : aboutItemTwo.desc
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: (about_2_module_default()).list__item,
                                        children: aboutItemTwo === null || aboutItemTwo === void 0 ? void 0 : (ref = aboutItemTwo.listItem) === null || ref === void 0 ? void 0 : ref.map((item, index)=>{
                                            const CheckIcon = fa_[item.checkIcon];
                                            return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: (about_2_module_default()).list,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: (about_2_module_default()).icon,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(CheckIcon, {})
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: (about_2_module_default()).text,
                                                        children: item.text
                                                    })
                                                ]
                                            }, index));
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }, i));
        })
    }));
}
/* harmony default export */ const index_2 = (AboutTwo);

// EXTERNAL MODULE: ./src/components/banner/index-2.js
var banner_index_2 = __webpack_require__(8643);
// EXTERNAL MODULE: ./src/components/banner/index-4.js
var index_4 = __webpack_require__(1105);
// EXTERNAL MODULE: ./src/components/brand/index.js
var brand = __webpack_require__(3036);
// EXTERNAL MODULE: ./src/components/layout/footer.js
var footer = __webpack_require__(5608);
// EXTERNAL MODULE: ./src/components/newsletter/newsletter.js
var newsletter = __webpack_require__(1939);
// EXTERNAL MODULE: ./src/components/services/service-item.js
var service_item = __webpack_require__(1520);
// EXTERNAL MODULE: ./src/components/services/service.module.scss
var service_module = __webpack_require__(3108);
var service_module_default = /*#__PURE__*/__webpack_require__.n(service_module);
// EXTERNAL MODULE: ./node_modules/swiper/swiper-bundle.css
var swiper_bundle = __webpack_require__(9984);
// EXTERNAL MODULE: external "swiper/react"
var react_ = __webpack_require__(3630);
// EXTERNAL MODULE: external "swiper"
var external_swiper_ = __webpack_require__(2770);
var external_swiper_default = /*#__PURE__*/__webpack_require__.n(external_swiper_);
;// CONCATENATED MODULE: ./src/components/services/all-services.js







external_swiper_default().use([
    external_swiper_.Pagination,
    external_swiper_.Autoplay
]);
function AllServices(props) {
    const { services , service_section__items  } = props;
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
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                        lg: {
                            span: 12
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Swiper, {
                            // autoplay={{ delay: 4000, disableOnInteraction: false }}
                            pagination: false,
                            spaceBetween: 30,
                            breakpoints: {
                                1200: {
                                    slidesPerView: 3,
                                    slidesPerColumn: 2,
                                    slidesPerColumnFill: 'row'
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
    }));
}
/* harmony default export */ const all_services = (AllServices);

;// CONCATENATED MODULE: ./src/components/breadcrumb/services/services-breadcrumb.js


function ServiceBreadcrumb({ servicesBreadcrumb  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "page_banner__bg",
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: servicesBreadcrumb === null || servicesBreadcrumb === void 0 ? void 0 : servicesBreadcrumb.map((serviceBreadcrumb, i)=>{
                return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "page_content",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "page_subtitle",
                            children: serviceBreadcrumb === null || serviceBreadcrumb === void 0 ? void 0 : serviceBreadcrumb.breadcrumbSubtitle
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "page_title",
                            children: serviceBreadcrumb === null || serviceBreadcrumb === void 0 ? void 0 : serviceBreadcrumb.breadcrumbTitle
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "page_desc",
                            children: serviceBreadcrumb === null || serviceBreadcrumb === void 0 ? void 0 : serviceBreadcrumb.breadcrumbDesc
                        })
                    ]
                }, i));
            })
        })
    }));
}
/* harmony default export */ const services_breadcrumb = (ServiceBreadcrumb);

// EXTERNAL MODULE: ./src/components/testimonial/index.js
var testimonial = __webpack_require__(4286);
// EXTERNAL MODULE: ./src/lib/items-util.js
var items_util = __webpack_require__(7698);
;// CONCATENATED MODULE: ./src/pages/services/index.js













function ServicePage(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Services - Oxybuild"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "OxyBuild - Construction React Next JS Template Industry, Products Manufacturing Company, building companies, architecture firms, and the like can take to their advantage by using OxyBuild - Construction React Next JS Template."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(services_breadcrumb, {
                servicesBreadcrumb: props.servicesBreadcrumb
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(index_2, {
                aboutItemsTwo: props.aboutItemsTwo
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(all_services, {
                services: props.services,
                service_section__items: props.service_section__items
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(banner_index_2/* default */.Z, {
                bannerTwoItems: props.bannerTwoItems
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(brand/* default */.Z, {
                brandItems: props.brandItems
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(index_4/* default */.Z, {
                bannerFourItems: props.bannerFourItems,
                bannerSection: props.bannerSection
            }),
            ";",
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
    const aboutItemsTwo = (0,items_util/* getAllItems */.Nx)('about-2');
    const AllServices1 = (0,items_util/* getAllItems */.Nx)('services');
    const service_section__items = (0,items_util/* getAllItems */.Nx)('service-section');
    const servicesBreadcrumb = (0,items_util/* getAllItems */.Nx)('service-breadcrumb');
    const bannerTwoItems = (0,items_util/* getAllItems */.Nx)('banner-2');
    const brandItems = (0,items_util/* getAllItems */.Nx)('brand');
    const testimonial_section__items = (0,items_util/* getAllItems */.Nx)('testimonial-section');
    const bannerFourItems = (0,items_util/* getAllItems */.Nx)('banner-4');
    const bannerSection = (0,items_util/* getAllItems */.Nx)('banner-section');
    const testimonialItems = (0,items_util/* getAllItems */.Nx)('testimonial');
    const newsletterItems = (0,items_util/* getAllItems */.Nx)('newsletter');
    const footerItems = (0,items_util/* getAllItems */.Nx)('footer');
    return {
        props: {
            aboutItemsTwo,
            services: AllServices1,
            servicesBreadcrumb,
            service_section__items,
            bannerTwoItems,
            brandItems,
            bannerFourItems,
            bannerSection,
            testimonialItems,
            testimonial_section__items,
            newsletterItems,
            footerItems
        }
    };
}
/* harmony default export */ const services = (ServicePage);


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

/***/ 9989:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/io5");

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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,698,71,875,286,66,105], () => (__webpack_exec__(9592)));
module.exports = __webpack_exports__;

})();