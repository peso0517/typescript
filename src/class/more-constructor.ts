export {};

class Person {
  // public name: string;
  // protected age: number;

  // アクセス修飾子をコンストラクターメソッドの引数に記述することによって、
  // 自動で初期化処理が実行されるようになる!
  constructor(public name: string, protected age: number) {
    // this.name = name;
    // this.age = age;
  }
}

const me = new Person("yamamoto", 34);
console.log(me);
