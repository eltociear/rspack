(self['webpackChunkwebpack'] = self['webpackChunkwebpack'] || []).push([["main"], {
"./zh_locale.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {};
exports["default"] = _default;
},
"./antd/index.ts": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "locales", {
    enumerable: true,
    get: ()=>locales
});
const _localeZhTs = __webpack_require__.ir(__webpack_require__("./locale_zh.ts"));
const locales = {
    zh_CN: _localeZhTs.default
};
__webpack_require__.d(exports, {
    "locales": ()=>locales
});
},
"./index.ts": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _indexTs = __webpack_require__("./antd/index.ts");
_indexTs.locales.zh_CN;
__webpack_require__.d(exports, {
    "test": ()=>test
});
function test() {}
},
"./locale_zh.ts": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _zhLocaleJs = __webpack_require__.ir(__webpack_require__("./zh_locale.js"));
__webpack_require__.d(exports, {
    "default": ()=>__RSPACK_DEFAULT_EXPORT__
});
let __RSPACK_DEFAULT_EXPORT__ = _zhLocaleJs.default;
},

},function(__webpack_require__) {
__webpack_require__("./index.ts");
}
]);