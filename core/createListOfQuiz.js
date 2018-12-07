const createFilledArray = (size, func) => Array.from(Array(size), () => func());

export const isRightAnswer = (quiz, answer) => quiz.solution === answer;

export const generateProblems = (generator, attempts) => createFilledArray(attempts, generator);
