interface Email {
  value: string;
  selected: boolean;
}

interface ProductNumber {
  value: number;
  selected: boolean;
}


const emails: Email[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

const numberOfProducts: ProductNumber[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem(item: Email | ProductNumber) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function(email) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});

numberOfProducts.forEach(product => {
  const item = createDropdownItem(product);
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
