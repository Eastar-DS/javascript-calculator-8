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
      const numbersString = input.substring(delimiterIndex+2);
      return { delimiter: this.escapeRegex(delimiter), numbersString }
    }

    return { delimiter: DEFAULT_DELIMITER, numbersString: input };
  }

  escapeRegex = (str) => str.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&');

  extractNumbers(numbersString, delimiter) {
    const regex = new RegExp(delimiter);
    return numbersString
      .split(regex)
      .filter((string) => string.trim() !== "")
      .map((string) => parseInt(string.trim(), 10))
      .filter((num) => !isNaN(num));
  }
}

export default App;
