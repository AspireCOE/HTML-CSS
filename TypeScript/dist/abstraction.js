"use strict";
class Car {
    constructor(car_info) {
        this.brand = car_info.brand;
        this.model = car_info.model;
        this.speed = 0;
    }
    accelerate() {
        this.speed += 10;
    }
    break() {
        this.speed -= 10;
    }
    getSpeed() {
        return `Speed of the car is ${this.speed}`;
    }
}
const car1 = new Car({
    brand: "Toyota",
    model: "Camry",
});
console.log(car1.getSpeed());
car1.accelerate();
car1.accelerate();
console.log(car1.getSpeed());
car1.break();
console.log(car1.getSpeed());
