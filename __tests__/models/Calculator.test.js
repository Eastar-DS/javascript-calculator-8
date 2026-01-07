import Calculator from '../../src/models/Calculator.js';

describe('Calculator', () => {
  test('빈 문자열 입력 시 0을 반환한다', () => {
    const result = Calculator.calculate('');

    expect(result).toBe(0);
  });
});
