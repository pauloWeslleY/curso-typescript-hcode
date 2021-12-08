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
const permissionTwo = new PermissionOne("Administrator", 1);
console.log(permissionTwo.name);
permissionTwo.name = 'Mom';
console.log(permissionTwo.name);
//# sourceMappingURL=class_get_set.js.map