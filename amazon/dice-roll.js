/*
Given N dices each face ranging from 1 to 6, return the minimum number
 of rotations necessary for each dice show the same face.
Notice in one rotation you can rotate the dice to the adjacent face.
 For example you can rotate the dice shows 1 to show 2, 3, 4, or 5.
  But to make it show 6, you need two rotations.

Example:
Input: [6, 5, 4]
Output: 2
Rotate 6 to 4, then rotate 5 to 4.

Input: [6, 6, 1]
Output: 2
Rotate 1 to 6, which needs two rotations.

Input: [6, 1, 5, 4]
Output: 3
Rotate 6 to 5, rotate 1 to 5, then rotate 4 to 5

*/

const dice=[
{
  value : 1,
  leftTurn: 4,
  righTurn: 5
},
{
  value : 2,
  leftTurn: 4,
  rightTurn: 3
},
{
  value : 3,
  leftTurn: 2,
  rightTurn: 5
},
{
  value : 4,
  rightTurn:2,
  leftTurn: 1
},
{
  value : 5,
  leftTurn: 1,
  rightTurn: 3
},
{
  value : 6,
  leftTurn : 2,
  rightTurn: 5 
}
] 

function findNode(target){
  return dice.find((side)=>side.value===target)
}

function findMinPath(target,node){
if(node.value===target) return 0

const leftTurn = 1+ findMinPath(target, node.leftTurn)
const rightTurn = 1+ findMinPath(target, node.righTurn)

return Math.min(leftTurn,righTurn)
  }
  
function turns(target, array){
    
    const turnArray = array.map((val)=> {
  const current = findNode(val)
  return findMinPath(target, current)
    } )
 
   const sorted = turnArray.sort((a,b)=>b-a)
  return sorted.shift()
  }

function solve(faces){
  const turnArray = faces.map((sideVal)=>turns(sideVal, faces))
  const sorted = turnArray.sort((a,b)=>b-a)
  return sorted.shift()
}

console.log(solve( [6, 5, 4])===2)
console.log(solve( [6, 6, 1])===2)
console.log(solve( [6, 1, 5, 4])===3)
