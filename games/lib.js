export const getRandomNumber = (min, max) =>
  Math.floor(min + (Math.random() * ((max + 1) - min)));

export const randomArithmeticSign = (generatorRandomNumber = getRandomNumber) => {
  switch (generatorRandomNumber(1, 4)) {
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

export const isOdd = number =>
  Math.abs(number % 2) === 1;
