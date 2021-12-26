function decoratorAttr(target: unknown, nameProperty: string) {
   const newName = `_${nameProperty}`;
   Object.defineProperty(target, nameProperty, {
      get() {
         return this[newName].toUpperCase();
      },
      set(newValue) {
         this[newName] = newValue.split('').reverse().join('');
      }
   });
}

class Animal {
   @decoratorAttr
   name: string;

   constructor(name: string) {
      this.name = name;
   }
}

const dog = new Animal('Pluto');
dog.name = "Doris"
console.log(dog.name);