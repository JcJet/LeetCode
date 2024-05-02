function findMaxK(nums: number[]): number {
    const cache = new Set(nums)
    let ans = -1

    for (let i = 0; i < nums.length; i++) {
        const curMax = nums[i]

        if (cache.has(-curMax) && curMax > ans) ans = curMax
    }

    return ans
};