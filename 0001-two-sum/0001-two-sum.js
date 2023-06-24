/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        const secondNum = target - nums[i];
        const secondNumIndex = hashMap[secondNum];
        if (secondNumIndex != undefined) {
            return [i, secondNumIndex]
        }
        hashMap[nums[i]] = i;
    }
};