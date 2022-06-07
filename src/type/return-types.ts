export {};

function add(a: number, b: number) {
  return a + b;
}

console.log(add(1, 3));

type ReturnTypeFromAdd = ReturnType<typeof add>;

// inferとは: 推論するという意味。戻り値の型を引き上げたいときに使っている
type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;
