/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n===0) return 0

    const fibArray=[]
    fibArray.push(0)
    fibArray.push(1)
    for(let i=2;i<=n;i++){
        fibArray.push(fibArray[i-1]+fibArray[i-2])
    }

  return  fibArray[n]+fibArray[n-1]
};
console.log(climbStairs(3))



