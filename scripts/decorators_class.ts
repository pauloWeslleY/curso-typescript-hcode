import { debug, log } from "./utils";

@log
class FirstClass {
   constructor() { }

}

@log
class SecondClass {
   constructor() {  }
}

console.log(new SecondClass());
console.log(new FirstClass());