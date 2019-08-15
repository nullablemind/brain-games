const core = require('./core');
const generateGame = require('./generateGame');

module.exports = io => (gameTemplate) => {
  const game = generateGame(gameTemplate);
  core(io)(game);
};
