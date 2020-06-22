/*
https://aonecode.com/amazon-subtree-with-maximum-average
 */

const testTree = {
    root: {
        value: 1,
        children: [{value: -5, children: [{value: 1, children: []}, {value: 2, children: []}]}, {
            value: 13,
            children: [{value: 4, children: []}, {value: -2, children: []}]
        }, {value: 4, children: []}]
    }
}

function dfs(node, averages) {
    if (node == null) return []

    let currentSum = [node]

    const children = node.children
    if (children.length === 0) {
        averages.push({average: node.value, val: node.value})
        return [node]
    }

    children.forEach((node) => {
        currentSum = [...currentSum, ...dfs(node, averages)]
    })

    //sum of all children
    const average = currentSum.map((a) => a.value).reduce((a, b) => a + b, 0) / currentSum.length
    averages.push({average, val: node.value})
    return currentSum

}

function solve(tree) {
    const root = tree.root
    const allAverages = []
    dfs(root, allAverages)
    const sorted = allAverages.sort((a, b) => b.average - a.average)
    console.log(sorted.shift().val)
}

solve(testTree)
