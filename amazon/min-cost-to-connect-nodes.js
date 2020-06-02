function addToMatrix(i,j,matrix,value){

    // bi direction
    matrix[i][j] = value
    matrix[j][i] = value
    //midpoint
    matrix[i][i] = 0
    matrix[j][j] = 0
}
function generateMaxtrix(numNodes){
    const matrix = []
    const row  = []
    for(let i = 0;i<numNodes;i++){
        row.push(Infinity)
    }
    for(let i = 0;i<numNodes;i++){
       const nextRow = [...row]
        matrix.push(nextRow)
    }
    return matrix
}


function doesLinkExist(i,j,nodes, matrix){
    const isIinPath = nodes.has(i)
    const isJinPath = nodes.has(j)
    const isThereALink = matrix[i-1][j-1]===Infinity
    return (isIinPath && isJinPath&& isThereALink)
}

function minSpanningTree(newEdges, matrix,nodesInPath, maxNodes ){
    let cost = 0
    //sort new Edges
    const sorted = newEdges.sort((firstEdge, secondEdge, )=>{
        return firstEdge[2] - secondEdge[2]
    })
    let count = nodesInPath.length
    while(sorted.length>0){
        const current = sorted.shift()
        const [i,j,currentCost] = current
        if(!doesLinkExist(i,j,nodesInPath, matrix)){
            cost = cost + currentCost
            nodesInPath.add(i)
            nodesInPath.add(j)
            count = count + 1
        }
    }

    if(nodesInPath< (maxNodes-1)) return -1
    return cost
}

function solve(numNodes, edges, newEdges) {
    //generateMatrix
    const matrix = generateMaxtrix(numNodes)
    const nodes = new Set()
    edges.forEach((vertex)=>{
        const [i,j] = vertex
        addToMatrix(i,j,matrix,0)
        nodes.add(i)
        nodes.add(j)
    })

return minSpanningTree(newEdges,matrix,nodes,numNodes)
}
const numNodes = 6
const edges = [[1, 4], [4, 5], [2, 3]]
const newEdges = [[1, 2, 5], [1, 3, 10], [1, 6, 2], [5, 6, 5]]
console.log(solve(numNodes,edges,newEdges)===7)
