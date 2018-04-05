import { getRandomNumber, isOdd } from '../catridgeUtils';

export default {
  description: 'Answer "yes" if number odd otherwise answer "no".',
  generatorQuiz() {
    const number = getRandomNumber(1, 100);
    const question = number.toString();
    const solution = isOdd(number) ? 'yes' : 'no';

    return { question, solution };
  },
};
