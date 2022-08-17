(() => {
var exports = {};
exports.id = 196;
exports.ids = [196];
exports.modules = {

/***/ 5449:
/***/ ((module) => {

// Exports
module.exports = {
	"area": "blockquote_area__yiKyb",
	"desc": "blockquote_desc__jzP8M"
};


/***/ }),

/***/ 3353:
/***/ ((module) => {

// Exports
module.exports = {
	"area": "blog-detail_area__bsD_9",
	"content": "blog-detail_content__hdFpP",
	"meta": "blog-detail_meta___HI12",
	"title": "blog-detail_title__9pH8A",
	"subtitle": "blog-detail_subtitle__BySAC",
	"desc": "blog-detail_desc__kQd_s"
};


/***/ }),

/***/ 7732:
/***/ ((module) => {

// Exports
module.exports = {
	"area": "disqus_area__ly_sJ"
};


/***/ }),

/***/ 236:
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
// EXTERNAL MODULE: ./src/components/blockquote/index.module.scss
var index_module = __webpack_require__(5449);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
;// CONCATENATED MODULE: ./src/components/blockquote/index.js


function Blockquote() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (index_module_default()).area,
        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
            className: (index_module_default()).desc,
            children: "Provide the best Constructin services for our client with their more we have expert team, modern equipments and quality materials obtain pain of itself, because it is pain, but because occasionally circumstances occur"
        })
    });
}
/* harmony default export */ const blockquote = (Blockquote);

// EXTERNAL MODULE: ./src/components/rich-text/index.js
var rich_text = __webpack_require__(1354);
;// CONCATENATED MODULE: external "disqus-react"
const external_disqus_react_namespaceObject = require("disqus-react");
// EXTERNAL MODULE: ./src/components/disqus/index.module.scss
var disqus_index_module = __webpack_require__(7732);
var disqus_index_module_default = /*#__PURE__*/__webpack_require__.n(disqus_index_module);
;// CONCATENATED MODULE: ./src/components/disqus/index.js



function DisqusForm() {
    const disqusShortname = "Oxybuild";
    const disqusConfig = {
        url: "https://oxybuild.disqus.com/",
        identifier: "123",
        title: "oxybuild-post"
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (disqus_index_module_default()).area,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_disqus_react_namespaceObject.DiscussionEmbed, {
            shortname: disqusShortname,
            config: disqusConfig
        })
    });
}
/* harmony default export */ const disqus = (DisqusForm);

// EXTERNAL MODULE: ./src/components/blogs/blog-detail/index.module.scss
var blog_detail_index_module = __webpack_require__(3353);
var blog_detail_index_module_default = /*#__PURE__*/__webpack_require__.n(blog_detail_index_module);
;// CONCATENATED MODULE: ./src/components/blogs/blog-detail/blog-content.js






function BlogContent(props) {
    const { blog  } = props;
    const { largeImage , slug  } = props.blog;
    const imagePath = `/images/blogs/${slug}/${largeImage}`;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
        lg: {
            span: 8
        },
        className: "pe-lg-45",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "banner",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    className: "img-full",
                    src: imagePath,
                    alt: blog?.title
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (blog_detail_index_module_default()).content,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (blog_detail_index_module_default()).meta,
                        children: blog?.blogMeta
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: (blog_detail_index_module_default()).title,
                        children: blog?.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: (blog_detail_index_module_default()).subtitle,
                        children: blog?.detailSubTitle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (blog_detail_index_module_default()).desc,
                        children: blog?.detailDescOne
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (blog_detail_index_module_default()).desc,
                        children: blog?.detailDescTwo
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(blockquote, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(rich_text/* default */.Z, {
                richTexts: props.richTexts
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(disqus, {})
        ]
    });
}
/* harmony default export */ const blog_content = (BlogContent);

// EXTERNAL MODULE: ./src/components/blogs/blog-sidebar.js
var blog_sidebar = __webpack_require__(2193);
;// CONCATENATED MODULE: ./src/components/blogs/blog-detail/index.js





function BlogDetail(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (blog_detail_index_module_default()).area,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(blog_content, {
                        blog: props.blog,
                        richTexts: props.richTexts
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                        lg: {
                            span: 4
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(blog_sidebar/* default */.Z, {
                            blogsSidebar: props.blogsSidebar,
                            categories: props.categories,
                            tags: props.tags
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const blog_detail = (BlogDetail);

;// CONCATENATED MODULE: ./src/components/breadcrumb/blogs/detail-breadcrumb.js


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
;// CONCATENATED MODULE: ./src/pages/blogs/[slug].js










function BlogDetailPage(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                        children: [
                            props.blog.title,
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
                detailBreadcrumbSubTitle: props.blog.detailBreadcrumbSubTitle,
                title: props.blog.title,
                detailBreadcrumbDesc: props.blog.detailBreadcrumbDesc
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(blog_detail, {
                blog: props.blog,
                richTexts: props.richTexts,
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
    });
}
function getStaticProps(context) {
    const { params  } = context;
    const { slug  } = params;
    const blog = (0,items_util/* getItemData */.m_)(slug, "blogs");
    const blogsSidebar = (0,items_util/* getAllItems */.Nx)("blog-sidebar");
    const richTexts = (0,items_util/* getAllItems */.Nx)("rich-text");
    const categories = (0,blog_categories/* getBlogCategories */.D)();
    const tags = (0,blog_tags/* getBlogTags */.y)();
    const newsletterItems = (0,items_util/* getAllItems */.Nx)("newsletter");
    const footerItems = (0,items_util/* getAllItems */.Nx)("footer");
    return {
        props: {
            blog,
            blogsSidebar,
            richTexts,
            categories,
            tags,
            newsletterItems,
            footerItems
        }
    };
}
function getStaticPaths() {
    const blogFilenames = (0,items_util/* getItemsFiles */.Jf)("blogs");
    const slugs = blogFilenames.map((fileName)=>fileName.replace(/\.md$/, ""));
    return {
        paths: slugs.map((slug)=>({
                params: {
                    slug: slug
                }
            })),
        fallback: false
    };
}
/* harmony default export */ const _slug_ = (BlogDetailPage);


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,698,71,932,72,354], () => (__webpack_exec__(236)));
module.exports = __webpack_exports__;

})();