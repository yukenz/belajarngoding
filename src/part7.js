module.exports = {task1, task2, task3, task4}

// Diberikan sebuah function bandingkanAngka(angka1, angka2) yang menerima dua parameter angka.
// Function akan me-return nilai true jika angka2 lebih besar dari angka1, dan false jika sebaliknya.
// Jika kedua angka bernilai sama, function akan me-return -1.


function task1() {

    function bandingkanAngka(angka1, angka2) {
        if (angka1 === angka2) {
            return -1
        }
        return angka2 > angka1;
    }

    return bandingkanAngka

}


// Problem 2
// Diberikan sebuah function balikKata(kata) yang menerima satu parameter berupa string.
// Function akan me-return kata yang dibalik. Contoh, jika kata adalah "John Doe", function akan me-return "eoD nhoJ".

function task2() {

    function balikKata(kata = "John Doe") {

        const reverseKata = [];

        for (const kataElement of kata) {
            reverseKata.unshift(kataElement)
        }

        return reverseKata.join("")

    }

    return balikKata

}

// Problem 3
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut.
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function task3() {
    function konversiMenit(second) {
        // you can only write your code here!
        let tempSecond = second
        let minutes = 0;

        while (tempSecond >= 60) {
            tempSecond -= 60
            minutes++
        }

        return `${minutes}:${tempSecond < 10 ? ('0' + tempSecond) : tempSecond}`;
    }

    return konversiMenit
}


//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string.
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.
function task4() {

    function xo(str) {
        // you can only write your code here!

        let x = 0;
        let o = 0;

        str.split("").forEach(char => {

            switch (char) {
                case 'x':
                    x++
                    break
                case 'o':
                    o++
                    break
            }

        })

        return x === o

    }

    return xo
}