/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const dict = {};
        for (const i of nums) {
            if (dict[i]) {
                dict[i]++;
            } else {
                dict[i] = 1;
            }
        }

        const res = [];
        const compare = nums.length / 3;
        for (const i in dict) {
            if (dict[i] > compare) {
                res.push(Number(i));
            }
        }

        return res;
};