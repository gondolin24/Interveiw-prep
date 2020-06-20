function isOutOfBounds(i, j, matrix) {
    if (i < 0 || j < 0) return true
    return i >= matrix.length || j >= matrix[0].length
}

function pathFinder(i, j, matrix, target, paths, currentPath) {
    if (isOutOfBounds(i, j, matrix)) {
        return
    }
    if (i === target[0] && j === target[1]) {
        paths.push(currentPath)
        return
    }
    const cPath = [...currentPath]
    cPath.push(matrix[i][j])
    pathFinder(i + 1, j, matrix, target, paths, cPath)
    pathFinder(i, j + 1, matrix, target, paths, cPath)

}


function solve(matrix, start, target) {
    const paths = []
    pathFinder(start[0], start[1], matrix, target, paths, [])
    const minMAth = paths.map((path) => {
        const sorted = path.sort((a, b) => a - b)
        return sorted.shift()
    }).sort((a, b) => b - a)
    return minMAth.shift()
}

const matrix = [
    [7, 5, 3],
    [2, 0, 9],
    [4, 5, 9]
]

console.log(solve(matrix, [0, 0], [2, 2]) === 3)
