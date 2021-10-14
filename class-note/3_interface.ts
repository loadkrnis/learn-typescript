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

// 인덱싱
interface StringArray {
  [index: number]: string;
}

var arr: StringArray = ['j4h', 'A6U', '5nDy', '3VnW', 'KdrIY', '8R1w'];
// error
//arr[0] = 10;
arr[0] = 'hello';

// 딕셔너리 패턴 ***
interface StringRegexDictionary {
  [key: string]: RegExp;
}

const obj: StringRegexDictionary = {
  something: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};
