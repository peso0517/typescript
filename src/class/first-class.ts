export {};

class Person {
  name: string;
  age: number;

  // constructor => returnしないので,戻り値の型指定不要 => constructorは言語仕様で不可
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // 関数
  profile() {
    return `name: ${this.name},  age: ${this.age}`;
  }
}

let taro = new Person("taro", 33);
console.log(taro.profile());
// let hanako = new Person();
