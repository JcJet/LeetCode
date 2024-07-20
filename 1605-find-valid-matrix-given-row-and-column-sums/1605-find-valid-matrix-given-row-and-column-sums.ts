function restoreMatrix(rowSum: number[], colSum: number[]): number[][] {
    const m = rowSum.length
    const n = colSum.length
    const result: number[][] = Array.from({ length: m }, () => Array(n).fill(0))

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const minVal = Math.min(rowSum[i], colSum[j])
            result[i][j] = minVal
            rowSum[i] -= minVal
            colSum[j] -= minVal
        }
    }

    return result
}