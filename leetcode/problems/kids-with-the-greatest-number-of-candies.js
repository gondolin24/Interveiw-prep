/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  
  let booleanArr = []
  const sortedArray =  Array.from(candies).sort((a,b)=> b-a)
  
  const max = sortedArray[0]
  
  for(let i = 0;i< candies.length;i++){
      booleanArr[i] = (candies[i]+ extraCandies)>=max
  }
  return booleanArr
};
