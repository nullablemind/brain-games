// @flow
import game from '..';
import { getRandomNumber, randomArithmeticSign } from '../utils';

const calc = (arithmeticSign: string, number1: number, number2: number) => {
  switch (arithmeticSign) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    case '/':
      return number1 / number2;
    default:
      throw Error(`don't know operations ${arithmeticSign}`);
  }
};

export default () =>
  game({
    description: 'What is the result of the expression?',
    generatorQuestion: () => {
      const arithmeticSign = randomArithmeticSign();
      const number1 = getRandomNumber(1, 100);
      const number2 = getRandomNumber(1, 100);

      const stringQuestion = `${number1} ${arithmeticSign} ${number2}`;
      const answer = calc(arithmeticSign, number1, number2);

      return { string: stringQuestion, answer };
    },
  });
