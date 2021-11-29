"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _numbers, _numbers_1;
class DocumentFolks {
    constructor() {
        this.value = "983389265-01";
        _numbers.set(this, 45);
    }
    showDocument() {
        return __classPrivateFieldGet(this, _numbers);
    }
}
_numbers = new WeakMap();
class CNPJ extends DocumentFolks {
    constructor() {
        super(...arguments);
        _numbers_1.set(this, 50);
    }
    showCNPJ() {
        return __classPrivateFieldGet(this, _numbers_1);
    }
}
_numbers_1 = new WeakMap();
const rg = new DocumentFolks();
console.log(rg.showDocument());
const cnpj = new CNPJ();
console.log(cnpj.showCNPJ());
//# sourceMappingURL=private_ecma_ts.js.map