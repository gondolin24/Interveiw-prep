//node functions

function newNode(value, children = []) {
    return {
        value,
        children
    }
}

function hasChildren(node) {
    return node.children.length > 0
}


//Tree generation
function generateTestTreeOne() {
    let children = newNode(1)
    let childrenTwo = newNode(2)
    let subtree = newNode(-5, [children, childrenTwo])

    children = newNode(4)
    childrenTwo = newNode(-2)
    let subtreeTwo = newNode(13, [children, childrenTwo])
    let node = newNode(4)
    const head = newNode(1, [subtree, subtreeTwo, node])
    return head
}

function generateTestTreeTwo() {
    const children = [
        newNode(-5),
        newNode(21),
        newNode(5),
        newNode(-1)
    ]
    const head = newNode(1, children)
    return head
}


function getSubTree(current, averageArray) {
    //sum of all my children
    if (!hasChildren(current)) {
        const metaData = {
            value: current.value,
            allChildren: [],
            average: current.value
        }
        averageArray.push(metaData)
        return metaData
    }
    let childrenValues = []
    const nodeChildren = current.children

    nodeChildren.forEach((node) => {
        const subTree = getSubTree(node, averageArray)
        childrenValues = [...childrenValues, ...subTree.allChildren]
    })

    const count = childrenValues.length + 1
    const agg = childrenValues.reduce((a, b) => a.value + b.value, 0) + current.value

    const metaData = {
        value: current.value,
        allChildren: childrenValues,
        average: agg / count
    }
    averageArray.push(metaData)
    return metaData
}

function solve(head) {
    let averageArray = []

    getSubTree(head, averageArray)
    const sorted = averageArray.sort((a, b) => b.average - a.average)
    const max = sorted.shift()
    return max.value
}

console.log(solve(generateTestTreeOne())===13)
console.log(solve(generateTestTreeTwo())===21)
