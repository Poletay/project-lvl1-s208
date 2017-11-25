import { rand, isEval } from '../lib/usfulFuncs';
import runGame from '..';

const condition = 'Answer "yes" if number even otherwise answer "no".';
const questionText = 'Question:';
const rounds = 3;

const evenGame = () => {
  const a = rand();
  const curQuestion = {
    question: '',
    trueAnsw: '',
  };
  curQuestion.question = `${questionText} ${a}`;
  curQuestion.trueAnsw = isEval(a) ? 'yes' : 'no';
  return curQuestion;
};

export default () => runGame(evenGame, rounds, condition);
