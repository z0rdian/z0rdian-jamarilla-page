"use strict";
(() => {
var exports = {};
exports.id = 312;
exports.ids = [312];
exports.modules = {

/***/ 6221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_blogs_leftsidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4190);
/* harmony import */ var _lib_blog_categories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8044);
/* harmony import */ var _lib_items_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7698);
/* harmony import */ var _lib_blog_tags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3434);







function BlogTagPage(props) {
    const { categories , tags , blogs  } = props;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Blog Tags - OxyBuild"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "All Blogs"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_blogs_leftsidebar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                blogs: blogs,
                blogsSidebar: props.blogsSidebar,
                categories: categories,
                tags: tags
            })
        ]
    }));
}
const getStaticProps = ({ params  })=>{
    const { slug  } = params;
    const blogs = (0,_lib_items_util__WEBPACK_IMPORTED_MODULE_5__/* .getAllItems */ .Nx)('blogs');
    const blogsSidebar = (0,_lib_items_util__WEBPACK_IMPORTED_MODULE_5__/* .getAllItems */ .Nx)('blog-sidebar');
    const filteredblogs = blogs.map((blog)=>({
            ...blog,
            uniqueTag: blog.tag.find((tag)=>tag === slug
            )
        })
    ).filter((blog)=>blog.uniqueTag === slug
    );
    const tags = (0,_lib_blog_tags__WEBPACK_IMPORTED_MODULE_6__/* .getBlogTags */ .y)();
    const categories = (0,_lib_blog_categories__WEBPACK_IMPORTED_MODULE_4__/* .getBlogCategories */ .D)();
    return {
        props: {
            blogs: filteredblogs,
            categories,
            tags,
            blogsSidebar
        }
    };
};
const getStaticPaths = ()=>{
    const tags = (0,_lib_blog_tags__WEBPACK_IMPORTED_MODULE_6__/* .getBlogTags */ .y)();
    return {
        paths: tags.map((tag)=>({
                params: {
                    slug: tag
                }
            })
        ),
        fallback: false
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogTagPage);


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

/***/ 9989:
/***/ ((module) => {

module.exports = require("react-icons/io5");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,698,932,72,137,190], () => (__webpack_exec__(6221)));
module.exports = __webpack_exports__;

})();