/*
https://aonecode.com/amazon-online-assessment-oa2-cell-state-after-n-days
 */
//two the same are inactive
//becones active
//out oof ounds active

function get(i, array) {
    if (i < 0 || i >= array.length) return 0

    return array[i]
}

function getNewValue(index, array) {
    const left = get(index - 1, array)
    const right = get(index + 1, array)
    return (left === right) ? 0 : 1
}

function transform(arr) {
    //rules
    return arr.map((a, index) => getNewValue(index, arr))
}

function solve(arr, num) {

    let current = arr
    for (let i = 0; i < num; i++) {
        current = [...transform(current)]
    }
    console.log(current)

}

solve([1, 0, 0, 0, 0, 1, 0, 0], 1) //0 1 0 0 1 0 1 0
solve([1, 1, 1, 0, 1, 1, 1, 1], 2) //0 0 0 0 0 1 1 0

