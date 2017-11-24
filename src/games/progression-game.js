import { rand } from '../lib/usfulFuncs';
import runGame from '..';

const condition = 'What number is missing in this progression?';
const rounds = 3;

const getLine = (start, step, counter = 10, line = []) => {
  if (counter < 1) return line;

  const currentNumber = start + step;
  const newLine = line;
  newLine.push(currentNumber);

  return getLine(currentNumber, step, counter - 1, line);
};

const progressionGame = () => {
  const start = rand(1, 10);
  const step = rand(1, 10);
  const missStep = rand(1, 10) - 1;
  const line = getLine(start, step);
  const questionLine = line.slice();
  const curQuestion = {
    question: '',
    trueAnsw: '',
  };

  questionLine[missStep] = '..';
  curQuestion.question = questionLine.join(' ');
  curQuestion.trueAnsw = line[missStep];
  return curQuestion;
};

export default () => runGame(progressionGame, rounds, condition);
