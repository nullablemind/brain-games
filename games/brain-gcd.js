// @flow
import game from '../index';
import { getRandomNumber } from '../utils';

const getGCD = (number1: number, number2: number) =>
  (number2 === 0
    ? Math.abs(number1)
    : getGCD(number2, number1 % number2));

export default () =>
  game({
    descriptionGame: 'Find the greatest common divisor of given numbers.',
    getRandomQuestion: () => {
      const number1 = getRandomNumber(1, 100);
      const number2 = getRandomNumber(1, 100);
      const gcd = getGCD(number1, number2);

      return { gcd, number1, number2 };
    },
    toStringQuestion: ({ number1, number2 }) => `${number1} ${number2}`,
    getCorrectAnswer: ({ gcd }) => String(gcd),
  });
