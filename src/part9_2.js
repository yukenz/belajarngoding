export function task1() {

//cek apakah angka yang dikirim adalah angka prima atau bukan?
//cek google bagi yang ga tau apa itu angka prima

    function angkaPrima(angka = 24) {
        // you can only write your code here!
        if (angka === 1) {
            return false
        }
        for (let i = angka - 1; i > 1; i--) {

            if (angka % i === 0) {
                return false
            }

        }
        return true
    }

    return angkaPrima
}

export function task2() {

    //cari faktor persekutuan terbesar
    // 12, 16 4
    function fpb(angka1 = 12, angka2 = 16) {
        // you can only write your code here!

        console.log(angka1, angka2)
        //Loop sampai b adalah 0
        while (angka2 !== 0) {

            //stash b
            let temp = angka2;

            //b = sisa bagi dan b
            angka2 = angka1 % angka2;

            //pop stash b ke a
            angka1 = temp;

            console.log(angka1, angka2)
        }

        return angka1;
    }

    return fpb
}


export function task3() {

    function cariMedian(arr = [1, 2, 3, 4, 5]) {

        //Urutkan dulu ASC
        arr.sort((a, b) => a - b);

        //Jika length ganjil
        if (arr.length % 2 === 1) {

            //return index ke length/2 -> bulatkan kebawah
            return arr[Math.floor(arr.length / 2)]
        }
        //Jika length genap
        else {
            const tengah1 = arr[(arr.length / 2) - 1];
            const tengah2 = arr[arr.length / 2];
            return (tengah1 + tengah2) / 2;
        }

    }

    return cariMedian

}

export function task4() {

    /*
    Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka.
    Function akan me-return modus dari array atau deret angka tersebut.
    Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul.
    Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, function akan me-return -1.
    Apabila ditemukan lebih dari dua nilai modus,
    tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan).
    Dan apabila dialam modus hanya ada 1 nilai yang sama maka function akan me-return -1,
    Contohnya [1, 1, 1] adalah -1.
    */

    //Hilangkan duplikat
    function distinc(arr) {

        return [...new Set(arr)]
    }

    function cariModus(arr = [10, 4, 5, 2, 4]) {

        //Hilangkan DeDuplicate
        //[10, 4, 5, 2]
        const arrDistinc = distinc(arr);

        //[10, 4, 5, 2]
        //[ 1, 2, 1, 1 ]
        //Cek berapa kali deret distincArr muncul di originalArr
        let arrDistincRes = arrDistinc.map(distincVal => {

            return arr.reduce((state, val) => {
                if (distincVal === val) {
                    return state + 1
                }
                return state
            }, 0);

        });

        // Cari nilai tertinggi dari pengecekan yang dihasilkan
        // Value = 2
        const highestCount = Math.max(...arrDistincRes);


        // Cek apakah tidak ada modus terlihat
        //[ 1, 2, 1, 1 ] = [1,2] => modus terlihat karna panjang distinc > 1
        if (distinc(arrDistincRes).length === 1)
            return -1

        return arrDistinc[arrDistincRes.indexOf(highestCount)]

    }

    return cariModus

}


export function task5() {
    //sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
    //intinya ubah huruf menjadi huruf setelahnya
    function ubahHuruf(kata = "developer" /*efwfmpqfs*/) {
        // you can only write your code here!

        const kataSplitted = kata.split("");

        const a = "a".charCodeAt(0)
        const z = "z".charCodeAt(0)

        const kataResult = kataSplitted
            .map(value => {
                const charInt = value.charCodeAt(0);
                if (charInt === z) {
                    return String.fromCharCode(a)
                } else {
                    return String.fromCharCode(charInt + 1)
                }
            })

        return kataResult.join("")
    }


    return ubahHuruf
}