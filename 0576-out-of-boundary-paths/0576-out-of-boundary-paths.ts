function findPaths(m: number, n: number, maxMove: number, startRow: number, startColumn: number): number {
    let dp: number[][][] = new Array(m).fill(null).map(() => new Array(n).fill(null).map(() => new Array(maxMove + 1).fill(-1)));
    let mod: number = 1e9 + 7;

    function helper(maxMove: number, x: number, y: number): number {
        if (x < 0 || x >= m || y < 0 || y >= n) return 1;
        if (maxMove <= 0) return 0;
        if (dp[x][y][maxMove] !== -1) {
            return dp[x][y][maxMove];
        }
        let res: number = 0;

        res = (res + helper(maxMove - 1, x + 1, y)) % mod;
        res = (res + helper(maxMove - 1, x, y - 1)) % mod;
        res = (res + helper(maxMove - 1, x - 1, y)) % mod;
        res = (res + helper(maxMove - 1, x, y + 1)) % mod;

        dp[x][y][maxMove] = res;

        return res;
    }

    return helper(maxMove, startRow, startColumn);
}