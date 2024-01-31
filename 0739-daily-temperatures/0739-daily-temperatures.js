/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const stack = [];
    const answer = new Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) {
        // Check if the stack is not empty and current temperature is higher
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const index = stack.pop();
            // Calculate waiting days and update answer
            answer[index] = i - index;
        }
        // Push current index onto the stack
        stack.push(i);
    }

    return answer;
};