function compare(a, b) {
    return JSON.stringify(a) === JSON.stringify(b)
}

const post_offices = [[-16, 5], [-1, 2], [4, 3], [10, -2], [0, 3], [-5, -9]]

//SquareRoot((m - p) * (m - p) + (n - q) * (n - q)).
function euclidDistance(m, p, n, q) {
    return (m - p) * (m - p) + (n - q) * (n - q)
}

function findAllPostOfficesClosestToMe(k, postOffices, location) {
    const array = []
    const offices = postOffices.map((office) => {
        const distance = euclidDistance(office[0], location[0], office[1], location[0])
        return {
            distance,
            office
        }
    })

    const sorted = offices.sort((a, b) => a.distance - b.distance)
    let amount = k
    while (sorted.length > 1 && amount > 0) {
        array.push(sorted.shift().office)
        amount = amount - 1
    }
    return array
}

const expected = [[-1, 2], [0, 3], [4, 3]]
const actual = findAllPostOfficesClosestToMe(3, post_offices, [0, 0])
console.log(compare(actual, expected))
