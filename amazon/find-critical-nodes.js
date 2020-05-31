const edges = [[0,1], [0, 2], [1, 3], [2, 3], [2, 5], [5, 6], [3,4]]

function setStructure(){
    //get all values
    const number = edges.map((a)=>a.flat()).flat()
    const set = new Set()
    number.forEach((num)=>set.add(num))
    const arr = []
     set.forEach((number)=>{
        arr.push({
            value: number,
            connection: []
        })
    })
    return arr
}

console.log(setStructure())

function solve(){

    edges.forEach((arr)=>{

    })
}

