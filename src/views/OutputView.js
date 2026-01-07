import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printInputPrompt() {
    Console.print('덧셈할 문자열을 입력해 주세요.');
  },

  printString(string) {
    Console.print(string);
  },
};

export default OutputView;
