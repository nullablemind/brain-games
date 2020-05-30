import { getRandomNumber } from './lib';

const getGCD = (number1, number2) => (number2 === 0
  ? Math.abs(number1)
  : getGCD(number2, number1 % number2));

export default {
  gameDescription: 'Find the greatest common divisor of given numbers.',
  generateProblem() {
    const number1 = getRandomNumber(1, 100);
    const number2 = getRandomNumber(1, 100);
    const gcd = getGCD(number1, number2);

    const description = `${number1} ${number2}`;
    const solution = gcd.toString();

    return { description, solution };
  },
};
