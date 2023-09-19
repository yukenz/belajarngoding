import {task1, task2, task3} from "../src/part8_2";
import {test, expect, beforeEach, afterEach} from "@jest/globals"

test("Task 1", () => {

    const dataHandling = task1();

    const input = [
        ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
        ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
        ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
        ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
    ]

    input.forEach(input => {
        const [no, nama, alamat, ttl, hobby] = input
        expect(dataHandling(input)).toStrictEqual(
            `
            Nomor ID:  ${no}
            Nama Lengkap:  ${nama}
            TTL:  ${ttl} ${alamat}
            Hobi:  ${hobby}
            `
        )
    })

})

test("Task 2", () => {
    const dataHandling = task2();
    let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Pria", "Membaca"];
    dataHandling(input)
})