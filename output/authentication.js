var Authentication;
(function (Authentication) {
    var LoginRecord = /** @class */ (function () {
        function LoginRecord() {
        }
        LoginRecord.prototype.login = function (user) {
            return user;
        };
        LoginRecord.prototype.record = function (newUser) {
            return newUser;
        };
        return LoginRecord;
    }());
    Authentication.LoginRecord = LoginRecord;
    var Recover = /** @class */ (function () {
        function Recover() {
        }
        Recover.prototype.recoverPassword = function () {
            return "Sending email for recover of password";
        };
        Recover.prototype.recoverUser = function () {
            return "Sending e-mail  for user recovery!";
        };
        return Recover;
    }());
    Authentication.Recover = Recover;
})(Authentication || (Authentication = {}));
/// <reference path="./authentication/index.ts"/>
var newRecover = new Authentication.LoginRecord();
var result = newRecover.record({
    name: "Barry Allen",
    email: "barry@gmail.com.br",
    password: "root123",
    dateBirth: new Date('2014-01-20')
});
console.log(result);
