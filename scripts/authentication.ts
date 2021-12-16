/// <reference path="./authentication/index.ts"/>

const newRecover = new Authentication.LoginRecord();

const result = newRecover.record({
   name: "Barry Allen",
   email: "barry@gmail.com.br",
   password: "root123",
   dateBirth: new Date('2014-01-20')
});

console.log(result);