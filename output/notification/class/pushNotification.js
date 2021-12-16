"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Android = exports.Message = exports.Email = void 0;
const Notify_1 = __importDefault(require("./Notify"));
class Email extends Notify_1.default {
    send(user) {
        console.log(`Sending e-mail for user ${user.email} ...`);
        return true;
    }
}
exports.Email = Email;
class Message extends Notify_1.default {
    send(user) {
        console.log(`Sending SMS for user ${user.cellphone} ...`);
        return true;
    }
}
exports.Message = Message;
class Android extends Notify_1.default {
    send(user) {
        console.log(`Sending message for user android ${user.idAndroid} ...`);
        return true;
    }
}
exports.Android = Android;
//# sourceMappingURL=pushNotification.js.map