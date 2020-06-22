function rotationsTo(current, target) {
    if (current === target) return 0
    return ((current + target) === 7) ? 2 : 1
}

function find(target, array) {
    return array.map((value => rotationsTo(value, target))).reduce((a, b) => a + b, 0)
}

function solve(diceArray) {
    let min = Infinity
    for (let i = 0; i < diceArray.length; i++) {
        const target = diceArray[i]
        const current = find(target, diceArray)
        if (current < min) {
            min = current
        }
    }
    console.log(min)
}

solve([6, 5, 4])//2

solve([6, 6, 1])//2
solve([6, 1, 5, 4])//3
