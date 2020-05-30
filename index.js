const game = require('./src');
const io = require('./src/io');

module.exports = catridge => game(catridge, io);
