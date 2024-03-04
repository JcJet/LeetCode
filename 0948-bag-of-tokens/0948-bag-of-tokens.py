class Solution(object):
    def bagOfTokensScore(self, tokens, power):
        if not tokens:
            return 0

        self.quicksort(tokens, 0, len(tokens) - 1)
        left, score, maxScore, right = 0, 0, 0, len(tokens) - 1

        while left <= right:
            if power >= tokens[left]:
                power -= tokens[left]
                score += 1
                left += 1
            elif score > 0:
                power += tokens[right]
                score -= 1
                right -= 1
            else:
                break

            maxScore = max(score, maxScore)

        return maxScore

    def quicksort(self, arr, left, right):
        if left < right:
            pivotIndex = self.partition(arr, left, right)
            self.quicksort(arr, left, pivotIndex - 1)
            self.quicksort(arr, pivotIndex + 1, right)

    def partition(self, arr, left, right):
        pivotValue = arr[right]
        i = left - 1

        for j in range(left, right):
            if arr[j] < pivotValue:
                i += 1
                arr[i], arr[j] = arr[j], arr[i]

        arr[i + 1], arr[right] = arr[right], arr[i + 1]
        return i + 1