import {parse} from "@babel/core";

export function task1() {

    /*
Implementasikan function sorting dan getTotal untuk mendapatkan angka yang paling besar dan mengetahui berapa kali angka tersebut muncul di dalam arrNumber.

Dengan HANYA mengubah code di dalam 2 function yang diberikan (sorting dan getTotal).
Dilarang mengubah isi dalam function mostFrequentLargestNumbers!
*/
    function sorting(arrNumber) {
        // code di sini
        if (arrNumber.length <= 1) {
            return arrNumber;
        }

        const pivot = arrNumber[0];
        const left = [];
        const right = [];

        for (let i = 1; i < arrNumber.length; i++) {
            if (arrNumber[i] < pivot) {
                left.push(arrNumber[i]);
            } else {
                right.push(arrNumber[i]);
            }
        }

        return [...sorting(left), pivot, ...sorting(right)];
    }

    function getTotal(arrNumber) {
        // code di sini

        if (arrNumber.length === 0) {
            return ""
        }

        const highestValue = Math.max(...arrNumber);

        const highestValueCount = arrNumber.filter(val => val === highestValue).length;

        return `angka paling besar adalah ${highestValue} dan jumlah kemunculan sebanyak ${highestValueCount} kali`
    }

    function mostFrequentLargestNumbers(arrNumber) {
        let listSort = sorting(arrNumber);
        let countHighest = getTotal(listSort);
        return countHighest;
    }

    return mostFrequentLargestNumbers

}

export function task2() {

    /*
    Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

    Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

    Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu
    (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

    Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

    Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

    Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
    */


    function changeVocals(str) {

        function isUpperCase(string) {
            return /^[A-Z]*$/.test(string)
        }

        const vokal = ['a', 'i', 'u', 'e', 'o']

        const indexUpperCase = str.split("").map(isUpperCase);
        const strSplited = str.toLowerCase().split("")
        const strShift = strSplited.map(char => {

            const charInt = char.charCodeAt(0);

            if (vokal.indexOf(char) !== -1) {
                return String.fromCharCode(charInt + 1)
            }

            return char

        })

        return strShift.map((char, i) => {

            if (indexUpperCase[i]) {
                return char.toUpperCase()
            } else {
                return char.toLowerCase()
            }

        }).join("")

    }

    function reverseWord(str) {

        const split = str.split("");


        const reverse = split.reverse();

        return reverse.join("")

    }

    function setLowerUpperCase(str) {

        function isUpperCase(string) {
            return /^[A-Z]*$/.test(string)
        }

        const split = str.split("");

        return split.map(char => {
            if (isUpperCase(char)) {
                return char.toLowerCase()
            } else {
                return char.toUpperCase()
            }
        }).join("")


    }

    function removeSpaces(str) {
        return str.replace(/\s/g, '')
    }

    function passwordGenerator(name = "Sergei Dragunov") {

        if (name.length < 5) {
            return "Minimal karakter yang diinputkan adalah 5 karakter"
        }

        //Expected = VPNVGBRdJFGRFs
        const nameRemoveSpace = removeSpaces(name); // SergeiDragunov
        const nameReverse = reverseWord(nameRemoveSpace) // vonugarDiegreS
        const nameCaseFlip = setLowerUpperCase(nameReverse); // VONUGARdIEGREs
        const nameVocalShift = changeVocals(nameCaseFlip); // WPOVHBSeJFHSFt <-- Should Final

        return (nameVocalShift);

    }

    return passwordGenerator


}

export function task3() {


    /*
    Seorang customer sedang makan di sebuah restaurant AYCE(All You Can Eat).
    Dia akan terus makan sampai waktu yang diberikan oleh restaurant tersebut habis.
    Setiap customer memesan/mengambil makanan dan memakan pesanannya maka waktu customer berkurang 15 menit.
    Begitu seterusnya sampai waktunya habis .Customer masih bisa memesan/mengambil makanan selama waktunya belum 0.

    Diberikan sebuah function makanTerusRekursif(waktu) yang menerima satu parameter berupa waktu.
    Function akan memproses jika waktu masih ada.
    Function akan mengembalikan/me-return berapa kali seorang customer memesan/mengambil makanan dalam waktu yang diberikan.
    Wajib menggunakan rekursif.

    Contoh:
    45 => 3
    100 => 7
    10 => 1
    */

    function makanTerusRekursif(waktu = 66) {
        // you can only write your code here!

        if (waktu <= 0) {
            return 0
        }

        if ((waktu - 15) <= 0) {
            return 1;
        } else {
            return makanTerusRekursif(waktu - 15) + 1;
        }

    }

    return makanTerusRekursif

}

export function task4() {
    /*
    Diberikan sebuah function totalDigitRekursif(angka) yang menerima satu parameter berupa angka.
    Function akan me-return nilai total dari digit tersebut dengan menambahkan satu per satu angka dari digit paling depan ke paling belakang.
    Wajib menggunakan rekursif untuk berlatih rekursif! Disarankan untuk tidak menggunakan looping for untuk soal ini.

    Contoh:

    512, berarti outputnya adalah 8, karena 5 + 1 + 2 = 8. 1542, berarti outputnya adalah 12, karena 1 + 5 + 4 + 2 = 12.
    */

    function totalDigitRekursif(angka) {
        // you can only write your code here!

        const angkaSplitted = (angka + "").split("");

        if (angkaSplitted.length === 1) {
            return parseInt(angkaSplitted[0])
        }

        const popped = angkaSplitted.pop();

        return parseInt(popped) + totalDigitRekursif(parseInt(angkaSplitted.join("")))


    }

    return totalDigitRekursif

}

export function task5() {

    /*
    Diberikan sebuah function kaliTerusRekursif(angka) yang menerima satu parameter berupa angka.
    Function akan memproses angka yang lebih dari satu digit menjadi satu digit dengan melakukan perkalian.
    Bila masih lebih dari satu digit, terus lakukan perkalian setiap digit-nya untuk pada akhirnya mendapatkan satu digit.
    Wajib menggunakan rekursif untuk berlatih rekursif, namun kamu boleh menggunakan looping juga disini.

    Contoh:

    3 => 3, karena sudah satu digit 24 => 8. Karena 24 dua digit, maka kita lakukan 2 * 4 = 8. 8 satu digit, maka hasilnya adalah 8.
    654 => 0. Karena 654 tiga digit, maka lakukan 6 * 5 * 4 = 120. 120 tiga digit, maka lakukan 1 * 2 * 0 = 0. 0 satu digit, maka hasilnya adalah 0.
    */

    function kaliTerusRekursif(angka) {
        // you can only write your code here!

        //pecah digit
        const angkaSplitted = (angka + "").split("")

        //digit satu maka return
        if (angkaSplitted.length === 1) {
            return angka
        } else {
            const totalPerkalian = angkaSplitted.reduce((state, val) => state * parseInt(val), 1)
            return kaliTerusRekursif(totalPerkalian)
        }
    }

    return kaliTerusRekursif


}