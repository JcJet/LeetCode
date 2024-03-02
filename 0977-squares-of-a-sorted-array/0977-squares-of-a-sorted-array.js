/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0, right = nums.length - 1, i = nums.length - 1;
    let output = new Array(nums.length);
    while (left <= right) {
        let value;
        if (nums[left] * nums[left] >= nums[right] * nums[right]) {
            value = nums[left] * nums[left++];
        } else {
            value = nums[right] * nums[right--];
        }
        output[i--] = value;
    }
    return output;
};