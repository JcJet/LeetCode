function minSubarray(nums: number[], p: number): number {
    const n = nums.length;
    const totalModSum = nums.reduce((sum, a) => (sum + a) % p, 0);
    let curModSum = 0, minSize = n;
    const lastSeen = new Map([[0, -1]]);
    nums.forEach((num, right) => {
        curModSum = (curModSum + num) % p;
        lastSeen.set(curModSum, right);
        const left = lastSeen.get((curModSum - totalModSum + p) % p);
        if(left != undefined) minSize = Math.min(minSize, right - left);
    })
    return minSize != n ? minSize : -1;
};