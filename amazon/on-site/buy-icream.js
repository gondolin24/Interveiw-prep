function changeAvailable(cashRegister, changeNeeded) {
    //prioritize top
    let numTen = cashRegister['10']
    let numFive = cashRegister['5']

    if (changeNeeded > 5 && numTen > 0) {
        //release a 10
        numTen -= 1
        changeNeeded = changeNeeded - 10
    }

    if ((changeNeeded > 0) && (numFive * 5) >= changeNeeded) {
        const fivesNeeded = changeNeeded / 5
        numFive = numFive - fivesNeeded
        changeNeeded = 0
    }
    if (changeNeeded === 0) {
        cashRegister['10'] = numTen
        cashRegister['5'] = numFive
        return true
    } else {
        return false
    }


}

function solve(customers) {
    const cashRegister = {
        '10': 0,
        '5': 0,
        '20': 0
    }
    let flag = true
    customers.forEach((customer) => {
        const changeNeeded = customer - 5
        //insert cash
        cashRegister[`${customer}`] = cashRegister[`${customer}`] + 1
        if (changeNeeded > 0) {
            if (!changeAvailable(cashRegister, changeNeeded)) {
                flag = false
                cashRegister[`${customer}`] = cashRegister[`${customer}`] - 1
            }
        }
    })

    return flag
}

console.log(solve([5, 5, 5, 10, 20]) === true)
console.log(solve([5, 5, 10]) === true)
console.log(solve([10, 10]) === false)
