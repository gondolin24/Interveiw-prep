function isOutOfBounds(i, j, map) {
    if (i < 0 || j < 0) return true
    return (i >= map.length || j >= map[0].length)

}

function sail(i, j, map) {
    if (isOutOfBounds(i, j, map)) return Infinity

    if (map[i][j] === 'D') return Infinity

    if (map[i][j] === 'X') return 0

    map[i][j] = 'D'

    const l = 1+ sail(i, j + 1, map)
    const d = 1+ sail(i + 1, j, map)
    const r = 1+ sail(i, j - 1, map)
    const u = 1+ sail(i - 1, j, map)

    map[i][j] = 'O'

    return Math.min(l, d, r, u)

}

function solve(map) {
    const yy = sail(0, 0, map)
    console.log(yy)
}

const Input = [
    ['O', 'O', 'O', 'O'],
    ['D', 'O', 'D', 'O'],
    ['O', 'O', 'O', 'O'],
    ['X', 'D', 'D', 'O'],
];
solve(Input)
