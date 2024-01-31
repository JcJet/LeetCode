public class Solution {
    public int[] DailyTemperatures(int[] temperatures) {
        int[] stack = new int[100000];
        int[] answer = new int[temperatures.Length];
        int i = 1;
        int top = 1;

        // Iterate through the temperatures array
        while (i < temperatures.Length) {
            // Check if the stack is not empty and current temperature is higher
            if (top > 0 && temperatures[stack[top - 1]] < temperatures[i]) {
                // Calculate waiting days and update answer
                answer[stack[top - 1]] = i - stack[--top];
            } else {
                // If no warmer day, push current index onto the stack
                stack[top++] = i++;
            }
        }

        // Return the final array of waiting days
        return answer;
    }
}