(self['webpackChunkwebpack'] = self['webpackChunkwebpack'] || []).push([["main"], {
"../node_modules/pmodule/b.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    x: ()=>x,
    z: ()=>_cJs.z
});
const _cJs = __webpack_require__("../node_modules/pmodule/c.js");
const _trackerJs = __webpack_require__("../node_modules/pmodule/tracker.js");
var x = "x";
__webpack_require__.d(exports, {
    "x": ()=>x
});
(0, _trackerJs.track)("b.js");
},
"../node_modules/pmodule/c.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "z", {
    enumerable: true,
    get: ()=>z
});
const _trackerJs = __webpack_require__("../node_modules/pmodule/tracker.js");
var z = "z";
__webpack_require__.d(exports, {
    "z": ()=>z
});
(0, _trackerJs.track)("c.js");
},
"../node_modules/pmodule/index.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    x: ()=>_bJs.x,
    z: ()=>_bJs.z
});
const _bJs = __webpack_require__("../node_modules/pmodule/b.js");
const _trackerJs = __webpack_require__("../node_modules/pmodule/tracker.js");
(0, _trackerJs.track)("index.js");
__webpack_require__.d(exports, {
    "default": ()=>__RSPACK_DEFAULT_EXPORT__
});
let __RSPACK_DEFAULT_EXPORT__ = "def";
},
"../node_modules/pmodule/tracker.js": function (module, exports, __webpack_require__) {
"use strict";
function track(file) {
    log.push(file);
    log.sort();
}
var log = [];
__webpack_require__.d(exports, {
    "track": ()=>track,
    "log": ()=>log
});
},
"./index.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _trackerJs = __webpack_require__("../node_modules/pmodule/tracker.js");
const _indexJs = __webpack_require__.ir(__webpack_require__("../node_modules/pmodule/index.js"));
_indexJs.default.should.be.eql("def");
_indexJs.x.should.be.eql("x");
_indexJs.z.should.be.eql("z");
_trackerJs.log.should.be.eql([
    "b.js",
    "c.js",
    "index.js"
]);
},

},function(__webpack_require__) {
__webpack_require__("./index.js");
}
]);