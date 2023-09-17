module.exports = {task1, task2, task3, task4, task5}

// 1. Melakukan Looping Menggunakan While
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
async function task1() {

    let i = 0;

    console.log("Looping Pertama")
    console.log(i)
    while ((i++) < 5) {
        console.log(i)
    }


    console.log("Looping Kedua")
    while ((i--) > 0) {
        console.log(i)
    }


}

// 2. Melakukan Looping Menggunakan For
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
function task2() {

    console.log("Looping Pertama")
    for (let i = 0; i < 5; i++) {
        console.log(i)

    }

    console.log("Looping Kedua")
    for (let i = 4; i >= 0; i--) {
        console.log(i)

    }

}

// 3. Angka Ganjil dan Genap
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL


function task3() {
    for (let i = 1; i <= 100; i++) {
        console.log(`${i} = ` + (i % 2 !== 0 ? "Ganjil" : "Genap"))
    }
}


//4. counter kelipatan
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.
function task4() {

    for (let i = 1; i <= 100; i++) {
        i % 3 === 0 ? console.log(`${i} = kel 3`) : ""
    }
    for (let i = 1; i <= 100; i++) {
        i % 5 === 0 ? console.log(`${i} = kel 5`) : ""
    }
    for (let i = 1; i <= 100; i++) {
        i % 9 === 0 ? console.log(`${i} = kel 9`) : ""
    }


}

// 5. Bintang asteriks
// Problem buatlah bintang seperti berikut
// let input = 5
//hasilnya
//*
//**
//***
//****
//*****

function rowStar(n) {

    let strBuilder = ""
    for (let i = 0; i < n; i++) {
        strBuilder += "*"
    }

    return strBuilder
}


function task5(n) {

    for (let i = 1; i <= n; i++) {
        console.log(rowStar(i))
    }

}

