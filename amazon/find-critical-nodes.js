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


function get(matrix, i, j) {
    return matrix[i][j]
}

function remove(i, j, matrix) {
    matrix[i][j] = Infinity
    matrix[j][i] = Infinity
}

function insert(i, j, matrix, val) {
    matrix[i][j] = val
    matrix[j][i] = val
    matrix[j][j] = 0
    matrix[i][i] = 0
}

function getAllVertex(current, numNodes, matrix) {
    const vertexes = []
    for (let i = 0; i < numNodes; i++) {
        if (current !== i) {
            const value = get(matrix, current, i)
            if (value !== Infinity) {
                vertexes.push(i)
            }
        }
    }
    return vertexes
}


function getAllVertexes(matrix) {
    const vertex = []
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i + 1; j < matrix.length; j++) {
            if (get(matrix, i, j) !== Infinity) {
                vertex.push([i, j])
            }

        }
    }
    return vertex
}

function ifCycle(matrix) {
    const verTex = getAllVertexes(matrix)
    //travel ->
    const set = new Set()
    verTex.forEach((vertex) => {
        const [a, b] = vertex
        set.add(a)
        set.add(b)
    })
    return verTex.length >= set.size
}

//is there a path from (u-v
function doesEdgeExists(i, j, matrix) {
    const isI = matrix[i].filter((t) => t === 0)
    const isj = matrix[j].filter((t) => t === 0)
    return (isI.length > 1 && isj.length > 1) && (get(matrix, i, j) !== Infinity)
}

function minimumSpanningTree(matrix, numEdges) {
//get all available vertex
    const verTex = getAllVertexes(matrix)
    const tempMatrix = generateMatrix(numEdges)
    let count = 0

    while (verTex.length > 0 && count < numEdges - 2) {
        const [i, j] = verTex.shift()
        if (!doesEdgeExists(i, j, tempMatrix)) {
            insert(i, j, tempMatrix, 0)
            if (!ifCycle(tempMatrix)) {
                count = count + 1
            } else {
                remove(i,j, tempMatrix)
            }
        }
    }
    return count === numEdges - 2
}

function solve(numNodes, edges) {
    const matrix = generateMatrix(numNodes)
    let numEdges = 0
    edges.forEach((edge) => {
        const [i, j] = edge
        if (get(matrix, i, j) === Infinity) {
            insert(i, j, matrix, 0)
            numEdges = numEdges + 1
        }
    })

    const criticalNodes = []
    //find critical nodes

    for (let i = 0; i < numNodes; i++) {
        const currentNodes = 0
        const connectedVertexes = getAllVertex(i, numNodes, matrix)
        //find all vertex
        connectedVertexes.forEach((v) => {
            remove(i, v, matrix)
            numEdges = numEdges - 1
        })
        if (!minimumSpanningTree(matrix, numNodes)) {
            criticalNodes.push(i)
        }

        connectedVertexes.forEach((v) => {
            insert(i, v, matrix, 0)
            numEdges = numEdges + 1
        })
    }

    return criticalNodes
}

function compareArray(a, b) {
    return JSON.stringify(a) === JSON.stringify(b)
}

let edgez = [[0, 1], [0, 2], [1, 3], [2, 3], [2, 5], [5, 6], [3, 4]]
let numNoe = 7
let expected = [2, 3, 5]
let actual = solve(numNoe, edgez)
console.log(compareArray(expected, actual))

edgez = [[2, 3], [3, 1], [3, 4], [3, 6], [6, 7], [6, 0], [6, 5]]
numNoe = 8
expected = [3, 6]
actual = solve(numNoe, edgez)
console.log(compareArray(expected, actual))

