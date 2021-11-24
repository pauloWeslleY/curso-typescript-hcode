"use strict";
class SignIn {
    constructor(name, birth) {
        this.name = name;
        this.birth = birth;
    }
}
class Client extends SignIn {
    constructor(name, birth, email, company) {
        super(name, birth);
        this.email = email;
        this.company = company;
    }
}
const theFlash = new Client("barry", new Date("1998-01-01"), "theflash@gmail.com", "StarLabs");
console.log(theFlash);
//# sourceMappingURL=class_heranca.js.map