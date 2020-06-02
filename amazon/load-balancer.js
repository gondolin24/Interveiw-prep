function doesItBalance(array, i, j) {
    if (i === j) {
        return false
    }
    const temp = [...array]
    temp.splice(i, 1)
    temp.splice(j - 1, 1)
    const sum = temp.reduce((a, b) => a + b, 0)
    return (sum % 3) === 0
}


function solve(array) {
    let flag = false
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (doesItBalance(array,i, j)) {
                flag = true
            }
        }
    }
    return flag
}

console.log(solve([2, 4, 5, 3, 3, 9, 2, 2, 2])===true)
console.log(solve([1, 1, 1, 1])===false)
