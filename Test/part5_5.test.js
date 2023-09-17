import {task1, task2, task3, task4} from "../src/part5_5";
import {test, expect, beforeEach, afterEach} from "@jest/globals"

test("Task 1", () => {
    const res = task1()
    console.log(res)
    expect(res)
        .toMatch("JavaScript is awesome and I love it!")
})

test("Task 2", () => {
    const res = task2()
    console.log('First Word: ' + res)
    expect(res)
        .toMatch("wew")
})

test("Task 3", () => {
    const res = task3()
    console.log('First Word: ' + res)
    expect(res)
        .toMatch("wow")
})

test("Task 4", () => {
    const res = task4()
    console.log('First Word: ' + res.exampleFirstWord + ', with length: ' + res.firstWordLength)
    expect(res)
        .toStrictEqual({exampleFirstWord: 'wow', firstWordLength: 3})
})


