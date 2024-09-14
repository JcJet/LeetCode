function longestSubarray(nums: number[]): number {
    let j = -1;
    let maxVal = Math.max(...nums);
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== maxVal) {
        j = i;
        }
        res = Math.max(res, i - j);
    }

    return res;
};