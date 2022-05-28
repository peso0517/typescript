export {};

class VisaCard {
  // readonly owner: string;

  // public を記述しなくとも良い というルール
  // ただ、自明していないので、可読性が少し落ちるのではないか?
  // 微妙な差かな...
  constructor(public readonly owner: string) {
    // this.owner = owner;
  }
}

let myVisaCard = new VisaCard("yamamoto");
console.log(myVisaCard.owner);
// myVisaCard.owner = "shinpei";
