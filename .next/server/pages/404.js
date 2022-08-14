(() => {
var exports = {};
exports.id = 197;
exports.ids = [197];
exports.modules = {

/***/ 5378:
/***/ ((module) => {

// Exports
module.exports = {
	"btn": "error-404_btn__jOCXl",
	"md-size": "error-404_md-size__h9hjJ",
	"btn_primary": "error-404_btn_primary__3bubG",
	"btn_secondary": "error-404_btn_secondary__5tYB1",
	"btn_hover__white": "error-404_btn_hover__white__BzaNm",
	"btn_hover__primary": "error-404_btn_hover__primary__SFS32",
	"btn_hover__secondary": "error-404_btn_hover__secondary__ULoa_",
	"area": "error-404_area__rHxAX",
	"content": "error-404_content__G6d_M",
	"title": "error-404_title__Oqz54",
	"subtitle": "error-404_subtitle__QyidU",
	"desc": "error-404_desc__8W4YR",
	"btn_wrap": "error-404_btn_wrap__sVl44"
};


/***/ }),

/***/ 8427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _404),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./src/components/error-404/index.module.scss
var index_module = __webpack_require__(5378);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
;// CONCATENATED MODULE: ./src/components/error-404/index.js




function Error404() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (index_module_default()).area,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                    xs: {
                        span: 12
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (index_module_default()).content,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: (index_module_default()).title,
                                children: "404"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                className: (index_module_default()).subtitle,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Sorry,"
                                    }),
                                    " this page not found!"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (index_module_default()).desc,
                                children: "Seems like nothing was found at this location. Try something else or you can go back to the homepage following the button below!"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `${(index_module_default()).btn_wrap}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: `${(index_module_default()).btn} ${(index_module_default()).btn_primary} ${(index_module_default()).btn_hover__secondary}`,
                                        children: "Back To Home"
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        })
    }));
}
/* harmony default export */ const error_404 = (Error404);

;// CONCATENATED MODULE: ./src/components/error-404/404-breadcrumb.js


function Error404Breadcrumb() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "page_banner__bg",
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "page_content",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "page_subtitle",
                        children: "Not Found"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "page_title",
                        children: "404"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "page_desc",
                        children: "Construction of itself, because it is pain some proper style design occur are pleasure"
                    })
                ]
            })
        })
    }));
}
/* harmony default export */ const _404_breadcrumb = (Error404Breadcrumb);

// EXTERNAL MODULE: ./src/components/newsletter/newsletter.js
var newsletter = __webpack_require__(1939);
// EXTERNAL MODULE: ./src/components/layout/footer.js
var footer = __webpack_require__(5608);
// EXTERNAL MODULE: ./src/lib/items-util.js
var items_util = __webpack_require__(7698);
;// CONCATENATED MODULE: ./src/pages/404.js








function Error404Page(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Error 404 - Oxybuild"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "OxyBuild - Construction React Next JS Template Industry, Products Manufacturing Company, building companies, architecture firms, and the like can take to their advantage by using OxyBuild - Construction React Next JS Template."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(_404_breadcrumb, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(error_404, {}),
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
    const newsletterItems = (0,items_util/* getAllItems */.Nx)('newsletter');
    const footerItems = (0,items_util/* getAllItems */.Nx)('footer');
    return {
        props: {
            newsletterItems,
            footerItems
        }
    };
}
/* harmony default export */ const _404 = (Error404Page);


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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,698,71], () => (__webpack_exec__(8427)));
module.exports = __webpack_exports__;

})();