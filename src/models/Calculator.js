const Calculator = {
  calculate(input) {
    if (input === '') {
      return 0;
    }

    const numbers = input.split(/,|:/).map(Number);
    return numbers.reduce((sum, num) => sum + num, 0);
  },
};

export default Calculator;
