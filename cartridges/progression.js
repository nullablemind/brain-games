import { getRandomNumber } from './lib';

const generateArithmeticSequence = (length) => {
  const firstMember = getRandomNumber(1, 100);
  const step = getRandomNumber(1, 10);

  const sequance = [];

  for (let n = 1; n < length; n += 1) {
    sequance.push(firstMember + (n * step));
  }

  return sequance;
};

export default {
  gameDescription: 'What number is missing in this progression?',
  generateProblem() {
    const lengthSequence = 10;
    const indexHideNumber = getRandomNumber(1, lengthSequence);
    const sequence = generateArithmeticSequence(lengthSequence);

    const copySequence = sequence.slice();
    copySequence[indexHideNumber] = '..';

    const description = copySequence.join(' ');
    const solution = sequence[indexHideNumber].toString();

    return { description, solution };
  },
};
