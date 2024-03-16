function findMaxLength(nums: number[]): number {
    const hashmap: Map<number, number> = new Map();
    let zeros: number = 0, ones: number = 0, maxLen: number = 0;
    hashmap.set(0, -1);
    
    for (let i = 0; i < nums.length; i++) {
        nums[i] === 0 ? zeros++ : ones++;
        const diff: number = zeros - ones;
        
        if (hashmap.has(diff)) {
            maxLen = Math.max(maxLen, i - hashmap.get(diff)!);
        } else {
            hashmap.set(diff, i);
        }
    }
    
    return maxLen;
}