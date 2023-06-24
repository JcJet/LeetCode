/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function(nums) {
    const dp = {}
    let longest = 2;
    for (let i = 0; i < nums.length; i++) {
        dp[i] = {};
        for (let j = 0; j < i; j++) {
            const diff = nums[i] - nums[j];
            const oldVal = dp[j][diff] || 1;
            dp[i][diff] = oldVal + 1;
            longest = Math.max(longest, dp[i][diff]);

        }
    }
    return longest;
};