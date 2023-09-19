import {task1, task2, task3} from "../src/part7";
import {test, expect, beforeEach, afterEach} from "@jest/globals"

test("Task 1", () => {

    const bandingkanAngka = task1();
    expect(bandingkanAngka(5, 8)).toStrictEqual(true)
    expect(bandingkanAngka(5, 3)).toStrictEqual(false)
    expect(bandingkanAngka(4, 4)).toStrictEqual(-1)
    expect(bandingkanAngka(3, 3)).toStrictEqual(-1)
    expect(bandingkanAngka(17, 2)).toStrictEqual(false)

})

test("Task 2", () => {

    const balikKata = task2()
    expect(balikKata('Hello World and Coders')).toStrictEqual("sredoC dna dlroW olleH")
    expect(balikKata('John Doe')).toStrictEqual("eoD nhoJ")
    expect(balikKata('I am a bookworm')).toStrictEqual("mrowkoob a ma I")
    expect(balikKata('Coding is my hobby')).toStrictEqual("ybboh ym si gnidoC");
    expect(balikKata('Super')).toStrictEqual("repuS")

})

