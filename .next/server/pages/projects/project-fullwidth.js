(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 6076:
/***/ ((module) => {

// Exports
module.exports = {
	"project": "project_project__DZnHx",
	"project_btn__wrap": "project_project_btn__wrap__KVmBI",
	"loadmore_btn": "project_loadmore_btn__SGf4w",
	"sidebar_widget": "project_sidebar_widget__sq_bI",
	"sidebar_widget__title": "project_sidebar_widget__title__fWuC3",
	"sidebar_list": "project_sidebar_list__7L0vw",
	"sidebar_brochure__widget": "project_sidebar_brochure__widget__vprLj",
	"sidebar_brochure__list": "project_sidebar_brochure__list__WcXZN"
};


/***/ }),

/***/ 4366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ project_fullwidth),
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
;// CONCATENATED MODULE: ./src/components/breadcrumb/projects/fullwidth-breadcrumb.js


function FullWidthBreadcrumb({ projectsBreadcrumb  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "page_banner__bg",
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: projectsBreadcrumb?.map((projectBreadcrumb, i)=>{
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "page_content",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "page_subtitle",
                            children: projectBreadcrumb?.fullWidthSubtitle
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "page_title",
                            children: projectBreadcrumb?.fullWidthTitle
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "page_desc",
                            children: projectBreadcrumb?.fullWidthDesc
                        })
                    ]
                }, i);
            })
        })
    });
}
/* harmony default export */ const fullwidth_breadcrumb = (FullWidthBreadcrumb);

// EXTERNAL MODULE: ./src/components/layout/footer.js
var footer = __webpack_require__(5608);
// EXTERNAL MODULE: ./src/components/newsletter/newsletter.js
var newsletter = __webpack_require__(1939);
// EXTERNAL MODULE: ./src/components/projects/project.module.scss
var project_module = __webpack_require__(6076);
var project_module_default = /*#__PURE__*/__webpack_require__.n(project_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/projects/fullwidth-item.js



function ProjectFullwidthItem(props) {
    const { title , subTitle , duration , image , slug  } = props.project;
    const imagePath = `/images/projects/${slug}/${image}`;
    const linkPath = `/projects/${slug}`;
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
        lg: {
            span: 4
        },
        md: {
            span: 6
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
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
        })
    });
}
/* harmony default export */ const fullwidth_item = (ProjectFullwidthItem);

;// CONCATENATED MODULE: ./src/components/projects/fullwidth-grid.js





function ProjectFullwidthGrid(props) {
    const { projects  } = props;
    const { 0: noOfElement , 1: setNoOfElement  } = (0,external_react_.useState)(3);
    const slice = projects.slice(0, noOfElement);
    const loadMore = ()=>{
        setNoOfElement(noOfElement + noOfElement);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (project_module_default()).project,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                    className: "g-4",
                    children: slice.map((project)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(fullwidth_item, {
                            project: project
                        }, project.slug);
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (project_module_default()).project_btn__wrap,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: (project_module_default()).loadmore_btn,
                        onClick: loadMore,
                        children: "Load more"
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const fullwidth_grid = (ProjectFullwidthGrid);

;// CONCATENATED MODULE: ./src/components/projects/fullwidth.js


function ProjectFullwidth(props) {
    const { projects  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(fullwidth_grid, {
        projects: projects
    });
}
/* harmony default export */ const fullwidth = (ProjectFullwidth);

// EXTERNAL MODULE: ./src/lib/items-util.js
var items_util = __webpack_require__(7698);
;// CONCATENATED MODULE: ./src/pages/projects/project-fullwidth.js









function ProjectFullwidthPage(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Projects FullWidth - OxyBuild"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Projects FullWidth"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(fullwidth_breadcrumb, {
                projectsBreadcrumb: props.projectsBreadcrumb
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(fullwidth, {
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
/* harmony default export */ const project_fullwidth = (ProjectFullwidthPage);


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
var __webpack_exports__ = __webpack_require__.X(0, [952,664,698,71,717], () => (__webpack_exec__(4366)));
module.exports = __webpack_exports__;

})();