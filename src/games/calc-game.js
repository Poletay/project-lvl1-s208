import { rand, randOper } from '../lib/usfulFuncs';

export const condition = 'What is the result of the expression?';

export default () => {
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
  else curQuestion.trueAnsw = a * b;

  return curQuestion;
};
