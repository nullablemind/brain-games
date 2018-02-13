// @flow
import game from '..';
import { getRandomNumber, isOdd } from '../utils';

export default () =>
  game({
    description: 'Answer "yes" if number odd otherwise answer "no".',
    generatorQuestion: () => {
      const number = getRandomNumber(1, 100);
      const stringQuestion = number.toString();
      const answer = isOdd(number) ? 'yes' : 'no';

      return { string: stringQuestion, answer };
    },
  });
