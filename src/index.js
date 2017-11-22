import EvenGame from './games/even-game';
import CalcGame from './games/calc-game';
import { ask, write } from './lib/gameUI';

// get game logic
const getGame = (gameName) => {
  if (gameName === 'brain-even') return new EvenGame();
  if (gameName === 'brain-calc') return new CalcGame();
  return null;
};

// run game
const runGame = (game, rounds) => {
  if (rounds < 1) return true;
  const question = game.getNewQuestion();
  const answ = ask(`Question: ${question.question}\nYour answer: `);
  if (String(answ) !== String(question.trueAnsw)) {
    write(`'${answ}' is wrong answer ;(. Correct answer was '${question.trueAnsw}'`);
    return false;
  }
  write('Correct!');
  return runGame(game, rounds - 1);
};

// maim process
export default (gameName) => {
  write('Welcome to the Brain Games!');
  const rounds = 3;
  const game = getGame(gameName);
  const userName = ask('May I have your name? ');
  write(`Hello, '${userName}!`);
  if (game !== null) {
    write(game.condition);
    const gameResult = runGame(game, rounds);
    if (gameResult) write(`Congratulations, ${userName}!`);
    else write(`Let's try again, ${userName}!`);
  }
};
