class WordFinder {
    constructor(words, dictionary) {
        this.words = words.split('')
        this.dictionary = dictionary
    }

    findNextWord() {
        const word = this.dictionary.shift()

        const currentStream = []
        let found = false
        while (this.words.length > 0 && !found) {
            const current = this.words.shift()
            currentStream.push(current)

            if (currentStream.join('').includes(word)) {
                console.log(word)
                found = true
            }
        }
        if (!found) console.log(null)

    }
}

let wf = new WordFinder('aahelloaaworldaa',['hello','world'])
wf.findNextWord()
wf.findNextWord()
wf.findNextWord()

wf = new WordFinder('helloworld',['hello','world','hell'])
wf.findNextWord()
wf.findNextWord()
wf.findNextWord()

wf = new WordFinder('helloworld',['hell','hell'])
wf.findNextWord()
wf.findNextWord()
wf.findNextWord()
