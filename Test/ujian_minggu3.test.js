import {task1, task2, task3, task4} from "../src/ujian_minggu3";
import {test, expect, beforeEach, afterEach} from "@jest/globals"


test("Task 1", () => {

    const deepSum = task1()

    //TEST CASE
    expect(deepSum([
        [
            [4, 5, 6],
            [9, 1, 2, 10],
            [9, 4, 3]
        ],
        [
            [4, 14, 31],
            [9, 10, 18, 12, 20],
            [1, 4, 90]
        ],
        [
            [2, 5, 10],
            [3, 4, 5],
            [2, 4, 5, 10]
        ]
    ])).toStrictEqual(316); // 316

    expect(deepSum([
        [
            [20, 10],
            [15],
            [1, 1]
        ],
        [
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            [2],
            [9, 11]
        ],
        [
            [3, 5, 1],
            [1, 5, 3],
            [1]
        ],
        [
            [2]
        ]
    ])).toStrictEqual(156); // 156

    expect(deepSum([])).toStrictEqual([]); // No number

})

test("Task 2", () => {

    const naikAngkot = task2()

    //TEST CASE
    expect(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B'], ['Awan', 'F', 'A']]))
        .toStrictEqual([
            {penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000},
            {penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000},
            {penumpang: 'Awan', naikDari: 'F', tujuan: 'A', bayar: 10000},
        ]);

    expect(naikAngkot([])).toStrictEqual([]); //[]
})

test("Task 3", () => {

    const highestScore = task3()


    // TEST CASE
    expect(highestScore([
        {
            name: 'Dimitri',
            score: 90,
            class: 'foxes'
        },
        {
            name: 'Alexei',
            score: 85,
            class: 'wolves'
        },
        {
            name: 'Sergei',
            score: 74,
            class: 'foxes'
        },
        {
            name: 'Anastasia',
            score: 78,
            class: 'wolves'
        }
    ])).toStrictEqual(
        {
            foxes: {name: 'Dimitri', score: 90},
            wolves: {name: 'Alexei', score: 85}
        }
    );

    expect(highestScore([
        {
            name: 'Alexander',
            score: 100,
            class: 'foxes'
        },
        {
            name: 'Alisa',
            score: 76,
            class: 'wolves'
        },
        {
            name: 'Vladimir',
            score: 92,
            class: 'foxes'
        },
        {
            name: 'Albert',
            score: 71,
            class: 'wolves'
        },
        {
            name: 'Viktor',
            score: 80,
            class: 'tigers'
        }
    ])).toStrictEqual(
        {
            foxes: {name: 'Alexander', score: 100},
            wolves: {name: 'Alisa', score: 76},
            tigers: {name: 'Viktor', score: 80}
        }
    );


    expect(highestScore([])).toStrictEqual({}); //{}

})

test("Task 4", () => {

    const graduates = task4()


    expect(graduates([
        {
            name: 'Dimitri',
            score: 90,
            class: 'foxes'
        },
        {
            name: 'Alexei',
            score: 85,
            class: 'wolves'
        },
        {
            name: 'Sergei',
            score: 74,
            class: 'foxes'
        },
        {
            name: 'Anastasia',
            score: 78,
            class: 'wolves'
        }
    ])).toStrictEqual(
        {
            foxes: [
                {name: 'Dimitri', score: 90}
            ],
            wolves: [
                {name: 'Alexei', score: 85},
                {name: 'Anastasia', score: 78}
            ]
        }
    );


    expect(graduates([
        {
            name: 'Alexander',
            score: 100,
            class: 'foxes'
        },
        {
            name: 'Alisa',
            score: 76,
            class: 'wolves'
        },
        {
            name: 'Vladimir',
            score: 92,
            class: 'foxes'
        },
        {
            name: 'Albert',
            score: 71,
            class: 'wolves'
        },
        {
            name: 'Viktor',
            score: 80,
            class: 'tigers'
        }
    ])).toStrictEqual(
        {
            foxes: [
                {name: 'Alexander', score: 100},
                {name: 'Vladimir', score: 92}
            ],
            wolves: [
                {name: 'Alisa', score: 76},
            ],
            tigers: [
                {name: 'Viktor', score: 80}
            ]
        }
    );


    expect(graduates([])).toStrictEqual({}); //{}

})

