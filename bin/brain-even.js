#!/usr/bin/env node
// @flow

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');

console.log(`Hello ${userName}`);
