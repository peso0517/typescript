export {};

const nextYearSalary = (currentSalary: number, rate: number = 1.05) => {
  return currentSalary * rate;
};

console.log(nextYearSalary(1000, 1.1));
