export const rand = (min = 1, max = 100) => Math.floor((Math.random() * (max - min)) + min);
export const isEval = num => num % 2 === 0;
// greatest common divisor:
export const gcd = (a, b) => {
  if (b > 0) return gcd(b, a % b);
  return Math.abs(a);
};
export const randOper = () => {
  if (rand(1, 3) === 1) return '+';
  if (rand(1, 3) === 2) return '-';
  return '*';
};
