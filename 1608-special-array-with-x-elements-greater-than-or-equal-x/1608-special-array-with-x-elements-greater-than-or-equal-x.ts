function specialArray(nums: number[]): number {
    nums.sort((a, b) => a - b);
    const n = nums.length;

    for (let x = 1; x <= n; x++) {
        if (nums[n - x] >= x && (n - x === 0 || nums[n - x - 1] < x)) {
            return x;
        }
    }
    return -1;
}