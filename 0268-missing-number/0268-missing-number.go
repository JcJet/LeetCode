func missingNumber(nums []int) int {
    // Compute the length of nums
    n := len(nums)

    // Initialize the difference of sum by n
    differenceOfSum := n

    // Run a loop from 0 to (n - 1)
    for i := 0; i < n; i++ {
        // Add to the difference of sum the number i
        // and subtract the number at index i in nums
        differenceOfSum += (i - nums[i])
    }

    // After adding all of the differences only
    // the missing number will remain in the difference of sum
    return differenceOfSum
}