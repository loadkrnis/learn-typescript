function logMessage(value: any) {
  console.log(value);
}

logMessage('hello');
logMessage(100);

// 유니온 타입 연산자로 여러 타입을 지정할 수 있다.
function logMessages(value: string | number) {
  let test;

  // 툭정 타입으로 타입의 범위를 좁혀나가는 과정을 '타입 가드'라고 한다.
  if (typeof value === 'number') {
    // 해당 중괄호 안에서 value의 타입이 number로 이미 추론되어 있다.
    test = value.toString();
  } else if (typeof value === 'string') {
    // 해당 중괄호 안에서 value의 타입이 string로 이미 추론되어 있다.
    test = value.toString();
  }
  console.log(value);
}

logMessage('hello');
logMessage(10);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {
  // 유니온 타입의 특징
  // 유니온된 타입 중 공통된 속성만 자동완성으로 나오게 된다.
  // someone.name
  // someone.skill (x)
  // someone.age (x)

  // => 타입가드로 커버링 가능
}

