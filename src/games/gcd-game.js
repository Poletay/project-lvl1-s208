import { rand, gcd } from '../lib/usfulFuncs';

export default class GcdGame {
  constructor() {
    this.condition = 'Find the greatest common divisor of given numbers';
    this.curQuestion = {
      question: '',
      trueAnsw: '',
    };
  }

  getNewQuestion() {
    const min = 1;
    const max = 100;
    const a = rand(min, max);
    const b = rand(min, max);

    this.curQuestion.question = `${a} ${b}`;
    this.curQuestion.trueAnsw = gcd(a, b);

    return this.curQuestion;
  }
}
