function isVowel(char) {
    return 'aeiou'.includes(char)
}

function isPreviousVowel(index, arr) {
    if (index < 0) {
        return isVowel(arr[arr.length - 1])
    } else {
        return isVowel(arr[index])
    }
}

function getList(array) {
    let circularLinkedList = []
    for (let i = 0; i < array.length; i++) {
        const current = array[i]
        if (isVowel(current)) {
            const cost = isPreviousVowel(i-1, array) ? 0 : 1
            circularLinkedList.push(cost)
        }
    }
    return circularLinkedList
}

function findMax(index, array) {
    const arrayLen = array.length
    let cost = array[index]
    let count = 1
    let i = index
    while (count < arrayLen && cost < 3) {
        const next = (i + 1) % arrayLen
        cost = cost + array[next]
        if (cost < 3) {
            count = count + 1
        }
        i = next
    }
    return count
}

function solve(str) {
    const strArray = str.split('')
    const circularLinkedList = getList(strArray)
    let max = 0
    for (let i = 0; i < circularLinkedList.length; i++) {
        const current = findMax(i, circularLinkedList)
        if (current > max) {
            max = current
        }
    }
    return max
}

console.log(solve('earthproblem') === 3)

console.log(solve('letsgosomewhere') === 2)
//testCases
