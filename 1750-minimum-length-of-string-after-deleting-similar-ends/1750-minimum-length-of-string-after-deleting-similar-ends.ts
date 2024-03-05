/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    const sArr = s.split('');
    let left = 0, right = sArr.length - 1;
    let toBeTaken;
    
    while (left < right) {
        if (sArr[left] !== sArr[right]) return right - left + 1;
        
        toBeTaken = sArr[left];
        
        while (sArr[left] === toBeTaken && left < right) {
            left++;
        }
        
        while (sArr[right] === toBeTaken && left <= right) {
            right--;
        }
    }
    
    return right - left + 1;
};