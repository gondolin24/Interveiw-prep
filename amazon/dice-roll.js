/*

Given N dices each face ranging from 1 to 6, return the minimum number of rotations necessary for each dice show the same face.
Notice in one rotation you can rotate the dice to the adjacent face. For example you can rotate the dice shows 1 to show 2, 3, 4, or 5. But to make it show 6, you need two rotations.

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
  value: 1,
  topTurn:4,
  bottomTurn: 3,
  leftTurn: 5,
  rightTurn: 2 
},
{
  value: 2,
    topTurn:3,
  bottomTurn: 4,
  leftTurn: 6,
  rightTurn: 1 
},
{
  value: 3,
  topTurn:1,
  bottomTurn: 6,
  leftTurn: 2,
  rightTurn: 5 
},
{
  value: 4,
    topTurn:6,
  bottomTurn: 1,
  leftTurn: 2,
  rightTurn: 5 
},
{
  value: 5,
    topTurn:4,
  bottomTurn: 3,
  leftTurn: 1,
  rightTurn: 6 
},
{
  value: 6,
    topTurn:3,
  bottomTurn: 4,
  leftTurn: 5,
  rightTurn: 2 
},
{
  value: 7,
    topTurn:0,
  bottomTurn: 0,
  leftTurn: 0,
  rightTurn: 0 
}
]

function findNode(target){
  const defaultNode = {
    value: 7
  }
const current = dice.find((o)=>o.value===target)
return (current)? current: defaultNode

}

function findMinPath(target, node){
  //dice can move 4 ways
if(node.value===target) return 0
if(node.value===7) return Infinity

  let tempNode = {}
  Object.assign(tempNode, node);
 tempNode.value = 7
dice[node.value-1] = tempNode

  const topTurn = 1 + findMinPath(target, findNode(tempNode.topTurn))
   const rightTurn = 1 + findMinPath(target, findNode(tempNode.rightTurn))
   const bottomTurn = 1 + findMinPath(target, findNode(tempNode.bottomTurn))
  const leftTurn = 1 + findMinPath(target, findNode(tempNode.leftTurn))
  dice[node.value-1] = node

  return Math.min(topTurn,rightTurn,leftTurn,bottomTurn)
}
//test cases
console.log(findMinPath(2, findNode(6))==1)
console.log(findMinPath(2, findNode(5))==2)

//find min turn sum for an array
function sum(target, array){
const sumArray = array.map((val)=>findMinPath(target, findNode(val)))
return sumArray.reduce((a,b)=>a+b,0)
}

console.log(sum(2,[6,5])==3)
//find the min

function solve(array){
const minArray = array.map((target)=>{
  return sum(target, array)
})
const sorted = minArray.sort((a,b)=>a-b)
return sorted.shift()
}
console.log(solve([6,5,4])===2)
console.log(solve([6,6,1])===2)
console.log(solve([6,1,5,4])===3)
