export {};

// シグネチャー
function double(value: number): number;
function double(value: string): string;

function double(value: any): any {
  if (typeof value === "string") {
    return value + value;
  } else {
    return value * 2;
  }
}

// function double(value: string): string {
//   return value + value;
// }

console.log(double(100));
console.log(double("go "));
