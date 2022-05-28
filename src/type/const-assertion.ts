export {};

let name = "shinpei";

name = "yama";

// `ham`型の文字列リテラルとなる=> ham以外で再代入できなくなる
let nickname = "ham" as const;
// 不可
// nickname = "hama";

// オブジェクト
let profile = {
  name: "shinoei",
  height: 175,
} as const;

// as constにより、一括でreadonlyとなる
// それぞれにreadonlyと付与しなくて良くなる
// nestしていても全てreadonlyになる
// *****
// let profile: {
//   readonly name: "shinoei";
//   readonly height: 175;
// }
