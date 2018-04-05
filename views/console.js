import readlineSync from 'readline-sync';
import util from 'util';

import locals from '../locals';

const format = util.format;
const translate = (key, ...args) => format(locals[key], ...args);

const response = (...args) => console.log(translate(...args));
const request = (...args) => readlineSync.question(translate(...args));

export default { response, request };
