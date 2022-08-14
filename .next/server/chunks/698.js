"use strict";
exports.id = 698;
exports.ids = [698];
exports.modules = {

/***/ 7698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jf": () => (/* binding */ getItemsFiles),
/* harmony export */   "m_": () => (/* binding */ getItemData),
/* harmony export */   "Nx": () => (/* binding */ getAllItems),
/* harmony export */   "E": () => (/* binding */ getFeaturedItems)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);



function getItemsFiles(type) {
    const itemsDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'src/data', type);
    return fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(itemsDirectory);
}
function getItemData(itemIdentifier, type) {
    const itemsDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(`${process.cwd()}/src/data/${type}`);
    const itemSlug = itemIdentifier.replace(/\.md$/, '');
    const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(itemsDirectory, `${itemSlug}.md`);
    const fileContent = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath, 'utf-8');
    const { data , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContent);
    const itemData = {
        slug: itemSlug,
        ...data,
        content
    };
    return itemData;
}
function getAllItems(type) {
    const itemFiles = getItemsFiles(type);
    const allItems = itemFiles.map((itemFile)=>{
        return getItemData(itemFile, type);
    });
    const sortedItems = allItems.sort((itemA, itemB)=>itemA.date > itemB.date ? -1 : 1
    );
    return sortedItems;
}
function getFeaturedItems(items) {
    return items.filter((item)=>item.isFeatured
    );
}


/***/ })

};
;