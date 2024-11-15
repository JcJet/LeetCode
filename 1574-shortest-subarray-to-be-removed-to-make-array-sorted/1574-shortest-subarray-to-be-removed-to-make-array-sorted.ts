function findLengthOfShortestSubarray(arr: number[]): number {
    const n = arr.length;
    
    // Step 1: Find the longest non-decreasing prefix (left segment)
    let left = 0;
    while (left < n - 1 && arr[left] <= arr[left + 1]) {
        left++;
    }
    
    // If the array is already non-decreasing
    if (left === n - 1) return 0;
    
    // Step 2: Find the longest non-decreasing suffix (right segment)
    let right = n - 1;
    while (right > 0 && arr[right - 1] <= arr[right]) {
        right--;
    }
    
    // Step 3: Initialize the minimum length of subarray to remove
    let minLengthToRemove = Math.min(n - left - 1, right); // remove either the prefix or the suffix completely

    // Step 4: Try merging left and right segments
    let i = 0, j = right;
    while (i <= left && j < n) {
        if (arr[i] <= arr[j]) {
            minLengthToRemove = Math.min(minLengthToRemove, j - i - 1);
            i++;
        } else {
            j++;
        }
    }
    
    return minLengthToRemove;
};