import readlineSync from 'readline-sync';
import evenGame from './even-game';

export default (gameName) => {
  // common actions for all games:
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, '${userName}!`);
  // Game: brain-even:
  if (gameName === 'brain-even') {
    const rounds = 3;
    console.log('Answer "yes" if number even otherwise answer "no".');
    const gameResult = evenGame(rounds);
    if (gameResult) console.log(`Congratulations, ${userName}!`);
    else console.log(`Let's try again, ${userName}!`);
  }
};
