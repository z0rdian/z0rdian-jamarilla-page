(() => {
var exports = {};
exports.id = 945;
exports.ids = [945];
exports.modules = {

/***/ 2968:
/***/ ((module) => {

// Exports
module.exports = {
	"area": "service-detail_area__u8itA",
	"content": "service-detail_content__sfWyL",
	"title": "service-detail_title__43NVa",
	"subtitle": "service-detail_subtitle___vDKl",
	"desc": "service-detail_desc__5pZ_k"
};


/***/ }),

/***/ 7450:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "our-services_title__XtFG2",
	"desc": "our-services_desc__fDQsl",
	"list": "our-services_list__r9ccG",
	"list_icon": "our-services_list_icon__AFUI1",
	"list_text": "our-services_list_text__g00S3",
	"list_02": "our-services_list_02__N2Tz_"
};


/***/ }),

/***/ 3108:
/***/ ((module) => {

// Exports
module.exports = {
	"area": "service_area__DF6p2",
	"img": "service_img__CNH_Q",
	"add__action": "service_add__action__jYpUQ",
	"icon": "service_icon__9TyRK",
	"section": "service_section__nDyrh",
	"section_title": "service_section_title__7F5iJ",
	"section_banner": "service_section_banner__lQal2",
	"info": "service_info__Pl1fT",
	"navigation__holder": "service_navigation__holder__dlwHq",
	"sidebar_widget": "service_sidebar_widget__kkJTh",
	"sidebar_list": "service_sidebar_list__6TgU5",
	"sidebar_brochure__widget": "service_sidebar_brochure__widget__yjLiO",
	"sidebar_brochure__list": "service_sidebar_brochure__list__Qguk2"
};


/***/ }),

/***/ 5910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
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
;// CONCATENATED MODULE: ./src/components/breadcrumb/services/detail-breadcrumb.js


function DetailBreadcrumb(props) {
    const { title , detailBreadcrumbSubTitle , detailBreadcrumbDesc  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "page_banner__bg",
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "page_content",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "page_subtitle",
                        children: detailBreadcrumbSubTitle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "page_title",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "page_desc",
                        children: detailBreadcrumbDesc
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const detail_breadcrumb = (DetailBreadcrumb);

// EXTERNAL MODULE: ./src/components/newsletter/newsletter.js
var newsletter = __webpack_require__(1939);
// EXTERNAL MODULE: ./src/components/layout/footer.js
var footer = __webpack_require__(5608);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/services/service.module.scss
var service_module = __webpack_require__(3108);
var service_module_default = /*#__PURE__*/__webpack_require__.n(service_module);
;// CONCATENATED MODULE: ./src/components/services/service-sidebar.js




function ServiceSidebar({ servicesSidebar  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
        lg: {
            span: 3
        },
        children: servicesSidebar?.map((serviceSidebar, i)=>{
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "sidebar",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${(service_module_default()).sidebar_widget} mb-30`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: (service_module_default()).sidebar_list,
                            children: serviceSidebar?.sidebarList?.map((item, index)=>{
                                return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: item?.path,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            download: true,
                                            children: item?.listText
                                        })
                                    })
                                }, index);
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${(service_module_default()).sidebar_brochure__widget}  mb-30`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: `${(service_module_default()).sidebar_brochure__list}`,
                            children: serviceSidebar?.downloadBrochure?.map((item, index)=>{
                                return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: item?.path,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            download: true,
                                            children: item?.listItem
                                        })
                                    })
                                }, index);
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${(service_module_default()).sidebar_widget__banner}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: serviceSidebar?.widgetBanner,
                            alt: serviceSidebar?.widgetBannerAlt
                        })
                    })
                ]
            }, i);
        })
    });
}
/* harmony default export */ const service_sidebar = (ServiceSidebar);

// EXTERNAL MODULE: ./src/components/services/service-detail/index.module.scss
var index_module = __webpack_require__(2968);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: ./src/components/rich-text/index.js
var rich_text = __webpack_require__(1354);
// EXTERNAL MODULE: ./src/components/services/service-detail/our-services.module.scss
var our_services_module = __webpack_require__(7450);
var our_services_module_default = /*#__PURE__*/__webpack_require__.n(our_services_module);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: ./src/components/services/service-detail/our-services.js




