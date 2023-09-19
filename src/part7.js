module.exports = {task1, task2}

// Problem
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


// Problem
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