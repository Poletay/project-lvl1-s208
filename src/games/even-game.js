import { rand, isEval } from '../lib/usfulFuncs';

export default class EvenGame {
  constructor() {
    this.condition = 'Answer "yes" if number even otherwise answer "no".';
    this.curQuestion = {
      question: '',
      trueAnsw: '',
    };
  }

  getNewQuestion() {
    const a = rand();
    this.curQuestion.question = a;
    this.curQuestion.trueAnsw = isEval(a) ? 'yes' : 'no';
    return this.curQuestion;
  }
}
