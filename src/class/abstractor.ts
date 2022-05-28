export {};

// 抽象メソッド
// 必ずオーバーライドが必要
// 宣言のことをシグネチャーという

// abstract という classを付与する
// メソッドに対しても abstract を付与する
abstract class Animal {
  abstract cry(): string;
}

class Rion extends Animal {
  cry(): string {
    return "roar";
  }
}

class Tiger extends Animal {
  cry(): string {
    return "tigerrrrrr";
  }
}
let tiger = new Tiger();
console.log(tiger.cry());
