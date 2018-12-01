import mainLogic from './mainLogic';
import createListOfQuiz from './createListOfQuiz';

export default ({ write, read, attempts = 3 }) => (gameCatridge) => {
  const description = gameCatridge.description;
  const listOfQuiz = createListOfQuiz(gameCatridge.generatorQuiz, attempts);

  return mainLogic({ write, read, description, listOfQuiz });
};
