function areAllZombies(matrix) {
    const humanset = []
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                humanset.push([i, j])
            }
        }
    }
    return humanset
}

function areAllHumans(matrix) {
    let areAllHumans = true
    matrix.forEach((row) => {
        row.forEach((column) => {
            if (column === 1) {
                areAllHumans = false
            }
        })
    })
    return areAllHumans
}

function isOutOfBounds(i, j, matrix) {
    if (i < 0 || j < 0) return true
    return (i >= matrix.length || j >= matrix[0].length)
}

function isZombie(i, j, matrix) {
    if (isOutOfBounds(i, j, matrix)) return false

    return matrix[i][j] === 1
}

function set(i, j, matrix) {
    matrix[i][j] = 1
}

function infect(i, j, matrix) {
    return isZombie(i + 1, j, matrix) || isZombie(i, j - 1, matrix) || isZombie(i, j + 1, matrix) || isZombie(i - 1, j, matrix)
}


function humanDays(matrix) {
    let numDays = 0
    if (areAllHumans(matrix)) {
        return -1
    }

    let humanSet = areAllZombies(matrix)

    while (humanSet.length > 0) {
        const infectMet = []
        humanSet.forEach((current) => {
            const infected = infect(current[0], current[1], matrix)
            if (infected) {
                infectMet.push(current)
            }
        })

        infectMet.forEach((co) => {
            set(co[0], co[1], matrix)
        })

        humanSet = [...areAllZombies(matrix)]
        numDays += 1
    }
    return numDays
}

const input = [[0, 1, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0]]
console.log(humanDays(input))
