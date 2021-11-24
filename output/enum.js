"use strict";
var Permission;
(function (Permission) {
    Permission[Permission["ADMIN"] = 1] = "ADMIN";
    Permission["USERSPERMISSION"] = "USER";
    Permission["READONLY"] = "READONLY";
})(Permission || (Permission = {}));
console.log(Permission.ADMIN);
console.log(Permission.USERSPERMISSION);
console.log(Permission.READONLY);
console.log(Permission["USERSPERMISSION"]);
//# sourceMappingURL=enum.js.map