#!/usr/bin/env node
// @flow

import readlineSync from 'readline-sync';

const getRandomNumber = (min: number, max: number) =>
  Math.floor(min + (Math.random() * ((max + 1) - min)));

const getRandomArithmeticSign = (generatorRandomNumber: Function) => {
  switch (generatorRandomNumber(1, 4)) { // eslint-disable-line
    case 1:
      return '+';
    case 2:
      return '-';
    case 3:
      return '*';
    case 4:
      return '/';
    default:
      throw Error('function generatorRandomNumber should return number from 1 to 4');
  }
};

const calc = (arithmeticSign: string, number1: number, number2: number) => {
  switch (arithmeticSign) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    case '/':
      return number1 / number2;
    default:
      throw Error(`don't know operations ${arithmeticSign}`);
  }
};

console.log('Welcome to the Brain Games!');
console.log('What is the result of the expression?\n');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!\n`);

let passedGame = false;
for (let i = 0; i < 3; i += 1) {
  const arithmeticSign = getRandomArithmeticSign(getRandomNumber);
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const correctAnswer = calc(arithmeticSign, number1, number2);

  const question = `${number1} ${arithmeticSign} ${number2}`;
  console.log(`Question: ${question} `);
  const userAnswer = readlineSync.question('Your answer: ');

  if (String(correctAnswer) === userAnswer) {
    console.log('Correct!');
    passedGame = true;
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    passedGame = false;
    break;
  }
}

if (passedGame) {
  console.log(`Congratulations, ${userName}`);
} else {
  console.log(`Let's try again, ${userName}!`);
}

