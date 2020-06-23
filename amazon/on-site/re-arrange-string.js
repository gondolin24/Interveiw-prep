class PriorityQueue {
    constructor() {
        this.q = []
    }

    insert(node) {
        const temp = [...this.q, node]
        this.q = temp.sort((a, b) => b.left - a.left)
    }

    get() {
        return this.q.shift()
    }

    empty() {
        return this.q.length === 0
    }

    size() {
        return this.q.length
    }

    flush() {
        this.q = []
    }
}


function solve(str, k) {
//construct nodes
    const pq = new PriorityQueue()
    const map = {}
    str.split('').forEach((letter) => {
        const current = map[letter]
        if (!(current)) {
            const value = {
                val: letter,
                left: 1
            }
            map[letter] = value

        } else {
            current.left = current.left + 1
            map[letter] = current
        }
    })

    Object.keys(map).forEach((key) => {
        pq.insert(map[key])
    })

    let currentSting = []
    let currentBlock = []
    let currentSet = new Set()
    while (!pq.empty()) {
        const addLater = []
        let next = null
        while (!pq.empty() && (next === null)) {
            const current = pq.get()
            if (!currentSet.has(current.val)) {
                next = current
                currentSet.add(next.val)
            } else {
                addLater.push(current)
            }
        }
        if (next === null) {
            return ''
        } else {
            const count = next.left - 1
            currentBlock.push(next.val)
            if (count > 0) {
                next.left = count
                pq.insert(next)
            }

        }
        addLater.forEach((n) => pq.insert(n))

        if (currentBlock.length === k) {
            currentSting = [...currentSting, ...currentBlock]
            currentBlock = []

            currentSet.clear()
        }
    }
    return [...currentSting, ...currentBlock].join('')

}

console.log(solve('aabb', 2))
console.log(solve('aaaa', 2))

