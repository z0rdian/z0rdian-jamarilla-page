(() => {
var exports = {};
exports.id = 445;
exports.ids = [445];
exports.modules = {

/***/ 961:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "project-overview_item__kSwA2",
	"title": "project-overview_title__1JH81",
	"desc": "project-overview_desc__tMl4K",
	"list": "project-overview_list__2AFRV",
	"list_icon": "project-overview_list_icon__aVZEr",
	"list_text": "project-overview_list_text__sjyec",
	"image": "project-overview_image__9WXkn",
	"handover_title": "project-overview_handover_title__kPI8a",
	"handover_desc": "project-overview_handover_desc__zxra_"
};


/***/ }),

/***/ 6455:
/***/ ((module) => {

// Exports
module.exports = {
	"area": "project-detail_area__pIxm7",
	"banner": "project-detail_banner__1wQad",
	"content": "project-detail_content__JXQpE",
	"single_img": "project-detail_single_img__VNXoJ",
	"title": "project-detail_title__NVEOY",
	"subtitle": "project-detail_subtitle__4qan4",
	"summery_title": "project-detail_summery_title__jOWvS",
	"summery_desc": "project-detail_summery_desc__OfBWZ"
};


/***/ }),

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

/***/ 1145:
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
// EXTERNAL MODULE: ./src/components/banner/index-5.js
var index_5 = __webpack_require__(1717);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: ./src/components/breadcrumb/projects/detail-breadcrumb.js


function DetailBreadcrumb(props) {
    const { title , subTitle , breadcrumbDesc  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "page_banner__bg",
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "page_content",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "page_subtitle",
                        children: subTitle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "page_title",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "page_desc",
                        children: breadcrumbDesc
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
// EXTERNAL MODULE: ./src/components/projects/project-detail/index.module.scss
var index_module = __webpack_require__(6455);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: ./src/components/projects/project.module.scss
var project_module = __webpack_require__(6076);
var project_module_default = /*#__PURE__*/__webpack_require__.n(project_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/projects/project-sidebar.js




function ProjectSidebar({ projectsSidebar  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
        lg: {
            span: 3
        },
        children: projectsSidebar?.map((projectSidebar, i)=>{
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "sidebar pt-max-md-25",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `${(project_module_default()).sidebar_widget} mb-30`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: (project_module_default()).sidebar_widget__title,
                                children: projectSidebar?.title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                className: (project_module_default()).sidebar_list,
                                children: projectSidebar?.sidebarList?.map((item, index)=>{
                                    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        dangerouslySetInnerHTML: {
                                            __html: item.listItem
                                        }
                                    }, index);
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${(project_module_default()).sidebar_brochure__widget}  mb-30`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: `${(project_module_default()).sidebar_brochure__list}`,
                            children: projectSidebar?.downloadBrochure?.map((item, index)=>{
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
                        className: `${(project_module_default()).sidebar_widget__banner}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: projectSidebar?.widgetBanner,
                            alt: projectSidebar?.widgetBannerAlt
                        })
                    })
                ]
            }, i);
        })
    });
}
/* harmony default export */ const project_sidebar = (ProjectSidebar);

// EXTERNAL MODULE: ./src/components/project-overview/index.module.scss
var project_overview_index_module = __webpack_require__(961);
var project_overview_index_module_default = /*#__PURE__*/__webpack_require__.n(project_overview_index_module);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: ./src/components/project-overview/index.js




function ProjectOverview({ projectsOverview  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (project_overview_index_module_default()).item,
        children: projectsOverview?.map((projectOverview, index)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                    lg: {
                        span: 12
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: (project_overview_index_module_default()).title,
                            children: projectOverview?.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (project_overview_index_module_default()).desc,
                            children: projectOverview?.desc
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: (project_overview_index_module_default()).list,
                            children: projectOverview?.listItem?.map((item, index)=>{
                                const Social = fa_[item.checkIcon];
                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (project_overview_index_module_default()).list_icon,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Social, {})
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (project_overview_index_module_default()).list_text,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: item.text
                                            })
                                        })
                                    ]
                                }, index);
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (project_overview_index_module_default()).image,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: projectOverview?.image,
                                alt: projectOverview?.imageAlt
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: (project_overview_index_module_default()).handover_title,
                            children: projectOverview?.handoverTitle
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (project_overview_index_module_default()).handover_desc,
                            children: projectOverview?.handoverDesc
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (project_overview_index_module_default()).handover_desc,
                            children: projectOverview?.additionDesc
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: (project_overview_index_module_default()).list,
                            children: projectOverview?.handoverListItem?.map((item, index)=>{
                                const Social = fa_[item.checkIcon];
                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (project_overview_index_module_default()).list_icon,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Social, {})
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (project_overview_index_module_default()).list_text,
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
            }, index);
        })
    });
}
/* harmony default export */ const project_overview = (ProjectOverview);

