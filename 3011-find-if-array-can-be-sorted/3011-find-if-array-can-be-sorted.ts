function canSortArray(nums: number[]): boolean {
    function getSetBits(num: number): number {
        return num.toString(2).replaceAll("0", "").length;
    }
    
    nums.sort((a, b) => getSetBits(a) === getSetBits(b) ? a - b : a);
    
    for (let i: number = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            return false;
        }
    };
    
    return true;
};