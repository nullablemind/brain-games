// @flow
import game from '../index';
import { getRandomNumber } from '../utils';

const isOdd = (number: number) =>
  Math.abs(number % 2) === 1;

export default () =>
  game({
    descriptionGame: 'Answer "yes" if number odd otherwise answer "no".',
    getRandomQuestion: () => getRandomNumber(0, 100),
    getCorrectAnswer: question => (isOdd(question) ? 'yes' : 'no'),
  });
