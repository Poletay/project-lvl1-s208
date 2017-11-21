import readlineSync from 'readline-sync';

// generate random number for question
const rand = () => {
  const min = 1;
  const max = 100;
  return Math.floor((Math.random() * (max - min)) + min);
};

// check number for eval:
const isEval = num => num % 2 === 0;

// get user's answer:
const getAnsw = quest => readlineSync.question(`Question: ${quest}\nYour answer: `);

// main logic of game:
const evenGame = (rounds) => {
  if (rounds < 1) return true;
  const question = rand();
  const answ = getAnsw(question);
  const trueAnsw = isEval(question) ? 'yes' : 'no';
  if (trueAnsw === answ) {
    console.log('Correct!');
    return evenGame(rounds - 1);
  }
  console.log(`'${answ}' is wrong answer ;(. Correct answer was '${trueAnsw}'`);
  return false;
};

export default evenGame;
