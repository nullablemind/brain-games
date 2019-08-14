const isNil = value => value === undefined || value === null;

module.exports = ({ desc, generator }) => {
  if (isNil(desc)) throw Error('desc must be define');
  if (isNil(generator)) throw Error('desc must be define');
  if (isNil(generator())) throw Error('generator must return { desc: \'question desc\', solution: \'solution\' }');
  const question = generator();

  if (isNil(question.desc)) throw Error('generator must return question with property desc');
  if (isNil(question.solution)) throw Error('generator must return question with property solution');

  return true;
};
