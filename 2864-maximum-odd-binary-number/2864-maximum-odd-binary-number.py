class Solution(object):
    def maximumOddBinaryNumber(self, s):
        count1 = 0
        count0 = 0
        i = 0

        # Count the number of '1's and '0's
        for ch in s:
            if ch == '1':
                count1 += 1
            else:
                count0 += 1

        # Initialize the result array
        result = [''] * len(s)

        # Fill the first (count1 - 1) positions with '1'
        while i < count1 - 1:
            result[i] = '1'
            i += 1

        # Fill the next count0 positions with '0'
        while i < count1 - 1 + count0:
            result[i] = '0'
            i += 1

        # Set the last position to '1'
        result[i] = '1'

        # Convert the array to a string and return the result
        return ''.join(result)