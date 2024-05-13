const matrixScore = (grid: number[][]): number => {
    const N = grid.length;
    const M = grid[0].length;

    if (N === 1 && M === 1) return 1;

    // Flip rows to maximise most significant digit
    for (let i = 0; i < N; i++) {
        if (grid[i][0] === 0) {
            for (let j = 0; j < M; j++) {
                grid[i][j] = (grid[i][j] + 1) % 2;
            }
        }
    }

    // flip columns if we create more 1s instead of 0s
    for (let i = 1; i < M; i++) {
        let countOnes = grid.map((row) => row[i]).reduce((p, v) => p + v, 0);
        if (countOnes < N - countOnes) {
            for (let j = 0; j < N; j++) {
                grid[j][i] = (grid[j][i] + 1) % 2;
            }
        }
    }

    const binaries = grid.map((row: number[]) =>
        row.reduce((p, v, i) => p + (v << (M - i - 1)), 0)
    );

    return binaries.reduce((p, v) => p + v, 0);
};