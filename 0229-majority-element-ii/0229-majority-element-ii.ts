function majorityElement(nums: number[]): number[] {
const dict: { [key: number]: number } = {};
        for (const i of nums) {
            if (dict[i]) {
                dict[i]++;
            } else {
                dict[i] = 1;
            }
        }

        const res: number[] = [];
        const compare = nums.length / 3;
        for (const i in dict) {
            if (dict[i] > compare) {
                res.push(Number(i));
            }
        }

        return res;
    };