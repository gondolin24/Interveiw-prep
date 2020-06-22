/*
https://aonecode.com/amazon-online-assessment-find-substrings
 */

function solve(str) {
    const metaData = {}
    const arr = str.split('')
    let current = []
    while (arr.length > 0) {
        const char = arr.shift()
        if (current.length === 0) {
            current.push(char)
            metaData[char] = []

        } else {
            if (char === current[0]) {
                current.push(char)
            } else {
                const substring = current.join('')
                const currentArr = metaData[current[0]]
                metaData[current[0]] = [...currentArr, substring]
                if (!(metaData[char])) {
                    metaData[char] = []

                }
                current = [char]
            }
        }
    }
    if (current.length > 0) {
        const substring = current.join('')
        const currentArr = metaData[current[0]]
        metaData[current[0]] = [...currentArr, substring]
    }
    const array = Object.keys(metaData).map((key) => metaData[key]).filter((a) => a.length === 1)
    console.log(array.flat())
}

solve('bbeadcxede') //bb,a,c,x
solve('baddacxb') //dd,c,x
