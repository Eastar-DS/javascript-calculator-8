import { MissionUtils } from '@woowacourse/mission-utils';
import InputView from '../../src/views/InputView.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('InputView', () => {
  test('사용자로부터 문자열을 입력받는다', async () => {
    const inputs = ['1,2,3'];
    mockQuestions(inputs);

    const result = await InputView.readInput();

    expect(result).toBe('1,2,3');
  });
});
