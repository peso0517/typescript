export {};

let numbers: number[] = [1, 2, 3];

let numbers2: Array<number> = [1, 2, 3];

console.log(numbers);
console.log(numbers2);

let strings: Array<string> = ['tokyo', 'kyoto'];
let strings2: string[] = ['type', 'aaaa'];

let nijigen: number[][] = [
  [50, 10],
  [40, 10]
]

let nijigen2 = [
  { 'aaa': 10, 'ccc': 20 },
  { 'bbb': 20}
];

console.log(nijigen2[0]['ccc'])

let hairetu:(string | boolean | number)[] = [1, false, 'aaa'];

