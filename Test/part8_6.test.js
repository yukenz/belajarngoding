import {task1, task2, task3, task4} from "../src/part8_6";
import {test, expect, beforeEach, afterEach} from "@jest/globals"


test("Task 1", () => {

    const cariMean = task1()
    // TEST CASES
    expect(cariMean([1, 2, 3, 4, 5])).toStrictEqual(3); // 3
    expect(cariMean([3, 5, 7, 5, 3])).toStrictEqual(5); // 5
    expect(cariMean([6, 5, 4, 7, 3])).toStrictEqual(5); // 5
    expect(cariMean([1, 3, 3])).toStrictEqual(2); // 2
    expect(cariMean([7, 7, 7, 7, 7])).toStrictEqual(7); // 7

})

test("Task 2", () => {

    const perkalianUnik = task2()
    // TEST CASES
    expect(perkalianUnik([2, 4, 6])).toStrictEqual([24, 12, 8]); // [24, 12, 8]
    expect(perkalianUnik([1, 2, 3, 4, 5])).toStrictEqual([120, 60, 40, 30, 24]); // [120, 60, 40, 30, 24]
    expect(perkalianUnik([1, 4, 3, 2, 5])).toStrictEqual([120, 30, 40, 60, 24]); // [120, 30, 40, 60, 24]
    expect(perkalianUnik([1, 3, 3, 1])).toStrictEqual([9, 3, 3, 9]); // [9, 3, 3, 9]
    expect(perkalianUnik([2, 1, 8, 10, 2])).toStrictEqual([160, 320, 40, 32, 160]); // [160, 320, 40, 32, 160]

})

test("Task 3", () => {

    const tentukanDeretAritmatika = task3()
    // TEST CASES
    expect(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])).toBeTruthy(); // true
    expect(tentukanDeretAritmatika([2, 4, 6, 12, 24])).toBeFalsy(); // false
    expect(tentukanDeretAritmatika([2, 4, 6, 8])).toBeTruthy(); // true
    expect(tentukanDeretAritmatika([2, 6, 18, 54])).toBeFalsy(); // false
    expect(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])).toBeFalsy(); // false

})

test("Task 4", () => {
    const tentukanDeretGeometri = task4()
    // TEST CASES
    expect(tentukanDeretGeometri([1, 3, 9, 27, 81])).toBeTruthy(); // true
    expect(tentukanDeretGeometri([2, 4, 8, 16, 32])).toBeTruthy(); // true
    expect(tentukanDeretGeometri([2, 4, 6, 8])).toBeFalsy(); // false
    expect(tentukanDeretGeometri([2, 6, 18, 54])).toBeTruthy(); // true
    expect(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])).toBeFalsy(); // false
})




