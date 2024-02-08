function numSquares(n: number): number {
    let dp: number[] = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
        dp[0] = 0;
        let count: number = 1;
        while (count * count <= n) {
            let sq: number = count * count;
            for (let i: number = sq; i <= n; i++) {
                dp[i] = Math.min(dp[i - sq] + 1, dp[i]);
            }
            count++;
        }
        return dp[n];
};