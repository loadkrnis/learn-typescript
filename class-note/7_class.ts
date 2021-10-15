class Person {
  public age: number;
  readonly log: string;
  private name: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
