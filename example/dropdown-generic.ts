interface Email {
  value: string;
  selected: boolean;
}

interface ProductNumber {
  value: number;
  selected: boolean;
}

interface DropdownItem<T> {
  value: T;
  selected: boolean;
}

const emails: DropdownItem<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

const numberOfProducts: DropdownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem(item: DropdownItem<string> | DropdownItem<number>) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: createDropdownItem 함수를 유니온 방식이 아닌 제네릭으로 다시 작성해보기
function createDropdownItem2<T>(item: DropdownItem<T>) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function(email) {
  const item = createDropdownItem2<string>(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});

numberOfProducts.forEach(product => {
  const item = createDropdownItem2<number>(product);
});

interface Dropdown {
  value: string;
  selected: boolean;
}

const obj: Dropdown = { value: 'hello', selected: false };

interface Dropdown2<T> {
  value: T;
  selected: boolean;
}

const obj2: Dropdown2<string> = { value: 'typescript', selected: false };

// 제네릭의 타입 제한
function logTextLength<T>(text: T[]): T[] {
  return text;
}

logTextLength<string>(['asd', 'dsa']);

// 제네릭의 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}

function logTextLength2<T extends LengthType>(text: T): number { // extends 하여 length가 포함되어 있는 타입을 제한
  return text.length;
}

logTextLength2('a');

// 제네릭의 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

getShoppingItemOption('price');
getShoppingItemOption('stock');
