function fetchItems(): Promise<Array<string>> {
  let items: Array<string> = [
    'lEJJ',
    'DvW',
    '3T899',
    'eTcdQiz',
    'HKoT',
    'zL5A4ZsN',
  ];
  return new Promise(resolve => resolve(items));
}

fetchItems().then(r => r);
