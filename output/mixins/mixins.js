"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const applyMixins_1 = __importDefault(require("./applyMixins"));
class Product {
    sell(quantity) {
        return `Were sold ${quantity} items of this product`;
    }
    buy(quantity) {
        return `Were purchased ${quantity} items of this product`;
    }
}
class Movel {
    toSit() {
        return "You sat in movable";
    }
    push(meters) {
        return `The movable was pushed ${meters} meters`;
    }
}
class Settee {
    constructor(name) {
        this.name = name;
    }
}
applyMixins_1.default(Settee, [Product, Movel]);
const product = new Settee('My settee');
console.log(product.sell(25));
console.log(product.push(79));
console.log(product.name);
//# sourceMappingURL=mixins.js.map