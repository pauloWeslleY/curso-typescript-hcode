class Teacher {

   name: string;
   years: number;
   material: string;

   constructor(name: string, years: number, material: string) {
      this.name = name;
      this.years = years;
      this.material = material;
   }

   IMeet(): string {
      return `My name is ${this.name} and I am ${this.years} years old and I will ${this.material}.`;
   }

   saidNotes(...value: number[]): number {
      const noteFull = value.reduce((full, noteCurrent) => full + noteCurrent, 0);

      return noteFull / value.length;
   }

}

const harrison = new Teacher("Harrison Wells", 45, "Scienst");

console.log(harrison.IMeet());

console.log("!===================================");

const joeCopy = new Teacher("JoeWest", 23, "TypeScript");
console.log(joeCopy.saidNotes(8, 10, 5.5, 7.5));