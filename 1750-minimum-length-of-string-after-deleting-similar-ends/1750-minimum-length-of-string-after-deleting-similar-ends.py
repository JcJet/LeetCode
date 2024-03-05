class Solution(object):
    def minimumLength(self, s):
        """
        :type s: str
        :rtype: int
        """
        sArr = list(s)
        left, right = 0, len(sArr) - 1
        while left < right:
            if sArr[left] != sArr[right]:
                return right - left + 1
            toBeTaken = sArr[left]
            while sArr[left] == toBeTaken and left < right:
                left += 1
            while sArr[right] == toBeTaken and left <= right:
                right -= 1
        return right - left + 1