import readlineSync from 'readline-sync';

const response = msg => process.stdout.write(msg);
const request = () => readlineSync.question();

export default { response, request };
