export function task1() {

    /*
Implementasikan function deepSum untuk mendapatkan jumlah pertambahan dari angka-angka yang terdapat di dalam array
*/

    function deepSum(arr, typeOfObj = typeof arr) {

        if (arr.length === 0) {
            return []
        }


        if (typeOfObj === 'number') {
            return arr;
        }
        return arr.reduce((state, val) => {
            return state + deepSum(val)
        }, 0)

    }

    return deepSum

}

export function task2() {


    /*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

    const rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    const cost = 2000


    function naikAngkot(arrPenumpang) {

        if (arrPenumpang.length === 0) {
            return []
        }

        return arrPenumpang.map(value => {
            const [name, src, dest] = value
            const res = {}

            res.penumpang = name
            res.naikDari = src
            res.tujuan = dest

            const srcIndex = rute.indexOf(src);
            const destIndex = rute.indexOf(dest);

            if (srcIndex > destIndex) {
                res.bayar = cost * (srcIndex - destIndex);
            } else {
                res.bayar = cost * (destIndex - srcIndex);
            }
            return res
        });
    }

    return naikAngkot


}

export function task3() {


    function createSetClass(students) {

        return [...new Set(students.map(students => students.class))]

    }

    function highestScore(students) {
        // Code disini
        const setClass = createSetClass(students);
        const everyClassWithStudent = setClass.map(clazName => students.filter(value => value.class === clazName))
            .map(studentOnClass => studentOnClass.sort((a, b) => b.score - a.score))

        return setClass.reduce((state, val, i) => {

            const {name, score} = everyClassWithStudent[i][0]
            return {...state, [val]: {name, score}}

        }, {})

    }

    return highestScore
}

export function task4() {

    /*
Implementasikan function graduates untuk mendapatkan daftar student yang lulus dengan aturan:

Student dapat dinyatakan lulus apabila score lebih besar dari 75.
Masukkan name dan score dari student ke class yang dia ikuti.
Student yang tidak lulus tidak perlu ditampilkan.
Output yang diharapkan berupa Object dengan format sebagai berikut:

{
  <class>: [
    { name: <name>, score: <score> },
    ...
  ],
  <class>: [
    { name: <name>, score: <score> },
    ...
  ],
  <class>: [] //NOTE: Jika tidak ada student yang lulus, class ini akan diisi oleh array kosong
}
*/


    function createSetClass(students) {

        return [...new Set(students.map(students => students.class))]

    }

    function graduates(students) {
        // Code disini

        const setClass = createSetClass(students);
        const everyClassWithStudent = setClass.map(clazName => students.filter(value => value.class === clazName))
            .map(studentOnClass => studentOnClass.filter(studentOnClass => studentOnClass.score > 75))

        return setClass.reduce((state, className, i) => {

            const studentWithoutKeyClass = everyClassWithStudent[i].map(students => {
                const {name, score} = students
                return {name, score}
            })

            return {...state, [className]: studentWithoutKeyClass}
        }, {})

    }

    return graduates

}
