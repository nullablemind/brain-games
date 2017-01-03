// @flow

import {
  greetingGame, displayDescriptionGame, getUserName, greetingUser, playing, gameEnd,
} from '../index';

const getRandom = (min: number, max: number) =>
  Math.floor(min + (Math.random() * ((max + 1) - min)));

const isOdd = (number: number) =>
  Math.abs(number % 2) === 1;

greetingGame();
displayDescriptionGame('Answer "yes" if number odd otherwise answer "no".');

const userName = getUserName();
greetingUser(userName);

const resultGame = playing({
  getRandomQuestion: () => getRandom(0, 100),
  getCorrectAnswer: question => (isOdd(question) ? 'yes' : 'no'),
});

gameEnd(resultGame, userName);
