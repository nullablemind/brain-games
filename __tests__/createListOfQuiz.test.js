import createListOfQuiz from '../core/createListOfQuiz';

test('test create list of quiz', () => {
  const listOfQuiz = [
    { question: 'question 1', solution: 'solution 1' },
    { question: 'question 2', solution: 'solution 2' },
    { question: 'question 3', solution: 'solution 3' },
  ];

  const quiz = jest.fn();
  quiz
    .mockReturnValueOnce(listOfQuiz[0])
    .mockReturnValueOnce(listOfQuiz[1])
    .mockReturnValueOnce(listOfQuiz[2])
    .mockName('quiz');

  expect(createListOfQuiz(quiz, listOfQuiz.length)).toEqual(listOfQuiz);
});
