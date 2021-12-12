"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = require("./classes/Database");
const conectBank = Database_1.WorkBench.factory({
    typeBank: Database_1.WorkBench.TYPE_SQLSERVER,
    password: "root123",
    user: "root",
    ip: Database_1.WorkBench.LOCALE
});
console.log(conectBank);
//# sourceMappingURL=class_static_prop.js.map