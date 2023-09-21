export function task1() {
    /*
    Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka.
    Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut,
    Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6.
    Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6, sehingga function akan me-return 2.

    1 * 24 = 3 digit (124)
    3 * 8 = 2 digit (38)
    4 * 6 = 2 digit (46)

    karena dibawah ini 2 digit dan terkecil
    3 * 8 = 2 digit (38)
    4 * 6 = 2 digit (46)

    ya jadikan dia minimum

    misal faktronya angka 1 hanyalah
    1*1 = 2 digit (11)

    Return 2
    */
    function digitPerkalianMinimum(angka) {
        let digitTerkecil = Infinity;
        // Inisialisasi digitTerkecil dengan nilai tak terhingga

        // Loop dari 1 hingga akar kuadrat dari angka
        for (let faktor1 = 1; faktor1 <= Math.sqrt(angka); faktor1++) {
            if (angka % faktor1 === 0) {
                let faktor2 = angka / faktor1; // Hitung faktor kedua

                // Ubah faktor1 dan faktor2 menjadi string
                let strFaktor1 = faktor1.toString();
                let strFaktor2 = faktor2.toString();

                // Hitung jumlah digit faktor1 dan faktor2
                let totalDigit = strFaktor1.length + strFaktor2.length;

                // Perbarui digitTerkecil jika totalDigit lebih kecil dari digitTerkecil saat ini
                digitTerkecil = Math.min(digitTerkecil, totalDigit);
            }
        }

        return digitTerkecil;
    }


    return digitPerkalianMinimum

}

export function task2() {

    //DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
    //saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting

    function quickSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }

        const pivot = arr[0];
        const left = [];
        const right = [];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }

        return [...quickSort(left), pivot, ...quickSort(right)];
    }

    function urutkanAbjad(str) {
        // you can only write your code here!

        const strToIntSplitted = str.split("").map(str => str.charCodeAt(0));
        return quickSort(strToIntSplitted).map(str => String.fromCharCode(str)).join("");

    }

    return urutkanAbjad
}

export function task3() {
    //TIPS: gunakan method toUpperCase() dan toLowerCase()

    //Regex is dabes for check
    function isUpperCase(string) {
        return /^[A-Z]*$/.test(string)
    }

    function tukarBesarKecil(kalimat) {
        const charSplit = kalimat.split("");

        return charSplit.map(char => {
            if (isUpperCase(char)) {
                return char.toLowerCase()
            } else {
                return char.toUpperCase()
            }
        }).join("")
    }

    return tukarBesarKecil
}

export function task4() {

    /*
    Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string.
    function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali.
    Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

    contoh:
    barbarian kenapa bisa true?
    karena di bagian 'barian' terdapat b dipisah 3 karakter ari(totalnya 3) dan ketemu a

    Spasi juga dianggap sebagai karakter
    */

    function checkDistance(x, y) {
        if (x > y) {
            return x - y
        } else {
            return y - x
        }
    }

    function checkAB(str = 'lane borrowed', indexBStart = 0) {


        const strings = str.split("");
        let indexA = strings.indexOf('a');
        let indexB = strings.indexOf('b', indexBStart);

        if (indexB === -1) {
            return false
        }

        if (checkDistance(indexA, indexB) > 3) {
            return true;
        } else {
            if (indexBStart > str.length)
                return false
            return checkAB(str, indexB + 1);
        }

    }

    function checkABAlt(str = 'lane borrowed') {

        const aStr = str.split("").reduce((state, val, i) => val.toLowerCase() === 'a' ? [...state, i] : state, []);
        const bStr = str.split("").reduce((state, val, i) => val.toLowerCase() === 'b' ? [...state, i] : state, []);


        return aStr.some(aCoor => {
            return bStr.some(bCoor => {
                return checkDistance(aCoor, bCoor)
            })
        })

    }

    return checkABAlt

}