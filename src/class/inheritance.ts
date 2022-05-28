export {};

class Animal {
  constructor(public name: string) {}

  run(): string {
    return "i can run";
  }
}

class Rion extends Animal {
  // constructor に publicを付与して、初期化処理を短縮して記述する方法は、可読性が落ちる
  // speed　というメンバについては、あえて宣言してあげたほうが、わかりやすい。継承するときとか特に
  public speed: number;

  constructor(name: string, speed: number) {
    super(name);
    this.speed = speed;
  }

  // 親クラスの記述と書き方重複している場合、以下のやり方でスマートに書き換えることができる
  run(): string {
    return `${super.run()} ${this.speed} km`;
  }
}

let animal = new Animal("human");
console.log(animal.run());

let rion = new Rion("rion", 100);
console.log(rion.run());
