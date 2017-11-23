import { rand, isEval } from '../lib/usfulFuncs';

export const condition = 'Answer "yes" if number even otherwise answer "no".';

export default () => {
  const a = rand();
  const curQuestion = {
    question: '',
    trueAnsw: '',
  };
  curQuestion.question = a;
  curQuestion.trueAnsw = isEval(a) ? 'yes' : 'no';
  return curQuestion;
};
