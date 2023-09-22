import {task1, task2, task3, task4, task5} from "../src/part12_5";
import {test, expect, beforeEach, afterEach} from "@jest/globals"


test("Task 1", () => {

    const hapusSimbol = task1()

    // TEST CASES
    expect(hapusSimbol('test%$4aa')).toStrictEqual("test4aa"); // test4aa
    expect(hapusSimbol('devel0p3r s3j@@ati')).toStrictEqual("devel0p3rs3jati"); // devel0p3rs3jati
    expect(hapusSimbol('ma@#k!an~')).toStrictEqual("makan"); // makan
    expect(hapusSimbol('coding')).toStrictEqual("coding"); // coding
    expect(hapusSimbol('1+3-5*2=100')).toStrictEqual("1352100"); // 1352100


})

test("Task 2", () => {

    const cariPelaku = task2()

    // TEST CASES
    expect(cariPelaku('mabcvabc')).toStrictEqual(2); // 2
    expect(cariPelaku('abcdabdc')).toStrictEqual(1); // 1
    expect(cariPelaku('bcabcac')).toStrictEqual(1); // 1
    expect(cariPelaku('abcabcabc')).toStrictEqual(3); // 3
    expect(cariPelaku('babcbacabc')).toStrictEqual(2); // 2


})
