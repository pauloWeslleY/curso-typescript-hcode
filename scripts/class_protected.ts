class Residence {
   public color: string;
   public address: object;

   constructor(color: string, address: object) {
      this.color = color;
      this.address = address;
   }

   public playIntercom(): string {
      return "Intercom ringing!";
   }
}

class Home extends Residence {
   public intoToHome() {
      return this.answerIntercom('Hi who is?');
   }
   protected answerIntercom(message: string) {
      return message;
   }
}

const homeToHomer = new Home("Blue", { citys: "SpringField" });
console.log(homeToHomer.playIntercom());
console.log(homeToHomer.intoToHome());