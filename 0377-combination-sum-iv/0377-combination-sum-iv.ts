function combinationSum4(nums: number[], target: number) {
  nums = nums.sort((a, b) => a - b);

  function dfs(total: number, dp: {}) {
    if (total in dp) {
      return dp[total];
    }

    if (total === 0) {
      return 1;
    }

    let res = 0;
    for (let num of nums) {
      if (num <= total) {
        res += dfs(total - num, dp);
      } else {
        break;
      }
    }

    dp[total] = res;
    return res;
  }

  return dfs(target, {});
};