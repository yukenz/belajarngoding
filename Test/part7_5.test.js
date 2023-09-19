import {task1, task2, task3} from "../src/part7_5";
import {test, expect, beforeEach, afterEach} from "@jest/globals"

test("Task 1", () => {
    let res = task1();
    expect(res()).toStrictEqual("Halo Function!")
})

test("Task 2", () => {
    let res = task2();
    expect(res(5, 5)).toStrictEqual(25)
})

test("Task 3", () => {
    let res = task3();
    expect(res("awan", 21, "depok", "musik")).toStrictEqual("Nama saya awan, umur saya 21 tahun, alamat saya di depok, dan saya punya hobby yaitu musik!")
})