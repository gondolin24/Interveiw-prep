const firstTree = {
    root: {
        right: null,
        left: {
            value: 4,
            left: null,
            right: {
                value: 3,
                left: null,
                right: null
            }
        },
        value: 2
    }
}
const secondTree = {
    root: {
        value: 40,
        left: {value: 30, right: {value: 35, left: null, right: null}, left: null},
        right: {value: 80, left: null, right: {value: 100, left: null, right: null}}
    }
}

function traverse(node, track) {
    if (node === null) return
    track.push(node.value)
    traverse(node.left, track)
    traverse(node.right, track)
}

function solve(tree, check) {
    const track = []
    traverse(tree.root, track)
    console.log(JSON.stringify(check) === JSON.stringify(track))
}

solve(firstTree, [2, 4, 3]) // true
solve(firstTree, [2, 4, 1])//false
solve(secondTree, [40, 30, 35, 80, 100])  //true

solve(secondTree, [40, 30, 35, 20, 80, 100])  //false
