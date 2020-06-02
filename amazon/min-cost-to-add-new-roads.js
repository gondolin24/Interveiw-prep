function generateMatrix(numCities) {
    const matrix = []
    let row = []
    for (let i = 0; i < numCities; i++) {
        row.push(Infinity)
    }
    for (let i = 0; i < numCities; i++) {
        row = [...row]
        matrix.push(row)
    }
    return matrix
}

function get(i, j, matrix) {
    return matrix[i][j]
}

function set(i, j, matrix, value) {
    matrix[i][j] = value
}

function fillInData(matrix, nodeData) {
    nodeData.forEach((pair) => {
        const [a, b, cost] = pair
        set(a - 1, a - 1, matrix, 0)
        set(b - 1, b - 1, matrix, 0)

        //bi directional
        set(a - 1, b - 1, matrix, cost)
        set(b - 1, a - 1, matrix, cost)
    })
}

function cycleFormed(vertex, i, j) {
    const v1 = vertex.find((a) => a === i)
    const v2 = vertex.find((a) => a === j)

    return !!((v1) && (v2))
}


function findMinSpanningTree(matrix, nodeData, cities) {
    const sortedList = nodeData.sort((first, second) => {
        const [a, b, firstCost] = first
        const [aa, bb, secondCost] = second
        return firstCost - secondCost
    })
    const vertex = []
    let cost = 0
    let count = 0
    while (sortedList.length > 0) {
        const [i, j] = sortedList.shift()
        if (!cycleFormed(vertex, i, j)) {
            cost = cost + get(i - 1, j - 1, matrix)
            vertex.push(i)
            vertex.push(j)
            count  = count +1
        }
    }
    if(count<cities-1) return -1
    return cost
}

function solver(numCities, nodeData) {
    const matrix = generateMatrix(numCities)
    fillInData(matrix, nodeData)
    return findMinSpanningTree(matrix, nodeData, numCities)
}

let connections = [[1, 2, 3], [3, 4, 4],[3, 4, 4]]
let numCities = 4

console.log(solver(numCities, connections) === -1)
connections = [[1,2,5],[1,3,6],[2,3,1]]
numCities = 3
console.log(solver(numCities, connections) === 6)
