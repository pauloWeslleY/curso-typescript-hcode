"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pushNotification_1 = require("./class/pushNotification");
new pushNotification_1.Email().send({
    name: 'Barry',
    email: 'theflash@gmail.com',
    cellphone: '11 945663216'
});
new pushNotification_1.Message().send({
    name: 'Barry',
    email: 'theflash@gmail.com',
    cellphone: '11 945663216'
});
new pushNotification_1.Android().send({
    name: 'Barry',
    email: 'theflash@gmail.com',
    cellphone: '11 945663216',
    idAndroid: 'IOS'
});
//# sourceMappingURL=index.js.map