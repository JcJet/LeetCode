function divideArray(nums: number[], k: number): number[][] {
    nums.sort((a, b) => a - b);
    let jak: number[][] = [];
    let i = 0;
    while (i < nums.length) {
        if (i+2 < nums.length && nums[i+2] - nums[i] <= k) {
            jak.push([nums[i], nums[i+1], nums[i+2]]);
            i += 3;
        } else {
            return [];
        }
    }
    return jak;
};