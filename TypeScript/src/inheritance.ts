class Person {
  protected name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public Greet(): string {
    return `Hi, I am ${this.name} and I am ${this.age} year old`;
  }
}

class Member extends Person {
  public memberId: string | number;
  public department: string;

  constructor(
    name: string,
    age: number,
    memberId: string | number,
    department: string
  ) {
    super(name, age);
    this.memberId = memberId;
    this.department = department;
  }

  public getDepartment() {
    return `I am ${this.name} from ${this.department} department`;
  }

  public getId() {
    return `Employee Id of this person (${this.name}) is ${this.memberId}`;
  }
}

const member1 = new Member("Arun", 25, "Arun02", "SD");

console.log(member1.Greet());
console.log(member1.getId());
console.log(member1.getDepartment());
