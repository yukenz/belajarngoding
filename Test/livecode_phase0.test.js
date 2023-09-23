import {task1, task2, task3, task4, task5} from "../src/livecode_phase0";
import {test, expect, beforeEach, afterEach} from "@jest/globals"

test("task1", () => {

    const findNotRelative = task1()

    expect(findNotRelative([3, 6, 10, 12, 15], [1, 3, 5, 10, 16])).toStrictEqual([6, 12, 15]); // [ 6, 12, 15]
    expect(findNotRelative([10, 20, 36, 59], [5, 10, 15, 59])).toStrictEqual([20, 36]) //[20, 36]
    expect(findNotRelative([1, 2, 3], [2, 1, 3])).toStrictEqual([]); //[]

})

test("task2", () => {

    const numberIterator = task2()

    expect(numberIterator(5)).toStrictEqual('012345'); // '012345'
    expect(numberIterator(7)).toStrictEqual('01234567'); // '01234567'
    expect(numberIterator(3)).toStrictEqual('0123'); // '0123'
    expect(numberIterator(1)).toStrictEqual('01'); // '01'
    expect(numberIterator(0)).toStrictEqual('0'); // '0'

})

test("task3", () => {

    const trainSeating = task3()

    expect(trainSeating([
        {
            nama: "Awtian",
            gerbong: "VVIP",
            seat: 'A1'
        },
        {
            nama: "Klonoa",
            gerbong: "VIP",
            seat: 'V1'
        },
        {
            nama: "Azizy",
            gerbong: "VVIP",
            seat: 'A2'
        },
        {
            nama: "Crash",
            gerbong: "Regular",
            seat: 'R1'
        },
        {
            nama: "Sena",
            gerbong: "Regular",
            seat: 'R3'
        },
        {
            nama: "Heri",
            gerbong: "Regular",
            seat: 'R10'
        },
        {
            nama: "Retsu",
            gerbong: "VIP",
            seat: 'V2'
        },
        {
            nama: "Hiruma",
            gerbong: "VVIP",
            seat: 'A666'
        },
        {
            nama: "Tsubasa",
            gerbong: "VIP",
            seat: 'V6'
        }
    ])).toStrictEqual(
        {
            VVIP: [
                {nama: 'Awtian', seat: 'A1'},
                {nama: 'Azizy', seat: 'A2'},
                {nama: 'Hiruma', seat: 'A666'}],
            VIP: [{nama: 'Klonoa', seat: 'V1'},
                {nama: 'Retsu', seat: 'V2'},
                {nama: 'Tsubasa', seat: 'V6'}],
            Regular: [{nama: 'Crash', seat: 'R1'},
                {nama: 'Sena', seat: 'R3'},
                {nama: 'Heri', seat: 'R10'}]
        }
    )

})

test("task4", () => {

    const duplicateCount = task4()

    expect(duplicateCount("")).toStrictEqual(0) //0
    expect(duplicateCount("abcde")).toStrictEqual(0) //0
    expect(duplicateCount("aabbcde")).toStrictEqual(2) //2
    expect(duplicateCount("aabBcde")).toStrictEqual(2) //2
    expect(duplicateCount("Indivisibility")).toStrictEqual(1) //1
    expect(duplicateCount("Indivisibilities")).toStrictEqual(2) //2
    expect(duplicateCount("abcabcdABcefGhg")).toStrictEqual(4) //4

})

test("task5", () => {

    const piramid2 = task5()

    piramid2(5)


})