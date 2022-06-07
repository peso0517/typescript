export {};

// exclude
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type NonFunctionType = Exclude<SomeTypes, DebugType>;
type TypeExcludingFUnction = Exclude<SomeTypes, Function>;

// extract
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type FunctionTypeExtractingFUnction = Extract<SomeTypes, Function>;

// Nullable
type NullableTypes = string | number | null | undefined;
type NonNullableTYpes = NonNullable<NullableTypes>;
