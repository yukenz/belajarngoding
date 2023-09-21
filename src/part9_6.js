export function task1() {
    function changeMe(arr) {

        if (arr.length === 0 && !arr) {
            return []
        }

        return arr.map(secondArr => {

            const [firstName, lastName, gender, age] = secondArr

            return {
                firstName: firstName,
                lastName: lastName,
                gender: gender,
                age: age ? new Date().getFullYear() - age : 'Invalid Birth Year'
            }

        });
    }

    return changeMe
}

export function task2() {
    /*
Diberikan sebuah function shoppingTime(memberId, money) yang menerima dua parameter berupa string dan number.
Parameter pertama merupakan memberId dan parameter ke-2 merupakan value uang yang dibawa oleh member tersebut.

Toko X sedang melakukan SALE untuk beberapa barang, yaitu:

Sepatu brand Stacattu seharga 1500000
Baju brand Zoro seharga 500000
Baju brand H&N seharga 250000
Sweater brand Uniklooh seharga 175000
Casing Handphone seharga 50000
Buatlah function yang akan mengembalikan sebuah object dimana object tersebut berisikan informasi memberId, money, listPurchased dan changeMoney.

Jika memberId kosong maka tampilkan "Mohon maaf, toko X hanya berlaku untuk member saja"
Jika uang yang dimiliki kurang dari 50000 maka tampilkan "Mohon maaf, uang tidak cukup"
Member yang berbelanja di toko X akan membeli barang yang paling mahal terlebih dahulu dan akan membeli barang-barang yang sedang SALE masing-masing 1 jika uang yang dimilikinya masih cukup.
Contoh jika inputan memberId: '324193hDew2' dan money: 700000

maka output:

{ memberId: '324193hDew2', money: 700000, listPurchased: [ 'Baju Zoro', 'Sweater Uniklooh' ], changeMoney: 25000 }
*/


    function buy(detail, barang) {
        if (detail.changeMoney >= barang.harga) {
            detail.changeMoney -= barang.harga
            detail.listPurchased.push(barang.name)
            return true
        } else {
            return false
        }
    }

    function shoppingTime(memberId = "", money = 100000) {

        if (memberId === "") {
            return "Mohon maaf, toko X hanya berlaku untuk member saja"
        }

        if (money < 50000) {
            return "Mohon maaf, uang tidak cukup"
        }

        const detail = {
            memberId,
            money,
            listPurchased: [],
            changeMoney: money
        }

        const barangMahalKeMurah = [
            {name: "Sepatu Stacattu", harga: 1500000},
            {name: "Baju Zoro", harga: 500000},
            {name: "Baju H&N", harga: 250000},
            {name: "Sweater Uniklooh", harga: 175000},
            {name: "Casing Handphone", harga: 50000},
        ].sort((a, b) => b.harga - a.harga);


        barangMahalKeMurah.forEach(barang => {
            buy(detail, barang)
        });

        return detail


    }

    return shoppingTime
}


export function task3() {
    /*
Toko X yang sedang melakukan SALE ingin menghitung jumlah profit untuk setiap jenis barang yang terjual pada hari itu.

Barang-barang SALE yang akan dihitung penjualannya:

Sepatu brand Stacattu seharga 1500000 dan stock barang yang tesedia 10
Baju brand Zoro seharga 500000 dan stock barang yang tesedia 2
Sweater brand Uniklooh seharga 175000 dan stock barang yang tersedia 1
Function akan menerima array yang berisikan object pembeli (nama pembeli, barang yang ingin dibeli dan jumlah barang yang dibelinya).
Jika stock barang kurang dari jumlah yang ingin dibeli oleh pembeli maka pembeli batal untuk membeli barang tersebut.

Function countProfit akan mengembalikan/me-return sebuah array of object dimana array tersebut berisi objek-objek barang dari toko X tersebut yang berisikan info nama barang, siapa saja yang membeli, sisa stock barang dan total pemasukan untuk barang tersebut
*/


    function countProfit(shoppers) {

        if (shoppers.length === 0) {
            return []
        }

        //0 nama, 1 harga, 2 stok
        const listBarang = [['Sepatu Stacattu', 1500000, 10],
            ['Baju Zoro', 500000, 2],
            ['Sweater Uniklooh', 175000, 1]
        ];

        return listBarang.map(barang => {

                const [productName, price, leftOver] = barang

                const profitProduct = {
                    product: productName,
                    shoppers: [],
                    leftOver,
                    totalProfit: 0
                }

                shoppers.forEach(person => {

                    const {name, product, amount} = person

                    if (product === productName && profitProduct.leftOver >= amount) {
                        profitProduct.leftOver -= amount
                        profitProduct.totalProfit += price * amount
                        profitProduct.shoppers.push(name)
                    }

                })

                return profitProduct

            }
        )

    }

    return countProfit

}

