function logText(text) {
  console.log(text);
  return text;
}

logText(10);
logText('typescript');
logText(true);

function logText2<T>(text: T): T {
  console.log(text);
  return text;
}

logText2<number>(10);
logText2<string>('typescript');
logText2<boolean>(true);

function logText3Text(text: string) {
  console.log(text);
  return text;
}

function logText3Number(text: number) {
  console.log(text);
  return text;
}

// 제네릭을 사용하지 않고 여러 타입에 대응하면 이와같이 코드 중복이 발생한다.
logText3Text('a');
logText3Number(123);
