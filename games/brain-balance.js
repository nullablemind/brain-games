// @flow
import game from '..';
import { getRandomNumber } from '../utils';

const replaceChar = (string: string, index: number, newChar: number | string) => {
  let newString = '';
  for (let i = 0; i < string.length; i += 1) {
    if (i === index) {
      newString += newChar;
    } else {
      newString += string[i];
    }
  }
  return newString;
};

const getIndexMaxNumber = (numbers: string) => {
  let index = 0;
  let max = numbers[index];

  for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i] > max) {
      max = numbers[i];
      index = i;
    }
  }

  return index;
};

const getIndexMinNumber = (numbers: string) => {
  let index = 0;
  let min = numbers[index];

  for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i] < min) {
      min = numbers[i];
      index = i;
    }
  }

  return index;
};

const balanceNumber = (numbers: string) => {
  const indexMaxNum = getIndexMaxNumber(numbers);
  const indexMinNum = getIndexMinNumber(numbers);
  const max = Number(numbers[indexMaxNum]);
  const min = Number(numbers[indexMinNum]);

  if (max - min <= 1) {
    return numbers;
  }

  let newNumbers = replaceChar(numbers, indexMaxNum, max - 1);
  newNumbers = replaceChar(newNumbers, indexMinNum, min + 1);
  return balanceNumber(newNumbers);
};

const quickSort = (numbers: string) => {
  if (numbers.length < 2) {
    return numbers;
  }

  const pivot = numbers[0];
  let lesser = '';
  let greater = '';

  for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i] < pivot) {
      lesser += numbers[i];
    } else {
      greater += numbers[i];
    }
  }

  return quickSort(lesser) + pivot + quickSort(greater);
};

export default () =>
  game({
    descriptionGame: 'Balance the given number.',
    getRandomQuestion: () => getRandomNumber(100, 10000),
    getCorrectAnswer: question => quickSort(balanceNumber(String(question))),
  });
