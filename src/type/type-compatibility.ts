export {};

let fooCompatible: any;
let barCompatible: string = "typescript";

// any 型は undefinedになる
console.log(typeof fooCompatible);

// any に対して string は互換性がある
fooCompatible = barCompatible;

console.log(typeof fooCompatible);

let fooIncompatible: string;
let barInCompatible: number = 1;

// 以下互換性がないので、エラー
// fooIncompatible = barInCompatible;

let fooString: string;
let barString: string = "string";

// OK
fooString = barString;

let fooStringLiteral: "literal" = "literal";

// 文字列リテラル型は、文字列型の一部として見做されるため、互換性がある
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1988 = 1988;

// 数値リテラル型は、数値型の一部として見做され、互換性がある
fooNumber = fooNumberLiteral;

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;

// オブジェクトの型は関係ないことを示している
// Animalインターフェイスに name を追加するとエラーが発生する
// Animal型で必要。代入する場合、代入される側に必要な値を代入する側が持っている必要がある
me = new Person(44, "shinpei");

// オブジェクト間の型の互換性の評価について、各々の型が一致しているかではなく
// *代入されるオブジェクトの内部で持っているメンバ変数を代入するオブジェクトの方でも存在するか
// *そして、そのメンバの方に互換性があるか判定している
// ちなみにclassの継承等の判定はしていないの=>構造部分型という
