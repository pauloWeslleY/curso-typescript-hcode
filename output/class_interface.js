"use strict";
class Notify {
}
class EmailOne extends Notify {
    constructor(user) {
        super();
        this.name = user.name;
        this.email = user.email;
    }
    send() {
        console.log(`Sending e-mail for user ${this.email} ...`);
        return true;
    }
}
class SMS extends Notify {
    constructor(user) {
        super();
        this.number = user.cellphone;
    }
    send() {
        console.log(`Sending SMS for user ${this.number} ...`);
        return true;
    }
}
new EmailOne({
    name: 'Barry',
    email: 'theflash@gmail.com',
    cellphone: '11 945663216'
}).send();
new SMS({
    name: 'Barry',
    email: 'theflash@gmail.com',
    cellphone: '11 945663216'
}).send();
//# sourceMappingURL=class_interface.js.map