const core = require('./core');
const generateGame = require('./generateGame');

exports.createTestPlatform = (gameTemplate) => {
  const game = generateGame(gameTemplate);
  return core(game);
};

exports.createPlatform = io => (gameTemplate) => {
  const game = generateGame(gameTemplate);
  return core(game)(io);
};
