export {};

let bmi: (height: number, weight: number, consoleFlg?: boolean) => number = (
  height: number,
  weight: number,
  consoleFlg?: boolean
): number => {
  let a = weight / (height * height);
  if (consoleFlg) {
    console.log(a);
  }
  return a;
};

bmi(1.88, 90, false);
