import { MissionUtils } from '@woowacourse/mission-utils';
import OutputView from '../../src/views/OutputView.js';

describe('OutputView', () => {
  let logSpy;

  beforeEach(() => {
    logSpy = jest.spyOn(MissionUtils.Console, 'print');
    logSpy.mockClear();
  });

  test('입력 프롬프트 메시지를 출력한다', () => {
    OutputView.printInputPrompt();

    expect(logSpy).toHaveBeenCalledWith('덧셈할 문자열을 입력해 주세요.');
  });

  test('입력받은 문자열을 그대로 출력한다', () => {
    const input = '1,2,3';

    OutputView.printString(input);

    expect(logSpy).toHaveBeenCalledWith(input);
  });
});
