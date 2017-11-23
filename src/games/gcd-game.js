import { rand, gcd } from '../lib/usfulFuncs';

export const condition = 'Find the greatest common divisor of given numbers';

export default () => {
  const min = 1;
  const max = 100;
  const a = rand(min, max);
  const b = rand(min, max);
  const curQuestion = {
    question: '',
    trueAnsw: '',
  };

  curQuestion.question = `${a} ${b}`;
  curQuestion.trueAnsw = gcd(a, b);

  return curQuestion;
};
