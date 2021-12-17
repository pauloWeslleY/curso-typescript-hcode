"use strict";
const text = {
    value: "hcode",
    realizeProcessing(argumentsOn) {
        return argumentsOn.toUpperCase();
    }
};
console.log(text.value);
console.log(text.realizeProcessing("Hcode Training"));
const nmr = {
    value: 10,
    realizeProcessing(v) {
        return v * v;
    }
};
console.log(nmr.realizeProcessing(nmr.value));
//# sourceMappingURL=interfaces_generics.js.map