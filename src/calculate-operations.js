const CalculateOperation = {
  add: (input = null) => {
    if (!input || input.length <= 0) {
      return 0;
    }
    const numbers = input.match(/-?\d+/g).map(Number);
    return numbers.reduce(
      (partialSum, num) => parseInt(partialSum) + parseInt(num),
      0
    );
  },
};

module.exports = CalculateOperation;
