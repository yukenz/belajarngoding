/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
*/
export function task1() {

    function palindrome(kata = "katak") {
        // you can only write your code here!

        const reverseKata = []

        for (const kataChar of kata) {
            reverseKata.unshift(kataChar)
        }

        return reverseKata.join("") === kata

    }

    return palindrome
}


/*
Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka.
Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.

note kenapa angka 8 adalah palindrome? karena angka 8 dibalik tetep 8 wkwkw
note kenapa angka 343 adalah palindrome? karena angka 343 dibalik tetep 343 eaaaa
*/

export function task2() {

    function isPalindrome(kata) {
        const reverseKata = []
        for (const kataChar of kata) {
            reverseKata.unshift(kataChar)
        }
        return reverseKata.join("") === kata
    }

    function findNextPalindrome(num) {
        let tempNum = num

        while (true) {
            tempNum++
            if (isPalindrome(tempNum.toString()))
                break

        }

        return tempNum
    }

    function angkaPalindrome(num) {

        // 8 return 8
        if (num === 8) {
            return num
        }

        //Cek num, eksekusi jika bukan palindrome
        if (!isPalindrome(num.toString())) {

            //Cari palindrome setelah angka ini
            return findNextPalindrome(num)

        }

        //angka palindrome karna lolos check
        return num
    }

    return angkaPalindrome
}


export function task3() {

    function hitungJumlahKata(kalimat = "I love You") {

        const kalimatSplited = kalimat.split(" ");

        return kalimatSplited.length

    }

    return hitungJumlahKata

}

export function task4() {

    function pasanganTerbesar(num) {

        //Pecah string ke char[]
        const tempNumString = num.toString().split("")

        //Tampungan num
        const numArr = []

        for (let i = 0; i < tempNumString.length; i += 2) {

            //tiap 2 char masukan ke [a,b]
            const temp = []
            temp.push(tempNumString[i])
            temp.push(tempNumString[i + 1])

            //gabungkan char [a.b] menjadi "ab"
            let val2Digit = temp.join("");

            //masukan "ab" ke tampungan numArr dengan menjadikan int
            numArr.push(parseInt(val2Digit))
        }

        return Math.max(...numArr)

    }

    return pasanganTerbesar
}



