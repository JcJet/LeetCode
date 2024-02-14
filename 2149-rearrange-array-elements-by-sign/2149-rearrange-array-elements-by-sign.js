/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    const n = nums.length;
    const output = new Array(n);
    let i = 0, pos = 0, neg = 1;
    
    while (i < n) {
        if (nums[i++] > 0) {
            output[pos] = nums[i - 1];
            pos += 2;
        } else {
            output[neg] = nums[i - 1];
            neg += 2;
        }
    }
    
    return output;
};