function compareArray(a,b){
  return JSON.stringify(a)=== JSON.stringify(b)
}

const map = [
['S', 'O', 'O', 'S', 'S'],
['D', 'O', 'D', 'O', 'D'],
['O', 'O', 'O', 'O', 'X'],
['X', 'D', 'D', 'O', 'O'],
['X', 'D', 'D', 'D', 'O'],
]

function getAllStartingLocations(){
const array = []
for(let i = 0;i<map.length;i++){
  for(let j = 0; j<map[0].length;j++){
      if(map[i][j]==='S') array.push({
        i,
        j
      })
  }
}
return array
}

 let testExpected = [
   {i:0,
   j:0},
   {
     i:0,
     j:3
   },
   {
     i:0,
     j:4
   }
 ]
console.log(compareArray(testExpected , getAllStartingLocations()))

function isOutOfBounds(i,j){
  const iLimit =  map.length
  const jLimit = map[0].length
  if(i>(iLimit-1)) return true
  if(j>(iLimit-1)) return true
  if(i<0 || j <0) return true

  return false
}

function sail(i,j){
  if (isOutOfBounds(i,j)) return Infinity
 
  if(map[i][j]==='D') return Infinity

  if(map[i][j]==='X') return 0

  map[i][j]='D'
  const left = 1+ sail(i,j+1)
  const down = 1+ sail(i+1,j)
  const right = 1+ sail(i,j-1)
  const up = 1+ sail(i-1,j)
   map[i][j]='O'
  return Math.min(left,down,right,up)
}

function solve(){
  const startSpots = getAllStartingLocations()
  const arr = startSpots.map((position)=>sail(position.i,position.j))
  arr.sort((a,b)=>a-b)
  return arr.shift()
}

console.log(solve()===3)

