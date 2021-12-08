"use strict";
class PermissionOne {
    constructor(_name, _level) {
        this._name = _name;
        this._level = _level;
    }
    get name() {
        return this._name.toUpperCase();
    }
    set name(newName) {
        if (newName.length < 5) {
            throw new Error("The name on permission should must be five letter!");
        }
        this._name = newName;
    }
}
const onPermission = new PermissionOne("Administrator", 1);
console.log(onPermission.name);
console.log(onPermission.name);
//# sourceMappingURL=class_get_set.js.map