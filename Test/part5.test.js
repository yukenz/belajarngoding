import {task1, task2} from "../src/part5";
import {test, expect, beforeEach, afterEach} from "@jest/globals"

beforeEach(() => {

});

afterEach(() => {

});

//Task 1
test("Salah Role", () => {
    const res = task1("awan", "wibu")
    console.log(res)
    expect(res)
        .toMatch("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada")
})

test("Nama Kosong", () => {
    const res = task1("", "ksatria")
    console.log(res)
    expect(res)
        .toMatch("nama wajib diisi")
})

test("Role Kosong", () => {
    const res = task1("awan", "")
    console.log(res)
    expect(res)
        .toMatch("Pilih Peranmu untuk memulai game")
})

test("Role Ksatria", () => {
    const res = task1("awan", "ksatria")
    console.log(res)
    expect(res)
        .toMatch("halo Ksatria awan , kamu dapat menyerang dengan senjatamu!")
})

test("Role Tabib", () => {
    const res = task1("awan", "tabib")
    console.log(res)
    expect(res)
        .toMatch("halo Tabib awan , kamu akan membantu temanmu yang terluka")
})

test("Role Penyihir", () => {
    const res = task1("awan", "penyihir")
    console.log(res)
    expect(res)
        .toMatch("halo Penyihir awan , ciptakan keajaiban yang membantu kemenanganmu!")
})

//Task 2

test("Januari", () => {
    const res = task2({tanggal: 12, bulan: 1, tahun: 2002})
    console.log(res)
    expect(res).toEqual({tanggal: 12, bulan: "Januari", tahun: 2002});
});
test("Februari", () => {
    const res = task2({tanggal: 12, bulan: 2, tahun: 2002})
    console.log(res)
    expect(res).toEqual({tanggal: 12, bulan: "Februari", tahun: 2002});
});
test("Maret", () => {
    const res = task2({tanggal: 12, bulan: 3, tahun: 2002})
    console.log(res)
    expect(res).toEqual({tanggal: 12, bulan: "Maret", tahun: 2002});
});
test("April", () => {
    const res = task2({tanggal: 12, bulan: 4, tahun: 2002})
    console.log(res)
    expect(res).toEqual({tanggal: 12, bulan: "April", tahun: 2002});
});

