const createFilledArray = (size, func) => Array.from(Array(size), () => func());

export const isRightAnswer = (problem, answer) => problem.solution === answer;

export const generateProblems = ({ generatorQuiz, attempts = 3 }) => createFilledArray(attempts, generatorQuiz);
