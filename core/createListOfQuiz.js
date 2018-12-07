const createFilledArray = (size, func) => Array.from(Array(size), () => func());

export const isRightAnswer = (quiz, answer) => quiz.solution === answer;

export const createListOfQuiz = (generatorQuiz, attempts) => createFilledArray(attempts, generatorQuiz);
