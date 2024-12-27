const CalculationOperations = require("./calculate-operations");

const data = CalculationOperations.extractNumberFromString("1\n2,3\n4,\n5,\n6");
const result = CalculationOperations.add(data);
console.log(result);
