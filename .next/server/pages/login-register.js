(() => {
var exports = {};
exports.id = 460;
exports.ids = [460];
exports.modules = {

/***/ 7339:
/***/ ((module) => {

// Exports
module.exports = {
	"area": "login-register_area__DZcZn",
	"form": "login-register_form__bAes_",
	"title": "login-register_title__P3n8N",
	"label": "login-register_label__mLF2I",
	"input": "login-register_input__8G4Dy",
	"checkbox": "login-register_checkbox__THgyv",
	"checkbox_label": "login-register_checkbox_label__9SAfh",
	"forgotton_password": "login-register_forgotton_password__SmJsc",
	"btn": "login-register_btn__mnYLC"
};


/***/ }),

/***/ 9910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_login_register),
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
;// CONCATENATED MODULE: ./src/components/breadcrumb/login-register/index.js


function LoginRegisterBreadcrumb({ LoginRegisterBreadcrumb  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "page_banner__bg",
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: LoginRegisterBreadcrumb?.map((loginRegisterBreadcrumb, i)=>{
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "page_content",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "page_subtitle",
                            children: loginRegisterBreadcrumb?.breadcrumbSubtitle
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "page_title",
                            children: loginRegisterBreadcrumb?.breadcrumbTitle
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "page_desc",
                            children: loginRegisterBreadcrumb?.breadcrumbDesc
                        })
                    ]
                }, i);
            })
        })
    });
}
/* harmony default export */ const login_register = (LoginRegisterBreadcrumb);

// EXTERNAL MODULE: ./src/components/layout/footer.js
var footer = __webpack_require__(5608);
// EXTERNAL MODULE: ./src/components/login-register/index.module.scss
var index_module = __webpack_require__(7339);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/login-register/index.js




function LoginRegister() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (index_module_default()).area,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                        lg: {
                            span: 6
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            className: (index_module_default()).form,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: (index_module_default()).title,
                                    children: "Login"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                            xs: {
                                                span: 12
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    className: (index_module_default()).label,
                                                    children: "Email Address*"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    className: (index_module_default()).input,
                                                    type: "email",
                                                    placeholder: "Email Address"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                            xs: {
                                                span: 12
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    className: (index_module_default()).label,
                                                    children: "Password"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    className: (index_module_default()).input,
                                                    type: "password",
                                                    placeholder: "Password"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                            md: {
                                                span: 8
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "check-box",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        className: (index_module_default()).checkbox,
                                                        type: "checkbox",
                                                        id: "remember_me"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                        className: (index_module_default()).checkbox_label,
                                                        htmlFor: "remember_me",
                                                        children: "Remember me"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                            md: {
                                                span: 4
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (index_module_default()).forgotton_password,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    passHref: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "Forgotten password?"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                            xs: {
                                                span: 12
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: (index_module_default()).btn,
                                                type: "submit",
                                                children: "Login"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                        lg: {
                            span: 6
                        },
                        className: "pt-max-md-25",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            className: (index_module_default()).form,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: (index_module_default()).title,
                                    children: "Register"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                            sm: {
                                                span: 6
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    className: (index_module_default()).label,
                                                    children: "First Name"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    className: (index_module_default()).input,
                                                    type: "text",
                                                    placeholder: "First Name"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                            sm: {
                                                span: 6
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    className: (index_module_default()).label,
                                                    children: "Last Name"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    className: (index_module_default()).input,
                                                    type: "text",
                                                    placeholder: "Last Name"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                            xs: {
                                                span: 12
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    className: (index_module_default()).label,
                                                    children: "Email Address*"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    className: (index_module_default()).input,
                                                    type: "email",
                                                    placeholder: "Email Address"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                            sm: {
                                                span: 6
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    className: (index_module_default()).label,
                                                    children: "Password"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    className: (index_module_default()).input,
                                                    type: "password",
                                                    placeholder: "Password"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                            sm: {
                                                span: 6
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    className: (index_module_default()).label,
                                                    children: "Confirm Password"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    className: (index_module_default()).input,
                                                    type: "password",
                                                    placeholder: "Confirm Password"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                            sm: {
                                                span: 12
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: (index_module_default()).btn,
                                                type: "submit",
                                                children: "Register"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const components_login_register = (LoginRegister);

// EXTERNAL MODULE: ./src/components/newsletter/newsletter.js
var newsletter = __webpack_require__(1939);
// EXTERNAL MODULE: ./src/lib/items-util.js
var items_util = __webpack_require__(7698);
;// CONCATENATED MODULE: ./src/pages/login-register/index.js








function LoginRegisterPage(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Login || Register - Oxybuild"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "OxyBuild - Construction React Next JS Template Industry, Products Manufacturing Company, building companies, architecture firms, and the like can take to their advantage by using OxyBuild - Construction React Next JS Template."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(login_register, {
                LoginRegisterBreadcrumb: props.LoginRegisterBreadcrumb
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_login_register, {}),
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
    const LoginRegisterBreadcrumb = (0,items_util/* getAllItems */.Nx)("login-register-breadcrumb");
    const newsletterItems = (0,items_util/* getAllItems */.Nx)("newsletter");
    const footerItems = (0,items_util/* getAllItems */.Nx)("footer");
    return {
        props: {
            LoginRegisterBreadcrumb,
            newsletterItems,
            footerItems
        }
    };
}
/* harmony default export */ const pages_login_register = (LoginRegisterPage);


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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,698,71], () => (__webpack_exec__(9910)));
module.exports = __webpack_exports__;

})();