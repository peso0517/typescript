export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: "shinpei",
  age: 33,
};

me.age++;

console.log(me.age);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: "peso",
  age: 22,
};

// friend.age++;

type Yomitori<T> = {
  readonly [P in keyof T]: T[P];
};

type yomitoridayo = Yomitori<Profile>;
