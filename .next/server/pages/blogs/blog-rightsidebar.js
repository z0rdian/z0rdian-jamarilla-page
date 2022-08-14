"use strict";
(() => {
var exports = {};
exports.id = 833;
exports.ids = [833];
exports.modules = {

/***/ 8978:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ blog_rightsidebar),
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
// EXTERNAL MODULE: ./src/components/page-navigation/index.js
var page_navigation = __webpack_require__(1137);
// EXTERNAL MODULE: ./src/components/blogs/blog-sidebar.js
var blog_sidebar = __webpack_require__(2193);
// EXTERNAL MODULE: ./src/components/blogs/blog.module.scss
var blog_module = __webpack_require__(5932);
var blog_module_default = /*#__PURE__*/__webpack_require__.n(blog_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/blogs/rightsidebar-item.js




function BlogRightSidebarItem(props) {
    const { title , blogMeta , excerpt , mediumImage , slug  } = props.blog;
    const imagePath = `/images/blogs/${slug}/${mediumImage}`;
    const linkPath = `/blogs/${slug}`;
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
        md: {
            span: 6
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (blog_module_default()).blog_item,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: linkPath,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: (blog_module_default()).blog_img,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: "img-full",
                            src: imagePath,
                            alt: title
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (blog_module_default()).blog_content,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (blog_module_default()).blog_meta,
                            children: blogMeta
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: (blog_module_default()).blog_title,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: linkPath,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: title
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (blog_module_default()).blog_desc,
                            children: excerpt
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: (blog_module_default()).blog_btn__wrap,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: linkPath,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: (blog_module_default()).blog_btn__link,
                                            children: "Read more"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: linkPath,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: "35 Comments"
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
}
/* harmony default export */ const rightsidebar_item = (BlogRightSidebarItem);

;// CONCATENATED MODULE: ./src/components/blogs/rightsidebar-grid.js






function BlogRightSidebarGrid(props) {
    const { blogs  } = props;
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (blog_module_default()).blog,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                className: "g-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                        lg: {
                            span: 4
                        },
                        xs: {
                            order: 2
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(blog_sidebar/* default */.Z, {
                            blogsSidebar: props.blogsSidebar,
                            categories: props.categories,
                            tags: props.tags
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                        lg: {
                            span: 8
                        },
                        xs: {
                            order: 1
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                                className: "g-4",
                                children: blogs.map((blog)=>{
                                    return(/*#__PURE__*/ jsx_runtime_.jsx(rightsidebar_item, {
                                        blog: blog
                                    }, blog.slug));
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(page_navigation/* default */.Z, {})
                        ]
                    })
                ]
            })
        })
    }));
}
/* harmony default export */ const rightsidebar_grid = (BlogRightSidebarGrid);

;// CONCATENATED MODULE: ./src/components/blogs/rightsidebar.js



function BlogRightSidebar(props) {
    const { blogs , categories , tags  } = props;
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                className: "g-0",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                    lg: {
                        span: 12
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(rightsidebar_grid, {
                        blogs: blogs,
                        blogsSidebar: props.blogsSidebar,
                        categories: categories,
                        tags: tags
                    })
                })
            })
        })
    }));
}
/* harmony default export */ const rightsidebar = (BlogRightSidebar);

;// CONCATENATED MODULE: ./src/components/breadcrumb/blogs/rightsidebar-breadcrumb.js


function RightSidebarBreadcrumb({ blogsBreadcrumb  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "page_banner__bg",
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: blogsBreadcrumb === null || blogsBreadcrumb === void 0 ? void 0 : blogsBreadcrumb.map((blogBreadcrumb, i)=>{
                return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "page_content",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "page_subtitle",
                            children: blogBreadcrumb === null || blogBreadcrumb === void 0 ? void 0 : blogBreadcrumb.rightSidebarSubtitle
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "page_title",
                            children: blogBreadcrumb === null || blogBreadcrumb === void 0 ? void 0 : blogBreadcrumb.rightSidebarTitle
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "page_desc",
                            children: blogBreadcrumb === null || blogBreadcrumb === void 0 ? void 0 : blogBreadcrumb.rightSidebarDesc
                        })
                    ]
                }, i));
            })
        })
    }));
}
/* harmony default export */ const rightsidebar_breadcrumb = (RightSidebarBreadcrumb);

// EXTERNAL MODULE: ./src/components/layout/footer.js
var footer = __webpack_require__(5608);
// EXTERNAL MODULE: ./src/components/newsletter/newsletter.js
var newsletter = __webpack_require__(1939);
// EXTERNAL MODULE: ./src/lib/blog-categories.js
var blog_categories = __webpack_require__(8044);
// EXTERNAL MODULE: ./src/lib/blog-tags.js
var blog_tags = __webpack_require__(3434);
// EXTERNAL MODULE: ./src/lib/items-util.js
var items_util = __webpack_require__(7698);
;// CONCATENATED MODULE: ./src/pages/blogs/blog-rightsidebar.js










function BlogLeftSidebarPage(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Blogs RightSidebar - OxyBuild"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "All Blogs"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(rightsidebar_breadcrumb, {
                blogsBreadcrumb: props.blogsBreadcrumb
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(rightsidebar, {
                blogs: props.blogs,
                blogsSidebar: props.blogsSidebar,
                categories: props.categories,
                tags: props.tags
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
    const allItems = (0,items_util/* getAllItems */.Nx)('blogs');
    const categories = (0,blog_categories/* getBlogCategories */.D)();
    const tags = (0,blog_tags/* getBlogTags */.y)();
    const blogsBreadcrumb = (0,items_util/* getAllItems */.Nx)('blog-breadcrumb');
    const blogsSidebar = (0,items_util/* getAllItems */.Nx)('blog-sidebar');
    const newsletterItems = (0,items_util/* getAllItems */.Nx)('newsletter');
    const footerItems = (0,items_util/* getAllItems */.Nx)('footer');
    return {
        props: {
            blogs: allItems,
            categories,
            tags,
            blogsBreadcrumb,
            blogsSidebar,
            newsletterItems,
            footerItems
        }
    };
}
/* harmony default export */ const blog_rightsidebar = (BlogLeftSidebarPage);


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,698,71,932,72,137], () => (__webpack_exec__(8978)));
module.exports = __webpack_exports__;

})();