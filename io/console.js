import readlineSync from 'readline-sync';

const speak = msg => process.stdout.write(msg);
const ask = question => readlineSync.question(question);

export default { speak, ask };
