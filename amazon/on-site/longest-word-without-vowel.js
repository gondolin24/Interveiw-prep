/*
https://aonecode.com/amazon-online-assessment-oa2-longest-string-made-up-of-only-vowels
 */

function isVowel(char) {
    const set = new Set(['a', 'e', 'i', 'o', 'u'])
    return set.has(char)
}

function getMax(node, target, l) {
    let count = 0
    if (node.cost === 0) {
        return -Infinity
    }
    let current = node
    let cost = 0
    while (cost < target && count <= l) {
        const curCost = current.cost
        cost = curCost + cost
        current = current.next
        count += 1
    }

    return count

}

function solve(srt, k) {
    const arr = srt.split('')
    let root = null
    let isPreviousVowel = isVowel(srt[srt.length - 1])
    let current = null
    let size = 0
    const nodeArray = []
    for (let i = 0; i < arr.length; i++) {
        const currentChar = arr[i]
        const newCost = isPreviousVowel ? 0 : 1
        if (isVowel(currentChar)) {
            if (root === null) {
                root = {cost: newCost, next: null}
                current = root
            } else {
                const newNode = {cost: newCost}
                current.next = newNode
                current = newNode
            }
            size += 1
            nodeArray.push(current)
            isPreviousVowel = true
        } else {
            isPreviousVowel = false
        }
    }
    current.next = root
    //traverse through linkedList

    const g = nodeArray.map((n) => getMax(n, k, size)).sort((a, b) => b - a)
    console.log(g.shift())
}

solve('letsgosomewhere',2)
