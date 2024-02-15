function largestPerimeter(nums: number[]): number {
  nums.sort((a, b) => a - b)
  const sum = nums.map((sum => num => sum += num)(0))
  for (let i = nums.length - 1; i >= 2; i--)
    if (sum[i-1] > nums[i])
      return sum[i]
  return -1
}