import mainLogic from './mainLogic';
import createListOfQuiz from './createListOfQuiz';

export default ({ response, request, attempts = 3 }) => (gameCatridge) => {
  const description = gameCatridge.description;
  const listOfQuiz = createListOfQuiz(gameCatridge.generatorQuiz, attempts);

  return mainLogic({ response, request, description, listOfQuiz });
};