function OurService({ ourServices  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "our-service",
        children: ourServices?.map((ourService, i)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "our-service-inner pt-45",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                    className: "g-30",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                            md: {
                                span: 6
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "our-service-content",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: (our_services_module_default()).title,
                                        children: ourService?.projectContentTitle
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (our_services_module_default()).desc,
                                        children: ourService?.projectContentDesc
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: (our_services_module_default()).list,
                                        children: ourService?.listItem?.map((item, index)=>{
                                            const CheckIcon = fa_[item.checkIcon];
                                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: (our_services_module_default()).list_icon,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(CheckIcon, {})
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: (our_services_module_default()).list_text,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: item.text
                                                        })
                                                    })
                                                ]
                                            }, index);
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                            md: {
                                span: 6
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "our-service-content",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: (our_services_module_default()).title,
                                        children: ourService?.projectAnalysisTitle
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (our_services_module_default()).desc,
                                        children: ourService?.projectAnalysisDesc
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "addition-content",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (our_services_module_default()).desc,
                                                children: ourService?.additionDescOne
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (our_services_module_default()).desc,
                                                children: ourService?.additionDescTwo
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                            md: {
                                span: 6
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "our-service-content",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: (our_services_module_default()).title,
                                        children: ourService?.projectPlanningTitle
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (our_services_module_default()).desc,
                                        children: ourService?.projectPlanningDesc
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: `${(our_services_module_default()).list} ${(our_services_module_default()).list_02}`,
                                        children: ourService?.listItemTwo?.map((item, index)=>{
                                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "text-primary",
                                                        children: item.primaryText
                                                    }),
                                                    item.text
                                                ]
                                            }, index);
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                            md: {
                                span: 6
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "our-service-content",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: (our_services_module_default()).title,
                                        children: ourService?.projectContentTitle
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (our_services_module_default()).desc,
                                        children: ourService?.projectContentDesc
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: (our_services_module_default()).list,
                                        children: ourService?.listItem?.map((item, index)=>{
                                            const CheckIcon = fa_[item.checkIcon];
                                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: (our_services_module_default()).list_icon,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(CheckIcon, {})
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: (our_services_module_default()).list_text,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: item.text
                                                        })
                                                    })
                                                ]
                                            }, index);
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }, i);
        })
    });
}
/* harmony default export */ const our_services = (OurService);

;// CONCATENATED MODULE: ./src/components/services/service-detail/service-content.js





function ServiceContent(props) {
    const { service  } = props;
    const { largeImage , slug  } = props.service;
    const imagePath = `/images/services/${slug}/${largeImage}`;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
        lg: {
            span: 9
        },
        className: "pe-lg-45",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "banner",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    className: "img-full",
                    src: imagePath,
                    alt: service?.title
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (index_module_default()).content,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: (index_module_default()).title,
                        children: service?.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: (index_module_default()).subtitle,
                        children: service?.detailSubTitle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (index_module_default()).desc,
                        children: service?.detailDesc
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(rich_text/* default */.Z, {
                richTexts: props.richTexts
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(our_services, {
                ourServices: props.ourServices
            })
        ]
    });
}
/* harmony default export */ const service_content = (ServiceContent);

;// CONCATENATED MODULE: ./src/components/services/service-detail/index.js





function ServiceDetail(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (index_module_default()).area,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                className: "g-30",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(service_content, {
                        service: props.service,
                        richTexts: props.richTexts,
                        ourServices: props.ourServices
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(service_sidebar, {
                        servicesSidebar: props.servicesSidebar
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const service_detail = (ServiceDetail);

// EXTERNAL MODULE: ./src/lib/items-util.js
var items_util = __webpack_require__(7698);
;// CONCATENATED MODULE: ./src/pages/services/[slug].js








function ServiceDetailsPage(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                        children: [
                            props.service.title,
                            " - Oxybuild"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "OxyBuild - Construction React Next JS Template Industry, Products Manufacturing Company, building companies, architecture firms, and the like can take to their advantage by using OxyBuild - Construction React Next JS Template."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(detail_breadcrumb, {
                detailBreadcrumbSubTitle: props.service.detailBreadcrumbSubTitle,
                title: props.service.title,
                detailBreadcrumbDesc: props.service.detailBreadcrumbDesc
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(service_detail, {
                service: props.service,
                richTexts: props.richTexts,
                ourServices: props.ourServices,
                servicesSidebar: props.servicesSidebar
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
function getStaticProps(context) {
    const { params  } = context;
    const { slug  } = params;
    const service = (0,items_util/* getItemData */.m_)(slug, "services");
    const servicesSidebar = (0,items_util/* getAllItems */.Nx)("service-sidebar");
    const richTexts = (0,items_util/* getAllItems */.Nx)("rich-text");
    const ourServices = (0,items_util/* getAllItems */.Nx)("our-service");
    const newsletterItems = (0,items_util/* getAllItems */.Nx)("newsletter");
    const footerItems = (0,items_util/* getAllItems */.Nx)("footer");
    return {
        props: {
            service,
            servicesSidebar,
            richTexts,
            ourServices,
            newsletterItems,
            footerItems
        }
    };
}
function getStaticPaths() {
    const serviceFilenames = (0,items_util/* getItemsFiles */.Jf)("services");
    const slugs = serviceFilenames.map((fileName)=>fileName.replace(/\.md$/, ""));
    return {
        paths: slugs.map((slug)=>({
                params: {
                    slug: slug
                }
            })),
        fallback: false
    };
}
/* harmony default export */ const _slug_ = (ServiceDetailsPage);


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
var __webpack_exports__ = __webpack_require__.X(0, [952,664,698,71,354], () => (__webpack_exec__(5910)));
module.exports = __webpack_exports__;

})();