// EXTERNAL MODULE: ./src/components/rich-text/index.js
var rich_text = __webpack_require__(1354);
;// CONCATENATED MODULE: ./src/components/projects/project-detail/project-content.js





function ProjectContent(props) {
    const { project  } = props;
    const { image , slug  } = props.project;
    const imagePath = `/images/projects/${slug}/${image}`;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
        lg: {
            span: 9
        },
        className: "pe-lg-45",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `${(index_module_default()).banner} row g-0`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                        md: {
                            span: 5
                        },
                        className: "mb-max-sm-20",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (index_module_default()).single_img,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: imagePath,
                                alt: project?.title
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                        md: {
                            span: 7
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "group-img row g-0 mb-20",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                        xs: {
                                            span: 6
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (index_module_default()).single_img,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: project?.groupImageOne,
                                                alt: project?.title
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                        xs: {
                                            span: 6
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (index_module_default()).single_img,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: project?.groupImageTwo,
                                                alt: project?.title
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "group-img row g-0",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                        xs: {
                                            span: 7
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (index_module_default()).single_img,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: project?.groupImageThree,
                                                alt: project?.title
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                        xs: {
                                            span: 5
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (index_module_default()).single_img,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: project?.groupImageFour,
                                                alt: project?.title
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (index_module_default()).content,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: (index_module_default()).title,
                        children: project?.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: `${(index_module_default()).subtitle} mb-40`,
                        children: project?.detailSubTitle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: (index_module_default()).summery_title,
                        children: project?.summeryTitle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (index_module_default()).summery_desc,
                        children: project?.summeryDesc
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(rich_text/* default */.Z, {
                richTexts: props.richTexts
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(project_overview, {
                projectsOverview: props.projectsOverview
            })
        ]
    });
}
/* harmony default export */ const project_content = (ProjectContent);

;// CONCATENATED MODULE: ./src/components/projects/project-detail/index.js





function ProjectDetail(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (index_module_default()).area,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(project_content, {
                        project: props.project,
                        richTexts: props.richTexts,
                        projectsOverview: props.projectsOverview
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(project_sidebar, {
                        projectsSidebar: props.projectsSidebar
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const project_detail = (ProjectDetail);

// EXTERNAL MODULE: ./src/lib/items-util.js
var items_util = __webpack_require__(7698);
;// CONCATENATED MODULE: ./src/pages/projects/[slug].js









function ProjectDetailPage(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: props.project.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "OxyBuild - Construction React Next JS Template Industry, Products Manufacturing Company, building companies, architecture firms, and the like can take to their advantage by using OxyBuild - Construction React Next JS Template."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(detail_breadcrumb, {
                subTitle: props.project.subTitle,
                title: props.project.title,
                breadcrumbDesc: props.project.breadcrumbDesc
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(project_detail, {
                project: props.project,
                projectsSidebar: props.projectsSidebar,
                richTexts: props.richTexts,
                projectsOverview: props.projectsOverview
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
function getStaticProps(context) {
    const { params  } = context;
    const { slug  } = params;
    const project = (0,items_util/* getItemData */.m_)(slug, "projects");
    const projectsSidebar = (0,items_util/* getAllItems */.Nx)("project-sidebar");
    const richTexts = (0,items_util/* getAllItems */.Nx)("rich-text");
    const projectsOverview = (0,items_util/* getAllItems */.Nx)("project-overview");
    const bannerTwoItems = (0,items_util/* getAllItems */.Nx)("banner-2");
    const newsletterItems = (0,items_util/* getAllItems */.Nx)("newsletter");
    const footerItems = (0,items_util/* getAllItems */.Nx)("footer");
    return {
        props: {
            project,
            projectsSidebar,
            richTexts,
            projectsOverview,
            bannerTwoItems,
            newsletterItems,
            footerItems
        }
    };
}
function getStaticPaths() {
    const projectFilenames = (0,items_util/* getItemsFiles */.Jf)("projects");
    const slugs = projectFilenames.map((fileName)=>fileName.replace(/\.md$/, ""));
    return {
        paths: slugs.map((slug)=>({
                params: {
                    slug: slug
                }
            })),
        fallback: false
    };
}
/* harmony default export */ const _slug_ = (ProjectDetailPage);


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
var __webpack_exports__ = __webpack_require__.X(0, [952,664,698,71,717,354], () => (__webpack_exec__(1145)));
module.exports = __webpack_exports__;

})();