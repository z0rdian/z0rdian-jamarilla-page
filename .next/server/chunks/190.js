"use strict";
exports.id = 190;
exports.ids = [190];
exports.modules = {

/***/ 4190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ leftsidebar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
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
;// CONCATENATED MODULE: ./src/components/blogs/leftsidebar-item.js




function BlogLeftSidebarItem(props) {
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
/* harmony default export */ const leftsidebar_item = (BlogLeftSidebarItem);

;// CONCATENATED MODULE: ./src/components/blogs/leftsidebar-grid.js






function BlogLeftSidebarGrid(props) {
    const { blogs  } = props;
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (blog_module_default()).blog,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                className: "g-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                        lg: {
                            span: 4,
                            order: 1
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
                            span: 8,
                            order: 2
                        },
                        xs: {
                            order: 1
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                                className: "g-4",
                                children: blogs.map((blog)=>{
                                    return(/*#__PURE__*/ jsx_runtime_.jsx(leftsidebar_item, {
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
/* harmony default export */ const leftsidebar_grid = (BlogLeftSidebarGrid);

;// CONCATENATED MODULE: ./src/components/blogs/leftsidebar.js



function BlogLeftSidebar(props) {
    const { blogs , categories , tags  } = props;
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                className: "g-0",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                    lg: {
                        span: 12
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(leftsidebar_grid, {
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
/* harmony default export */ const leftsidebar = (BlogLeftSidebar);


/***/ })

};
;