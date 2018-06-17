export default (generator, quantity) => {
  const arrayOfQuiz = [];
  for (let i = 0; i < quantity; i++) {
    arrayOfQuiz.push(generator());
  }
  return arrayOfQuiz;
};
