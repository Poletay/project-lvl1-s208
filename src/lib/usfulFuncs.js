export const rand = (min = 1, max = 100) => Math.floor((Math.random() * (max - min)) + min);
export const isEval = num => num % 2 === 0;
export const randOper = () => {
  if (rand(1, 3) === 1) return '+';
  if (rand(1, 3) === 2) return '-';
  return '*';
};
