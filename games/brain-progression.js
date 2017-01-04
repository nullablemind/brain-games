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
    descriptionGame: 'What number is missing in this progression?',
    getRandomQuestion: () => {
      const lengthSequence = 10;
      const indexHideNumber = getRandomNumber(1, lengthSequence);
      const sequence = generateArithmeticSequence(lengthSequence);

      return { sequence, indexHideNumber };
    },
    toStringQuestion: ({ sequence, indexHideNumber }) => {
      const copySequence = sequence.slice();
      copySequence[indexHideNumber] = '..';
      return copySequence.join(' ');
    },
    getCorrectAnswer: ({ sequence, indexHideNumber }) => sequence[indexHideNumber],
  });
