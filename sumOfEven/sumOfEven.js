function sumOfEvens(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
}
return sum;

const numbers = [1, 2, 3, 4, 5];
const total = sumOfEvens(numbers);
console.log(total);

module.exports = sumOfEvens;
