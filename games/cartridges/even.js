import { getRandomNumber, isOdd } from '../lib';

export default {
  description: 'Answer "yes" if number odd otherwise answer "no".',
  generator() {
    const number = getRandomNumber(1, 100);
    const description = number.toString();
    const solution = isOdd(number) ? 'yes' : 'no';

    return { description, solution };
  },
};
