class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        # Stack to store indices of temperatures, answer array for result
        stack, answer = [], [0] * len(temperatures)

        # Iterate through the temperatures array
        for i in range(len(temperatures)):
            # Check if the stack is not empty and current temperature is higher
            while stack and temperatures[stack[-1]] < temperatures[i]:
                # Calculate waiting days and update answer
                idx = stack.pop()
                answer[idx] = i - idx

            # Push current index onto the stack
            stack.append(i)

        # Return the final array of waiting days
        return answer