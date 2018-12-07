import { getRandomNumber, randomArithmeticSign } from '../cartridgeUtils';

const calc = (arithmeticSign, number1, number2) => {
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

export default {
  description: 'What is the result of the expression?',
  generatorProblem() {
    const arithmeticSign = randomArithmeticSign();
    const number1 = getRandomNumber(1, 100);
    const number2 = getRandomNumber(1, 100);

    const question = `${number1} ${arithmeticSign} ${number2}`;
    const solution = calc(arithmeticSign, number1, number2);

    return { question, solution };
  },
};
