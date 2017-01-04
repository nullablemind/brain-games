// @flow
import game from '../index';

const getRandom = (min: number, max: number) =>
  Math.floor(min + (Math.random() * ((max + 1) - min)));

const isOdd = (number: number) =>
  Math.abs(number % 2) === 1;

export default () =>
  game({
    descriptionGame: 'Answer "yes" if number odd otherwise answer "no".',
    getRandomQuestion: () => getRandom(0, 100),
    getCorrectAnswer: question => (isOdd(question) ? 'yes' : 'no'),
  });
