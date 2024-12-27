const CalculationOperations = require("./calculate-operations");

describe("Calculation TestCases", () => {
  test("Ädd numbers ", () => {
    let sum = CalculationOperations.add("1,2,3");
    expect(sum).toBe(6);
  });
  test("If empty string is passed then it should return zero ", () => {
    let sum = CalculationOperations.add();
    expect(sum).toBe(0);
  });
  test("Allow add method to handle new line between numbers and return total of numbers", () => {
    let sum = CalculationOperations.add("1\n2,3\n4,\n5,\n6");
    expect(sum).toBe(21);
  });
  test("Support different delimiter and return sum", () => {
    let sum = CalculationOperations.add("//;\n1;2");
    expect(sum).toBe(3);
  });
});
