(self['webpackChunkwebpack'] = self['webpackChunkwebpack'] || []).push([["main"], {
"./a.js": function (module, exports, __webpack_require__) {
"use strict";
__webpack_require__.d(exports, {
    "a": ()=>a
});
const a = 3;
},
"./b.js": function (module, exports, __webpack_require__) {
"use strict";
},
"./index.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _aJs = __webpack_require__("./a.js");
__webpack_require__("./b.js");
_aJs.a;
},

},function(__webpack_require__) {
__webpack_require__("./index.js");
}
]);