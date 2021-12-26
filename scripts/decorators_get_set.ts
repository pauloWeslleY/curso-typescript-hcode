function decoratorGetSet(value: boolean) {
   return function (
      target: unknown,
      propertyKey: string,
      descriptor: PropertyDescriptor
   ) {
      descriptor.enumerable = value;
   }
}

class Login {
   constructor(private _user: string, private _password: string) {  }

   @decoratorGetSet(true)
   get user() {
      return this._user;
   }
   @decoratorGetSet(false)
   get password() {
      return this._password;
   }
}

const login = new Login("flash@gmail.com", "102303");
for (let key in login) {
   console.log("key", key);
   console.log("value", login[key]);
}