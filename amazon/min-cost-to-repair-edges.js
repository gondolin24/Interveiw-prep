function generateMatrix(numNodes){
    const row = []
    for(let i = 0;i<numNodes;i++){
        row.push(Infinity)
    }
    const matrix = []
    for(let i = 0;i<numNodes;i++){
       const nextNode = [...row]
        matrix.push(nextNode)
    }
    return matrix
}

function add(i,j,matrix,value){
    matrix[i][j]=value
    matrix[j][i]=value
    matrix[i][i]=0
    matrix[j][j]=0
}

function remove(i,j,matrix){
    matrix[i][j]= Infinity
    matrix[j][i]= Infinity
    matrix[i][i]= 0
    matrix[j][j]= 0
}


function vertexExits(i,j,matrix){
    const der = matrix[i-1][j-1]!==Infinity
    return der
}

function repair(edgesToRepair,matrix,numvertex,max) {
    edgesToRepair.forEach((a)=>{
        const [val,value] = a
        numvertex = numvertex-1
        remove(val-1,value-1,matrix)
    })

   const sortedEdges =  edgesToRepair.sort((a,b)=>{
        return a[2]-b[2]
    })
    let cost = 0
    while(sortedEdges.length>1){
        const [i,j,repairCost] = sortedEdges.shift()

        if(!vertexExits(i,j,matrix)&& numvertex< max-1){
            cost = cost+repairCost
            add(i-1,j-1,matrix, repairCost)
            numvertex = numvertex+1
        }
    }

    return cost
}
function solve(numNodes, edges, edgedToRepair) {
    const matrix = generateMatrix(numNodes)
    let numvertex = 0
    edges.forEach((edge)=>{
        const[a,b] = edge
        add(a-1,b-1,matrix,0)
        numvertex = numvertex+1
    })

    return repair(edgedToRepair,matrix,numvertex, numNodes)
}
let n = 5
let edgez  = [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]]
let repairMe= [[1, 2, 12], [3, 4, 30], [1, 5, 8]]

console.log(solve(n,edgez,repairMe)===20)
//
n = 6
edgez = [[1, 2], [2, 3], [4, 5], [3, 5], [1, 6], [2, 4]]
repairMe = [[1, 6, 410], [2, 4, 800]]
console.log(solve(n,edgez,repairMe)===410)

n = 6
edgez = [[1, 2], [2, 3], [4, 5], [5, 6], [1, 5], [2, 4], [3, 4]]
repairMe = [[1, 5, 110], [2, 4, 84], [3, 4, 79]]
console.log(solve(n,edgez,repairMe)===79)
