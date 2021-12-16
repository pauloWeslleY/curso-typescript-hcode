"use strict";
var Authentication;
(function (Authentication) {
    class LoginRecord {
        login(user) {
            return user;
        }
        record(newUser) {
            return newUser;
        }
    }
    Authentication.LoginRecord = LoginRecord;
    class Recover {
        recoverPassword() {
            return "Sending email for recover of password";
        }
        recoverUser() {
            return "Sending e-mail  for user recovery!";
        }
    }
    Authentication.Recover = Recover;
})(Authentication || (Authentication = {}));
//# sourceMappingURL=index.js.map