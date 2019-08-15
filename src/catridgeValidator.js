const isNil = value => value === undefined || value === null;

module.exports = ({ description, generator }) => {
  if (isNil(description)) throw Error('description must be define');
  if (isNil(generator)) throw Error('description must be define');

  const problem = generator();
  if (isNil(problem)) throw Error('generator must return { description: \'problem description\', solution: \'solution\' }');
  if (isNil(problem.description)) throw Error('generator must return question with property description');
  if (isNil(problem.solution)) throw Error('generator must return question with property solution');

  return true;
};
