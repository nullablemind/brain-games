import readlineSync from 'readline-sync';

const write = msg => process.stdout.write(msg);
const read = () => readlineSync.question();

export default { write, read };
