function compare(a, b) {
    return JSON.stringify(a) === JSON.stringify(b)
}


function isDifferentString(arr, char) {
    const val = arr.filter((c) => c === char)
    return val.length === 0
}

function insertMap(map, str) {
    if (!(map[str])) {
        map[str] = 1
    } else {
        map[str] = map[str] + 1
    }
}

function solve(str) {
    const stringArr = str.split('')
    const strMap = {}

    let currentStr = []
    while (stringArr.length > 0) {
        const currentChar = stringArr.shift()
        //if empty
        if (currentStr.length === 0) {
            currentStr.push(currentChar)
        } else {
            if (isDifferentString(currentStr, currentChar)) {
                const subString = currentStr.join((''))
                insertMap(strMap, subString)
                currentStr = []
                currentStr.push(currentChar)
            } else {
                currentStr.push(currentChar)
            }
        }
    }
    if (currentStr.length > 0) {
        const subString = currentStr.join((''))
        insertMap(strMap, subString)
    }

    return Object.keys(strMap).filter((key) => {
        return strMap[key] === 1
    })
}

let input = 'bbeadcxede'
let expected = ['bb', 'a', 'c', 'x']
let actual = solve(input)
console.log(compare(expected, actual))

input = 'baddacxb'
expected = ['dd', 'c', 'x']
actual = solve(input)
console.log(compare(expected, actual))
