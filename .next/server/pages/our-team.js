(() => {
var exports = {};
exports.id = 870;
exports.ids = [870];
exports.modules = {

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

/***/ 6801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "page_banner__bg",
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: teamsBreadcrumb?.map((teamBreadcrumb, i)=>{
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "page_content",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "page_subtitle",
                            children: teamBreadcrumb?.breadcrumbSubtitle
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "page_title",
                            children: teamBreadcrumb?.breadcrumbTitle
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "page_desc",
                            children: teamBreadcrumb?.breadcrumbDesc
                        })
                    ]
                }, i);
            })
        })
    });
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
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
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
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
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
                                slidesPerColumnFill: "row"
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
                        children: teamItemsTwo?.map((teamItemTwo, i)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx(react_.SwiperSlide, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (team_module_default()).item,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (team_module_default()).img,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: teamItemTwo?.image,
                                                    alt: teamItemTwo?.alt,
                                                    className: "img-full"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: (team_module_default()).add__action,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            className: (team_module_default()).social_link__wrap,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "https://www.example.com",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaShareAlt, {})
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                    className: (team_module_default()).social_link,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                href: "https://www.example.com",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaFacebookF, {})
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                href: "https://www.example.com",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaTwitter, {})
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
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
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
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
                                                        __html: teamItemTwo?.teamTitle
                                                    }
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: (team_module_default()).occupation,
                                                    children: teamItemTwo?.teamOccupation
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }, i);
                        })
                    })
                })
            })
        })
    });
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
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
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
    });
}
function getStaticProps() {
    const teamsBreadcrumb = (0,items_util/* getAllItems */.Nx)("team-breadcrumb");
    const teamItemsTwo = (0,items_util/* getAllItems */.Nx)("team-02");
    const newsletterItems = (0,items_util/* getAllItems */.Nx)("newsletter");
    const footerItems = (0,items_util/* getAllItems */.Nx)("footer");
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
var __webpack_exports__ = __webpack_require__.X(0, [952,664,698,71,995], () => (__webpack_exec__(6801)));
module.exports = __webpack_exports__;

})();