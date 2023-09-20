export function task1() {

    function cariMean(arr) {
        // you can only write your code here!
        return Math.round(arr.reduce((x, y) => x + y, 0) / arr.length)
    }

    return cariMean
}

/*
Diberikan sebuah function perkalianUnik(arr) yang menerima satu parameter berupa array yang berisikan angka.
Function akan me-return array baru yang mengandung angka yang setiap nilainya merupakan hasil kali angka lain yang bukan angka itu sendiri.
Contoh, jika arr adalah [1, 2, 3, 4, 5], maka function akan mereturn [120, 60, 40, 30, 24], karena 120 adalah 2 * 3 * 4 * 5, 60 adalah 1 * 3 * 4 * 5, 40 adalah 1 * 2 * 4 * 5, dan seterusnya.
*/
export function task2() {
    function perkalianUnik(arr) {
        // you can only write your code here!
        return arr.map((value, index) => {
            const tempArr = [...arr]
            tempArr.splice(index, 1)
            return tempArr.reduce((x, y) => x * y, 1)
        })
    }

    return perkalianUnik
}

export function task3() {

//tentukan apakah ini deret aritmatika atau bukan
    function tentukanDeretAritmatika(arr) {
        // you can only write your code here!

        const distance = arr[1] - arr[0]
        return arr.every((value, index, array) => {
            if (index === 0) {
                return true
            }
            return distance === value - array[index - 1]
        })
    }

    return tentukanDeretAritmatika
}


export function task4() {

    function tentukanDeretGeometri(arr) {
        // you can only write your code here!

        const distance = arr[1] / arr[0]
        return arr.every((value, index, array) => {
            if (index === 0 || index === 1) {
                return true
            }
            return distance === value / array[index - 1]
        })
    }

    return tentukanDeretGeometri
}

