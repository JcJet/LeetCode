function firstMissingPositive(nums: number[]): number {
    let i = 0;

    // Perform cyclic sort on the array
    while (i < nums.length) {
        let correctIndex = nums[i] - 1;
        // Ignore numbers which are out of bounds
        if (nums[i] > 0 && nums[i] <= nums.length && nums[i] !== nums[correctIndex]) {
            // Swap numbers to their correct positions
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
        } else {
            i++;
        }
    }

    // Look for the first number out of place
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== i + 1) {
            return i + 1;
        }
    }
    
    // If no number is out of place, return the length of the array plus one
    return nums.length + 1;
};