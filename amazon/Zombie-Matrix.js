function compareArray(a, b) {
  return JSON.stringify(a) === JSON.stringify(b)
}

const initialStateOne = [
  [0, 1, 1, 0, 1],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 1],
  [0, 1, 0, 0, 0],
]

const initialStateTwo = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
]

function allZombies(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) return false
    }
  }
  return true
}
function convertToZombie(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 3) matrix[i][j] = 1
    }
  }
}
function allHumans(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 1) return false
    }
  }
  return true
}
//1 zombie :'(
//0 human :)

function outofbounds(i, j, matrix) {
  const boundLimit = matrix.length
  const boundLimitTwo = matrix[0].length

  if (i > boundLimit - 1) return true
  if (j > boundLimitTwo-1) return true
  if (j < 0 || i < 0) return true
  return false
}

function convert(i, j, matrix) {
  if (!outofbounds(i, j, matrix)) {
    if(matrix[i][j]===0){
       matrix[i][j] = 3
    }
  }
  return
}
function infect(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 1) {
        convert(i + 1, j, matrix)
        convert(i, j + 1, matrix)
        convert(i - 1, j, matrix)
        convert(i, j - 1, matrix)
      }
    }
  }
}

function solve(matrix) {
  if (allHumans(matrix)) return -1

  let days = 0
  while(!allZombies(matrix)){
        infect(matrix)
        convertToZombie(matrix)
    days = days+1
  }
 
  return days
}
console.log(solve(initialStateTwo) === -1)
console.log(solve(initialStateOne) === 2)
