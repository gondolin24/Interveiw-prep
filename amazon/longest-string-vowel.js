function isVowel(char) {
    return 'aeiou'.includes(char)
}

function isLastVowel(array) {
    if (array.length === 0) return false
    return isVowel(array[array.length - 1])

}

function hasVowelsLeft(list) {
    if (list.length === 0) return false
    return list.filter((char) => isVowel(char)).length > 0
}

function getNextNode(array) {
    let current = null
    let count = 0
    while (array.length > 0 && current === null) {
        const char = array.shift()
        if (isVowel(char)) {
            current = {
                cost: count > 0 ? 1 : 0
            }
        }
        count = count + 1
    }
    return current
}


function insert(node, linkedList) {
    let current = linkedList

    while (current.next != null) {
        current = current.next
    }
    current.next = node
}

function derp(node, max) {
    let cost = node.cost
    let count = 1
    let current = node
    while (cost < 3 && count < max) {
        const next = current.next
        cost = cost + next.cost
        if (cost < 3) {
            count = count + 1
        }
        current = next
    }
    return count
}

function solve(string) {
    const arr = string.split('')
    const nodeList = []
    const finalSum = isLastVowel(arr) ? 0 : 1

    while (hasVowelsLeft(arr)) {
        const current = getNextNode(arr)
        nodeList.push(current)
    }

    const max = nodeList.length
    if (max === 0) return 0

    let linkedList = nodeList.shift()
    linkedList.cost = linkedList.cost+ finalSum
    while (nodeList.length > 0) {
        const current = nodeList.shift()
        if (nodeList.length === 0) {
            current.next = linkedList
        }
        insert(current, linkedList)
    }

    const sumArr = []
    let current = linkedList
    for (let i = 0; i < max; i++) {
        sumArr.push(derp(current, max))
        current = current.next
    }

    return sumArr.sort((a, b) => b - a).shift()
}
console.log(solve('earthproblem')===3)

console.log(solve('letsgosomewhere')===2)
//testCases
