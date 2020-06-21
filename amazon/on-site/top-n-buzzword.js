function countUp(array, map) {

    array.forEach((word) => {
        Object.keys(map).forEach((toy) => {
            if (word.includes(toy)) {
                const current = map[toy]
                current.count = current.count + 1
                map[toy] = current
            }
        })
    })
}

function solve(quotes, toys, top) {
    const map = {}
    toys.forEach((toy) => {
        map[toy] = {
            k: toy,
            count: 0
        }
    })

    const quoteArray = quotes.map((quote) => quote.split(''))
    quoteArray.forEach((arr) => countUp(arr, map))
    const sorted = Object.keys(map).map((key) => map[key]).sort((a, b) => b.count - a.count).map((a) => a.k)

    const derp = []
    for (let i = 0; i < top; i++) {
        derp.push(sorted.shift())
    }

    console.log(derp)

}

const topToys = 2
const toys = ["elmo", "elsa", "legos", "drone", "tablet", "warcraft"]
const quotes = [
    "Elmo is the hottest of the season! Elmo will be on every kid's wishlist!",
    "The new Elmo dolls are super high quality",
    "Expect the Elsa dolls to be very popular this year, Elsa!",
    "Elsa and Elmo are the toys I'll be buying for my kids, Elsa is good",
    "For parents of older kids, look into buying them a drone",
    "Warcraft is slowly rising in popularity ahead of the holiday season"
];

solve(quotes,toys,topToys)
