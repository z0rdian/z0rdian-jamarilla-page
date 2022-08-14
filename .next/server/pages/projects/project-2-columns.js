(() => {
var exports = {};
exports.id = 603;
exports.ids = [603];
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

/***/ 3814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ project_2_columns),
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
;// CONCATENATED MODULE: ./src/components/breadcrumb/projects/two-columns-breadcrumb.js


function TwoColumnsBreadcrumb({ projectsBreadcrumb  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "page_banner__bg",
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: projectsBreadcrumb === null || projectsBreadcrumb === void 0 ? void 0 : projectsBreadcrumb.map((projectBreadcrumb, i)=>{
                return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "page_content",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "page_subtitle",
                            children: projectBreadcrumb === null || projectBreadcrumb === void 0 ? void 0 : projectBreadcrumb.twoColumnsSubtitle
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "page_title",
                            children: projectBreadcrumb === null || projectBreadcrumb === void 0 ? void 0 : projectBreadcrumb.twoColumnsTitle
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "page_desc",
                            children: projectBreadcrumb === null || projectBreadcrumb === void 0 ? void 0 : projectBreadcrumb.twoColumnsDesc
                        })
                    ]
                }, i));
            })
        })
    }));
}
/* harmony default export */ const two_columns_breadcrumb = (TwoColumnsBreadcrumb);

// EXTERNAL MODULE: ./src/components/layout/footer.js
var footer = __webpack_require__(5608);
// EXTERNAL MODULE: ./src/components/newsletter/newsletter.js
var newsletter = __webpack_require__(1939);
// EXTERNAL MODULE: ./src/components/projects/project.module.scss
var project_module = __webpack_require__(6076);
var project_module_default = /*#__PURE__*/__webpack_require__.n(project_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/projects/two-columns-item.js



function ProjectTwoColumnsItem(props) {
    const { title , subTitle , duration , image , slug  } = props.project;
    const imagePath = `/images/projects/${slug}/${image}`;
    const linkPath = `/projects/${slug}`;
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
        lg: {
            span: 6
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "project-item",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
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
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
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
    }));
}
/* harmony default export */ const two_columns_item = (ProjectTwoColumnsItem);

;// CONCATENATED MODULE: ./src/components/projects/two-columns-grid.js





function ProjectTwoColumnsGrid(props) {
    const { projects  } = props;
    const { 0: noOfElement , 1: setNoOfElement  } = (0,external_react_.useState)(2);
    const slice = projects.slice(0, noOfElement);
    const loadMore = ()=>{
        setNoOfElement(noOfElement + noOfElement);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (project_module_default()).project,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                    className: "g-4",
                    children: slice.map((project)=>{
                        return(/*#__PURE__*/ jsx_runtime_.jsx(two_columns_item, {
                            project: project
                        }, project.slug));
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
    }));
}
/* harmony default export */ const two_columns_grid = (ProjectTwoColumnsGrid);

;// CONCATENATED MODULE: ./src/components/projects/two-columns.js


function ProjectTwoColumns(props) {
    const { projects  } = props;
    return(/*#__PURE__*/ jsx_runtime_.jsx(two_columns_grid, {
        projects: projects
    }));
}
/* harmony default export */ const two_columns = (ProjectTwoColumns);

// EXTERNAL MODULE: ./src/lib/items-util.js
var items_util = __webpack_require__(7698);
;// CONCATENATED MODULE: ./src/pages/projects/project-2-columns.js









function ProjectTwoColumnsPage(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Projects Two Columns - OxyBuild"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Projects Two Columns"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(two_columns_breadcrumb, {
                projectsBreadcrumb: props.projectsBreadcrumb
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(two_columns, {
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
    }));
}
function getStaticProps() {
    const projectsBreadcrumb = (0,items_util/* getAllItems */.Nx)('project-breadcrumb');
    const allItems = (0,items_util/* getAllItems */.Nx)('projects');
    const bannerTwoItems = (0,items_util/* getAllItems */.Nx)('banner-2');
    const newsletterItems = (0,items_util/* getAllItems */.Nx)('newsletter');
    const footerItems = (0,items_util/* getAllItems */.Nx)('footer');
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
/* harmony default export */ const project_2_columns = (ProjectTwoColumnsPage);


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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,698,71,717], () => (__webpack_exec__(3814)));
module.exports = __webpack_exports__;

})();