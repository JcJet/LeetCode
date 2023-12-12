const MOD = 1e9 + 7;

function maxProduct(nums: number[], k = 2): number {

    // Find K largest
    const N = nums.length;
    k = N - Math.min(k, N);
    quickselect(nums, k);

    // Multiply together
    let prod = 1;
    while (k < N) {
        prod = (prod * (nums[k++] - 1)) % MOD;
    }

    return prod;
}

function quickselect(nums: number[], k: number, min = 0, max = nums.length): void {
    do {
        const mid = min + Math.floor((max - min)*Math.random());
        const target = nums[mid];

        nums[mid] = nums[min];
        nums[min] = target;

        let lt = min;
        let eq = min + 1;
        for(let i = min + 1; i < max; ++i) {
            if (target === nums[i]) {
                nums[i] = nums[eq];
                nums[eq++] = target;
            } else if (target > nums[i]) {
                const temp = nums[lt];
                nums[lt++] = nums[i];
                nums[i] = nums[eq];
                nums[eq++] = temp;
            }
        }
        
        if (lt > k) {
            max = lt;
        } else if (eq < k) {
            min = eq;
        } else {
            break;
        }
    } while (true);
}