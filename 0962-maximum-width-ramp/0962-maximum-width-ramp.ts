function maxWidthRamp(nums: number[]): number {
    let stack: number[] = [];

    // Build a decreasing stack of indices
    // This stack will contain indices of potential left boundaries of ramps
    for (let i = 0; i < nums.length; i += 1) {
        // Only push an index if the stack is empty or the current number is smaller than the last number in the stack
        // This ensures the stack remains in decreasing order of values
        if (stack.length === 0 || nums[stack[stack.length - 1]] > nums[i]) {
            stack.push(i);
        }
    }

    // Initialize the answer to the smallest possible integer
    let ans = Number.MIN_SAFE_INTEGER;

    // Iterate through the array from right to left
    // This will help us find the widest ramp for each potential right boundary
    for (let i = nums.length - 1; i >= 0; i -= 1) {
        // While the stack is not empty and the current number is greater than or equal to the number at the top of the stack
        while (stack.length > 0 && nums[i] >= nums[stack[stack.length - 1]]) {
            // Pop the index from the stack
            const idx = stack.pop()!;
            // Update the answer with the maximum width found so far
            ans = Math.max(ans, i - idx);
        }
    }

    // Return the maximum width ramp found
    return ans;
}