import {validateModulesOption} from "@babel/preset-env/lib/normalize-options";

export function task1() {

    /*
    Diberikan function attack(), damageCalculation().

    Function damageCalculation() akan menerima 2 parameter yaitu numberOfAttacks dan damagePerAttack
    Function attack() akan menerima 1 parameter yaitu damage
    [IMPLEMENTASI] Gunakan function damageCalculation() untuk menghitung damage yang diterima dan
    gunakan function attack() untuk mensimulasikan setiap attack dengan rumus damage - 2 disetiap attack.

    [CONTOH] damageCalculation(3, 10) akan mengembalikan nilai 24

    Karena attack akan dikurangi 2, maka setiap attack akan menghasilkan damage 8
    */

    function attack(damage) {
        // Code disini
    }

    function damageCalculation(numberOfAttacks, damagePerAttack) {
        // Code disini
        let damageDeal = damagePerAttack * numberOfAttacks

        for (let i = 0; i < numberOfAttacks; i++) {
            damageDeal -= 2
        }

        return damageDeal
    }

    return damageCalculation
}

export function task2() {

    /*
    Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string,
    implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.
    Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...
    Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]
    Jika input adalah string kosong ('') maka return array kosong
    */

    function meleeRangedGrouping(str = 'Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged') {


        if (str === '') {
            return []
        }


        //your code here
        const rawSplit = str.split(",");

        const heroNameType = rawSplit.map(hero_type => {

            const [name, type] = hero_type.split('-')

            return {name, type: type.toLowerCase()}

        })

        return heroNameType.reduce((state, val) => {

            const tempState = state
            if (val.type === 'ranged') {
                tempState[0].push(val.name)
                return tempState
            }
            if (val.type === 'melee') {
                tempState[1].push(val.name)
                return tempState
            }

            return state
        }, [[], []])

    }

    return meleeRangedGrouping


}

