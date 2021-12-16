import MyUser from "../interfaces/MyUser";
import Notifications from "./Notify";

export class Email extends Notifications {
   send(user: MyUser): Boolean {
      console.log(`Sending e-mail for user ${user.email} ...`);
      return true;
   }
}

export class Message extends Notifications {
   send(user: MyUser): Boolean {
      console.log(`Sending SMS for user ${user.cellphone} ...`);
      return true;
   }
}

export class Android extends Notifications {
   send(user: MyUser): Boolean {
      console.log(`Sending message for user android ${user.idAndroid} ...`);
      return true;
   }
}