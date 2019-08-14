const speak = text => `speak: ${text}`;
const ask = text => `ask:   ${text}`;
exports.speak = speak;
exports.ask = ask;

exports.catcherIO = (game, answers, useCase) => {
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

  useCase({
    speak: decoratedSpeak,
    ask: decoratedAsk,
    game,
  });

  return dialog;
};
