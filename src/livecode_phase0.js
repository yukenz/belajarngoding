export function task1() {

    /*
==================================
Array Mastery: Find Not Relative
==================================

Diberikan sebuah function findNotRelative yang menerima 2 parameter berupa array of number.
Output adalah array berupa kumpulan angka yang ada di array pertama tetapi tidak ada di array kedua.

Contoh 1:
input: [ 3, 6, 10, 12, 15 ] dan [ 1, 3, 5, 10, 16 ]
output: [ 6, 12, 15]

Contoh 2:
input: [ 10, 20, 36, 59 ] dan [ 5, 10, 15, 59 ]
output: [20, 36]

RULES:
 - DILARANG MENGGUNAKAN .map, .filter atau .reduce!

*/

    //ada di kiri tapi gak di kanan
    function findNotRelative(arr1 = [3, 6, 10, 12, 15], arr2 = [1, 3, 5, 10, 16]) {
        //code here
        let result = []
        for (let i = 0; i < arr1.length; i++) {

            let mustPush = true
            for (let j = 0; j < arr2.length; j++) {
                if (arr1[i] === arr2[j]) {
                    mustPush = false
                }
            }
            if (mustPush) {
                result.push(arr1[i]);
            }

        }
        return result

    }

    return findNotRelative

}

export function task2() {


    /*
===================================
Recursive Mastery : Number Iterator
===================================
Nama:________
[INSTRUCTION]
Diberikan sebuah function bernama numberIterator yang merupakan sebuah function yang menerima satu parameter num berupa number.
Buatlah dengan metode rekursif iterasi angka tersebut dari 0.
[EXAMPLE]
input: 5
output: 012345
input: 7
output: 01234567
[CONSTRAINTS]
Wajib menggunakan metode rekursif
Dilarang menggunakan sintaks for / while dan regex
*/
    function numberIterator(num = 5) {
        //code here
        if (num === 0)
            return '0'
        return numberIterator(num - 1) + (num + "")
    }

    return numberIterator

}

export function task3() {


    /*
****************
Advanced Seating
****************
trainSeating adalah sebuah function yang menerima parameter berupa
array of object.
Yang harus mengeluarkan hasil sebuah object yang memiliki isi key
berdasarkan jenis gerbong penumpang.
Yang berisi daftar nama penumpang dan tempat duduk penumpang.

Contoh input dan output bisa dilihat di test case.


*/
    function trainSeating(penumpang) {


        return penumpang.reduce((state, val) => {

            let tempState = {...state}

            const {nama, gerbong, seat} = val
            tempState[gerbong].push({nama, seat})

            return tempState

        }, {
            VVIP: [],
            VIP: [],
            Regular: []
        })

    }

    return trainSeating


}

export function task4() {

    /*
      menghitung jumlah karakter yang duplikat
      misal ada aabbc maka a dan b adalah duplikat maka return 2
      misal ada AaBbc maka a dan b juga duplikat ga peduli dia huruf besar atau tidak
    */
    function duplicateCount(text = "abcde") {
        const textSplitted = text.toLowerCase().split("");
        const alphaUsedDistinc = [...new Set(textSplitted)]
        const res = alphaUsedDistinc.map(char => {
            return textSplitted.reduce((state, val) => val === char ? state + 1 : state, 0)
        })
        const duplicated = res.filter((val) => val > 1);
        if (duplicated.length === 0) {
            return 0
        }
        return duplicated.length
    }

    return duplicateCount

}

export function task5() {


    function piramid2(num = 5) {
        //code here

        for (let i = num; i > 0; i--) {

            let strbuilder = ""
            for (let j = 0; j < i; j++) {
                strbuilder += i
            }
            console.log(strbuilder)
        }

        for (let i = 2; i <= num; i++) {

            let strbuilder = ""
            for (let j = 0; j < i; j++) {
                strbuilder += i
            }
            console.log(strbuilder)
        }

        /*
55555
4444
333
22
1
22
333
4444
55555
*/

    }

    return piramid2


}