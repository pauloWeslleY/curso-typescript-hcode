"use strict";
class Vehicle {
    constructor(color) {
        this.color = color;
    }
    tryOpenDoor() {
        return false;
    }
}
const car = new Vehicle('White');
car.color = "Blue";
console.log(car.color);
console.log(car.tryOpenDoor());
//# sourceMappingURL=class_public.js.map