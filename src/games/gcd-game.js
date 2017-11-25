import { rand, gcd } from '../lib/usfulFuncs';
import runGame from '..';

const condition = 'Find the greatest common divisor of given numbers';
const questionText = 'Question:';

const gcdGame = () => {
  const min = 1;
  const max = 100;
  const a = rand(min, max);
  const b = rand(min, max);
  const curQuestion = {
    question: '',
    trueAnsw: '',
  };

  curQuestion.question = `${questionText} ${a} ${b}`;
  curQuestion.trueAnsw = gcd(a, b);

  return curQuestion;
};

export default () => runGame(gcdGame, condition);
