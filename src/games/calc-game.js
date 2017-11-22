import { rand, randOper } from '../lib/usfulFuncs';

export default class CalcGame {
  constructor() {
    this.condition = 'What is the result of the expression?';
    this.curQuestion = {
      question: '',
      trueAnsw: '',
    };
  }

  getNewQuestion() {
    const min = 1;
    const max = 10;
    const a = rand(min, max);
    const b = rand(min, max);
    const oper = randOper();

    this.curQuestion.question = `${a} ${oper} ${b}`;
    if (oper === '+') this.curQuestion.trueAnsw = a + b;
    else if (oper === '-') this.curQuestion.trueAnsw = a - b;
    else this.curQuestion.trueAnsw = a * b;

    return this.curQuestion;
  }
}
