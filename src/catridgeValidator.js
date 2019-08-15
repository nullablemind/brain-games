const isNil = value => value === undefined || value === null;

module.exports = ({ desc, generator }) => {
  if (isNil(desc)) throw Error('desc must be define');
  if (isNil(generator)) throw Error('desc must be define');
  if (isNil(generator())) throw Error('generator must return { problem: \'problem description\', solution: \'solution\' }');
  const question = generator();

  if (isNil(question.problem)) throw Error('generator must return question with property problem');
  if (isNil(question.solution)) throw Error('generator must return question with property solution');

  return true;
};
