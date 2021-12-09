"use strict";
class WorkBench {
    constructor(ip, user, password, typeBank) {
        this.ip = ip;
        this.user = user;
        this.password = password;
        this.typeBank = typeBank;
    }
    static factory(params) {
        if (![
            WorkBench.TYPE_MYSQL,
            WorkBench.TYPE_SQLSERVER
        ].includes(params.typeBank)) {
            throw new Error("Type Bank incorrect");
        }
        return new WorkBench(params.ip, params.user, params.password, params.typeBank);
    }
}
WorkBench.LOCALE = "127.0.0.1";
WorkBench.TYPE_MYSQL = "MySQL";
WorkBench.TYPE_SQLSERVER = "SQL Server";
const conectBank = WorkBench.factory({
    typeBank: WorkBench.TYPE_SQLSERVER,
    password: "root123",
    user: "root",
    ip: WorkBench.LOCALE
});
console.log(conectBank);
//# sourceMappingURL=class_static_prop.js.map