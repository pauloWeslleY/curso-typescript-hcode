"use strict";
class Residence {
    constructor(color, address) {
        this.color = color;
        this.address = address;
    }
    playIntercom() {
        return "Intercom ringing!";
    }
}
class Home extends Residence {
    intoToHome() {
        return this.answerIntercom('Hi who is?');
    }
    answerIntercom(message) {
        return message;
    }
}
const homeToHomer = new Home("Blue", { citys: "SpringField" });
console.log(homeToHomer.playIntercom());
console.log(homeToHomer.intoToHome());
//# sourceMappingURL=class_protected.js.map