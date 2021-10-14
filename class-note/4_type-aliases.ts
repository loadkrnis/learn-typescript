// 타입 선언
interface PersonInterface {
  name: string;
  age: number;
}

type PersonType = {
  name: string;
  age: number;
}

// 타입 별칭과 인터페이스의 가장 큰 차이점은 타입의 확장 가능 / 불가능 여부입니다.
// 인터페이스 확장이 가능한데 반해 타입 별칭은 확장이 불가능합니다. 따라서, 가능한한 type보다는
// interface로 선언해서 사용하는 것을 추천합니다.
// var seho: PersonInterface = {};
// var seho2: PersonType = {};
