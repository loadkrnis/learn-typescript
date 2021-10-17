// 타입 단언 (type assertion)
let a; // any
let b = 10; // number
let c = a; // any
let d = a as string; // 타입 단언

const div = document.querySelector('.container') as HTMLDivElement;
div.textContent = 'hello';
