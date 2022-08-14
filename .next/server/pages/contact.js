(() => {
var exports = {};
exports.id = 335;
exports.ids = [335];
exports.modules = {

/***/ 9723:
/***/ ((module) => {

// Exports
module.exports = {
	"btn": "contact_btn__lWv9h",
	"md-size": "contact_md-size__7bzpN",
	"btn_primary": "contact_btn_primary__KrvZk",
	"btn_secondary": "contact_btn_secondary__e5klL",
	"btn_hover__white": "contact_btn_hover__white__BH_GJ",
	"btn_hover__primary": "contact_btn_hover__primary__Zb0pl",
	"btn_hover__secondary": "contact_btn_hover__secondary__OAxU6",
	"area": "contact_area__6r5G6",
	"img": "contact_img__TWxJc",
	"img_wrap": "contact_img_wrap__oLI4V",
	"pattern": "contact_pattern__gnfxh",
	"subtitle": "contact_subtitle__jE_ug",
	"content": "contact_content__SuwZn",
	"title": "contact_title__YDdT3",
	"desc": "contact_desc__c8zhU",
	"info_title": "contact_info_title___NzPk",
	"info_desc": "contact_info_desc__31MQa",
	"info_list": "contact_info_list__wu6zI",
	"form": "contact_form__B8ynB",
	"form_area": "contact_form_area__Mcjh0",
	"form_title": "contact_form_title__xvHVZ",
	"form_desc": "contact_form_desc__iiYf4",
	"form_group__input": "contact_form_group__input__nI_wW",
	"form_input__field": "contact_form_input__field__wOQGD",
	"form_textarea__field": "contact_form_textarea__field__uX0in",
	"form_btn__wrap": "contact_form_btn__wrap__1QJwe"
};


/***/ }),

/***/ 7766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_contact),
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
;// CONCATENATED MODULE: ./src/components/breadcrumb/contact/index.js


function ContactBreadcrumb({ ContactBreadcrumb: ContactBreadcrumb1  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "page_banner__bg",
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: ContactBreadcrumb1 === null || ContactBreadcrumb1 === void 0 ? void 0 : ContactBreadcrumb1.map((contactBreadcrumb, i)=>{
                return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "page_content",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "page_subtitle",
                            children: contactBreadcrumb === null || contactBreadcrumb === void 0 ? void 0 : contactBreadcrumb.breadcrumbSubtitle
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "page_title",
                            children: contactBreadcrumb === null || contactBreadcrumb === void 0 ? void 0 : contactBreadcrumb.breadcrumbTitle
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "page_desc",
                            children: contactBreadcrumb === null || contactBreadcrumb === void 0 ? void 0 : contactBreadcrumb.breadcrumbDesc
                        })
                    ]
                }, i));
            })
        })
    }));
}
/* harmony default export */ const contact = (ContactBreadcrumb);

// EXTERNAL MODULE: ./src/components/contact/index.module.scss
var index_module = __webpack_require__(9723);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/contact/index.js




