function isModThree(pointer, nextPointer, array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        if (i !== pointer && i !== nextPointer) {
            sum = sum + array[i]
        }
    }
    return sum % 3 === 0
}

function loadBalance(input) {
//min length = 5
    if (input.length < 5) {
        return false
    }

    let loadPointer = false


    for (let i = 1; i < input.length - 3; i++) {
        let startPoint = i
        let endPointer = input.length - 2
        while (startPoint + 1 < endPointer) {
            if (isModThree(startPoint, endPointer, input)) {
                loadPointer = true
                break
            }
            endPointer -= 1
        }
    }

    return loadPointer
}

let input = [2, 4, 5, 3, 3, 9, 2, 2, 2]
//test cases
let actual = loadBalance(input)
console.log(actual === true)

input = [1, 1, 1, 1]
actual = loadBalance(input)
console.log(actual === false)
