import { Android, Email, Message } from "./class/pushNotification";

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