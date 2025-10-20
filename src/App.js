import { Console } from "@woowacourse/mission-utils";

const DEFAULT_DELIMITER = '[,:]';
const CUSTOM_DELIMITER_PREFIX = '//';

class App {
  async run() {
    const inputString = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

    try {
      const result = this.calculate(inputString)
      Console.print(`결과 : ${result}`);
    } catch(error) {
      throw error;
    }
  }

  calculate(inputString) {
    if (inputString === '') {
      return 0;
    }

    const {delimiter, numbersString} = this.parseInput(inputString);
    const numbersArray = this.extractNumbers(numbersString, delimiter);
    return numbersArray.reduce((acc, num) => acc + num, 0);
  }

  parseInput(inputString) {
    if (inputString.startsWith(CUSTOM_DELIMITER_PREFIX)) {
      const delimiterIndex = inputString.indexOf('\\\\n');
      const delimiter = inputString.substring(2,delimiterIndex);
      const numbersString = inputString.substring(delimiterIndex+2);
      return { delimiter: this.escapeRegex(delimiter), numbersString }
    }

    return { delimiter: DEFAULT_DELIMITER, numbersString: inputString };
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
