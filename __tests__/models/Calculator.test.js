import Calculator from '../../src/models/Calculator.js';

describe('Calculator', () => {
  test('빈 문자열 입력 시 0을 반환한다', () => {
    const result = Calculator.calculate('');

    expect(result).toBe(0);
  });

  test('숫자 하나만 입력 시 해당 숫자를 반환한다', () => {
    expect(Calculator.calculate('1')).toBe(1);
    expect(Calculator.calculate('5')).toBe(5);
    expect(Calculator.calculate('10')).toBe(10);
  });

  test('쉼표로 구분된 두 숫자의 합을 반환한다', () => {
    expect(Calculator.calculate('1,2')).toBe(3);
  });

  test('쉼표로 구분된 세 숫자의 합을 반환한다', () => {
    expect(Calculator.calculate('1,2,3')).toBe(6);
  });
});
