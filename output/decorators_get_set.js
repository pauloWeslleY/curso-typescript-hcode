"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function decoratorGetSet(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Login {
    constructor(_user, _password) {
        this._user = _user;
        this._password = _password;
    }
    get user() {
        return this._user;
    }
    get password() {
        return this._password;
    }
}
__decorate([
    decoratorGetSet(true),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Login.prototype, "user", null);
__decorate([
    decoratorGetSet(false),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Login.prototype, "password", null);
const login = new Login("flash@gmail.com", "102303");
for (let key in login) {
    console.log("key", key);
    console.log("value", login[key]);
}
//# sourceMappingURL=decorators_get_set.js.map