const input = [
    [7, 5, 3],
    [2, 0, 9],
    [4, 5, 9],
]

function outOfBounds(i, j) {
    if (i > input.length - 1) return true
    if (j > input[0].length - 1) return true
    if (i < 0 || j < 0) return true

    return false
}

function get(i, j) {
    return input[i][j]
}

//mutations.. I know :(
function set(i, j, value) {
    input[i][j] = value
}

function endOfPath(i, j) {
    return (i === input.length - 1 && j === input[0].length - 1)
}

function dfs(i, j, currentPath, paths) {
    if (outOfBounds(i, j)) return Infinity
    if (get(i, j) === Infinity) return Infinity
    const currentVal = get(i, j)
    set(i, j, Infinity)
    const newPath = [...currentPath, currentVal]
    if (endOfPath(i, j)) {
        paths.push(newPath)
        set(i, j, currentVal)

        return Infinity
    }
    dfs(i, j + 1, newPath, paths)
    dfs(i - 1, j, newPath, paths)
    dfs(i, j - 1, newPath, paths)
    dfs(i + 1, j , newPath, paths)
    set(i, j, currentVal)
    return 1
}

function solve() {
    const paths = []
    dfs(0, 0, [], paths)

    const mins = paths.map((arr) => {
        const sort = arr.sort((a, b) => a - b)
        return sort.shift()
    })

    const sorted = mins.sort((a, b) => b - a)
    return sorted.shift()
}

console.log(solve() === 3)
