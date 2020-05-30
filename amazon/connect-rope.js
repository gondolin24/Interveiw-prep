function insert(value, array){
  array.push(value)
  return array.sort((a,b)=>a-b)
}

function minHeapFromArray(array=[]){
  return array.sort((a,b)=>a-b)
}
function solve(array){

  let minHeap = minHeapFromArray(array)
  let sum = 0

  if(minHeap.length==1){
    return minHeap[0]
  }

  while(minHeap.length>1){
    const varA = minHeap.shift()
    const varB = minHeap.shift()
    const aggr = varA+ varB
    sum = aggr+ sum
    minheap = insert(aggr,minHeap)
  }

  return sum
}

console.log(solve([20,4,8,2])===54)
console.log(solve([1,2,5,10,35,89])===224)
console.log(solve([2,2,3,3])===20)
