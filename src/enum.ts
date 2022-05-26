export {};

enum Months {
  January = 1,
  Febrary = 2,
  March = 3,
  April = 4,
  May = 5,
  Jun = 6,
  July = 7,
  August = 8,
  September = 9,
  October = 10,
  November = 11,
  December = 12
}

console.log(Months.September);

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000'
}

let aa = COLORS.RED;

let bb = Months.April
console.log(typeof {bb});
