"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.times = exports.small = exports.big = exports.long = void 0;
function long(font) {
    return font.length;
}
exports.long = long;
function big(uppercase) {
    return uppercase.toUpperCase();
}
exports.big = big;
function small(LowerCase) {
    return LowerCase.toLowerCase();
}
exports.small = small;
function times(what, moji) {
    const regex = new RegExp(moji, "");
    const matches = what.match(regex);
    return matches ? matches.length : 0;
}
exports.times = times;
