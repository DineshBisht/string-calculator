const CalculationOperations = require("./calculate-operations");

describe("Calculation TestCases", () => {
  test("Ädd numbers ", () => {
    let sum = CalculationOperations.add("1\n2,3\n4,\n5,\n6");
    expect(sum).toBe(21);
  });
  test("If empty string is passed then it should return zero ", () => {
    let sum = CalculationOperations.add();
    expect(sum).toBe(0);
  });
});
