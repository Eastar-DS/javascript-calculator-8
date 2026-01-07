const Calculator = {
  calculate(input) {
    if (input === '') {
      return 0;
    }

    // 기본 구분자(쉼표, 콜론)와 숫자만 허용
    if (!/^[0-9,:]+$/.test(input)) {
      throw new Error('[ERROR] 잘못된 입력입니다.');
    }

    const numbers = input.split(/,|:/).map(Number);
    return numbers.reduce((sum, num) => sum + num, 0);
  },
};

export default Calculator;
