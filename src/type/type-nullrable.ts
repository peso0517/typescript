export {};

// tsconfig.ts　ファイルの　"strictNullChecks": falseとすると、age: nullでコンパイルエラーは起きなくなるが、
// nullを許容した場合、あるデータに着目した際、そのデータ型に今どの値が入っているか不透明になってしまう。=> 型の安全性が担保されなくなる =>やめた方がいい
// global設定はやめとく!!

// union型を使えば、問題なくなる!!
let profile: {
  name: string;
  age: number | null;
} = {
  name: "yamamoto",
  age: null,
};
