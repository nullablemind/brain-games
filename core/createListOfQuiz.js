export default (generator, quantaty) => {
  const arrayOfQuiz = [];
  for (let i = 0; i < quantaty; i++) {
    arrayOfQuiz.push(generator());
  }
  return arrayOfQuiz;
};
