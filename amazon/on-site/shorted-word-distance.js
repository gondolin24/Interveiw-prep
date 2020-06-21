//check left most
//check right most


function solve(wordArray, target, nextTarget) {
    const targetDistance = []
    const nextDistance = []

    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === target) {
            targetDistance.push(i)
        }
        if (wordArray[i] === nextTarget) {
            nextDistance.push(i)
        }
    }

    let minDistance = Infinity
    targetDistance.forEach((dist) => {

        nextDistance.forEach((y) => {
            const current = Math.abs(dist - y)
            if(current<minDistance){
                minDistance = current
            }

        })

    })

    console.log(minDistance)
}

solve(['practice', 'makes', 'perfect', 'coding', 'makes'], 'coding', 'practice')
solve(['practice', 'makes', 'perfect', 'coding', 'makes'], 'makes', 'coding')
