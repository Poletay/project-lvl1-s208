import { rand } from '../lib/usfulFuncs';
import runGame from '..';

const condition = 'Balance the given number.';
const questionText = 'Question:';

const getSum = num => String(num).split('').reduce((acc, item) => acc + Number(item), 0);

const getMid = (num) => {
  const numLength = String(num).length;
  const sumNum = getSum(num);
  return Math.floor(sumNum / numLength);
};

const makeFlatNum = (num, numLength, acc = '') => {
  if (numLength < 1) return Number(acc);
  return Number(makeFlatNum(num, numLength - 1, `${num}${acc}`));
};

const makeBalance = (mid, difference, numLength, acc = '') => {
  if (numLength < 1) return Number(acc);
  if (difference === 0) return makeBalance(mid, difference, numLength - 1, `${acc}${mid + 1}`);
  return makeBalance(mid, difference - 1, numLength - 1, `${acc}${mid}`);
};

const getBalance = (num) => {
  const numLength = String(num).length;
  const mid = getMid(num);
  const flat = makeFlatNum(mid, numLength);
  const difference = numLength - (getSum(Number(num)) - getSum(Number(flat)));
  return makeBalance(mid, difference, numLength);
};

const balanceGame = () => {
  const min = 1;
  const max = 10000;
  const a = rand(min, max);
  const curQuestion = {
    question: a,
    trueAnsw: '',
  };

  curQuestion.question = `${questionText} ${a}`;
  curQuestion.trueAnsw = getBalance(a);

  return curQuestion;
};

export default () => runGame(balanceGame, condition);
