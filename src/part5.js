function task1(nama, peran) {

// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya.

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)

// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang),
// yaitu nama dan peran. Variabel peran harus memiliki isi data,
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"


    if (nama === "") {
        return ("nama wajib diisi")
    }

// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game".
    if (peran === "") {
        return ("Pilih Peranmu untuk memulai game")
    }

// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir.
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu

//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
    if (peran === "ksatria") {
        return (`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`)
    }

//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
    else if (peran === "tabib") {

        return (`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`)
    }

//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
    else if (peran === "penyihir") {
        return (`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`)
    }

//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
    else {
        return ("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada")

    }

//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai
}

function task2({tanggal, bulan, tahun}) {

    // Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun.
    // Disini kamu diminta untuk membuat format tanggal.
    // Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945.
    // Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

//code switch case kamu disini

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

    return {
        tanggal,
        bulan: monthToString(bulan),
        tahun
    }

}

// exports.task = {task1}
module.exports = {task1, task2}