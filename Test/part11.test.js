import {task1, task2, task3, task4, task5} from "../src/part11";
import {test, expect, beforeEach, afterEach} from "@jest/globals"


test("Task 1", () => {

    const damageCalculation = task1()

    // TEST CASE
    expect(damageCalculation(9, 25)).toStrictEqual(207); // 207

    expect(damageCalculation(10, 4)).toStrictEqual(20); // 20

    expect(damageCalculation(5, 20)).toStrictEqual(90); // 90


})

test("Task 2", () => {

    const meleeRangedGrouping = task2()

    // TEST CASE

    expect(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged')).toStrictEqual([['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe']]);
    // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

    expect((meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'))).toStrictEqual([['Drow Ranger', 'Chen', 'Dazzle', 'Io'], []]);
    // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

    expect(meleeRangedGrouping('')).toStrictEqual([]); // []


})

