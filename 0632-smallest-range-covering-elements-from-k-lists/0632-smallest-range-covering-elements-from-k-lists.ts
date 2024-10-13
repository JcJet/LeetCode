type NumElement = {
    num: number;
    index: number;
};

function smallestRange(nums: number[][]): number[] {
    // k is the number of lists in nums
    const k: number = nums.length;
    
    // Map to keep track of how many elements from each list are in the current range
    const coverMap: Map<number, number> = new Map();
    
    // Flatten the nums array and keep track of which list each element came from
    const elements: NumElement[] = nums.reduce((result: NumElement[], list: number[], index: number) => {
        for (const num of list) {
            result.push({ num, index });
        }
        return result;
    }, []);
    
    // Initialize variables for the sliding window
    let left: number = 0;  // Left pointer of the window
    let coverCount: number = 0;  // Number of lists covered by the current window
    let minRange: number = Number.MAX_SAFE_INTEGER;  // Initialize the minimum range to a large number
    let result: number[] = [];
    
    // Sort the flattened array by the numeric value
    elements.sort((a, b) => a.num - b.num);
    
    // Iterate through the sorted array
    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        const count = coverMap.get(element.index) ?? 0;
        
        // If this is the first element from this list, increment coverCount
        if (!count) coverCount += 1;
        coverMap.set(element.index, count + 1);
        
        // While the window covers all k lists, try to minimize the range
        while (coverCount === k) {
            const leftElement = elements[left];
            const range = element.num - leftElement.num;
            const leftCount = coverMap.get(leftElement.index)!;
            
            // Update the minimum range if a smaller range is found
            if (range < minRange) {
                minRange = range;
                result = [leftElement.num, element.num];
            }
            
            // Move the left pointer of the window
            coverMap.set(leftElement.index, leftCount - 1);
            if (leftCount - 1 === 0) coverCount -= 1;
            left += 1;
        }
    }
    
    // Return the smallest range found
    return result;
}