/**
 * @param {number[]} rods
 * @return {number}
 */
var tallestBillboard = function(rods) {
    let sum = 0;
    for (let rod of rods) {
        sum += rod;
    }

    const dp = Array(sum).fill(-1);
    dp[0] = 0;

    for (let rod of rods) {
        const dpCopy = [...dp]

        for (let i = 0; i <= sum - rod; i++) {
            if (dpCopy[i] < 0) continue;

            dp[i + rod] = Math.max(dp[i + rod], dpCopy[i]);
            dp[Math.abs(i - rod)] = Math.max(dp[Math.abs(i - rod)], dpCopy[i] + Math.min(i, rod));
        }
    }
    return dp[0]
};