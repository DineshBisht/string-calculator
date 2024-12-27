const CalculateOperation = {
  extractNumberFromString: (input) => input.match(/-?\d+/g).map(Number),
  add: (numbers) =>
    numbers.reduce(
      (partialSum, num) => parseInt(partialSum) + parseInt(num),
      0
    ),
};

module.exports = CalculateOperation;
