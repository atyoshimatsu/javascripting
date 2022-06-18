const numbers = new Array(10).fill(0).map((x, index) => index + 1);
const evenNumbers = numbers.filter(x => x % 2 === 0);
console.log(evenNumbers);