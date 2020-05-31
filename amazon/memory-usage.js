function get(i, j, matrix) {
    return matrix[i][j]
}

function constructMatrix(fTasks, bTasks) {
    const matrix = []
    let row = [0, ...bTasks]
    matrix.push(row)
    for (let i = 0; i < fTasks.length - 1; i++) {
        const current = fTasks[i]
        const newRow = row.map((o) => o + current)
        matrix.push(newRow)
    }
    return matrix
}

function solve(fTasks, bTasks, memory) {
    const matrix = constructMatrix(fTasks, bTasks)
    let pairArray = []
    let max = 0
    for (let i = 1; i <= matrix.length-1; i++) {
        for (let j = 1; j <= matrix[0].length-1; j++) {
            const amountNeeded = get(i, j, matrix)

            if (amountNeeded <= memory) {
                //set max
                if (amountNeeded > max) {
                    max = amountNeeded
                    pairArray = []
                }
                if (amountNeeded === max) {
                    pairArray.push({
                        i:i-1,
                        j:j-1
                    })
                }
            }

        }
    }
    return pairArray
}

function compare(a, b) {
    return JSON.stringify(a) === JSON.stringify(b)
}

let forGroundTasks = [1, 7, 2, 4, 5, 6]
let backGroundTasks = [3, 1, 2]
let expected = [
    {i: 1, j: 0}
]
let actual = solve(forGroundTasks,backGroundTasks,10)
console.log(compare(expected, actual))

expected = [
    {i: 3, j: 2},
    {i: 4, j: 1}

]
 actual = solve(forGroundTasks,backGroundTasks,6)
console.log(compare(expected, actual))
