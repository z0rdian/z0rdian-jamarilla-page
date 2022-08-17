(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2709:
/***/ ((module) => {

// Exports
module.exports = {
	"area": "header_area__Ivv9y",
	"top": "header_top__1fQ74",
	"info": "header_info__qZ_1P",
	"contact_number": "header_contact_number__H8yCF",
	"right": "header_right__Evats",
	"main": "header_main___6Uyt",
	"menu__list": "header_menu__list__V7_8a",
	"separator": "header_separator__G5VnT",
	"search__btn": "header_search__btn__0rwBv",
	"offcanvas__btn": "header_offcanvas__btn__dQBuJ",
	"logo": "header_logo__cX6fS",
	"fixed__logo": "header_fixed__logo__So59X",
	"dropdown_holder": "header_dropdown_holder__We1ig",
	"dropdown_menu": "header_dropdown_menu__13jmP"
};


/***/ }),

/***/ 6466:
/***/ ((module) => {

// Exports
module.exports = {
	"scroll_to__top": "scroll-to-top_scroll_to__top__flNQ6"
};


/***/ }),

/***/ 5782:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./src/components/layout/header.module.scss
var header_module = __webpack_require__(2709);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: external "react-icons/io5"
var io5_ = __webpack_require__(9989);
;// CONCATENATED MODULE: ./src/components/layout/offcanvas-data.js
const OffcanvasData = [
    {
        id: 1,
        title: "Home",
        path: "/",
        cName: "offcanvas-text"
    },
    {
        id: 2,
        title: "About",
        path: "/about",
        cName: "offcanvas-text"
    },
    {
        id: 3,
        title: "Services",
        path: "/services",
        cName: "offcanvas-text"
    },
    {
        id: 4,
        title: "Projects",
        path: "#",
        cName: "offcanvas-text",
        arrowDown: "FaAngleDown",
        submenu: [
            {
                link: "/projects/project-fullwidth",
                text: "Project Fullwidth"
            },
            {
                link: "/projects/project-2-columns",
                text: "Two Columns"
            },
            {
                link: "/projects/project-gallery",
                text: "Project Gallery"
            },
            {
                link: "/projects/project-slider",
                text: "Project Slider"
            }, 
        ]
    },
    {
        id: 5,
        title: "Pages",
        path: "#",
        cName: "offcanvas-text",
        arrowDown: "FaAngleDown",
        submenu: [
            {
                link: "/our-clients",
                text: "Our Clients"
            },
            {
                link: "/our-team",
                text: "Our Team"
            },
            {
                link: "/our-working-process",
                text: "Our Working Process"
            }, 
        ]
    },
    {
        id: 6,
        title: "Blogs",
        path: "#",
        cName: "offcanvas-text",
        arrowDown: "FaAngleDown",
        submenu: [
            {
                link: "/blogs/blog-fullwidth",
                text: "Blog FullWidth"
            },
            {
                link: "/blogs/blog-leftsidebar",
                text: "Blog Left Sidebar"
            },
            {
                link: "/blogs/blog-rightsidebar",
                text: "Blog Right Sidebar"
            }, 
        ]
    },
    {
        id: 7,
        title: "Contact",
        path: "/contact",
        cName: "offcanvas-text"
    }, 
];

;// CONCATENATED MODULE: ./src/components/layout/header.js








function Header() {
    // Header Sticky Activation
    const header = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", isSticky);
        return ()=>{
            window.removeEventListener("scroll", isSticky);
        };
    }, []);
    const isSticky = (e)=>{
        const scrollTop = window.scrollY;
        scrollTop >= 250 ? header.current.classList.add("is-sticky") : header.current.classList.remove("is-sticky");
    };
    // End here
    // Header Search Toggle Activation
    const { 0: search , 1: setSearch  } = (0,external_react_.useState)(false);
    const SearchToggle = ()=>{
        search ? setSearch(false) : setSearch(true);
    };
    // End here
    // Offcanvas Activation
    const { 0: offcanvas , 1: setOffcanvas  } = (0,external_react_.useState)(false);
    const showOffcanvas = ()=>setOffcanvas(!offcanvas);
    const { 0: submenuOpenId , 1: setSubmenuOpenId  } = (0,external_react_.useState)({});
    const showSubmenuClickHandler = (id)=>setSubmenuOpenId((prevData)=>{
            return {
                [id.toString()]: !prevData[id.toString()]
            };
        });
    (0,external_react_.useEffect)(()=>{
        document.body.onclick = (e)=>{
            if (offcanvas) {
                const clickIgnoreClassList = [
                    "offcanvas-menu",
                    "menu-bar-button",
                    "has-children",
                    "offcanvas-close-btn", 
                ];
                if (!clickIgnoreClassList.find((item)=>[
                        ...e.target.classList
                    ].includes(item))) {
                    setOffcanvas(false);
                }
            }
        };
    }, [
        offcanvas
    ]);
    // End here
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: (header_module_default()).area,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (header_module_default()).top,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                        xl: {
                                            span: 4,
                                            offset: 2
                                        },
                                        lg: {
                                            span: 5,
                                            offset: 3
                                        },
                                        className: "d-none d-lg-block",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (header_module_default()).info,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: (header_module_default()).contact_number,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/images/header/icon/phone.png",
                                                            alt: "Phone"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "https://wa.me/message/E32XSP3MXIBFH1",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: "+54 9 11 6860-6386"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: (header_module_default()).time_schedule,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/images/header/icon/clock.png",
                                                            alt: "Phone"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "9.00 am - 11.00 pm"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                        sm: {
                                            span: 6
                                        },
                                        className: `d-block d-lg-none`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: `header-logo`,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: (header_module_default()).logo,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/images/logo/light.png",
                                                        alt: "Header Lisght Logo"
                                                    })
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        ref: header,
                        className: `sticky_holder ${(header_module_default()).main}`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                        xl: {
                                            span: 10,
                                            offset: 2
                                        },
                                        className: "d-none d-lg-block",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                            className: (header_module_default()).menu,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: (header_module_default()).menu__list,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: "Home"
                                                                })
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: "Servicios"
                                                                })
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: (header_module_default()).separator,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/contact",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: "Contacto"
                                                                })
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        className: `${search ? "search-show" : "search-hide"}`,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("buton", {
                                                                className: (header_module_default()).search__btn,
                                                                onClick: SearchToggle,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaSearch, {})
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                                                className: "search-form",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                        className: "search-input",
                                                                        type: "search",
                                                                        name: "search",
                                                                        placeholder: "Search"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                        className: "search-inner__btn",
                                                                        type: "submit",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaSearch, {})
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `${(header_module_default()).fixed__logo} d-none d-lg-flex`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: (header_module_default()).logo,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/images/logo/dark.png",
                                            alt: "Header Dark Logo"
                                        })
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: offcanvas ? "offcanvas-menu-wrap active" : "offcanvas-menu-wrap",
                children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    className: "offcanvas-menu",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "offcanvas-menu-items",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "offcanvas-top",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "offcanvas-close-btn",
                                    "aria-label": "Right Align",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(io5_.IoCloseOutline, {
                                        onClick: showOffcanvas
                                    })
                                })
                            }),
                            OffcanvasData.map((item, offcanvas)=>{
                                const submenu = item.submenu;
                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: `${item.cName}${submenuOpenId[item.id.toString()] ? " active" : ""}`,
                                    onClick: submenu ? ()=>showSubmenuClickHandler(item.id) : ()=>{},
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: item.path,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: item?.submenu ? "has-children" : "",
                                                children: item.title
                                            })
                                        }),
                                        submenu && /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "submenu",
                                            children: submenu?.map((item, submenu)=>{
                                                return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: item.link,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: item.text
                                                        })
                                                    })
                                                }, submenu);
                                            })
                                        })
                                    ]
                                }, offcanvas);
                            })
                        ]
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const header = (Header);

