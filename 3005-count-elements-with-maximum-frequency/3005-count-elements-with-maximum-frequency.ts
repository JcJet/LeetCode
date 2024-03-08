function maxFrequencyElements(nums: number[]): number {
    let max = 0;
    let c = 0;
    let a = new Array(101).fill(0);
    for(let n of nums) {
        a[n]++;
        if(a[n] > max) {
            max = a[n];
            c = 0;
        }
        if(a[n] == max) c++;
    }
    return c * max;
};