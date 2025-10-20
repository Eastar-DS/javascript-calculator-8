import { Console } from "@woowacourse/mission-utils";

const DEFAULT_DELIMITER = '[,:]';
const CUSTOM_DELIMITER_PREFIX = '//';

class App {
  async run() {
    const inputString = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

    Console.print(`결과 : ${inputString}`);
  }

  parseInput(input) {
    if (input.startsWith(CUSTOM_DELIMITER_PREFIX)) {
      const delimiterIndex = input.indexOf('\\\\n');
      const delimiter = input.substring(2,delimiterIndex);
      const nums = input.substring(delimiterIndex+2);
      return { delimiter: this.escapeRegex(delimiter), nums }
    }

    return { delimiter: DEFAULT_DELIMITER, nums: input };
  }

  escapeRegex = (str) => str.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&');


}

export default App;
