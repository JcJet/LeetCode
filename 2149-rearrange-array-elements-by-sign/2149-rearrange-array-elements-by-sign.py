class Solution:
    def rearrangeArray(self, nums: List[int]) -> List[int]:
        n = len(nums)
        output = [0] * n
        i, pos, neg = 0, 0, 1

        while i < n:
            if nums[i] > 0:
                output[pos] = nums[i]
                pos += 2
            else:
                output[neg] = nums[i]
                neg += 2
            i += 1

        return output