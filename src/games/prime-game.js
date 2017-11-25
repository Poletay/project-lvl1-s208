import { rand } from '../lib/usfulFuncs';
import runGame from '..';

const condition = 'Answer "yes" if number prime otherwise answer "no".';
const questionText = 'Is this number prime?';

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

  curQuestion.question = `${questionText} ${question}`;
  curQuestion.trueAnsw = trueAnsw;
  return curQuestion;
};

export default () => runGame(primeGame, condition);
