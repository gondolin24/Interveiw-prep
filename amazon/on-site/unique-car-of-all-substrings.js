function uniqeuChars(str) {
    const map = {}
    const strArry = str.split('')
    strArry.forEach((char) => {
        const current = map[char]
        if (current >= 0) {
            map[char] = current + 1
        } else {
            map[char] = 0
        }
    })

    return Object.keys(map).filter((char) => map[char] === 0).length

}

function solve(str) {

    const uniq = str.split('')
    const set = []
    for (let i = 0; i < uniq.length; i++) {
        const current = []
        for (let j = (i); j < uniq.length; j++) {
            current.push(uniq[j])
            set.push(current.join(''))
        }
    }


    console.log((Array.from(set.values()).map((a) =>uniqeuChars(a)).reduce((a, b) => a + b, 0)) % (Math.pow(9,10)+ 7))
}

solve('abc') //10
solve('ABA') //8
solve('leetcode') //92
