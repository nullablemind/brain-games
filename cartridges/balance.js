import { getRandomNumber } from './lib';

const replaceChar = (string, index, newChar) => {
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

const balanceNumber = (numbers) => {
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  const indexMaxNum = numbers.indexOf(max);
  const indexMinNum = numbers.indexOf(min);

  if (max - min <= 1) {
    return numbers;
  }

  let newNumbers = replaceChar(numbers, indexMaxNum, max - 1);
  newNumbers = replaceChar(newNumbers, indexMinNum, min + 1);
  return balanceNumber(newNumbers);
};

const quickSort = (numbers) => {
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

export default {
  gameDescription: 'Balance the given number.',
  generateProblem() {
    const number = getRandomNumber(100, 10000);
    const description = number.toString();
    const solution = quickSort(balanceNumber(description));

    return { description, solution };
  },
};
