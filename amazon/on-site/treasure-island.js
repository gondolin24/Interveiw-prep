const input =
    [
        ['S', 'O', 'O', 'S', 'S'],
        ['D', 'O', 'D', 'O', 'D'],
        ['O', 'O', 'O', 'O', 'X'],
        ['X', 'D', 'D', 'O', 'O'],
        ['X', 'D', 'D', 'D', 'O'],
    ]


function isOutOfBounds(i, j, map) {
    if (i < 0 || j < 0) return true
    return (i >= map.length || j >= map[0].length)
}

function sail(i, j, map) {

    if (isOutOfBounds(i, j, map)) {
        return Infinity
    }
    if (map[i][j] === 'D') {
        return Infinity
    }
    if (map[i][j] === 'X') {
        return 0
    }
    map[i][j] = 'D'
    const left = sail(i, j - 1, map) + 1
    const up = sail(i - 1, j, map) + 1
    const right = sail(i, j + 1, map) + 1
    const down = sail(i + 1, j, map) + 1
    map[i][j] = 'O'

    return Math.min(left, up, down, right)
}


function solve(map) {
    const startingPlaces = []
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map.length; j++) {
            if (map[i][j] === 'S') {
                startingPlaces.push([i, j])
                map[i][j] = 'O'
            }
        }
    }
    const sorted = startingPlaces.map((sCo) => {
        const [i, j] = sCo
        return sail(i, j, map)
    })
    .sort((a, b) => a - b)

    console.log(sorted.shift())
}

solve(input)
