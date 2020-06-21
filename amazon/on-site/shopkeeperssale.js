function findMin(current, array) {
    return array.find((value) => value <= current) || 0
}

function solve(array) {
    let answer = 0
    while (array.length > 0) {
        const current = array.shift()
        const realValue = current - findMin(current, array)
        answer = realValue + answer
    }
    console.log(answer)
}

solve([2, 3, 1, 2, 4, 2])

solve([5, 1, 3, 4, 6, 2])
solve([1, 3, 3, 2, 5])
