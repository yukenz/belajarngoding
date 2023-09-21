import {task1, task2, task3, task4, task5} from "../src/part9_2";
import {test, expect, beforeEach, afterEach} from "@jest/globals"


test("Task 1", () => {

    const angkaPrima = task1()
    // TEST CASES
    expect(angkaPrima(3)).toBeTruthy(); // true
    expect(angkaPrima(7)).toBeTruthy(); // true
    expect(angkaPrima(6)).toBeFalsy(); // false
    expect(angkaPrima(23)).toBeTruthy(); // true
    expect(angkaPrima(33)).toBeFalsy(); // false

})

test("Task 2", () => {

    const fpb = task2()
    // TEST CASES
    expect(fpb(12, 16)).toStrictEqual(4); // 4
    expect(fpb(50, 40)).toStrictEqual(10); // 10
    expect(fpb(22, 99)).toStrictEqual(11); // 11
    expect(fpb(24, 36)).toStrictEqual(12); // 12
    expect(fpb(17, 23)).toStrictEqual(1); // 1

})

test("Task 3", () => {

    const cariMedian = task3()
    // TEST CASES
    expect(cariMedian([1, 2, 3, 4, 5])).toStrictEqual(3); // 3
    expect(cariMedian([1, 3, 4, 10, 12, 13])).toStrictEqual(7); // 7
    expect(cariMedian([3, 4, 7, 6, 10])).toStrictEqual(6); // 6
    expect(cariMedian([1, 3, 3])).toStrictEqual(3); // 3
    expect(cariMedian([7, 7, 8, 8])).toStrictEqual(7.5); // 7.5

})

test("Task 4", () => {

    const cariModus = task4()
    // TEST CASES
    expect(cariModus([10, 4, 5, 2, 4])).toStrictEqual(4); // 4
    expect(cariModus([5, 10, 10, 6, 5])).toStrictEqual(5); // 5
    expect(cariModus([10, 3, 1, 2, 5])).toStrictEqual(-1); // -1
    expect(cariModus([1, 2, 3, 3, 4, 5])).toStrictEqual(3); // 3
    expect(cariModus([7, 7, 7, 7, 7])).toStrictEqual(-1); // -1

})

test("Task 5", () => {

    const ubahHuruf = task5()
    // TEST CASES
    expect(ubahHuruf('wow')).toStrictEqual("xpx"); // xpx
    expect(ubahHuruf('developer')).toStrictEqual("efwfmpqfs"); // efwfmpqfs
    expect(ubahHuruf('javascript')).toStrictEqual("kbwbtdsjqu"); // kbwbtdsjqu
    expect(ubahHuruf('keren')).toStrictEqual("lfsfo"); // lfsfo
    expect(ubahHuruf('semangat')).toStrictEqual("tfnbohbu"); // tfnbohbu
    expect(ubahHuruf('zuyun')).toStrictEqual("avzvo"); // zvzvo

})



