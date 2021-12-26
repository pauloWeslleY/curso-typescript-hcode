"use strict";
function decoratorMetodo(target, propertyKey, descriptor) {
    console.log({
        target,
        propertyKey,
        descriptor
    });
}
class DealMessage {
    tellMessage(...posts) {
        return posts;
    }
}
const instance = new DealMessage();
console.log(instance.tellMessage("Hi", "Your Welcome", "Hcode"));
//# sourceMappingURL=decorators_metod.js.map