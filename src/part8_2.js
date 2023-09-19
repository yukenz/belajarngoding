module.exports = {task1, task2}

/*
Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen.
Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.
Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data pada dari argumen seperti di bawah ini:
*/
function task1() {
    function dataHandling(input) {

        const [no, nama, alamat, ttl, hobby] = input

        return `
            Nomor ID:  ${no}
            Nama Lengkap:  ${nama}
            TTL:  ${ttl} ${alamat}
            Hobi:  ${hobby}
            `

    }

    return dataHandling
}


/**
 * keluaran yang diharapkan (pada console)
 *
 * let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */


function task2() {

    function monthToString(month) {

        switch (month) {
            case 1:
                return "Januari"
            case 2:
                return "Februari"
            case 3:
                return "Maret"
            case 4:
                return "April"
            case 5:
                return "Mei"
            case 6:
                return "Juni"
            case 7:
                return "Juli"
            case 8:
                return "Agustus"
            case 9:
                return "September"
            case 10:
                return "Oktober"
            case 11:
                return "November"
            case 12:
                return "Desember"
            default :
                return "Undefined"
        }

    }

    function dataHandling(input) {


        const [no, name, address, birth, hobby] = input

        const [tgl, bulan, tahun] = birth.split("/");

        // ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Pria", "Membaca"]
        console.log(input)

        // Mei
        console.log(monthToString(parseInt(bulan)))

        // ["1989", "21", "05"]
        console.log([tahun, tgl, bulan])

        // 21-05-1989
        console.log(tgl + "-" + bulan + "-" + tahun)


    }

    return dataHandling

}

