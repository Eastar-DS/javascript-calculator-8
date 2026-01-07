const Calculator = {
  calculate(input) {
    if (input === '') {
      return 0;
    }
    return Number(input);
  },
};

export default Calculator;
