/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
    let floor = Math.ceil((A[0].length) / 2)

    for (let i = 0; i < A.length; i++) {
        for (let l = 0; l < floor; l++) {
            const swapL = (A[i].length - 1) - l
            const temp = A[i][l]
            const current = A[i][swapL]
            A[i][l] = current
            A[i][swapL] = temp
        }
    }

    for(let i = 0;i<A.length;i++){
        for(let j=0;j<A[0].length;j++){
            const current = A[i][j]===0?1:0
            A[i][j] = current
        }
    }

    return A
};
flipAndInvertImage([])
