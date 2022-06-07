export {};

// exclude
// type MyExclude =
//   | (string extends string | number ? never : string) // stringの場合,never
//   | (number extends string | number ? never : number) // numberの場合,never
//   | (DebugType extends string | number ? never : DebugType); // DebugTypeの場合, DebugType

type MyExclude = DebugType;

type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type MyFunctionType = MyExclude;

type NonFunctionType = Exclude<SomeTypes, DebugType>;
type TypeExcludingFUnction = Exclude<SomeTypes, Function>;
