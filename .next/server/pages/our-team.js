"use strict";
(() => {
var exports = {};
exports.id = 870;
exports.ids = [870];
exports.modules = {

/***/ 6801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_our_team),
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
;// CONCATENATED MODULE: ./src/components/breadcrumb/our-team/index.js


function TeamBreadcrumb({ teamsBreadcrumb  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "page_banner__bg",
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: teamsBreadcrumb === null || teamsBreadcrumb === void 0 ? void 0 : teamsBreadcrumb.map((teamBreadcrumb, i)=>{
                return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "page_content",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "page_subtitle",
                            children: teamBreadcrumb === null || teamBreadcrumb === void 0 ? void 0 : teamBreadcrumb.breadcrumbSubtitle
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "page_title",
                            children: teamBreadcrumb === null || teamBreadcrumb === void 0 ? void 0 : teamBreadcrumb.breadcrumbTitle
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "page_desc",
                            children: teamBreadcrumb === null || teamBreadcrumb === void 0 ? void 0 : teamBreadcrumb.breadcrumbDesc
                        })
                    ]
                }, i));
            })
        })
    }));
}
/* harmony default export */ const our_team = (TeamBreadcrumb);

// EXTERNAL MODULE: ./src/components/team/team.module.scss
var team_module = __webpack_require__(1058);
var team_module_default = /*#__PURE__*/__webpack_require__.n(team_module);
// EXTERNAL MODULE: external "swiper"
var external_swiper_ = __webpack_require__(2770);
var external_swiper_default = /*#__PURE__*/__webpack_require__.n(external_swiper_);
// EXTERNAL MODULE: external "swiper/react"
var react_ = __webpack_require__(3630);
// EXTERNAL MODULE: ./node_modules/swiper/swiper-bundle.css
var swiper_bundle = __webpack_require__(9984);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: external "react-icons/io5"
var io5_ = __webpack_require__(9989);
;// CONCATENATED MODULE: ./src/components/team/index-2.js









external_swiper_default().use([
    external_swiper_.Navigation,
    external_swiper_.Pagination,
    external_swiper_.Autoplay
]);
function TeamTwo({ teamItemsTwo  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (team_module_default()).area_02,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                    lg: {
                        span: 12
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Swiper, {
                        pagination: false,
                        spaceBetween: 30,
                        slidesPerView: 4,
                        loop: false,
                        breakpoints: {
                            1200: {
                                slidesPerView: 4,
                                slidesPerColumn: 2,
                                slidesPerGroup: 1,
                                slidesPerColumnFill: 'row'
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
                        children: teamItemsTwo === null || teamItemsTwo === void 0 ? void 0 : teamItemsTwo.map((teamItemTwo, i)=>{
                            return(/*#__PURE__*/ jsx_runtime_.jsx(react_.SwiperSlide, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (team_module_default()).item,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (team_module_default()).img,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: teamItemTwo === null || teamItemTwo === void 0 ? void 0 : teamItemTwo.image,
                                                    alt: teamItemTwo === null || teamItemTwo === void 0 ? void 0 : teamItemTwo.alt,
                                                    className: "img-full"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: (team_module_default()).add__action,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            className: (team_module_default()).social_link__wrap,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                    href: "https://www.example.com",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaShareAlt, {})
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                    className: (team_module_default()).social_link,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                href: "https://www.example.com",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaFacebookF, {})
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                href: "https://www.example.com",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaTwitter, {})
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                href: "https://www.example.com",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaInstagram, {})
                                                                                })
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: (team_module_default()).mail_link__wrap,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: "mailto://info@example.com",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: (team_module_default()).mail_link,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(io5_.IoAddOutline, {})
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (team_module_default()).content,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: (team_module_default()).title,
                                                    dangerouslySetInnerHTML: {
                                                        __html: teamItemTwo === null || teamItemTwo === void 0 ? void 0 : teamItemTwo.teamTitle
                                                    }
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: (team_module_default()).occupation,
                                                    children: teamItemTwo === null || teamItemTwo === void 0 ? void 0 : teamItemTwo.teamOccupation
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }, i));
                        })
                    })
                })
            })
        })
    }));
}
/* harmony default export */ const index_2 = (TeamTwo);

// EXTERNAL MODULE: ./src/components/newsletter/newsletter.js
var newsletter = __webpack_require__(1939);
// EXTERNAL MODULE: ./src/components/layout/footer.js
var footer = __webpack_require__(5608);
// EXTERNAL MODULE: ./src/lib/items-util.js
var items_util = __webpack_require__(7698);
// EXTERNAL MODULE: ./src/components/counter/index-2.js
var counter_index_2 = __webpack_require__(4015);
;// CONCATENATED MODULE: ./src/pages/our-team/index.js









function OurClients(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Our Team - Oxybuild"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "OxyBuild - Construction React Next JS Template Industry, Products Manufacturing Company, building companies, architecture firms, and the like can take to their advantage by using OxyBuild - Construction React Next JS Template."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(our_team, {
                teamsBreadcrumb: props.teamsBreadcrumb
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(index_2, {
                teamItemsTwo: props.teamItemsTwo
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(counter_index_2/* default */.Z, {}),
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
    const teamsBreadcrumb = (0,items_util/* getAllItems */.Nx)('team-breadcrumb');
    const teamItemsTwo = (0,items_util/* getAllItems */.Nx)('team-02');
    const newsletterItems = (0,items_util/* getAllItems */.Nx)('newsletter');
    const footerItems = (0,items_util/* getAllItems */.Nx)('footer');
    return {
        props: {
            teamsBreadcrumb,
            teamItemsTwo,
            newsletterItems,
            footerItems
        }
    };
}
/* harmony default export */ const pages_our_team = (OurClients);


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

/***/ 609:
/***/ ((module) => {

module.exports = require("react-countup");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 9989:
/***/ ((module) => {

module.exports = require("react-icons/io5");

/***/ }),

/***/ 9785:
/***/ ((module) => {

module.exports = require("react-intersection-observer");

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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,698,71,734,706], () => (__webpack_exec__(6801)));
module.exports = __webpack_exports__;

})();