const makeProblem = require('./problem');

module.exports = ({ description, generator }, amount = 3) => {
  const problems = [];
  for (let i = 0; i < amount; i += 1) {
    problems.push(makeProblem(generator()));
  }

  return {
    description,
    problems,
  };
};
