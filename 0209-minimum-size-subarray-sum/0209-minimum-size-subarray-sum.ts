function minSubArrayLen(target: number, nums: number[]): number {
    let sm = 0;
    let i = 0;
    let j = 0;
    let result = Infinity;

    while(j < nums.length) {
        while(i < nums.length && sm < target) {
            sm += nums[i];
            i++;
        }

        if(sm < target) {
            break;
        }

        result = Math.min(result, i - j);

        sm -= nums[j];
        j++;
    }

    return result === Infinity ? 0 : result;
};