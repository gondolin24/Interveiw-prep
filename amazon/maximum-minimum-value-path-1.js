const input = [
    [7, 5, 3],
    [2, 0, 9],
    [4, 5, 9]
]

function get(i, j) {
    return input[i][j]
}

function outOfBounds(i, j) {
    if (j > input.length - 1) return true
    if (i > input[0].length - 1) return true
    return (i < 0 || j < 0)
}

function target(i, j) {
    return i === input.length - 1 && j === input.length - 1
}

function recurse(i, j) {
    if (outOfBounds(i, j)) return null
    if (target(i, j)) return {
        value: get(i, j),
        down: null,
        left: null
    }
    const current = {
        value: get(i, j),
        down: recurse(i + 1, j),
        left: recurse(i, j + 1)
    }
    return current
}

function dfs(current, currentPath, paths) {
    if (current === null) return
    const value = current.value
    const newPath = [...currentPath, value]

    if (current.down == null && currentPath.left == null) {
        paths.push(newPath)
    }
    dfs(current.down, newPath, paths)
    dfs(current.left, newPath, paths)
}

function solve() {
    const head = recurse(0, 0)
    const paths = []
    const currentPath = [head.value]
    dfs(head, currentPath, paths)
    const pathMins = paths.map((array)=>{
        const sort = array.sort((a,b)=>a-b)
        return sort.shift()
    })
    const maxOfMins = pathMins.sort((a,b)=>b-a)

    return maxOfMins.shift()
}

console.log(solve() === 3)
