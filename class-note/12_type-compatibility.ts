// 인터페이스
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
}

var developer: Developer;
var person: Person;

developer = person; // 불가능
person = developer; // 가능

var add = function(a: number) {
};

var sum = function(a: number, b: number) {
};

// 두 함수 중 범위가 더 큰 것이 sum이다. sum을 범위가 작은 add에 대입을 할 수 있다.
sum = add;
add = sum;

//제네릭
interface Empty<T> {

}

var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2; // 가능
empty2 = empty1; // 가능

interface NotEmpty<T> {
  data: T;
}

var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
notempty1 = notempty2; // 불가능 에러
notempty2 = notempty1; // 불가능 에러
