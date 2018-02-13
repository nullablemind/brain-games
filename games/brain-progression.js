// @flow
import game from '..';
import { getRandomNumber } from '../utils';

const generateArithmeticSequence = (length: number) => {
  const firstMember = getRandomNumber(1, 100);
  const step = getRandomNumber(1, 10);

  const sequance = [];

  for (let n = 1; n < length; n += 1) {
    sequance.push(firstMember + (n * step));
  }

  return sequance;
};

export default () =>
  game({
    description: 'What number is missing in this progression?',
    generatorQuestion: () => {
      const lengthSequence = 10;
      const indexHideNumber = getRandomNumber(1, lengthSequence);
      const sequence = generateArithmeticSequence(lengthSequence);

      const copySequence = sequence.slice();
      copySequence[indexHideNumber] = '..';

      const string = copySequence.join(' ');
      const answer = sequence[indexHideNumber];

      return { string, answer };
    },
  });
