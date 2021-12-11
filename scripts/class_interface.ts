interface IEmail {
   name: string;
   email: string;
}

interface ICellphone {
   number: string;
}

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
   abstract send(): boolean;
}

class EmailOne extends Notify implements INotifications, IEmail {
   name: string;
   email: string;
   constructor(user: MyUserOne) {
      super();
      this.name = user.name;
      this.email = user.email;
   }
   send(): boolean {
      console.log(`Sending e-mail for user ${this.email} ...`);
      return true;
   }
}

class SMS extends Notify implements INotifications, ICellphone {
   number: string;
   constructor(user: MyUserOne) {
      super();
      this.number = user.cellphone;
   }
   send(): boolean {
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