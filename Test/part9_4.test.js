import {task1, task2, task3, task4, task5} from "../src/part9_4";
import {test, expect, beforeEach, afterEach} from "@jest/globals"


test("Task 1", () => {

    const digitPerkalianMinimum = task1()
    // TEST CASES
    expect(digitPerkalianMinimum(24)).toStrictEqual(2); // 2
    expect(digitPerkalianMinimum(90)).toStrictEqual(3); // 3
    expect(digitPerkalianMinimum(20)).toStrictEqual(2); // 2
    expect(digitPerkalianMinimum(179)).toStrictEqual(4); // 4
    expect(digitPerkalianMinimum(1)).toStrictEqual(2); // 2

})

test("Task 2", () => {

    const urutkanAbjad = task2()
    // TEST CASES
    expect(urutkanAbjad('hello')).toStrictEqual("ehllo"); // 'ehllo'
    expect(urutkanAbjad('truncate')).toStrictEqual("acenrttu"); // 'acenrttu'
    expect(urutkanAbjad('developer')).toStrictEqual("deeeloprv"); // 'deeeloprv'
    expect(urutkanAbjad('software')).toStrictEqual("aeforstw"); // 'aeforstw'
    expect(urutkanAbjad('aegis')).toStrictEqual("aegis"); // 'aegis'

})

test("Task 3", () => {

    const tukarBesarKecil = task3()
    // TEST CASES
    expect(tukarBesarKecil('Hello World')).toStrictEqual("hELLO wORLD"); // "hELLO wORLD"
    expect(tukarBesarKecil('I aM aLAY')).toStrictEqual("i Am Alay"); // "i Am Alay"
    expect(tukarBesarKecil('My Name is Bond!!')).toStrictEqual("mY nAME IS bOND!!"); // "mY nAME IS bOND!!"
    expect(tukarBesarKecil('IT sHOULD bE me')).toStrictEqual("it Should Be ME"); // "it Should Be ME"
    expect(tukarBesarKecil('001-A-3-5TrdYW')).toStrictEqual("001-a-3-5tRDyw"); // "001-a-3-5tRDyw"

})

test("Task 4", () => {

    const checkAB = task4()
    // TEST CASES
    expect(checkAB('lane borrowed')).toBeTruthy(); // true
    expect(checkAB('i am sick')).toBeFalsy(); // false
    expect(checkAB('you are boring')).toBeTruthy(); // true
    expect(checkAB('barbarian')).toBeTruthy(); // true
    expect(checkAB('bacon and meat')).toBeTruthy(); // true

})
