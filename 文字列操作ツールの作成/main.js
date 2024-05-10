"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
//インポート文
const stringUtils_js_1 = require("./stringUtils.js");
const stringUtils_js_2 = require("./stringUtils.js");
const stringUtils_js_3 = require("./stringUtils.js");
const stringUtils_js_4 = require("./stringUtils.js");
const readline = __importStar(require("readline")); //node_moduleの機能インポート
const user = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
user.question("文字列を入力: ", (input) => {
    console.log(`文字列の長さ: ${(0, stringUtils_js_1.long)(input)}`);
    console.log(`大文字: ${(0, stringUtils_js_2.big)(input)}`);
    console.log(`小文字: ${(0, stringUtils_js_3.small)(input)}`);
    user.question("出現回数を数える文字: ", (char) => {
        console.log(`出現 '${char}' 文字列中で: ${(0, stringUtils_js_4.times)(input, char)}`);
        user.close(); //user呼び出し
    });
});
