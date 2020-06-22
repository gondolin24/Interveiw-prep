/*
https://www.geeksforgeeks.org/lowest-common-ancestor-binary-tree-set-1/
 */
const firstTree = {
    root: {
        value: 1,
        left: {value: 2, left: {value: 4, left: null, right: null}, right: {value: 5, left: null, right: null}},
        right: {value: 3, left: {value: 6, left: null, right: null}, right: {value: 7, left: null, right: null}}
    }
}

function dfs(node, target, nextTarget) {
    if (node === null) return null
    const value = node.value
    if (value === nextTarget) {
        return nextTarget
    }
    if (value === target) {
        return target
    }

    const result = dfs(node.left, target, nextTarget)
    const nextResult = dfs(node.right, target, nextTarget)

    if (result !== null && nextResult !== null) return value

    return result || nextResult
}

function solve(tree, node, nextNode) {
    const result = dfs(tree.root, node, nextNode)
    console.log(result)
}

solve(firstTree, 4, 5);//2
solve(firstTree, 1, 1);//1
solve(firstTree, 3, 4);//1
solve(firstTree, 2, 4);//2
