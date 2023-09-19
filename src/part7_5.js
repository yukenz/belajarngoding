module.exports = {task1, task2, task3}

// Tugas 1
// Buatlah sebuah fungsi bernama shoutOut(), yang mengembalikan nilai berupa "Halo Function!",
// yang kemudian akan ditampilkan di console.

function task1() {

    function shoutOut() {
        return "Halo Function!"
    }

    return shoutOut
}


// Tugas 2
// Buatlah sebuah fungsi bernama calculateMultiply(), yang mengembalikan nilai berupa hasil kali dari
// dua parameter yang dikirim.

function task2() {

    function calculateMultiply(x, y) {
        return x * y
    }

    return calculateMultiply

}


// Tugas 3
// Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi
// satu kalimat berikut:
// "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

function task3() {

    function processSentence(name, age, address, hobby) {
        return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`
    }

    return processSentence

}
