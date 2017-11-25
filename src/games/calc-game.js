import { rand, randOper } from '../lib/usfulFuncs';
import runGame from '..';

const condition = 'What is the result of the expression?';
const questionText = 'Question:';

const calcGame = () => {
  const min = 1;
  const max = 10;
  const a = rand(min, max);
  const b = rand(min, max);
  const oper = randOper();
  const curQuestion = {
    question: '',
    trueAnsw: '',
  };

  curQuestion.question = `${a} ${oper} ${b}`;
  if (oper === '+') curQuestion.trueAnsw = a + b;
  else if (oper === '-') curQuestion.trueAnsw = a - b;
  else curQuestion.trueAnsw = `${questionText} ${a * b}`;

  return curQuestion;
};

export default () => runGame(calcGame, condition);
