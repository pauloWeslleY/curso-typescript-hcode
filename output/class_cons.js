"use strict";
class Order {
    constructor(product, allValue, previsionDelivery) {
        this.product = product;
        this.allValue = allValue;
        this.previsionDelivery = previsionDelivery;
    }
}
const myOrder = new Order("TV 64 inch", 2000, new Date("2021-05-01"));
console.log(myOrder);
//# sourceMappingURL=class_cons.js.map