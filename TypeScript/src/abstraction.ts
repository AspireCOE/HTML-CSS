class Car {
  private brand: string;
  private model: string;
  private speed: number;

  constructor(car_info: { brand: string; model: string }) {
    this.brand = car_info.brand;
    this.model = car_info.model;
    this.speed = 0;
  }

  public accelerate() {
    this.speed += 10;
  }
  public break() {
    this.speed -= 10;
  }

  public getSpeed() {
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
