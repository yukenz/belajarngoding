import {task1, task2, task3, task4} from "../src/part8_4";
import {test, expect, beforeEach, afterEach} from "@jest/globals"


test("Task 1", () => {

    const palindrome = task1()
    // TEST CASES
    expect(palindrome('katak')).toBeTruthy(); // true
    expect(palindrome('blanket')).toBeFalsy(); // false
    expect(palindrome('civic')).toBeTruthy(); // true
    expect(palindrome('kasur rusak')).toBeTruthy(); // true
    expect(palindrome('mister')).toBeFalsy(); // false

})

test("Task 2", () => {

    const angkaPalindrome = task2()
    // TEST CASES
    expect(angkaPalindrome(8)).toStrictEqual(8); // 9
    expect(angkaPalindrome(10)).toStrictEqual(11); // 11
    expect(angkaPalindrome(117)).toStrictEqual(121); // 121
    expect(angkaPalindrome(175)).toStrictEqual(181); // 181
    expect(angkaPalindrome(1000)).toStrictEqual(1001); // 1001
})

test("Task 3", () => {

    const hitungJumlahKata = task3()
    // TEST CASES
    expect(hitungJumlahKata('I have a dream')).toStrictEqual(4); // 4
    expect(hitungJumlahKata('Never eat shredded wheat or cake')).toStrictEqual(6); // 6
    expect(hitungJumlahKata('A song to sing')).toStrictEqual(4); // 4
    expect(hitungJumlahKata('I')).toStrictEqual(1); // 1
    expect(hitungJumlahKata('I believe I can code')).toStrictEqual(5); // 5
})

test("Task 4", () => {

    const pasanganTerbesar = task4()
    // TEST CASES
    expect(pasanganTerbesar(641573)).toStrictEqual(73); // 73
    expect(pasanganTerbesar(12783456)).toStrictEqual(78); // 78
    expect(pasanganTerbesar(910233)).toStrictEqual(91); // 91
    expect(pasanganTerbesar(71856421)).toStrictEqual(85); // 85
    expect(pasanganTerbesar(79918293)).toStrictEqual(93); // 93
})