;// CONCATENATED MODULE: ./src/components/layout/layout.js



function Layout(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: props.children
            })
        ]
    });
}
/* harmony default export */ const layout = (Layout);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/components/scroll/scroll-to-top.module.scss
var scroll_to_top_module = __webpack_require__(6466);
var scroll_to_top_module_default = /*#__PURE__*/__webpack_require__.n(scroll_to_top_module);
;// CONCATENATED MODULE: ./src/components/scroll/scroll-to-top.js




const ScrollToTop = ()=>{
    const { 0: isVisable , 1: setIsVisable  } = (0,external_react_.useState)(false);
    const toggleVisibility = ()=>{
        if (window.pageYOffset > 100) {
            setIsVisable(true);
        } else {
            setIsVisable(false);
        }
    };
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", toggleVisibility);
        return ()=>{
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
            type: "button",
            onClick: scrollToTop,
            className: `${(scroll_to_top_module_default()).scroll_to__top} ${isVisable ? "opacity-1" : "opacity-0 "}`,
            "aria-label": "Right Align",
            children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaArrowUp, {
                "aria-hidden": "true"
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/components/scroll/index.js


;// CONCATENATED MODULE: ./src/pages/_app.js





function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.png"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ScrollToTop, {})
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664], () => (__webpack_exec__(5782)));
module.exports = __webpack_exports__;

})();