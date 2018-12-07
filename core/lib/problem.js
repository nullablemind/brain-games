const createFilledArray = (size, func) => Array.from(Array(size), () => func());

export const isEquals = (value1, value2) => value1 === value2;

export const generateProblems = ({ generatorProblem, attempts = 3 }) => createFilledArray(attempts, generatorProblem);
