export {};

const kansu = (): number => 444;

let numAny: any = kansu();
let numUnknown: unknown = kansu();

let sumAny = numAny + 10
if (typeof numUnknown === 'number') {
  let sumUnknown =  numUnknown + 10
  console.log(sumUnknown)
};
// 型ガードといわれる
// unknown => type of で判定させることで,実行時エラーを防ぐことができる
