import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readInput() {
    return Console.readLineAsync('');
  },
};

export default InputView;
