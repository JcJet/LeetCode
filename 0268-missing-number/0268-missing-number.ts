function missingNumber(nums: number[]): number {
    // Compute the length of nums
    const n = nums.length;

    // Initialize the difference of sum by n
    let differenceOfSum = n

    // Run a loop from 0 to (n - 1)
    for (let i = 0; i < n; i++)
        // Add to the difference of sum the number i
        // and subtract the number at index i in nums
        differenceOfSum += (i - nums[i]);

    // After adding all of the differences only
    // the missing number will remain in the difference of sum
    return differenceOfSum
};