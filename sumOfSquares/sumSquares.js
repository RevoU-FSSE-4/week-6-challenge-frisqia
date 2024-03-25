// Tulis fungsi JavaScript bernama `sumOfSquares` yang mengambil dua variabel,
//`num1` dan `num2`, dan mengembalikan jumlah kuadratnya.
//Gunakan kata kunci `let` untuk deklarasi variabel.

// ## Persyaratan

// - Fungsi tersebut harus diberi nama `sumOfSquares`.
// - Ini harus mengambil dua parameter: `num1` dan `num2`, yang merupakan angka.
// - Fungsi ini harus mengembalikan jumlah kuadrat `num1` dan `num2`.

function sumOfSquares(num1, num2) {
  let amount;
  var squareOne = num1 * num2;
  var squareTwo = num1 * num2;
  amount = squareOne + squareTwo;
  return amount;
  // }
  // Your code here
}

console.log(sumOfSquares(1, 2)); // output: 4 (1^2 + 2^2 = 1 + 4 = 4)
console.log(sumOfSquares(3, 4)); // Output: 25 (3^2 + 4^2 = 9 + 16 = 25)
console.log(sumOfSquares(5, 2)); // Output: 29 (5^2 + 2^2 = 25 + 4 = 29)
module.exports = sumOfSquares;
