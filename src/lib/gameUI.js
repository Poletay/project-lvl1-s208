import readlineSync from 'readline-sync';

export const write = text => console.log(text);
export const ask = text => readlineSync.question(`${text} `);
