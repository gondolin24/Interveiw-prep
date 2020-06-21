function outOfBounds(i, j, matrix) {
    if (i < 0 || j < 0) return true
    return (i >= matrix.length || j >= matrix[0].length)
}

function traverse(i, j, matrix) {
    if (outOfBounds(i, j, matrix)) {
        return Infinity
    }
    if (matrix[i][j] === 0) {
        return Infinity
    }
    if (matrix[i][j] === 9) {
        return 0
    }
    matrix[i][j] = 0
    const left = 1 + traverse(i, j-1, matrix)
    const up = 1 + traverse(i+1, j, matrix)
    const right = 1 + traverse(i, j+1, matrix)
    const down = 1 + traverse(i-1, j, matrix)
    matrix[i][j] = 1

    return Math.min(left, up, down, right)


}

function solve(lot) {
    const min = traverse(0, 0, lot)
    console.log(min)
}

const tt = [
    [1, 0, 0],
    [1, 0, 0],
    [1, 9, 1]
];


solve(tt)
