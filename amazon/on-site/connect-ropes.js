function solve(input) {

    let sum = 0
    let ropes = input
    while (ropes.length > 1) {
        const sorted = ropes.sort((a, b) => a - b)
        const a = sorted.shift()
        const b = sorted.shift()
        const current = a + b
        sum = sum + current
        ropes = [...sorted]
        ropes.push(current)
    }

    console.log(sum)
}

solve([8, 4, 6, 12])
solve([20, 4, 8, 2])
solve([1,2,5, 10, 35, 89])
solve([2,2,3,3])
