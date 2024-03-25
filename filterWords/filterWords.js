// Tulis fungsi JavaScript bernama `filterWords` yang mengambil array kata
// dan mengembalikan array baru yang hanya berisi kata-kata yang memiliki lebih dari 3 karakter.

// ## Persyaratan

// - Fungsi tersebut harus diberi nama `filterWords`.
// - Ini harus mengambil satu parameter: `kata`, yang merupakan array string.
// - Fungsi harus mengembalikan larik baru
// yang hanya berisi kata-kata dari larik masukan `kata` yang memiliki lebih dari 3 karakter.
// - Jika sebuah kata memiliki tepat 3 karakter,
// kata tersebut tidak boleh dimasukkan dalam larik keluaran.

let names = ["erlanfmaraezo", "cia", "frifani", "ezo"];
function filterWords(word) {
  // Your code here
  let result = [];
  for (let index = 0; index < word.length; index++) {
    let nama = word[index];
    // console.log(nama);
    if (nama.length > 3) {
      result.push(nama);
    }
  }
  return result;
}

console.log(filterWords(names));
module.exports = filterWords;
