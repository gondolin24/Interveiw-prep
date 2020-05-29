/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */

function hasStarted(time,queryTime){
    return time <= queryTime
    
}
function hasFinished(time, queryTime){
    return time >= queryTime
    
}
var busyStudent = function(startTime, endTime, queryTime) {
    
    const students = startTime.length
    let count = 0
    for(let i = 0; i<students; i ++){
        
        if(hasFinished(endTime[i],queryTime) && hasStarted(startTime[i],queryTime)) {
            count = count + 1
        }
    }
    return count
};
