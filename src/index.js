const core = require('./core');
const generateGame = require('./generateGame');

module.exports = (gameTemplate) => {
  const game = generateGame(gameTemplate);
  return core(game);
};
