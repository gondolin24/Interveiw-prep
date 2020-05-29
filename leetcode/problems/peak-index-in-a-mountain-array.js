/**
 * @param {number[]} A
 * @return {number}
 */
function isLeftPeak(index, array, tryIndex){
    
   if(tryIndex<0) return false
    
    
    return array[index] > array[tryIndex]
}

function  isRightPeak(index, array,tryIndex){
    if(tryIndex>=array.length) return false
    
    
    return array[index] > array[tryIndex]
}

var peakIndexInMountainArray = function(A) {
    
    for (let i = 0; i < A.length; i++) {
     if(isRightPeak(i, A ,i+1) && isLeftPeak(i,A,i-1))
         return i
    }
    
    return A.length 
};
