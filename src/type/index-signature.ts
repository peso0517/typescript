export {};

// let profile: {} = {};
// profile.name = "ham";
// 型アノテーションであらかじめ設定しておけばOK

// let profile: { name?: string } = {};
// profile.name = "ham";
// profile.age = 10;
// 毎回追加しなければならないのか?

// how to write index signature
// { [index: tyoeForIndex]: typeValue}

// 型注釈
// 使い所はどこだろうか??
// 参考
// https://typescriptbook.jp/reference/values-types-variables/object/index-signature
interface Profile {
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: "ham", underTwenty: true };
profile.age = 100;
profile.nationality = "Japan";
