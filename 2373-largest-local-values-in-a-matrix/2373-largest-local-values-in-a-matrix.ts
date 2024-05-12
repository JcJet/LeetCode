function largestLocal(grid: number[][]): number[][] {
    const n: number = grid.length;
        const result: number[][] = [];

        for (let i = 0; i < n - 2; i++) {
            result[i] = [];
            for (let j = 0; j < n - 2; j++) {
                let maxVal: number = Number.MIN_SAFE_INTEGER;
                for (let r = i; r < i + 3; r++) {
                    for (let c = j; c < j + 3; c++) {
                        maxVal = Math.max(maxVal, grid[r][c]);
                    }
                }
                result[i].push(maxVal);
            }
        }

        return result;
};