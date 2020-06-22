/*
https://aonecode.com/find-all-anagrams
 */

function solve(phrase, giantString) {
    //find available phrase
    //map with count
    //traverse through letters
    //if anagram save index
    const wordMap = {}
    phrase.split('').forEach((letter) => {
        const current = wordMap[letter]
        if (!(current)) {
            wordMap[letter] = 1
        } else {
            wordMap[letter] = current + 1
        }
    })

    const arr = giantString.split('')
    let resetMap = {}
    Object.assign(resetMap, wordMap)
    let wordArr = []
    const anagramLength = phrase.length
    let startIndex = 0
    const index = []
    let count = 0
    while (arr.length > 0) {
        const current = arr.shift()
        const mapValue = resetMap[current]
        if (mapValue===undefined) {
            if (anagramLength === wordArr.length) {
                index.push(startIndex)
            }
            wordArr = []
            Object.assign(resetMap, wordMap)

        } else {
            if (mapValue > 0) {
                if (wordArr.length === 0) {
                    startIndex = count
                }
                wordArr.push(current)
                resetMap[current] = mapValue - 1

            } else {
                if (anagramLength === wordArr.length) {
                    index.push(startIndex)
                    wordArr = []
                }
                Object.assign(resetMap, wordMap)
            }
        }
        count += 1
    }

    if (anagramLength === wordArr.length) {
        index.push(startIndex)
    }
    console.log(index)
}

const input = 'AB'
const str = 'ABCDBACDAB'
solve(input, str)
