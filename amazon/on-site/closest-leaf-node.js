const firstTree = {
    root: {
        value: 10,
        left: {value: 12, left: null, right: null},
        right: {value: 13, left: {value: 14, left: null, right: null}, right: null}
    }
}

function dfs(node, hashMap, parent) {
    if (node === null) return

    const path = []
    const value = node.value
    if (parent !== null) {
        path.push(parent)
    }

    if (node.left !== null) {
        path.push(node.left)
        dfs(node.left, hashMap, node)
    }
    if (node.right !== null) {
        path.push(node.right)
        dfs(node.right, hashMap,node)
    }
    hashMap[value] = path

}

function isLeafNode(node) {
    return node.left === null && node.right === null
}

function solve(tree, pointer) {
    const tracker = {}
    const hashMap = {}
    dfs(tree.root, hashMap, null)
    Object.keys(hashMap).forEach((key) => {
        tracker[key] = false
    })

    let children = hashMap[pointer]
    tracker[pointer] = true
    let lowest = false
    const minChild = []
    while (!lowest && children.length > 0) {
        let newChildren = []
        children.forEach((child) => {
            if (!tracker[child]) {
                if (isLeafNode(child)) {
                    minChild.push(child)
                    lowest = true
                }
                tracker[child.value] = true
                newChildren = [...newChildren, ...hashMap[child.value]]
            }
        })
        children = [...newChildren]
    }
    console.log(minChild.shift().value)
}

solve(firstTree, 13) //14
solve(firstTree, 10) //12
