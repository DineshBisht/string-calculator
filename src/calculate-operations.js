const CalculateOperation = {
  add: (input = null) => {
    if (!input || input.length <= 0) {
      return 0;
    }
    const numbers = input.match(/-?\d+/g).map(Number);
    // validate negative numbers
    const negativeNumbers = numbers.filter((num) => num < 0);
    if (negativeNumbers && negativeNumbers.length > 0) {
      throw new Error(
        negativeNumbers.join(",") + " negative numbers not excepted"
      );
    }
    return numbers.reduce(
      (partialSum, num) => parseInt(partialSum) + parseInt(num),
      0
    );
  },
};

module.exports = CalculateOperation;
