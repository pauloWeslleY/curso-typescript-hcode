interface INotifications {
   send(user: MyUserOne): boolean;
}

interface MyUserOne{
   name: string;
   email: string;
   cellphone: string;
   idAndroid?: string;
}

abstract class Notify {
   abstract send(user: MyUserOne): boolean;
}

class EmailOne extends Notify implements INotifications {
   send(user: MyUserOne): boolean {
      console.log(`Sending e-mail for user ${user.email} ...`);
      return true;
   }
}

class SMS extends Notify {
   send(user: MyUserOne): boolean {
      console.log(`Sending SMS for user ${user.cellphone} ...`);
      return true;
   }
}

class AndroidOne extends Notify {
   send(user: MyUserOne): boolean {
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