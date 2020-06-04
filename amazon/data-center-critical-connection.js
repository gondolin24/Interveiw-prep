function compare(a, b) {
    return JSON.stringify(a) === JSON.stringify(b)
}

function createMatrix(numNodes) {
    const matrix = []
    const row = []
    for (let i = 0; i < numNodes; i++) {
        row.push(Infinity)
    }
    for (let i = 0; i < numNodes; i++) {
        const nextRow = [...row]
        matrix.push(nextRow)
    }
    return matrix
}

createMatrix(4)

function get(matrix, i, j) {
    return matrix[i][j]
}

function getAllAvailableConnections(matrix) {
    const vertexs = []
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix.length; j++) {
            if ((j !== i) && get(matrix, i, j) !== Infinity) {
                vertexs.push([i, j])
            }
        }
    }
    return vertexs
}

function insert(matrix, i, j) {
    matrix[i][i] = 0
    matrix[j][j] = 0
    matrix[i][j] = 0
    matrix[j][i] = 0
}

function remove(matrix, i, j) {
    matrix[i][j] = Infinity
    matrix[j][i] = Infinity
}

function doesVertexExist(matrix, i, j) {
    const isI = matrix[i].filter((k) => k === 0)
    const isJ = matrix[j].filter((k) => k === 0)
    return (isI.length > 1 && isJ.length > 1) && (matrix[i][j] !== Infinity)
}

function doesCycleExist(matrix) {
    const verTex = getAllAvailableConnections(matrix)
    //travel ->
    const set = new Set()
    verTex.forEach((vertex) => {
        const [a, b] = vertex
        set.add(a)
        set.add(b)
    })
    return verTex.length >= set.size
}

function minSpanningTree(matrix, numNodes) {
    const vertexs = getAllAvailableConnections(matrix)
    let count = 0
    const tempMatrix = createMatrix(numNodes)
    while (vertexs.length > 0) {
        const [i, j] = vertexs.shift()
       if(!doesVertexExist(tempMatrix, i, j))
        {
            insert(tempMatrix, i, j)
            if (doesCycleExist(tempMatrix, numNodes)) {
                remove(tempMatrix, i, j)
            } else {
                count += 1
            }
        }
    }

    return count === (numNodes - 1)

}


function solve(nodes, connection) {
    const matrix = createMatrix(nodes)

    connection.forEach((connection) => {
        const [i, j] = connection
        insert(matrix, i - 1, j - 1)
    })

    const vertexs = getAllAvailableConnections(matrix)
    const critical = []
    vertexs.forEach((connection) => {
        const [i, j] = connection
        remove(matrix, i, j)
        if (!minSpanningTree(matrix, nodes)) {
            critical.push([i + 1, j + 1])
        }
        insert(matrix, i, j)
    })

    return critical
}

let serversNum = 4
let connections = [[1, 2], [1, 3], [3, 2], [3, 4]]
let expected = [[3, 4]]

console.log(compare(expected, solve(serversNum, connections)))
