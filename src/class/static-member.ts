export {};

// 静的メンバ
class Me {
  static isProgrammer: boolean = true;
  static firstName: string = "yamamoto";
  static lastName: string = "shinpei";

  static work() {
    return `hey guys! this is ${this.lastName}! are you intersted in typescript ?`;
    // return "hey guys are you intersted in typescript ?";
  }
}

let me = new Me();
// 静的メンバに対して,アクセス不可
console.log(me);
// クラスを指定してメンバにアクセス可
console.log(Me.work());
