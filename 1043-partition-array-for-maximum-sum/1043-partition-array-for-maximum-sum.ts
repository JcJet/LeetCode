function maxSumAfterPartitioning(arr: number[], k: number): number {
    let n = arr.length;
    let jak: number[] = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        let max_val = 0;
        for (let j = 1; j <= Math.min(i, k); j++) {
            max_val = Math.max(max_val, arr[i - j]);
            jak[i] = Math.max(jak[i], jak[i - j] + max_val * j);
        }
    }
    return jak[n];
};