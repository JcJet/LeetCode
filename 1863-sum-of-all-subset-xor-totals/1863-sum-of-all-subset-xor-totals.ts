function subsetXORSum(nums: number[]): number {
    let res = 0;
    for (let num of nums) {
        res |= num;
    }
    return res * (1 << (nums.length - 1));
}