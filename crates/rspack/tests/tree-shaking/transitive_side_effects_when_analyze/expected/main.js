(self['webpackChunkwebpack'] = self['webpackChunkwebpack'] || []).push([["main"], {
"./app.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
__webpack_require__("./side-effects.js");
__webpack_require__.d(exports, {
    "a": ()=>a
});
const a = 3;
},
"./index.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _appJs = __webpack_require__("./app.js");
_appJs.a;
},
"./side-effects.js": function (module, exports, __webpack_require__) {
console.log("side effect");
},

},function(__webpack_require__) {
__webpack_require__("./index.js");
}
]);