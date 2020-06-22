/*
https://aonecode.com/amazon-interview-questions/Word-Search-Longest-Word-in-Matrix
 */
function isOutOfbounds(i, j, matrix) {
    if (i < 0 || j < 0) return true
    return (i >= matrix.length || j >= matrix[0].length)
}

function traverse(i, j, matrix, foundWords, wordArray, target) {

    if (wordArray.length === 0) {
        foundWords.add(target)
        return
    }
    if (isOutOfbounds(i, j, matrix)) return;
    const nextLetter = wordArray.shift()
    if (matrix[i][j] === '1') return
    if (matrix[i][j] !== nextLetter) return

    matrix[i][j] = '1'
    traverse(i - 1, j, matrix, foundWords, [...wordArray], target)
    traverse(i, j - 1, matrix, foundWords, [...wordArray], target)
    traverse(i + 1, j, matrix, foundWords, [...wordArray], target)
    traverse(i, j + 1, matrix, foundWords, [...wordArray], target)
    matrix[i][j] = nextLetter


}

function findWords(matrix, wordMap, foundWords) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            const current = matrix[i][j]
            const wordsAvailable = wordMap[current]
            if ((wordsAvailable)) {
                wordsAvailable.forEach((arr) => {
                    traverse(i, j, matrix, foundWords, [...arr], arr.join(''))
                })
            }
        }
    }
}

function solve(matrix, words) {
//map oof words and list
    const map = {}
    words.forEach((word) => {
        const arr = word.split('')
        const key = arr[0]
        const current = map[key]
        if (!current) {
            map[key] = [arr]
        } else {
            map[key] = [...current, arr]

        }
    })
    const wordsFound = new Set()
    findWords(matrix, map, wordsFound)
    let maxArr = []
    let max = -Infinity

    Array.from(wordsFound.values()).forEach((word) => {
        const l = word.length
        if (l > max) {
            max = l
            maxArr = [word]
        } else {
            if (l === max) {
                maxArr.push(word)
            }
        }
    })
    console.log(maxArr)
}

const input = [
    ['I', 'R', 'G', 'L', 'U'],
    ['P', 'A', 'C', 'E', 'F'],
    ['P', 'O', 'N', 'O', 'D'],
    ['L', 'E', 'E', 'C', 'E'],
    ['E', 'G', 'A', 'N', 'T']
]
const wordList = ['CONFIDENT', 'APPLE', 'AONECODE', 'ELEGANT', 'GRACEFUL', 'DELIGHTFUL']

solve(input, wordList)
