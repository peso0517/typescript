export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile("yamamoto", 33);

// 関数の引数を調査できる
type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ["gloria", 33];

console.log(...profile);

type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