function Contact({ contactItems  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("main", {
        children: contactItems === null || contactItems === void 0 ? void 0 : contactItems.map((contactItem, i)=>{
            var ref;
            return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (index_module_default()).area,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                    lg: {
                                        span: 6
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (index_module_default()).img_wrap,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (index_module_default()).img,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    className: "img-full",
                                                    src: contactItem === null || contactItem === void 0 ? void 0 : contactItem.image,
                                                    alt: contactItem === null || contactItem === void 0 ? void 0 : contactItem.imageAlt
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (index_module_default()).pattern,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: contactItem === null || contactItem === void 0 ? void 0 : contactItem.pattern,
                                                    alt: contactItem === null || contactItem === void 0 ? void 0 : contactItem.patternAlt
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                    lg: {
                                        span: 6
                                    },
                                    className: "ps-50",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (index_module_default()).content,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: (index_module_default()).subtitle,
                                                children: contactItem === null || contactItem === void 0 ? void 0 : contactItem.subTitle
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                className: (index_module_default()).title,
                                                children: contactItem === null || contactItem === void 0 ? void 0 : contactItem.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (index_module_default()).desc,
                                                children: contactItem === null || contactItem === void 0 ? void 0 : contactItem.desc
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (index_module_default()).info,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: (index_module_default()).info_title,
                                                        children: contactItem === null || contactItem === void 0 ? void 0 : contactItem.addressTitle
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: (index_module_default()).info_desc,
                                                        children: contactItem === null || contactItem === void 0 ? void 0 : contactItem.addressDesc
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (index_module_default()).info,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: (index_module_default()).info_title,
                                                        children: contactItem === null || contactItem === void 0 ? void 0 : contactItem.infoTitle
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                        className: (index_module_default()).info_list,
                                                        children: contactItem === null || contactItem === void 0 ? void 0 : (ref = contactItem.infoList) === null || ref === void 0 ? void 0 : ref.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    item.listText,
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                        href: item.path,
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            children: item.listValue
                                                                        })
                                                                    })
                                                                ]
                                                            }, index)
                                                        )
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (index_module_default()).form_area,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                    lg: {
                                        span: 6
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: (index_module_default()).form_title,
                                            children: contactItem === null || contactItem === void 0 ? void 0 : contactItem.formTitle
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: `${(index_module_default()).form_desc} mb-0`,
                                            children: contactItem === null || contactItem === void 0 ? void 0 : contactItem.formDesc
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                            className: (index_module_default()).form,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: (index_module_default()).form_group__input,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "text",
                                                            name: "name",
                                                            id: "name",
                                                            placeholder: "Your Name*",
                                                            required: true,
                                                            className: `${(index_module_default()).form_input__field} me-30`
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "email",
                                                            name: "email",
                                                            id: "email",
                                                            placeholder: "Your Email*",
                                                            required: true,
                                                            className: (index_module_default()).form_input__field
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                    type: "text",
                                                    placeholder: "Message",
                                                    className: `${(index_module_default()).form_textarea__field} mt-30`
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (index_module_default()).form_btn__wrap,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: `${(index_module_default()).btn} ${(index_module_default()).btn_secondary} ${(index_module_default()).btn_hover__primary}`,
                                                        type: "submit",
                                                        children: contactItem === null || contactItem === void 0 ? void 0 : contactItem.btnText
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                    lg: {
                                        span: 6
                                    },
                                    className: "ps-lg-50",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "map_with__pattern",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                                className: "map_size",
                                                src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.693667617067!2d144.946279515845!3d-37.82064364221098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4cee0cec83%3A0xd019c5f69915a4a0!2sCollins%20St%2C%20West%20Melbourne%20VIC%203003%2C%20Australia!5e0!3m2!1sen!2sbd!4v1607512676761!5m2!1sen!2sbd"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "map_pattern",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: contactItem === null || contactItem === void 0 ? void 0 : contactItem.mapPattern,
                                                    alt: contactItem === null || contactItem === void 0 ? void 0 : contactItem.mapPatternAlt
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            }, i));
        })
    }));
}
/* harmony default export */ const components_contact = (Contact);

// EXTERNAL MODULE: ./src/components/layout/footer.js
var footer = __webpack_require__(5608);
// EXTERNAL MODULE: ./src/components/newsletter/newsletter.js
var newsletter = __webpack_require__(1939);
// EXTERNAL MODULE: ./src/lib/items-util.js
var items_util = __webpack_require__(7698);
;// CONCATENATED MODULE: ./src/pages/contact.js








function ContactPage(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Contact - Oxybuild"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "OxyBuild - Construction React Next JS Template Industry, Products Manufacturing Company, building companies, architecture firms, and the like can take to their advantage by using OxyBuild - Construction React Next JS Template."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(contact, {
                ContactBreadcrumb: props.ContactBreadcrumb
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_contact, {
                contactItems: props.contactItems
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
    const ContactBreadcrumb1 = (0,items_util/* getAllItems */.Nx)('contact-breadcrumb');
    const contactItems = (0,items_util/* getAllItems */.Nx)('contact');
    const newsletterItems = (0,items_util/* getAllItems */.Nx)('newsletter');
    const footerItems = (0,items_util/* getAllItems */.Nx)('footer');
    return {
        props: {
            ContactBreadcrumb: ContactBreadcrumb1,
            contactItems,
            newsletterItems,
            footerItems
        }
    };
}
/* harmony default export */ const pages_contact = (ContactPage);


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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,698,71], () => (__webpack_exec__(7766)));
module.exports = __webpack_exports__;

})();