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

