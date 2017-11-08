const stringOne = `Hello`;
const stringTwo = `World`;

const stringResult = `${stringOne} ${stringTwo}`;

const multiply = ((x, y=1) =>  x * y);

const average = (...args) => args.reduce((tot, ele) => tot + ele) / args.length;

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));

const array = [1, 4, 'Iwona', false, 'Nowak'];

const [ , , firstName, , lastName] = array;