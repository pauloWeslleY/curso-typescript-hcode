"use strict";
class Notifications {
}
class Email extends Notifications {
    send(user) {
        console.log(`Sending e-mail for user ${user.email} ...`);
        return true;
    }
}
class Message extends Notifications {
    send(user) {
        console.log(`Sending SMS for user ${user.cellphone} ...`);
        return true;
    }
}
class Android extends Notifications {
    send(user) {
        console.log(`Sending message for user android ${user.idAndroid} ...`);
        return true;
    }
}
new Email().send({
    name: 'Barry',
    email: 'theflash@gmail.com',
    cellphone: '11 945663216'
});
new Message().send({
    name: 'Barry',
    email: 'theflash@gmail.com',
    cellphone: '11 945663216'
});
new Android().send({
    name: 'Barry',
    email: 'theflash@gmail.com',
    cellphone: '11 945663216',
    idAndroid: 'IOS'
});
//# sourceMappingURL=class_abs.js.map