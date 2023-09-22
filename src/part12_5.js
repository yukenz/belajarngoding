export function task1() {

    function hapusSimbol(str = 'test%$4aa') {

        return str.replace(/\W/gi,"")
    }

    return hapusSimbol


}

export function task2() {

    /*
Diberikan sebuah function cariPelaku(kalimat) yang menerima satu parameter berupa string.
Function akan me-return jumlah berapa kali ditemukan kata "abc" secara berturut-turut di dalam kalimat tersebut.
Gunakan regex untuk melatih kemampuan regex.
*/
    function cariPelaku(str = "mabcvabc") {
        // you can only write your code here!

        return str.match(/abc/gi).length
    }

    return cariPelaku



}