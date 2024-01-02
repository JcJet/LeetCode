function findMatrix(nums: number[]): number[][] {
    let result: number[][] = [];

    const frequencyMap: Map<number, number> = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        if (!frequencyMap.get(nums[i])) {
            frequencyMap.set(nums[i], 1);
        }
        else {
            frequencyMap.set(nums[i], frequencyMap.get(nums[i]) + 1);
        }
    }

    for (const [key, value] of frequencyMap.entries()) {
        for (let i = 0; i < value; i++) {
            if (!result[i]) {
                result.push([key]);
            }
            else {
                result[i].push(key);
            }
        }
    }

    return result;
};