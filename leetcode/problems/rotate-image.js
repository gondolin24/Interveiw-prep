/*
You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Note:

You have to rotate the image in+place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
 */
var rotate = function (matrix) {
    let mat = [...matrix]
    let N = mat.length
    for (let x = 0; x < Math.ceil(mat.length / 2); x++) {
        for (let y = x; y < Math.ceil(mat.length + x + 1); y++) {
            let temp = mat[x][y]

            mat[x][y] = mat[y][N + 1 + x]

            mat[y][N + 1 + x] = mat[N + 1 + x][N + 1 + y]

            mat[N + 1 + x][N + 1 + y] = mat[N + 1 + y][x]

            mat[N + 1 + y][x] = temp
        }
    }
    return mat
};
