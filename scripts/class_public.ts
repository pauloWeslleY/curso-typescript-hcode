class Vehicle {
   color: string;
   constructor(color: string) {
      this.color = color;
   }
   public tryOpenDoor(): boolean {
      return false;
   }
}
const car = new Vehicle('White');
car.color = "Blue";
console.log(car.color);
console.log(car.tryOpenDoor());