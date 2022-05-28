export {};

let name: any = "yamamoto";
// // any型 => number型　として制約する
// let length: number = name.length;

// // lengthは数値であると想定されるので、文字列代入可
// // length = "shinpei"; -->できる

// console.log(length);

// 方法1: as
// let length = name.length as number;
// 方法2: (変数 as 〇〇)
// let length = (name as string).length;
// 方法3: <>指定 =>このやり方推奨されていない JSXの記法に似ているためらしい
// let length = (<string>name).length;
