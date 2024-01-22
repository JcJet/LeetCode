function findErrorNums(nums: number[]): number[] {
    const arr: number[] = new Array(nums.length+1).fill(0);
    for(let i = 0; i < nums.length; i++) {
        arr[nums[i]]++;
    }

    return [arr.indexOf(2), arr.lastIndexOf(0)];
};