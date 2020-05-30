const readlineSync = require('readline-sync');

exports.speak = msg => process.stdout.write(msg);
exports.ask = question => readlineSync.question(question);
