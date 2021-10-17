// 타입 기본 추론
// interface Dropdown<T> {
//   value: T;
//   title: string;
// }
//
// const shoppingItem: Dropdown<string> = {
//   value: 'hello',
//   title: 'typescript',
// };

// 타입 기본 추론
interface Dropdown<T> {
  value: T;
  title: string;
}

interface DetailedDropdown<T> extends Dropdown<T> {
  description: string;
  tag: T,
}

const shoppingItem: DetailedDropdown<number> = {
  value: 20,
  title: 'typescript',
  description: 'hello2',
  tag: 10,
};
