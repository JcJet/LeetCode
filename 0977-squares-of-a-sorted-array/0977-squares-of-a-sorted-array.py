class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        left, right, i = 0, len(nums) - 1, len(nums) - 1
        output = [0] * len(nums)
        while left <= right:
            value = 0
            if nums[left] * nums[left] >= nums[right] * nums[right]:
                value = nums[left] * nums[left]
                left += 1
            else:
                value = nums[right] * nums[right]
                right -= 1
            output[i] = value
            i -= 1
        return output