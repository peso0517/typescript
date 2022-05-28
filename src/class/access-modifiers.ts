export {};

class Person {
  // Tips
  // アクセス修飾子に対して閲覧制限できる

  // メンバ変数
  public name: string;
  private age: number;
  protected nationality: string;

  // constructor => returnしないので,戻り値の型指定不要 => constructorは言語仕様で不可
  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  // 関数
  profile(): string {
    // class内ではageに対してアクセスすることができる
    return `name: ${this.name},  age: ${this.age}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }

  profile(): string {
    // age:         privateは継承先でも使用不可。親クラスでのみ使用できる
    // nationality: protectedは継承先で使用できる
    return `name: ${this.name}, nationality: ${this.nationality}`;
  }
}

let taro = new Person("taro", 33, "japan");
console.log(taro.profile());
console.log(taro.name);
// アクセス不可
// console.log(taro.age); // private
// console.log(taro.nationality); // protected
// // let hanako = new Person();
