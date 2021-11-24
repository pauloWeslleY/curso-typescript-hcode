class Person {

   name: string;
   yearsOld: number;
   height: number;

   constructor(name: string, yearsOld: number, height: number){
      this.name = name;
      this.yearsOld = yearsOld;
      this.height = height;
   }

   toString(): string {
      return `The Person ${this.name} tem ${this.yearsOld} years and meet ${this.height}`;
   }

}

const theflash = new Person("Barry", 21, 1.75);
const flash = new Person("Nora", 19, 1.70);

theflash.name = "Wally";

console.log("Person: " + theflash);
console.log("Person: " + flash);