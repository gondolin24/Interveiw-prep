/*
https://aonecode.com/amazon-online-assessment-partition-string
 */

function exists(set, array) {
    for (let i = 0; i < array.length; i++) {
        const current = array[i]
        if (set.has(current)) {
            return true
        }
    }
    return false
}

function solve(str) {
    const wordArray = str.split('')
    const arr = [...wordArray]

    const final = []
    let block = []
    let set = new Set()
    while (arr.length > 0) {
        const current = arr.shift()
        block.push(current)
        set.add(current)
        if (!exists(set, arr)) {
            final.push(block.join(''))
            block = []
            set.clear()
        }
    }
    console.log(final)
}

solve('baddacx')
