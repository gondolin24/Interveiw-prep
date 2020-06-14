

// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED
function popularNFeatures(numFeatures, topFeatures, possibleFeatures,
                          numFeatureRequests, featureRequests)
{
  // WRITE YOUR CODE HERE

  const metaData = possibleFeatures.map((name)=>{
    let count = 0

    //loop through array to count time it appears
    featureRequests.forEach((feature)=>{
      const wordArray = feature.split(' ')
      //I can use filter but find works fine
      const found = wordArray.find((word)=>word.toLowerCase().includes(name.toLowerCase()))
      if((found)){
        count = count +1
      }
    })

    return {
      name,
      count
    }
  })

  const sorted = metaData.sort((a,b)=>b.count=a.count)

  //while loop incase

  const popularWords = []

  let count = 0
  //edge case
  while((metaData.length>0)&&(count<topFeatures)){

    const current = metaData.shift()
    popularWords.push(current.name)
    count  = count + 1
  }

  return popularWords

}
// FUNCTION SIGNATURE ENDS
