import {task1, task2, task3, task4, task5} from "../src/part10_5";
import {test, expect, beforeEach, afterEach} from "@jest/globals"


test("Task 1", () => {

    const mostFrequentLargestNumbers = task1()

    expect(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]))
        .toStrictEqual("angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali");


    expect(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]))
        .toStrictEqual("angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali");

    expect(mostFrequentLargestNumbers([1, 1, 1, 1]))
        .toStrictEqual("angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali");

    expect(mostFrequentLargestNumbers([]))
        .toStrictEqual("");


})

test("Task 2", () => {

    const passwordGenerator = task2()

    expect(passwordGenerator('Sergei Dragunov')).toStrictEqual("VPNVGBRdJFGRFs"); // 'VPNVGBRdJFGRFs'
    expect(passwordGenerator('Dimitri Wahyudiputra')).toStrictEqual("BRTVPJDVYHBwJRTJMJd"); // 'BRTVPJDVYHBwJRTJMJd'
    expect(passwordGenerator('Alexei')).toStrictEqual("JFXFLb"); // 'JFXFLb'
    expect(passwordGenerator('Alex')).toStrictEqual("Minimal karakter yang diinputkan adalah 5 karakter"); // 'Minimal karakter yang diinputkan adalah 5 karakter'

})

test("Task 3", () => {

    const makanTerusRekursif = task3()

    // TEST CASES
    expect(makanTerusRekursif(66)).toStrictEqual(5); // 5
    expect(makanTerusRekursif(100)).toStrictEqual(7); // 7
    expect(makanTerusRekursif(90)).toStrictEqual(6); // 6
    expect(makanTerusRekursif(10)).toStrictEqual(1); // 1
    expect(makanTerusRekursif(0)).toStrictEqual(0); // 0

})

test("Task 4", () => {

    const totalDigitRekursif = task4()

    // TEST CASES
    expect(totalDigitRekursif(512)).toStrictEqual(8); // 8
    expect(totalDigitRekursif(1542)).toStrictEqual(12); // 12
    expect(totalDigitRekursif(5)).toStrictEqual(5); // 5
    expect(totalDigitRekursif(21)).toStrictEqual(3); // 3
    expect(totalDigitRekursif(11111)).toStrictEqual(5); // 5

})

test("Task 5", () => {

    const kaliTerusRekursif = task5()

    // TEST CASES
    expect(kaliTerusRekursif(66)).toStrictEqual(8); // 8
    expect(kaliTerusRekursif(3)).toStrictEqual(3); // 3
    expect(kaliTerusRekursif(24)).toStrictEqual(8); // 8
    expect(kaliTerusRekursif(654)).toStrictEqual(0); // 0
    expect(kaliTerusRekursif(1231)).toStrictEqual(6); // 6

})
