/*

TREASURE ISLAND I
You have a map that marks the location of a treasure island. Some of the map area has jagged rocks and dangerous reefs. Other areas are safe to sail in.
There are other explorers trying to find the treasure. So you must figure out a shortest route to the treasure island.
Assume the map area is a two dimensional grid, represented by a matrix of characters.
You must start from the top-left corner of the map and can move one block up, down, left or right at a time.
The treasure island is marked as ‘X’ in a block of the matrix. ‘X’ will not be at the top-left corner.
Any block with dangerous rocks or reefs will be marked as ‘D’. You must not enter dangerous blocks. You cannot leave the map area.
Other areas ‘O’ are safe to sail in. The top-left corner is always safe.
Output the minimum number of steps to get to the treasure.
e.g.
Input
[
[‘O’, ‘O’, ‘O’, ‘O’],
[‘D’, ‘O’, ‘D’, ‘O’],
[‘O’, ‘O’, ‘O’, ‘O’],
[‘X’, ‘D’, ‘D’, ‘O’],
]

Output from aonecode.com
Route is (0, 0), (0, 1), (1, 1), (2, 1), (2, 0), (3, 0) The minimum route takes 5 steps.
*/

let graph = [
['O', 'O', 'O', 'O'],
['D', 'O', 'D', 'O'],
['O', 'O', 'O', 'O'],
['X', 'D', 'D', 'O'],
]

function oob(i,j){
const constraintJ = graph.length 
const contraintI = graph[0].length

if (j >= constraintJ) return false
if (i >= contraintI) return false
if(j<0 || i < 0) return false

return true 
}

function recursive(i,j){
  //out of bounds
  if(!oob(i,j)) return Infinity
  if(graph[i][j]==='X') return 1
  if(graph[i][j]==='D') return Infinity
  graph[i][j]='D'
   const right = 1 + recursive(i,j+1)
   const down = 1 + recursive(i+1,j)
    const up = 1 + recursive(i,j-1)
    const left = 1 + recursive(i-1,j)
    graph[i][j]='O'
   return  Math.min(right,down,up,left)
}

function solve(){

console.log(recursive(0,0)-1)
}

solve()
