import { ask, write } from './lib/gameUI';

// run game
const runGame = (game, rounds) => {
  if (rounds < 1) return true;
  const question = game();
  const answ = ask(`Question: ${question.question}\nYour answer: `);
  if (String(answ) !== String(question.trueAnsw)) {
    write(`'${answ}' is wrong answer ;(. Correct answer was '${question.trueAnsw}'`);
    return false;
  }
  write('Correct!');
  return runGame(game, rounds - 1);
};

// maim process
export default (game, rounds, condition) => {
  write('Welcome to the Brain Games!');
  write(condition);
  const userName = ask('May I have your name? ');
  write(`Hello, '${userName}!`);
  const gameResult = runGame(game, rounds);
  if (gameResult) write(`Congratulations, ${userName}!`);
  else write(`Let's try again, ${userName}!`);
};
