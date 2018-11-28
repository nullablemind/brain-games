import readlineSync from 'readline-sync';

const response = msg => console.log(msg);
const request = msg => readlineSync.question(msg);

export default { response, request };
