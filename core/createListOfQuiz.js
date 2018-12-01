const getValue = func => func();
const createFilledArray = (size, func) => Array.from(Array(size), () => func());

const createQuiz = ({ question, solution, answer = null }) => ({ question, solution, answer, isCorrect: answer !== solution });

export const setAnswer = (quiz, answer) => createQuiz({ ...quiz, answer });

export const createListOfQuiz = (generatorQuiz, attempts) => createFilledArray(attempts, () => createQuiz(getValue(generatorQuiz)));
