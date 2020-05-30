const lot = [
    [1, 0, 0],
    [1, 0, 0],
    [1, 9, 1]
]

const iConstraint = lot.length -1
const jConstrainer = lot[0].length -1
function outOfBounds(i,j){
    if(i>iConstraint) return true
    if(j>jConstrainer) return true
    return (i<0 || j<0)
}
function get(i,j){
    return lot[i][j]
}
function recurse(i,j){
    if(outOfBounds(i,j)) return Infinity
    if(get(i,j)===0) return Infinity
    if(get(i,j)===9) return 0
    lot[i][j]=0
    const left = 1 + recurse(i+1,j)
    const right = 1+ recurse(i,j+1)
    const up = 1 + recurse(i-1,j)
    const down = 1 + recurse(i,j-1)
    lot[i][j]=1

    return Math.min(left, right, down, up)
}

function solve(){
    return recurse(0,0)
}
console.log(3===solve())
