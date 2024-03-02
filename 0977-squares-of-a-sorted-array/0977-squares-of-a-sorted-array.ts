function sortedSquares(nums: number[]): number[] {
    let left = 0, right = nums.length - 1, i = nums.length - 1;
    let output: number[] = new Array(nums.length);
    while (left <= right) {
        let value: number;
        if (nums[left] * nums[left] >= nums[right] * nums[right]) {
            value = nums[left] * nums[left++];
        } else {
            value = nums[right] * nums[right--];
        }
        output[i--] = value;
    }
    return output;
}