export {};

// generics => typescriptでは汎用的な型として使われる
// 関数の実装コストを大幅に削減できるのがメリット

// 1
// const echo = (arg: number): number => {
//   return arg;
// };

// 2
// const echo = (arg: string): string => {
//   return arg;
// };

// 1,2を共通化したい
// => genericsを使用できる

// Tという抽象的な型をもたすことにより実現（慣習的にTを用いる）
const echo = <T>(arg: T): T => {
  return arg;
};

// number
console.log(echo<number>(100));

// string
console.log(echo<string>("hello!!"));

// boolean
console.log(echo<boolean>(false));

// classでも使える
class Mirror<T> {
  constructor(public val: T) {}

  echo(): T {
    return this.val;
  }
}

// number
console.log(new Mirror<number>(123).echo());

// interface
interface Age {
  age: number;
}

// interfaceもいける。構造的部分型を使える
console.log(new Mirror<Age>({ age: 100 }).echo());
