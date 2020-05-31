const firstState = [1, 0, 0, 0, 0, 1, 0, 0]
const firstExpected = [0, 1, 0, 0, 1, 0, 1, 0]
const secondState = [1, 1, 1, 0, 1, 1, 1, 1]
const secondExpected = [0, 0, 0, 0, 0, 1, 1, 0]

function compare(a, b) {
    return JSON.stringify(a) === JSON.stringify(b)
}

function oob(index, houses) {
    if (index < 0) return true
    return index > houses.length - 1;


}

function get(index, house) {
    if (oob(index, house)) {
        return 0
    } else {
        return house[index]
    }
}

function check(index, house) {
    if (get(index-1, house) === get(index+1, house)) {
        return 2
    } else {
        return 3
    }
}

function passDay(houses) {
    const tempHouse = []
    for (let i = 0; i < houses.length; i++) {
        tempHouse.push(check(i, houses))
    }
    return tempHouse.map((num) => num - 2)
}

function solver(array, nDays) {
    let houses = array
    while (nDays > 0) {
        houses = passDay(houses)
        nDays = nDays - 1
    }
    return houses
}

console.log(compare(firstExpected, solver(firstState, 1)))
console.log(compare(secondExpected, solver(secondState, 2)))

