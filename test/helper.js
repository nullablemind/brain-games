exports.speak = text => `speak: ${text}`;
exports.ask = text => `ask:   ${text}`;

exports.catcherIO = (core, { speak, ask }) => (game, answers) => {
  const dialog = [];

  const decoratedSpeak = text => {
    dialog.push(speak(text));
  };

  let count = 0;
  const decoratedAsk = question => {
    const answer = answers[count];
    count++;
    dialog.push(ask(question));
    return answer;
  };

  core({ speak: decoratedSpeak, ask: decoratedAsk })(game);

  return dialog;
};
