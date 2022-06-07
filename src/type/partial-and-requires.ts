export {};

type Profile = {
  name: string;
  age: number;
  zipCode: number;
};

// type Profile2 = {
//   name?: string;
//   age?: number;
// };

type Profile3 = {
  name: string;
  age?: number;
  zipCode: number;
};

// partialを使用すると、undefinedを自動的に付与
type PartialType = Partial<Profile>;

// Requiredを使用すると、必須の型に切り替えることができる
type RequiredType = Required<Profile3>;
