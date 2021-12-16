namespace Authentication {

   interface IUser {
      email: string;
      password: string;
   }

   interface IRegister {
      name: string;
      email: string;
      password: string;
      dateBirth: Date;
   }

   export class LoginRecord {
      login(user: IUser) {
         return user;
      }

      record(newUser: IRegister) {
         return newUser;
      }
   }

   export class Recover {
      recoverPassword() {
         return "Sending email for recover of password";
      }

      recoverUser() {
         return "Sending e-mail  for user recovery!";
      }
   }

}