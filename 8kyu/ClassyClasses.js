class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  age() {
    return this.age;
  }
  info() {
    return this.name;
  }
}
return `${constructor.name}s age is ${constructor.age}`;
