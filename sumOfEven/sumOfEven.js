// Tulis fungsi JavaScript bernama `sumOfEven` yang menggunakan array angka
//sebagai argumen dan mengembalikan jumlah semua angka genap dalam array.

// ## Persyaratan

// - Fungsi tersebut harus diberi nama `sumOfEven`.
// - Ini harus mengambil satu parameter: `angka`, yang merupakan array angka.
// - Fungsi ini harus mengembalikan jumlah semua bilangan genap dalam larik masukan.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // variabel banyak angka
function sumOfEvens(numbers) {
  let sum = 0;
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 === 0) {
      sum += numbers[index];
    }
    // else if (numbers[index] % 1 === 0) {
    //   sum += numbers[index];
    // }
  }
  return sum;
}

console.log(sumOfEvens(array));
module.exports = sumOfEvens;
