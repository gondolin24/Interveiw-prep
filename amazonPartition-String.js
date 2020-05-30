function compareArray(a, b) {
  return JSON.stringify(a) === JSON.stringify(b)
}


function phraseExist(stringArray, partition){
 let set = new Set()
 stringArray.forEach((l)=>set.add(l))
 set.add(stringArray) 
 let flag = false
  set.forEach((letter)=>{
   
    if(partition.find((l)=>l===letter)){
      flag=true
    }
  })
return flag
}

function solve(phrase){
  const letterArray = phrase.split('')
  let arr = []
  let current = [...letterArray.shift()]
  while(letterArray.length>0){
    if(phraseExist(current, letterArray)){
      current= [...current,...letterArray.shift()]
    }else{
      arr.push(current.join(''))
      current = [...letterArray.shift()]
    }
  if(letterArray.length===0){
       arr.push(current.join(''))
  }
  }
  return arr
}

console.log(compareArray(solve('baddacx'),['b','adda','c','x']))
console.log(compareArray(solve('bbeadcxede'),['bb','eadcxede']))
