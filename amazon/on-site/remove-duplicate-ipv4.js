/*
https://aonecode.com/amazon-onsite-remove-duplicated-ipv4-addresses
 */
class Node {
    constructor() {
        //could use array
        this.map = {}
        this.endOfWord = false
    }


}

class TrieDataStruct {
    constructor() {
        this.root = new Node()
    }

    insert(word) {
        let currentNode = this.root
        const wordArray = word.split('')
        let currentChar = wordArray.shift()
        while ((currentNode.map[currentChar]) && wordArray.length > 0) {
            currentNode = currentNode.map[currentChar]
            currentChar = wordArray.shift()

        }
        while ((currentChar)) {
            currentNode.map[currentChar] = new Node()
            currentNode = currentNode.map[currentChar]
            currentChar = wordArray.shift()
        }
        currentNode.endOfWord = true

    }

    search(word) {
        let currentNode = this.root
        const wordArray = word.split('')
        let currentChar = wordArray.shift()
        while ((currentNode.map[currentChar]) && wordArray.length > 0) {
            currentNode = currentNode.map[currentChar]
            currentChar = wordArray.shift()
        }
        const lastNode = currentNode[currentChar]
        return wordArray.length === 0 && currentNode.endOfWord && lastNode
    }

    delete(word) {
        let currentNode = this.root
        const wordArray = word.split('')
        let currentChar = wordArray.shift()
        const lastTrue = []
        let lastParent = this.root
        let lastChar = null
        while ((currentNode.map[currentChar]) && wordArray.length > 0) {
            const tempChar = wordArray.shift()
            if (currentNode.endOfWord) {
                lastParent = currentNode
                lastChar = tempChar
            }
            currentNode = currentNode.map[currentChar]
            currentChar = tempChar
            lastChar = currentChar
        }

        if (Object.keys(currentNode.map).length > 0) {
            currentNode.map[currentChar].endOfWord = false
        } else {
            if (Object.keys(lastParent.map).length <= 1) {
                lastParent.map = {}
            } else {
                delete lastParent.map[lastChar]
            }
        }
    }
}


function solve(wordArray) {
    const trie = new TrieDataStruct()

    const arr = []
    wordArray.forEach((word) => {
        if (!trie.search(word)) {
            arr.push(word)
            trie.insert(word)
        }
    })
    trie.delete('abcd')
    console.log(arr)
}

const input = ["abcd", "abcde"]
solve(input)
