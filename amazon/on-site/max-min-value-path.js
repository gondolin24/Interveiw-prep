function isOutOfBounds(i, j, matrix) {
    if (i < 0 || j < 0) return true
    return i >= matrix.length || j >= matrix[0].length
}

function recurse(i, j, matrix, paths, currentPath) {
    if (isOutOfBounds(i, j, matrix)) return
    if (matrix[i][j] === Infinity) return
    if (i === 1 && j === 2) {
        paths.push(currentPath)
        return
    }

    const current = matrix[i][j]
    const nextPath = [...currentPath, current]
    matrix[i][j] = Infinity
    recurse(i, j + 1, matrix, paths, nextPath)
    recurse(i + 1, j, matrix, paths, nextPath)
    recurse(i, j - 1, matrix, paths, nextPath)
    recurse(i - 1, j, matrix, paths, nextPath)

    matrix[i][j] = current

}

function solve(matrix) {
    const paths = []
    recurse(0, 0, matrix, paths, [])
    const g = paths.map((arr) => {
        const sort = arr.sort((a, b) => a - b)
        return sort.shift()
    }).sort((a, b) => a - b);

    console.log(g.shift())
}

const input = [[7, 5, 3],
    [2, 0, 9],
    [4, 5, 9],];
solve(input)
