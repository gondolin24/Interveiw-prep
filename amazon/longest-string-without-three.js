function bucketsRemain(struct) {
    const array = Object.keys(struct).map((key) => struct[key])
    return array.reduce((a, b) => a + b, 0) > 0
}

function getKeys(struct) {
    let max = 0
    let min = Infinity
    let maxKey = null
    let minKey = null
    Object.keys(struct).forEach((key) => {
        const amount = struct[key]
        if (amount > max) {
            max = amount
            maxKey = key
        }

        if (amount < min && amount >= 1) {
            min = amount
            minKey = key
        }
    })
    if (maxKey === minKey) {
        return {
            maxKey,
            minKey: null
        }
    }
    return {
        maxKey,
        minKey
    }
}

function otherEmpty(struct) {
    const others = Object.keys(struct).filter((k) => struct[k] > 0)
    return others.length === 1
}

function solve(a, b, c) {
    const newString = []
    let struct = {
        'a': a,
        'b': b,
        'c': c
    }

    while (bucketsRemain(struct)) {

        const {minKey, maxKey} = getKeys(struct)
        if (struct[maxKey] > 1) {
            newString.push(maxKey)
            newString.push(maxKey)
            struct[maxKey] = struct[maxKey] - 2
        } else {
            newString.push(maxKey)
            struct[maxKey] = struct[maxKey] - 1
        }

        if (minKey !== null) {
            newString.push(minKey)
            struct[minKey] = struct[minKey] - 1
        } else {
            break
        }

    }


    return newString.length
}

console.log(solve(1, 1, 8)===8)
console.log(solve(1, 2, 3)===6)

