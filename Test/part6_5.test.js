import {task1, task2, task3, task4, task5} from "../src/part6_5";
import {test, expect, beforeEach, afterEach} from "@jest/globals"

test("Task 1", task1)
test("Task 2", task2)
test("Task 3", task3)
test("Task 4", task4)
test("Task 5", () => {
    task5(5)
})