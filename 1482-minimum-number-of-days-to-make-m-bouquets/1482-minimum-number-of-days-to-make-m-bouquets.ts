/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
function possible(arr, day, m, k) {
    let count = 0;
    let totalBoq = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= day) {
            count++;
            if (count == k) {
                totalBoq++;
                count = 0;
            }
        } else {
            count = 0;
        }
    }
    return totalBoq >= m;
}
var minDays = function(bloomDay, m, k) {
    //edge case
    let totalNumOFFlowerNeeded = m * k;
    if (bloomDay.length < totalNumOFFlowerNeeded) return -1;
    
    let minVal = Math.min(...bloomDay);
    let maxVal = Math.max(...bloomDay);
    
    while (minVal <= maxVal) {
        let mid = Math.floor((minVal + maxVal) / 2);
        
        if (possible(bloomDay, mid, m, k)) {
            maxVal = mid - 1;
        } else {
            minVal = mid + 1;
        }
    }
    return minVal;
};
