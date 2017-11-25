import { rand } from '../lib/usfulFuncs';
import runGame from '..';

const condition = 'Answer "yes" if number even otherwise answer "no".';
const rounds = 3;

const isPrime = (num, divider = 2) => {
  if (divider === num) return true;
  if (num % divider === 0) return false;
  return isPrime(num, divider + 1);
};

const primeGame = () => {
  const minNum = 2;
  const maxNum = 20;
  const question = rand(minNum, maxNum);
  const trueAnsw = isPrime(question) ? 'yes' : 'no';
  const curQuestion = {
    question: '',
    trueAnsw: '',
  };

  curQuestion.question = question;
  curQuestion.trueAnsw = trueAnsw;
  return curQuestion;
};

export default () => runGame(primeGame, rounds, condition);
