interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: 'Tony', age: 33, skill: 'typescript' };
}

var tony = introduce();
console.log(tony.skill); // error

if ((tony as Developer).skill) {
  let skill = (tony as Developer).skill;
  console.log(skill);
} else if ((tony as Person).age) {
  let age = (tony as Person).age;
  console.log(age);
}
// 너무 번잡스럽고 유지보수가 어려운 코드
// 위와 같은 코드를 작성하지 않기 위해 타입 가드를 사용한다.

// 타입 가드 정의
// is 키워드
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
  // 이 블록 안에서 tony는 Developer
  tony.skill;
} else {
  // 이 블록 안에서 tony는 Person
  tony.age;
}
