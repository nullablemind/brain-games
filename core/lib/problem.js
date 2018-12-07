const createFilledArray = (size, func) => Array.from(Array(size), () => func());

export const isRightAnswer = (solution, answer) => solution === answer;

export const generateProblems = ({ generatorProblem, attempts = 3 }) => createFilledArray(attempts, generatorProblem);
