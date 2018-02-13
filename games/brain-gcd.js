// @flow
import game from '..';
import { getRandomNumber } from '../utils';

const getGCD = (number1: number, number2: number) =>
  (number2 === 0
    ? Math.abs(number1)
    : getGCD(number2, number1 % number2));

export default () =>
  game({
    description: 'Find the greatest common divisor of given numbers.',
    generatorQuestion: () => {
      const number1 = getRandomNumber(1, 100);
      const number2 = getRandomNumber(1, 100);
      const gcd = getGCD(number1, number2);

      const string = `${number1} ${number2}`;
      const answer = gcd;

      return { string, answer };
    },
  });
