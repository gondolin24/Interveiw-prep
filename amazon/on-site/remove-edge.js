/*
https://aonecode.com/cut-binary-tree
 */

function dfs(node) {
    //count numNodes

    if (node === null) return 0

    const leftSum = dfs(node.left)
    const rightSum = dfs(node.right)
    return 1 + leftSum + rightSum
}

function possibleTwoHalfes(node, n) {
    if (node === null) return false
    //count num of subtree
    const count = dfs(node)
    if ((n - count) === count) {
        return true
    }

    return possibleTwoHalfes(node.left, n) || possibleTwoHalfes(node.right, n)

}

function solve(tree) {
    const sum = dfs(tree.root)
    console.log(possibleTwoHalfes(tree.root, sum))
}

const bstOne = {
    root: {
        value: 50,
        right: {value: 60, right: {value: 70, left: null, right: null}, left: {value: 55, left: null, right: null}},
        left: {value: 20, right: {value: 30, left: null, right: null}, left: null}
    }
}
solve(bstOne)
