function minimizeXor(num1: number, num2: number): number {
    let result = num1;

    // Count target set bits for the result (set bits result = set bits num2)
    let targetSetBits = num2.toString(2).split("").filter((c) => c === '1').length;
    // Count the current set bits of result
    let setBitsCount = result.toString(2).split("").filter((c) => c === '1').length;

    let countBits = 0;

    // If the current set bits of result < target set bits
    while (setBitsCount < targetSetBits) {
        if (!(result & (1 << countBits))) {
            result = result | (1 << countBits);
            setBitsCount++;
        }
        countBits++;
    }

    // If the current set bits of result > target set bits
    while (setBitsCount > targetSetBits) {
        if (result & (1 << countBits)) {
            result = result & ~(1 << countBits);
            setBitsCount--;
        }
        countBits++;
    }

    return result;
};