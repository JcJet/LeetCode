function longestCommonSubsequence(text1: string, text2: string): number {
    const m = text1.length; 
    const n = text2.length; 

    const dp = new Array(m); 
    for(let i = 0; i < m; i++) { 
        dp[i] = new Array(n).fill(-1);
    } 

    const solve = (a: string, b: string, m: number, n: number) => { 
        if ( m === 0 || n === 0) 
            return 0; 

        if(dp[m-1][n-1] != -1) 
            return dp[m-1][n-1] 

        if(a[m-1] === b[n-1]) 
            return dp[m-1][n-1] = 1 + solve(a, b, m-1, n-1) 
        
        return dp[m-1][n-1] = Math.max(solve(a, b, m-1, n), solve(a, b, m, n-1))
    } 

    return solve(text1, text2, text1.length, text2.length);
};