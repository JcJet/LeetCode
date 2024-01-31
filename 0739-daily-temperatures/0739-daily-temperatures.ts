function dailyTemperatures(temperatures: number[]): number[] {
    // Stack to store indices of temperatures, answer array for result
    const stack: number[] = [];
    const answer: number[] = new Array(temperatures.length).fill(0);

    // Iterate through the temperatures array
    for (let i = 0; i < temperatures.length; i++) {
        // Check if the stack is not empty and current temperature is higher
        while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            // Calculate waiting days and update answer
            const index = stack.pop()!;
            answer[index] = i - index;
        }

        // Push current index onto the stack
        stack.push(i);
    }

    // Return the final array of waiting days
    return answer;
}