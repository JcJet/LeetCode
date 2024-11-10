function minimumSubarrayLength(nums: number[], k: number): number {
    const n = nums.length;
    let ans = n + 1;
    const cnt: number[] = new Array<number>(32).fill(0);
    let s = 0;

    for (let i = 0, j = 0; j < n; ++j) {
        s |= nums[j];

        for (let h = 0; h < 32; ++h) {
            if ((nums[j] >> h) & 1) {
                ++cnt[h];
            }
        }

        while (s >= k && i <= j) {
            ans = Math.min(ans, j - i + 1);
            for (let h = 0; h < 32; ++h) {
                if ((nums[i] >> h) & 1) {
                    if (--cnt[h] === 0) {
                        s ^= (1 << h);
                    }
                }
            }
            i++;
        }
    }

    return ans === n + 1 ? -1 : ans;
};