#!/usr/bin/env node
// @flow

import readlineSync from 'readline-sync';

const getRandom = (min: number, max: number) =>
  Math.floor(min + (Math.random() * ((max + 1) - min)));

const isOdd = (number: number) =>
  Math.abs(number % 2) === 1;

const displayYesOrNo = (answer: boolean) =>
  (answer ? 'yes' : 'no');

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number odd otherwise answer "no".\n');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!\n`);

let passedGame = false;
for (let i = 0; i < 3; i += 1) {
  const randomNumber = getRandom(0, 100);
  console.log(`Question: ${randomNumber} `);
  const userAnswer = readlineSync.question('Your answer: ', {
    trueValue: ['yes'],
    falseValue: ['no'],
  });

  if (isOdd(randomNumber) === userAnswer) {
    console.log('Correct!');
    passedGame = true;
  } else {
    console.log(`"${displayYesOrNo(userAnswer)}" is wrong answer ;(. Correct answer was "${displayYesOrNo(!userAnswer)}".`);
    passedGame = false;
    break;
  }
}

if (passedGame) {
  console.log(`Congratulations, ${userName}`);
} else {
  console.log(`Let's try again, ${userName}!`);
}

