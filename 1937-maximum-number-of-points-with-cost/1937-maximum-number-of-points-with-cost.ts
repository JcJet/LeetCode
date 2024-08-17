function maxPoints(points: number[][]): number {
    const m = points.length;
    const n = points[0].length;
    
    // Initialize DP table
    let dp = [...points[0]];
    
    for (let i = 1; i < m; i++) {
        const newDp = new Array(n).fill(0);
        
        // Calculate left max
        let leftMax = 0;
        for (let j = 0; j < n; j++) {
            leftMax = Math.max(leftMax - 1, dp[j]);
            newDp[j] = leftMax + points[i][j];
        }
        
        // Calculate right max
        let rightMax = 0;
        for (let j = n - 1; j >= 0; j--) {
            rightMax = Math.max(rightMax - 1, dp[j]);
            newDp[j] = Math.max(newDp[j], rightMax + points[i][j]);
        }
        
        dp = newDp;
    }
    
    return Math.max(...dp);
}