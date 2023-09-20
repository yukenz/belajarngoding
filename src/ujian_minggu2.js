export function task1() {
    /*
    Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter.
    Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat.
    Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali,
    function akan me-return nilai 0.
    */

    function oOnlyOne(arr) {

        const arrTemp = arr

        const filteredArr = arrTemp.filter(val => val === 'o');
        return filteredArr.length === 1
    }

    function targetTerdekat(arr = ['x', ' ', ' ', ' ', 'x', 'x', 'o', ' ']) {
        // you can only write your code here!

        //Cek Ada x dan o hanya 1
        if (arr.indexOf('x') === -1 || !oOnlyOne(arr))
            return 0

        /* Source */
        const oCoor = arr.indexOf('o')

        /* Destination*/
        const xCoor = arr.reduce((state, val, index) => {

            if (val !== 'x')
                return state

            return [...state, index]

        }, [])


        //Differenting
        return xCoor.reduce((state, val) => {

            //o behind
            if (oCoor < val) {
                // xCoor - oCoor < state = return
                if ((val - oCoor) < state)
                    return val - oCoor
            } /*o on front*/ else {
                // oCoor - xCoor < state = return
                if ((oCoor - val) < state)
                    return oCoor - val
            }

            return state

        }, (oCoor < xCoor[0]) ? xCoor[0] - oCoor : oCoor - xCoor[0])

    }

    return targetTerdekat

}

export function task2() {

    // soal 2
    /*
    Diberikan sebuah function mengelompokkanAngka(arr) yang menerima satu parameter berupa array yang berisi angka-angka.
    Function akan me-return array multidimensi dimana array tersebut berisikan 3 kategori/kelompok:

    kelompok pertama (baris pertama) merupakan angka-angka genap
    kelompok ke-2 (baris ke-2) merupakan angka-angka ganjil
    kelompok ke-3 (baris ke-3) merupakan angka-angka kelipatan 3
    Contoh jika arr inputan adalah [45, 20, 21, 2, 7] maka output: [ [ 20, 2 ], [ 7 ], [ 45, 21 ] ]
    */
    function mengelompokkanAngka(arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]) {


        //0 = Genap, 1 = ganjil, 2 = modulo 3 = 0
        const result = [[], [], []]

        arr.forEach((value) => {

            if (value % 3 === 0) {
                result[2].push(value)
                return
            }

            if (value % 2 === 0) {
                result[0].push(value)
            } else {
                result[1].push(value)
            }
        })

        return result

    }

    return mengelompokkanAngka
}

export function task3() {
    /*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
    function createDistincAlfabetBasedOnArr(arr) {

        const alphaResult = arr.map(value => {
            return value[0].toLowerCase()
        })

        const finalResult = [...new Set(alphaResult)]


        return finalResult
    }

    function groupAnimals(animals = ['cacing', 'ayam', 'kuda', 'anoa', 'kancil']) {
        // you can only write your code here!

        const alphabetDistinc = createDistincAlfabetBasedOnArr(animals);

        return alphabetDistinc.sort()
            .map(valueAlpha => animals.filter(value => value[0] === valueAlpha));

    }

    return groupAnimals
}