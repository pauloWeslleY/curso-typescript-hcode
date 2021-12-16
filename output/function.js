"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const showMessage_1 = __importDefault(require("./functions/showMessage"));
console.log(showMessage_1.default("Hcode"));
console.log(showMessage_1.default(100));
console.log(showMessage_1.default({ url: "https//hcode.com.br" }));
const showMe = (code) => {
    return new Date();
};
//# sourceMappingURL=function.js.map