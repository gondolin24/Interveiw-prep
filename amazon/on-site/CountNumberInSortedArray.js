function countLeft(array, index, target) {
    let count = 0
    for (let i = index + 1; i < array.length; i++) {
        if (target === array[i]) {
            count += 1
        }
        if (target !== array[i]) {
            break
        }
    }
    return count
}

function countRight(array, index, target) {
    let count = 0
    for (let i = index-1; i => 0; i--) {
        if (target === array[i]) {
            count += 1
        }
        if (target !== array[i]) {
            break

        }
    }
    return count
}

function countNumberInSortedArray(array, target) {

    let count = 0

    let pointer = 0
    let nextPointer = array.length - 1
    ///find first point with BS
    let midPoint = -1
    while (pointer <= nextPointer) {
        const mid = Math.floor((pointer + nextPointer )/ 2)
        const current = array[mid]
        if (current === target) {
            midPoint = mid
            break
        }

        if (current > target) {
            nextPointer = mid-1
        } else {
            pointer = mid+1
        }

    }
    if (midPoint >= 0) {
        return 1 + countLeft(array, midPoint, target) + countRight(array, midPoint, target)
    }

    return count
}

console.log(countNumberInSortedArray([2, 2, 2, 3, 5, 5, 7, 7, 7, 8, 8, 10, 10, 10, 10, 10, 10, 10, 12, 15, 7], 2) === 3)
console.log(countNumberInSortedArray([2, 2, 2, 3, 5, 5, 7, 7, 7, 8, 8, 10, 10, 10, 10, 10, 12, 15, 15], 10) === 5)
console.log(countNumberInSortedArray([1, 1, 1, 4, 4, 6, 6, 6], 2) === 0)
console.log(countNumberInSortedArray([-1, -1, -1, -1], -1) === 4)
