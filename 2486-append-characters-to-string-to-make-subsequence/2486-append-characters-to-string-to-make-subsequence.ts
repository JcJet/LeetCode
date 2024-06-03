function appendCharacters(s: string, t: string): number {
    const n = t.length;
    let tPointer = 0;

    // Iterate through the characters of s using an index-based loop
    for (let sPointer = 0; sPointer < s.length; sPointer++) {
        // Check if the characters match
        if (tPointer < n && s[sPointer] === t[tPointer]) {
            tPointer++;
        }
    }

    // Return the number of characters that need to be appended to s
    return n - tPointer;
}