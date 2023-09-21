import {task1, task2, task3, task4, task5} from "../src/part9_6";
import {test, expect, beforeEach, afterEach} from "@jest/globals"


test("Task 1", () => {

    const changeMe = task1()
    // TEST CASES
    const x = changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']])

    const expectation = [
        {
            firstName: 'Christ',
            lastName: 'Evans',
            gender: 'Male',
            age: 41
        },
        {
            firstName: 'Robert',
            lastName: 'Downey',
            gender: 'Male',
            age: 'Invalid Birth Year'
        }
    ]
    expect(x).toStrictEqual(expectation)
    expect(changeMe([])).toStrictEqual([]); // ""

})

test("Task 2", () => {

    const shoppingTime = task2()
    // TEST CASES
    expect(shoppingTime('1820RzKrnWn08', 2475000))
        .toStrictEqual(
            {
                memberId: '1820RzKrnWn08',
                money: 2475000,
                listPurchased: [
                    'Sepatu Stacattu',
                    'Baju Zoro',
                    'Baju H&N',
                    'Sweater Uniklooh',
                    'Casing Handphone'
                ],
                changeMoney: 0
            }
        )

    expect(shoppingTime('82Ku8Ma742', 170000))
        .toStrictEqual({
            memberId: '82Ku8Ma742',
            money: 170000,
            listPurchased: ['Casing Handphone'],
            changeMoney: 120000
        })

    expect(shoppingTime('', 2475000)).toMatch("Mohon maaf, toko X hanya berlaku untuk member saja"); //Mohon maaf, toko X hanya berlaku untuk member saja
    expect(shoppingTime('234JdhweRxa53', 15000)).toMatch("Mohon maaf, uang tidak cukup"); //Mohon maaf, uang tidak cukup
    expect(shoppingTime()).toMatch("Mohon maaf, toko X hanya berlaku untuk member saja"); ////Mohon maaf, toko X hanya berlaku untuk member saja

})

test("Task 3", () => {


    const countProfit = task3()

    // TEST CASES
    expect(countProfit([
        {
            name: 'Windi',
            product: 'Sepatu Stacattu',
            amount: 2
        },
        {
            name: 'Vanessa',
            product: 'Sepatu Stacattu',
            amount: 3
        }, {
            name: 'Rani',
            product: 'Sweater Uniklooh',
            amount: 2
        }])).toStrictEqual([
        {
            product: 'Sepatu Stacattu',
            shoppers: ['Windi', 'Vanessa'],
            leftOver: 5,
            totalProfit: 7500000
        },
        {
            product: 'Baju Zoro',
            shoppers: [],
            leftOver: 2,
            totalProfit: 0
        },
        {
            product: 'Sweater Uniklooh',
            shoppers: [],
            leftOver: 1,
            totalProfit: 0
        }
    ]);

    expect(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {
        name: 'Vanessa',
        product: 'Sepatu Stacattu',
        amount: 10
    }, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {
        name: 'Devi',
        product: 'Baju Zoro',
        amount: 1
    }, {name: 'Lisa', product: 'Baju Zoro', amount: 1}])).toStrictEqual([
        {
            product: 'Sepatu Stacattu',
            shoppers: ['Windi'],
            leftOver: 2,
            totalProfit: 12000000
        },
        {
            product: 'Baju Zoro',
            shoppers: ['Devi', 'Lisa'],
            leftOver: 0,
            totalProfit: 1000000
        },
        {
            product: 'Sweater Uniklooh',
            shoppers: ['Rani'],
            leftOver: 0,
            totalProfit: 175000
        }
    ])


    expect(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]))
        .toStrictEqual([
            {
                product: 'Sepatu Stacattu',
                shoppers: [],
                leftOver: 10,
                totalProfit: 0
            },
            {product: 'Baju Zoro', shoppers: [], leftOver: 2, totalProfit: 0},
            {
                product: 'Sweater Uniklooh',
                shoppers: [],
                leftOver: 1,
                totalProfit: 0
            }
        ])

    expect(countProfit([])).toStrictEqual([])


})
