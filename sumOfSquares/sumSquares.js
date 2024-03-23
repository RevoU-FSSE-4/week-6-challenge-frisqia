function sumOfSquares(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  // Your code here
  return num2;
}

module.exports = sumOfSquares;

console.log(sumOfSquares(1, 2));
console.log(sumOfSquares(6, -4));
console.log(sumOfSquares(3, 4, 2));
