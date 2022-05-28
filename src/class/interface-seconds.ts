export {};

class Mahotsukai {}

class Souryo {}

// typescript は 単一継承のみ可 なので、クラス名の複数指定はできない
// =>クラスを統合したインターフェイスならば、できる
class Taro extends Souryo {}

// ionazunがシグネチャー 処理の実体は不明
interface Kenja {
  ionazun(): void;
}

// kougekiがシグネチャー 処理の実体は不明
interface Senshi {
  kougeki(): void;
}

// interfaceを用いた多重継承
// Jiroにシグネチャーの実装がない場合、エラーが発生する
// メリット->実装漏れがなくなる
class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log("ionazun");
  }

  kougeki(): void {
    console.log("kougeki");
  }
}

let jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
