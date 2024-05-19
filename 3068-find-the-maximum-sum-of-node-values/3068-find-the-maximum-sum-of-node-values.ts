function maximumValueSum(nums: number[], k: number, edges: number[][]): number {
    let bestSum: number = 0;
    let cnt: number = 0;

    for (let num of nums) {
        bestSum += Math.max(num, num ^ k);
        if ((num ^ k) > num) {
            cnt++;
        }
    }

    if (cnt % 2 !== 0) {
        let minDifference: number = Number.MAX_SAFE_INTEGER;
        for (let num of nums) {
            minDifference = Math.min(minDifference, Math.abs(num - (num ^ k)));
        }
        bestSum -= minDifference;
    }

    return bestSum;
}