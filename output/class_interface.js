"use strict";
class Notify {
}
class EmailOne extends Notify {
    send(user) {
        console.log(`Sending e-mail for user ${user.email} ...`);
        return true;
    }
}
class SMS extends Notify {
    send(user) {
        console.log(`Sending SMS for user ${user.cellphone} ...`);
        return true;
    }
}
class AndroidOne extends Notify {
    send(user) {
        console.log(`Sending message for user android ${user.idAndroid} ...`);
        return true;
    }
}
new EmailOne().send({
    name: 'Barry',
    email: 'theflash@gmail.com',
    cellphone: '11 945663216'
});
new SMS().send({
    name: 'Barry',
    email: 'theflash@gmail.com',
    cellphone: '11 945663216'
});
new AndroidOne().send({
    name: 'Barry',
    email: 'theflash@gmail.com',
    cellphone: '11 945663216',
    idAndroid: 'IOS'
});
//# sourceMappingURL=class_interface.js.map