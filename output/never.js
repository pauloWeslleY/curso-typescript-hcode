"use strict";
function showError(message) {
    throw new Error(message);
}
let n = 0;
function loopInfinity() {
    while (true) {
        console.log(n++);
    }
}
loopInfinity();
//# sourceMappingURL=never.js.map