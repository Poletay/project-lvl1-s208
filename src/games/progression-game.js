import { rand } from '../lib/usfulFuncs';
import runGame from '..';

const condition = 'What number is missing in this progression?';
const rounds = 3;

const makeProgressionEl = (firstEl, step, elementNumber) => firstEl + ((elementNumber - 1) * step);

const makeQuestion = (firstEl, step, missStep, counter = 1, question = '') => {
  if (counter > 10) return question;
  const newEl = counter === missStep ? '..' : makeProgressionEl(firstEl, step, counter);
  const newQuestion = `${question} ${newEl}`;
  return makeQuestion(firstEl, step, missStep, counter + 1, newQuestion);
};


const progressionGame = () => {
  const randomMin = 1;
  const numberOfElements = 10;
  const firstEl = rand(randomMin, numberOfElements);
  const step = rand(randomMin, numberOfElements);
  const missStep = rand(randomMin, numberOfElements);

  const question = makeQuestion(firstEl, step, missStep);
  const trueAnsw = makeProgressionEl(firstEl, step, missStep);

  const curQuestion = {
    question: '',
    trueAnsw: '',
  };

  curQuestion.question = question;
  curQuestion.trueAnsw = trueAnsw;
  return curQuestion;
};

export default () => runGame(progressionGame, rounds, condition);
