export {};

const reducer: (accumlator: number, currentValue: number) => number = (
  accumlator: number,
  currentValue: number
) => accumlator + currentValue;

const sum: (...values: number[]) => number = (...values: number[]): number =>
  values.reduce(reducer);

console.log(sum(1, 2, 3, 4, 5));
