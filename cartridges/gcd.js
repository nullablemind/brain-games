import { getRandomNumber } from './lib';

const getGCD = (numberA, numberB) => (numberB === 0
  ? Math.abs(numberA)
  : getGCD(numberB, numberA % numberB));

export default {
  gameDescription: 'Find the greatest common divisor of given numbers.',
  generateProblem() {
    const numberA = getRandomNumber(1, 100);
    const numberB = getRandomNumber(1, 100);
    const gcd = getGCD(numberA, numberB);

    const description = `${numberA} ${numberB}`;
    const solution = gcd.toString();

    return { description, solution };
  },
};
