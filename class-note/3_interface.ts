interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
const seho: User = {
  age: 10,
  name: '세호',
};

// 함수에 인터페이스 활용
function getUser(user: User): void {
  console.log(user);
}

const charming = {
  name: '박민규',
  age: 100,
};

getUser(charming);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

var sum: SumFunction;
sum = function(a: number, b: number) {
  return a + b;
};
