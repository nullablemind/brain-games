module.exports = ({ desc, generator }, amount = 3) => {
  const questions = [];
  for (let i = 0; i < amount; i += 1) {
    questions.push(generator());
  }

  return {
    desc,
    questions,
  };
};
