import { getRandomNumber, isOdd } from './lib';

export default {
  gameDescription: 'Answer "yes" if number odd otherwise answer "no".',
  generateProblem() {
    const number = getRandomNumber(1, 100);
    const description = number.toString();
    const solution = isOdd(number) ? 'yes' : 'no';

    return { description, solution };
  },
};
