// ES2015 (ES6)
class Person {
  constructor(name, age) {
    log('생성');
    this.name = name;
    this.age = age;
  }
}

let seho = new Person('세호', 30); // 생성
console.log(seho); // Person {name: '세호', age: 30}
