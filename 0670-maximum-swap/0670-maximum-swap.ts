var maximumSwap = function(num) {
    // Convert the number into a string
    const digits = num.toString().split("");
    // Track the current max, it's location, and the best swap as left and right
    let max = -1, maxIdx = -1, leftIdx = -1, rightIdx = -1;
    // iterate through the digits from right to left
    for(let i = digits.length - 1; i >= 0; i--) {
        const digit = parseInt(digits[i]);
        // if the digit is greater than the max, set it and its location to the new max
        if(digit > max) max = digit, maxIdx = i;
        // if the digit is less than the current max
        // set this index to the left and the max to the right because it's the best swap
        else if(digit < max) leftIdx = i, rightIdx = maxIdx;
    }
    // If the left is -1 it's already the best
    if(leftIdx === -1) return num;
    // swap the left and right index numbers
    [digits[leftIdx],digits[rightIdx]] = [digits[rightIdx],digits[leftIdx]];
    // rejoin and parse the number
    return parseInt(digits.join(""));
};