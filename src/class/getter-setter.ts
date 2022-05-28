export {};

//  * owner
//    * 所有者
//    * 初期化時に設定できる
//    * 途中で変更できない
//    * 参照できる
//  * secretNumber
//    * 個人番号
//    * 初期化時に設定できる
//    * 途中で変更できる
//    * 参照できない

class MyNumberCard {
  // アンダースコアにすることが慣習となる(getter)
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  // メンバー変数を取得する専用のメソッドを「getter」という
  get owner(): string {
    return this._owner;
  }

  // メンバー変数を更新する専用のメソッドを「setter」という
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `${this._secretNumber}`;
  }
}

let card = new MyNumberCard("yamamoto", 3333);
// card.owner = "shinpei";
console.log(card.owner);
card.secretNumber = 90;
console.log(card.debugPrint());
