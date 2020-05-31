function compare(a, b) {
    return JSON.stringify(a) === JSON.stringify(b)
}

const testOne = [5, 1, 3, 4, 6, 2]
const expectedOne = {
    sum: 14,
    indexes: [1, 5]
}
const testTwo = [1, 3, 3, 2, 5]
const expectedTwo = {
    sum: 10,
    indexes: [0, 3, 4]
}
const testThree = [2, 3, 1, 2, 4, 2]
const expectedThree = {
    sum: 8,
    indexes: [2, 5]
}

function discountedPrice() {

}

function scan(current, array) {
    let itemsLeft = []
    Object.assign(itemsLeft, array)
    if (itemsLeft.length === 0) {
        return current
    }
    const sorted = itemsLeft.sort((a, b) => a - b)
    if (sorted[0] <= current) {
        return current - sorted[0]
    }
    return current
}

function solve(array) {
    const bill = []
    const l = array.length
    const indexes = []
    for (let i = 0; i < l; i++) {
        const current = array.shift()
        const scanPrice = scan(current, array)
        if (scanPrice === current) {
            indexes.push(i)
        }
        bill.push(scanPrice)
    }
    return {
        sum: bill.reduce((a, b) => a + b, 0),
        indexes
    }
}

console.log(compare( solve(testOne), expectedOne))
console.log(compare( solve(testTwo), expectedTwo))
console.log(compare( solve(testThree), expectedThree))

