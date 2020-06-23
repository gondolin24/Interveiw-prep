/*
https://aonecode.com/amazon-online-assessment-oa2-optimize-memory-usage
 */
function generateMatrix(fg, bg) {

}

function solve(fg, bg, k) {

    let max = -Infinity
    let possibleTasks = []
    for (let i = 0; i < fg.length; i++) {
        for (let j = 0; j < fg.length; j++) {
            const currentFg = fg[i]
            const currentBg = bg[j]
            const memoryNeeded = currentBg + currentFg
            if (memoryNeeded <= k) {
                //set max
                if (memoryNeeded > max) {
                    max = memoryNeeded
                    possibleTasks = [[i, j]]
                }else{
                    if (memoryNeeded === max) {
                        possibleTasks.push([i, j])
                    }
                }
            }
        }
    }
    console.log(possibleTasks)

}

// foregroundTasks = [1, 7, 2, 4, 5, 6]
// backgroundTasks = [3, 1, 2]
// K = 6
foregroundTasks = [1, 7, 2, 4, 5, 6]
backgroundTasks = [1, 1, 2]
K = 10
solve(foregroundTasks, backgroundTasks, K)
