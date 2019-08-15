exports.speak = text => `speak: ${text}`;
exports.ask = text => `ask:   ${text}`;

const initReturnArgOneByOne = (args) => {
  let count = 0;
  return () => {
    if (count > args.length) return undefined;

    const arg = args[count];
    count++;
    return arg;
  };
};

exports.catcherIO = (app, { speak, ask }) => (game, answers) => {
  const dialog = [];

  const decoratedSpeak = (text) => {
    dialog.push(speak(text));
  };

  const returnArgOneByOne = initReturnArgOneByOne(answers);
  const decoratedAsk = (question) => {
    dialog.push(ask(question));
    return returnArgOneByOne();
  };

  app(game)({ speak: decoratedSpeak, ask: decoratedAsk });

  return dialog;
};
