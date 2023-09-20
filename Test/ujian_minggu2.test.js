import {task1, task2, task3, task4} from "../src/ujian_minggu2";
import {test, expect, beforeEach, afterEach} from "@jest/globals"


test("Task 1", () => {

    const targetTerdekat = task1()
    // TEST CASES
    expect(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])).toStrictEqual(3); // 3
    expect(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])).toStrictEqual(4); // 4
    expect(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])).toStrictEqual(1); // 1
    expect(targetTerdekat([' ', ' ', 'o', ' '])).toStrictEqual(0); // 0
    expect(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])).toStrictEqual(2); // 2
})

test("Task 2", () => {

    const mengelompokkanAngka = task2()
    // TEST CASES
    expect(mengelompokkanAngka([2, 4, 6])).toStrictEqual([[2, 4], [], [6]]); // [ [2, 4], [], [6] ]
    expect(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])).toStrictEqual([[2, 4, 8], [1, 5, 7], [3, 6, 9]]); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
    expect(mengelompokkanAngka([100, 151, 122, 99, 111])).toStrictEqual([[100, 122], [151], [99, 111]]); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
    expect(mengelompokkanAngka([])).toStrictEqual([[], [], []]); // [ [], [], [] ]
})

test("Task 3", () => {

    const groupAnimals = task3()
    // TEST CASES
    expect(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']))
        .toStrictEqual([['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil']]);
    // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
    expect(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']))
        .toStrictEqual([['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta']]);
    // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

})