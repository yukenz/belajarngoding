module.exports = {task1, task2, task3, task4}

//1. Let's Form a Sentence
// Problem
// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
//  Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
//  untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
//   tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!
function task1() {
    let word = 'JavaScript';
    let second = 'is';
    let third = 'awesome';
    let fourth = 'and';
    let fifth = 'I';
    let sixth = 'love';
    let seventh = 'it!';


    return (word + " " + second + " " + third + " " + fourth + " " + fifth + " " + sixth + " " + seventh)
}

// 2. Index Accessing - 1 by 1
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!
function task2() {
    let word = 'wew My Name is so cool';
    let exampleFirstWord = word[0] + word[1] + word[2];

    return (exampleFirstWord);
}


// 3. Breaking Sentence (Again) using Substring
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!
function task3() {
    let word3 = 'wow JavaScript is so cool';
    let exampleFirstWord3 = word3.substring(0, word3.indexOf(" "));

    return (exampleFirstWord3);
}


function task4() {
// 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


    let word4 = 'wow JavaScript is so cool';
    let exampleFirstWord = word4.substring(0, word4.indexOf(" "));

    let firstWordLength = exampleFirstWord.length;

    return ({exampleFirstWord, firstWordLength});
}

