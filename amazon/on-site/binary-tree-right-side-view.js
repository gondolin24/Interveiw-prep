/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {

    const view = []
    if (!(root)) return []

    let children = [root]

    while (children.length > 0) {

        view.push(children[children.length-1].val)
        const tempChildren = []

        children.forEach((node) => {

            if ((node.left)) {
                tempChildren.push(node.left)
            }
            if (node.right) {
                tempChildren.push(node.right)
            }
        })

        children = [...tempChildren]

    }


    return view

};
