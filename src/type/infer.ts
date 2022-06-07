export {};

function add(a: number, b: number) {
  return a + b;
}

console.log(add(1, 3));

type ReturnTypeFromAdd = ReturnType<typeof add>;

type ReturnTypeFromStr = ReturnType<typeof String>;
